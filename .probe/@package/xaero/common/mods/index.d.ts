import { $Level_ } from "@package/net/minecraft/world/level";
import { $Registry } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $SupportOpenPartiesAndClaims } from "@package/xaero/common/mods/pac";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as pac from "@package/xaero/common/mods/pac";

declare module "@package/xaero/common/mods" {
    export class $SupportXaeroWorldmap {
    }
    export class $SupportIris {
        constructor();
    }
    export class $SupportMods {
        static checkForMinimapDuplicates(arg0: string): void;
        shouldUseWorldMapChunks(): boolean;
        framedBlocks(): boolean;
        shouldUseWorldMapCaveChunks(): boolean;
        worldmap(): boolean;
        pac(): boolean;
        supportIris: $SupportIris;
        iris: boolean;
        xaeroPac: $SupportOpenPartiesAndClaims;
        optifine: boolean;
        ftbTeams: boolean;
        supportFramedBlocks: $SupportFramedBlocks;
        vivecraft: boolean;
        worldmapSupport: $SupportXaeroWorldmap;
        constructor(arg0: $IXaeroMinimap);
    }
    export class $SupportFramedBlocks {
        onWorldChange(): void;
        isFrameBlock(arg0: $Level_, arg1: $Registry<$Block_>, arg2: $BlockState_): boolean;
        unpackFramedBlock(arg0: $Level_, arg1: $Registry<$Block_>, arg2: $BlockState_, arg3: $BlockEntity): $BlockState;
        constructor();
    }
}
