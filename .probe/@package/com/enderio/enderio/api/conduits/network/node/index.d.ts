import { $ConduitNetwork } from "@package/com/enderio/enderio/api/conduits/network";
import { $Conduit, $ConduitCapabilityAccessor, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $DyeColor_ } from "@package/net/minecraft/world/item";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $ConnectionReader } from "@package/com/enderio/enderio/api/conduits/connection";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";
export * as legacy from "@package/com/enderio/enderio/api/conduits/network/node/legacy";

declare module "@package/com/enderio/enderio/api/conduits/network/node" {
    export class $NodeData {
        static GENERIC_CODEC: $Codec<$NodeData>;
    }
    export interface $NodeData {
        type(): $NodeDataType<never>;
    }
    /**
     * Values that may be interpreted as {@link $NodeData}.
     */
    export type $NodeData_ = (() => $NodeDataType_<never>);
    export class $ConduitNode {
    }
    export interface $ConduitNode extends $ConduitCapabilityAccessor, $ConnectionReader {
        getCapability<T, C>(arg0: $BlockCapability<T, C>, arg1: $Direction_, arg2: C): T;
        pos(): $BlockPos;
        isLoaded(): boolean;
        getInventory(arg0: $Direction_): $IItemHandlerModifiable;
        getNodeData<T extends $NodeData>(arg0: $NodeDataType_<T>): T;
        getNodeData(): $NodeData;
        hasRedstoneSignal(arg0: $DyeColor_): boolean;
        getNetwork(): $ConduitNetwork;
        isTicking(): boolean;
        conduit(): $Holder<$Conduit<never, never>>;
        conduit<T extends $Conduit<T, never>>(arg0: $ConduitType_<T, never>): $Holder<T>;
        getSidedCapability<T>(arg0: $BlockCapability<T, $Direction_>, arg1: $Direction_): T;
        markDirty(): void;
        getOrCreateNodeData<T extends $NodeData>(arg0: $NodeDataType_<T>): T;
        setNodeData<T extends $NodeData>(arg0: T): void;
        hasNodeData(arg0: $NodeDataType_<never>): boolean;
        get loaded(): boolean;
        get network(): $ConduitNetwork;
        get ticking(): boolean;
    }
    export class $NodeDataType<T extends $NodeData> {
        create(): T;
        codec(): $MapCodec<T>;
        isPersistent(): boolean;
        constructor(arg0: $MapCodec_<T>, arg1: $Supplier_<T>);
        get persistent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $NodeDataType}.
     */
    export type $NodeDataType_<T> = RegistryTypes.EnderioConduitNodeDataType;
    export interface $NodeDataType<T> extends RegistryMarked<RegistryTypes.EnderioConduitNodeDataTypeTag, RegistryTypes.EnderioConduitNodeDataType> {}
}
