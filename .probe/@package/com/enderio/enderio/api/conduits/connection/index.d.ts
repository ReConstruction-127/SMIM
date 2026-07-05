import { $IntFunction } from "@package/java/util/function";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $BlockPos, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/com/enderio/enderio/api/conduits/connection/config";
export * as path from "@package/com/enderio/enderio/api/conduits/connection/path";

declare module "@package/com/enderio/enderio/api/conduits/connection" {
    export class $ConduitBlockConnection extends $Record {
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: C): T;
        node(): $ConduitNode;
        connectionConfig<T extends $ConnectionConfig>(arg0: $ConnectionConfigType_<T>): T;
        connectionConfig(): $ConnectionConfig;
        inventory(): $IItemHandlerModifiable;
        getSidedCapability<T>(arg0: $BlockCapability<T, $Direction_>): T;
        connectionSide(): $Direction;
        connectedBlockPos(): $BlockPos;
        constructor(node: $ConduitNode, connectionSide: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $ConduitBlockConnection}.
     */
    export type $ConduitBlockConnection_ = { connectionSide?: $Direction_, node?: $ConduitNode,  } | [connectionSide?: $Direction_, node?: $ConduitNode, ];
    export class $ConnectionReader {
    }
    export interface $ConnectionReader {
        getConnectionConfig<T extends $ConnectionConfig>(arg0: $Direction_, arg1: $ConnectionConfigType_<T>): T;
        getConnectionConfig(arg0: $Direction_): $ConnectionConfig;
        isConnectedTo(arg0: $Direction_): boolean;
        getConnectionStatus(arg0: $Direction_): $ConnectionStatus;
        isConnectedToBlock(arg0: $Direction_): boolean;
    }
    export class $ConnectionStatus extends $Enum<$ConnectionStatus> implements $StringRepresentable {
        isConnected(): boolean;
        static values(): $ConnectionStatus[];
        static valueOf(arg0: string): $ConnectionStatus;
        static byName(arg0: string | null): $ConnectionStatus;
        getSerializedName(): string;
        isEndpoint(): boolean;
        canConnect(): boolean;
        getRemappedEnumConstantName(): string;
        static DISABLED: $ConnectionStatus;
        static CONNECTED_BLOCK: $ConnectionStatus;
        static DISCONNECTED: $ConnectionStatus;
        static CODEC: $StringRepresentable$EnumCodec<$ConnectionStatus>;
        static BY_ID: $IntFunction<$ConnectionStatus>;
        static CONNECTED_CONDUIT: $ConnectionStatus;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConnectionStatus>;
        get connected(): boolean;
        get serializedName(): string;
        get endpoint(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionStatus}.
     */
    export type $ConnectionStatus_ = "none" | "connected_block" | "connected_conduit" | "disabled";
}
