import { $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/chat/numbers" {
    export class $NumberFormat {
    }
    export interface $NumberFormat {
        type(): $NumberFormatType<$NumberFormat>;
        format(number: number): $MutableComponent;
    }
    export interface $NumberFormatType<T> extends RegistryMarked<RegistryTypes.NumberFormatTypeTag, RegistryTypes.NumberFormatType> {}
    export class $NumberFormatType<T extends $NumberFormat> {
    }
    export interface $NumberFormatType<T extends $NumberFormat> {
        mapCodec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $NumberFormatType}.
     */
    export type $NumberFormatType_<T> = RegistryTypes.NumberFormatType;
}
