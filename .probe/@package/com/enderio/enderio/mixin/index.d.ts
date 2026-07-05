import { $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";

declare module "@package/com/enderio/enderio/mixin" {
    export class $AbstractCookingRecipeAccessor {
    }
    export interface $AbstractCookingRecipeAccessor {
        getResult(): $ItemStack;
        getIngredient(): $Ingredient;
        getExperience(): number;
        get result(): $ItemStack;
        get ingredient(): $Ingredient;
        get experience(): number;
    }
}
