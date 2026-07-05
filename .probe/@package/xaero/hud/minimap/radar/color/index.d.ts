import { $RadarList } from "@package/xaero/hud/minimap/radar/state";
import { $EntityRadarCategory } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/xaero/hud/minimap/radar/color" {
    export class $RadarColorHelper {
        getEntityColor(arg0: $Entity, arg1: number, arg2: boolean, arg3: number, arg4: number, arg5: boolean, arg6: $RadarColor, arg7: $RadarColor): number;
        getFallbackColor(arg0: $EntityRadarCategory, arg1: $EntityRadarCategory): $RadarColor;
        getFallbackColor(arg0: $RadarList): $RadarColor;
        getTeamColor(arg0: $Entity): number;
        getEntityHeightFade(arg0: number, arg1: number, arg2: number): number;
        constructor();
    }
}
