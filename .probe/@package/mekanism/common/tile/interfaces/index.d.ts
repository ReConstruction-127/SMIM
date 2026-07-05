import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos, $GlobalPos } from "@package/net/minecraft/core";
import { $Chunk3D } from "@package/mekanism/api";

declare module "@package/mekanism/common/tile/interfaces" {
    export class $ITileWrapper {
    }
    export interface $ITileWrapper {
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        get level(): $Level;
        get blockPos(): $BlockPos;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
    }
}
