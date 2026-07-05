import { $Int2DoubleFunction, $Int2DoubleFunction_, $Int2IntFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity$RemovalReason_, $LivingEntity, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $MobEffectInstanceAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $IClientMobEffectExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $Attribute, $AttributeModifier, $AttributeModifier$Operation_, $AttributeModifier$Operation, $AttributeMap } from "@package/net/minecraft/world/entity/ai/attributes";
import { $FeatureFlag, $FeatureFlagSet, $FeatureElement } from "@package/net/minecraft/world/flag";
import { $Map, $Set, $Set_ } from "@package/java/util";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $ChatFormatting } from "@package/net/minecraft";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $SoundEvent_ } from "@package/net/minecraft/sounds";
import { $IMobEffectExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Runnable_, $Enum, $Record, $Comparable } from "@package/java/lang";
import { $EffectCure } from "@package/net/neoforged/neoforge/common";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/effect" {
    export class $MobEffectCategory extends $Enum<$MobEffectCategory> {
        static values(): $MobEffectCategory[];
        static valueOf(arg0: string): $MobEffectCategory;
        getTooltipFormatting(): $ChatFormatting;
        static HARMFUL: $MobEffectCategory;
        static BENEFICIAL: $MobEffectCategory;
        static NEUTRAL: $MobEffectCategory;
        get tooltipFormatting(): $ChatFormatting;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectCategory}.
     */
    export type $MobEffectCategory_ = "beneficial" | "harmful" | "neutral";
    export class $MobEffect implements $FeatureElement, $IMobEffectExtension {
        getDisplayName(): $Component;
        /**
         * Returns the name of the effect.
         */
        getDescriptionId(): string;
        getCategory(): $MobEffectCategory;
        /**
         * Returns the color of the potion liquid.
         */
        getColor(): number;
        shouldApplyEffectTickThisTick(duration: number, amplifier: number): boolean;
        requiredFeatures(): $FeatureFlagSet;
        requiredFeatures(...requiredFeatures: $FeatureFlag[]): $MobEffect;
        onMobHurt(livingEntity: $LivingEntity, amplifier: number, damageSource: $DamageSource_, amount: number): void;
        applyInstantenousEffect(source: $Entity | null, indirectSource: $Entity | null, livingEntity: $LivingEntity, amplifier: number, health: number): void;
        /**
         * Returns the color of the potion liquid.
         */
        getBlendDurationTicks(): number;
        addAttributeModifiers(attributeMap: $AttributeMap, amplifier: number): void;
        addAttributeModifier(attribute: $Holder_<$Attribute>, id: $ResourceLocation_, amount: number, arg3: $AttributeModifier$Operation_): $MobEffect;
        addAttributeModifier(arg0: $Holder_<$Attribute>, arg1: $ResourceLocation_, arg2: $AttributeModifier$Operation_, arg3: $Int2DoubleFunction_): $MobEffect;
        removeAttributeModifiers(attributeMap: $AttributeMap): void;
        createParticleOptions(effect: $MobEffectInstance): $ParticleOptions;
        setBlendDuration(blendDuration: number): $MobEffect;
        withSoundOnAdded(sound: $SoundEvent_): $MobEffect;
        onEffectAdded(livingEntity: $LivingEntity, amplifier: number): void;
        applyEffectTick(livingEntity: $LivingEntity, amplifier: number): boolean;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isBeneficial(): boolean;
        createModifiers(amplifier: number, output: $BiConsumer_<$Holder<$Attribute>, $AttributeModifier>): void;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientMobEffectExtensions>): void;
        /**
         * Get if the potion is beneficial to the player. Beneficial potions are shown on the first row of the HUD
         */
        isInstantenous(): boolean;
        onMobRemoved(livingEntity: $LivingEntity, amplifier: number, reason: $Entity$RemovalReason_): void;
        onEffectStarted(livingEntity: $LivingEntity, amplifier: number): void;
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        /**
         * Fill the given set with the `EffectCure`s this effect should be curable with by default
         */
        fillEffectCures(cures: $Set_<$EffectCure>, effectInstance: $MobEffectInstance): void;
        /**
         * Used for determining `MobEffect` sort order in GUIs.
         * Defaults to the `MobEffect`'s liquid color.
         */
        getSortOrder(effectInstance: $MobEffectInstance): number;
        static CODEC: $Codec<$Holder<$MobEffect>>;
        attributeModifiers: $Map<$Holder<$Attribute>, $MobEffect$AttributeTemplate>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MobEffect>>;
        get displayName(): $Component;
        get descriptionId(): string;
        get category(): $MobEffectCategory;
        get color(): number;
        get blendDurationTicks(): number;
        set blendDuration(value: number);
        get beneficial(): boolean;
        get instantenous(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MobEffect}.
     */
    export type $MobEffect_ = RegistryTypes.MobEffect;
    export interface $MobEffect extends RegistryMarked<RegistryTypes.MobEffectTag, RegistryTypes.MobEffect> {}
    export class $MobEffect$AttributeTemplate extends $Record {
        operation(): $AttributeModifier$Operation;
        id(): $ResourceLocation;
        create(level: number): $AttributeModifier;
        amount(): number;
        curve(): $Int2DoubleFunction;
        constructor(arg0: $ResourceLocation_, arg1: number, arg2: $AttributeModifier$Operation_);
        constructor(id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_, curve: $Int2DoubleFunction_ | null);
    }
    /**
     * Values that may be interpreted as {@link $MobEffect$AttributeTemplate}.
     */
    export type $MobEffect$AttributeTemplate_ = { curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_,  } | [curve?: $Int2DoubleFunction_, amount?: number, operation?: $AttributeModifier$Operation_, id?: $ResourceLocation_, ];
    export class $MobEffectInstance implements $Comparable<$MobEffectInstance>, $MobEffectInstanceAccessor {
        /**
         * @note_to_llm Check MobEffectUtils binding for easier way to create MobEffectInstance.
         */
        compareTo(other: $MobEffectInstance): number;
        update(other: $MobEffectInstance): boolean;
        /**
         * Read a custom potion effect from a potion item's NBT data.
         */
        static load(nbt: $CompoundTag_): $MobEffectInstance;
        save(): $Tag;
        is(effect: $Holder_<$MobEffect>): boolean;
        tick(entity: $LivingEntity, onExpirationRunnable: $Runnable_): boolean;
        getDuration(): number;
        getDescriptionId(): string;
        tickDownDuration(): number;
        setDetailsFrom(other: $MobEffectInstance): void;
        getBlendFactor(entity: $LivingEntity, delta: number): number;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isInfiniteDuration(): boolean;
        mapDuration(mapper: $Int2IntFunction_): number;
        getEffect(): $Holder<$MobEffect>;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isVisible(): boolean;
        getCures(): $Set<$EffectCure>;
        onMobHurt(livingEntity: $LivingEntity, damageSource: $DamageSource_, amount: number): void;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        isAmbient(): boolean;
        getAmplifier(): number;
        getParticleOptions(): $ParticleOptions;
        copyBlendState(other: $MobEffectInstance): void;
        /**
         * Gets whether this potion effect originated from a beacon
         */
        showIcon(): boolean;
        endsWithin(duration: number): boolean;
        onEffectAdded(livingEntity: $LivingEntity): void;
        onMobRemoved(livingEntity: $LivingEntity, reason: $Entity$RemovalReason_): void;
        onEffectStarted(livingEntity: $LivingEntity): void;
        skipBlending(): void;
        create$getHiddenEffect(): $MobEffectInstance;
        static MAX_AMPLIFIER: number;
        static CODEC: $Codec<$MobEffectInstance>;
        static INFINITE_DURATION: number;
        static MIN_AMPLIFIER: number;
        hiddenEffect: $MobEffectInstance;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MobEffectInstance>;
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance | null);
        constructor(other: $MobEffectInstance);
        constructor(effect: $Holder_<$MobEffect>);
        constructor(effect: $Holder_<$MobEffect>, duration: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean);
        constructor(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean);
        get duration(): number;
        get descriptionId(): string;
        set detailsFrom(value: $MobEffectInstance);
        get infiniteDuration(): boolean;
        get effect(): $Holder<$MobEffect>;
        get visible(): boolean;
        get cures(): $Set<$EffectCure>;
        get ambient(): boolean;
        get amplifier(): number;
        get particleOptions(): $ParticleOptions;
    }
}
