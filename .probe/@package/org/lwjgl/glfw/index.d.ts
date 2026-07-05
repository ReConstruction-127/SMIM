import { $ByteBuffer } from "@package/java/nio";
import { $Struct, $StructBuffer } from "@package/org/lwjgl/system";

declare module "@package/org/lwjgl/glfw" {
    export class $GLFWVidMode$Buffer extends $StructBuffer<$GLFWVidMode, $GLFWVidMode$Buffer> {
        width(): number;
        refreshRate(): number;
        height(): number;
        redBits(): number;
        blueBits(): number;
        greenBits(): number;
        constructor(arg0: number, arg1: number);
        constructor(arg0: $ByteBuffer);
    }
    export class $GLFWVidMode extends $Struct<$GLFWVidMode> {
        static create(arg0: number): $GLFWVidMode;
        static create(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        width(): number;
        refreshRate(): number;
        height(): number;
        static nblueBits(arg0: number): number;
        static nredBits(arg0: number): number;
        redBits(): number;
        blueBits(): number;
        greenBits(): number;
        static ngreenBits(arg0: number): number;
        static nrefreshRate(arg0: number): number;
        static nheight(arg0: number): number;
        static nwidth(arg0: number): number;
        static createSafe(arg0: number): $GLFWVidMode;
        static createSafe(arg0: number, arg1: number): $GLFWVidMode$Buffer;
        static ALIGNOF: number;
        static SIZEOF: number;
        static GREENBITS: number;
        static WIDTH: number;
        static REFRESHRATE: number;
        static HEIGHT: number;
        static REDBITS: number;
        static BLUEBITS: number;
        constructor(arg0: $ByteBuffer);
    }
}
