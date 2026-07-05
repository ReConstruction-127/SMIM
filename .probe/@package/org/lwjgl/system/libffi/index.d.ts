import { $PointerBuffer } from "@package/org/lwjgl";
import { $ByteBuffer } from "@package/java/nio";
import { $MemoryStack, $NativeResource, $Struct } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/system/libffi" {
    export class $FFICIF extends $Struct<$FFICIF> implements $NativeResource {
        flags(): number;
        bytes(): number;
        static create(arg0: number): $FFICIF$Buffer;
        static create(arg0: number, arg1: number): $FFICIF$Buffer;
        static create(arg0: number): $FFICIF;
        static create(): $FFICIF;
        rtype(): $FFIType;
        nargs(): number;
        static nrtype(arg0: number): $FFIType;
        abi(): number;
        static nbytes(arg0: number): number;
        static nabi(arg0: number): number;
        static nnargs(arg0: number): number;
        static narg_types(arg0: number, arg1: number): $PointerBuffer;
        static nflags(arg0: number): number;
        arg_types(arg0: number): $PointerBuffer;
        static malloc(arg0: number): $FFICIF$Buffer;
        static malloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static malloc(arg0: $MemoryStack): $FFICIF;
        static malloc(): $FFICIF;
        static calloc(arg0: number): $FFICIF$Buffer;
        static calloc(): $FFICIF;
        static calloc(arg0: number, arg1: $MemoryStack): $FFICIF$Buffer;
        static calloc(arg0: $MemoryStack): $FFICIF;
        static createSafe(arg0: number): $FFICIF;
        static createSafe(arg0: number, arg1: number): $FFICIF$Buffer;
        close(): void;
        static ARG_TYPES: number;
        static BYTES: number;
        static NARGS: number;
        static ALIGNOF: number;
        static RTYPE: number;
        static SIZEOF: number;
        static ABI: number;
        static FLAGS: number;
        constructor(arg0: $ByteBuffer);
    }
}
