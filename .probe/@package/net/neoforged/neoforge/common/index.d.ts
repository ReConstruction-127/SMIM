import { $Level_ } from "@package/net/minecraft/world/level";
import { $EnumGetMethod_, $Config } from "@package/com/electronwill/nightconfig/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pair } from "@package/org/apache/commons/lang3/tuple";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List, $Collection_, $List_, $Collection } from "@package/java/util";
import { $Supplier_, $Function_, $UnaryOperator_, $Predicate_, $BiFunction_, $Supplier } from "@package/java/util/function";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { DataComponentTypes } from "@special/types";
import { $MutableDataComponentHolderFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $DataComponentType, $DataComponentType_, $DataComponentHolder_, $DataComponentMap_, $DataComponentHolder } from "@package/net/minecraft/core/component";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Enum, $Class, $Comparable, $Object } from "@package/java/lang";
import { $AbstractMinecart } from "@package/net/minecraft/world/entity/vehicle";
import { $AABB } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as world from "@package/net/neoforged/neoforge/common/world";
export * as extensions from "@package/net/neoforged/neoforge/common/extensions";
export * as util from "@package/net/neoforged/neoforge/common/util";
export * as damagesource from "@package/net/neoforged/neoforge/common/damagesource";
export * as enums from "@package/net/neoforged/neoforge/common/enums";
export * as conditions from "@package/net/neoforged/neoforge/common/conditions";
export * as data from "@package/net/neoforged/neoforge/common/data";
export * as crafting from "@package/net/neoforged/neoforge/common/crafting";
export * as brewing from "@package/net/neoforged/neoforge/common/brewing";

declare module "@package/net/neoforged/neoforge/common" {
    /**
     * Defines an action which produces a sound.
     */
    export class $SoundAction {
        /**
         * Returns the name of the action.
         */
        name(): string;
        /**
         * Gets or creates a new `SoundAction` for the given name.
         */
        static get(name: string): $SoundAction;
    }
    export class $ModConfigSpec$Builder {
        comment(arg0: string): $ModConfigSpec$Builder;
        comment(...arg0: string[]): $ModConfigSpec$Builder;
        build(): $ModConfigSpec;
        push(arg0: string): $ModConfigSpec$Builder;
        push(arg0: $List_<string>): $ModConfigSpec$Builder;
        pop(): $ModConfigSpec$Builder;
        pop(arg0: number): $ModConfigSpec$Builder;
        configure<T>(consumer: $Function_<$ModConfigSpec$Builder, T>): $Pair<T, $ModConfigSpec>;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$IntValue;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$DoubleValue;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: $Supplier_<V>, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: $List_<string>, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange<V extends $Comparable<V>>(arg0: string, arg1: V, arg2: V, arg3: V, arg4: $Class<V>): $ModConfigSpec$ConfigValue<V>;
        defineInRange(arg0: string, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: number, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: string, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInRange(arg0: $List_<string>, arg1: $Supplier_<number>, arg2: number, arg3: number): $ModConfigSpec$LongValue;
        defineInList<T>(arg0: $List_<string>, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: string, arg1: T, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        defineInList<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Collection_<T>): $ModConfigSpec$ConfigValue<T>;
        translation(arg0: string): $ModConfigSpec$Builder;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, arg3: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $Collection_<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>, arg4: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, arg3: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $Predicate_<$Object>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: $Supplier_<V>, arg2: $Predicate_<$Object>, arg3: $Class<V>): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: $List_<string>, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, ...arg2: V[]): $ModConfigSpec$EnumValue<V>;
        defineEnum<V extends $Enum<V>>(arg0: string, arg1: V, arg2: $EnumGetMethod_, ...arg3: V[]): $ModConfigSpec$EnumValue<V>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineList<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>, arg4: $ModConfigSpec$Range<number>): $ModConfigSpec$ConfigValue<$List<T>>;
        define<T>(arg0: string, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>, arg3: $Class<never>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: string, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $ModConfigSpec$ValueSpec, arg2: $Supplier_<T>): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: $List_<string>, arg1: $Supplier_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: $List_<string>, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        define(arg0: string, arg1: $Supplier_<boolean>): $ModConfigSpec$BooleanValue;
        define<T>(arg0: $List_<string>, arg1: T): $ModConfigSpec$ConfigValue<T>;
        define<T>(arg0: string, arg1: T, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<T>;
        define(arg0: string, arg1: boolean): $ModConfigSpec$BooleanValue;
        define(arg0: $List_<string>, arg1: boolean): $ModConfigSpec$BooleanValue;
        gameRestart(): $ModConfigSpec$Builder;
        worldRestart(): $ModConfigSpec$Builder;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $List_<T>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: $List_<string>, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        /**
         * @deprecated
         */
        defineListAllowEmpty<T>(arg0: string, arg1: $List_<T>, arg2: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        defineListAllowEmpty<T>(arg0: string, arg1: $Supplier_<$List<T>>, arg2: $Supplier_<T>, arg3: $Predicate_<$Object>): $ModConfigSpec$ConfigValue<$List<T>>;
        constructor();
    }
    /**
     * This class defines a replacement for the default minecart collision code.
     * Only one handler can be registered at a time. It it registered with AbstractMinecartEntity.registerCollisionHandler().
     * If you use this, make it a configuration option.
     */
    export class $IMinecartCollisionHandler {
    }
    export interface $IMinecartCollisionHandler {
        /**
         * This basically replaces the function of the same name in EntityMinecart.
         * Code in IMinecartHooks.applyEntityCollisionHook is still run.
         */
        onEntityCollision(cart: $AbstractMinecart, other: $Entity): void;
        /**
         * This function is used to define the box used for detecting minecart collisions.
         * It is generally bigger that the normal collision box.
         */
        getMinecartCollisionBox(cart: $AbstractMinecart): $AABB;
        /**
         * This function is used to define the box used for detecting minecart collisions.
         * It is generally bigger that the normal collision box.
         */
        getBoundingBox(cart: $AbstractMinecart): $AABB;
        /**
         * This function replaced the function of the same name in EntityMinecart.
         * It is used to define whether minecarts collide with specific entities,
         * for example items.
         */
        getCollisionBox(cart: $AbstractMinecart, other: $Entity): $AABB;
    }
    export class $ItemAbility {
        /**
         * Returns the name of this item ability
         */
        name(): string;
        /**
         * Gets or creates a new ItemAbility for the given name.
         */
        static get(name: string): $ItemAbility;
        /**
         * Returns all registered actions.
         * This collection can be kept around, and will update itself in response to changes to the map.
         * See `ConcurrentHashMap#values()` for details.
         */
        static getActions(): $Collection<$ItemAbility>;
        static CODEC: $Codec<$ItemAbility>;
        static get actions(): $Collection<$ItemAbility>;
    }
    /**
     * Values that may be interpreted as {@link $ItemAbility}.
     */
    export type $ItemAbility_ = "shield_block" | "sword_sweep" | "till" | "wrench_configure_items" | "knife_harvest" | "pickaxe_dig" | "axe_strip" | "axe_scrape" | "shears_dig" | "wrench_configure_energy" | "shears_trim" | "brush_brush" | "spyglass_scope" | "axe_wax_off" | "wrench_configure_fluids" | "shovel_flatten" | "shovel_dig" | "shovel_douse" | "create:extinguish_flame" | "trident_throw" | "wrench_configure_heat" | "wrench_configure" | "axe_dig" | "hoe_dig" | "shears_remove_armor" | "wrench_dismantle" | "sword_dig" | "shears_disarm" | "paxel_dig" | "fishing_rod_cast" | "wrench_rotate" | "shears_harvest" | "shears_carve" | "knife_dig" | "wrench_configure_chemicals" | "firestarter_light" | "wrench_empty";
    export class $ModConfigSpec$ConfigValue<T> implements $Supplier<T> {
        get(): T;
        next(): $ModConfigSpec$Builder;
        getDefault(): T;
        set(arg0: T): void;
        save(): void;
        getPath(): $List<string>;
        clearCache(): void;
        getRaw(): T;
        getRaw(arg0: $Config, arg1: $List_<string>, arg2: $Supplier_<T>): T;
        getSpec(): $ModConfigSpec$ValueSpec;
        get default(): T;
        get path(): $List<string>;
        get spec(): $ModConfigSpec$ValueSpec;
    }
    /**
     * An enum value that can be be translated.
     */
    export class $TranslatableEnum {
    }
    export interface $TranslatableEnum {
        /**
         * @return the translated name of this value
         * Defaults to a literal component with the enum name;
         */
        getTranslatedName(): $Component;
        get translatedName(): $Component;
    }
    export class $MutableDataComponentHolder {
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    export interface $MutableDataComponentHolder extends $DataComponentHolder, $MutableDataComponentHolderFunctions {
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
    }
    /**
     * This interfaces allows shears (modded & vanilla) and entities (modded & vanilla) to cooperate
     * without needing advance knowledge of each other.
     * 
     * In the future, this system may function for implementations on `Block`s as well.
     * 
     * TODO: Implement support for `Block` or remove default implementations from vanilla block classes.
     */
    export class $IShearable {
    }
    export interface $IShearable {
        /**
         * Shears this object. This function is called on both sides, and is responsible for performing any and all actions that happen when sheared, except spawning drops.
         * 
         * Drops that are spawned as a result of being sheared should be returned from this method, and will be spawned on the server using `#spawnShearedDrop`.
         * 
         * Entities may respect their internal position values instead of relying on the `pos` parameter.
         */
        onSheared(player: $Player, item: $ItemStack_, level: $Level_, pos: $BlockPos_): $List<$ItemStack>;
        /**
         * Checks if this object can be sheared.
         * 
         * For example, Sheep return false when they have no wool.
         */
        isShearable(player: $Player, item: $ItemStack_, level: $Level_, pos: $BlockPos_): boolean;
        /**
         * Performs the logic used to drop a shear result into the world at the correct position and with the proper movement.
         * 
         * Entities may respect their internal position values instead of relying on the `pos` parameter.
         */
        spawnShearedDrop(level: $Level_, pos: $BlockPos_, drop: $ItemStack_): void;
    }
    /**
     * Defines a cure that is used to remove `MobEffect`s from a `LivingEntity`.
     * Cures can be added to or removed from your own effects via `MobEffect#fillEffectCures(Set, MobEffectInstance)`
     * or any effect by modifying the set of cures on the `MobEffectInstance` in `Added`
     */
    export class $EffectCure {
        /**
         * @return the name of this cure
         */
        name(): string;
        /**
         * Gets or creates a new EffectCure for the given name.
         */
        static get(name: string): $EffectCure;
        /**
         * @return all registered cures
         * This collection can be kept around, and will update itself in response to changes to the map.
         * See `ConcurrentHashMap#values()` for details.
         */
        static getAllCures(): $Collection<$EffectCure>;
        static CODEC: $Codec<$EffectCure>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EffectCure>;
        static get allCures(): $Collection<$EffectCure>;
    }
}
