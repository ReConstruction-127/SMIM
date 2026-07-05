import { $Event } from "@package/net/neoforged/bus/api";
import { $RecipeManager, $RecipeHolder_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_ } from "@package/java/util";

declare module "@package/plus/dragons/createdragonsplus/common/recipe" {
    export class $UpdateRecipesEvent extends $Event {
        apply(): void;
        getRecipeManager(): $RecipeManager;
        addRecipe(arg0: $RecipeHolder_<never>): void;
        removeRecipe(arg0: $RecipeHolder_<never>): void;
        constructor(arg0: $RecipeManager, arg1: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>, arg2: $Map_<$ResourceLocation_, $RecipeHolder_<never>>);
        get recipeManager(): $RecipeManager;
    }
}
