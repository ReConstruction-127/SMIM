import { $ItemLike_ } from "@package/net/minecraft/world/level";
import { $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $TransferVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_, $Tag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item" {
    export class $ItemVariant {
        static of(arg0: $ItemStack_): $ItemVariant;
        static of(arg0: $ItemLike_): $ItemVariant;
        static blank(): $ItemVariant;
        static fromNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): $ItemVariant;
        static fromPacket(arg0: $RegistryFriendlyByteBuf): $ItemVariant;
        static BLANK: $ItemVariant;
        static CODEC: $Codec<$ItemVariant>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ItemVariant>;
    }
    export interface $ItemVariant extends $TransferVariant<$Item> {
        test(arg0: $Predicate_<$ItemStack>): boolean;
        matches(arg0: $ItemStack_): boolean;
        getItem(): $Item;
        toPacket(arg0: $RegistryFriendlyByteBuf): void;
        getMaxStackSize(): number;
        toStack(): $ItemStack;
        toStack(arg0: number): $ItemStack;
        toNbt(arg0: $HolderLookup$Provider): $Tag;
        get item(): $Item;
        get maxStackSize(): number;
    }
}
