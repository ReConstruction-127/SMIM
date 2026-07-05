import { $IIconButtonController } from "@package/mezz/jei/api/gui/buttons";
import { $IRecipeLayoutDrawable } from "@package/mezz/jei/api/gui";

declare module "@package/mezz/jei/api/recipe/advanced" {
    export class $IRecipeButtonControllerFactory {
    }
    export interface $IRecipeButtonControllerFactory {
        createButtonController<T>(arg0: $IRecipeLayoutDrawable<T>): $IIconButtonController;
    }
    /**
     * Values that may be interpreted as {@link $IRecipeButtonControllerFactory}.
     */
    export type $IRecipeButtonControllerFactory_ = ((arg0: $IRecipeLayoutDrawable<any>) => $IIconButtonController);
}
