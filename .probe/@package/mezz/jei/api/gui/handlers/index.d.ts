import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $Consumer } from "@package/java/util/function";
import { $ITypedIngredient } from "@package/mezz/jei/api/ingredients";
import { $Rect2i } from "@package/net/minecraft/client/renderer";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $IFocusFactory, $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Class } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $IRecipesGui } from "@package/mezz/jei/api/runtime";

declare module "@package/mezz/jei/api/gui/handlers" {
    export class $IGuiClickableArea {
        static createBasic(arg0: number, arg1: number, arg2: number, arg3: number, ...arg4: $RecipeType<never>[]): $IGuiClickableArea;
    }
    export interface $IGuiClickableArea {
        /**
         * @deprecated
         */
        getTooltipStrings(): $List<$Component>;
        onClick(arg0: $IFocusFactory, arg1: $IRecipesGui): void;
        getTooltip(arg0: $ITooltipBuilder): void;
        getArea(): $Rect2i;
        isTooltipEnabled(): boolean;
        get tooltipStrings(): $List<$Component>;
        get area(): $Rect2i;
        get tooltipEnabled(): boolean;
    }
    export class $IGhostIngredientHandler$Target<I> {
    }
    export interface $IGhostIngredientHandler$Target<I> extends $Consumer<I> {
        accept(arg0: I): void;
        getArea(): $Rect2i;
        get area(): $Rect2i;
    }
    export class $IGhostIngredientHandler<T extends $Screen> {
    }
    export interface $IGhostIngredientHandler<T extends $Screen> {
        shouldHighlightTargets(): boolean;
        onComplete(): void;
        getTargetsTyped<I>(arg0: T, arg1: $ITypedIngredient<I>, arg2: boolean): $List<$IGhostIngredientHandler$Target<I>>;
    }
    export class $IGuiProperties {
    }
    export interface $IGuiProperties {
        guiLeft(): number;
        guiTop(): number;
        screenWidth(): number;
        screenHeight(): number;
        screenClass(): $Class<$Screen>;
        guiXSize(): number;
        guiYSize(): number;
    }
}
