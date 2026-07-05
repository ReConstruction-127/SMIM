import { $Conduit } from "@package/com/enderio/enderio/api/conduits";
import { $ConduitNetwork } from "@package/com/enderio/enderio/api/conduits/network";
import { $ServerLevel } from "@package/net/minecraft/server/level";

declare module "@package/com/enderio/enderio/api/conduits/ticker" {
    export class $ConduitTickerBase<T extends $Conduit<T, never>> {
        tick(arg0: $ServerLevel, arg1: $ConduitNetwork, arg2: number): void;
    }
}
