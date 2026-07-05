import { $Structure$Axis_, $Structure$Axis } from "@package/mekanism/common/lib/multiblock";
import { $BlockPos, $BlockPos_, $Direction } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";

declare module "@package/mekanism/common/lib/math/voxel" {
    export class $IShape {
    }
    export interface $IShape {
    }
    export class $VoxelCuboid$WallRelative extends $Enum<$VoxelCuboid$WallRelative> {
        static values(): $VoxelCuboid$WallRelative[];
        static valueOf(name: string): $VoxelCuboid$WallRelative;
        isOnCorner(): boolean;
        isWall(): boolean;
        isOnEdge(): boolean;
        static SIDE: $VoxelCuboid$WallRelative;
        static CORNER: $VoxelCuboid$WallRelative;
        static INVALID: $VoxelCuboid$WallRelative;
        static EDGE: $VoxelCuboid$WallRelative;
        get onCorner(): boolean;
        get wall(): boolean;
        get onEdge(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VoxelCuboid$WallRelative}.
     */
    export type $VoxelCuboid$WallRelative_ = "side" | "edge" | "corner" | "invalid";
    export class $VoxelPlane {
        getMinRow(): number;
        getMaxCol(): number;
        getMaxRow(): number;
        getMinCol(): number;
        size(): number;
        length(): number;
        merge(other: $VoxelPlane): void;
        isFull(): boolean;
        height(): number;
        getAxis(): $Structure$Axis;
        hasFrame(): boolean;
        getMissing(): number;
        isOutside(pos: $BlockPos_): boolean;
        constructor(axis: $Structure$Axis_, pos: $BlockPos_, frame: boolean);
        get minRow(): number;
        get maxCol(): number;
        get maxRow(): number;
        get minCol(): number;
        get full(): boolean;
        get axis(): $Structure$Axis;
        get missing(): number;
    }
    export class $VoxelCuboid$CuboidRelative extends $Enum<$VoxelCuboid$CuboidRelative> {
        static values(): $VoxelCuboid$CuboidRelative[];
        static valueOf(name: string): $VoxelCuboid$CuboidRelative;
        isWall(): boolean;
        static WALLS: $VoxelCuboid$CuboidRelative;
        static OUTSIDE: $VoxelCuboid$CuboidRelative;
        static INSIDE: $VoxelCuboid$CuboidRelative;
        get wall(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $VoxelCuboid$CuboidRelative}.
     */
    export type $VoxelCuboid$CuboidRelative_ = "inside" | "outside" | "walls";
    export class $VoxelCuboid implements $IShape {
        isOnSide(pos: $BlockPos_): boolean;
        setMinPos(minPos: $BlockPos_): void;
        setMaxPos(maxPos: $BlockPos_): void;
        length(): number;
        static from(p1: $VoxelPlane, p2: $VoxelPlane, p1Pos: number, p2Pos: number): $VoxelCuboid;
        width(): number;
        isOnCorner(pos: $BlockPos_): boolean;
        height(): number;
        getMatches(pos: $BlockPos_): number;
        getMaxPos(): $BlockPos;
        getSide(pos: $BlockPos_): $Direction;
        getMinPos(): $BlockPos;
        getCenter(): $BlockPos;
        greaterOrEqual(other: $VoxelCuboid): boolean;
        getRelativeLocation(pos: $BlockPos_): $VoxelCuboid$CuboidRelative;
        asAABB(): $AABB;
        getWallRelative(pos: $BlockPos_): $VoxelCuboid$WallRelative;
        isOnEdge(pos: $BlockPos_): boolean;
        constructor(minPos: $BlockPos_, maxPos: $BlockPos_);
        constructor(length: number, height: number, width: number);
        get center(): $BlockPos;
    }
}
