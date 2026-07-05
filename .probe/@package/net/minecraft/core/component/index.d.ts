import { $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $Rarity_ } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Spliterator, $Iterator, $Map_, $UUID_, $Set_, $List_, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $Unit_ } from "@package/net/minecraft/util";
import { $Predicate, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $IDataComponentHolderExtension, $IDataComponentMapBuilderExtensions } from "@package/net/neoforged/neoforge/common/extensions";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { DataComponentTypes, RegistryMarked, RegistryTypes } from "@special/types";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $Record, $Object, $Iterable } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/core/component" {
    export class $DataComponentPatch$SplitResult extends $Record {
        added(): $DataComponentMap;
        removed(): $Set<$DataComponentType<never>>;
        static EMPTY: $DataComponentPatch$SplitResult;
        constructor(added: $DataComponentMap_, removed: $Set_<$DataComponentType_<never>>);
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch$SplitResult}.
     */
    export type $DataComponentPatch$SplitResult_ = { removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_,  } | [removed?: $Set_<$DataComponentType_<never>>, added?: $DataComponentMap_, ];
    export class $DataComponentPatch$Builder implements $ComponentFunctions {
        remove<T>(component: $DataComponentType_<T>): $DataComponentPatch$Builder;
        build(): $DataComponentPatch;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$get(type: $DataComponentType_<any>): $Object;
        setCustomName(name: $Component_): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setDyedColor(color: $KubeColor_): void;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        getCustomName(): $Component;
        setBaseColor(color: $DyeColor_): void;
        setCustomData(tag: $CompoundTag_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        getCustomData(): $CompoundTag;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setLockCode(lock: string): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        setPotionContents(contents: $PotionContents_): void;
        getComponentMap(): $DataComponentMap;
        getComponentString(): string;
        setCustomModelData(data: number): void;
        setGlintOverride(override: boolean): void;
        resetComponents(): $ComponentFunctions;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setTooltipHidden(): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set dyedColor(value: $KubeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set baseColor(value: $DyeColor_);
        set potionId(value: $Holder_<$Potion>);
        set lockCode(value: string);
        set dyedColorWithTooltip(value: $KubeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set potionContents(value: $PotionContents_);
        get componentMap(): $DataComponentMap;
        get componentString(): string;
        set customModelData(value: number);
        set glintOverride(value: boolean);
    }
    export class $DataComponentPredicate implements $Predicate<$DataComponentMap> {
        test(components: $DataComponentHolder_): boolean;
        test(components: $DataComponentMap_): boolean;
        static builder(): $DataComponentPredicate$Builder;
        static allOf(expectedComponents: $DataComponentMap_): $DataComponentPredicate;
        alwaysMatches(): boolean;
        asPatch(): $DataComponentPatch;
        or(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        negate(): $Predicate<$DataComponentMap>;
        and(arg0: $Predicate_<$DataComponentMap>): $Predicate<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentPredicate>;
        static EMPTY: $DataComponentPredicate;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPredicate>;
    }
    export class $DataComponentPatch {
        size(): number;
        get<T>(component: $DataComponentType_<T>): (T) | undefined;
        isEmpty(): boolean;
        split(): $DataComponentPatch$SplitResult;
        static builder(): $DataComponentPatch$Builder;
        entrySet(): $Set<$Map$Entry<$DataComponentType<never>, (never) | undefined>>;
        forget(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentPatch;
        static CODEC: $Codec<$DataComponentPatch>;
        static EMPTY: $DataComponentPatch;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentPatch>;
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentPatch}.
     */
    export type $DataComponentPatch_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentHolder {
    }
    export interface $DataComponentHolder extends $IDataComponentHolderExtension {
        get<T>(component: $DataComponentType_<T>): T;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getComponents(): $DataComponentMap;
        get components(): $DataComponentMap;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentHolder}.
     */
    export type $DataComponentHolder_ = (() => $DataComponentMap_);
    export class $DataComponentMap {
        static builder(): $DataComponentMap$Builder;
        static composite(map1: $DataComponentMap_, map2: $DataComponentMap_): $DataComponentMap;
        static makeCodecFromMap(codec: $Codec<$Map_<$DataComponentType_<never>, $Object>>): $Codec<$DataComponentMap>;
        static makeCodec(codec: $Codec<$DataComponentType_<never>>): $Codec<$DataComponentMap>;
        static CODEC: $Codec<$DataComponentMap>;
        static EMPTY: $DataComponentMap;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
    }
    export interface $DataComponentMap extends $Iterable<$TypedDataComponent<never>> {
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        isEmpty(): boolean;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        keySet(): $Set<$DataComponentType<never>>;
        getOrDefault<T>(component: $DataComponentType_<T>, defaultValue: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getTyped<T>(component: $DataComponentType_<T>): $TypedDataComponent<T>;
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentMap}.
     */
    export type $DataComponentMap_ = Partial<DataComponentTypes.InputMap>;
    export class $DataComponentPredicate$Builder {
        build(): $DataComponentPredicate;
        expect<T>(component: $DataComponentType_<T>, value: T): $DataComponentPredicate$Builder;
    }
    export interface $DataComponentType<T> extends RegistryMarked<RegistryTypes.EnchantmentEffectComponentTypeTag, RegistryTypes.EnchantmentEffectComponentType> {}
    export class $TypedDataComponent<T> extends $Record {
        encodeValue<D>(ops: $DynamicOps<D>): $DataResult<D>;
        type(): $DataComponentType<T>;
        value(): T;
        static createUnchecked<T>(type: $DataComponentType_<T>, value: $Object): $TypedDataComponent<T>;
        applyTo(map: $PatchedDataComponentMap): void;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TypedDataComponent<never>>;
        constructor(arg0: $DataComponentType_<T>, arg1: T);
    }
    /**
     * Values that may be interpreted as {@link $TypedDataComponent}.
     */
    export type $TypedDataComponent_<T> = { value?: any, type?: $DataComponentType_<any>,  } | [value?: any, type?: $DataComponentType_<any>, ];
    export class $DataComponentType<T> {
        static builder<T>(): $DataComponentType$Builder<T>;
        static CODEC: $Codec<$DataComponentType<never>>;
        static VALUE_MAP_CODEC: $Codec<$Map<$DataComponentType<never>, $Object>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DataComponentType<never>>;
        static PERSISTENT_CODEC: $Codec<$DataComponentType<never>>;
    }
    export interface $DataComponentType<T> {
        isTransient(): boolean;
        codec(): $Codec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        codecOrThrow(): $Codec<T>;
        get transient(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $DataComponentType}.
     */
    export type $DataComponentType_<T> = RegistryTypes.DataComponentType | RegistryTypes.EnchantmentEffectComponentType;
    export class $PatchedDataComponentMap implements $DataComponentMap {
        remove<T>(component: $DataComponentType_<T>): T;
        size(): number;
        get<T>(component: $DataComponentType_<T>): T;
        iterator(): $Iterator<$TypedDataComponent<never>>;
        set<T>(component: $DataComponentType_<T>, value: T | null): T;
        keySet(): $Set<$DataComponentType<never>>;
        copy(): $PatchedDataComponentMap;
        setAll(prototype: $DataComponentMap_): void;
        asPatch(): $DataComponentPatch;
        applyPatch(patch: $DataComponentPatch_): void;
        static fromPatch(prototype: $DataComponentMap_, patch: $DataComponentPatch_): $PatchedDataComponentMap;
        restorePatch(patch: $DataComponentPatch_): void;
        isPatchEmpty(): boolean;
        isEmpty(): boolean;
        stream(): $Stream<$TypedDataComponent<never>>;
        filter(predicate: $Predicate_<$DataComponentType<never>>): $DataComponentMap;
        getOrDefault<T>(component: $DataComponentType_<T>, value: T): T;
        has(component: $DataComponentType_<never>): boolean;
        getTyped<T>(component: $DataComponentType_<T>): $TypedDataComponent<T>;
        spliterator(): $Spliterator<$TypedDataComponent<never>>;
        forEach(arg0: $Consumer_<$TypedDataComponent<never>>): void;
        copyOnWrite: boolean;
        constructor(prototype: $DataComponentMap_);
        [Symbol.iterator](): Iterator<$TypedDataComponent<never>>
        set all(value: $DataComponentMap_);
        get patchEmpty(): boolean;
        get empty(): boolean;
    }
    export class $DataComponentMap$Builder implements $IDataComponentMapBuilderExtensions, $ComponentFunctions {
        addAll(components: $DataComponentMap_): $DataComponentMap$Builder;
        build(): $DataComponentMap;
        kjs$remove(type: $DataComponentType_<any>): $ComponentFunctions;
        kjs$get(type: $DataComponentType_<any>): $Object;
        kjs$getComponentMap(): $DataComponentMap;
        setCustomName(name: $Component_): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setDyedColor(color: $KubeColor_): void;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        getCustomName(): $Component;
        setBaseColor(color: $DyeColor_): void;
        setCustomData(tag: $CompoundTag_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        getCustomData(): $CompoundTag;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setLockCode(lock: string): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        setPotionContents(contents: $PotionContents_): void;
        getComponentString(): string;
        setCustomModelData(data: number): void;
        setGlintOverride(override: boolean): void;
        resetComponents(): $ComponentFunctions;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setTooltipHidden(): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set dyedColor(value: $KubeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set baseColor(value: $DyeColor_);
        set potionId(value: $Holder_<$Potion>);
        set lockCode(value: string);
        set dyedColorWithTooltip(value: $KubeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set potionContents(value: $PotionContents_);
        get componentString(): string;
        set customModelData(value: number);
        set glintOverride(value: boolean);
    }
    export class $DataComponentType$Builder<T> {
        build(): $DataComponentType<T>;
        persistent(codec: $Codec<T>): $DataComponentType$Builder<T>;
        networkSynchronized(streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>): $DataComponentType$Builder<T>;
        cacheEncoding(): $DataComponentType$Builder<T>;
        constructor();
    }
}
