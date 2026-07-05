import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/client/renderer/item" {
    export class $ClampedItemPropertyFunction {
    }
    export interface $ClampedItemPropertyFunction extends $ItemPropertyFunction {
        /**
         * @deprecated
         */
        call(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
        unclampedCall(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ClampedItemPropertyFunction}.
     */
    export type $ClampedItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
    /**
     * @deprecated
     */
    export class $ItemPropertyFunction {
    }
    export interface $ItemPropertyFunction {
        call(stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemPropertyFunction}.
     */
    export type $ItemPropertyFunction_ = ((arg0: $ItemStack, arg1: $ClientLevel, arg2: $LivingEntity, arg3: number) => number);
}
