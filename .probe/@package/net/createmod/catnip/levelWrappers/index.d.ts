import { $ServerLevelAccessor, $Level, $EntityGetter, $LevelAccessor, $Level_ } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkSource } from "@package/net/minecraft/world/level/chunk";
import { $ArrayList, $List, $Map, $Set } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockSnapshot } from "@package/net/neoforged/neoforge/common/util";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Iterable } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $BlockEntity, $TickingBlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/createmod/catnip/levelWrappers" {
    export class $SchematicLevel extends $WrappedLevel implements $ServerLevelAccessor, $SchematicLevelAccessor {
        getBounds(): $BoundingBox;
        getLevel(): $ServerLevel;
        getBlockEntities(): $Iterable<$BlockEntity>;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getAllPositions(): $Set<$BlockPos>;
        getEntityList(): $List<$Entity>;
        setBounds(arg0: $BoundingBox): void;
        addFreshEntityWithPassengers(arg0: $Entity): void;
        self(): $EntityGetter;
        restoringBlockSnapshots: boolean;
        oThunderLevel: number;
        static LONG_PARTICLE_CLIP_RANGE: number;
        static ATTACHMENTS_NBT_KEY: string;
        renderMode: boolean;
        thunderLevel: number;
        random: $RandomSource;
        capturedBlockSnapshots: $ArrayList<$BlockSnapshot>;
        static OVERWORLD: $ResourceKey<$Level>;
        static TICKS_PER_DAY: number;
        static MAX_ENTITY_SPAWN_Y: number;
        static NETHER: $ResourceKey<$Level>;
        oRainLevel: number;
        anchor: $BlockPos;
        static RESOURCE_KEY_CODEC: $Codec<$ResourceKey<$Level>>;
        static MAX_BRIGHTNESS: number;
        static END: $ResourceKey<$Level>;
        static MAX_LEVEL_SIZE: number;
        static SHORT_PARTICLE_CLIP_RANGE: number;
        static MIN_ENTITY_SPAWN_Y: number;
        blockEntityTickers: $List<$TickingBlockEntity>;
        rainLevel: number;
        captureBlockSnapshots: boolean;
        constructor(arg0: $Level_);
        constructor(arg0: $BlockPos_, arg1: $Level_);
        get level(): $ServerLevel;
        get blockEntities(): $Iterable<$BlockEntity>;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get allPositions(): $Set<$BlockPos>;
        get entityList(): $List<$Entity>;
    }
    export class $WrappedLevel extends $Level {
        getLevel(): $Level;
        setChunkSource(arg0: $ChunkSource): void;
        self(): $EntityGetter;
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
        constructor(arg0: $Level_);
        get level(): $Level;
        set chunkSource(value: $ChunkSource);
    }
    export class $SchematicLevelAccessor {
    }
    export interface $SchematicLevelAccessor extends $LevelAccessor {
        getBounds(): $BoundingBox;
        getBlockEntities(): $Iterable<$BlockEntity>;
        getRenderedBlockEntities(): $Iterable<$BlockEntity>;
        getBlockMap(): $Map<$BlockPos, $BlockState>;
        getAllPositions(): $Set<$BlockPos>;
        getEntityList(): $List<$Entity>;
        setBounds(arg0: $BoundingBox): void;
        get blockEntities(): $Iterable<$BlockEntity>;
        get renderedBlockEntities(): $Iterable<$BlockEntity>;
        get blockMap(): $Map<$BlockPos, $BlockState>;
        get allPositions(): $Set<$BlockPos>;
        get entityList(): $List<$Entity>;
    }
}
