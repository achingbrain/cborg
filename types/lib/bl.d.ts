export class Bl {
    /**
     * @param {number} [chunkSize]
     */
    constructor(chunkSize?: number);
    chunkSize: number;
    /** @type {number} */
    cursor: number;
    /** @type {number} */
    maxCursor: number;
    /** @type {(Uint8Array<ArrayBuffer>|number[])[]} */
    chunks: (Uint8Array<ArrayBuffer> | number[])[];
    /** @type {Uint8Array<ArrayBuffer>|number[]|null} */
    _initReuseChunk: Uint8Array<ArrayBuffer> | number[] | null;
    reset(): void;
    /**
     * @param {Uint8Array<ArrayBuffer>|number[]} bytes
     */
    push(bytes: Uint8Array<ArrayBuffer> | number[]): void;
    /**
     * @param {boolean} [reset]
     * @returns {Uint8Array<ArrayBuffer>}
     */
    toBytes(reset?: boolean): Uint8Array<ArrayBuffer>;
}
/**
 * U8Bl is a buffer list that writes directly to a user-provided Uint8Array.
 * It provides the same interface as Bl but writes to a fixed destination.
 */
export class U8Bl {
    /**
     * @param {Uint8Array<ArrayBuffer>} dest
     */
    constructor(dest: Uint8Array<ArrayBuffer>);
    dest: Uint8Array<ArrayBuffer>;
    /** @type {number} */
    cursor: number;
    /** @type {Array<Uint8Array<ArrayBuffer>>} */
    chunks: Array<Uint8Array<ArrayBuffer>>;
    reset(): void;
    /**
     * @param {Uint8Array|number[]} bytes
     */
    push(bytes: Uint8Array | number[]): void;
    /**
     * @param {boolean} [reset]
     * @returns {Uint8Array<ArrayBuffer>}
     */
    toBytes(reset?: boolean): Uint8Array<ArrayBuffer>;
}
//# sourceMappingURL=bl.d.ts.map