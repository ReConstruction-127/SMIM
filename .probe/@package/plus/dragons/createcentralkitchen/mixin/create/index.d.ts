import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/plus/dragons/createcentralkitchen/mixin/create" {
    export class $DeployerBlockEntityAccessor {
    }
    export interface $DeployerBlockEntityAccessor {
        getHeldItem(): $ItemStack;
        get heldItem(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $DeployerBlockEntityAccessor}.
     */
    export type $DeployerBlockEntityAccessor_ = (() => $ItemStack_);
}
