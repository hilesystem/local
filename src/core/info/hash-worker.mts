import { Buffer } from "node:buffer";
import { Worker } from "node:worker_threads";
import { createHash, Encoding } from "node:crypto";
import { TransferListItem } from "worker_threads";

let create = (algorithm: string) => {
	return async (buffer: any, { outputFormat = "hex" } = {}) => {
		const hash = createHash(algorithm);
		hash.update(buffer, (typeof buffer === "string" ? "utf8" : undefined) as Encoding);

		if (outputFormat === "hex") {
			return hash.digest("hex");
		}

		return hash.digest().buffer;
	};
};

if (Worker !== undefined) {
	// @ts-ignore
	const threadFilePath = new URL("thread.mjs", import.meta.url);

	let worker: Worker; // Lazy
	let taskIdCounter = 0;
	const tasks = new Map();

	const createWorker = () => {
		worker = new Worker(threadFilePath);

		worker.on("message", (message) => {
			const task = tasks.get(message.id);
			tasks.delete(message.id);
			if (tasks.size === 0) {
				worker.unref();
			}

			task(message.value);
		});

		worker.on("error", (error) => {
			// Any error here is effectively an equivalent of segfault and have no scope, so we just throw it on callback level
			throw error;
		});
	};

	const taskWorker = (value: any, transferList: ReadonlyArray<TransferListItem>): Promise<any> =>
		new Promise((resolve) => {
			const id = taskIdCounter++;
			tasks.set(id, resolve);

			if (worker === undefined) {
				createWorker();
			}

			worker.ref();
			worker.postMessage({ id, value }, transferList);
		});

	create =
		(algorithm) =>
		async (source: string | ArrayBuffer, { outputFormat = "hex" } = {}) => {
			let buffer: ArrayBuffer;
			if (typeof source === "string") {
				// Saving one copy operation by writing string to buffer right away and then transferring buffer
				buffer = new ArrayBuffer(Buffer.byteLength(source, "utf8"));
				Buffer.from(buffer).write(source, "utf8");
			} else {
				const finalSource = source instanceof ArrayBuffer ? new Uint8Array(source) : source;

				// Creating a copy of buffer at call time, will be transferred later
				buffer = finalSource.buffer.slice(0); // eslint-disable-line unicorn/prefer-spread
			}

			const result = await taskWorker({ algorithm, buffer }, [buffer]);
			if (outputFormat === "hex") {
				return Buffer.from(result).toString("hex");
			}

			return result;
		};
}

export const sha1 = create("sha1");
export const sha256 = create("sha256");
// export const sha384 = create("sha384");
export const sha512 = create("sha512");

(async () => {
	const result = await sha512("unicorns");
	console.dir({ result });
})();
