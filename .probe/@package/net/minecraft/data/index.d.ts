import { $JsonElement_ } from "@package/com/google/gson";
import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $HashCode } from "@package/com/google/common/hash";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Comparator, $Map } from "@package/java/util";
import { $ToIntFunction } from "@package/java/util/function";
import { $WorldVersion } from "@package/net/minecraft";
import { $HolderLookup$Provider, $Registry } from "@package/net/minecraft/core";
import { $Path_, $Path } from "@package/java/nio/file";
import { $AtomicInteger } from "@package/java/util/concurrent/atomic";
import { $ResourceLocation_, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
export * as recipes from "@package/net/minecraft/data/recipes";
export * as loot from "@package/net/minecraft/data/loot";
export * as tags from "@package/net/minecraft/data/tags";
export * as worldgen from "@package/net/minecraft/data/worldgen";

declare module "@package/net/minecraft/data" {
    export class $BlockFamily$Variant extends $Enum<$BlockFamily$Variant> {
        static values(): $BlockFamily$Variant[];
        static valueOf(arg0: string): $BlockFamily$Variant;
        getRecipeGroup(): string;
        static CUSTOM_FENCE_GATE: $BlockFamily$Variant;
        static WALL: $BlockFamily$Variant;
        static CUT: $BlockFamily$Variant;
        static CHISELED: $BlockFamily$Variant;
        static CUSTOM_FENCE: $BlockFamily$Variant;
        static BUTTON: $BlockFamily$Variant;
        static FENCE_GATE: $BlockFamily$Variant;
        static STAIRS: $BlockFamily$Variant;
        static FENCE: $BlockFamily$Variant;
        static WALL_SIGN: $BlockFamily$Variant;
        static DOOR: $BlockFamily$Variant;
        static MOSAIC: $BlockFamily$Variant;
        static TRAPDOOR: $BlockFamily$Variant;
        static PRESSURE_PLATE: $BlockFamily$Variant;
        static POLISHED: $BlockFamily$Variant;
        static CRACKED: $BlockFamily$Variant;
        static SIGN: $BlockFamily$Variant;
        static SLAB: $BlockFamily$Variant;
        get recipeGroup(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockFamily$Variant}.
     */
    export type $BlockFamily$Variant_ = "button" | "chiseled" | "cracked" | "cut" | "door" | "custom_fence" | "fence" | "custom_fence_gate" | "fence_gate" | "mosaic" | "sign" | "slab" | "stairs" | "pressure_plate" | "polished" | "trapdoor" | "wall" | "wall_sign";
    export class $DataGenerator {
        /**
         * Runs all the previously registered data providers.
         */
        run(): void;
        merge(arg0: $DataGenerator): void;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: $DataProvider$Factory_<T>): T;
        addProvider<T extends $DataProvider>(arg0: boolean, arg1: T): T;
        getVanillaPack(toRun: boolean): $DataGenerator$PackGenerator;
        getPackOutput(arg0: string): $PackOutput;
        getPackOutput(): $PackOutput;
        getPackGenerator(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getBuiltinDatapack(arg0: boolean, arg1: string, arg2: string): $DataGenerator$PackGenerator;
        getBuiltinDatapack(toRun: boolean, providerPrefix: string): $DataGenerator$PackGenerator;
        getProvidersView(): $Map<string, $DataProvider>;
        constructor(rootOutputFolder: $Path_, version: $WorldVersion, alwaysGenerate: boolean);
        get providersView(): $Map<string, $DataProvider>;
    }
    export class $BlockFamily {
        get(variant: $BlockFamily$Variant_): $Block;
        getVariants(): $Map<$BlockFamily$Variant, $Block>;
        getRecipeUnlockedBy(): (string) | undefined;
        getRecipeGroupPrefix(): (string) | undefined;
        shouldGenerateRecipe(): boolean;
        getBaseBlock(): $Block;
        shouldGenerateModel(): boolean;
        get variants(): $Map<$BlockFamily$Variant, $Block>;
        get recipeUnlockedBy(): (string) | undefined;
        get recipeGroupPrefix(): (string) | undefined;
        get baseBlock(): $Block;
    }
    export class $DataGenerator$PackGenerator {
        addProvider<T extends $DataProvider>(factory: $DataProvider$Factory_<T>): T;
    }
    export class $CachedOutput {
        static NO_CACHE: $CachedOutput;
    }
    export interface $CachedOutput {
        writeIfNeeded(filePath: $Path_, data: number[], hashCode: $HashCode): void;
    }
    /**
     * Values that may be interpreted as {@link $CachedOutput}.
     */
    export type $CachedOutput_ = ((arg0: $Path, arg1: number[], arg2: $HashCode) => void);
    export class $PackOutput$PathProvider {
        file(location: $ResourceLocation_, extension: string): $Path;
        json(location: $ResourceLocation_): $Path;
    }
    export class $DataProvider {
        static saveStable(output: $CachedOutput_, json: $JsonElement_, path: $Path_): $CompletableFuture<never>;
        static saveStable<T>(output: $CachedOutput_, registries: $HolderLookup$Provider, codec: $Codec<T>, value: T, path: $Path_): $CompletableFuture<never>;
        static FIXED_ORDER_FIELDS: $ToIntFunction<string>;
        static INDENT_WIDTH: $AtomicInteger;
        static KEY_COMPARATOR: $Comparator<string>;
        static LOGGER: $Logger;
    }
    export interface $DataProvider {
        /**
         * Gets a name for this provider, to use in logging.
         */
        getName(): string;
        run(output: $CachedOutput_): $CompletableFuture<never>;
        get name(): string;
    }
    export class $PackOutput {
        createRegistryElementsPathProvider(registryKey: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        createRegistryTagsPathProvider(registryKey: $ResourceKey_<$Registry<never>>): $PackOutput$PathProvider;
        getOutputFolder(target: $PackOutput$Target_): $Path;
        getOutputFolder(): $Path;
        createPathProvider(target: $PackOutput$Target_, kind: string): $PackOutput$PathProvider;
        constructor(outputFolder: $Path_);
    }
    export class $PackOutput$Target extends $Enum<$PackOutput$Target> {
        static values(): $PackOutput$Target[];
        static valueOf(arg0: string): $PackOutput$Target;
        static REPORTS: $PackOutput$Target;
        static RESOURCE_PACK: $PackOutput$Target;
        static DATA_PACK: $PackOutput$Target;
    }
    /**
     * Values that may be interpreted as {@link $PackOutput$Target}.
     */
    export type $PackOutput$Target_ = "data_pack" | "resource_pack" | "reports";
    export class $DataProvider$Factory<T extends $DataProvider> {
    }
    export interface $DataProvider$Factory<T extends $DataProvider> {
        create(output: $PackOutput): T;
    }
    /**
     * Values that may be interpreted as {@link $DataProvider$Factory}.
     */
    export type $DataProvider$Factory_<T> = ((arg0: $PackOutput) => T);
}
