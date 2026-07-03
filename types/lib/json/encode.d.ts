export type EncodeOptions = import("../../interface.js").EncodeOptions;
export type ByteWriter = import("../../interface.js").ByteWriter;
export type Token = import("../token.js").Token;
/**
 * @param {any} data
 * @param {EncodeOptions} [options]
 * @returns {Uint8Array<ArrayBuffer>}
 */
export function encode(data: any, options?: EncodeOptions): Uint8Array<ArrayBuffer>;
//# sourceMappingURL=encode.d.ts.map