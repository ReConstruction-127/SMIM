import { $Conduit, $ConduitType } from "@package/com/enderio/enderio/api/conduits";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ConduitConnectionPath } from "@package/com/enderio/enderio/api/conduits/connection/path";
import { $Record } from "@package/java/lang";
import { $List, $Set, $Set_, $Collection } from "@package/java/util";
import { $ConduitBlockConnection, $ConduitBlockConnection_ } from "@package/com/enderio/enderio/api/conduits/connection";
export * as node from "@package/com/enderio/enderio/api/conduits/network/node";

declare module "@package/com/enderio/enderio/api/conduits/network" {
    export interface $ConduitNetworkContextType<T> extends RegistryMarked<RegistryTypes.EnderioConduitNetworkContextTypeTag, RegistryTypes.EnderioConduitNetworkContextType> {}
    export class $ConduitNetwork {
    }
    export interface $ConduitNetwork {
        isEmpty(): boolean;
        contains(arg0: $ConduitNode): boolean;
        getContext<T extends $ConduitNetworkContext<T>>(arg0: $ConduitNetworkContextType_<T>): T;
        nodes(): $Set<$ConduitNode>;
        hasContext(arg0: $ConduitNetworkContextType_<never>): boolean;
        neighbors(arg0: $ConduitNode): $Set<$ConduitNode>;
        getTickableConduits(arg0: number, arg1: number): $List<$Holder<$Conduit<never, never>>>;
        insertConnectionsFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        blockConnectionsAccessibleFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        conduitType(): $ConduitType<never, never>;
        extractConnections(): $List<$ConduitBlockConnection>;
        extractConnections(arg0: $DyeColor_): $List<$ConduitBlockConnection>;
        allChannels(): $Set<$DyeColor>;
        extractConnectionsFrom(arg0: $ConduitBlockConnection_): $List<$ConduitConnectionPath>;
        conduits(): $Set<$Holder<$Conduit<never, never>>>;
        tickingNodes(): $Collection<$ConduitNode>;
        getOrCreateContext<T extends $ConduitNetworkContext<T>>(arg0: $ConduitNetworkContextType_<T>): T;
        insertConnections(arg0: $DyeColor_): $List<$ConduitBlockConnection>;
        insertConnections(): $List<$ConduitBlockConnection>;
        ensureCachesReady(): void;
        blockConnections(): $Collection<$ConduitBlockConnection>;
        blockEndpoints(): $Collection<$ConduitNode>;
        nodeCount(): number;
        nodeCount(arg0: $Holder_<$Conduit<never, never>>): number;
        get empty(): boolean;
    }
    export class $ConduitNetworkContextType<T extends $ConduitNetworkContext<T>> extends $Record {
        factory(): $Supplier<T>;
        codec(): $MapCodec<T>;
        codecOrThrow(): $MapCodec<T>;
        isPersistent(): boolean;
        constructor(codec: $MapCodec_<T>, factory: $Supplier_<T>);
        get persistent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ConduitNetworkContextType}.
     */
    export type $ConduitNetworkContextType_<T> = RegistryTypes.EnderioConduitNetworkContextType | { codec?: $MapCodec_<$ConduitNetworkContext<T>>, factory?: $Supplier_<$ConduitNetworkContext<T>>,  } | [codec?: $MapCodec_<$ConduitNetworkContext<T>>, factory?: $Supplier_<$ConduitNetworkContext<T>>, ];
    export class $ConduitNetworkContext<T extends $ConduitNetworkContext<T>> {
        static GENERIC_CODEC: $Codec<$ConduitNetworkContext<never>>;
    }
    export interface $ConduitNetworkContext<T extends $ConduitNetworkContext<T>> {
        type(): $ConduitNetworkContextType<T>;
        split(arg0: $ConduitNetwork, arg1: $Set_<$ConduitNetwork>): T;
        mergeWith(arg0: T): T;
    }
}
