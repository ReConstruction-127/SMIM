import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $Tag } from "@package/net/minecraft/nbt";
import { $TransactionContext_ } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $DataComponentPatch } from "@package/net/minecraft/core/component";
export * as base from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage" {
    export class $TransferVariant<O> {
    }
    export interface $TransferVariant<O> {
        isBlank(): boolean;
        getObject(): O;
        toPacket(arg0: $RegistryFriendlyByteBuf): void;
        getComponentsPatch(): $DataComponentPatch;
        toNbt(arg0: $HolderLookup$Provider): $Tag;
        isOf(arg0: O): boolean;
        get blank(): boolean;
        get object(): O;
        get componentsPatch(): $DataComponentPatch;
    }
    export class $StorageView<T> {
    }
    export interface $StorageView<T> {
        getCapacity(): number;
        extract(arg0: T, arg1: number, arg2: $TransactionContext_): number;
        getResource(): T;
        getAmount(): number;
        getUnderlyingView(): $StorageView<T>;
        isResourceBlank(): boolean;
        get capacity(): number;
        get resource(): T;
        get amount(): number;
        get underlyingView(): $StorageView<T>;
        get resourceBlank(): boolean;
    }
}
