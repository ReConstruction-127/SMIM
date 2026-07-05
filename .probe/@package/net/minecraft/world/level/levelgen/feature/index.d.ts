import { $LevelSimulatedReader, $WorldGenLevel } from "@package/net/minecraft/world/level";
import { $BlockPileConfiguration, $NoneFeatureConfiguration, $DeltaFeatureConfiguration, $RandomBooleanFeatureConfiguration, $EndGatewayConfiguration, $NetherForestVegetationConfig, $ColumnFeatureConfiguration, $UnderwaterMagmaConfiguration, $RandomFeatureConfiguration, $SpikeConfiguration, $MultifaceGrowthConfiguration, $ReplaceSphereConfiguration, $RootSystemConfiguration, $DiskConfiguration, $TwistingVinesConfig, $LayerConfiguration, $PointedDripstoneConfiguration, $SpringConfiguration, $SimpleRandomFeatureConfiguration, $VegetationPatchConfiguration, $HugeMushroomFeatureConfiguration, $ProbabilityFeatureConfiguration, $SculkPatchConfiguration, $LargeDripstoneConfiguration, $FeatureConfiguration, $GeodeConfiguration, $TreeConfiguration, $RandomPatchConfiguration, $CountConfiguration, $BlockColumnConfiguration, $SimpleBlockConfiguration, $BlockStateConfiguration, $DripstoneClusterConfiguration, $OreConfiguration, $ReplaceBlockConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $BlockStateProvider } from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
import { $StructureProcessorList } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $List, $List_ } from "@package/java/util";
import { $PlacedFeature } from "@package/net/minecraft/world/level/levelgen/placement";
import { $BlockPredicate } from "@package/net/minecraft/world/level/levelgen/blockpredicates";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Predicate, $Function_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos, $Holder_, $HolderSet, $Holder, $BlockPos_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $AABB } from "@package/net/minecraft/world/phys";
export * as configurations from "@package/net/minecraft/world/level/levelgen/feature/configurations";
export * as foliageplacers from "@package/net/minecraft/world/level/levelgen/feature/foliageplacers";
export * as stateproviders from "@package/net/minecraft/world/level/levelgen/feature/stateproviders";
export * as treedecorators from "@package/net/minecraft/world/level/levelgen/feature/treedecorators";
export * as rootplacers from "@package/net/minecraft/world/level/levelgen/feature/rootplacers";
export * as featuresize from "@package/net/minecraft/world/level/levelgen/feature/featuresize";
export * as trunkplacers from "@package/net/minecraft/world/level/levelgen/feature/trunkplacers";

declare module "@package/net/minecraft/world/level/levelgen/feature" {
    export class $Feature<FC extends $FeatureConfiguration> {
        configuredCodec(): $MapCodec<$ConfiguredFeature<FC, $Feature<FC>>>;
        static isReplaceable(blockTag: $TagKey_<$Block>): $Predicate<$BlockState>;
        static isGrassOrDirt(level: $LevelSimulatedReader, pos: $BlockPos_): boolean;
        /**
         * @return `true` if any of the six adjacent blocks to the block at `pos` are air.
         */
        static isAdjacentToAir(adjacentStateAccessor: $Function_<$BlockPos, $BlockState>, pos: $BlockPos_): boolean;
        /**
         * @return `true` if any of the six adjacent blocks to the block at `pos` return `true` to the given filter.
         */
        static checkNeighbors(adjacentStateAccessor: $Function_<$BlockPos, $BlockState>, pos: $BlockPos_, filter: $Predicate_<$BlockState>): boolean;
        /**
         * Places the given feature at the given location.
         * During world generation, features are provided with a 3x3 region of chunks, centered on the chunk being generated, that they can safely generate into.
         */
        place(context: $FeaturePlaceContext<FC>): boolean;
        place(config: FC, level: $WorldGenLevel, chunkGenerator: $ChunkGenerator, random: $RandomSource, origin: $BlockPos_): boolean;
        static isDirt(state: $BlockState_): boolean;
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(codec: $Codec<FC>);
    }
    /**
     * Values that may be interpreted as {@link $Feature}.
     */
    export type $Feature_<FC> = RegistryTypes.WorldgenFeature;
    export class $ConfiguredFeature<FC extends $FeatureConfiguration, F extends $Feature<FC>> extends $Record {
        feature(): F;
        config(): FC;
        place(reader: $WorldGenLevel, chunkGenerator: $ChunkGenerator, random: $RandomSource, pos: $BlockPos_): boolean;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$Holder<$ConfiguredFeature<never, never>>>;
        static DIRECT_CODEC: $Codec<$ConfiguredFeature<never, never>>;
        static LIST_CODEC: $Codec<$HolderSet<$ConfiguredFeature<never, never>>>;
        constructor(feature: F, config: FC);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $ConfiguredFeature}.
     */
    export type $ConfiguredFeature_<FC, F> = RegistryTypes.WorldgenConfiguredFeature | { feature?: $Feature_<FC>, config?: $FeatureConfiguration,  } | [feature?: $Feature_<FC>, config?: $FeatureConfiguration, ];
    export class $LakeFeature$Configuration extends $Record implements $FeatureConfiguration {
        fluid(): $BlockStateProvider;
        barrier(): $BlockStateProvider;
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        static CODEC: $Codec<$LakeFeature$Configuration>;
        constructor(arg0: $BlockStateProvider, arg1: $BlockStateProvider);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    /**
     * Values that may be interpreted as {@link $LakeFeature$Configuration}.
     */
    export type $LakeFeature$Configuration_ = { fluid?: $BlockStateProvider, barrier?: $BlockStateProvider,  } | [fluid?: $BlockStateProvider, barrier?: $BlockStateProvider, ];
    export class $FeaturePlaceContext<FC extends $FeatureConfiguration> {
        random(): $RandomSource;
        config(): FC;
        level(): $WorldGenLevel;
        origin(): $BlockPos;
        chunkGenerator(): $ChunkGenerator;
        topFeature(): ($ConfiguredFeature<never, never>) | undefined;
        constructor(topFeature: ($ConfiguredFeature_<never, never>) | undefined, level: $WorldGenLevel, chunkGenerator: $ChunkGenerator, random: $RandomSource, origin: $BlockPos_, config: FC);
    }
    export interface $Feature<FC> extends RegistryMarked<RegistryTypes.WorldgenFeatureTag, RegistryTypes.WorldgenFeature> {}
    export class $SpikeFeature$EndSpike {
        getTopBoundingBox(): $AABB;
        getHeight(): number;
        isGuarded(): boolean;
        isCenterWithinChunk(pos: $BlockPos_): boolean;
        getCenterX(): number;
        getCenterZ(): number;
        getRadius(): number;
        static CODEC: $Codec<$SpikeFeature$EndSpike>;
        constructor(centerX: number, centerZ: number, radius: number, height: number, guarded: boolean);
        get topBoundingBox(): $AABB;
        get height(): number;
        get guarded(): boolean;
        get centerX(): number;
        get centerZ(): number;
        get radius(): number;
    }
    export class $SeagrassFeature extends $Feature<$ProbabilityFeatureConfiguration> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$ProbabilityFeatureConfiguration>);
    }
    export class $BonusChestFeature extends $Feature<$NoneFeatureConfiguration> {
        static VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CHORUS_PLANT: $Feature<$NoneFeatureConfiguration>;
        static MONSTER_ROOM: $Feature<$NoneFeatureConfiguration>;
        static FREEZE_TOP_LAYER: $Feature<$NoneFeatureConfiguration>;
        static BLOCK_COLUMN: $Feature<$BlockColumnConfiguration>;
        static REPLACE_SINGLE_BLOCK: $Feature<$ReplaceBlockConfiguration>;
        static FLOWER: $Feature<$RandomPatchConfiguration>;
        static BLOCK_PILE: $Feature<$BlockPileConfiguration>;
        static SPRING: $Feature<$SpringConfiguration>;
        static UNDERWATER_MAGMA: $Feature<$UnderwaterMagmaConfiguration>;
        static BAMBOO: $Feature<$ProbabilityFeatureConfiguration>;
        static DELTA_FEATURE: $Feature<$DeltaFeatureConfiguration>;
        static ROOT_SYSTEM: $Feature<$RootSystemConfiguration>;
        static NETHER_FOREST_VEGETATION: $Feature<$NetherForestVegetationConfig>;
        static WEEPING_VINES: $Feature<$NoneFeatureConfiguration>;
        static LAKE: $Feature<$LakeFeature$Configuration>;
        static TWISTING_VINES: $Feature<$TwistingVinesConfig>;
        static END_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static HUGE_RED_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static SIMPLE_BLOCK: $Feature<$SimpleBlockConfiguration>;
        static RANDOM_SELECTOR: $Feature<$RandomFeatureConfiguration>;
        static END_ISLAND: $Feature<$NoneFeatureConfiguration>;
        static REPLACE_BLOBS: $Feature<$ReplaceSphereConfiguration>;
        static VINES: $Feature<$NoneFeatureConfiguration>;
        static TREE: $Feature<$TreeConfiguration>;
        static CORAL_CLAW: $Feature<$NoneFeatureConfiguration>;
        static DISK: $Feature<$DiskConfiguration>;
        static FOSSIL: $Feature<$FossilFeatureConfiguration>;
        static FILL_LAYER: $Feature<$LayerConfiguration>;
        static SIMPLE_RANDOM_SELECTOR: $Feature<$SimpleRandomFeatureConfiguration>;
        static ICE_SPIKE: $Feature<$NoneFeatureConfiguration>;
        static NO_BONEMEAL_FLOWER: $Feature<$RandomPatchConfiguration>;
        static ORE: $Feature<$OreConfiguration>;
        static ICEBERG: $Feature<$BlockStateConfiguration>;
        static BASALT_COLUMNS: $Feature<$ColumnFeatureConfiguration>;
        static RANDOM_BOOLEAN_SELECTOR: $Feature<$RandomBooleanFeatureConfiguration>;
        static RANDOM_PATCH: $Feature<$RandomPatchConfiguration>;
        static LARGE_DRIPSTONE: $Feature<$LargeDripstoneConfiguration>;
        static SEAGRASS: $SeagrassFeature;
        static POINTED_DRIPSTONE: $Feature<$PointedDripstoneConfiguration>;
        static GLOWSTONE_BLOB: $Feature<$NoneFeatureConfiguration>;
        static WATERLOGGED_VEGETATION_PATCH: $Feature<$VegetationPatchConfiguration>;
        static CORAL_MUSHROOM: $Feature<$NoneFeatureConfiguration>;
        static VOID_START_PLATFORM: $Feature<$NoneFeatureConfiguration>;
        static DESERT_WELL: $Feature<$NoneFeatureConfiguration>;
        static HUGE_BROWN_MUSHROOM: $Feature<$HugeMushroomFeatureConfiguration>;
        static END_GATEWAY: $Feature<$EndGatewayConfiguration>;
        static END_SPIKE: $Feature<$SpikeConfiguration>;
        static BASALT_PILLAR: $Feature<$NoneFeatureConfiguration>;
        static FOREST_ROCK: $Feature<$BlockStateConfiguration>;
        static SCULK_PATCH: $Feature<$SculkPatchConfiguration>;
        static HUGE_FUNGUS: $Feature<$HugeFungusConfiguration>;
        static BLUE_ICE: $Feature<$NoneFeatureConfiguration>;
        static NO_OP: $Feature<$NoneFeatureConfiguration>;
        static SEA_PICKLE: $Feature<$CountConfiguration>;
        static BONUS_CHEST: $BonusChestFeature;
        static MULTIFACE_GROWTH: $Feature<$MultifaceGrowthConfiguration>;
        static SCATTERED_ORE: $Feature<$OreConfiguration>;
        static CORAL_TREE: $Feature<$NoneFeatureConfiguration>;
        static DRIPSTONE_CLUSTER: $Feature<$DripstoneClusterConfiguration>;
        static GEODE: $Feature<$GeodeConfiguration>;
        static KELP: $Feature<$NoneFeatureConfiguration>;
        constructor(arg0: $Codec<$NoneFeatureConfiguration>);
    }
    export class $WeightedPlacedFeature {
        place(level: $WorldGenLevel, chunkGenerator: $ChunkGenerator, random: $RandomSource, pos: $BlockPos_): boolean;
        static CODEC: $Codec<$WeightedPlacedFeature>;
        chance: number;
        feature: $Holder<$PlacedFeature>;
        constructor(feature: $Holder_<$PlacedFeature>, chance: number);
    }
    export interface $ConfiguredFeature<FC, F> extends RegistryMarked<RegistryTypes.WorldgenConfiguredFeatureTag, RegistryTypes.WorldgenConfiguredFeature> {}
    export class $HugeFungusConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        validBaseState: $BlockState;
        replaceableBlocks: $BlockPredicate;
        static CODEC: $Codec<$HugeFungusConfiguration>;
        decorState: $BlockState;
        planted: boolean;
        hatState: $BlockState;
        stemState: $BlockState;
        constructor(validBaseState: $BlockState_, stemState: $BlockState_, hatState: $BlockState_, decorState: $BlockState_, replaceableBlocks: $BlockPredicate, planted: boolean);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
    export class $FossilFeatureConfiguration implements $FeatureConfiguration {
        getFeatures(): $Stream<$ConfiguredFeature<never, never>>;
        overlayStructures: $List<$ResourceLocation>;
        overlayProcessors: $Holder<$StructureProcessorList>;
        static CODEC: $Codec<$FossilFeatureConfiguration>;
        maxEmptyCornersAllowed: number;
        fossilStructures: $List<$ResourceLocation>;
        fossilProcessors: $Holder<$StructureProcessorList>;
        constructor(fossilStructures: $List_<$ResourceLocation_>, overlayStructures: $List_<$ResourceLocation_>, fossilProcessors: $Holder_<$StructureProcessorList>, overlayProcessors: $Holder_<$StructureProcessorList>, maxEmptyCornersAllowed: number);
        get features(): $Stream<$ConfiguredFeature<never, never>>;
    }
}
