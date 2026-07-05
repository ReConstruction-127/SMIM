import { $Codec } from "@package/com/mojang/serialization";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $ResourceManager, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $Collection_, $Collection } from "@package/java/util";
import { $ExtraCodecs$TagOrElementLocation } from "@package/net/minecraft/util";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $Holder_, $RegistryAccess, $Registry, $Holder } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ITagBuilderExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryTypes } from "@special/types";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TagManagerKJS, $ReloadableServerResourcesKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Record } from "@package/java/lang";

declare module "@package/net/minecraft/tags" {
    export class $TagNetworkSerialization$NetworkPayload {
        size(): number;
        write(buffer: $FriendlyByteBuf): void;
        static read(buffer: $FriendlyByteBuf): $TagNetworkSerialization$NetworkPayload;
        applyToRegistry<T>(registry: $Registry<T>): void;
    }
    export class $TagEntry {
        getId(): $ResourceLocation;
        static element(elementLocation: $ResourceLocation_): $TagEntry;
        build<T>(lookup: $TagEntry$Lookup<T>, consumer: $Consumer_<T>): boolean;
        static tag(elementLocation: $ResourceLocation_): $TagEntry;
        isRequired(): boolean;
        isTag(): boolean;
        static optionalElement(elementLocation: $ResourceLocation_): $TagEntry;
        verifyIfPresent(elementPredicate: $Predicate_<$ResourceLocation>, tagPredicate: $Predicate_<$ResourceLocation>): boolean;
        static optionalTag(elementLocation: $ResourceLocation_): $TagEntry;
        visitOptionalDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        visitRequiredDependencies(visitor: $Consumer_<$ResourceLocation>): void;
        elementOrTag(): $ExtraCodecs$TagOrElementLocation;
        static CODEC: $Codec<$TagEntry>;
        id: $ResourceLocation;
        required: boolean;
    }
    export class $TagManager implements $PreparableReloadListener, $TagManagerKJS {
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getResult(): $List<$TagManager$LoadResult<never>>;
        kjs$setResources(resources: $ReloadableServerResourcesKJS): void;
        kjs$getResources(): $ReloadableServerResourcesKJS;
        getName(): string;
        constructor(registryAccess: $RegistryAccess);
        get result(): $List<$TagManager$LoadResult<never>>;
        get name(): string;
    }
    export class $TagManager$LoadResult<T> extends $Record {
        key(): $ResourceKey<$Registry<T>>;
        tags(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        constructor(arg0: $ResourceKey_<$Registry<T>>, arg1: $Map_<$ResourceLocation_, $Collection_<$Holder_<T>>>);
    }
    /**
     * Values that may be interpreted as {@link $TagManager$LoadResult}.
     */
    export type $TagManager$LoadResult_<T> = { tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>, key?: $ResourceKey_<$Registry<any>>,  } | [tags?: $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>, key?: $ResourceKey_<$Registry<any>>, ];
    export class $TagKey<T> extends $Record {
        /**
         * @note_to_llm `TagKey` is a reference to a tag. KubeJS has special type wrapper for `TagKey<T>`
         * that allows you to use string literals as `TagKey`. For example, "forge:ores" can be used as a `TagKey<Item>`.
         * Check available literals for tags using the #tool:prunoideae.probejs/listRegistries and #tool:prunoideae.probejs/queryTagsByRegex tools.
         */
        cast<E>(registry: $ResourceKey_<$Registry<E>>): ($TagKey<E>) | undefined;
        location(): $ResourceLocation;
        static create<T>(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_): $TagKey<T>;
        registry(): $ResourceKey<$Registry<T>>;
        static hashedCodec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        static codec<T>(registry: $ResourceKey_<$Registry<T>>): $Codec<$TagKey<T>>;
        isFor(registry: $ResourceKey_<$Registry<never>>): boolean;
        /**
         * @deprecated
         */
        constructor(registry: $ResourceKey_<$Registry<T>>, location: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TagKey}.
     */
    export type $TagKey_<T> = RegistryTypes.ResolveTag<T>;
    export class $TagBuilder implements $ITagBuilderExtension {
        remove(entry: $TagEntry): $TagBuilder;
        replace(arg0: boolean): $TagBuilder;
        replace(): $TagBuilder;
        add(entry: $TagEntry): $TagBuilder;
        static create(): $TagBuilder;
        build(): $List<$TagEntry>;
        addElement(elementLocation: $ResourceLocation_): $TagBuilder;
        isReplace(): boolean;
        addTag(elementLocation: $ResourceLocation_): $TagBuilder;
        getRemoveEntries(): $Stream<$TagEntry>;
        addOptionalElement(elementLocation: $ResourceLocation_): $TagBuilder;
        addOptionalTag(elementLocation: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         * Adds a tag entry to the remove list.
         */
        remove(tagEntry: $TagEntry, source: string): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeElement(elementID: $ResourceLocation_, source: string): $TagBuilder;
        removeElement(elementLocation: $ResourceLocation_): $TagBuilder;
        /**
         * @deprecated
         * Adds a single-element entry to the remove list.
         */
        removeTag(elementID: $ResourceLocation_, source: string): $TagBuilder;
        removeTag(elementLocation: $ResourceLocation_): $TagBuilder;
        getRawBuilder(): $TagBuilder;
        entries: $List<$TagEntry>;
        constructor();
        get removeEntries(): $Stream<$TagEntry>;
        get rawBuilder(): $TagBuilder;
    }
    export class $TagLoader$EntryWithSource extends $Record {
        remove(): boolean;
        source(): string;
        entry(): $TagEntry;
        constructor(arg0: $TagEntry, arg1: string);
        constructor(entry: $TagEntry, source: string, remove: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TagLoader$EntryWithSource}.
     */
    export type $TagLoader$EntryWithSource_ = { source?: string, remove?: boolean, entry?: $TagEntry,  } | [source?: string, remove?: boolean, entry?: $TagEntry, ];
    export class $TagEntry$Lookup<T> {
    }
    export interface $TagEntry$Lookup<T> {
        element(elementLocation: $ResourceLocation_): T;
        tag(tagLocation: $ResourceLocation_): $Collection<T>;
    }
}
