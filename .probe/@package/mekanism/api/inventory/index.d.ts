import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/inventory" {
    export class $ISidedItemHandler {
    }
    export interface $ISidedItemHandler extends $IItemHandlerModifiable {
        getSlots(arg0: $Direction_): number;
        getSlots(): number;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        extractItem(arg0: number, arg1: number, arg2: boolean): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        isItemValid(arg0: number, arg1: $ItemStack_): boolean;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        getStackInSlot(arg0: number): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_): void;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        getInventorySideFor(): $Direction;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: boolean): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        getSlotLimit(arg0: number): number;
        get inventorySideFor(): $Direction;
    }
    export class $IInventorySlot {
    }
    export interface $IInventorySlot extends $INBTSerializable<$CompoundTag>, $IContentsListener {
        isEmpty(): boolean;
        getCount(): number;
        getStack(): $ItemStack;
        setStack(arg0: $ItemStack_): void;
        getLimit(arg0: $ItemStack_): number;
        setEmpty(): void;
        extractItem(arg0: number, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        isItemValid(arg0: $ItemStack_): boolean;
        setStackSize(arg0: number, arg1: $Action_): number;
        insertItem(arg0: $ItemStack_, arg1: $Action_, arg2: $AutomationType_): $ItemStack;
        createContainerSlot(): $Slot;
        shrinkStack(arg0: number, arg1: $Action_): number;
        growStack(arg0: number, arg1: $Action_): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        get count(): number;
    }
    export class $IMekanismInventory {
    }
    export interface $IMekanismInventory extends $ISidedItemHandler, $IContentsListener {
        hasInventory(): boolean;
        getSlots(arg0: $Direction_): number;
        extractItem(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $ItemStack;
        isItemValid(arg0: number, arg1: $ItemStack_, arg2: $Direction_): boolean;
        getStackInSlot(arg0: number, arg1: $Direction_): $ItemStack;
        setStackInSlot(arg0: number, arg1: $ItemStack_, arg2: $Direction_): void;
        insertItem(arg0: number, arg1: $ItemStack_, arg2: $Direction_, arg3: $Action_): $ItemStack;
        getSlotLimit(arg0: number, arg1: $Direction_): number;
        isInventoryEmpty(): boolean;
        isInventoryEmpty(arg0: $Direction_): boolean;
        getInventorySlots(arg0: $Direction_): $List<$IInventorySlot>;
        getInventorySlot(arg0: number, arg1: $Direction_): $IInventorySlot;
    }
}
