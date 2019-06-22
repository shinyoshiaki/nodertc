import { createHash } from "crypto";

const upper = (s: string) => s.toUpperCase();
const colon = (s: string) => s.match(/(.{2})/g).join(":");

/**
 * Create fingerprint of certificate.
 * @param {Buffer} file
 * @param {string} hashname
 * @returns {string}
 */
export default function fingerprint(file: Buffer, hashname: string) {
  const hash = createHash(hashname)
    .update(file)
    .digest("hex");

  return colon(upper(hash));
}
