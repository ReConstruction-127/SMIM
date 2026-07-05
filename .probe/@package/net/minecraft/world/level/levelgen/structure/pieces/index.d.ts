import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $CompoundTag, $ListTag_, $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StructureTemplateManager } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoundingBox, $StructurePiece, $StructurePieceAccessor } from "@package/net/minecraft/world/level/levelgen/structure";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/pieces" {
    export class $StructurePieceSerializationContext extends $Record {
        resourceManager(): $ResourceManager;
        registryAccess(): $RegistryAccess;
        static fromLevel(level: $ServerLevel): $StructurePieceSerializationContext;
        structureTemplateManager(): $StructureTemplateManager;
        constructor(arg0: $ResourceManager, arg1: $RegistryAccess, arg2: $StructureTemplateManager);
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceSerializationContext}.
     */
    export type $StructurePieceSerializationContext_ = { registryAccess?: $RegistryAccess, resourceManager?: $ResourceManager, structureTemplateManager?: $StructureTemplateManager,  } | [registryAccess?: $RegistryAccess, resourceManager?: $ResourceManager, structureTemplateManager?: $StructureTemplateManager, ];
    export class $PiecesContainer extends $Record {
        static load(tag: $ListTag_, context: $StructurePieceSerializationContext_): $PiecesContainer;
        isEmpty(): boolean;
        save(context: $StructurePieceSerializationContext_): $Tag;
        isInsidePiece(pos: $BlockPos_): boolean;
        pieces(): $List<$StructurePiece>;
        calculateBoundingBox(): $BoundingBox;
        constructor(pieces: $List_<$StructurePiece>);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PiecesContainer}.
     */
    export type $PiecesContainer_ = { pieces?: $List_<$StructurePiece>,  } | [pieces?: $List_<$StructurePiece>, ];
    export interface $StructurePieceType extends RegistryMarked<RegistryTypes.WorldgenStructurePieceTag, RegistryTypes.WorldgenStructurePiece> {}
    export class $StructurePiecesBuilder implements $StructurePieceAccessor {
        clear(): void;
        isEmpty(): boolean;
        build(): $PiecesContainer;
        findCollisionPiece(box: $BoundingBox): $StructurePiece;
        moveInsideHeights(random: $RandomSource, minY: number, maxY: number): void;
        /**
         * @deprecated
         */
        moveBelowSeaLevel(seaLevel: number, minY: number, random: $RandomSource, amount: number): number;
        /**
         * @deprecated
         */
        offsetPiecesVertically(offset: number): void;
        getBoundingBox(): $BoundingBox;
        addPiece(piece: $StructurePiece): void;
        constructor();
        get empty(): boolean;
        get boundingBox(): $BoundingBox;
    }
    export class $StructurePieceType {
        static NETHER_FORTRESS_BRIDGE_STRAIGHT: $StructurePieceType;
        static NETHER_FORTRESS_STAIRS_ROOM: $StructurePieceType;
        static STRONGHOLD_LEFT_TURN: $StructurePieceType;
        static STRONGHOLD_FIVE_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_BRIDGE_END_FILLER: $StructurePieceType;
        static OCEAN_MONUMENT_WING_ROOM: $StructurePieceType;
        static JIGSAW: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_YZ_ROOM: $StructurePieceType;
        static BURIED_TREASURE_PIECE: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_CORRIDOR_STAIRS: $StructurePieceType;
        static OCEAN_MONUMENT_BUILDING: $StructurePieceType;
        static NETHER_FORTRESS_MONSTER_THRONE: $StructurePieceType;
        static STRONGHOLD_LIBRARY: $StructurePieceType;
        static STRONGHOLD_ROOM_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_CROSSING: $StructurePieceType;
        static OCEAN_MONUMENT_ENTRY_ROOM: $StructurePieceType;
        static STRONGHOLD_FILLER_CORRIDOR: $StructurePieceType;
        static JUNGLE_PYRAMID_PIECE: $StructurePieceType;
        static MINE_SHAFT_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_BRIDGE_CROSSING: $StructurePieceType;
        static RUINED_PORTAL: $StructurePieceType;
        static STRONGHOLD_STRAIGHT_STAIRS_DOWN: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_RIGHT_TURN: $StructurePieceType;
        static STRONGHOLD_PORTAL_ROOM: $StructurePieceType;
        static OCEAN_MONUMENT_CORE_ROOM: $StructurePieceType;
        static WOODLAND_MANSION_PIECE: $StructurePieceType;
        static NETHER_FORTRESS_START: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_X_ROOM: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR: $StructurePieceType;
        static STRONGHOLD_CHEST_CORRIDOR: $StructurePieceType;
        static NETHER_FORTRESS_ROOM_CROSSING: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_ENTRANCE: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_SMALL_CORRIDOR_LEFT_TURN: $StructurePieceType;
        static OCEAN_MONUMENT_SIMPLE_ROOM: $StructurePieceType;
        static STRONGHOLD_STRAIGHT: $StructurePieceType;
        static MINE_SHAFT_STAIRS: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_STALK_ROOM: $StructurePieceType;
        static MINE_SHAFT_CORRIDOR: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_XY_ROOM: $StructurePieceType;
        static SHIPWRECK_PIECE: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_Z_ROOM: $StructurePieceType;
        static MINE_SHAFT_ROOM: $StructurePieceType;
        static OCEAN_RUIN: $StructurePieceType;
        static STRONGHOLD_PRISON_HALL: $StructurePieceType;
        static NETHER_FORTRESS_CASTLE_CORRIDOR_T_BALCONY: $StructurePieceType;
        static OCEAN_MONUMENT_DOUBLE_Y_ROOM: $StructurePieceType;
        static NETHER_FOSSIL: $StructurePieceType;
        static IGLOO: $StructurePieceType;
        static OCEAN_MONUMENT_SIMPLE_TOP_ROOM: $StructurePieceType;
        static STRONGHOLD_STAIRS_DOWN: $StructurePieceType;
        static SWAMPLAND_HUT: $StructurePieceType;
        static DESERT_PYRAMID_PIECE: $StructurePieceType;
        static END_CITY_PIECE: $StructurePieceType;
        static STRONGHOLD_START: $StructurePieceType;
        static OCEAN_MONUMENT_PENTHOUSE: $StructurePieceType;
        static STRONGHOLD_RIGHT_TURN: $StructurePieceType;
    }
    export interface $StructurePieceType {
        load(context: $StructurePieceSerializationContext_, tag: $CompoundTag_): $StructurePiece;
    }
    /**
     * Values that may be interpreted as {@link $StructurePieceType}.
     */
    export type $StructurePieceType_ = RegistryTypes.WorldgenStructurePiece | ((arg0: $StructurePieceSerializationContext, arg1: $CompoundTag) => $StructurePiece);
}
