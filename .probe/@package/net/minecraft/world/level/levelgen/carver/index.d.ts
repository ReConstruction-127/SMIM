import { $ProbabilityFeatureConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $ChunkPos, $LevelHeightAccessor } from "@package/net/minecraft/world/level";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Biome } from "@package/net/minecraft/world/level/biome";
import { $CarvingMask, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $HeightProvider } from "@package/net/minecraft/world/level/levelgen/heightproviders";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Function_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess, $HolderSet, $HolderSet_, $Holder } from "@package/net/minecraft/core";
import { $FloatProvider } from "@package/net/minecraft/util/valueproviders";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $Aquifer, $VerticalAnchor, $RandomState, $SurfaceRules$RuleSource, $WorldGenerationContext, $NoiseChunk, $VerticalAnchor_, $NoiseBasedChunkGenerator } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/carver" {
    export interface $WorldCarver<C> extends RegistryMarked<RegistryTypes.WorldgenCarverTag, RegistryTypes.WorldgenCarver> {}
    export class $CarverDebugSettings {
        static of(debugMode: boolean, airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(airState: $BlockState_, waterState: $BlockState_, lavaState: $BlockState_, barrierState: $BlockState_): $CarverDebugSettings;
        static of(debugMode: boolean, airState: $BlockState_): $CarverDebugSettings;
        getBarrierState(): $BlockState;
        isDebugMode(): boolean;
        getLavaState(): $BlockState;
        getWaterState(): $BlockState;
        getAirState(): $BlockState;
        static CODEC: $Codec<$CarverDebugSettings>;
        static DEFAULT: $CarverDebugSettings;
        get barrierState(): $BlockState;
        get debugMode(): boolean;
        get lavaState(): $BlockState;
        get waterState(): $BlockState;
        get airState(): $BlockState;
    }
    export class $CarverConfiguration extends $ProbabilityFeatureConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $MapCodec<$CarverConfiguration>;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>);
    }
    export interface $ConfiguredWorldCarver<WC> extends RegistryMarked<RegistryTypes.WorldgenConfiguredCarverTag, RegistryTypes.WorldgenConfiguredCarver> {}
    export class $CarvingContext extends $WorldGenerationContext {
        /**
         * @deprecated
         */
        registryAccess(): $RegistryAccess;
        /**
         * @deprecated
         */
        topMaterial(biomeMapper: $Function_<$BlockPos, $Holder<$Biome>>, access: $ChunkAccess, pos: $BlockPos_, hasFluid: boolean): ($BlockState) | undefined;
        randomState(): $RandomState;
        constructor(generator: $NoiseBasedChunkGenerator, registryAccess: $RegistryAccess, level: $LevelHeightAccessor, noiseChunk: $NoiseChunk, randomState: $RandomState, surfaceRule: $SurfaceRules$RuleSource);
    }
    export class $CanyonCarverConfiguration extends $CarverConfiguration {
        verticalRotation: $FloatProvider;
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CanyonCarverConfiguration>;
        shape: $CanyonCarverConfiguration$CanyonShapeConfiguration;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
        constructor(config: $CarverConfiguration, verticalRotation: $FloatProvider, shape: $CanyonCarverConfiguration$CanyonShapeConfiguration);
    }
    export class $CaveCarverConfiguration extends $CarverConfiguration {
        lavaLevel: $VerticalAnchor;
        debugSettings: $CarverDebugSettings;
        static CODEC: $Codec<$CaveCarverConfiguration>;
        horizontalRadiusMultiplier: $FloatProvider;
        verticalRadiusMultiplier: $FloatProvider;
        probability: number;
        replaceable: $HolderSet<$Block>;
        y: $HeightProvider;
        yScale: $FloatProvider;
        constructor(config: $CarverConfiguration, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
        constructor(probability: number, y: $HeightProvider, yScale: $FloatProvider, lavaLevel: $VerticalAnchor_, debugSettings: $CarverDebugSettings, replaceable: $HolderSet_<$Block>, horizontalRadiusMultiplier: $FloatProvider, verticalRadiusMultiplier: $FloatProvider, floorLevel: $FloatProvider);
    }
    export class $WorldCarver<C extends $CarverConfiguration> {
        getRange(): number;
        configured(config: C): $ConfiguredWorldCarver<C>;
        isStartChunk(config: C, random: $RandomSource): boolean;
        configuredCodec(): $MapCodec<$ConfiguredWorldCarver<C>>;
        /**
         * Carves the given chunk with caves that originate from the given `chunkPos`.
         * This method is invoked 289 times in order to generate each chunk (once for every position in an 8 chunk radius, or 17x17 chunk area, centered around the target chunk).
         * 
         * @see net.minecraft.world.level.chunk.ChunkGenerator#applyCarvers
         */
        carve(context: $CarvingContext, config: C, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        static CAVE: $WorldCarver<$CaveCarverConfiguration>;
        static CANYON: $WorldCarver<$CanyonCarverConfiguration>;
        static NETHER_CAVE: $WorldCarver<$CaveCarverConfiguration>;
        constructor(codec: $Codec<C>);
        get range(): number;
    }
    /**
     * Values that may be interpreted as {@link $WorldCarver}.
     */
    export type $WorldCarver_<C> = RegistryTypes.WorldgenCarver;
    export class $CanyonCarverConfiguration$CanyonShapeConfiguration {
        static CODEC: $Codec<$CanyonCarverConfiguration$CanyonShapeConfiguration>;
        thickness: $FloatProvider;
        distanceFactor: $FloatProvider;
        horizontalRadiusFactor: $FloatProvider;
        widthSmoothness: number;
        verticalRadiusDefaultFactor: number;
        verticalRadiusCenterFactor: number;
        constructor(distanceFactor: $FloatProvider, thickness: $FloatProvider, widthSmoothness: number, horizontalRadiusFactor: $FloatProvider, verticalRadiusDefaultFactor: number, verticalRadiusCenterFactor: number);
    }
    export class $ConfiguredWorldCarver<WC extends $CarverConfiguration> extends $Record {
        config(): WC;
        isStartChunk(random: $RandomSource): boolean;
        worldCarver(): $WorldCarver<WC>;
        carve(context: $CarvingContext, chunk: $ChunkAccess, biomeAccessor: $Function_<$BlockPos, $Holder<$Biome>>, random: $RandomSource, aquifer: $Aquifer, chunkPos: $ChunkPos, carvingMask: $CarvingMask): boolean;
        static CODEC: $Codec<$Holder<$ConfiguredWorldCarver<never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredWorldCarver<never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredWorldCarver<never>>>;
        constructor(worldCarver: $WorldCarver_<WC>, config: WC);
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredWorldCarver}.
     */
    export type $ConfiguredWorldCarver_<WC> = RegistryTypes.WorldgenConfiguredCarver | { worldCarver?: $WorldCarver_<$CarverConfiguration>, config?: $CarverConfiguration,  } | [worldCarver?: $WorldCarver_<$CarverConfiguration>, config?: $CarverConfiguration, ];
}
