import { $TransmissionType, $DynamicBufferedNetwork, $ConnectionType_, $TransmissionType_, $CompatibleTransmitterValidator, $ConnectionType, $DynamicNetwork } from "@package/mekanism/common/lib/transmitter";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $BasicEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ITileWrapper } from "@package/mekanism/common/tile/interfaces";
import { $List, $UUID_, $Collection_, $Set } from "@package/java/util";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $IChemicalHandler, $IChemicalTank, $ChemicalStack } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider, $BlockPos, $Holder_, $GlobalPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $BasicFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $AbstractAcceptorCache } from "@package/mekanism/common/lib/transmitter/acceptor";
import { $Level } from "@package/net/minecraft/world/level";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $TransmitterUpgradeData, $PressurizedTubeUpgradeData, $MechanicalPipeUpgradeData, $UniversalCableUpgradeData } from "@package/mekanism/common/upgrade/transmitter";
import { $FluidNetwork, $EnergyNetwork, $ChemicalNetwork } from "@package/mekanism/common/content/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Action_, $Chunk3D } from "@package/mekanism/api";
import { $IAlloyTier_, $ITier } from "@package/mekanism/api/tier";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";
import { $TubeTier, $PipeTier, $CableTier } from "@package/mekanism/common/tier";

declare module "@package/mekanism/common/content/network/transmitter" {
    export class $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
    }
    export interface $IUpgradeableTransmitter<DATA extends $TransmitterUpgradeData> {
        getUpgradeData(): DATA;
        getTier(): $ITier;
        parseUpgradeData(data: DATA): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        get upgradeData(): DATA;
        get tier(): $ITier;
    }
    export class $PressurizedTube extends $BufferedTransmitter<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker, $IUpgradeableTransmitter<$PressurizedTubeUpgradeData> {
        getChemicalTank(): $IChemicalTank;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        parseUpgradeData(data: $PressurizedTubeUpgradeData): void;
        onContentsChanged(): void;
        createNetworkByMerging(toMerge: $Collection_<$ChemicalNetwork>): $ChemicalNetwork;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        releaseShare(): $ChemicalStack;
        pullFromAcceptors(): void;
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getUpgradeData(): $PressurizedTubeUpgradeData;
        getTier(): $ITier;
        chemicalTank: $IChemicalTank;
        tier: $TubeTier;
        saveShare: $ChemicalStack;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get upgradeData(): $PressurizedTubeUpgradeData;
    }
    export class $BufferedTransmitter<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER> {
        getCapacity(): number;
        getShare(): BUFFER;
        getBufferWithFallback(): BUFFER;
        releaseShare(): BUFFER;
        noBufferOrFallback(): boolean;
        currentTransmitterConnections: number;
        constructor(tile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get capacity(): number;
        get share(): BUFFER;
        get bufferWithFallback(): BUFFER;
    }
    export class $MechanicalPipe extends $BufferedTransmitter<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler, $IUpgradeableTransmitter<$MechanicalPipeUpgradeData> {
        getTier(): $PipeTier;
        parseUpgradeData(data: $MechanicalPipeUpgradeData): void;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        onContentsChanged(): void;
        takeFluid(fluid: $FluidStack_, action: $Action_): $FluidStack;
        createEmptyNetworkWithID(networkID: $UUID_): $FluidNetwork;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        pullFromAcceptors(): void;
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
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        getTankCapacity(arg0: number): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
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
        getUpgradeData(): $MechanicalPipeUpgradeData;
        tier: $PipeTier;
        saveShare: $FluidStack;
        buffer: $BasicFluidTank;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get fluidSideFor(): $Direction;
        get upgradeData(): $MechanicalPipeUpgradeData;
    }
    export class $UniversalCable extends $BufferedTransmitter<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler, $IUpgradeableTransmitter<$UniversalCableUpgradeData> {
        getUpgradeData(): $UniversalCableUpgradeData;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        parseUpgradeData(data: $UniversalCableUpgradeData): void;
        onContentsChanged(): void;
        dataTypeMatches(data: $TransmitterUpgradeData): boolean;
        pullFromAcceptors(): void;
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
        canUpgrade(alloyTier: $IAlloyTier_): boolean;
        setEnergy(arg0: number, arg1: number): void;
        getEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getEnergyContainerCount(): number;
        getEnergySideFor(): $Direction;
        getMaxEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getNeededEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        getTier(): $ITier;
        tier: $CableTier;
        lastWrite: number;
        buffer: $BasicEnergyContainer;
        currentTransmitterConnections: number;
        constructor(blockProvider: $Holder_<$Block>, tile: $TileEntityTransmitter);
        get upgradeData(): $UniversalCableUpgradeData;
        get energySideFor(): $Direction;
    }
    export class $Transmitter<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $ITileWrapper {
        remove(): void;
        write(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): $CompoundTag;
        read(provider: $HolderLookup$Provider, nbtTags: $CompoundTag_): void;
        isValid(): boolean;
        getLevel(): $Level;
        getBlockPos(): $BlockPos;
        isUpgrading(): boolean;
        isRedstoneActivated(): boolean;
        getConnectionType(side: $Direction_): $ConnectionType;
        handleUpdateTag(tag: $CompoundTag_, provider: $HolderLookup$Provider): boolean;
        isRemote(): boolean;
        canConnect(side: $Direction_): boolean;
        isOrphan(): boolean;
        setOrphan(nowOrphaned: boolean): void;
        takeShare(): void;
        setTransmitterNetwork(network: NETWORK, requestNow: boolean): boolean;
        setTransmitterNetwork(network: NETWORK): void;
        setConnectionTypeRaw(side: $Direction_, type: $ConnectionType_): void;
        hasTransmitterNetwork(): boolean;
        getConnectionTypeRaw(side: $Direction_): $ConnectionType;
        validateAndTakeShare(): void;
        onNeighborBlockChange(side: $Direction_): void;
        getTransmitterNetwork(): NETWORK;
        getAllCurrentConnections(): number;
        static connectionMapContainsSide(connections: number, side: $Direction_): boolean;
        getTileGlobalPos(): $GlobalPos;
        getTileChunk(): $Chunk3D;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        getConnectionTypesRaw(): $ConnectionType[];
        getNewOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        createNetworkByMerging(toMerge: $Collection_<NETWORK>): NETWORK;
        refreshAcceptorConnections(side: $Direction_): void;
        isValidTransmitterBasic(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        supportsTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        supportsTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        setConnectionTypesRaw(connectionTypes: $ConnectionType_[]): void;
        canConnectToAcceptor(side: $Direction_): boolean;
        createEmptyNetworkWithID(networkID: $UUID_): NETWORK;
        getSupportedTransmissionTypes(): $Set<$TransmissionType>;
        getWorldPositionLong(): number;
        getReducedUpdateTag(provider: $HolderLookup$Provider, updateTag: $CompoundTag_): $CompoundTag;
        notifyTileChange(): void;
        onConfigure(player: $Player, side: $Direction_): $InteractionResult;
        refreshConnections(): void;
        refreshConnections(side: $Direction_): void;
        onWorldSeparate(stillPresent: boolean): void;
        getAcceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        onModeChange(side: $Direction_): void;
        getTransmitterTile(): $TileEntityTransmitter;
        startUpgrading(): void;
        requestsUpdate(): void;
        isValidTransmitter(transmitter: $TileEntityTransmitter, side: $Direction_): boolean;
        isConnectionType(side: $Direction_, typeToCheck: $ConnectionType_): boolean;
        getAcceptor(side: $Direction_): ACCEPTOR;
        canConnectMutual(side: $Direction_, cachedTransmitter: TRANSMITTER): boolean;
        canConnectMutual(side: $Direction_, cachedTile: $BlockEntity): boolean;
        handlesRedstone(): boolean;
        markDirtyAcceptor(side: $Direction_): void;
        getPossibleTransmitterConnections(): number;
        getPossibleAcceptorConnections(): number;
        currentTransmitterConnections: number;
        constructor(transmitterTile: $TileEntityTransmitter, ...transmissionTypes: $TransmissionType_[]);
        get valid(): boolean;
        get level(): $Level;
        get blockPos(): $BlockPos;
        get upgrading(): boolean;
        get redstoneActivated(): boolean;
        get remote(): boolean;
        get allCurrentConnections(): number;
        get tileGlobalPos(): $GlobalPos;
        get tileChunk(): $Chunk3D;
        get newOrphanValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get supportedTransmissionTypes(): $Set<$TransmissionType>;
        get worldPositionLong(): number;
        get acceptorCache(): $AbstractAcceptorCache<ACCEPTOR, never>;
        get transmitterTile(): $TileEntityTransmitter;
        get possibleTransmitterConnections(): number;
        get possibleAcceptorConnections(): number;
    }
}
