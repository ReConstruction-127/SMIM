import { $NonNullList } from "@package/net/minecraft/core";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CraftingContainer, $ResultContainer } from "@package/net/minecraft/world/inventory";

declare module "@package/com/illusivesoulworks/polymorph/mixin/core" {
    export class $AccessorCraftingMenu {
    }
    export interface $AccessorCraftingMenu {
        getPlayer(): $Player;
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        get player(): $Player;
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $AccessorInventoryMenu {
    }
    export interface $AccessorInventoryMenu {
        getOwner(): $Player;
        getCraftSlots(): $CraftingContainer;
        getResultSlots(): $ResultContainer;
        get owner(): $Player;
        get craftSlots(): $CraftingContainer;
        get resultSlots(): $ResultContainer;
    }
    export class $AccessorSmithingTrimRecipe {
    }
    export interface $AccessorSmithingTrimRecipe {
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
        get addition(): $Ingredient;
    }
    export class $AccessorCrafterMenu {
    }
    export interface $AccessorCrafterMenu {
        callRefreshRecipeResult(): void;
    }
    /**
     * Values that may be interpreted as {@link $AccessorCrafterMenu}.
     */
    export type $AccessorCrafterMenu_ = (() => void);
    export class $AccessorAbstractFurnaceBlockEntity {
    }
    export interface $AccessorAbstractFurnaceBlockEntity {
        getItems(): $NonNullList<$ItemStack>;
        get items(): $NonNullList<$ItemStack>;
    }
    /**
     * Values that may be interpreted as {@link $AccessorAbstractFurnaceBlockEntity}.
     */
    export type $AccessorAbstractFurnaceBlockEntity_ = (() => $NonNullList<$ItemStack_>);
    export class $AccessorSmithingTransformRecipe {
    }
    export interface $AccessorSmithingTransformRecipe {
        getBase(): $Ingredient;
        getTemplate(): $Ingredient;
        getAddition(): $Ingredient;
        get base(): $Ingredient;
        get template(): $Ingredient;
        get addition(): $Ingredient;
    }
}
