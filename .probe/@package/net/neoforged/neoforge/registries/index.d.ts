import { $DataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $ItemLike } from "@package/net/minecraft/world/level";
import { $TagKey } from "@package/net/minecraft/tags";
import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $ItemStack } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $ImmutableList, $ImmutableSet } from "@package/com/google/common/collect";
import { $Map_, $Map } from "@package/java/util";
import { $Consumer_, $Predicate_, $Supplier_, $Supplier } from "@package/java/util/function";
import { $Holder$Kind, $Registry, $HolderOwner, $Holder, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record, $Iterable, $Class } from "@package/java/lang";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $ClearCallback_, $RegistryCallback, $BakeCallback_, $AddCallback_ } from "@package/net/neoforged/neoforge/registries/callback";
export * as datamaps from "@package/net/neoforged/neoforge/registries/datamaps";
export * as callback from "@package/net/neoforged/neoforge/registries/callback";
export * as holdersets from "@package/net/neoforged/neoforge/registries/holdersets";

declare module "@package/net/neoforged/neoforge/registries" {
    /**
     * @deprecated
     * Called whenever the ID mapping might have changed. If you register for this event, you
     * will be called back whenever the client or server loads an ID set. This includes both
     * when the ID maps are loaded from disk, as well as when the ID maps revert to the initial
     * state.
     * 
     * Note: you cannot change the IDs that have been allocated, but you might want to use
     * this event to update caches or other in-mod artifacts that might be impacted by an ID
     * change.
     * 
     * Fired on the forge bus.
     */
    export class $IdMappingEvent extends $Event {
        isFrozen(): boolean;
        getRemaps(registry: $ResourceLocation_): $ImmutableList<$IdMappingEvent$ModRemapping>;
        getRegistries(): $ImmutableSet<$ResourceLocation>;
        constructor(remaps: $Map_<$ResourceLocation_, $Map_<$ResourceLocation_, $IdMappingEvent$IdRemapping_>>, isFrozen: boolean);
        get frozen(): boolean;
        get registries(): $ImmutableSet<$ResourceLocation>;
    }
    export class $RegistryBuilder<T> {
        callback(callback: $RegistryCallback<T>): $RegistryBuilder<T>;
        /**
         * Creates a new registry from this builder.
         * Use `NewRegistryEvent#create(RegistryBuilder)` or `DeferredRegister#makeRegistry(Consumer)`
         * to not have to call this manually.
         * All created registries must be registered, see `NewRegistryEvent#register(Registry)`.
         */
        create(): $Registry<T>;
        /**
         * Sets whether this registry should have its numerical IDs synced to clients.
         * Default: `false`.
         */
        sync(sync: boolean): $RegistryBuilder<T>;
        /**
         * Sets the highest numerical id that an entry in this registry
         * is *allowed* to use.
         * Must be greater than or equal to zero.
         */
        maxId(maxId: number): $RegistryBuilder<T>;
        onBake(callback: $BakeCallback_<T>): $RegistryBuilder<T>;
        onAdd(callback: $AddCallback_<T>): $RegistryBuilder<T>;
        onClear(callback: $ClearCallback_<T>): $RegistryBuilder<T>;
        disableRegistrationCheck(): $RegistryBuilder<T>;
        defaultKey(key: $ResourceLocation_): $RegistryBuilder<T>;
        defaultKey(key: $ResourceKey_<T>): $RegistryBuilder<T>;
        /**
         * @deprecated
         */
        withIntrusiveHolders(): $RegistryBuilder<T>;
        constructor(registryKey: $ResourceKey_<$Registry<T>>);
    }
    /**
     * Fired when datapack registries can be registered.
     * Datapack registries are registries which can only load entries through JSON files from datapacks.
     * 
     * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
     * 
     * This event is not cancellable, and does not have a result.
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $DataPackRegistryEvent$NewRegistry extends $DataPackRegistryEvent {
        /**
         * Registers the given registry key as an unsynced datapack registry, which will cause data to be loaded from
         * a datapack folder based on the registry's name. The datapack registry is not required to be present
         * on clients when connecting to servers with the mod/registry.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>): void;
        /**
         * Registers the registry key as a datapack registry with a `RegistryBuilder` configurator, which will cause data to be loaded from
         * a datapack folder based on the registry's name.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, networkCodec: $Codec<T>, consumer: $Consumer_<$RegistryBuilder<T>>): void;
        /**
         * Registers the registry key as a datapack registry, which will cause data to be loaded from
         * a datapack folder based on the registry's name.
         * 
         * Data JSONs will be loaded from `data//modid/registryname/`, where `modid` is the namespace of the registry key.
         */
        dataPackRegistry<T>(registryKey: $ResourceKey_<$Registry<T>>, codec: $Codec<T>, networkCodec: $Codec<T>): void;
        constructor();
    }
    /**
     * A Deferred Holder is a `Holder` that is constructed with only a ResourceKey.
     * 
     * It will be populated with the underlying Holder from the registry when available.
     */
    export class $DeferredHolder<R, T extends R> implements $Holder<R>, $Supplier<T> {
        get(): R;
        value(): R;
        getKey(): $ResourceKey<R>;
        kind(): $Holder$Kind;
        getId(): $ResourceLocation;
        /**
         * Creates a new DeferredHolder targeting the value with the specified name in the specified registry.
         */
        static create<R, T extends R>(registryKey: $ResourceKey_<$Registry<R>>, valueName: $ResourceLocation_): $DeferredHolder<R, T>;
        /**
         * Creates a new DeferredHolder targeting the specified value.
         */
        static create<R, T extends R>(key: $ResourceKey_<R>): $DeferredHolder<R, T>;
        /**
         * Creates a new DeferredHolder targeting the value with the specified name in the specified registry.
         */
        static create<R, T extends R>(registryName: $ResourceLocation_, valueName: $ResourceLocation_): $DeferredHolder<R, T>;
        /**
         * Returns an `Either#left()` containing the resource key of this holder.
         */
        unwrap(): $Either<$ResourceKey<R>, R>;
        /**
         * @return true if the passed ResourceLocation is the same as the ID of the target object
         */
        is(id: $ResourceLocation_): boolean;
        /**
         * Evaluates the passed predicate against this holder's resource key.
         */
        is(filter: $Predicate_<$ResourceKey<R>>): boolean;
        /**
         * @return all tags present on the underlying object
         * 
         * If the underlying object is not bound yet, and empty stream is returned.
         */
        tags(): $Stream<$TagKey<R>>;
        getData<Z>(arg0: $DataMapType<R, Z>): Z;
        getDelegate(): $Holder<R>;
        /**
         * @return true if the underlying object is available
         * 
         * If `true`, the underlying object was added to the registry,
         * and `#value()` or `#get()` can be called.
         */
        isBound(): boolean;
        /**
         * Returns an optional containing the target object, if bound; otherwise an empty optional.
         */
        unwrapKey(): ($ResourceKey<R>) | undefined;
        /**
         * Returns an optional containing the target object, if bound; otherwise an empty optional.
         */
        asOptional(): (R) | undefined;
        canSerializeIn(owner: $HolderOwner<R>): boolean;
        /**
         * Test if a tag matches the object this holder holds.
         * @return true if the passed ResourceLocation is the same as the ID of the target object
         */
        isTag(id: $ResourceLocation_): boolean;
        getRegisteredName(): string;
        /**
         * Attempts to resolve the underlying `RegistryLookup` from a `Holder`.
         * 
         * This will only succeed if the underlying holder is a `Reference`.
         */
        unwrapLookup(): $HolderLookup$RegistryLookup<R>;
        get key(): $ResourceKey<R>;
        get id(): $ResourceLocation;
        get delegate(): $Holder<R>;
        get bound(): boolean;
        get registeredName(): string;
    }
    export class $IdMappingEvent$IdRemapping extends $Record {
        currId(): number;
        newId(): number;
        constructor(currId: number, newId: number);
    }
    /**
     * Values that may be interpreted as {@link $IdMappingEvent$IdRemapping}.
     */
    export type $IdMappingEvent$IdRemapping_ = { currId?: number, newId?: number,  } | [currId?: number, newId?: number, ];
    /**
     * Fired when new registries can be constructed and registered.
     * This event is fired to register builtin registries, like the registries in `BuiltInRegistries`.
     * Builtin registries are registries which can only load entries registered in code.
     * 
     * For registering datapack registries that only load entries through JSON, see `NewRegistry`.
     * 
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $NewRegistryEvent extends $Event implements $IModBusEvent {
        /**
         * Registers an already-created registry.
         * This allows storing registries in static final fields and registering them later.
         */
        register<T>(registry: $Registry<T>): void;
        /**
         * Creates a registry using the `builder` and registers it.
         */
        create<T>(builder: $RegistryBuilder<T>): $Registry<T>;
    }
    /**
     * Fired for each registry when it is ready to have modded objects registered.
     * This event is fired for all builtin registries from vanilla (see `BuiltInRegistries`) and mods.
     * 
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $RegisterEvent extends $Event implements $IModBusEvent {
        /**
         * Calls the provided consumer with a register helper if the provided registry key matches this event's registry key.
         */
        register<T>(registryKey: $ResourceKey_<$Registry<T>>, consumer: $Consumer_<$RegisterEvent$RegisterHelper<T>>): void;
        /**
         * Registers the value with the given name to the stored registry if the provided registry key matches this event's registry key.
         */
        register<T>(registryKey: $ResourceKey_<$Registry<T>>, name: $ResourceLocation_, valueSupplier: $Supplier_<T>): void;
        getRegistry(): $Registry<never>;
        getRegistry<T>(key: $ResourceKey_<$Registry<T>>): $Registry<T>;
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        get registryKey(): $ResourceKey<$Registry<never>>;
    }
    export class $DataPackRegistryEvent extends $Event implements $IModBusEvent {
        constructor();
    }
    /**
     * Fired during startup after builtin registries are constructed.
     * For vanilla registries, this event is fired after vanilla entries are registered but before modded entries.
     * For modded registries, this event is fired before any entry is registered.
     * 
     * This event can be used to register callbacks to the registry.
     * 
     * This event cannot be used to modify datapack registries.
     * 
     * This event is not cancellable.
     * This event is fired on the mod-specific event bus, on both logical sides.
     */
    export class $ModifyRegistriesEvent extends $Event implements $IModBusEvent {
        /**
         * Retrieve a builtin registry by its key.
         */
        getRegistry<T>(key: $ResourceKey_<$Registry<T>>): $Registry<T>;
        /**
         * Returns all builtin registries.
         */
        getRegistries(): $Iterable<$Registry<never>>;
        get registries(): $Iterable<$Registry<never>>;
    }
    export class $RegisterEvent$RegisterHelper<T> {
    }
    export interface $RegisterEvent$RegisterHelper<T> {
        register(arg0: $ResourceKey_<T>, arg1: T): void;
        register(arg0: $ResourceLocation_, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $RegisterEvent$RegisterHelper}.
     */
    export type $RegisterEvent$RegisterHelper_<T> = ((arg0: $ResourceLocation, arg1: T) => void);
    export class $IdMappingEvent$ModRemapping {
        registry: $ResourceLocation;
        newId: number;
        oldId: number;
        key: $ResourceLocation;
    }
    /**
     * Special `DeferredHolder` for Items that implements `ItemLike`.
     */
    export class $DeferredItem<T extends $Item> extends $DeferredHolder<$Item, T> implements $ItemLike {
        asItem(): $Item;
        /**
         * Creates a new `DeferredHolder` targeting the specified `Item`.
         */
        static createItem<T extends $Item>(key: $ResourceKey_<$Item>): $DeferredItem<T>;
        /**
         * Creates a new `DeferredHolder` targeting the `Item` with the specified name.
         */
        static createItem<T extends $Item>(key: $ResourceLocation_): $DeferredItem<T>;
        /**
         * Creates a new `ItemStack` with the given size from this `Item`
         */
        toStack(count: number): $ItemStack;
        /**
         * Creates a new `ItemStack` with a default size of 1 from this `Item`
         */
        toStack(): $ItemStack;
    }
    /**
     * An extension for `Registry`, adding some additional functionality to vanilla registries, such as
     * callbacks and ID limits.
     */
    export class $IRegistryExtension<T> {
    }
    export interface $IRegistryExtension<T> {
        /**
         * Resolves a registry name of a potential object in this registry.
         * The original name will be returned if it is contained in this registry.
         * If not, the alias map will be checked for entries.
         * Resolving supports alias chains (A -> B -> C) and will terminate when an alias has an entry
         * or the last alias in the chain is reached.
         */
        resolve(name: $ResourceLocation_): $ResourceLocation;
        /**
         * Resolves a registry key of a potential object in this registry.
         * The original key will be returned if it is contained in this registry.
         * If not, the alias map will be checked for entries.
         * Resolving supports alias chains (A -> B -> C) and will terminate when an alias has an entry
         * or the last alias in the chain is reached.
         */
        resolve(key: $ResourceKey_<T>): $ResourceKey<T>;
        /**
         * Gets the integer id linked to the given key. If the key is not present in the registry, the default entry's
         * integer id is returned if the registry is defaulted or `-1` if the registry is not defaulted
         */
        getId(key: $ResourceKey_<T>): number;
        /**
         * Gets the integer id linked to the given name. If the name is not present in the registry, the default entry's
         * integer id is returned if the registry is defaulted or `-1` if the registry is not defaulted
         */
        getId(name: $ResourceLocation_): number;
        containsValue(arg0: T): boolean;
        getData<A>(arg0: $DataMapType<T, A>, arg1: $ResourceKey_<T>): A;
        /**
         * Adds an alias that maps from the name specified by `from` to the name specified by `to`.
         * 
         * Any registry lookups that target the first name will resolve as the second name, if the first name is not present.
         */
        addAlias(from: $ResourceLocation_, to: $ResourceLocation_): void;
        /**
         * @return whether this registry should be synced to clients
         */
        doesSync(): boolean;
        /**
         * @return the data map of the given `type`
         */
        getDataMap<A>(type: $DataMapType<T, A>): $Map<$ResourceKey<T>, A>;
        /**
         * @return the highest id that an entry in this registry is *allowed* to use
         * For the size of this registry, see `Registry#size()`.
         */
        getMaxId(): number;
        addCallback<C extends $RegistryCallback<T>>(arg0: $Class<C>, arg1: C): void;
        /**
         * Adds a callback to this registry.
         * 
         * Depending on the interfaces implemented by the object,
         * the callback will be called when the registry is
         * added to,
         * baked,
         * and/or cleared.
         */
        addCallback(callback: $RegistryCallback<T>): void;
        getKeyOrNull(arg0: T): $ResourceLocation;
        get maxId(): number;
    }
}
