import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
export * as generators from "@package/net/neoforged/neoforge/client/model/generators";
export * as geometry from "@package/net/neoforged/neoforge/client/model/geometry";
export * as data from "@package/net/neoforged/neoforge/client/model/data";
export * as lighting from "@package/net/neoforged/neoforge/client/model/lighting";

declare module "@package/net/neoforged/neoforge/client/model" {
    export class $ExtraFaceData extends $Record {
        static read(arg0: $JsonElement_, arg1: $ExtraFaceData_): $ExtraFaceData;
        color(): number;
        ambientOcclusion(): boolean;
        blockLight(): number;
        skyLight(): number;
        static CODEC: $Codec<$ExtraFaceData>;
        static COLOR: $Codec<number>;
        static DEFAULT: $ExtraFaceData;
        constructor(color: number, blockLight: number, skyLight: number, ambientOcclusion: boolean);
    }
    /**
     * Values that may be interpreted as {@link $ExtraFaceData}.
     */
    export type $ExtraFaceData_ = { blockLight?: number, color?: number, ambientOcclusion?: boolean, skyLight?: number,  } | [blockLight?: number, color?: number, ambientOcclusion?: boolean, skyLight?: number, ];
}
