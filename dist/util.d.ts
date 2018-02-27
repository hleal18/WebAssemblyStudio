export declare function toAddress(n: number): string;
export declare function padRight(s: string, n: number, c: string): string;
export declare function padLeft(s: string, n: number, c: string): string;
export declare function isBranch(instr: any): boolean;
export declare function decodeRestrictedBase64ToBytes(encoded: string): Uint8Array;
export declare function layout(): void;
export declare function assert(c: any, message?: string): void;
export declare function clamp(x: number, min: number, max: number): number;
export declare function contextify(src: string, thisArg?: any, context?: {
    [key: string]: any;
}, modules?: {
    [key: string]: any;
}): () => any;
