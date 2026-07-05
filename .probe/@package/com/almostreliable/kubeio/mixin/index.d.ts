import { $Ingredient$Value, $Ingredient$Value_ } from "@package/net/minecraft/world/item/crafting";
import { $FireCraftingResult } from "@package/com/almostreliable/kubeio/binding";

declare module "@package/com/almostreliable/kubeio/mixin" {
    export class $IngredientAccessor {
    }
    export interface $IngredientAccessor {
        kubeio$getValues(): $Ingredient$Value[];
    }
    /**
     * Values that may be interpreted as {@link $IngredientAccessor}.
     */
    export type $IngredientAccessor_ = (() => $Ingredient$Value_[]);
    export class $FireCraftingResultMixin {
    }
    export interface $FireCraftingResultMixin extends $FireCraftingResult {
    }
}
