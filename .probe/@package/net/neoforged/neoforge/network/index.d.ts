import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $MenuType$MenuSupplier, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
export * as event from "@package/net/neoforged/neoforge/network/event";
export * as handling from "@package/net/neoforged/neoforge/network/handling";
export * as connection from "@package/net/neoforged/neoforge/network/connection";
export * as registration from "@package/net/neoforged/neoforge/network/registration";
export * as bundle from "@package/net/neoforged/neoforge/network/bundle";

declare module "@package/net/neoforged/neoforge/network" {
    /**
     * This extension of `MenuSupplier` allows a mod to handle the extra data it sent to the client
     * when creating the client-side copy of a menu.
     */
    export class $IContainerFactory<T extends $AbstractContainerMenu> {
    }
    export interface $IContainerFactory<T extends $AbstractContainerMenu> extends $MenuType$MenuSupplier<T> {
        create(arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf): T;
        create(containerId: number, playerInventory: $Inventory): T;
    }
    /**
     * Values that may be interpreted as {@link $IContainerFactory}.
     */
    export type $IContainerFactory_<T> = ((arg0: number, arg1: $Inventory, arg2: $RegistryFriendlyByteBuf) => T);
}
