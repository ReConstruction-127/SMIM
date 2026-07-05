import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $LevelBasedValue, $EnchantedItemInUse_ } from "@package/net/minecraft/world/item/enchantment";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $AttributeModifier$Operation, $Attribute, $AttributeModifier, $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $Record } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $RandomSource, $StringRepresentable_ } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/item/enchantment/effects" {
    export class $EnchantmentValueEffect {
        static bootstrap(registry: $Registry<$MapCodec_<$EnchantmentValueEffect>>): $MapCodec<$EnchantmentValueEffect>;
        static CODEC: $Codec<$EnchantmentValueEffect>;
    }
    export interface $EnchantmentValueEffect {
        process(enchantmentLevel: number, random: $RandomSource, value: number): number;
        codec(): $MapCodec<$EnchantmentValueEffect>;
    }
    export class $EnchantmentEntityEffect {
        static bootstrap(registry: $Registry<$MapCodec_<$EnchantmentEntityEffect>>): $MapCodec<$EnchantmentEntityEffect>;
        static CODEC: $Codec<$EnchantmentEntityEffect>;
    }
    export interface $EnchantmentEntityEffect extends $EnchantmentLocationBasedEffect {
        apply(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, origin: $Vec3_): void;
        codec(): $MapCodec<$EnchantmentEntityEffect>;
        onChangedBlock(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, applyTransientEffects: boolean): void;
    }
    export class $EnchantmentAttributeEffect extends $Record implements $EnchantmentLocationBasedEffect {
        operation(): $AttributeModifier$Operation;
        id(): $ResourceLocation;
        attribute(): $Holder<$Attribute>;
        amount(): $LevelBasedValue;
        codec(): $MapCodec<$EnchantmentAttributeEffect>;
        onChangedBlock(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, applyTransientEffects: boolean): void;
        onDeactivated(item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, enchantmentLevel: number): void;
        getModifier(enchantmentLevel: number, slot: $StringRepresentable_): $AttributeModifier;
        static CODEC: $MapCodec<$EnchantmentAttributeEffect>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Attribute>, arg2: $LevelBasedValue, arg3: $AttributeModifier$Operation_);
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentAttributeEffect}.
     */
    export type $EnchantmentAttributeEffect_ = { operation?: $AttributeModifier$Operation_, amount?: $LevelBasedValue, id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>,  } | [operation?: $AttributeModifier$Operation_, amount?: $LevelBasedValue, id?: $ResourceLocation_, attribute?: $Holder_<$Attribute>, ];
    export class $EnchantmentLocationBasedEffect {
        static bootstrap(registry: $Registry<$MapCodec_<$EnchantmentLocationBasedEffect>>): $MapCodec<$EnchantmentLocationBasedEffect>;
        static CODEC: $Codec<$EnchantmentLocationBasedEffect>;
    }
    export interface $EnchantmentLocationBasedEffect {
        codec(): $MapCodec<$EnchantmentLocationBasedEffect>;
        onChangedBlock(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, applyTransientEffects: boolean): void;
        onDeactivated(item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, enchantmentLevel: number): void;
    }
}
