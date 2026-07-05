import { $RuleBlockEntityModifier, $Passthrough } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule/blockentity";
import { $MapCodec_, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_ } from "@package/java/util";
import { $DataFixer } from "@package/com/mojang/datafixers";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $ObjectArrayList } from "@package/it/unimi/dsi/fastutil/objects";
import { $BlockPos, $Direction$Axis_, $HolderSet_, $Holder, $BlockPos_, $Vec3i, $HolderGetter } from "@package/net/minecraft/core";
import { $Path } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $Enum, $Record } from "@package/java/lang";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Heightmap$Types_ } from "@package/net/minecraft/world/level/levelgen";
import { $ServerLevelAccessor, $LevelAccessor, $LevelReader, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Stream } from "@package/java/util/stream";
import { $IntProvider_ } from "@package/net/minecraft/util/valueproviders";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Rotation_, $Block_, $Rotation, $Mirror_, $Mirror, $Block } from "@package/net/minecraft/world/level/block";
import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";
export * as rule from "@package/net/minecraft/world/level/levelgen/structure/templatesystem/rule";

declare module "@package/net/minecraft/world/level/levelgen/structure/templatesystem" {
    export class $StructurePlaceSettings {
        copy(): $StructurePlaceSettings;
        setLiquidSettings(liquidSettings: $LiquidSettings_): $StructurePlaceSettings;
        setRotationPivot(rotationPivot: $BlockPos_): $StructurePlaceSettings;
        getProcessors(): $List<$StructureProcessor>;
        setFinalizeEntities(finalizeEntities: boolean): $StructurePlaceSettings;
        getRandom(seedPos: $BlockPos_ | null): $RandomSource;
        setIgnoreEntities(finalizeEntities: boolean): $StructurePlaceSettings;
        addProcessor(processor: $StructureProcessor): $StructurePlaceSettings;
        clearProcessors(): $StructurePlaceSettings;
        setRotation(rotation: $Rotation_): $StructurePlaceSettings;
        isIgnoreEntities(): boolean;
        getRotation(): $Rotation;
        setBoundingBox(boundingBox: $BoundingBox): $StructurePlaceSettings;
        getBoundingBox(): $BoundingBox;
        setRandom(random: $RandomSource | null): $StructurePlaceSettings;
        setMirror(mirror: $Mirror_): $StructurePlaceSettings;
        getMirror(): $Mirror;
        setKnownShape(finalizeEntities: boolean): $StructurePlaceSettings;
        popProcessor(processor: $StructureProcessor): $StructurePlaceSettings;
        getRotationPivot(): $BlockPos;
        getRandomPalette(palettes: $List_<$StructureTemplate$Palette>, pos: $BlockPos_ | null): $StructureTemplate$Palette;
        getKnownShape(): boolean;
        shouldApplyWaterlogging(): boolean;
        shouldFinalizeEntities(): boolean;
        constructor();
        set liquidSettings(value: $LiquidSettings_);
        get processors(): $List<$StructureProcessor>;
        set finalizeEntities(value: boolean);
    }
    export class $LinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$LinearPosTest>;
        constructor(minChance: number, maxChance: number, minDist: number, maxDist: number);
    }
    export class $NopProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$NopProcessor>;
        static INSTANCE: $NopProcessor;
    }
    export class $AxisAlignedLinearPosTest extends $PosRuleTest {
        static CODEC: $MapCodec<$AxisAlignedLinearPosTest>;
        constructor(minChance: number, maxChance: number, minDist: number, maxDist: number, axis: $Direction$Axis_);
    }
    export interface $RuleTestType<P> extends RegistryMarked<RegistryTypes.RuleTestTag, RegistryTypes.RuleTest> {}
    /**
     * Represents a (possibly randomly influenced) predicate of a given block state to be replaced during world generation.
     */
    export class $RuleTest {
        test(state: $BlockState_, random: $RandomSource): boolean;
        static CODEC: $Codec<$RuleTest>;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $RuleTest}.
     */
    export type $RuleTest_ = $BlockStatePredicate_ | $CompoundTag_;
    export class $BlockRotProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockRotProcessor>;
        constructor(integrity: number);
        constructor(rottableBlocks: $HolderSet_<$Block>, integrity: number);
    }
    export class $StructureProcessorType<P extends $StructureProcessor> {
        static register<P extends $StructureProcessor>(name: string, codec: $MapCodec_<P>): $StructureProcessorType<P>;
        static BLOCK_AGE: $StructureProcessorType<$BlockAgeProcessor>;
        static BLACKSTONE_REPLACE: $StructureProcessorType<$BlackstoneReplaceProcessor>;
        static BLOCK_ROT: $StructureProcessorType<$BlockRotProcessor>;
        static DIRECT_CODEC: $Codec<$StructureProcessorList>;
        static LAVA_SUBMERGED_BLOCK: $StructureProcessorType<$LavaSubmergedBlockProcessor>;
        static GRAVITY: $StructureProcessorType<$GravityProcessor>;
        static JIGSAW_REPLACEMENT: $StructureProcessorType<$JigsawReplacementProcessor>;
        static NOP: $StructureProcessorType<$NopProcessor>;
        static BLOCK_IGNORE: $StructureProcessorType<$BlockIgnoreProcessor>;
        static PROTECTED_BLOCKS: $StructureProcessorType<$ProtectedBlockProcessor>;
        static CAPPED: $StructureProcessorType<$CappedProcessor>;
        static LIST_OBJECT_CODEC: $Codec<$StructureProcessorList>;
        static LIST_CODEC: $Codec<$Holder<$StructureProcessorList>>;
        static RULE: $StructureProcessorType<$RuleProcessor>;
        static SINGLE_CODEC: $Codec<$StructureProcessor>;
    }
    export interface $StructureProcessorType<P extends $StructureProcessor> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorType}.
     */
    export type $StructureProcessorType_<P> = RegistryTypes.WorldgenStructureProcessor | (() => $MapCodec_<P>);
    export class $StructureTemplate {
        load(blockGetter: $HolderGetter<$Block_>, tag: $CompoundTag_): void;
        static transform(targetPos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_, offset: $BlockPos_): $BlockPos;
        static transform(target: $Vec3_, mirror: $Mirror_, rotation: $Rotation_, centerOffset: $BlockPos_): $Vec3;
        save(tag: $CompoundTag_): $CompoundTag;
        getSize(): $Vec3i;
        getSize(rotation: $Rotation_): $Vec3i;
        static updateShapeAtEdge(level: $LevelAccessor, flags: number, shape: $DiscreteVoxelShape, x: number, y: number, z: number): void;
        static updateShapeAtEdge(level: $LevelAccessor, flags: number, shape: $DiscreteVoxelShape, pos: $BlockPos_): void;
        filterBlocks(pos: $BlockPos_, settings: $StructurePlaceSettings, block: $Block_, relativePosition: boolean): $ObjectArrayList<$StructureTemplate$StructureBlockInfo>;
        filterBlocks(pos: $BlockPos_, settings: $StructurePlaceSettings, block: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        static calculateRelativePosition(decorator: $StructurePlaceSettings, pos: $BlockPos_): $BlockPos;
        fillFromWorld(level: $Level_, pos: $BlockPos_, size: $Vec3i, withEntities: boolean, toIgnore: $Block_ | null): void;
        placeInWorld(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, settings: $StructurePlaceSettings, random: $RandomSource, flags: number): boolean;
        static getZeroPositionWithTransform(pos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_, sizeX: number, sizeZ: number): $BlockPos;
        getZeroPositionWithTransform(targetPos: $BlockPos_, mirror: $Mirror_, rotation: $Rotation_): $BlockPos;
        getBoundingBox(settings: $StructurePlaceSettings, startPos: $BlockPos_): $BoundingBox;
        getBoundingBox(startPos: $BlockPos_, rotation: $Rotation_, pivotPos: $BlockPos_, mirror: $Mirror_): $BoundingBox;
        getAuthor(): string;
        setAuthor(author: string): void;
        static processBlockInfos(arg0: $ServerLevelAccessor, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureBlockInfo_>, arg5: $StructureTemplate | null): $List<$StructureTemplate$StructureBlockInfo>;
        static processBlockInfos(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, settings: $StructurePlaceSettings, blockInfos: $List_<$StructureTemplate$StructureBlockInfo_>): $List<$StructureTemplate$StructureBlockInfo>;
        handler$boo000$ae2$enableClientSideStateSaving(arg0: $CallbackInfo): void;
        handler$boo000$ae2$disableClientSideStateSaving(arg0: $CallbackInfo): void;
        static processEntityInfos(arg0: $StructureTemplate | null, arg1: $LevelAccessor, arg2: $BlockPos_, arg3: $StructurePlaceSettings, arg4: $List_<$StructureTemplate$StructureEntityInfo>): $List<$StructureTemplate$StructureEntityInfo>;
        static transformedVec3d(arg0: $StructurePlaceSettings, arg1: $Vec3_): $Vec3;
        calculateConnectedPosition(decorator: $StructurePlaceSettings, start: $BlockPos_, settings: $StructurePlaceSettings, end: $BlockPos_): $BlockPos;
        static ENTITY_TAG_POS: string;
        static BLOCK_TAG_NBT: string;
        static BLOCK_TAG_STATE: string;
        static PALETTE_LIST_TAG: string;
        static BLOCK_TAG_POS: string;
        static BLOCKS_TAG: string;
        static SIZE_TAG: string;
        static PALETTE_TAG: string;
        static ENTITY_TAG_NBT: string;
        static ENTITIES_TAG: string;
        static ENTITY_TAG_BLOCKPOS: string;
        constructor();
    }
    export interface $PosRuleTestType<P> extends RegistryMarked<RegistryTypes.PosRuleTestTag, RegistryTypes.PosRuleTest> {}
    export class $RuleProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$RuleProcessor>;
        constructor(rules: $List_<$ProcessorRule>);
    }
    export class $RandomBlockMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockMatchTest>;
        constructor(block: $Block_, probability: number);
    }
    export class $StructureTemplate$Palette {
        blocks(block: $Block_): $List<$StructureTemplate$StructureBlockInfo>;
        blocks(): $List<$StructureTemplate$StructureBlockInfo>;
    }
    export class $StructureTemplateManager {
        getOrCreate(id: $ResourceLocation_): $StructureTemplate;
        remove(id: $ResourceLocation_): void;
        get(id: $ResourceLocation_): ($StructureTemplate) | undefined;
        save(id: $ResourceLocation_): boolean;
        readStructure(nbt: $CompoundTag_): $StructureTemplate;
        listTemplates(): $Stream<$ResourceLocation>;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        createAndValidatePathToGeneratedStructure(location: $ResourceLocation_, extension: string): $Path;
        static STRUCTURE_RESOURCE_DIRECTORY_NAME: string;
        constructor(resourceManager: $ResourceManager, levelStorageAccess: $LevelStorageSource$LevelStorageAccess, fixerUpper: $DataFixer, blockLookup: $HolderGetter<$Block_>);
    }
    export class $BlackstoneReplaceProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlackstoneReplaceProcessor>;
        static INSTANCE: $BlackstoneReplaceProcessor;
    }
    export class $RuleTestType<P extends $RuleTest> {
        static register<P extends $RuleTest>(name: string, codec: $MapCodec_<P>): $RuleTestType<P>;
        static ALWAYS_TRUE_TEST: $RuleTestType<$AlwaysTrueTest>;
        static TAG_TEST: $RuleTestType<$TagMatchTest>;
        static BLOCKSTATE_TEST: $RuleTestType<$BlockStateMatchTest>;
        static RANDOM_BLOCK_TEST: $RuleTestType<$RandomBlockMatchTest>;
        static BLOCK_TEST: $RuleTestType<$BlockMatchTest>;
        static RANDOM_BLOCKSTATE_TEST: $RuleTestType<$RandomBlockStateMatchTest>;
    }
    export interface $RuleTestType<P extends $RuleTest> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $RuleTestType}.
     */
    export type $RuleTestType_<P> = RegistryTypes.RuleTest | (() => $MapCodec_<P>);
    export class $BlockStateMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$BlockStateMatchTest>;
        constructor(blockState: $BlockState_);
    }
    export class $AlwaysTrueTest extends $RuleTest {
        static CODEC: $MapCodec<$AlwaysTrueTest>;
        static INSTANCE: $AlwaysTrueTest;
    }
    export class $LavaSubmergedBlockProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$LavaSubmergedBlockProcessor>;
        static INSTANCE: $LavaSubmergedBlockProcessor;
        constructor();
    }
    export interface $StructureProcessorType<P> extends RegistryMarked<RegistryTypes.WorldgenStructureProcessorTag, RegistryTypes.WorldgenStructureProcessor> {}
    export class $PosAlwaysTrueTest extends $PosRuleTest {
        static CODEC: $MapCodec<$PosAlwaysTrueTest>;
        static INSTANCE: $PosAlwaysTrueTest;
    }
    export class $ProcessorRule {
        test(inputState: $BlockState_, existingState: $BlockState_, localPos: $BlockPos_, relativePos: $BlockPos_, structurePos: $BlockPos_, random: $RandomSource): boolean;
        getOutputState(): $BlockState;
        getOutputTag(random: $RandomSource, tag: $CompoundTag_ | null): $CompoundTag;
        static CODEC: $Codec<$ProcessorRule>;
        static DEFAULT_BLOCK_ENTITY_MODIFIER: $Passthrough;
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, posPredicate: $PosRuleTest, outputState: $BlockState_, blockEntityModifier: $RuleBlockEntityModifier);
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, posPredicate: $PosRuleTest, outputState: $BlockState_);
        constructor(inputPredicate: $RuleTest_, locPredicate: $RuleTest_, outputState: $BlockState_);
        get outputState(): $BlockState;
    }
    export class $CappedProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$CappedProcessor>;
        constructor(delegate: $StructureProcessor, limit: $IntProvider_);
    }
    export class $TagMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$TagMatchTest>;
        constructor(tag: $TagKey_<$Block>);
    }
    export interface $StructureProcessorList extends RegistryMarked<RegistryTypes.WorldgenProcessorListTag, RegistryTypes.WorldgenProcessorList> {}
    export class $LiquidSettings extends $Enum<$LiquidSettings> implements $StringRepresentable {
        static values(): $LiquidSettings[];
        static valueOf(arg0: string): $LiquidSettings;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$LiquidSettings>;
        static IGNORE_WATERLOGGING: $LiquidSettings;
        static APPLY_WATERLOGGING: $LiquidSettings;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $LiquidSettings}.
     */
    export type $LiquidSettings_ = "ignore_waterlogging" | "apply_waterlogging";
    export class $StructureProcessor {
        process(arg0: $LevelReader, arg1: $BlockPos_, arg2: $BlockPos_, arg3: $StructureTemplate$StructureBlockInfo_, arg4: $StructureTemplate$StructureBlockInfo_, arg5: $StructurePlaceSettings, arg6: $StructureTemplate | null): $StructureTemplate$StructureBlockInfo;
        /**
         * @deprecated
         */
        processBlock(level: $LevelReader, offset: $BlockPos_, pos: $BlockPos_, blockInfo: $StructureTemplate$StructureBlockInfo_, relativeBlockInfo: $StructureTemplate$StructureBlockInfo_, settings: $StructurePlaceSettings): $StructureTemplate$StructureBlockInfo;
        processEntity(arg0: $LevelReader, arg1: $BlockPos_, arg2: $StructureTemplate$StructureEntityInfo, arg3: $StructureTemplate$StructureEntityInfo, arg4: $StructurePlaceSettings, arg5: $StructureTemplate): $StructureTemplate$StructureEntityInfo;
        finalizeProcessing(serverLevel: $ServerLevelAccessor, offset: $BlockPos_, pos: $BlockPos_, originalBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>, processedBlockInfos: $List_<$StructureTemplate$StructureBlockInfo_>, settings: $StructurePlaceSettings): $List<$StructureTemplate$StructureBlockInfo>;
        constructor();
    }
    export class $StructureTemplate$StructureBlockInfo extends $Record {
        state(): $BlockState;
        pos(): $BlockPos;
        nbt(): $CompoundTag;
        constructor(pos: $BlockPos_, state: $BlockState_, nbt: $CompoundTag_ | null);
    }
    /**
     * Values that may be interpreted as {@link $StructureTemplate$StructureBlockInfo}.
     */
    export type $StructureTemplate$StructureBlockInfo_ = { state?: $BlockState_, nbt?: $CompoundTag_, pos?: $BlockPos_,  } | [state?: $BlockState_, nbt?: $CompoundTag_, pos?: $BlockPos_, ];
    export class $PosRuleTest {
        test(localPos: $BlockPos_, relativePos: $BlockPos_, structurePos: $BlockPos_, random: $RandomSource): boolean;
        static CODEC: $Codec<$PosRuleTest>;
        constructor();
    }
    export class $StructureTemplate$StructureEntityInfo {
        nbt: $CompoundTag;
        blockPos: $BlockPos;
        pos: $Vec3;
        constructor(pos: $Vec3_, blockPos: $BlockPos_, nbt: $CompoundTag_);
    }
    export class $StructureProcessorList {
        list(): $List<$StructureProcessor>;
        constructor(list: $List_<$StructureProcessor>);
    }
    /**
     * Values that may be interpreted as {@link $StructureProcessorList}.
     */
    export type $StructureProcessorList_ = RegistryTypes.WorldgenProcessorList;
    export class $BlockAgeProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockAgeProcessor>;
        constructor(mossiness: number);
    }
    export class $ProtectedBlockProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$ProtectedBlockProcessor>;
        cannotReplace: $TagKey<$Block>;
        constructor(cannotReplace: $TagKey_<$Block>);
    }
    export class $PosRuleTestType<P extends $PosRuleTest> {
        static register<P extends $PosRuleTest>(name: string, codec: $MapCodec_<P>): $PosRuleTestType<P>;
        static ALWAYS_TRUE_TEST: $PosRuleTestType<$PosAlwaysTrueTest>;
        static AXIS_ALIGNED_LINEAR_POS_TEST: $PosRuleTestType<$AxisAlignedLinearPosTest>;
        static LINEAR_POS_TEST: $PosRuleTestType<$LinearPosTest>;
    }
    export interface $PosRuleTestType<P extends $PosRuleTest> {
        codec(): $MapCodec<P>;
    }
    /**
     * Values that may be interpreted as {@link $PosRuleTestType}.
     */
    export type $PosRuleTestType_<P> = RegistryTypes.PosRuleTest | (() => $MapCodec_<P>);
    export class $JigsawReplacementProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$JigsawReplacementProcessor>;
        static INSTANCE: $JigsawReplacementProcessor;
    }
    export class $BlockIgnoreProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$BlockIgnoreProcessor>;
        static STRUCTURE_AND_AIR: $BlockIgnoreProcessor;
        static AIR: $BlockIgnoreProcessor;
        static STRUCTURE_BLOCK: $BlockIgnoreProcessor;
        constructor(ignoredBlocks: $List_<$Block_>);
    }
    export class $RandomBlockStateMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$RandomBlockStateMatchTest>;
        constructor(blockState: $BlockState_, probability: number);
    }
    export class $GravityProcessor extends $StructureProcessor {
        static CODEC: $MapCodec<$GravityProcessor>;
        constructor(heightmap: $Heightmap$Types_, offset: number);
    }
    export class $BlockMatchTest extends $RuleTest {
        static CODEC: $MapCodec<$BlockMatchTest>;
        constructor(block: $Block_);
    }
}
