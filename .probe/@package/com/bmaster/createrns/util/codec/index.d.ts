import { $RegistryAccess } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/bmaster/createrns/util/codec" {
    export class $ItemWithFallbacks {
        resolve(arg0: $RegistryAccess, arg1: boolean): boolean;
        item: $Item;
        static STRICT_CODEC: $Codec<$ItemWithFallbacks>;
        static EMPTY: $ItemWithFallbacks;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemWithFallbacks>;
        static LENIENT_CODEC: $Codec<$ItemWithFallbacks>;
    }
}
