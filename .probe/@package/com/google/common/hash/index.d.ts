
declare module "@package/com/google/common/hash" {
    export class $HashCode {
        asBytes(): number[];
        static fromString(string: string): $HashCode;
        bits(): number;
        asInt(): number;
        static fromBytes(bytes: number[]): $HashCode;
        padToLong(): number;
        asLong(): number;
        static fromInt(hash: number): $HashCode;
        static fromLong(hash: number): $HashCode;
        writeBytesTo(dest: number[], offset: number, maxLength: number): number;
    }
}
