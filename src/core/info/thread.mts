import { Buffer } from "node:buffer";
import { createHash } from "node:crypto";
import { parentPort } from "node:worker_threads";

const workerPort = parentPort;

if (workerPort) {
	workerPort.on("message", (message) => {
		const { algorithm, buffer } = message.value;
		const hash = createHash(algorithm);
		hash.update(Buffer.from(buffer));
		const arrayBuffer = hash.digest().buffer;
		// Transferring buffer here for consistency, but considering buffer size it might be faster to just leave it for copying, needs perf test
		workerPort.postMessage({ id: message.id, value: arrayBuffer }, [arrayBuffer]);
	});
} else {
	throw new Error("Worker port is not available");
}
