import { $Level_ } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $PathType_, $NodeEvaluator, $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $Stream } from "@package/java/util/stream";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Set_ } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/ai/navigation" {
    export class $PathNavigation {
        /**
         * Sets the active `Path` to `null`.
         */
        stop(): void;
        /**
         * If on ground or swimming and can swim
         */
        isDone(): boolean;
        /**
         * Gets the actively used `Path`.
         */
        getPath(): $Path;
        /**
         * Sets the active `Path` to `null`.
         */
        tick(): void;
        /**
         * If on ground or swimming and can swim
         */
        isStuck(): boolean;
        /**
         * If on ground or swimming and can swim
         */
        canFloat(): boolean;
        /**
         * Returns a path to the given entity or null
         */
        createPath(entity: $Entity, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(x: number, arg1: number, y: number, arg3: number): $Path;
        /**
         * Returns a path to one of the elements of the stream or null
         */
        createPath(targets: $Stream<$BlockPos_>, accuracy: number): $Path;
        createPath(positions: $Set_<$BlockPos_>, distance: number): $Path;
        createPath(pos: $BlockPos_, regionOffset: number, accuracy: number): $Path;
        /**
         * Returns path to given BlockPos
         */
        createPath(pos: $BlockPos_, accuracy: number): $Path;
        setCanFloat(canSwim: boolean): void;
        getMaxDistanceToWaypoint(): number;
        isStableDestination(pos: $BlockPos_): boolean;
        shouldRecomputePath(pos: $BlockPos_): boolean;
        setMaxVisitedNodesMultiplier(multiplier: number): void;
        /**
         * Sets the active `Path` to `null`.
         */
        resetMaxVisitedNodesMultiplier(): void;
        moveTo(x: number, arg1: number, y: number, arg3: number, z: number): boolean;
        /**
         * Try to find and set a path to XYZ. Returns `true` if successful.
         */
        moveTo(x: number, arg1: number, y: number, arg3: number): boolean;
        /**
         * Try to find and set a path to EntityLiving. Returns `true` if successful.
         */
        moveTo(entity: $Entity, speed: number): boolean;
        /**
         * Sets a new path. If it's different from the old path. Checks to adjust path for sun avoiding, and stores start coords.
         */
        moveTo(pathentity: $Path | null, speed: number): boolean;
        /**
         * Sets the active `Path` to `null`.
         */
        recomputePath(): void;
        canCutCorner(pathType: $PathType_): boolean;
        getTargetPos(): $BlockPos;
        /**
         * Sets the speed
         */
        setSpeedModifier(speed: number): void;
        getNodeEvaluator(): $NodeEvaluator;
        /**
         * If on ground or swimming and can swim
         */
        isInProgress(): boolean;
        constructor(mob: $Mob, level: $Level_);
        get done(): boolean;
        get path(): $Path;
        get stuck(): boolean;
        get maxDistanceToWaypoint(): number;
        set maxVisitedNodesMultiplier(value: number);
        get targetPos(): $BlockPos;
        set speedModifier(value: number);
        get nodeEvaluator(): $NodeEvaluator;
        get inProgress(): boolean;
    }
}
