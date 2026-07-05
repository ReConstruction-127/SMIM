import { $Iterable } from "@package/java/lang";
import { $Iterator } from "@package/java/util";

declare module "@package/xaero/hud/minimap/player/tracker/system" {
    export class $IRenderedPlayerTracker<P> {
    }
    export interface $IRenderedPlayerTracker<P> {
        getReader(): $ITrackedPlayerReader<P>;
        getTrackedPlayerIterator(): $Iterator<P>;
        get reader(): $ITrackedPlayerReader<P>;
        get trackedPlayerIterator(): $Iterator<P>;
    }
    export class $RenderedPlayerTrackerManager {
        register(arg0: string, arg1: $IRenderedPlayerTracker<never>): void;
        getAllSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
        get allSystems(): $Iterable<$IRenderedPlayerTracker<never>>;
    }
}
