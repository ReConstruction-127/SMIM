import { $LevelReader } from "@package/net/minecraft/world/level";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/level/block/state/pattern" {
    export class $BlockInWorld {
        /**
         * Gets the block state as currently held, or (if it has not gotten it from the level) loads it from the level.
         * This will only look up the state from the world if `#loadChunks` is true or the block position is loaded.
         */
        getState(): $BlockState;
        getLevel(): $LevelReader;
        /**
         * Gets the BlockEntity as currently held, or (if it has not gotten it from the level) loads it from the level.
         */
        getEntity(): $BlockEntity;
        static hasState(state: $Predicate_<$BlockState>): $Predicate<$BlockInWorld>;
        getPos(): $BlockPos;
        constructor(level: $LevelReader, pos: $BlockPos_, loadChunks: boolean);
        get state(): $BlockState;
        get level(): $LevelReader;
        get entity(): $BlockEntity;
        get pos(): $BlockPos;
    }
}
