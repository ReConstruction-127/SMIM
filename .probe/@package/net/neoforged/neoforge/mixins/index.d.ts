import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $Set_, $Set } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/mixins" {
    export class $BlockEntityTypeAccessor {
    }
    export interface $BlockEntityTypeAccessor {
        neoforge$setValidBlocks(validBlocks: $Set_<$Block_>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityTypeAccessor}.
     */
    export type $BlockEntityTypeAccessor_ = ((arg0: $Set<$Block>) => void);
}
