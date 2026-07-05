import { $Level_ } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RecipeSerializer, $Ingredient, $Ingredient_, $Recipe, $RecipeHolder, $RecipeInput, $RecipeType } from "@package/net/minecraft/world/item/crafting";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $List, $Collection } from "@package/java/util";
import { $FluidIngredient, $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $HolderLookup$Provider, $NonNullList } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineProcessCondition, $MachineProcessCondition$Context_ } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as condition from "@package/aztech/modern_industrialization/machines/recipe/condition";

declare module "@package/aztech/modern_industrialization/machines/recipe" {
    export class $MachineRecipe implements $Recipe<$RecipeInput> {
        matches(arg0: $RecipeInput, arg1: $Level_): boolean;
        getType(): $RecipeType<never>;
        isSpecial(): boolean;
        static codec(arg0: $MachineRecipeType): $MapCodec<$MachineRecipe>;
        getSerializer(): $RecipeSerializer<never>;
        canCraftInDimensions(arg0: number, arg1: number): boolean;
        static streamCodec(arg0: $MachineRecipeType): $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe>;
        assemble(arg0: $RecipeInput, arg1: $HolderLookup$Provider): $ItemStack;
        getResultItem(arg0: $HolderLookup$Provider): $ItemStack;
        getIngredients(): $NonNullList<$Ingredient>;
        conditionsMatch(arg0: $MachineProcessCondition$Context_): boolean;
        getTotalEu(): number;
        getGroup(): string;
        getRemainingItems(arg0: $RecipeInput): $NonNullList<$ItemStack>;
        showNotification(): boolean;
        getToastSymbol(): $ItemStack;
        isIncomplete(): boolean;
        eu: number;
        duration: number;
        itemOutputs: $List<$MachineRecipe$ItemOutput>;
        fluidInputs: $List<$MachineRecipe$FluidInput>;
        itemInputs: $List<$MachineRecipe$ItemInput>;
        conditions: $List<$MachineProcessCondition>;
        fluidOutputs: $List<$MachineRecipe$FluidOutput>;
        get type(): $RecipeType<never>;
        get special(): boolean;
        get serializer(): $RecipeSerializer<never>;
        get ingredients(): $NonNullList<$Ingredient>;
        get totalEu(): number;
        get group(): string;
        get toastSymbol(): $ItemStack;
        get incomplete(): boolean;
    }
    export class $MachineRecipe$FluidOutput extends $Record {
        amount(): number;
        fluid(): $Fluid;
        probability(): number;
        static CODEC: $Codec<$MachineRecipe$FluidOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$FluidOutput>;
        constructor(fluid: $Fluid_, amount: number, probability: number);
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$FluidOutput}.
     */
    export type $MachineRecipe$FluidOutput_ = { amount?: number, probability?: number, fluid?: $Fluid_,  } | [amount?: number, probability?: number, fluid?: $Fluid_, ];
    export class $MachineRecipe$ItemOutput extends $Record {
        getStack(): $ItemStack;
        amount(): number;
        variant(): $ItemVariant;
        probability(): number;
        static CODEC: $Codec<$MachineRecipe$ItemOutput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$ItemOutput>;
        constructor(variant: $ItemVariant, amount: number, probability: number);
        get stack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$ItemOutput}.
     */
    export type $MachineRecipe$ItemOutput_ = { amount?: number, probability?: number, variant?: $ItemVariant,  } | [amount?: number, probability?: number, variant?: $ItemVariant, ];
    export class $MachineRecipe$ItemInput extends $Record {
        matches(arg0: $ItemStack_): boolean;
        amount(): number;
        ingredient(): $Ingredient;
        probability(): number;
        getInputItems(): $List<$Item>;
        static CODEC: $Codec<$MachineRecipe$ItemInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$ItemInput>;
        constructor(ingredient: $Ingredient_, amount: number, probability: number);
        get inputItems(): $List<$Item>;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$ItemInput}.
     */
    export type $MachineRecipe$ItemInput_ = { ingredient?: $Ingredient_, amount?: number, probability?: number,  } | [ingredient?: $Ingredient_, amount?: number, probability?: number, ];
    export class $MachineRecipeType implements $RecipeType<$MachineRecipe>, $RecipeSerializer<$MachineRecipe> {
        getId(): $ResourceLocation;
        getPath(): string;
        getMatchingRecipes(arg0: $ServerLevel, arg1: $Item_): $Collection<$RecipeHolder<$MachineRecipe>>;
        codec(): $MapCodec<$MachineRecipe>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe>;
        getRecipe(arg0: $ServerLevel, arg1: $ResourceLocation_): $RecipeHolder<$MachineRecipe>;
        getRecipesWithCache(arg0: $ServerLevel): $Collection<$RecipeHolder<$MachineRecipe>>;
        getRecipesWithoutCache(arg0: $Level_): $Collection<$RecipeHolder<$MachineRecipe>>;
        getFluidOnlyRecipes(arg0: $ServerLevel): $Collection<$RecipeHolder<$MachineRecipe>>;
        withItemInputs(): $MachineRecipeType;
        withFluidInputs(): $MachineRecipeType;
        withItemOutputs(): $MachineRecipeType;
        withFluidOutputs(): $MachineRecipeType;
        constructor(arg0: $ResourceLocation_);
        get id(): $ResourceLocation;
        get path(): string;
    }
    export class $MachineRecipe$FluidInput extends $Record {
        amount(): number;
        fluid(): $FluidIngredient;
        probability(): number;
        getInputFluids(): $List<$Fluid>;
        static CODEC: $Codec<$MachineRecipe$FluidInput>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineRecipe$FluidInput>;
        /**
         * @deprecated
         */
        constructor(arg0: $Fluid_, arg1: number, arg2: number);
        constructor(fluid: $FluidIngredient_, amount: number, probability: number);
        get inputFluids(): $List<$Fluid>;
    }
    /**
     * Values that may be interpreted as {@link $MachineRecipe$FluidInput}.
     */
    export type $MachineRecipe$FluidInput_ = { amount?: number, probability?: number, fluid?: $FluidIngredient_,  } | [amount?: number, probability?: number, fluid?: $FluidIngredient_, ];
}
