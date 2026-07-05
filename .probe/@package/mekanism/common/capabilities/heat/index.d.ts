import { $Direction_ } from "@package/net/minecraft/core";
import { $IMekanismHeatHandler, $HeatAPI$HeatTransfer, $IHeatHandler } from "@package/mekanism/api/heat";

declare module "@package/mekanism/common/capabilities/heat" {
    export class $ITileHeatHandler {
    }
    export interface $ITileHeatHandler extends $IMekanismHeatHandler {
        getAdjacent(side: $Direction_): $IHeatHandler;
        simulateAdjacent(): number;
        simulate(): $HeatAPI$HeatTransfer;
        simulateEnvironment(): number;
        incrementAdjacentTransfer(currentAdjacentTransfer: number, tempToTransfer: number, side: $Direction_): number;
        updateHeatCapacitors(side: $Direction_): void;
        getAmbientTemperature(side: $Direction_): number;
    }
}
