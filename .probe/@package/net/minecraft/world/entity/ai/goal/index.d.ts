import { $Predicate_, $Supplier_ } from "@package/java/util/function";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Enum } from "@package/java/lang";
import { $EnumSet, $Set } from "@package/java/util";

declare module "@package/net/minecraft/world/entity/ai/goal" {
    /**
     * This is an internal object used by the GoalSelector to choose between Goals.
     * In most cases, it should not be constructed directly.
     * 
     * For information on how individual methods work, see the javadocs for Goal:
     * `Goal`
     */
    export class $WrappedGoal extends $Goal {
        getPriority(): number;
        /**
         * @return whether the goal should continue executing
         */
        isRunning(): boolean;
        /**
         * Gets the private goal enclosed by this WrappedGoal.
         */
        getGoal(): $Goal;
        canBeReplacedBy(other: $WrappedGoal): boolean;
        constructor(priority: number, goal: $Goal);
        get priority(): number;
        get running(): boolean;
        get goal(): $Goal;
    }
    export class $GoalSelector {
        /**
         * Ticks every goal in the selector.
         * Attempts to start each goal based on if it can be used, or stop it if it can't.
         */
        tick(): void;
        /**
         * Remove the goal from the GoalSelector. This must be the same object as the goal you are trying to remove, which may not always be accessible.
         */
        removeGoal(goal: $Goal): void;
        /**
         * Add a goal to the GoalSelector with a certain priority. Lower numbers are higher priority.
         */
        addGoal(priority: number, goal: $Goal): void;
        setControlFlag(flag: $Goal$Flag_, enabled: boolean): void;
        removeAllGoals(filter: $Predicate_<$Goal>): void;
        disableControlFlag(flag: $Goal$Flag_): void;
        tickRunningGoals(tickAllRunning: boolean): void;
        enableControlFlag(flag: $Goal$Flag_): void;
        getAvailableGoals(): $Set<$WrappedGoal>;
        constructor(profiler: $Supplier_<$ProfilerFiller>);
        get availableGoals(): $Set<$WrappedGoal>;
    }
    export class $Goal {
        setFlags(flagSet: $EnumSet<$Goal$Flag_>): void;
        /**
         * Called when the goal is about to start executing
         */
        start(): void;
        /**
         * Called when the goal is about to start executing
         */
        stop(): void;
        /**
         * @return whether the goal should continue executing
         */
        canUse(): boolean;
        /**
         * Called when the goal is about to start executing
         */
        tick(): void;
        getFlags(): $EnumSet<$Goal$Flag>;
        /**
         * @return whether the goal should continue executing
         */
        requiresUpdateEveryTick(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        isInterruptable(): boolean;
        /**
         * @return whether the goal should continue executing
         */
        canContinueToUse(): boolean;
        constructor();
        get interruptable(): boolean;
    }
    export class $Goal$Flag extends $Enum<$Goal$Flag> {
        static values(): $Goal$Flag[];
        static valueOf(arg0: string): $Goal$Flag;
        static TARGET: $Goal$Flag;
        static MOVE: $Goal$Flag;
        static LOOK: $Goal$Flag;
        static JUMP: $Goal$Flag;
    }
    /**
     * Values that may be interpreted as {@link $Goal$Flag}.
     */
    export type $Goal$Flag_ = "move" | "look" | "jump" | "target";
}
