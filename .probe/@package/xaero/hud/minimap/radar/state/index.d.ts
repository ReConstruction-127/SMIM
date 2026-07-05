import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EntityRadarCategory, $EntityRadarCategoryManager } from "@package/xaero/hud/minimap/radar/category";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/minimap/radar/state" {
    export class $RadarState {
        getRadarLists(): $Iterable<$RadarList>;
        getListsReversedOrder(): boolean;
        getListsGeneratedForConfig(): $EntityRadarCategory;
        setListsGeneratedForSyncedConfig(arg0: $EntityRadarCategory): void;
        getListsGeneratedForSyncedConfig(): $EntityRadarCategory;
        constructor();
        get radarLists(): $Iterable<$RadarList>;
        get listsReversedOrder(): boolean;
        get listsGeneratedForConfig(): $EntityRadarCategory;
    }
    export class $RadarStateUpdater {
        update(arg0: $ClientLevel, arg1: $Entity, arg2: $Player): void;
        setLastRenderViewEntity(arg0: $Entity): void;
        constructor(arg0: $EntityRadarCategoryManager, arg1: $RadarState);
        set lastRenderViewEntity(value: $Entity);
    }
}
