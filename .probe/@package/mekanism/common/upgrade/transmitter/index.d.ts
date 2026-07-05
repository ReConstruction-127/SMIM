import { $ConnectionType_, $ConnectionType } from "@package/mekanism/common/lib/transmitter";
import { $ChemicalStack } from "@package/mekanism/api/chemical";
import { $IUpgradeData } from "@package/mekanism/common/upgrade";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IEnergyContainer } from "@package/mekanism/api/energy";

declare module "@package/mekanism/common/upgrade/transmitter" {
    export class $MechanicalPipeUpgradeData extends $TransmitterUpgradeData {
        contents: $FluidStack;
        redstoneReactive: boolean;
        connectionTypes: $ConnectionType[];
        constructor(redstoneReactive: boolean, connectionTypes: $ConnectionType_[], contents: $FluidStack_);
    }
    export class $TransmitterUpgradeData implements $IUpgradeData {
        redstoneReactive: boolean;
        connectionTypes: $ConnectionType[];
        constructor(redstoneReactive: boolean, connectionTypes: $ConnectionType_[]);
    }
    export class $UniversalCableUpgradeData extends $TransmitterUpgradeData {
        buffer: $IEnergyContainer;
        redstoneReactive: boolean;
        connectionTypes: $ConnectionType[];
        constructor(redstoneReactive: boolean, connectionTypes: $ConnectionType_[], buffer: $IEnergyContainer);
    }
    export class $PressurizedTubeUpgradeData extends $TransmitterUpgradeData {
        contents: $ChemicalStack;
        redstoneReactive: boolean;
        connectionTypes: $ConnectionType[];
        constructor(redstoneReactive: boolean, connectionTypes: $ConnectionType_[], contents: $ChemicalStack);
    }
}
