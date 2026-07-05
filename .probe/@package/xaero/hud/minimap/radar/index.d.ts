import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $RadarState, $RadarStateUpdater } from "@package/xaero/hud/minimap/radar/state";
import { $EntityRadarCategoryManager } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $RadarColorHelper } from "@package/xaero/hud/minimap/radar/color";
export * as state from "@package/xaero/hud/minimap/radar/state";
export * as category from "@package/xaero/hud/minimap/radar/category";
export * as color from "@package/xaero/hud/minimap/radar/color";

declare module "@package/xaero/hud/minimap/radar" {
    export class $RadarSession {
        update(arg0: $ClientLevel, arg1: $Entity, arg2: $Player): void;
        getState(): $RadarState;
        getStateUpdater(): $RadarStateUpdater;
        getCategoryManager(): $EntityRadarCategoryManager;
        getColorHelper(): $RadarColorHelper;
        constructor(arg0: $EntityRadarCategoryManager);
        get state(): $RadarState;
        get stateUpdater(): $RadarStateUpdater;
        get categoryManager(): $EntityRadarCategoryManager;
        get colorHelper(): $RadarColorHelper;
    }
}
