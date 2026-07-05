import { $Supplier, $Supplier_ } from "@package/java/util/function";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/conduits/connection/config" {
    export interface $ConnectionConfigType<T> extends RegistryMarked<RegistryTypes.EnderioConduitConnectionConfigTypeTag, RegistryTypes.EnderioConduitConnectionConfigType> {}
    export class $ConnectionConfig {
        static GENERIC_CODEC: $Codec<$ConnectionConfig>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ConnectionConfig>;
    }
    export interface $ConnectionConfig {
        isConnected(): boolean;
        type(): $ConnectionConfigType<never>;
        reconnected(): $ConnectionConfig;
        disconnected(): $ConnectionConfig;
        get connected(): boolean;
    }
    export class $ConnectionConfigType<T extends $ConnectionConfig> extends $Record {
        getDefault(): T;
        defaultSupplier(): $Supplier<T>;
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(codec: $MapCodec_<T>, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>, defaultSupplier: $Supplier_<T>);
        get default(): T;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionConfigType}.
     */
    export type $ConnectionConfigType_<T> = RegistryTypes.EnderioConduitConnectionConfigType | { defaultSupplier?: $Supplier_<$ConnectionConfig>, codec?: $MapCodec_<$ConnectionConfig>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ConnectionConfig>,  } | [defaultSupplier?: $Supplier_<$ConnectionConfig>, codec?: $MapCodec_<$ConnectionConfig>, streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $ConnectionConfig>, ];
}
