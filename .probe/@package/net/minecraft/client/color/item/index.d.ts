import { $ItemColorsExtended } from "@package/org/embeddedt/embeddium/impl/model/color/interop";
import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockColors } from "@package/net/minecraft/client/color/block";

declare module "@package/net/minecraft/client/color/item" {
    export class $ItemColors implements $ItemColorsExtended {
        /**
         * @deprecated
         */
        register(itemColor: $ItemColor_, ...items: $ItemLike_[]): void;
        static createDefault(colors: $BlockColors): $ItemColors;
        getColor(stack: $ItemStack_, tintIndex: number): number;
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
        constructor();
    }
    export class $ItemColor {
    }
    export interface $ItemColor {
        getColor(stack: $ItemStack_, tintIndex: number): number;
    }
    /**
     * Values that may be interpreted as {@link $ItemColor}.
     */
    export type $ItemColor_ = ((arg0: $ItemStack, arg1: number) => number);
}
