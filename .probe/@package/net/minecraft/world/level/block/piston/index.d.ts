import { $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState, $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/piston" {
    export class $PistonStructureResolver {
        resolve(): boolean;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToPush(): $List<$BlockPos>;
        /**
         * @return all block positions to be destroyed by the piston
         */
        getToDestroy(): $List<$BlockPos>;
        getPushDirection(): $Direction;
        static MAX_PUSH_DEPTH: number;
        constructor(level: $Level_, pistonPos: $BlockPos_, pistonDirection: $Direction_, extending: boolean);
        get toPush(): $List<$BlockPos>;
        get toDestroy(): $List<$BlockPos>;
        get pushDirection(): $Direction;
    }
    export class $PistonMovingBlockEntity extends $BlockEntity {
        static tick(level: $Level_, pos: $BlockPos_, state: $BlockState_, blockEntity: $PistonMovingBlockEntity): void;
        getDirection(): $Direction;
        /**
         * @return whether this piston is extending
         */
        isSourcePiston(): boolean;
        /**
         * Removes the piston's BlockEntity and stops any movement
         */
        finalTick(): void;
        getMovedState(): $BlockState;
        getCollisionShape(level: $BlockGetter, pos: $BlockPos_): $VoxelShape;
        getLastTicked(): number;
        getYOff(progress: number): number;
        getXOff(progress: number): number;
        getZOff(progress: number): number;
        /**
         * @return whether this piston is extending
         */
        isExtending(): boolean;
        getProgress(progress: number): number;
        getMovementDirection(): $Direction;
        static TICK_MOVEMENT: number;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, blockState: $BlockState_);
        constructor(pos: $BlockPos_, blockState: $BlockState_, movedState: $BlockState_, direction: $Direction_, extending: boolean, isSourcePiston: boolean);
        get direction(): $Direction;
        get sourcePiston(): boolean;
        get movedState(): $BlockState;
        get lastTicked(): number;
        get extending(): boolean;
        get movementDirection(): $Direction;
    }
}
