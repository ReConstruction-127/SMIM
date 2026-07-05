import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack, $Item_, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IIngredientTypeWithSubtypes, $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $IVanillaRecipeFactory } from "@package/mezz/jei/api/recipe/vanilla";
import { $ISubtypeInterpreter, $IIngredientSubtypeInterpreter_ } from "@package/mezz/jei/api/ingredients/subtypes";
import { $IJeiHelpers } from "@package/mezz/jei/api/helpers";
import { $List_ } from "@package/java/util";
import { $IIngredientVisibility, $IIngredientManager } from "@package/mezz/jei/api/runtime";

declare module "@package/mezz/jei/api/registration" {
    export class $IRecipeRegistration {
    }
    export interface $IRecipeRegistration {
        getJeiHelpers(): $IJeiHelpers;
        getIngredientManager(): $IIngredientManager;
        /**
         * @deprecated
         */
        getIngredientVisibility(): $IIngredientVisibility;
        getVanillaRecipeFactory(): $IVanillaRecipeFactory;
        addItemStackInfo(arg0: $ItemStack_, ...arg1: $Component_[]): void;
        addItemStackInfo(arg0: $List_<$ItemStack_>, ...arg1: $Component_[]): void;
        addRecipes<T>(arg0: $RecipeType<T>, arg1: $List_<T>): void;
        addIngredientInfo<T>(arg0: T, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo<T>(arg0: $List_<T>, arg1: $IIngredientType_<T>, ...arg2: $Component_[]): void;
        addIngredientInfo(arg0: $ItemLike_, ...arg1: $Component_[]): void;
        get jeiHelpers(): $IJeiHelpers;
        get ingredientManager(): $IIngredientManager;
        get ingredientVisibility(): $IIngredientVisibility;
        get vanillaRecipeFactory(): $IVanillaRecipeFactory;
    }
    export class $ISubtypeRegistration {
    }
    export interface $ISubtypeRegistration {
        /**
         * @deprecated
         */
        registerSubtypeInterpreter(arg0: $Item_, arg1: $IIngredientSubtypeInterpreter_<$ItemStack>): void;
        /**
         * @deprecated
         */
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $IIngredientSubtypeInterpreter_<I>): void;
        registerSubtypeInterpreter(arg0: $Item_, arg1: $ISubtypeInterpreter<$ItemStack_>): void;
        registerSubtypeInterpreter<B, I>(arg0: $IIngredientTypeWithSubtypes<B, I>, arg1: B, arg2: $ISubtypeInterpreter<I>): void;
    }
}
