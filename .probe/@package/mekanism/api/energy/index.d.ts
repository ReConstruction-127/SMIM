import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $IContentsListener, $AutomationType_, $Action_ } from "@package/mekanism/api";

declare module "@package/mekanism/api/energy" {
    export class $IEnergyContainer {
    }
    export interface $IEnergyContainer extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): number;
        insert(arg0: number, arg1: $Action_, arg2: $AutomationType_): number;
        isEmpty(): boolean;
        getNeeded(): number;
        setEnergy(arg0: number): void;
        getEnergy(): number;
        setEmpty(): void;
        getMaxEnergy(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get needed(): number;
        get maxEnergy(): number;
    }
    export class $IStrictEnergyHandler {
    }
    export interface $IStrictEnergyHandler {
        setEnergy(arg0: number, arg1: number): void;
        getEnergy(arg0: number): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: $Action_): number;
        getEnergyContainerCount(): number;
        getMaxEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getNeededEnergy(arg0: number): number;
        get energyContainerCount(): number;
    }
    export class $IMekanismStrictEnergyHandler {
    }
    export interface $IMekanismStrictEnergyHandler extends $ISidedStrictEnergyHandler, $IContentsListener {
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergy(arg0: number, arg1: $Direction_): number;
        getEnergyContainers(arg0: $Direction_): $List<$IEnergyContainer>;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        canHandleEnergy(): boolean;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergyContainer(arg0: number, arg1: $Direction_): $IEnergyContainer;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
    }
    export class $ISidedStrictEnergyHandler {
    }
    export interface $ISidedStrictEnergyHandler extends $IStrictEnergyHandler {
        setEnergy(arg0: number, arg1: number): void;
        setEnergy(arg0: number, arg1: number, arg2: $Direction_): void;
        getEnergy(arg0: number): number;
        getEnergy(arg0: number, arg1: $Direction_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        extractEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        extractEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        getEnergyContainerCount(): number;
        getEnergyContainerCount(arg0: $Direction_): number;
        getEnergySideFor(): $Direction;
        getMaxEnergy(arg0: number, arg1: $Direction_): number;
        getMaxEnergy(arg0: number): number;
        insertEnergy(arg0: number, arg1: $Direction_, arg2: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): number;
        insertEnergy(arg0: number, arg1: number, arg2: $Action_): number;
        getNeededEnergy(arg0: number, arg1: $Direction_): number;
        getNeededEnergy(arg0: number): number;
        get energySideFor(): $Direction;
    }
}
