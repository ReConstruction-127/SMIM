import { $Direction_ } from "@package/net/minecraft/core";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $Set_, $List } from "@package/java/util";

declare module "@package/mekanism/common/lib/transmitter/acceptor" {
    export class $AbstractAcceptorCache<ACCEPTOR, INFO extends $AcceptorInfo<ACCEPTOR>> {
        getConnectedAcceptor(side: $Direction_): ACCEPTOR;
        initializeCache(level: $ServerLevel): void;
        getCachedAcceptor(side: $Direction_): ACCEPTOR;
        getConnectedAcceptors(sides: $Set_<$Direction_>): $List<ACCEPTOR>;
        currentAcceptorConnections: number;
    }
}
