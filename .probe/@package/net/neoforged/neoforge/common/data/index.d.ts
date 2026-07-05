import { $File_ } from "@package/java/io";
import { $DataMapValueRemover, $DataMapType, $AdvancedDataMapType } from "@package/net/neoforged/neoforge/registries/datamaps";
import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $RegistriesDatapackGenerator } from "@package/net/minecraft/data/registries";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $MobEffect_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $CachedOutput_, $DataProvider, $PackOutput } from "@package/net/minecraft/data";
import { $Consumer_, $BiConsumer, $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $RegistrySetBuilder$PatchedRegistries_, $RegistrySetBuilder } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ICondition } from "@package/net/neoforged/neoforge/common/conditions";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $ExistingFileHelperAccessor } from "@package/plus/dragons/createdragonsplus/mixin/neoforge";

declare module "@package/net/neoforged/neoforge/common/data" {
    /**
     * A provider for data map generation.
     */
    export class $DataMapProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        builder<T, R>(arg0: $DataMapType<R, T>): $DataMapProvider$Builder<T, R>;
        builder<T, R, VR extends $DataMapValueRemover<R, T>>(arg0: $AdvancedDataMapType<R, T, VR>): $DataMapProvider$AdvancedBuilder<T, R, VR>;
        get name(): string;
    }
    export class $ExistingFileHelper$ResourceType implements $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        constructor(type: $PackType_, suffix: string, prefix: string);
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    /**
     * An extension of the `RegistriesDatapackGenerator` which properly handles
     * referencing existing dynamic registry objects within another dynamic registry
     * object.
     */
    export class $DatapackBuiltinEntriesProvider extends $RegistriesDatapackGenerator {
        /**
         * Get the registry holder lookup provider that includes elements added from the `RegistrySetBuilder`
         */
        getRegistryProvider(): $CompletableFuture<$HolderLookup$Provider>;
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder. All entries that need to be
         * bootstrapped are provided within the `RegistrySetBuilder`.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$HolderLookup$Provider>, datapackEntriesBuilder: $RegistrySetBuilder, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, conditionsBuilder: $Consumer_<$BiConsumer<$ResourceKey<never>, $ICondition>>, modIds: $Set_<string>);
        /**
         * Constructs a new datapack provider which generates all registry objects
         * from the provided mods using the holder.
         */
        constructor(output: $PackOutput, registries: $CompletableFuture<$RegistrySetBuilder$PatchedRegistries_>, conditions: $Map_<$ResourceKey_<never>, $List_<$ICondition>>, modIds: $Set_<string>);
        get registryProvider(): $CompletableFuture<$HolderLookup$Provider>;
    }
    /**
     * Enables data providers to check if other data files currently exist. The
     * instance provided in the `GatherDataEvent` utilizes the standard
     * resources (via `VanillaPackResources`), forge's resources, as well as any
     * extra resource packs passed in via the `--existing` argument,
     * or mod resources via the `--existing-mod` argument.
     */
    export class $ExistingFileHelper implements $ExistingFileHelperAccessor {
        isEnabled(): boolean;
        getResource(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): $Resource;
        getResource(loc: $ResourceLocation_, packType: $PackType_): $Resource;
        /**
         * Check if a given resource exists in the known resource packs.
         */
        exists(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): boolean;
        /**
         * Check if a given resource exists in the known resource packs.
         */
        exists(loc: $ResourceLocation_, packType: $PackType_): boolean;
        exists(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): boolean;
        getResourceStack(loc: $ResourceLocation_, packType: $PackType_): $List<$Resource>;
        /**
         * Track the existence of a generated file.
         * 
         * This should be called by data providers immediately when a new data object is
         * created, i.e. not during
         * run but instead
         * when the "builder" (or whatever intermediate object) is created, such as a
         * `ModelBuilder`.
         * 
         * This represents a *promise* to generate the file later, since other
         * datagen may rely on this file existing.
         */
        trackGenerated(loc: $ResourceLocation_, packType: $PackType_, pathSuffix: string, pathPrefix: string): void;
        trackGenerated(arg0: $ResourceLocation_, arg1: $ExistingFileHelper$IResourceType): void;
        invokeGetManager(arg0: $PackType_): $ResourceManager;
        /**
         * Create a new helper. This should probably *NOT* be used by mods, as
         * the instance provided by forge is designed to be a central instance that
         * tracks existence of generated data.
         * 
         * Only create a new helper if you intentionally want to ignore the existence of
         * other generated files.
         */
        constructor(existingPacks: $Collection_<$Path_>, existingMods: $Set_<string>, enable: boolean, assetIndex: string, assetsDir: $File_);
        get enabled(): boolean;
    }
    export class $ExistingFileHelper$IResourceType {
    }
    export interface $ExistingFileHelper$IResourceType {
        getPrefix(): string;
        getSuffix(): string;
        getPackType(): $PackType;
        get prefix(): string;
        get suffix(): string;
        get packType(): $PackType;
    }
    export class $LanguageProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        add(key: $ItemStack_, name: string): void;
        add(tagKey: $TagKey_<never>, name: string): void;
        add(key: $Item_, name: string): void;
        add(key: $MobEffect_, name: string): void;
        add(key: $EntityType_<never>, name: string): void;
        add(key: string, value: string): void;
        add(key: $Block_, name: string): void;
        addItem(key: $Supplier_<$Item>, name: string): void;
        addEffect(key: $Supplier_<$MobEffect>, name: string): void;
        addBlock(key: $Supplier_<$Block>, name: string): void;
        addTag(key: $Supplier_<$TagKey<never>>, name: string): void;
        addEntityType(key: $Supplier_<$EntityType<never>>, name: string): void;
        addDimension(dimension: $ResourceKey_<$Level>, value: string): void;
        addItemStack(key: $Supplier_<$ItemStack>, name: string): void;
        constructor(output: $PackOutput, modid: string, locale: string);
        get name(): string;
    }
}
