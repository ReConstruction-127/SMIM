import { $CollisionGetter, $PathNavigationRegion, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $Set_, $List_, $Set } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/pathfinder" {
    export class $Path$DebugData extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $Path$DebugData;
        targetNodes(): $Set<$Target>;
        openSet(): $Node[];
        closedSet(): $Node[];
        constructor(arg0: $Node[], arg1: $Node[], arg2: $Set_<$Target>);
    }
    /**
     * Values that may be interpreted as {@link $Path$DebugData}.
     */
    export type $Path$DebugData_ = { targetNodes?: $Set_<$Target>, closedSet?: $Node[], openSet?: $Node[],  } | [targetNodes?: $Set_<$Target>, closedSet?: $Node[], openSet?: $Node[], ];
    export class $Node {
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buffer: $FriendlyByteBuf): $Node;
        distanceTo(point: $Node): number;
        distanceTo(pos: $BlockPos_): number;
        distanceToSqr(pos: $BlockPos_): number;
        distanceToSqr(point: $Node): number;
        cloneAndMove(x: number, y: number, z: number): $Node;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        inOpenSet(): boolean;
        static createHash(x: number, y: number, z: number): number;
        asVec3(): $Vec3;
        asBlockPos(): $BlockPos;
        distanceToXZ(point: $Node): number;
        distanceManhattan(pos: $BlockPos_): number;
        distanceManhattan(point: $Node): number;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(x: number, y: number, z: number);
    }
    export class $PathComputationType extends $Enum<$PathComputationType> {
        static values(): $PathComputationType[];
        static valueOf(arg0: string): $PathComputationType;
        static LAND: $PathComputationType;
        static AIR: $PathComputationType;
        static WATER: $PathComputationType;
    }
    /**
     * Values that may be interpreted as {@link $PathComputationType}.
     */
    export type $PathComputationType_ = "land" | "water" | "air";
    export class $Target extends $Node {
        static createFromStream(buffer: $FriendlyByteBuf): $Target;
        updateBest(heuristic: number, node: $Node): void;
        setReached(): void;
        /**
         * Returns `true` if this point has already been assigned to a path
         */
        isReached(): boolean;
        /**
         * Gets the nearest path point of the path that is constructed
         */
        getBestNode(): $Node;
        cameFrom: $Node;
        f: number;
        g: number;
        x: number;
        h: number;
        y: number;
        closed: boolean;
        z: number;
        walkedDistance: number;
        costMalus: number;
        type: $PathType;
        heapIdx: number;
        constructor(node: $Node);
        constructor(x: number, y: number, z: number);
        get bestNode(): $Node;
    }
    export class $PathTypeCache {
        invalidate(pos: $BlockPos_): void;
        getOrCompute(level: $BlockGetter, pos: $BlockPos_): $PathType;
        constructor();
    }
    export class $PathfindingContext {
        level(): $CollisionGetter;
        getBlockState(pos: $BlockPos_): $BlockState;
        mobPosition(): $BlockPos;
        getPathTypeFromState(x: number, y: number, z: number): $PathType;
        constructor(level: $CollisionGetter, mob: $Mob);
    }
    export class $NodeEvaluator {
        /**
         * This method is called when all nodes have been processed and PathEntity is created.
         */
        done(): void;
        prepare(level: $PathNavigationRegion, mob: $Mob): void;
        getTarget(x: number, arg1: number, y: number): $Target;
        getStart(): $Node;
        canFloat(): boolean;
        setCanOpenDoors(canFloat: boolean): void;
        setCanPassDoors(canFloat: boolean): void;
        setCanFloat(canFloat: boolean): void;
        setCanWalkOverFences(canFloat: boolean): void;
        static isBurningBlock(state: $BlockState_): boolean;
        canOpenDoors(): boolean;
        canPassDoors(): boolean;
        getPathType(mob: $Mob, pos: $BlockPos_): $PathType;
        getPathType(context: $PathfindingContext, x: number, y: number, z: number): $PathType;
        getNeighbors(outputArray: $Node[], node: $Node): number;
        getPathTypeOfMob(context: $PathfindingContext, x: number, y: number, z: number, mob: $Mob): $PathType;
        canWalkOverFences(): boolean;
        constructor();
        get start(): $Node;
    }
    export class $PathType extends $Enum<$PathType> {
        static values(): $PathType[];
        static valueOf(arg0: string): $PathType;
        getMalus(): number;
        static LAVA: $PathType;
        static DANGER_POWDER_SNOW: $PathType;
        static LEAVES: $PathType;
        static BLOCKED: $PathType;
        static WALKABLE: $PathType;
        static TRAPDOOR: $PathType;
        static BREACH: $PathType;
        static POWDER_SNOW: $PathType;
        static DOOR_WOOD_CLOSED: $PathType;
        static DANGER_TRAPDOOR: $PathType;
        static DANGER_FIRE: $PathType;
        static DAMAGE_FIRE: $PathType;
        static WATER: $PathType;
        static WATER_BORDER: $PathType;
        static WALKABLE_DOOR: $PathType;
        static DOOR_IRON_CLOSED: $PathType;
        static FENCE: $PathType;
        static OPEN: $PathType;
        static RAIL: $PathType;
        static DAMAGE_OTHER: $PathType;
        static DOOR_OPEN: $PathType;
        static UNPASSABLE_RAIL: $PathType;
        static COCOA: $PathType;
        static DANGER_OTHER: $PathType;
        static STICKY_HONEY: $PathType;
        static DAMAGE_CAUTIOUS: $PathType;
        get malus(): number;
    }
    /**
     * Values that may be interpreted as {@link $PathType}.
     */
    export type $PathType_ = "blocked" | "open" | "walkable" | "walkable_door" | "trapdoor" | "powder_snow" | "danger_powder_snow" | "fence" | "lava" | "water" | "water_border" | "rail" | "unpassable_rail" | "danger_fire" | "damage_fire" | "danger_other" | "damage_other" | "door_open" | "door_wood_closed" | "door_iron_closed" | "breach" | "leaves" | "sticky_honey" | "cocoa" | "damage_cautious" | "danger_trapdoor";
    export class $Path {
        /**
         * Returns `true` if this path has reached the end
         */
        isDone(): boolean;
        copy(): $Path;
        getTarget(): $BlockPos;
        /**
         * Directs this path to the next point in its array
         */
        advance(): void;
        replaceNode(index: number, point: $Node): void;
        /**
         * Returns the `Node` located at the specified index, usually the current one.
         */
        getNode(index: number): $Node;
        getNodePos(index: number): $BlockPos;
        /**
         * Returns `true` if the EntityPath are the same. Non instance related equals.
         */
        sameAs(pathentity: $Path | null): boolean;
        /**
         * Returns the last `Node` of the Array.
         */
        getEndNode(): $Node;
        /**
         * Returns `true` if this path has reached the end
         */
        notStarted(): boolean;
        writeToStream(buffer: $FriendlyByteBuf): void;
        static createFromStream(buf: $FriendlyByteBuf): $Path;
        /**
         * Returns `true` if this path has reached the end
         */
        canReach(): boolean;
        getNodeCount(): number;
        /**
         * Returns the last `Node` of the Array.
         */
        getNextNode(): $Node;
        /**
         * @return the current `PathEntity` target node as a `Vec3D`
         */
        getNextEntityPos(entity: $Entity): $Vec3;
        getNextNodePos(): $BlockPos;
        getNextNodeIndex(): number;
        truncateNodes(currentPathIndex: number): void;
        debugData(): $Path$DebugData;
        getDistToTarget(): number;
        /**
         * Returns the last `Node` of the Array.
         */
        getPreviousNode(): $Node;
        setNextNodeIndex(currentPathIndex: number): void;
        /**
         * Gets the vector of the `Node` associated with the given index.
         */
        getEntityPosAtNode(entity: $Entity, index: number): $Vec3;
        constructor(nodes: $List_<$Node>, target: $BlockPos_, reached: boolean);
        get done(): boolean;
        get target(): $BlockPos;
        get endNode(): $Node;
        get nodeCount(): number;
        get nextNode(): $Node;
        get nextNodePos(): $BlockPos;
        get distToTarget(): number;
        get previousNode(): $Node;
    }
}
