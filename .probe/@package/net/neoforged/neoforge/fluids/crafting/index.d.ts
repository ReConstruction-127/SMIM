import { $JsonElement } from "@package/com/google/gson";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $FluidIngredientStacksInvoker } from "@package/dev/latvian/mods/kubejs/create/core/mixin";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { SpecialTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Record, $Object } from "@package/java/lang";
import { $FluidIngredientKJS, $SizedFluidIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/fluids/crafting" {
    /**
     * Standard implementation for a FluidIngredient with an amount.
     * 
     * `FluidIngredient`, like its item counterpart, explicitly does not perform count checks,
     * so this class is used to (a) wrap a standard FluidIngredient with an amount and (b) provide a
     * standard serialization format for mods to use.
     */
    export class $SizedFluidIngredient implements $SizedFluidIngredientKJS {
        /**
         * Performs a size-sensitive test on the given stack.
         */
        test(stack: $FluidStack_): boolean;
        static of(fluid: $Fluid_, amount: number): $SizedFluidIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches fluids in a tag.
         */
        static of(tag: $TagKey_<$Fluid>, amount: number): $SizedFluidIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches the given fluid stack
         */
        static of(stack: $FluidStack_): $SizedFluidIngredient;
        amount(): number;
        /**
         * Returns a list of the stacks from this `#ingredient`, with an updated `#amount`.
         */
        getFluids(): $FluidStack[];
        ingredient(): $FluidIngredient;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        self(): $SizedFluidIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        toFlatJson(): $JsonElement;
        toNestedJson(): $JsonElement;
        static NESTED_CODEC: $Codec<$SizedFluidIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedFluidIngredient>;
        static FLAT_CODEC: $Codec<$SizedFluidIngredient>;
        constructor(ingredient: $FluidIngredient_, amount: number);
        get fluids(): $FluidStack[];
    }
    export interface $FluidIngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeFluidIngredientTypeTag, RegistryTypes.NeoforgeFluidIngredientType> {}
    /**
     * This class serves as the fluid analogue of an item `Ingredient`,
     * that is, a representation of both a predicate to test
     * `FluidStack`s against, and a list of matching stacks
     * for e.g. display purposes.
     * 
     * The most common use for fluid ingredients is found in modded recipe inputs,
     * for example crafting mechanics accepting a list of different fluids;
     * since those mechanics even rely on a certain *amount* of a fluid being present,
     * and fluid ingredients inherently do not hold any information with respect to fluid amount;
     * you may also want to take a look at `SizedFluidIngredient`!
     */
    export class $FluidIngredient implements $Predicate<$FluidStack>, $FluidIngredientKJS, $FluidIngredientStacksInvoker {
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        isSimple(): boolean;
        /**
         * Returns an array of fluid stacks that this ingredient accepts.
         * The fluid stacks within the returned array **must not** be modified by the caller!
         * @return an array of fluid stacks this ingredient accepts
         */
        getStacks(): $FluidStack[];
        /**
         * Checks if a given fluid stack matches this ingredient.
         * The stack **must not** be modified in any way.
         */
        test(fluidStack: $FluidStack_): boolean;
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        isEmpty(): boolean;
        static of(): $FluidIngredient;
        static of(...arg0: $Fluid_[]): $FluidIngredient;
        static of(...arg0: $FluidStack_[]): $FluidIngredient;
        static single(holder: $Holder_<$Fluid>): $FluidIngredient;
        static single(fluids: $Fluid_): $FluidIngredient;
        static single(fluids: $FluidStack_): $FluidIngredient;
        static empty(): $FluidIngredient;
        /**
         * @return The type of this fluid ingredient.
         * 
         * The type **must** be registered to `NeoForgeRegistries#FLUID_INGREDIENT_TYPES`.
         */
        getType(): $FluidIngredientType<never>;
        static tag(tag: $TagKey_<$Fluid>): $FluidIngredient;
        self(): $FluidIngredient;
        /**
         * Returns whether this fluid ingredient always requires direct stack testing.
         */
        hasNoFluids(): boolean;
        or(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        negate(): $Predicate<$FluidStack>;
        and(arg0: $Predicate_<$FluidStack>): $Predicate<$FluidStack>;
        matches(cx: $RecipeMatchContext, arg1: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        getCodec(): $Codec<never>;
        withAmount(amount: number): $SizedFluidIngredient;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        callGenerateStacks(): $Stream<$FluidStack>;
        static CODEC_NON_EMPTY: $Codec<$FluidIngredient>;
        static CODEC: $Codec<$FluidIngredient>;
        static LIST_CODEC: $Codec<$List<$FluidIngredient>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient>;
        static MAP_CODEC_NONEMPTY: $MapCodec<$FluidIngredient>;
        static LIST_CODEC_NON_EMPTY: $Codec<$List<$FluidIngredient>>;
        constructor();
        get simple(): boolean;
        get stacks(): $FluidStack[];
        get type(): $FluidIngredientType<never>;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredient}.
     */
    export type $FluidIngredient_ = $Fluid_ | RegExp | `#${RegistryTypes.FluidTag}` | `@${SpecialTypes.ModId}`;
    export class $FluidIngredientType<T extends $FluidIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientType}.
     */
    export type $FluidIngredientType_<T> = RegistryTypes.NeoforgeFluidIngredientType | { codec?: $MapCodec_<$FluidIngredient_>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>,  } | [codec?: $MapCodec_<$FluidIngredient_>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $FluidIngredient_>, ];
}
