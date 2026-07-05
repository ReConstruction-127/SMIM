import { $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Ingredient_, $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $Component } from "@package/net/minecraft/network/chat";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $PotionBrewingAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Holder } from "@package/net/minecraft/core";
import { $IBrewingRecipe } from "@package/net/neoforged/neoforge/common/brewing";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Iterable_, $Record, $Iterable } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/alchemy" {
    /**
     * Defines a type of potion in the game. These are used to associate one or more effects with items such as the bottled potion or the tipped arrows.
     */
    export class $Potion implements $FeatureElement {
        static getName(potion: ($Holder_<$Potion>) | undefined, descriptionId: string): string;
        /**
         * Gets the base effects applied by the potion.
         * @return The effects applied by the potion.
         */
        getEffects(): $List<$MobEffectInstance>;
        /**
         * Checks if the potion contains any instant effects such as instant health or instant damage.
         * @return Whether the potion contained an instant effect.
         */
        hasInstantEffects(): boolean;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $Potion;
        requiredFeatures(): $FeatureFlagSet;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        static CODEC: $Codec<$Holder<$Potion>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Potion>>;
        constructor(...effects: $MobEffectInstance[]);
        constructor(name: string | null, ...effects: $MobEffectInstance[]);
        get effects(): $List<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $Potion}.
     */
    export type $Potion_ = RegistryTypes.Potion;
    export class $PotionBrewing$Builder {
        build(): $PotionBrewing;
        addContainer(container: $Item_): void;
        addRecipe(arg0: $Ingredient_, arg1: $Ingredient_, arg2: $ItemStack_): void;
        addRecipe(arg0: $IBrewingRecipe): void;
        addStartMix(reagent: $Item_, result: $Holder_<$Potion>): void;
        addContainerRecipe(input: $Item_, reagent: $Item_, result: $Item_): void;
        addMix(input: $Holder_<$Potion>, reagent: $Item_, result: $Holder_<$Potion>): void;
        constructor(enabledFeatures: $FeatureFlagSet);
    }
    export class $PotionContents extends $Record {
        is(potion: $Holder_<$Potion>): boolean;
        potion(): ($Holder<$Potion>) | undefined;
        withEffectAdded(effect: $MobEffectInstance): $PotionContents;
        customEffects(): $List<$MobEffectInstance>;
        getAllEffects(): $Iterable<$MobEffectInstance>;
        static getColorOptional(effects: $Iterable_<$MobEffectInstance>): $OptionalInt;
        customColor(): (number) | undefined;
        getColor(): number;
        static getColor(potion: $Holder_<$Potion>): number;
        static getColor(effects: $Iterable_<$MobEffectInstance>): number;
        withPotion(potion: $Holder_<$Potion>): $PotionContents;
        hasEffects(): boolean;
        static createItemStack(item: $Item_, potion: $Holder_<$Potion>): $ItemStack;
        forEachEffect(action: $Consumer_<$MobEffectInstance>): void;
        addPotionTooltip(tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        static addPotionTooltip(effects: $Iterable_<$MobEffectInstance>, tooltipAdder: $Consumer_<$Component>, durationFactor: number, ticksPerSecond: number): void;
        static CODEC: $Codec<$PotionContents>;
        static EMPTY: $PotionContents;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PotionContents>;
        constructor(potion: $Holder_<$Potion>);
        constructor(potion: ($Holder_<$Potion>) | undefined, customColor: (number) | undefined, customEffects: $List_<$MobEffectInstance>);
        get allEffects(): $Iterable<$MobEffectInstance>;
    }
    /**
     * Values that may be interpreted as {@link $PotionContents}.
     */
    export type $PotionContents_ = { potion?: ($Holder_<$Potion>) | undefined, customEffects?: $List_<$MobEffectInstance>, customColor?: (number) | undefined,  } | [potion?: ($Holder_<$Potion>) | undefined, customEffects?: $List_<$MobEffectInstance>, customColor?: (number) | undefined, ];
    export class $PotionBrewing implements $PotionBrewingAccessor {
        static bootstrap(arg0: $FeatureFlagSet, arg1: $RegistryAccess): $PotionBrewing;
        /**
         * @deprecated
         */
        static bootstrap(enabledFeatures: $FeatureFlagSet): $PotionBrewing;
        mix(potion: $ItemStack_, potionItem: $ItemStack_): $ItemStack;
        getRecipes(): $List<$IBrewingRecipe>;
        hasMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        isInput(stack: $ItemStack_): boolean;
        isIngredient(stack: $ItemStack_): boolean;
        isBrewablePotion(potion: $Holder_<$Potion>): boolean;
        isPotionIngredient(stack: $ItemStack_): boolean;
        hasContainerMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        hasPotionMix(reagent: $ItemStack_, potionItem: $ItemStack_): boolean;
        static addVanillaMixes(builder: $PotionBrewing$Builder): void;
        isContainerIngredient(stack: $ItemStack_): boolean;
        create$isContainer(stack: $ItemStack_): boolean;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
        containerMixes: $List<$PotionBrewing$Mix<$Item>>;
        containers: $List<$Ingredient>;
        static BREWING_TIME_SECONDS: number;
        potionMixes: $List<$PotionBrewing$Mix<$Potion>>;
        static EMPTY: $PotionBrewing;
        get recipes(): $List<$IBrewingRecipe>;
    }
    export class $PotionBrewing$Mix<T> extends $Record {
        from(): $Holder<T>;
        to(): $Holder<T>;
        ingredient(): $Ingredient;
    }
    /**
     * Values that may be interpreted as {@link $PotionBrewing$Mix}.
     */
    export type $PotionBrewing$Mix_<T> = { to?: $Holder_<any>, ingredient?: $Ingredient_, from?: $Holder_<any>,  } | [to?: $Holder_<any>, ingredient?: $Ingredient_, from?: $Holder_<any>, ];
    export interface $Potion extends RegistryMarked<RegistryTypes.PotionTag, RegistryTypes.Potion> {}
}
