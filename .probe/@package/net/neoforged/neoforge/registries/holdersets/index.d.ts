import { $Holder_, $Registry, $HolderSet } from "@package/net/minecraft/core";
import { $IHolderSetExtension$SerializationType } from "@package/net/neoforged/neoforge/common/extensions";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/registries/holdersets" {
    export interface $HolderSetType extends RegistryMarked<RegistryTypes.NeoforgeHolderSetTypeTag, RegistryTypes.NeoforgeHolderSetType> {}
    /**
     * Interface for mods' custom holderset types
     */
    export class $ICustomHolderSet<T> {
    }
    export interface $ICustomHolderSet<T> extends $HolderSet<T> {
        /**
         * @return HolderSetType registered to `HOLDER_SET_TYPES`
         */
        type(): $HolderSetType;
        serializationType(): $IHolderSetExtension$SerializationType;
    }
    export class $HolderSetType {
    }
    export interface $HolderSetType {
        makeStreamCodec<T>(registryKey: $ResourceKey_<$Registry<T>>): $StreamCodec<$RegistryFriendlyByteBuf, $ICustomHolderSet<T>>;
        makeCodec<T>(registryKey: $ResourceKey_<$Registry<T>>, holderCodec: $Codec<$Holder_<T>>, forceList: boolean): $MapCodec<$ICustomHolderSet<T>>;
    }
    /**
     * Values that may be interpreted as {@link $HolderSetType}.
     */
    export type $HolderSetType_ = RegistryTypes.NeoforgeHolderSetType;
}
