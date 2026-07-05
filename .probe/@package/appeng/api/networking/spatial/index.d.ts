import { $Level } from "@package/net/minecraft/world/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $IGridService } from "@package/appeng/api/networking";

declare module "@package/appeng/api/networking/spatial" {
    export class $ISpatialService {
    }
    export interface $ISpatialService extends $IGridService {
        getLevel(): $Level;
        getMin(): $BlockPos;
        getMax(): $BlockPos;
        requiredPower(): number;
        isValidRegion(): boolean;
        currentEfficiency(): number;
        hasRegion(): boolean;
        get level(): $Level;
        get min(): $BlockPos;
        get max(): $BlockPos;
        get validRegion(): boolean;
    }
}
