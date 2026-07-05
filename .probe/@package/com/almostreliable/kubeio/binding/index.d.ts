import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $SagMillingRecipe$OutputItem } from "@package/com/enderio/enderio/content/machines/sag_mill";
import { $FireCraftingRecipe$Result } from "@package/com/enderio/enderio/content/fire_crafting";

declare module "@package/com/almostreliable/kubeio/binding" {
    export class $SagMillOutputItem {
        static of(arg0: $ItemStack_): $SagMillingRecipe$OutputItem;
        static of(arg0: $ItemStack_, arg1: number): $SagMillingRecipe$OutputItem;
        static ofTag(arg0: $TagKey_<$Item>, arg1: number, arg2: number): $SagMillingRecipe$OutputItem;
        static ofTag(arg0: $TagKey_<$Item>, arg1: number): $SagMillingRecipe$OutputItem;
    }
    export interface $SagMillOutputItem {
    }
    export class $FireCraftingResult {
        static of(arg0: $ItemStack_, arg1: number, arg2: number, arg3: number): $FireCraftingRecipe$Result;
        static of(arg0: $ItemStack_, arg1: number, arg2: number): $FireCraftingRecipe$Result;
        static of(arg0: $ItemStack_, arg1: number): $FireCraftingRecipe$Result;
        static of(arg0: $ItemStack_): $FireCraftingRecipe$Result;
    }
    export interface $FireCraftingResult {
    }
}
