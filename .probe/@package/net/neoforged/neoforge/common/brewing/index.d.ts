import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";

declare module "@package/net/neoforged/neoforge/common/brewing" {
    /**
     * Interface for more flexible brewing recipes.
     * 
     * Register using `RegisterBrewingRecipesEvent` and `Builder#addRecipe(IBrewingRecipe)`.
     */
    export class $IBrewingRecipe {
    }
    export interface $IBrewingRecipe {
        /**
         * Returns the output when the passed input is brewed with the passed
         * ingredient. Empty if invalid input or ingredient.
         */
        getOutput(input: $ItemStack_, ingredient: $ItemStack_): $ItemStack;
        /**
         * Returns true is the passed ItemStack is an input for this recipe. "Input"
         * being the item that goes in one of the three bottom slots of the brewing
         * stand (e.g: water bottle)
         */
        isInput(input: $ItemStack_): boolean;
        /**
         * Returns true is the passed ItemStack is an input for this recipe. "Input"
         * being the item that goes in one of the three bottom slots of the brewing
         * stand (e.g: water bottle)
         */
        isIngredient(input: $ItemStack_): boolean;
    }
}
