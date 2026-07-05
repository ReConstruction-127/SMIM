import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $ProblemReporter } from "@package/net/minecraft/util";
import { $CriterionTriggerInstance, $Criterion } from "@package/net/minecraft/advancements";
import { $Predicate, $Supplier_, $Function_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $HolderSet, $HolderSet_, $Holder, $HolderGetter$Provider_ } from "@package/net/minecraft/core";
import { $DynamicCommandExceptionType, $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_, $StateHolder } from "@package/net/minecraft/world/level/block/state";
import { $LootItemCondition } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $DataComponentPredicate } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Number } from "@package/java/lang";
import { $LootContextParamSet } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $ValidationContext, $LootContext } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/advancements/critereon" {
    export class $MinMaxBounds$Ints extends $Record implements $MinMaxBounds<number> {
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, max: number): $MinMaxBounds$Ints;
        static atLeast(min: number): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader, valueFunction: $Function_<number, number>): $MinMaxBounds$Ints;
        static fromReader(reader: $StringReader): $MinMaxBounds$Ints;
        static atMost(min: number): $MinMaxBounds$Ints;
        static exactly(min: number): $MinMaxBounds$Ints;
        maxSq(): (number) | undefined;
        minSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        unwrapPoint(): (number) | undefined;
        isAny(): boolean;
        static CODEC: $Codec<$MinMaxBounds$Ints>;
        static ANY: $MinMaxBounds$Ints;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$Ints}.
     */
    export type $MinMaxBounds$Ints_ = { minSq?: (number) | undefined, min?: (number) | undefined, maxSq?: (number) | undefined, max?: (number) | undefined,  } | [minSq?: (number) | undefined, min?: (number) | undefined, maxSq?: (number) | undefined, max?: (number) | undefined, ];
    export class $MinMaxBounds<T extends $Number> {
        static fromReader<T extends $Number, R extends $MinMaxBounds<T>>(reader: $StringReader, boundedFactory: $MinMaxBounds$BoundsFromReaderFactory_<T, R>, valueFactory: $Function_<string, T>, commandExceptionSupplier: $Supplier_<$DynamicCommandExceptionType>, formatter: $Function_<T, T>): R;
        static createCodec<T extends $Number, R extends $MinMaxBounds<T>>(codec: $Codec<T>, boundsFactory: $MinMaxBounds$BoundsFactory_<T, R>): $Codec<R>;
        static ERROR_SWAPPED: $SimpleCommandExceptionType;
        static ERROR_EMPTY: $SimpleCommandExceptionType;
    }
    export interface $MinMaxBounds<T extends $Number> {
        min(): (T) | undefined;
        max(): (T) | undefined;
        unwrapPoint(): (T) | undefined;
        isAny(): boolean;
        get any(): boolean;
    }
    export class $CriterionValidator {
        validate(entity: $ContextAwarePredicate, contextParams: $LootContextParamSet, name: string): void;
        validate(entities: $List_<$ContextAwarePredicate>, contextParams: $LootContextParamSet, name: string): void;
        validateEntities(entities: $List_<$ContextAwarePredicate>, name: string): void;
        validateEntity(entity: $ContextAwarePredicate, name: string): void;
        validateEntity(entity: ($ContextAwarePredicate) | undefined, name: string): void;
        constructor(reporter: $ProblemReporter, lootData: $HolderGetter$Provider_);
    }
    export class $InventoryChangeTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        items(): $List<$ItemPredicate>;
        matches(inventory: $Inventory, stack: $ItemStack_, full: number, empty: number, occupied: number): boolean;
        slots(): $InventoryChangeTrigger$TriggerInstance$Slots;
        static hasItems(...items: $ItemLike_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate$Builder[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        static hasItems(...items: $ItemPredicate_[]): $Criterion<$InventoryChangeTrigger$TriggerInstance>;
        player(): ($ContextAwarePredicate) | undefined;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: $InventoryChangeTrigger$TriggerInstance$Slots_, arg2: $List_<$ItemPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $InventoryChangeTrigger$TriggerInstance}.
     */
    export type $InventoryChangeTrigger$TriggerInstance_ = { items?: $List_<$ItemPredicate_>, slots?: $InventoryChangeTrigger$TriggerInstance$Slots_, player?: ($ContextAwarePredicate) | undefined,  } | [items?: $List_<$ItemPredicate_>, slots?: $InventoryChangeTrigger$TriggerInstance$Slots_, player?: ($ContextAwarePredicate) | undefined, ];
    export class $ItemSubPredicate$Type<T extends $ItemSubPredicate> extends $Record {
        codec(): $Codec<T>;
        constructor(arg0: $Codec<T>);
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate$Type}.
     */
    export type $ItemSubPredicate$Type_<T> = RegistryTypes.ItemSubPredicateType | { codec?: $Codec<$ItemSubPredicate_>,  } | [codec?: $Codec<$ItemSubPredicate_>, ];
    export interface $ItemSubPredicate$Type<T> extends RegistryMarked<RegistryTypes.ItemSubPredicateTypeTag, RegistryTypes.ItemSubPredicateType> {}
    export class $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFromReaderFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(reader: $StringReader, min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFromReaderFactory}.
     */
    export type $MinMaxBounds$BoundsFromReaderFactory_<T, R> = ((arg0: $StringReader, arg1: (T) | undefined, arg2: (T) | undefined) => R);
    export class $EnterBlockTrigger$TriggerInstance extends $Record implements $SimpleCriterionTrigger$SimpleInstance {
        matches(state: $BlockState_): boolean;
        state(): ($StatePropertiesPredicate) | undefined;
        block(): ($Holder<$Block>) | undefined;
        player(): ($ContextAwarePredicate) | undefined;
        static entersBlock(block: $Block_): $Criterion<$EnterBlockTrigger$TriggerInstance>;
        validate(validator: $CriterionValidator): void;
        static CODEC: $Codec<$EnterBlockTrigger$TriggerInstance>;
        constructor(arg0: ($ContextAwarePredicate) | undefined, arg1: ($Holder_<$Block>) | undefined, arg2: ($StatePropertiesPredicate_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $EnterBlockTrigger$TriggerInstance}.
     */
    export type $EnterBlockTrigger$TriggerInstance_ = { state?: ($StatePropertiesPredicate_) | undefined, block?: ($Holder_<$Block>) | undefined, player?: ($ContextAwarePredicate) | undefined,  } | [state?: ($StatePropertiesPredicate_) | undefined, block?: ($Holder_<$Block>) | undefined, player?: ($ContextAwarePredicate) | undefined, ];
    export class $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
    }
    export interface $MinMaxBounds$BoundsFactory<T extends $Number, R extends $MinMaxBounds<T>> {
        create(min: (T) | undefined, max: (T) | undefined): R;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$BoundsFactory}.
     */
    export type $MinMaxBounds$BoundsFactory_<T, R> = ((arg0: (T) | undefined, arg1: (T) | undefined) => R);
    export class $ContextAwarePredicate {
        matches(context: $LootContext): boolean;
        validate(arg0: $ValidationContext): void;
        static create(...conditions: $LootItemCondition[]): $ContextAwarePredicate;
        static CODEC: $Codec<$ContextAwarePredicate>;
    }
    export class $ItemPredicate$Builder {
        of(tag: $TagKey_<$Item>): $ItemPredicate$Builder;
        of(...items: $ItemLike_[]): $ItemPredicate$Builder;
        build(): $ItemPredicate;
        static item(): $ItemPredicate$Builder;
        withCount(count: $MinMaxBounds$Ints_): $ItemPredicate$Builder;
        withSubPredicate<T extends $ItemSubPredicate>(arg0: $ItemSubPredicate$Type_<T>, arg1: T): $ItemPredicate$Builder;
        hasComponents(components: $DataComponentPredicate): $ItemPredicate$Builder;
    }
    export class $ItemSubPredicate {
        static CODEC: $Codec<$Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>>;
    }
    export interface $ItemSubPredicate {
        matches(stack: $ItemStack_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ItemSubPredicate}.
     */
    export type $ItemSubPredicate_ = ((arg0: $ItemStack) => boolean);
    export class $StatePropertiesPredicate extends $Record {
        matches(state: $FluidState): boolean;
        matches<S extends $StateHolder<never, S>>(properties: $StateDefinition<never, S>, targetProperty: S): boolean;
        matches(state: $BlockState_): boolean;
        properties(): $List<$StatePropertiesPredicate$PropertyMatcher>;
        checkState(state: $StateDefinition<never, never>): (string) | undefined;
        static CODEC: $Codec<$StatePropertiesPredicate>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $StatePropertiesPredicate>;
        constructor(properties: $List_<$StatePropertiesPredicate$PropertyMatcher_>);
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate}.
     */
    export type $StatePropertiesPredicate_ = { properties?: $List_<$StatePropertiesPredicate$PropertyMatcher_>,  } | [properties?: $List_<$StatePropertiesPredicate$PropertyMatcher_>, ];
    export class $InventoryChangeTrigger$TriggerInstance$Slots extends $Record {
        matches(full: number, empty: number, occupied: number): boolean;
        empty(): $MinMaxBounds$Ints;
        full(): $MinMaxBounds$Ints;
        occupied(): $MinMaxBounds$Ints;
        static CODEC: $Codec<$InventoryChangeTrigger$TriggerInstance$Slots>;
        static ANY: $InventoryChangeTrigger$TriggerInstance$Slots;
        constructor(arg0: $MinMaxBounds$Ints_, arg1: $MinMaxBounds$Ints_, arg2: $MinMaxBounds$Ints_);
    }
    /**
     * Values that may be interpreted as {@link $InventoryChangeTrigger$TriggerInstance$Slots}.
     */
    export type $InventoryChangeTrigger$TriggerInstance$Slots_ = { empty?: $MinMaxBounds$Ints_, full?: $MinMaxBounds$Ints_, occupied?: $MinMaxBounds$Ints_,  } | [empty?: $MinMaxBounds$Ints_, full?: $MinMaxBounds$Ints_, occupied?: $MinMaxBounds$Ints_, ];
    export class $StatePropertiesPredicate$PropertyMatcher extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $StatePropertiesPredicate$PropertyMatcher}.
     */
    export type $StatePropertiesPredicate$PropertyMatcher_ = { valueMatcher?: $StatePropertiesPredicate$ValueMatcher, name?: string,  } | [valueMatcher?: $StatePropertiesPredicate$ValueMatcher, name?: string, ];
    export class $MinMaxBounds$Doubles extends $Record implements $MinMaxBounds<number> {
        min(): (number) | undefined;
        max(): (number) | undefined;
        matches(value: number): boolean;
        static between(min: number, arg1: number): $MinMaxBounds$Doubles;
        static atLeast(min: number): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader, formatter: $Function_<number, number>): $MinMaxBounds$Doubles;
        static fromReader(reader: $StringReader): $MinMaxBounds$Doubles;
        static atMost(min: number): $MinMaxBounds$Doubles;
        static exactly(min: number): $MinMaxBounds$Doubles;
        maxSq(): (number) | undefined;
        minSq(): (number) | undefined;
        matchesSqr(value: number): boolean;
        unwrapPoint(): (number) | undefined;
        isAny(): boolean;
        static CODEC: $Codec<$MinMaxBounds$Doubles>;
        static ANY: $MinMaxBounds$Doubles;
        constructor(arg0: (number) | undefined, arg1: (number) | undefined, arg2: (number) | undefined, arg3: (number) | undefined);
        get any(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MinMaxBounds$Doubles}.
     */
    export type $MinMaxBounds$Doubles_ = { minSq?: (number) | undefined, min?: (number) | undefined, maxSq?: (number) | undefined, max?: (number) | undefined,  } | [minSq?: (number) | undefined, min?: (number) | undefined, maxSq?: (number) | undefined, max?: (number) | undefined, ];
    export class $ItemPredicate extends $Record implements $Predicate<$ItemStack> {
        items(): ($HolderSet<$Item>) | undefined;
        test(arg0: $ItemStack_): boolean;
        count(): $MinMaxBounds$Ints;
        components(): $DataComponentPredicate;
        subPredicates(): $Map<$ItemSubPredicate$Type<never>, $ItemSubPredicate>;
        or(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        negate(): $Predicate<$ItemStack>;
        and(arg0: $Predicate_<$ItemStack>): $Predicate<$ItemStack>;
        static CODEC: $Codec<$ItemPredicate>;
        constructor(arg0: ($HolderSet_<$Item>) | undefined, arg1: $MinMaxBounds$Ints_, arg2: $DataComponentPredicate, arg3: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>);
    }
    /**
     * Values that may be interpreted as {@link $ItemPredicate}.
     */
    export type $ItemPredicate_ = { count?: $MinMaxBounds$Ints_, items?: ($HolderSet_<$Item>) | undefined, subPredicates?: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>, components?: $DataComponentPredicate,  } | [count?: $MinMaxBounds$Ints_, items?: ($HolderSet_<$Item>) | undefined, subPredicates?: $Map_<$ItemSubPredicate$Type_<never>, $ItemSubPredicate_>, components?: $DataComponentPredicate, ];
    export class $SimpleCriterionTrigger$SimpleInstance {
    }
    export interface $SimpleCriterionTrigger$SimpleInstance extends $CriterionTriggerInstance {
        validate(arg0: $CriterionValidator): void;
        player(): ($ContextAwarePredicate) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $SimpleCriterionTrigger$SimpleInstance}.
     */
    export type $SimpleCriterionTrigger$SimpleInstance_ = (() => ($ContextAwarePredicate) | undefined);
}
