import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/client/resources/metadata/animation" {
    export class $FrameSize extends $Record {
        width(): number;
        height(): number;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $FrameSize}.
     */
    export type $FrameSize_ = { width?: number, height?: number,  } | [width?: number, height?: number, ];
}
