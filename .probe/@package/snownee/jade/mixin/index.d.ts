import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/snownee/jade/mixin" {
    export class $AbstractFurnaceBlockEntityAccess {
    }
    export interface $AbstractFurnaceBlockEntityAccess {
        getCookingTotalTime(): number;
        getCookingProgress(): number;
        get cookingTotalTime(): number;
        get cookingProgress(): number;
    }
    export class $EntityAccess {
    }
    export interface $EntityAccess {
        callGetTypeName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $EntityAccess}.
     */
    export type $EntityAccess_ = (() => $Component_);
}
