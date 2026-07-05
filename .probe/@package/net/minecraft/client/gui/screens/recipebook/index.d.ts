import { $RegistryAccess } from "@package/net/minecraft/core";
import { $RecipeHolder, $RecipeHolder_ } from "@package/net/minecraft/world/item/crafting";
import { $StackedContents } from "@package/net/minecraft/world/entity/player";
import { $List_, $List } from "@package/java/util";
import { $RecipeBook } from "@package/net/minecraft/stats";

declare module "@package/net/minecraft/client/gui/screens/recipebook" {
    export class $RecipeCollection {
        registryAccess(): $RegistryAccess;
        getRecipes(): $List<$RecipeHolder<never>>;
        getRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        /**
         * Checks if recipebook is not empty
         */
        hasFitting(): boolean;
        isCraftable(recipe: $RecipeHolder_<never>): boolean;
        canCraft(handler: $StackedContents, width: number, height: number, book: $RecipeBook): void;
        /**
         * Checks if recipebook is not empty
         */
        hasCraftable(): boolean;
        /**
         * Checks if recipebook is not empty
         */
        hasKnownRecipes(): boolean;
        updateKnownRecipes(book: $RecipeBook): void;
        getDisplayRecipes(craftable: boolean): $List<$RecipeHolder<never>>;
        /**
         * Checks if recipebook is not empty
         */
        hasSingleResultItem(): boolean;
        constructor(registryAccess: $RegistryAccess, recipes: $List_<$RecipeHolder_<never>>);
    }
}
