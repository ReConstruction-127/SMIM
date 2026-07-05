import { $DynamicBufferedNetwork, $DynamicBufferedNetwork$TransferEvent } from "@package/mekanism/common/lib/transmitter";
import { $IExtendedFluidTank, $IMekanismFluidHandler } from "@package/mekanism/api/fluid";
import { $IChemicalTracker } from "@package/mekanism/common/capabilities/chemical";
import { $VariableCapacityEnergyContainer } from "@package/mekanism/common/capabilities/energy";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Action_ } from "@package/mekanism/api";
import { $List, $UUID_, $Collection_ } from "@package/java/util";
import { $UniversalCable, $MechanicalPipe, $PressurizedTube } from "@package/mekanism/common/content/network/transmitter";
import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IChemicalHandler, $ChemicalStack, $Chemical, $IChemicalTank } from "@package/mekanism/api/chemical";
import { $Holder_, $Direction_, $Direction, $Holder } from "@package/net/minecraft/core";
import { $VariableCapacityFluidTank } from "@package/mekanism/common/capabilities/fluid";
import { $IEnergyContainer, $IStrictEnergyHandler, $IMekanismStrictEnergyHandler } from "@package/mekanism/api/energy";
export * as transmitter from "@package/mekanism/common/content/network/transmitter";

declare module "@package/mekanism/common/content/network" {
    export class $EnergyNetwork$EnergyTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$EnergyNetwork> {
        network: $EnergyNetwork;
        constructor(network: $EnergyNetwork);
    }
    export class $FluidNetwork$FluidTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$FluidNetwork> {
        fluidType: $FluidStack;
        network: $FluidNetwork;
        constructor(network: $FluidNetwork, type: $FluidStack_);
    }
    export class $EnergyNetwork extends $DynamicBufferedNetwork<$IStrictEnergyHandler, $EnergyNetwork, number, $UniversalCable> implements $IMekanismStrictEnergyHandler {
        getBuffer(): number;
        getEnergyContainers(side: $Direction_): $List<$IEnergyContainer>;
        onContentsChanged(): void;
        adoptTransmittersAndAcceptorsFrom(net: $EnergyNetwork): $List<$UniversalCable>;
        absorbBuffer(transmitter: $UniversalCable): void;
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
        energyContainer: $VariableCapacityEnergyContainer;
        static ENERGY: void;
        currentScale: number;
        constructor(networkID: $UUID_);
        constructor(networks: $Collection_<$EnergyNetwork>);
        get buffer(): number;
        get energySideFor(): $Direction;
    }
    export class $FluidNetwork extends $DynamicBufferedNetwork<$IFluidHandler, $FluidNetwork, $FluidStack, $MechanicalPipe> implements $IMekanismFluidHandler {
        isCompatibleWith(other: $FluidNetwork): boolean;
        getFluidTanks(side: $Direction_): $List<$IExtendedFluidTank>;
        onContentsChanged(): void;
        getPrevTransferAmount(): number;
        setLastFluid(fluid: $FluidStack_): void;
        adoptTransmittersAndAcceptorsFrom(net: $FluidNetwork): $List<$MechanicalPipe>;
        absorbBuffer(transmitter: $MechanicalPipe): void;
        getCapacityAsInt(): number;
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
        fluidTank: $VariableCapacityFluidTank;
        lastFluid: $FluidStack;
        currentScale: number;
        constructor(networkID: $UUID_);
        constructor(networks: $Collection_<$FluidNetwork>);
        get prevTransferAmount(): number;
        get capacityAsInt(): number;
        get fluidSideFor(): $Direction;
    }
    export class $ChemicalNetwork$ChemicalTransferEvent extends $DynamicBufferedNetwork$TransferEvent<$ChemicalNetwork> {
        transferType: $Holder<$Chemical>;
        network: $ChemicalNetwork;
        constructor(network: $ChemicalNetwork, type: $Holder_<$Chemical>);
    }
    export class $ChemicalNetwork extends $DynamicBufferedNetwork<$IChemicalHandler, $ChemicalNetwork, $ChemicalStack, $PressurizedTube> implements $IChemicalTracker {
        isCompatibleWith(other: $ChemicalNetwork): boolean;
        getBuffer(): $ChemicalStack;
        getChemicalTank(): $IChemicalTank;
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
        onContentsChanged(): void;
        getPrevTransferAmount(): number;
        setLastChemical(chemical: $Holder_<$Chemical>): void;
        adoptTransmittersAndAcceptorsFrom(net: $ChemicalNetwork): $List<$PressurizedTube>;
        absorbBuffer(transmitter: $PressurizedTube): void;
        chemicalTank: $IChemicalTank;
        lastChemical: $Holder<$Chemical>;
        currentScale: number;
        constructor(networkID: $UUID_);
        constructor(networks: $Collection_<$ChemicalNetwork>);
        get buffer(): $ChemicalStack;
        get prevTransferAmount(): number;
    }
}
