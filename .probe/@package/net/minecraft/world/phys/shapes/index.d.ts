import { $BlockPos_, $Direction$Axis_, $Direction_, $Direction, $AxisCycle_ } from "@package/net/minecraft/core";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $VoxelShapeAccess, $DiscreteVSAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $VoxelShapeAccessor } from "@package/com/copycatsplus/copycats/mixin/copycat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $List } from "@package/java/util";
import { $AABB, $Vec3_, $AABB_, $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/phys/shapes" {
    export class $DiscreteVoxelShape$IntFaceConsumer {
    }
    export interface $DiscreteVoxelShape$IntFaceConsumer {
        consume(direction: $Direction_, x: number, y: number, z: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntFaceConsumer}.
     */
    export type $DiscreteVoxelShape$IntFaceConsumer_ = ((arg0: $Direction, arg1: number, arg2: number, arg3: number) => void);
    export class $DiscreteVoxelShape implements $DiscreteVSAccess {
        isEmpty(): boolean;
        fill(xSize: number, ySize: number, zSize: number): void;
        getSize(axis: $Direction$Axis_): number;
        isFull(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFull(x: number, y: number, z: number): boolean;
        forAllEdges(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        forAllFaces(faceConsumer: $DiscreteVoxelShape$IntFaceConsumer_): void;
        forAllBoxes(consumer: $DiscreteVoxelShape$IntLineConsumer_, combine: boolean): void;
        lastFull(axis: $Direction$Axis_): number;
        lastFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_, y: number, z: number): number;
        firstFull(axis: $Direction$Axis_): number;
        isFullWide(rotation: $AxisCycle_, x: number, y: number, z: number): boolean;
        isFullWide(x: number, y: number, z: number): boolean;
        getYSize(): number;
        getZSize(): number;
        getXSize(): number;
        get empty(): boolean;
        get YSize(): number;
        get ZSize(): number;
        get XSize(): number;
    }
    export class $CollisionContext {
        static of(entity: $Entity): $CollisionContext;
        static empty(): $CollisionContext;
    }
    export interface $CollisionContext {
        isHoldingItem(item: $Item_): boolean;
        canStandOnFluid(fluid1: $FluidState, fluid2: $FluidState): boolean;
        isDescending(): boolean;
        isAbove(shape: $VoxelShape, pos: $BlockPos_, canAscend: boolean): boolean;
        get descending(): boolean;
    }
    export class $VoxelShape implements $VoxelShapeAccessor, $VoxelShapeAccess {
        min(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        min(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_): number;
        max(axis: $Direction$Axis_, primaryPosition: number, arg2: number): number;
        isEmpty(): boolean;
        bounds(): $AABB;
        optimize(): $VoxelShape;
        collide(movementAxis: $Direction$Axis_, collisionBox: $AABB_, desiredOffset: number): number;
        move(xOffset: number, arg1: number, yOffset: number): $VoxelShape;
        singleEncompassing(): $VoxelShape;
        forAllEdges(action: $Shapes$DoubleLineConsumer_): void;
        forAllBoxes(action: $Shapes$DoubleLineConsumer_): void;
        clip(startVec: $Vec3_, endVec: $Vec3_, pos: $BlockPos_): $BlockHitResult;
        getCoords(axis: $Direction$Axis_): $DoubleList;
        closestPointTo(point: $Vec3_): ($Vec3) | undefined;
        getFaceShape(side: $Direction_): $VoxelShape;
        toAabbs(): $List<$AABB>;
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setShape(shape: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
        copycats$callGetCoords(axis: $Direction$Axis_): $DoubleList;
        copycats$setShape(shape: $DiscreteVoxelShape): void;
        copycats$getShape(): $DiscreteVoxelShape;
        get empty(): boolean;
    }
    export class $DiscreteVoxelShape$IntLineConsumer {
    }
    export interface $DiscreteVoxelShape$IntLineConsumer {
        consume(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DiscreteVoxelShape$IntLineConsumer}.
     */
    export type $DiscreteVoxelShape$IntLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
    export class $Shapes$DoubleLineConsumer {
    }
    export interface $Shapes$DoubleLineConsumer {
        consume(minX: number, arg1: number, minY: number, arg3: number, minZ: number, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Shapes$DoubleLineConsumer}.
     */
    export type $Shapes$DoubleLineConsumer_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => void);
}
