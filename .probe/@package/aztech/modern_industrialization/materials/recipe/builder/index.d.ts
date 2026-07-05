import { $RecipeOutput } from "@package/net/minecraft/data/recipes";

declare module "@package/aztech/modern_industrialization/materials/recipe/builder" {
    export class $MaterialRecipeBuilder {
    }
    export interface $MaterialRecipeBuilder {
        cancel(): void;
        /**
         * @deprecated
         */
        save(arg0: $RecipeOutput): void;
        isCanceled(): boolean;
        getRecipeId(): string;
        get canceled(): boolean;
        get recipeId(): string;
    }
}
