import { $JsonObject_, $JsonObject, $JsonElement } from "@package/com/google/gson";
import { $ExistingFileHelper, $ExistingFileHelper$ResourceType } from "@package/net/neoforged/neoforge/common/data";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $BlockModel$GuiLight_ } from "@package/net/minecraft/client/renderer/block/model";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Multimap, $ImmutableMap } from "@package/com/google/common/collect";
import { $SortedMap, $List, $Comparator, $Map } from "@package/java/util";
import { $DataProvider, $PackOutput, $CachedOutput_ } from "@package/net/minecraft/data";
import { $Predicate, $Function_, $Predicate_, $BiFunction_ } from "@package/java/util/function";
import { $Direction } from "@package/net/minecraft/core";
import { $WallSide, $Property } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $CeilingHangingSignBlock, $IronBarsBlock, $WallSignBlock, $Block_, $WallBlock, $PressurePlateBlock, $StandingSignBlock, $RotatedPillarBlock, $DoorBlock, $FenceGateBlock, $FenceBlock, $StairBlock, $ButtonBlock, $TrapDoorBlock, $CrossCollisionBlock, $Block, $WallHangingSignBlock, $SlabBlock } from "@package/net/minecraft/world/level/block";
import { $Comparable } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/client/model/generators" {
    /**
     * Data provider for blockstate files. Extends `BlockModelProvider` so that
     * blockstates and their referenced models can be provided in tandem.
     */
    export class $BlockStateProvider implements $DataProvider {
        getName(): string;
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        fenceBlock(block: $FenceBlock, texture: $ResourceLocation_): void;
        fenceBlock(block: $FenceBlock, name: string, texture: $ResourceLocation_): void;
        axisBlock(block: $RotatedPillarBlock): void;
        axisBlock(block: $RotatedPillarBlock, baseName: $ResourceLocation_): void;
        axisBlock(block: $RotatedPillarBlock, side: $ResourceLocation_, end: $ResourceLocation_): void;
        axisBlock(block: $RotatedPillarBlock, vertical: $ModelFile, horizontal: $ModelFile): void;
        itemModels(): $ItemModelProvider;
        wallBlock(block: $WallBlock, post: $ModelFile, side: $ModelFile, sideTall: $ModelFile): void;
        wallBlock(block: $WallBlock, name: string, texture: $ResourceLocation_): void;
        wallBlock(block: $WallBlock, texture: $ResourceLocation_): void;
        doorBlock(block: $DoorBlock, bottomLeft: $ModelFile, bottomLeftOpen: $ModelFile, bottomRight: $ModelFile, bottomRightOpen: $ModelFile, topLeft: $ModelFile, topLeftOpen: $ModelFile, topRight: $ModelFile, topRightOpen: $ModelFile): void;
        doorBlock(block: $DoorBlock, bottom: $ResourceLocation_, top: $ResourceLocation_): void;
        doorBlock(block: $DoorBlock, name: string, bottom: $ResourceLocation_, top: $ResourceLocation_): void;
        mcLoc(name: string): $ResourceLocation;
        paneBlock(block: $IronBarsBlock, pane: $ResourceLocation_, edge: $ResourceLocation_): void;
        paneBlock(block: $IronBarsBlock, post: $ModelFile, side: $ModelFile, sideAlt: $ModelFile, noSide: $ModelFile, noSideAlt: $ModelFile): void;
        paneBlock(block: $IronBarsBlock, name: string, pane: $ResourceLocation_, edge: $ResourceLocation_): void;
        slabBlock(block: $SlabBlock, doubleslab: $ResourceLocation_, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_): void;
        slabBlock(block: $SlabBlock, doubleslab: $ResourceLocation_, texture: $ResourceLocation_): void;
        slabBlock(block: $SlabBlock, bottom: $ModelFile, top: $ModelFile, doubleslab: $ModelFile): void;
        logBlock(block: $RotatedPillarBlock): void;
        signBlock(signBlock: $StandingSignBlock, wallSignBlock: $WallSignBlock, texture: $ResourceLocation_): void;
        signBlock(signBlock: $StandingSignBlock, wallSignBlock: $WallSignBlock, sign: $ModelFile): void;
        models(): $BlockModelProvider;
        modLoc(name: string): $ResourceLocation;
        cubeAll(block: $Block_): $ModelFile;
        getMultipartBuilder(b: $Block_): $MultiPartBlockStateBuilder;
        paneBlockWithRenderType(block: $IronBarsBlock, pane: $ResourceLocation_, edge: $ResourceLocation_, renderType: string): void;
        paneBlockWithRenderType(block: $IronBarsBlock, pane: $ResourceLocation_, edge: $ResourceLocation_, renderType: $ResourceLocation_): void;
        paneBlockWithRenderType(block: $IronBarsBlock, name: string, pane: $ResourceLocation_, edge: $ResourceLocation_, renderType: string): void;
        paneBlockWithRenderType(block: $IronBarsBlock, name: string, pane: $ResourceLocation_, edge: $ResourceLocation_, renderType: $ResourceLocation_): void;
        fenceBlockWithRenderType(block: $FenceBlock, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        fenceBlockWithRenderType(block: $FenceBlock, name: string, texture: $ResourceLocation_, renderType: string): void;
        fenceBlockWithRenderType(block: $FenceBlock, texture: $ResourceLocation_, renderType: string): void;
        fenceBlockWithRenderType(block: $FenceBlock, name: string, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        stairsBlockWithRenderType(block: $StairBlock, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        stairsBlockWithRenderType(block: $StairBlock, name: string, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: string): void;
        stairsBlockWithRenderType(block: $StairBlock, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: string): void;
        stairsBlockWithRenderType(block: $StairBlock, name: string, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        stairsBlockWithRenderType(block: $StairBlock, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: $ResourceLocation_): void;
        stairsBlockWithRenderType(block: $StairBlock, name: string, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: $ResourceLocation_): void;
        stairsBlockWithRenderType(block: $StairBlock, name: string, texture: $ResourceLocation_, renderType: string): void;
        stairsBlockWithRenderType(block: $StairBlock, texture: $ResourceLocation_, renderType: string): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, renderType: string): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, baseName: $ResourceLocation_, renderType: string): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, baseName: $ResourceLocation_): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, side: $ResourceLocation_, end: $ResourceLocation_, renderType: string): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, side: $ResourceLocation_, end: $ResourceLocation_, renderType: $ResourceLocation_): void;
        axisBlockWithRenderType(block: $RotatedPillarBlock, side: $ResourceLocation_, end: $ResourceLocation_): void;
        simpleBlockWithItem(block: $Block_, model: $ModelFile): void;
        wallBlockWithRenderType(block: $WallBlock, name: string, texture: $ResourceLocation_, renderType: string): void;
        wallBlockWithRenderType(block: $WallBlock, texture: $ResourceLocation_, renderType: string): void;
        wallBlockWithRenderType(block: $WallBlock, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        wallBlockWithRenderType(block: $WallBlock, name: string, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        doorBlockWithRenderType(block: $DoorBlock, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: $ResourceLocation_): void;
        doorBlockWithRenderType(block: $DoorBlock, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: string): void;
        doorBlockWithRenderType(block: $DoorBlock, name: string, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: $ResourceLocation_): void;
        doorBlockWithRenderType(block: $DoorBlock, name: string, bottom: $ResourceLocation_, top: $ResourceLocation_, renderType: string): void;
        logBlockWithRenderType(block: $RotatedPillarBlock, renderType: string): void;
        logBlockWithRenderType(block: $RotatedPillarBlock, baseName: $ResourceLocation_): void;
        horizontalFaceBlock(block: $Block_, model: $ModelFile): void;
        horizontalFaceBlock(block: $Block_, modelFunc: $Function_<$BlockState, $ModelFile>, angleOffset: number): void;
        horizontalFaceBlock(block: $Block_, expander: $Function_<$BlockState, $ModelFile>): void;
        horizontalFaceBlock(block: $Block_, model: $ModelFile, angleOffset: number): void;
        fenceGateBlockWithRenderType(block: $FenceGateBlock, name: string, texture: $ResourceLocation_, renderType: string): void;
        fenceGateBlockWithRenderType(block: $FenceGateBlock, texture: $ResourceLocation_, renderType: string): void;
        fenceGateBlockWithRenderType(block: $FenceGateBlock, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        fenceGateBlockWithRenderType(block: $FenceGateBlock, name: string, texture: $ResourceLocation_, renderType: $ResourceLocation_): void;
        trapdoorBlockWithRenderType(block: $TrapDoorBlock, texture: $ResourceLocation_, orientable: boolean, renderType: string): void;
        trapdoorBlockWithRenderType(block: $TrapDoorBlock, name: string, texture: $ResourceLocation_, orientable: boolean, renderType: string): void;
        trapdoorBlockWithRenderType(block: $TrapDoorBlock, name: string, texture: $ResourceLocation_, orientable: boolean, renderType: $ResourceLocation_): void;
        trapdoorBlockWithRenderType(block: $TrapDoorBlock, texture: $ResourceLocation_, orientable: boolean, renderType: $ResourceLocation_): void;
        simpleBlock(block: $Block_, model: $ModelFile): void;
        simpleBlock(block: $Block_): void;
        simpleBlock(block: $Block_, expander: $Function_<$ModelFile, $ConfiguredModel[]>): void;
        simpleBlock(arg0: $Block_, ...arg1: $ConfiguredModel[]): void;
        fourWayMultipart(builder: $MultiPartBlockStateBuilder, side: $ModelFile): void;
        stairsBlock(block: $StairBlock, name: string, texture: $ResourceLocation_): void;
        stairsBlock(block: $StairBlock, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_): void;
        stairsBlock(block: $StairBlock, texture: $ResourceLocation_): void;
        stairsBlock(block: $StairBlock, name: string, side: $ResourceLocation_, bottom: $ResourceLocation_, top: $ResourceLocation_): void;
        stairsBlock(block: $StairBlock, stairs: $ModelFile, stairsInner: $ModelFile, stairsOuter: $ModelFile): void;
        simpleBlockItem(block: $Block_, model: $ModelFile): void;
        trapdoorBlock(block: $TrapDoorBlock, bottom: $ModelFile, top: $ModelFile, open: $ModelFile, orientable: boolean): void;
        trapdoorBlock(block: $TrapDoorBlock, name: string, texture: $ResourceLocation_, orientable: boolean): void;
        trapdoorBlock(block: $TrapDoorBlock, texture: $ResourceLocation_, orientable: boolean): void;
        pressurePlateBlock(block: $PressurePlateBlock, pressurePlate: $ModelFile, pressurePlateDown: $ModelFile): void;
        pressurePlateBlock(block: $PressurePlateBlock, texture: $ResourceLocation_): void;
        horizontalBlock(block: $Block_, side: $ResourceLocation_, front: $ResourceLocation_, top: $ResourceLocation_): void;
        horizontalBlock(block: $Block_, modelFunc: $Function_<$BlockState, $ModelFile>, angleOffset: number): void;
        horizontalBlock(block: $Block_, expander: $Function_<$BlockState, $ModelFile>): void;
        horizontalBlock(block: $Block_, model: $ModelFile, angleOffset: number): void;
        horizontalBlock(block: $Block_, model: $ModelFile): void;
        blockTexture(block: $Block_): $ResourceLocation;
        fourWayBlock(block: $CrossCollisionBlock, post: $ModelFile, side: $ModelFile): void;
        directionalBlock(block: $Block_, model: $ModelFile): void;
        directionalBlock(block: $Block_, model: $ModelFile, angleOffset: number): void;
        directionalBlock(block: $Block_, modelFunc: $Function_<$BlockState, $ModelFile>, angleOffset: number): void;
        directionalBlock(block: $Block_, expander: $Function_<$BlockState, $ModelFile>): void;
        getVariantBuilder(b: $Block_): $VariantBlockStateBuilder;
        hangingSignBlock(hangingSignBlock: $CeilingHangingSignBlock, wallHangingSignBlock: $WallHangingSignBlock, hangingSign: $ModelFile): void;
        hangingSignBlock(hangingSignBlock: $CeilingHangingSignBlock, wallHangingSignBlock: $WallHangingSignBlock, texture: $ResourceLocation_): void;
        fenceGateBlock(block: $FenceGateBlock, name: string, texture: $ResourceLocation_): void;
        fenceGateBlock(block: $FenceGateBlock, gate: $ModelFile, gateOpen: $ModelFile, gateWall: $ModelFile, gateWallOpen: $ModelFile): void;
        fenceGateBlock(block: $FenceGateBlock, texture: $ResourceLocation_): void;
        buttonBlock(block: $ButtonBlock, texture: $ResourceLocation_): void;
        buttonBlock(block: $ButtonBlock, button: $ModelFile, buttonPressed: $ModelFile): void;
        static WALL_PROPS: $ImmutableMap<$Direction, $Property<$WallSide>>;
        constructor(output: $PackOutput, modid: string, exFileHelper: $ExistingFileHelper);
        get name(): string;
    }
    export class $ModelProvider<T extends $ModelBuilder<T>> implements $DataProvider {
        run(cache: $CachedOutput_): $CompletableFuture<never>;
        sign(arg0: string, arg1: $ResourceLocation_): T;
        nested(): T;
        getBuilder(arg0: string): T;
        button(arg0: string, arg1: $ResourceLocation_): T;
        torchWall(arg0: string, arg1: $ResourceLocation_): T;
        cubeTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        cubeColumn(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        fencePost(arg0: string, arg1: $ResourceLocation_): T;
        wallPost(arg0: string, arg1: $ResourceLocation_): T;
        paneNoSide(arg0: string, arg1: $ResourceLocation_): T;
        mcLoc(name: string): $ResourceLocation;
        panePost(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        orientable(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        fenceSide(arg0: string, arg1: $ResourceLocation_): T;
        wallSide(arg0: string, arg1: $ResourceLocation_): T;
        paneSide(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        slabTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        modLoc(name: string): $ResourceLocation;
        cubeAll(arg0: string, arg1: $ResourceLocation_): T;
        stairs(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        fenceGate(arg0: string, arg1: $ResourceLocation_): T;
        cross(arg0: string, arg1: $ResourceLocation_): T;
        cube(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_, arg5: $ResourceLocation_, arg6: $ResourceLocation_): T;
        carpet(arg0: string, arg1: $ResourceLocation_): T;
        crop(arg0: string, arg1: $ResourceLocation_): T;
        leaves(arg0: string, arg1: $ResourceLocation_): T;
        slab(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        torch(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorOrientableBottom(arg0: string, arg1: $ResourceLocation_): T;
        cubeColumnHorizontal(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        trapdoorOrientableOpen(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorOrientableTop(arg0: string, arg1: $ResourceLocation_): T;
        doorBottomRightOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        orientableWithBottom(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_, arg4: $ResourceLocation_): T;
        withExistingParent(arg0: string, arg1: $ResourceLocation_): T;
        withExistingParent(arg0: string, arg1: string): T;
        pressurePlate(arg0: string, arg1: $ResourceLocation_): T;
        fenceGateOpen(arg0: string, arg1: $ResourceLocation_): T;
        doorBottomLeftOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        fenceGateWall(arg0: string, arg1: $ResourceLocation_): T;
        getExistingFile(path: $ResourceLocation_): $ModelFile$ExistingModelFile;
        doorBottomRight(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        stairsOuter(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        buttonPressed(arg0: string, arg1: $ResourceLocation_): T;
        pressurePlateDown(arg0: string, arg1: $ResourceLocation_): T;
        fenceGateWallOpen(arg0: string, arg1: $ResourceLocation_): T;
        wallSideTall(arg0: string, arg1: $ResourceLocation_): T;
        paneSideAlt(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        paneNoSideAlt(arg0: string, arg1: $ResourceLocation_): T;
        doorTopLeft(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopRight(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        trapdoorTop(arg0: string, arg1: $ResourceLocation_): T;
        doorBottomLeft(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        trapdoorOpen(arg0: string, arg1: $ResourceLocation_): T;
        trapdoorBottom(arg0: string, arg1: $ResourceLocation_): T;
        doorTopLeftOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        doorTopRightOpen(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        stairsInner(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        cubeBottomTop(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_): T;
        singleTexture(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        singleTexture(arg0: string, arg1: $ResourceLocation_, arg2: string, arg3: $ResourceLocation_): T;
        buttonInventory(arg0: string, arg1: $ResourceLocation_): T;
        orientableVertical(arg0: string, arg1: $ResourceLocation_, arg2: $ResourceLocation_): T;
        fenceInventory(arg0: string, arg1: $ResourceLocation_): T;
        wallInventory(arg0: string, arg1: $ResourceLocation_): T;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, T>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(output: $PackOutput, modid: string, folder: string, builderFromModId: $BiFunction_<$ResourceLocation, $ExistingFileHelper, T>, existingFileHelper: $ExistingFileHelper);
        constructor(output: $PackOutput, modid: string, folder: string, factory: $Function_<$ResourceLocation, T>, existingFileHelper: $ExistingFileHelper);
    }
    export class $BlockStateProvider$ConfiguredModelList {
        append(...arg0: $ConfiguredModel[]): $BlockStateProvider$ConfiguredModelList;
        toJSON(): $JsonElement;
        constructor(...arg0: $ConfiguredModel[]);
        constructor(model: $ConfiguredModel);
    }
    export class $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup {
        /**
         * Ends this condition group and returns the part builder
         */
        end(): $MultiPartBlockStateBuilder$PartBuilder;
        condition<T extends $Comparable<T>>(arg0: $Property<T>, ...arg1: T[]): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        nestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        endNestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        useOr(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        nestedConditionGroups: $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>;
        conditions: $Multimap<$Property<never>, $Comparable<never>>;
        constructor(arg0: $MultiPartBlockStateBuilder$PartBuilder);
    }
    export class $VariantBlockStateBuilder$PartialBlockstate implements $Predicate<$BlockState> {
        test(blockState: $BlockState_): boolean;
        "with"<T extends $Comparable<T>>(arg0: $Property<T>, arg1: T): $VariantBlockStateBuilder$PartialBlockstate;
        getOwner(): $Block;
        setModels(...arg0: $ConfiguredModel[]): $VariantBlockStateBuilder;
        addModels(...arg0: $ConfiguredModel[]): $VariantBlockStateBuilder$PartialBlockstate;
        /**
         * Creates a builder for models to assign to this state, which when completed
         * via `Builder#addModel()` will assign the resultant set
         * of models to this state.
         */
        modelForState(): $ConfiguredModel$Builder<$VariantBlockStateBuilder>;
        partialState(): $VariantBlockStateBuilder$PartialBlockstate;
        static comparingByProperties(): $Comparator<$VariantBlockStateBuilder$PartialBlockstate>;
        getSetStates(): $SortedMap<$Property<never>, $Comparable<never>>;
        or(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        negate(): $Predicate<$BlockState>;
        and(arg0: $Predicate_<$BlockState>): $Predicate<$BlockState>;
        get owner(): $Block;
        set models(value: $ConfiguredModel[]);
        get setStates(): $SortedMap<$Property<never>, $Comparable<never>>;
    }
    /**
     * Builder for item models, adds the ability to build overrides via
     * `#override()`.
     */
    export class $ItemModelBuilder extends $ModelBuilder<$ItemModelBuilder> {
        override(arg0: number): $ItemModelBuilder$OverrideBuilder;
        override(): $ItemModelBuilder$OverrideBuilder;
        constructor(outputLocation: $ResourceLocation_, existingFileHelper: $ExistingFileHelper);
    }
    export class $MultiPartBlockStateBuilder implements $IGeneratedBlockState {
        /**
         * Creates a builder for models to assign to a `PartBuilder`, which when
         * completed via `Builder#addModel()` will assign the
         * resultant set of models to the part and return it for further processing.
         */
        part(): $ConfiguredModel$Builder<$MultiPartBlockStateBuilder$PartBuilder>;
        toJson(): $JsonObject;
        constructor(owner: $Block_);
    }
    /**
     * General purpose model builder, contains all the commonalities between item
     * and block models.
     */
    export class $ModelBuilder<T extends $ModelBuilder<T>> extends $ModelFile {
        parent(arg0: $ModelFile): T;
        ao(arg0: boolean): T;
        element(): $ModelBuilder$ElementBuilder;
        element(arg0: number): $ModelBuilder$ElementBuilder;
        texture(arg0: string, arg1: string): T;
        texture(arg0: string, arg1: $ResourceLocation_): T;
        toJson(): $JsonObject;
        guiLight(arg0: $BlockModel$GuiLight_): T;
        transforms(): $ModelBuilder$TransformsBuilder;
        renderType(arg0: string): T;
        renderType(arg0: $ResourceLocation_): T;
        customLoader<L extends $CustomLoaderBuilder<T>>(arg0: $BiFunction_<T, $ExistingFileHelper, L>): L;
        /**
         * @return the number of elements in this model builder
         */
        getElementCount(): number;
        rootTransforms(): $ModelBuilder$RootTransformsBuilder;
        get elementCount(): number;
    }
    /**
     * Builder for block models, does not currently provide any additional
     * functionality over `ModelBuilder`, purely a stub class with a concrete
     * generic.
     */
    export class $BlockModelBuilder extends $ModelBuilder<$BlockModelBuilder> {
        constructor(outputLocation: $ResourceLocation_, existingFileHelper: $ExistingFileHelper);
    }
    /**
     * Builder for variant-type blockstates, i.e. non-multipart blockstates. Should
     * not be manually instantiated, instead use
     * `BlockStateProvider#getVariantBuilder(Block)`.
     * 
     * Variants can either be set via
     * `#setModels(PartialBlockstate, ConfiguredModel...)` or
     * `#addModels(PartialBlockstate, ConfiguredModel...)`, where model(s) can
     * be assigned directly to partial states, or builder
     * style via `#partialState()` and its subsequent methods.
     * 
     * This class also provides the convenience methods
     * `#forAllStates(Function)` and
     * `#forAllStatesExcept(Function, Property...)` for cases where the model
     * for each variant can be decided dynamically based on the state's property
     * values.
     */
    export class $VariantBlockStateBuilder implements $IGeneratedBlockState {
        getOwner(): $Block;
        toJson(): $JsonObject;
        setModels(arg0: $VariantBlockStateBuilder$PartialBlockstate, ...arg1: $ConfiguredModel[]): $VariantBlockStateBuilder;
        addModels(arg0: $VariantBlockStateBuilder$PartialBlockstate, ...arg1: $ConfiguredModel[]): $VariantBlockStateBuilder;
        getModels(): $Map<$VariantBlockStateBuilder$PartialBlockstate, $BlockStateProvider$ConfiguredModelList>;
        partialState(): $VariantBlockStateBuilder$PartialBlockstate;
        forAllStatesExcept(arg0: $Function_<$BlockState, $ConfiguredModel[]>, ...arg1: $Property<never>[]): $VariantBlockStateBuilder;
        forAllStates(mapper: $Function_<$BlockState, $ConfiguredModel[]>): $VariantBlockStateBuilder;
        get owner(): $Block;
    }
    export class $ModelFile {
        getLocation(): $ResourceLocation;
        getUncheckedLocation(): $ResourceLocation;
        /**
         * Assert that this model exists.
         */
        assertExistence(): void;
        get location(): $ResourceLocation;
        get uncheckedLocation(): $ResourceLocation;
    }
    /**
     * Stub class to extend for item model data providers, eliminates some
     * boilerplate constructor parameters.
     */
    export class $ItemModelProvider extends $ModelProvider<$ItemModelBuilder> {
        basicItem(item: $ResourceLocation_): $ItemModelBuilder;
        basicItem(item: $Item_): $ItemModelBuilder;
        simpleBlockItem(block: $Block_): $ItemModelBuilder;
        simpleBlockItem(item: $ResourceLocation_): $ItemModelBuilder;
        spawnEggItem(item: $Item_): $ItemModelBuilder;
        spawnEggItem(item: $ResourceLocation_): $ItemModelBuilder;
        handheldItem(item: $ResourceLocation_): $ItemModelBuilder;
        handheldItem(item: $Item_): $ItemModelBuilder;
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $ItemModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(output: $PackOutput, modid: string, existingFileHelper: $ExistingFileHelper);
    }
    export class $ItemModelBuilder$OverrideBuilder {
        end(): $ItemModelBuilder;
        predicate(arg0: $ResourceLocation_, arg1: number): $ItemModelBuilder$OverrideBuilder;
        model(arg0: $ModelFile): $ItemModelBuilder$OverrideBuilder;
        constructor(arg0: $ItemModelBuilder);
    }
    /**
     * Stub class to extend for block model data providers, eliminates some
     * boilerplate constructor parameters.
     */
    export class $BlockModelProvider extends $ModelProvider<$BlockModelBuilder> {
        static TEXTURE: $ExistingFileHelper$ResourceType;
        static ITEM_FOLDER: string;
        generatedModels: $Map<$ResourceLocation, $BlockModelBuilder>;
        existingFileHelper: $ExistingFileHelper;
        static BLOCK_FOLDER: string;
        constructor(output: $PackOutput, modid: string, existingFileHelper: $ExistingFileHelper);
    }
    /**
     * A builder for `ConfiguredModel`s, which can contain a callback for
     * processing the finished result. If no callback is available (e.g. in the case
     * of `ConfiguredModel#builder()`), some methods will not be available.
     * 
     * Multiple models can be configured at once through the use of
     * `#nextModel()`.
     */
    export class $ConfiguredModel$Builder<T> {
        /**
         * Build all configured models and return them as an array.
         */
        build(): $ConfiguredModel[];
        weight(arg0: number): $ConfiguredModel$Builder<T>;
        modelFile(arg0: $ModelFile): $ConfiguredModel$Builder<T>;
        addModel(): T;
        uvLock(arg0: boolean): $ConfiguredModel$Builder<T>;
        rotationX(arg0: number): $ConfiguredModel$Builder<T>;
        rotationY(arg0: number): $ConfiguredModel$Builder<T>;
        /**
         * Build the most recent model, as if `#nextModel()` was never called.
         * Useful for single-model builders.
         */
        buildLast(): $ConfiguredModel;
        nextModel(): $ConfiguredModel$Builder<T>;
    }
    export class $IGeneratedBlockState {
    }
    export interface $IGeneratedBlockState {
        toJson(): $JsonObject;
    }
    /**
     * Values that may be interpreted as {@link $IGeneratedBlockState}.
     */
    export type $IGeneratedBlockState_ = (() => $JsonObject_);
    export class $MultiPartBlockStateBuilder$PartBuilder {
        end(): $MultiPartBlockStateBuilder;
        condition<T extends $Comparable<T>>(arg0: $Property<T>, ...arg1: T[]): $MultiPartBlockStateBuilder$PartBuilder;
        nestedGroup(): $MultiPartBlockStateBuilder$PartBuilder$ConditionGroup;
        canApplyTo(b: $Block_): boolean;
        useOr(): $MultiPartBlockStateBuilder$PartBuilder;
        nestedConditionGroups: $List<$MultiPartBlockStateBuilder$PartBuilder$ConditionGroup>;
        models: $BlockStateProvider$ConfiguredModelList;
        conditions: $Multimap<$Property<never>, $Comparable<never>>;
    }
    /**
     * Represents a model with blockstate configurations, e.g. rotation, uvlock, and
     * random weight.
     * 
     * Can be manually constructed, created by static factory such as
     * `#allYRotations(ModelFile, int, boolean)`, or created by builder via
     * `#builder()`.
     */
    export class $ConfiguredModel {
        static builder(): $ConfiguredModel$Builder<never>;
        static allRotations(model: $ModelFile, uvlock: boolean): $ConfiguredModel[];
        static allRotations(model: $ModelFile, uvlock: boolean, weight: number): $ConfiguredModel[];
        static allYRotations(model: $ModelFile, x: number, uvlock: boolean): $ConfiguredModel[];
        static allYRotations(model: $ModelFile, x: number, uvlock: boolean, weight: number): $ConfiguredModel[];
        rotationX: number;
        rotationY: number;
        uvLock: boolean;
        weight: number;
        model: $ModelFile;
        static DEFAULT_WEIGHT: number;
        /**
         * Construct a new `ConfiguredModel` with the random weight.
         */
        constructor(model: $ModelFile, rotationX: number, rotationY: number, uvLock: boolean);
        /**
         * Construct a new `ConfiguredModel` with the default rotation (0, 0),
         * uvlock (false), and default random weight.
         */
        constructor(model: $ModelFile);
        /**
         * Construct a new `ConfiguredModel`.
         */
        constructor(model: $ModelFile, rotationX: number, rotationY: number, uvLock: boolean, weight: number);
    }
}
