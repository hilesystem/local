import { mkdir as j, stat as x, writeFile as z, readdir as F, access as Y, readFile as y, truncate as X, rename as H, rm as U, lstat as q } from "node:fs/promises";
import { dirname as v, normalize as G, join as R, resolve as Q, extname as Z, parse as L, basename as k } from "node:path";
import tt, { constants as a } from "node:fs";
import { getHashes as et, createHash as rt } from "node:crypto";
import { homedir as nt } from "node:os";
import c from "node:assert";
async function p(t, e = "0777", r = !0) {
  try {
    return await j(t, { mode: e, recursive: r }), !0;
  } catch (n) {
    return n;
  }
}
async function l(t) {
  try {
    return [await x(t), void 0];
  } catch (e) {
    return [void 0, e];
  }
}
async function h(t, e, r = null) {
  try {
    return await z(t, e, r), !0;
  } catch (n) {
    return n;
  }
}
async function A(t, e = "0777") {
  const [r, n] = await l(t);
  if (!n && r.isFile())
    return !0;
  const i = v(t);
  if (n && n.code === "ENOENT") {
    const s = await p(i, e);
    if (s !== !0)
      return s;
    const u = await h(t, "", { mode: e, flag: "w" });
    return u !== !0 ? u : !0;
  }
  if (r.isDirectory())
    return await h(t, "", { mode: e, flag: "w" });
  try {
    await F(i);
    return;
  } catch (s) {
    return s;
  }
}
function it(t) {
  return t instanceof Error ? "code" in t && "errno" in t && "path" in t && "syscall" in t ? {
    cause: {
      code: t.code,
      values: {
        errno: t.errno,
        path: t.path,
        syscall: t.syscall
      }
    }
  } : { cause: t } : { cause: t };
}
async function f(t, e) {
  try {
    return await Y(e, t), !0;
  } catch (r) {
    return r;
  }
}
async function $(t) {
  var e, r;
  if (((e = process == null ? void 0 : process.permission) == null ? void 0 : e.has("fs.read")) !== void 0) {
    const n = (r = process.permission) == null ? void 0 : r.has("fs.read", t);
    if (n !== void 0)
      return n;
  }
  return f(a.R_OK, t);
}
const st = [
  // # All
  "^npm-debug\\.log$",
  // Error log for npm
  "^\\..*\\.swp$",
  // Swap file for vim state
  // # macOS
  "^\\.DS_Store$",
  // Stores custom folder attributes
  "^\\.AppleDouble$",
  // Stores additional file resources
  "^\\.LSOverride$",
  // Contains the absolute path to the app to be used
  "^Icon\\r$",
  // Custom Finder icon: http://superuser.com/questions/298785/icon-file-on-os-x-desktop
  "^\\._.*",
  // Thumbnail
  "^\\.Spotlight-V100(?:$|\\/)",
  // Directory that might appear on external disk
  "\\.Trashes",
  // File that might appear on external disk
  "^__MACOSX$",
  // Resource fork
  // # Linux
  "~$",
  // Backup file
  // # Windows
  "^Thumbs\\.db$",
  // Image file cache
  "^ehthumbs\\.db$",
  // Folder config file
  "^Desktop\\.ini$",
  // Stores custom folder attributes
  "@eaDir$",
  // Synology Diskstation "hidden" folder where the server stores thumbnails
  "^\\$RECYCLE.BIN$",
  // Special folder with columns like Date deleted and Original location
  "^System Volume Information$"
], ut = new RegExp(st.join("|"));
function ct(t) {
  return ut.test(t);
}
function ot(t) {
  return !ct(t);
}
async function S(t, e = !0) {
  try {
    const r = await F(t);
    return e ? r.filter(ot) : r;
  } catch (r) {
    return r;
  }
}
const at = [
  // macOS
  ".AppleDB",
  ".AppleDesktop",
  ".AppleDouble",
  ".DS_Store",
  ".DocumentRevisions-V100",
  ".LSOverride",
  ".Spotlight-V100",
  ".TemporaryItems",
  ".Trashes",
  ".VolumeIcon.icns",
  // "._*",
  ".apdisk",
  ".com.apple.timemachine.donotpresent",
  ".fseventsd",
  "Network Trash Folder",
  "Temporary Items",
  // Windows
  "$RECYCLE.BIN/",
  // "*.cab",
  // "*.lnk",
  // "*.msi",
  // "*.msix",
  // "*.msm",
  // "*.msp",
  // "*.stackdump",
  "Desktop.ini",
  "Thumbs.db",
  "Thumbs.db:encryptable",
  "desktop.ini",
  "ehthumbs.db",
  "ehthumbs_vista.db",
  // Linux
  // "*~",
  // ".Trash-*",
  ".directory"
  // ".fuse_hidden*",
  // ".nfs*",
];
function ft(t) {
  const e = new Set(t);
  return t.length = 0, e.forEach((r) => {
    for (const n of at)
      r && (r === n || r.match(RegExp(n))) && e.delete(r);
  }), e.size === 0;
}
async function lt(t, e = !0) {
  const r = await $(t);
  if (r !== !0)
    throw new Error(r.message, it(r));
  let n = await S(t);
  if (n instanceof Error)
    throw n;
  return n.length === 0 ? !0 : e ? ft(n) : !1;
}
async function ht(t) {
  return f(a.X_OK, t);
}
async function yt(t) {
  return f(a.F_OK, t);
}
async function mt(t) {
  var e, r;
  if (((e = process == null ? void 0 : process.permission) == null ? void 0 : e.has("fs.write")) !== void 0) {
    const n = (r = process.permission) == null ? void 0 : r.has("fs.write", t);
    if (n !== void 0)
      return n;
  }
  return f(a.W_OK, t);
}
async function m(t, e) {
  if (!et().includes(e))
    throw new TypeError(`Digest algorithm [${e}] is not supported.`);
  return rt(e).update(await y(t)).digest("hex");
}
function dt(t) {
  let e = [], r;
  for (let s = 0; s < 256; s++) {
    r = s;
    for (let u = 0; u < 8; u++)
      r = 1 & r ? 3988292384 ^ r >>> 1 : r >>> 1;
    e[s] = r;
  }
  let n = -1, i = 0;
  for (; i < t.length; i++)
    n = n >>> 8 ^ e[255 & (n ^ t.charCodeAt(i))];
  return (-1 ^ n) >>> 0;
}
async function _(t) {
  return dt((await y(t)).toString("binary")).toString(16);
}
async function D(t) {
  return m(t, "md5");
}
async function P(t) {
  return m(t, "sha1");
}
async function C(t) {
  return m(t, "sha256");
}
async function B(t) {
  return m(t, "sha512");
}
async function Et(t) {
  return await Promise.all([
    _(t),
    D(t),
    P(t),
    C(t),
    B(t)
  ]).then(
    ([
      //
      e,
      r,
      n,
      i,
      s
    ]) => ({ crc32: e, md5: r, sha1: n, sha256: i, sha512: s })
  );
}
async function wt(t, e = !1) {
  const r = await x(t);
  return e ? r.size.toLocaleString("en").replace(/,/g, "_") : r.size;
}
async function St(t) {
  return f(a.X_OK, t);
}
async function gt(t) {
  return f(a.R_OK, t);
}
async function Ot(t) {
  return f(a.F_OK, t);
}
async function It(t) {
  return f(a.W_OK, t);
}
async function bt(t, e = 0) {
  try {
    return await X(t, e), !0;
  } catch (r) {
    return r;
  }
}
function O(t, ...e) {
  let r;
  return Array.isArray(t) ? r = t.map((n) => n.toString()) : r = [t.toString()], e.length && (r = r.concat(e.map((n) => n.toString()))), G(R(...r));
}
async function Nt(t) {
  const e = await S(t);
  return Array.isArray(e) ? (await Promise.all(
    e.map(async (n) => {
      const i = O(t, n), [s, u] = await l(i);
      if (!u && s.isDirectory())
        return n;
    })
  )).filter((n) => n) : e;
}
async function Tt(t) {
  const e = await S(t);
  return Array.isArray(e) ? (await Promise.all(
    e.map(async (n) => {
      const i = O(t, n), [s, u] = await l(i);
      if (!u && !s.isDirectory())
        return n;
    })
  )).filter((n) => n) : e;
}
async function xt(t, e) {
  try {
    return await H(t, e), !0;
  } catch (r) {
    return r;
  }
}
const I = nt();
function M(t) {
  return I ? String(t).replace(/^~(?=$|\/|\\)/, I) : String(t);
}
function Ft(t, ...e) {
  let r;
  return Array.isArray(t) ? r = t.map((n) => n.toString()) : r = [t.toString()], e.length && (r = r.concat(e.map((n) => n.toString()))), M(Q(...r));
}
function vt(t) {
  return Z(t).substring(1);
}
function Rt(t) {
  return L(t).name;
}
function pt(t) {
  return k(t);
}
function At(t) {
  return v(t);
}
async function $t(t) {
  try {
    return (await y(t, "base64")).toString();
  } catch (e) {
    return e;
  }
}
async function _t(t) {
  try {
    const e = await y(t, "binary");
    return Buffer.from(e);
  } catch (e) {
    return e;
  }
}
async function W(t) {
  try {
    return (await y(M(t), "utf8")).toString();
  } catch (e) {
    return e;
  }
}
const b = process.platform === "win32";
function Dt(t) {
  ["unlink", "chmod", "stat", "lstat", "rmdir", "readdir"].forEach((r) => {
    t[r] = t[r] || tt[r];
  }), t.maxBusyTries = t.maxBusyTries || 3;
}
function J(t, e, r) {
  let n = 0, i = r, s = e;
  typeof s == "function" && (i = s, s = {}), c(t, "remove(): missing path"), c(s, "remove(): invalid options argument provided"), Dt(s), N(t, s, function u(o) {
    if (o) {
      if ((o.code === "EBUSY" || o.code === "ENOTEMPTY" || o.code === "EPERM") && n < s.maxBusyTries) {
        n++;
        const d = n * 100;
        setTimeout(() => N(t, s, u), d);
        return;
      }
      if (o.code === "ENOENT") {
        i(null);
        return;
      }
    }
    i(o);
  });
}
function N(t, e, r) {
  c(t), c(e), c(typeof r == "function"), e.lstat(t, (n, i) => {
    if (n && n.code === "ENOENT")
      return r(null);
    if (n && n.code === "EPERM" && b)
      return T(t, e, n, r);
    if (i && i.isDirectory())
      return E(t, e, n, r);
    e.unlink(t, (s) => {
      if (s) {
        if (s.code === "ENOENT")
          return r(null);
        if (s.code === "EPERM")
          return b ? T(t, e, s, r) : E(t, e, s, r);
        if (s.code === "EISDIR")
          return E(t, e, s, r);
      }
      return r(s);
    });
  });
}
function T(t, e, r, n) {
  return c(t), c(e), c(typeof n == "function"), r && c(r instanceof Error), e.chmod(t, 438, (i) => {
    i ? i.code === "ENOENT" ? n(null) : n(r) : e.stat(
      t,
      (s, u) => {
        s ? s.code === "ENOENT" ? n(null) : n(r) : u.isDirectory() ? E(t, e, r, n) : e.unlink(t, n);
      }
    );
  }), null;
}
function E(t, e, r, n) {
  return c(t), c(e), r && c(r instanceof Error), c(typeof n == "function"), e.rmdir(t, (i) => {
    i && (i.code === "ENOTEMPTY" || i.code === "EEXIST" || i.code === "EPERM") ? Pt(t, e, n) : i && i.code === "ENOTDIR" ? n(r) : n(i);
  }), null;
}
function Pt(t, e, r) {
  c(t), c(e), c(typeof r == "function"), e.readdir(t, (n, i) => {
    if (n)
      return r(n);
    let s = i.length, u = null;
    if (s === 0)
      return e.rmdir(t, r);
    i.forEach((o) => {
      J(R(t, o), e, (d) => {
        if (!u) {
          if (d) {
            r(u = d);
            return;
          }
          --s, s === 0 && e.rmdir(t, r);
        }
      });
    });
  });
}
async function K(t) {
  return new Promise((e) => {
    J(t, {}, (r) => {
      e(r || !0);
    });
  });
}
function Ct(t) {
  K(t).then(() => {
  }).catch(() => {
  });
}
async function Bt(t, e) {
  try {
    await U(t, {
      force: !0,
      recursive: !0,
      ...e
    });
  } catch {
  }
}
async function Mt(t) {
  try {
    return [await q(t), void 0];
  } catch (e) {
    return [void 0, e];
  }
}
async function Wt(t) {
  const [e, r] = await l(t);
  return r ? !1 : e.isDirectory();
}
async function V(t) {
  const [e, r] = await l(t);
  return r ? !1 : e.isFile();
}
async function Jt(t) {
  const [e] = await l(t);
  return !!e;
}
async function Kt(t, e, r = null) {
  if (!await V(t)) {
    const s = await A(t);
    if (s !== !0)
      return s;
  }
  const i = await W(t);
  return i instanceof Error ? i : new Promise((s, u) => {
    setTimeout(() => {
      h(t, `${String(i)}${String(e)}`, r).then(() => {
        s(!0);
      }).catch((o) => {
        u(o);
      });
    }, 1);
  });
}
function Vt(t) {
  return Object.keys(t).sort((e, r) => e.localeCompare(r));
}
function g(t) {
  return t !== null && typeof t == "object" && !Array.isArray(t);
}
function w(t, e = !0) {
  if (!g(t))
    return Array.isArray(t) ? t.map((n) => w(n, e)) : t;
  const r = Vt(t);
  return r.length ? r.reduce((n, i) => (e && g(t[i]) || e && Array.isArray(t[i]) ? n[i] = w(t[i], e) : n[i] = t[i], n), {}) : t;
}
async function jt(t, e, r = null, n) {
  let i, s = e;
  try {
    n ? (n.sort && (g(e) ? s = w(JSON.parse(JSON.stringify(e))) : Array.isArray(e) && (s = JSON.parse(JSON.stringify(e)))), n.space && (i = JSON.stringify(s, null, n.space))) : i = JSON.stringify(s);
  } catch (u) {
    return u;
  }
  return h(t, i, r);
}
class Gt {
  constructor() {
    this.absolutePathFrom = Ft, this.createDirectory = p, this.createFile = A, this.dirIsExecutable = ht, this.dirIsReadable = $, this.dirIsVisible = yt, this.dirIsWritable = mt, this.dirIsEmpty = lt, this.getLinkStatus = Mt, this.getStatus = l, this.isDirExists = Wt, this.isFileExists = V, this.isPathExists = Jt, this.fileExtension = vt, this.fileName = Rt, this.fileNameExt = pt, this.filePath = At, this.fileIsExecutable = St, this.fileIsReadable = gt, this.fileIsVisible = Ot, this.fileIsWritable = It, this.fileTruncate = bt, this.hash = m, this.hashCrc32 = _, this.hashMd5 = D, this.hashMulti = Et, this.hashSha1 = P, this.hashSha256 = C, this.hashSha512 = B, this.listContents = S, this.listDirectories = Nt, this.listFiles = Tt, this.move = xt, this.pathFrom = O, this.readFileToBase64 = $t, this.readFileToBuffer = _t, this.readFileToString = W, this.remove = K, this.removeNonBlocking = Ct, this.removeSilent = Bt, this.size = wt, this.writeFile = h, this.writeFileTail = Kt, this.writeJson = jt;
  }
}
export {
  Gt as HileSystemLocal,
  Ft as absolutePathFrom,
  p as createDirectory,
  A as createFile,
  lt as dirIsEmpty,
  ht as dirIsExecutable,
  $ as dirIsReadable,
  yt as dirIsVisible,
  mt as dirIsWritable,
  vt as fileExtension,
  St as fileIsExecutable,
  gt as fileIsReadable,
  Ot as fileIsVisible,
  It as fileIsWritable,
  Rt as fileName,
  pt as fileNameExt,
  At as filePath,
  bt as fileTruncate,
  Mt as getLinkStatus,
  l as getStatus,
  m as hash,
  _ as hashCrc32,
  D as hashMd5,
  Et as hashMulti,
  P as hashSha1,
  C as hashSha256,
  B as hashSha512,
  Wt as isDirExists,
  V as isFileExists,
  Jt as isPathExists,
  S as listContents,
  Nt as listDirectories,
  Tt as listFiles,
  xt as move,
  O as pathFrom,
  $t as readFileToBase64,
  _t as readFileToBuffer,
  W as readFileToString,
  K as remove,
  Ct as removeNonBlocking,
  Bt as removeSilent,
  wt as size,
  h as writeFile,
  Kt as writeFileTail,
  jt as writeJson
};
//# sourceMappingURL=index.mjs.map
