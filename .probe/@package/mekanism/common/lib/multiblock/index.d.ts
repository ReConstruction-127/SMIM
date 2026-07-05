import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $List, $UUID_, $Set_, $Collection, $Map, $Set } from "@package/java/util";
import { $TileEntityStructuralMultiblock } from "@package/mekanism/common/tile/prefab";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionHand_, $ItemInteractionResult, $Container } from "@package/net/minecraft/world";
import { $IChemicalTank, $ChemicalStack, $IMekanismChemicalHandler } from "@package/mekanism/api/chemical";
import { $Supplier_, $BiPredicate } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ITileHeatHandler } from "@package/mekanism/common/capabilities/heat";
import { $Enum } from "@package/java/lang";
import { $Int2ObjectSortedMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $ILangEntry_ } from "@package/mekanism/api/text";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $VoxelCuboid, $BlockPosBuilder, $VoxelPlane, $IShape } from "@package/mekanism/common/lib/math/voxel";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $AutomationType } from "@package/mekanism/api";
import { $IMekanismInventory, $IInventorySlot } from "@package/mekanism/api/inventory";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IHeatCapacitor, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";
import { $IEnergyContainer, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/lib/multiblock" {
    export class $IMultiblockBase {
    }
    export interface $IMultiblockBase extends $ITileWrapper {
        getStructure(manager: $MultiblockManager<never>): $Structure;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getDefaultData(): $MultiblockData;
        resetForFormed(): void;
        hasStructure(structure: $Structure): boolean;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        get defaultData(): $MultiblockData;
    }
    export class $IStructuralMultiblock {
    }
    export interface $IStructuralMultiblock extends $IMultiblockBase {
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        canInterface(manager: $MultiblockManager<never>): boolean;
        hasFormedMultiblock(): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        structuralGuiAccessAllowed(): boolean;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
    export class $Structure$Axis extends $Enum<$Structure$Axis> {
        static get(side: $Direction_): $Structure$Axis;
        static values(): $Structure$Axis[];
        static valueOf(name: string): $Structure$Axis;
        set(pos: $BlockPosBuilder, val: number): void;
        getCoord(pos: $BlockPos_): number;
        horizontal(): $Structure$Axis;
        vertical(): $Structure$Axis;
        static X: $Structure$Axis;
        static Y: $Structure$Axis;
        static Z: $Structure$Axis;
    }
    /**
     * Values that may be interpreted as {@link $Structure$Axis}.
     */
    export type $Structure$Axis_ = "x" | "y" | "z";
    export class $IMultiblock<T extends $MultiblockData> {
    }
    export interface $IMultiblock<T extends $MultiblockData> extends $IMultiblockBase {
        getManager(): $MultiblockManager<T>;
        getStructure(manager: $MultiblockManager<never>): $Structure;
        getStructure(): $Structure;
        getMultiblock(): T;
        createFormationProtocol(): $FormationProtocol<T>;
        setStructure(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getDefaultData(): T;
        hasStructure(structure: $Structure): boolean;
        canBeMaster(): boolean;
        createMultiblock(): T;
        getCacheID(): $UUID;
        resetCache(): void;
        isMaster(): boolean;
        get manager(): $MultiblockManager<T>;
        get multiblock(): T;
        get defaultData(): T;
        get cacheID(): $UUID;
        get master(): boolean;
    }
    export class $IValveHandler$ValveData {
        onTransfer(): void;
        side: $Direction;
        activeTicks: number;
        location: $BlockPos;
        prevActive: boolean;
        constructor(location: $BlockPos_, side: $Direction_);
    }
    export class $MultiblockData implements $IMekanismInventory, $IMekanismFluidHandler, $IMekanismStrictEnergyHandler, $ITileHeatHandler, $IMekanismChemicalHandler {
        remove(world: $Level_, oldStructure: $Structure): void;
        length(): number;
        getBounds(): $VoxelCuboid;
        width(): number;
        tick(world: $Level_): boolean;
        isDirty(): boolean;
        getLevel(): $Level;
        setShape(shape: $IShape): boolean;
        height(): number;
        getMaxPos(): $BlockPos;
        isFormed(): boolean;
        getMinPos(): $BlockPos;
        onCreated(world: $Level_): void;
        getVolume(): number;
        meltdownHappened(world: $Level_): void;
        formedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        readUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        getOutsideSide(pos: $BlockPos_): $Direction;
        isKnownLocation(pos: $BlockPos_): boolean;
        setFormedForce(formed: boolean): void;
        getValveData(): $Collection<$IValveHandler$ValveData>;
        notifyAllUpdateComparator(world: $Level_): void;
        markDirtyComparator(world: $Level_): void;
        allowsStructuralGuiAccess(multiblock: $TileEntityStructuralMultiblock): boolean;
        notExternalFormedBiPred<T>(): $BiPredicate<T, $AutomationType>;
        forceUpdateComparatorLevel(): void;
        isPositionInsideBounds<T extends $MultiblockData>(structure: $Structure, pos: $BlockPos_): boolean;
        getCurrentRedstoneLevel(): number;
        isPositionOutsideBounds(pos: $BlockPos_): boolean;
        setVolume(volume: number): void;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        markDirty(): void;
        resetDirty(): void;
        getHeatCapacitors(side: $Direction_): $List<$IHeatCapacitor>;
        getInventorySlots(side: $Direction_): $List<$IInventorySlot>;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        onContentsChanged(): void;
        writeUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): void;
        hasInventory(): boolean;
        getSlots(arg0: $Direction_): number;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isInventoryEmpty(): boolean;
        isInventoryEmpty(arg0: $Direction_): boolean;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTanks(arg0: $Direction_): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergy(arg0: number, arg1: $Direction_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        getAdjacent(side: $Direction_): $IHeatHandler;
        simulateAdjacent(): number;
        simulate(): $HeatAPI$HeatTransfer;
        simulateEnvironment(): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        updateHeatCapacitors(side: $Direction_): void;
        getAmbientTemperature(side: $Direction_): number;
        isValid(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): boolean;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack, arg2: $Direction_): void;
        canHandleChemicals(): boolean;
        getChemicalTank(arg0: number, arg1: $Direction_): $IChemicalTank;
        getChemicalInTank(arg0: number, arg1: $Direction_): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        insertChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Direction_, arg2: $Action_): $ChemicalStack;
        getCountChemicalTanks(arg0: $Direction_): number;
        getChemicalTankCapacity(arg0: number, arg1: $Direction_): number;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getStackInSlot(arg0: number): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        getInventorySideFor(): $Direction;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number): number;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        setEnergy(arg0: number, arg1: number): void;
        getEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergyContainerCount(): number;
        getEnergySideFor(): $Direction;
        getMaxEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getNeededEnergy(arg0: number): number;
        getTotalInverseConductionCoefficient(arg0: $Direction_): number;
        getTotalHeatCapacity(arg0: $Direction_): number;
        getTotalTemperature(arg0: $Direction_): number;
        canHandleHeat(): boolean;
        getHeatCapacity(arg0: number, arg1: $Direction_): number;
        getHeatCapacitor(arg0: number, arg1: $Direction_): $IHeatCapacitor;
        handleHeat(arg0: number, arg1: $Direction_): void;
        handleHeat(arg0: number, arg1: number, arg2: $Direction_): void;
        getInverseInsulation(arg0: number, arg1: $Direction_): number;
        getInverseConduction(arg0: number, arg1: $Direction_): number;
        getTotalInverseInsulation(arg0: $Direction_): number;
        getHeatCapacitorCount(arg0: $Direction_): number;
        getTemperature(arg0: number, arg1: $Direction_): number;
        isValid(arg0: number, arg1: $ChemicalStack): boolean;
        setChemicalInTank(arg0: number, arg1: $ChemicalStack): void;
        getChemicalTanks(): number;
        getChemicalInTank(arg0: number): $ChemicalStack;
        insertChemical(arg0: number, arg1: $ChemicalStack, arg2: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: number, arg2: $Action_): $ChemicalStack;
        getChemicalTankCapacity(arg0: number): number;
        getSideFor(): $Direction;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getTotalHeatCapacity(): number;
        getTotalInverseConduction(): number;
        getTotalTemperature(): number;
        getHeatSideFor(): $Direction;
        getHeatCapacity(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getInverseConduction(arg0: number): number;
        getHeatCapacitorCount(): number;
        getTemperature(arg0: number): number;
        insertChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: number, arg1: $Action_): $ChemicalStack;
        extractChemical(arg0: $ChemicalStack, arg1: $Action_): $ChemicalStack;
        kjs$self(): $IItemHandler;
        kjs$getBlock(level: $Level_): $LevelBlock;
        kjs$isMutable(): boolean;
        kjs$setStackInSlot(slot: number, stack: $ItemStack_): void;
        isEmpty(): boolean;
        getWidth(): number;
        clear(): void;
        clear(match: $ItemPredicate_): void;
        find(): number;
        find(match: $ItemPredicate_): number;
        count(): number;
        count(match: $ItemPredicate_): number;
        setChanged(): void;
        getHeight(): number;
        insertItem(stack: $ItemStack_, simulate: boolean): $ItemStack;
        getAllItems(): $List<$ItemStack>;
        asContainer(): $Container;
        countNonEmpty(): number;
        countNonEmpty(match: $ItemPredicate_): number;
        getSlots(): number;
        isItemValid(slot: number, stack: $ItemStack_): boolean;
        getSlotLimit(slot: number): number;
        getStackInSlot(slot: number): $ItemStack;
        insertItem(slot: number, stack: $ItemStack_, simulate: boolean): $ItemStack;
        extractItem(slot: number, amount: number, simulate: boolean): $ItemStack;
        recheckStructure: boolean;
        hasMaster: boolean;
        valves: $Set<$IValveHandler$ValveData>;
        renderLocation: $BlockPos;
        inventoryID: $UUID;
        locations: $Set<$BlockPos>;
        internalLocations: $Set<$BlockPos>;
        constructor(tile: $BlockEntity);
        get bounds(): $VoxelCuboid;
        get dirty(): boolean;
        get level(): $Level;
        set shape(value: $IShape);
        get maxPos(): $BlockPos;
        get formed(): boolean;
        get minPos(): $BlockPos;
        set formedForce(value: boolean);
        get valveData(): $Collection<$IValveHandler$ValveData>;
        get currentRedstoneLevel(): number;
        get inventorySideFor(): $Direction;
        get fluidSideFor(): $Direction;
        get energySideFor(): $Direction;
        get sideFor(): $Direction;
        get totalInverseConduction(): number;
        get heatSideFor(): $Direction;
        get empty(): boolean;
        get allItems(): $List<$ItemStack>;
    }
    export class $Structure {
        invalidate(world: $Level_): void;
        size(): number;
        add(s: $Structure): void;
        contains(pos: $BlockPos_): boolean;
        tick<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        isValid(): boolean;
        getManager(): $MultiblockManager<never>;
        getController(): $IMultiblock<never>;
        doImmediateUpdate<TILE extends $BlockEntity>(tile: TILE, tryValidate: boolean): void;
        setMultiblockData(multiblockData: $MultiblockData): void;
        markForUpdate(world: $Level_, invalidate: boolean): void;
        getTile(pos: $BlockPos_): $IMultiblockBase;
        getMultiblockData(): $MultiblockData;
        runUpdate<TILE extends $BlockEntity>(tile: TILE): $FormationProtocol$FormationResult;
        removeMultiblock(world: $Level_): void;
        getMinorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        getMajorAxisMap(axis: $Structure$Axis_): $Int2ObjectSortedMap<$VoxelPlane>;
        static INVALID: $Structure;
        constructor(node: $IMultiblockBase);
        get valid(): boolean;
        get manager(): $MultiblockManager<never>;
        get controller(): $IMultiblock<never>;
    }
    export class $FormationProtocol$FormationResult {
        static fail(text: $ILangEntry_, pos: $BlockPos_): $FormationProtocol$FormationResult;
        static fail(text: $Component_): $FormationProtocol$FormationResult;
        static fail(text: $Component_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_, pos: $BlockPos_, state: $BlockState_, noIgnore: boolean): $FormationProtocol$FormationResult;
        static fail(text: $ILangEntry_): $FormationProtocol$FormationResult;
        isFormed(): boolean;
        getResultText(): $Component;
        isNoIgnore(): boolean;
        static SUCCESS: $FormationProtocol$FormationResult;
        static FAIL: $FormationProtocol$FormationResult;
        get formed(): boolean;
        get resultText(): $Component;
        get noIgnore(): boolean;
    }
    export class $MultiblockManager<T extends $MultiblockData> {
        getName(): string;
        static reset(): void;
        getCache(multiblockID: $UUID_): $MultiblockCache<T>;
        isCompatible(tile: $BlockEntity): boolean;
        createValidator(): $IStructureValidator<T>;
        handleDirtyMultiblock(multiblock: T): void;
        getUniqueInventoryID(): $UUID;
        markTicked(multiblock: T): void;
        trackCache(id: $UUID_, cache: $MultiblockCache<T>): void;
        getNameLower(): string;
        createCache(): $MultiblockCache<T>;
        replaceCaches(staleIds: $Set_<$UUID_>, id: $UUID_, cache: $MultiblockCache<T>): void;
        static createOrLoadAll(): void;
        constructor(name: string, cacheSupplier: $Supplier_<$MultiblockCache<T>>, validatorSupplier: $Supplier_<$IStructureValidator<T>>);
        get name(): string;
        get uniqueInventoryID(): $UUID;
        get nameLower(): string;
    }
}
