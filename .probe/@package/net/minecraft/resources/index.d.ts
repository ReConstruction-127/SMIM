import { $Encoder_, $DataResult, $DynamicOps, $MapLike, $ListBuilder, $Codec, $Lifecycle, $Dynamic, $RecordBuilder, $MapCodec, $Decoder_ } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Map } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $BiConsumer, $Consumer, $Function_, $UnaryOperator_, $Function } from "@package/java/util/function";
import { $HolderLookup$Provider, $HolderLookup$RegistryLookup, $Registry, $Holder$Reference, $HolderOwner, $HolderGetter } from "@package/net/minecraft/core";
import { $SimpleCommandExceptionType } from "@package/com/mojang/brigadier/exceptions";
import { $IntStream, $LongStream, $Stream } from "@package/java/util/stream";
import { RegistryTypes } from "@special/types";
import { $SpecialEquality } from "@package/dev/latvian/mods/rhino/util";
import { $RecordCodecBuilder } from "@package/com/mojang/serialization/codecs";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Record, $Number, $Comparable, $Object } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/resources" {
    /**
     * An immutable key for a resource, in terms of the name of its parent registry and its location in that registry.
     * 
     * `Registry` uses this to return resource keys for registry objects via `Registry#getResourceKey(Object)`. It also uses this class to store its name, with the parent registry name set to `minecraft:root`. When used in this way it is usually referred to as a "registry key".
     * 
     * @param  The type of the resource represented by this `ResourceKey`, or the type of the registry if it is a registry key.
     * @see net.minecraft.resources.ResourceLocation
     */
    export class $ResourceKey<T> implements $Comparable<$ResourceKey<never>>, $SpecialEquality {
        /**
         * @note_to_llm `ResourceKey` is a reference to a registry entry. KubeJS has special type wrapper for `ResourceKey<T>`
         * that allows you to use string literals as `ResourceKey`. For example, "minecraf:apple" can be used as a `ResourceKey<Item>`.
         * Check available literals for registry entries using the #tool:prunoideae.probejs/listRegistries #tool:prunoideae.probejs/queryRegistryObjectsByRegex #tool:prunoideae.probejs/queryTaggedObjects tools.
         */
        cast<E>(registryKey: $ResourceKey_<$Registry<E>>): ($ResourceKey<E>) | undefined;
        compareTo(arg0: $ResourceKey_<never>): number;
        location(): $ResourceLocation;
        /**
         * Constructs a new `ResourceKey` for a resource with the specified `location` within the registry specified by the given `registryKey`.
         * 
         * @return the created resource key. The registry name is set to the location of the specified `registryKey` and with the specified `location` as the location of the resource.
         */
        static create<T>(registryKey: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $ResourceKey<T>;
        registry(): $ResourceLocation;
        static codec<T>(registryKey: $ResourceKey_<$Registry<T>>): $Codec<$ResourceKey<T>>;
        specialEquals(o: $Object, shallow: boolean): boolean;
        /**
         * @return the created registry key. The registry name is set to `minecraft:root` and the location the specified `registryName`.
         */
        static createRegistryKey<T>(location: $ResourceLocation_): $ResourceKey<$Registry<T>>;
        registryKey(): $ResourceKey<$Registry<$ResourceKey<never>>>;
        getPath(): string;
        getNamespace(): string;
        static streamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$ByteBuf, $ResourceKey<T>>;
        /**
         * @return `true` if this resource key is a direct child of the specified `registryKey`.
         */
        isFor(registryKey: $ResourceKey_<$Registry<never>>): boolean;
        constructor(registryName: $ResourceLocation_, location: $ResourceLocation_);
        get path(): string;
        get namespace(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceKey}.
     */
    export type $ResourceKey_<T> = RegistryTypes.ResolveObject<T>;
    /**
     * An immutable location of a resource, in terms of a path and namespace.
     * 
     * This is used as an identifier for a resource, usually for those housed in a `Registry`, such as blocks and items.
     * 
     * `minecraft` is always taken as the default namespace for a resource location when none is explicitly stated. When using this for registering objects, this namespace **should** only be used for resources added by Minecraft itself.
     * 
     * Generally, and by the implementation of `#toString()`, the string representation of this class is expressed in the form `namespace:path`. The colon is also used as the default separator for parsing strings as a `ResourceLocation`.
     * @see net.minecraft.resources.ResourceKey
     */
    export class $ResourceLocation implements $Comparable<$ResourceLocation>, $SpecialEquality {
        compareTo(other: $ResourceLocation_): number;
        static read(location: string): $DataResult<$ResourceLocation>;
        static read(reader: $StringReader): $ResourceLocation;
        static parse(location: string): $ResourceLocation;
        getPath(): string;
        withPrefix(location: string): $ResourceLocation;
        withSuffix(location: string): $ResourceLocation;
        getNamespace(): string;
        static withDefaultNamespace(location: string): $ResourceLocation;
        static tryParse(location: string): $ResourceLocation;
        static fromNamespaceAndPath(namespace: string, path: string): $ResourceLocation;
        static readNonEmpty(reader: $StringReader): $ResourceLocation;
        static validPathChar(character: string): boolean;
        toShortLanguageKey(): string;
        static bySeparator(location: string, seperator: string): $ResourceLocation;
        compareNamespaced(other: $ResourceLocation_): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        static validNamespaceChar(character: string): boolean;
        static tryBySeparator(location: string, seperator: string): $ResourceLocation;
        toDebugFileName(): string;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidNamespace(namespace: string): boolean;
        toLanguageKey(): string;
        toLanguageKey(namespace: string, path: string): string;
        toLanguageKey(type: string): string;
        static isAllowedInResourceLocation(character: string): boolean;
        /**
         * @return `true` if the specified `namespace` is valid: consists only of `[a-z0-9_.-]` characters
         */
        static isValidPath(namespace: string): boolean;
        static tryBuild(namespace: string, path: string): $ResourceLocation;
        withPath(location: string): $ResourceLocation;
        withPath(pathOperator: $UnaryOperator_<string>): $ResourceLocation;
        static CODEC: $Codec<$ResourceLocation>;
        static REALMS_NAMESPACE: string;
        static ERROR_INVALID: $SimpleCommandExceptionType;
        static NAMESPACE_SEPARATOR: string;
        static DEFAULT_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ResourceLocation>;
        get path(): string;
        get namespace(): string;
    }
    /**
     * Values that may be interpreted as {@link $ResourceLocation}.
     */
    export type $ResourceLocation_ = string;
    export class $RegistryOps<T> extends $DelegatingOps<T> {
        owner<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderOwner<E>) | undefined;
        static create<T>(delegate: $DynamicOps<T>, registries: $HolderLookup$Provider): $RegistryOps<T>;
        static create<T>(delegate: $DynamicOps<T>, lookupProvider: $RegistryOps$RegistryInfoLookup_): $RegistryOps<T>;
        getter<E>(registryKey: $ResourceKey_<$Registry<E>>): ($HolderGetter<E>) | undefined;
        withParent<U>(ops: $DynamicOps<U>): $RegistryOps<U>;
        static injectRegistryContext<T>(dynamic: $Dynamic<T>, registries: $HolderLookup$Provider): $Dynamic<T>;
        static retrieveRegistryLookup<E>(arg0: $ResourceKey_<$Registry<E>>): $MapCodec<$HolderLookup$RegistryLookup<E>>;
        static retrieveGetter<E, O>(key: $ResourceKey_<$Registry<E>>): $RecordCodecBuilder<O, $HolderGetter<E>>;
        static retrieveElement<E, O>(key: $ResourceKey_<E>): $RecordCodecBuilder<O, $Holder$Reference<E>>;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
    }
    export class $FileToIdConverter {
        listMatchingResourceStacks(resourceManager: $ResourceManager): $Map<$ResourceLocation, $List<$Resource>>;
        static json(name: string): $FileToIdConverter;
        listMatchingResources(resourceManager: $ResourceManager): $Map<$ResourceLocation, $Resource>;
        listMatchingResourceStacksFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $List<$Resource>>;
        idToFile(file: $ResourceLocation_): $ResourceLocation;
        fileToId(file: $ResourceLocation_): $ResourceLocation;
        listMatchingResourcesFromNamespace(arg0: $ResourceManager, arg1: string): $Map<$ResourceLocation, $Resource>;
        constructor(prefix: string, extenstion: string);
    }
    export class $RegistryOps$RegistryInfo<T> extends $Record {
        owner(): $HolderOwner<T>;
        getter(): $HolderGetter<T>;
        elementsLifecycle(): $Lifecycle;
        static fromRegistryLookup<T>(registryLookup: $HolderLookup$RegistryLookup<T>): $RegistryOps$RegistryInfo<T>;
        constructor(owner: $HolderOwner<T>, getter: $HolderGetter<T>, elementsLifecycle: $Lifecycle);
        get ter(): $HolderGetter<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfo}.
     */
    export type $RegistryOps$RegistryInfo_<T> = { getter?: $HolderGetter<any>, elementsLifecycle?: $Lifecycle, owner?: $HolderOwner<any>,  } | [getter?: $HolderGetter<any>, elementsLifecycle?: $Lifecycle, owner?: $HolderOwner<any>, ];
    export class $RegistryOps$RegistryInfoLookup {
    }
    export interface $RegistryOps$RegistryInfoLookup {
        lookup<T>(registryKey: $ResourceKey_<$Registry<T>>): ($RegistryOps$RegistryInfo<T>) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $RegistryOps$RegistryInfoLookup}.
     */
    export type $RegistryOps$RegistryInfoLookup_ = ((arg0: $ResourceKey<$Registry<any>>) => ($RegistryOps$RegistryInfo_<T>) | undefined);
    /**
     * A `DynamicOps` that delegates all functionality to an internal delegate. Comments and parameters here are copied from `DynamicOps` in DataFixerUpper.
     */
    export class $DelegatingOps<T> implements $DynamicOps<T> {
        remove(input: T, key: string): T;
        empty(): T;
        emptyList(): T;
        getByteBuffer(input: T): $DataResult<$ByteBuffer>;
        emptyMap(): T;
        getMap(input: T): $DataResult<$MapLike<T>>;
        createMap(map: $Map_<T, T>): T;
        createMap(input: $Stream<$Pair<T, T>>): T;
        createLong(value: number): T;
        createString(value: string): T;
        createDouble(value: number): T;
        createFloat(value: number): T;
        getStream(input: T): $DataResult<$Stream<T>>;
        getStringValue(input: T): $DataResult<string>;
        getBooleanValue(input: T): $DataResult<boolean>;
        createList(input: $Stream<T>): T;
        getList(input: T): $DataResult<$Consumer<$Consumer<T>>>;
        getNumberValue(input: T): $DataResult<$Number>;
        compressMaps(): boolean;
        createShort(value: number): T;
        createIntList(input: $IntStream): T;
        getLongStream(input: T): $DataResult<$LongStream>;
        createLongList(input: $LongStream): T;
        createBoolean(value: boolean): T;
        createByteList(input: $ByteBuffer): T;
        getIntStream(input: T): $DataResult<$IntStream>;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToPrimitive(list: T, value: T): $DataResult<T>;
        listBuilder(): $ListBuilder<T>;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        mergeToList(list: T, value: T): $DataResult<T>;
        mergeToList(list: T, values: $List_<T>): $DataResult<T>;
        createNumeric(i: $Number): T;
        getMapValues(input: T): $DataResult<$Stream<$Pair<T, T>>>;
        getMapEntries(input: T): $DataResult<$Consumer<$BiConsumer<T, T>>>;
        mapBuilder(): $RecordBuilder<T>;
        createInt(value: number): T;
        mergeToMap(map: T, values: $Map_<T, T>): $DataResult<T>;
        mergeToMap(map: T, values: $MapLike<T>): $DataResult<T>;
        /**
         * Only successful if first argument is a map or empty.
         */
        mergeToMap(map: T, key: T, value: T): $DataResult<T>;
        createByte(value: number): T;
        convertTo<U>(outOps: $DynamicOps<U>, input: T): U;
        get(arg0: T, arg1: string): $DataResult<T>;
        update(arg0: T, arg1: string, arg2: $Function_<T, T>): T;
        set(arg0: T, arg1: string, arg2: T): T;
        getNumberValue(arg0: T, arg1: $Number): $Number;
        /**
         * Only successful if first argument is a list/array or empty.
         */
        getGeneric(list: T, value: T): $DataResult<T>;
        convertList<U>(outOps: $DynamicOps<U>, input: T): U;
        withDecoder<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<$Pair<E, T>>>;
        updateGeneric(arg0: T, arg1: T, arg2: $Function_<T, T>): T;
        withEncoder<E>(arg0: $Encoder_<E>): $Function<E, $DataResult<T>>;
        convertMap<U>(outOps: $DynamicOps<U>, input: T): U;
        withParser<E>(arg0: $Decoder_<E>): $Function<T, $DataResult<E>>;
    }
}
