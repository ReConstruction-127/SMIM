import { $UUID_, $Map_, $Map, $UUID } from "@package/java/util";
import { $ServerStatsCounter } from "@package/net/minecraft/stats";

declare module "@package/dev/ftb/mods/ftbessentials/mixin" {
    export class $PlayerListAccess {
    }
    export interface $PlayerListAccess {
        getStats(): $Map<$UUID, $ServerStatsCounter>;
        get stats(): $Map<$UUID, $ServerStatsCounter>;
    }
    /**
     * Values that may be interpreted as {@link $PlayerListAccess}.
     */
    export type $PlayerListAccess_ = (() => $Map_<$UUID_, $ServerStatsCounter>);
}
