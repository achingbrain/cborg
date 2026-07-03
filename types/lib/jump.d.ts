/**
 * @param {Token} token
 * @returns {Uint8Array<ArrayBuffer>|undefined}
 */
export function quickEncodeToken(token: Token): Uint8Array<ArrayBuffer> | undefined;
/** @type {((data:Uint8Array, pos:number, minor:number, options?:DecodeOptions) => any)[]} */
export const jump: ((data: Uint8Array, pos: number, minor: number, options?: DecodeOptions) => any)[];
/** @type {Token[]} */
export const quick: Token[];
export type DecodeOptions = import("../interface.js").DecodeOptions;
import { Token } from './token.js';
//# sourceMappingURL=jump.d.ts.map