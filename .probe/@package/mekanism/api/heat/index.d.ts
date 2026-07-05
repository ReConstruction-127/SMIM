import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_ } from "@package/net/minecraft/core";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/heat" {
    export class $HeatAPI$HeatTransfer extends $Record {
        adjacentTransfer(): number;
        environmentTransfer(): number;
        constructor(adjacentTransfer: number, environmentTransfer: number);
    }
    /**
     * Values that may be interpreted as {@link $HeatAPI$HeatTransfer}.
     */
    export type $HeatAPI$HeatTransfer_ = { adjacentTransfer?: number, environmentTransfer?: number,  } | [adjacentTransfer?: number, environmentTransfer?: number, ];
    export class $IMekanismHeatHandler {
    }
    export interface $IMekanismHeatHandler extends $ISidedHeatHandler, $IContentsListener {
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
        getHeatCapacitors(arg0: $Direction_): $List<$IHeatCapacitor>;
    }
    export class $IHeatCapacitor {
    }
    export interface $IHeatCapacitor extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        getHeatCapacity(): number;
        getHeat(): number;
        handleHeat(arg0: number): void;
        setHeat(arg0: number): void;
        getInverseInsulation(): number;
        getInverseConduction(): number;
        isAmbientTemperature(): boolean;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        getTemperature(): number;
        get heatCapacity(): number;
        get inverseInsulation(): number;
        get inverseConduction(): number;
        get ambientTemperature(): boolean;
        get temperature(): number;
    }
    export class $IHeatHandler {
    }
    export interface $IHeatHandler {
        getTotalHeatCapacity(): number;
        getTotalInverseConduction(): number;
        getTotalTemperature(): number;
        getHeatCapacity(arg0: number): number;
        handleHeat(arg0: number): void;
        handleHeat(arg0: number, arg1: number): void;
        getInverseConduction(arg0: number): number;
        getHeatCapacitorCount(): number;
        getTemperature(arg0: number): number;
        get totalHeatCapacity(): number;
        get totalInverseConduction(): number;
        get totalTemperature(): number;
        get heatCapacitorCount(): number;
    }
}
