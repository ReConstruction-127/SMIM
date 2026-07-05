import { $ITooltipBuilder } from "@package/mezz/jei/api/gui/builder";
import { $RecipeType } from "@package/mezz/jei/api/recipe";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IRecipeSlotsView_ } from "@package/mezz/jei/api/gui/ingredient";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $AbstractContainerMenu, $MenuType } from "@package/net/minecraft/world/inventory";
import { $Enum, $Class } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $IRecipeCategory } from "@package/mezz/jei/api/recipe/category";

declare module "@package/mezz/jei/api/recipe/transfer" {
    export class $IRecipeTransferError$Type extends $Enum<$IRecipeTransferError$Type> {
        static values(): $IRecipeTransferError$Type[];
        static valueOf(arg0: string): $IRecipeTransferError$Type;
        static COSMETIC: $IRecipeTransferError$Type;
        static USER_FACING: $IRecipeTransferError$Type;
        static INTERNAL: $IRecipeTransferError$Type;
        allowsTransfer: boolean;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError$Type}.
     */
    export type $IRecipeTransferError$Type_ = "internal" | "user_facing" | "cosmetic";
    export class $IRecipeTransferManager {
    }
    export interface $IRecipeTransferManager {
        getRecipeTransferHandler<C extends $AbstractContainerMenu, R>(arg0: C, arg1: $IRecipeCategory<R>): ($IRecipeTransferHandler<C, R>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferManager}.
     */
    export type $IRecipeTransferManager_ = ((arg0: any, arg1: $IRecipeCategory<any>) => ($IRecipeTransferHandler<C, R>) | undefined);
    export class $IRecipeTransferError {
    }
    export interface $IRecipeTransferError {
        getType(): $IRecipeTransferError$Type;
        getTooltip(arg0: $ITooltipBuilder): void;
        /**
         * @deprecated
         */
        getTooltip(): $List<$Component>;
        showError(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: $IRecipeSlotsView_, arg4: number, arg5: number): void;
        getMissingCountHint(): number;
        getButtonHighlightColor(): number;
        get type(): $IRecipeTransferError$Type;
        get missingCountHint(): number;
        get buttonHighlightColor(): number;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeTransferError}.
     */
    export type $IRecipeTransferError_ = (() => $IRecipeTransferError$Type_);
    export class $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
    }
    export interface $IRecipeTransferHandler<C extends $AbstractContainerMenu, R> {
        getRecipeType(): $RecipeType<R>;
        transferRecipe(arg0: C, arg1: R, arg2: $IRecipeSlotsView_, arg3: $Player, arg4: boolean, arg5: boolean): $IRecipeTransferError;
        getContainerClass(): $Class<C>;
        getMenuType(): ($MenuType<C>) | undefined;
        get recipeType(): $RecipeType<R>;
        get containerClass(): $Class<C>;
        get menuType(): ($MenuType<C>) | undefined;
    }
}
