import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IIngredientType_ } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $RecipeSlotUnderMouse, $IJeiInputHandler } from "@package/mezz/jei/api/gui/inputs";
import { $IRecipeSlotDrawable, $IRecipeSlotsView } from "@package/mezz/jei/api/gui/ingredient";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";
export * as builder from "@package/mezz/jei/api/gui/builder";
export * as widgets from "@package/mezz/jei/api/gui/widgets";
export * as placement from "@package/mezz/jei/api/gui/placement";
export * as inputs from "@package/mezz/jei/api/gui/inputs";
export * as ingredient from "@package/mezz/jei/api/gui/ingredient";
export * as drawable from "@package/mezz/jei/api/gui/drawable";
export * as handlers from "@package/mezz/jei/api/gui/handlers";
export * as buttons from "@package/mezz/jei/api/gui/buttons";

declare module "@package/mezz/jei/api/gui" {
    export class $IRecipeLayoutDrawable<R> {
    }
    export interface $IRecipeLayoutDrawable<R> {
        tick(): void;
        isMouseOver(arg0: number, arg1: number): boolean;
        getRect(): $Rect2i;
        getSlotUnderMouse(arg0: number, arg1: number): ($RecipeSlotUnderMouse) | undefined;
        getRecipeSlotsView(): $IRecipeSlotsView;
        setPosition(arg0: number, arg1: number): void;
        drawRecipe(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        getRecipe(): R;
        getRecipeCategory(): $IRecipeCategory<R>;
        getIngredientUnderMouse<T>(arg0: number, arg1: number, arg2: $IIngredientType_<T>): (T) | undefined;
        getInputHandler(): $IJeiInputHandler;
        getRecipeBookmarkButtonArea(): $Rect2i;
        getRecipeTransferButtonArea(): $Rect2i;
        getItemStackUnderMouse(arg0: number, arg1: number): ($ItemStack) | undefined;
        /**
         * @deprecated
         */
        getRecipeSlotUnderMouse(arg0: number, arg1: number): ($IRecipeSlotDrawable) | undefined;
        getRectWithBorder(): $Rect2i;
        getSideButtonArea(arg0: number): $Rect2i;
        drawOverlays(arg0: $GuiGraphics, arg1: number, arg2: number): void;
        get rect(): $Rect2i;
        get recipeSlotsView(): $IRecipeSlotsView;
        get recipe(): R;
        get recipeCategory(): $IRecipeCategory<R>;
        get inputHandler(): $IJeiInputHandler;
        get recipeBookmarkButtonArea(): $Rect2i;
        get recipeTransferButtonArea(): $Rect2i;
        get rectWithBorder(): $Rect2i;
    }
    export class $ITickTimer {
    }
    export interface $ITickTimer {
        getValue(): number;
        getMaxValue(): number;
        get value(): number;
        get maxValue(): number;
    }
}
