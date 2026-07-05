import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/food" {
    export class $FoodProperties$PossibleEffect extends $Record {
        effectSupplier(): $Supplier<$MobEffectInstance>;
        effect(): $MobEffectInstance;
        probability(): number;
        static CODEC: $Codec<$FoodProperties$PossibleEffect>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FoodProperties$PossibleEffect>;
        constructor(effectSupplier: $Supplier_<$MobEffectInstance>, probability: number);
    }
    /**
     * Values that may be interpreted as {@link $FoodProperties$PossibleEffect}.
     */
    export type $FoodProperties$PossibleEffect_ = { probability?: number, effectSupplier?: $Supplier_<$MobEffectInstance>,  } | [probability?: number, effectSupplier?: $Supplier_<$MobEffectInstance>, ];
    export class $FoodData {
        /**
         * Handles the food game logic.
         */
        tick(player: $Player): void;
        /**
         * Get whether the player must eat food.
         */
        needsFood(): boolean;
        /**
         * Get the player's food saturation level.
         */
        getExhaustionLevel(): number;
        eat(foodProperties: $FoodProperties_): void;
        eat(foodLevel: number, saturationLevel: number): void;
        /**
         * Writes the food data for the player.
         */
        addAdditionalSaveData(compoundTag: $CompoundTag_): void;
        /**
         * Writes the food data for the player.
         */
        readAdditionalSaveData(compoundTag: $CompoundTag_): void;
        /**
         * Get the player's food saturation level.
         */
        getSaturationLevel(): number;
        setFoodLevel(foodLevel: number): void;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        setSaturation(exhaustion: number): void;
        /**
         * Get the player's food level.
         */
        getFoodLevel(): number;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        addExhaustion(exhaustion: number): void;
        /**
         * Adds input to `foodExhaustionLevel` to a max of 40.
         */
        setExhaustion(exhaustion: number): void;
        /**
         * Get the player's food level.
         */
        getLastFoodLevel(): number;
        constructor();
        get exhaustionLevel(): number;
        get saturationLevel(): number;
        set saturation(value: number);
        set exhaustion(value: number);
        get lastFoodLevel(): number;
    }
    export class $FoodProperties extends $Record {
        saturation(): number;
        effects(): $List<$FoodProperties$PossibleEffect>;
        eatSeconds(): number;
        eatDurationTicks(): number;
        canAlwaysEat(): boolean;
        usingConvertsTo(): ($ItemStack) | undefined;
        nutrition(): number;
        static DIRECT_CODEC: $Codec<$FoodProperties>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FoodProperties>;
        constructor(nutrition: number, saturation: number, canAlwaysEat: boolean, eatSeconds: number, usingConvertsTo: ($ItemStack_) | undefined, effects: $List_<$FoodProperties$PossibleEffect_>);
    }
    /**
     * Values that may be interpreted as {@link $FoodProperties}.
     */
    export type $FoodProperties_ = { eatSeconds?: number, usingConvertsTo?: ($ItemStack_) | undefined, canAlwaysEat?: boolean, nutrition?: number, saturation?: number, effects?: $List_<$FoodProperties$PossibleEffect_>,  } | [eatSeconds?: number, usingConvertsTo?: ($ItemStack_) | undefined, canAlwaysEat?: boolean, nutrition?: number, saturation?: number, effects?: $List_<$FoodProperties$PossibleEffect_>, ];
}
