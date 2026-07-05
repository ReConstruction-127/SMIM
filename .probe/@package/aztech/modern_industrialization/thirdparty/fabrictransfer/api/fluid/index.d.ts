import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $TransferVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage";
import { $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid" {
    export class $FluidVariant {
        static of(arg0: $Fluid_): $FluidVariant;
        static of(arg0: $FluidStack_): $FluidVariant;
        static blank(): $FluidVariant;
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $FluidVariant;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $FluidVariant;
        static BLANK: $FluidVariant;
        static CODEC: $Codec<$FluidVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidVariant>;
    }
    export interface $FluidVariant extends $TransferVariant<$Fluid> {
        matches(arg0: $FluidStack_): boolean;
        toPacket(arg0: $RegistryFriendlyByteBuf): void;
        getFluid(): $Fluid;
        toStack(arg0: number): $FluidStack;
        toNbt(arg0: $HolderLookup$Provider): $Tag;
        get fluid(): $Fluid;
    }
}
