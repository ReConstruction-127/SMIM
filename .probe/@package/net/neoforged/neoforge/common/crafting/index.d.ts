import { $ItemLike, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $JsonElement } from "@package/com/google/gson";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient, $Ingredient_ } from "@package/net/minecraft/world/item/crafting";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Iterable_, $Record, $Object } from "@package/java/lang";
import { $CustomIngredientKJS, $SizedIngredientKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/common/crafting" {
    /**
     * Interface that modders can implement to create new behaviors for `Ingredient`s.
     * 
     * This is not directly implemented on vanilla `Ingredient`s, but conversions are possible:
     * 
     * - `#toVanilla()` converts a custom ingredient to a vanilla `Ingredient`.
     * - `Ingredient#getCustomIngredient()` retrieves the custom ingredient inside a vanilla `Ingredient`.
     * 
     * Implementations of this interface **must implement `Object#equals` and `Object#hashCode`**
     * to ensure that the ingredient also supports them.
     */
    export class $ICustomIngredient {
    }
    export interface $ICustomIngredient extends $CustomIngredientKJS {
        /**
         * Returns whether this ingredient always requires direct stack testing.
         */
        isSimple(): boolean;
        /**
         * Checks if a stack matches this ingredient.
         * The stack **must not** be modified in any way.
         */
        test(stack: $ItemStack_): boolean;
        /**
         * @return the type of this ingredient
         * 
         * The type must be registered to `NeoForgeRegistries#INGREDIENT_TYPES`.
         */
        getType(): $IngredientType<never>;
        /**
         * @return a new `Ingredient` behaving as defined by this custom ingredient
         */
        toVanilla(): $Ingredient;
        /**
         * @return the list of stacks that this ingredient accepts
         * 
         * The following guidelines should be followed for good compatibility:
         * 
         * - These stacks are generally used for display purposes, and need not be exhaustive or perfectly accurate.
         * - An exception is ingredients that are simple,
         * for which it is important that the returned stacks correspond exactly to all the accepted `Item`s.
         * - At least one stack must be returned for the ingredient not to be considered accidentally empty.
         * - The ingredient should try to return at least one stack with each accepted `Item`.
         * This allows mods that inspect the ingredient to figure out which stacks it might accept.
         * 
         * Note: no caching needs to be done by the implementation, this is already handled by the ingredient itself.
         */
        getItems(): $Stream<$ItemStack>;
        get simple(): boolean;
        get type(): $IngredientType<never>;
        get items(): $Stream<$ItemStack>;
    }
    /**
     * Standard implementation for an ingredient and a count.
     * 
     * `Ingredient` does not perform count checks, so this class is used to wrap an ingredient with a count,
     * and provide a standard serialization format.
     */
    export class $SizedIngredient implements $SizedIngredientKJS {
        /**
         * Performs a size-sensitive test on the given stack.
         */
        test(stack: $ItemStack_): boolean;
        /**
         * Helper method to create a simple sized ingredient that matches a single item.
         */
        static of(item: $ItemLike_, count: number): $SizedIngredient;
        /**
         * Helper method to create a simple sized ingredient that matches items in a tag.
         */
        static of(tag: $TagKey_<$Item>, count: number): $SizedIngredient;
        count(): number;
        /**
         * Returns a list of the stacks from this `#ingredient`, with an updated `#count`.
         */
        getItems(): $ItemStack[];
        ingredient(): $Ingredient;
        matches(cx: $RecipeMatchContext, item: $ItemStack_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, arg1: $Ingredient_, exact: boolean): boolean;
        kjs$self(): $SizedIngredient;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$asIngredient(): $Ingredient;
        kjs$toFlatJson(): $JsonElement;
        kjs$toNestedJson(): $JsonElement;
        matches(cx: $RecipeMatchContext, itemLike: $ItemLike_, exact: boolean): boolean;
        matchesAny(cx: $RecipeMatchContext, itemLikes: $Iterable_<$ItemLike>, exact: boolean): boolean;
        static NESTED_CODEC: $Codec<$SizedIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SizedIngredient>;
        static FLAT_CODEC: $Codec<$SizedIngredient>;
        constructor(ingredient: $Ingredient_, count: number);
        get items(): $ItemStack[];
    }
    /**
     * Values that may be interpreted as {@link $SizedIngredient}.
     */
    export type $SizedIngredient_ = $ItemStack_ | $Ingredient_;
    export class $IngredientType<T extends $ICustomIngredient> extends $Record {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(arg0: $MapCodec_<T>);
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $IngredientType}.
     */
    export type $IngredientType_<T> = RegistryTypes.NeoforgeIngredientSerializer | { codec?: $MapCodec_<$ICustomIngredient>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>,  } | [codec?: $MapCodec_<$ICustomIngredient>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ICustomIngredient>, ];
    export interface $IngredientType<T> extends RegistryMarked<RegistryTypes.NeoforgeIngredientSerializerTag, RegistryTypes.NeoforgeIngredientSerializer> {}
}
