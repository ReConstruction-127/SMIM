import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $EquipmentSlot_, $Entity, $EquipmentSlot, $LivingEntity, $EquipmentSlotGroup, $EquipmentSlotGroup_ } from "@package/net/minecraft/world/entity";
import { $List, $List_, $Map, $Set } from "@package/java/util";
import { $StringRepresentable, $RandomSource, $Unit_ } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_, $UnaryOperator_, $Predicate_ } from "@package/java/util/function";
import { $Object2IntMap$Entry } from "@package/it/unimi/dsi/fastutil/objects";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Holder_, $HolderSet, $HolderSet_, $Holder, $Registry } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $WeightedEntry$IntrusiveBase } from "@package/net/minecraft/util/random";
import { $DataComponentType_, $DataComponentMap, $DataComponentMap_ } from "@package/net/minecraft/core/component";
import { $Enum, $Record } from "@package/java/lang";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $Item, $ItemStack_, $ItemStack, $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder_, $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $MutableFloat } from "@package/org/apache/commons/lang3/mutable";
import { $EnchantmentEntityEffect, $EnchantmentAttributeEffect_, $EnchantmentValueEffect } from "@package/net/minecraft/world/item/enchantment/effects";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as providers from "@package/net/minecraft/world/item/enchantment/providers";
export * as effects from "@package/net/minecraft/world/item/enchantment/effects";

declare module "@package/net/minecraft/world/item/enchantment" {
    export class $Enchantment$Builder {
        build(location: $ResourceLocation_): $Enchantment;
        withSpecialEffect<E>(componentType: $DataComponentType_<E>, effect: E): $Enchantment$Builder;
        exclusiveWith(exclusiveSet: $HolderSet_<$Enchantment>): $Enchantment$Builder;
        withEffect(componentType: $DataComponentType_<$List_<$EnchantmentAttributeEffect_>>, effect: $EnchantmentAttributeEffect_): $Enchantment$Builder;
        withEffect(componentType: $DataComponentType_<$Unit_>): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, effect: E, requirements: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$ConditionalEffect_<E>>>, effect: E): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, enchanted: $EnchantmentTarget_, affected: $EnchantmentTarget_, effect: E, requirements: $LootItemCondition$Builder_): $Enchantment$Builder;
        withEffect<E>(componentType: $DataComponentType_<$List_<$TargetedConditionalEffect_<E>>>, enchanted: $EnchantmentTarget_, affected: $EnchantmentTarget_, effect: E): $Enchantment$Builder;
        withCustomName(arg0: $UnaryOperator_<$MutableComponent>): $Enchantment$Builder;
        constructor(definition: $Enchantment$EnchantmentDefinition_);
    }
    export class $LevelBasedValue$Lookup extends $Record implements $LevelBasedValue {
        values(): $List<number>;
        fallback(): $LevelBasedValue;
        codec(): $MapCodec<$LevelBasedValue$Lookup>;
        calculate(level: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Lookup>;
        constructor(arg0: $List_<number>, arg1: $LevelBasedValue);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Lookup}.
     */
    export type $LevelBasedValue$Lookup_ = { values?: $List_<number>, fallback?: $LevelBasedValue,  } | [values?: $List_<number>, fallback?: $LevelBasedValue, ];
    export class $EnchantedItemInUse extends $Record {
        owner(): $LivingEntity;
        onBreak(): $Consumer<$Item>;
        inSlot(): $EquipmentSlot;
        itemStack(): $ItemStack;
        constructor(itemStack: $ItemStack_, inSlot: $EquipmentSlot_, owner: $LivingEntity);
        constructor(arg0: $ItemStack_, arg1: $EquipmentSlot_ | null, arg2: $LivingEntity | null, arg3: $Consumer_<$Item>);
    }
    /**
     * Values that may be interpreted as {@link $EnchantedItemInUse}.
     */
    export type $EnchantedItemInUse_ = { onBreak?: $Consumer_<$Item>, owner?: $LivingEntity, inSlot?: $EquipmentSlot_, itemStack?: $ItemStack_,  } | [onBreak?: $Consumer_<$Item>, owner?: $LivingEntity, inSlot?: $EquipmentSlot_, itemStack?: $ItemStack_, ];
    export class $ItemEnchantments$Mutable {
        set(enchantment: $Holder_<$Enchantment>, level: number): void;
        keySet(): $Set<$Holder<$Enchantment>>;
        removeIf(predicate: $Predicate_<$Holder<$Enchantment>>): void;
        getLevel(enchantment: $Holder_<$Enchantment>): number;
        toImmutable(): $ItemEnchantments;
        upgrade(enchantment: $Holder_<$Enchantment>, level: number): void;
        constructor(enchantments: $ItemEnchantments_);
    }
    /**
     * Defines an immutable instance of an enchantment and its level.
     */
    export class $EnchantmentInstance extends $WeightedEntry$IntrusiveBase {
        level: number;
        enchantment: $Holder<$Enchantment>;
        constructor(enchantment: $Holder_<$Enchantment>, level: number);
    }
    export class $LevelBasedValue$Constant extends $Record implements $LevelBasedValue {
        value(): number;
        codec(): $MapCodec<$LevelBasedValue$Constant>;
        calculate(level: number): number;
        static CODEC: $Codec<$LevelBasedValue$Constant>;
        static TYPED_CODEC: $MapCodec<$LevelBasedValue$Constant>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Constant}.
     */
    export type $LevelBasedValue$Constant_ = { value?: number,  } | [value?: number, ];
    export class $EnchantmentTarget extends $Enum<$EnchantmentTarget> implements $StringRepresentable {
        static values(): $EnchantmentTarget[];
        static valueOf(arg0: string): $EnchantmentTarget;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$EnchantmentTarget>;
        static ATTACKER: $EnchantmentTarget;
        static VICTIM: $EnchantmentTarget;
        static DAMAGING_ENTITY: $EnchantmentTarget;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentTarget}.
     */
    export type $EnchantmentTarget_ = "attacker" | "damaging_entity" | "victim";
    export class $LevelBasedValue {
        static lookup(values: $List_<number>, fallback: $LevelBasedValue): $LevelBasedValue$Lookup;
        static constant(value: number): $LevelBasedValue$Constant;
        static bootstrap(registry: $Registry<$MapCodec_<$LevelBasedValue>>): $MapCodec<$LevelBasedValue>;
        static perLevel(perLevel: number): $LevelBasedValue$Linear;
        static perLevel(base: number, perLevelAfterFirst: number): $LevelBasedValue$Linear;
        static DISPATCH_CODEC: $Codec<$LevelBasedValue>;
        static CODEC: $Codec<$LevelBasedValue>;
    }
    export interface $LevelBasedValue {
        codec(): $MapCodec<$LevelBasedValue>;
        calculate(level: number): number;
    }
    export class $TargetedConditionalEffect<T> extends $Record {
        matches(context: $LootContext): boolean;
        static codec<S>(codec: $Codec<S>, params: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        affected(): $EnchantmentTarget;
        enchanted(): $EnchantmentTarget;
        requirements(): ($LootItemCondition) | undefined;
        effect(): T;
        static equipmentDropsCodec<S>(codec: $Codec<S>, params: $LootContextParamSet): $Codec<$TargetedConditionalEffect<S>>;
        constructor(arg0: $EnchantmentTarget_, arg1: $EnchantmentTarget_, arg2: T, arg3: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $TargetedConditionalEffect}.
     */
    export type $TargetedConditionalEffect_<T> = { requirements?: ($LootItemCondition) | undefined, enchanted?: $EnchantmentTarget_, effect?: any, affected?: $EnchantmentTarget_,  } | [requirements?: ($LootItemCondition) | undefined, enchanted?: $EnchantmentTarget_, effect?: any, affected?: $EnchantmentTarget_, ];
    export class $ConditionalEffect<T> extends $Record {
        matches(context: $LootContext): boolean;
        static codec<T>(codec: $Codec<T>, params: $LootContextParamSet): $Codec<$ConditionalEffect<T>>;
        static conditionCodec(params: $LootContextParamSet): $Codec<$LootItemCondition>;
        requirements(): ($LootItemCondition) | undefined;
        effect(): T;
        constructor(arg0: T, arg1: ($LootItemCondition) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ConditionalEffect}.
     */
    export type $ConditionalEffect_<T> = { requirements?: ($LootItemCondition) | undefined, effect?: any,  } | [requirements?: ($LootItemCondition) | undefined, effect?: any, ];
    export class $LevelBasedValue$Linear extends $Record implements $LevelBasedValue {
        base(): number;
        codec(): $MapCodec<$LevelBasedValue$Linear>;
        perLevelAboveFirst(): number;
        calculate(level: number): number;
        static CODEC: $MapCodec<$LevelBasedValue$Linear>;
        constructor(arg0: number, arg1: number);
    }
    /**
     * Values that may be interpreted as {@link $LevelBasedValue$Linear}.
     */
    export type $LevelBasedValue$Linear_ = { base?: number, perLevelAboveFirst?: number,  } | [base?: number, perLevelAboveFirst?: number, ];
    export class $Enchantment$Cost extends $Record {
        base(): number;
        perLevelAboveFirst(): number;
        calculate(level: number): number;
        static CODEC: $Codec<$Enchantment$Cost>;
        constructor(base: number, perLevelAboveFirst: number);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$Cost}.
     */
    export type $Enchantment$Cost_ = { base?: number, perLevelAboveFirst?: number,  } | [base?: number, perLevelAboveFirst?: number, ];
    export class $Enchantment$EnchantmentDefinition extends $Record {
        slots(): $List<$EquipmentSlotGroup>;
        maxLevel(): number;
        weight(): number;
        maxCost(): $Enchantment$Cost;
        minCost(): $Enchantment$Cost;
        anvilCost(): number;
        supportedItems(): $HolderSet<$Item>;
        primaryItems(): ($HolderSet<$Item>) | undefined;
        static CODEC: $MapCodec<$Enchantment$EnchantmentDefinition>;
        constructor(supportedItems: $HolderSet_<$Item>, primaryItems: ($HolderSet_<$Item>) | undefined, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, slots: $List_<$EquipmentSlotGroup_>);
    }
    /**
     * Values that may be interpreted as {@link $Enchantment$EnchantmentDefinition}.
     */
    export type $Enchantment$EnchantmentDefinition_ = { primaryItems?: ($HolderSet_<$Item>) | undefined, minCost?: $Enchantment$Cost_, maxLevel?: number, maxCost?: $Enchantment$Cost_, supportedItems?: $HolderSet_<$Item>, slots?: $List_<$EquipmentSlotGroup_>, weight?: number, anvilCost?: number,  } | [primaryItems?: ($HolderSet_<$Item>) | undefined, minCost?: $Enchantment$Cost_, maxLevel?: number, maxCost?: $Enchantment$Cost_, supportedItems?: $HolderSet_<$Item>, slots?: $List_<$EquipmentSlotGroup_>, weight?: number, anvilCost?: number, ];
    export interface $Enchantment extends RegistryMarked<RegistryTypes.EnchantmentTag, RegistryTypes.Enchantment> {}
    export class $ItemEnchantments implements $TooltipProvider {
        size(): number;
        isEmpty(): boolean;
        entrySet(): $Set<$Object2IntMap$Entry<$Holder<$Enchantment>>>;
        keySet(): $Set<$Holder<$Enchantment>>;
        getLevel(enchantment: $Holder_<$Enchantment>): number;
        withTooltip(showInTooltip: boolean): $ItemEnchantments;
        addToTooltip(context: $Item$TooltipContext, tooltipAdder: $Consumer_<$Component>, tooltipFlag: $TooltipFlag): void;
        static CODEC: $Codec<$ItemEnchantments>;
        static EMPTY: $ItemEnchantments;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemEnchantments>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemEnchantments}.
     */
    export type $ItemEnchantments_ = {[key in RegistryTypes.Enchantment]?: number};
    export class $Enchantment extends $Record {
        tick(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity): void;
        description(): $Component;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getMinLevel(): number;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getMaxLevel(): number;
        effects(): $DataComponentMap;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getWeight(): number;
        static definition(supportedItems: $HolderSet_<$Item>, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, ...slots: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        static definition(supportedItems: $HolderSet_<$Item>, primaryItems: $HolderSet_<$Item>, weight: number, maxLevel: number, minCost: $Enchantment$Cost_, maxCost: $Enchantment$Cost_, anvilCost: number, ...slots: $EquipmentSlotGroup_[]): $Enchantment$EnchantmentDefinition;
        definition(): $Enchantment$EnchantmentDefinition;
        getMinCost(level: number): number;
        getMaxCost(level: number): number;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        canEnchant(stack: $ItemStack_): boolean;
        getEffects<T>(component: $DataComponentType_<$List_<T>>): $List<T>;
        modifyDurabilityToRepairFromXp(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyTridentSpinAttackStrength(random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        matchingSlot(slot: $EquipmentSlot_): boolean;
        /**
         * @deprecated
         */
        getSupportedItems(): $HolderSet<$Item>;
        /**
         * Creates a new map containing all items equipped by an entity in slots that the enchantment cares about. These items are not tested for having the enchantment.
         */
        getSlotItems(entity: $LivingEntity): $Map<$EquipmentSlot, $ItemStack>;
        static constantCost(cost: number): $Enchantment$Cost;
        static entityContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, origin: $Vec3_): $LootContext;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        isPrimaryItem(stack: $ItemStack_): boolean;
        static itemContext(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_): $LootContext;
        modifyAmmoCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        static doPostAttack(effect: $TargetedConditionalEffect_<$EnchantmentEntityEffect>, level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, damageSource: $DamageSource_): void;
        doPostAttack(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, target: $EnchantmentTarget_, entity: $Entity, damageSource: $DamageSource_): void;
        static blockHitContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, origin: $Vec3_, state: $BlockState_): $LootContext;
        static damageContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, damageSource: $DamageSource_): $LootContext;
        exclusiveSet(): $HolderSet<$Enchantment>;
        static locationContext(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, enchantmentActive: boolean): $LootContext;
        static dynamicCost(base: number, perLevel: number): $Enchantment$Cost;
        static applyEffects<T>(effects: $List_<$ConditionalEffect_<T>>, context: $LootContext, applier: $Consumer_<T>): void;
        /**
         * Gets the maximum level of the enchantment under normal circumstances such as the enchanting table. This limit is not strictly enforced and may be ignored through custom item NBT or other customizations.
         */
        getAnvilCost(): number;
        static areCompatible(first: $Holder_<$Enchantment>, second: $Holder_<$Enchantment>): boolean;
        static enchantment(definition: $Enchantment$EnchantmentDefinition_): $Enchantment$Builder;
        modifyItemFilteredCount(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, value: $MutableFloat): void;
        modifyCrossbowChargeTime(random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        modifyDamageFilteredValue(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, value: $MutableFloat): void;
        modifyArmorEffectivness(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        modifyFishingTimeReduction(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyPiercingCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyBlockExperience(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyEntityFilteredValue(componentType: $DataComponentType_<$List_<$ConditionalEffect_<$EnchantmentValueEffect>>>, level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, value: $MutableFloat): void;
        modifyProjectileSpread(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyProjectileCount(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyDurabilityChange(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, ammoCount: $MutableFloat): void;
        modifyFishingLuckBonus(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyMobExperience(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        modifyUnfilteredValue(componentType: $DataComponentType_<$EnchantmentValueEffect>, random: $RandomSource, enchantmentLevel: number, value: $MutableFloat): void;
        modifyDamageProtection(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        modifyFallBasedDamage(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        onHitBlock(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity, pos: $Vec3_, state: $BlockState_): void;
        runLocationChangedEffects(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $LivingEntity): void;
        stopLocationBasedEffects(enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $LivingEntity): void;
        isImmuneToDamage(level: $ServerLevel, enchantmentLevel: number, entity: $Entity, damageSource: $DamageSource_): boolean;
        modifyDamage(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        /**
         * @deprecated
         * Checks if the enchantment can be applied to a given ItemStack.
         */
        isSupportedItem(stack: $ItemStack_): boolean;
        modifyKnockback(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, damageSource: $DamageSource_, armorEffectiveness: $MutableFloat): void;
        static getFullname(enchantment: $Holder_<$Enchantment>, level: number): $Component;
        onProjectileSpawned(level: $ServerLevel, enchantmentLevel: number, item: $EnchantedItemInUse_, entity: $Entity): void;
        modifyTridentReturnToOwnerAcceleration(level: $ServerLevel, enchantmentLevel: number, tool: $ItemStack_, entity: $Entity, fishingLuckBonus: $MutableFloat): void;
        static CODEC: $Codec<$Holder<$Enchantment>>;
        static DIRECT_CODEC: $Codec<$Enchantment>;
        static MAX_LEVEL: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$Enchantment>>;
        constructor(description: $Component_, definition: $Enchantment$EnchantmentDefinition_, exclusiveSet: $HolderSet_<$Enchantment>, effects: $DataComponentMap_);
        get minLevel(): number;
        get maxLevel(): number;
        get weight(): number;
        get supportedItems(): $HolderSet<$Item>;
        get anvilCost(): number;
    }
    /**
     * Values that may be interpreted as {@link $Enchantment}.
     */
    export type $Enchantment_ = RegistryTypes.Enchantment | { effects?: $DataComponentMap_, definition?: $Enchantment$EnchantmentDefinition_, exclusiveSet?: $HolderSet_<$Enchantment>, description?: $Component_,  } | [effects?: $DataComponentMap_, definition?: $Enchantment$EnchantmentDefinition_, exclusiveSet?: $HolderSet_<$Enchantment>, description?: $Component_, ];
}
