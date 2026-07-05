import { $Level_, $Level, $EntityGetter } from "@package/net/minecraft/world/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $Vec3i } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $VisualizationLevel } from "@package/dev/engine_room/flywheel/api/visualization";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $LevelChunk, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Runnable_ } from "@package/java/lang";
import { $ArrayList, $Collection_, $List } from "@package/java/util";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/foundation/virtualWorld" {
    export class $VirtualRenderWorld extends $Level implements $VisualizationLevel {
        clear(): void;
        getBlockState(arg0: number, arg1: number, arg2: number): $BlockState;
        static nextMultipleOf16(arg0: number): number;
        runLightEngine(): void;
        setBlockEntities(arg0: $Collection_<$BlockEntity>): void;
        resetExternalLight(): void;
        setExternalLight(arg0: number): void;
        getAnyChunkImmediately(arg0: number, arg1: number): $ChunkAccess;
        getChunkAtImmediately(arg0: number, arg1: number): $LevelChunk;
        supportsVisualization(): boolean;
        self(): $EntityGetter;
        getChunk(arg0: number, arg1: number): $ChunkAccess;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: $Vec3i, arg4: $Runnable_);
        set blockEntities(value: $Collection_<$BlockEntity>);
        set externalLight(value: number);
    }
}
