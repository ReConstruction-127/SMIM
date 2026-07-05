import { $Level_ } from "@package/net/minecraft/world/level";
import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $TransactionContext_, $SnapshotJournal } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Spliterator, $Iterator, $List, $Map_, $List_, $ArrayList } from "@package/java/util";
import { $ResourceAmount_, $ResourceAmount } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base";
import { $Simulation_ } from "@package/aztech/modern_industrialization/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $TransferVariant, $StorageView, $Storage } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $FluidAccess, $ItemAccess } from "@package/aztech/modern_industrialization/api/machine/component";
import { $MachineComponent } from "@package/aztech/modern_industrialization/machines";
import { $Object, $Iterable } from "@package/java/lang";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";

declare module "@package/aztech/modern_industrialization/inventory" {
    export class $ConfigurableFluidStack extends $AbstractConfigurableStack<$Fluid, $FluidVariant> implements $FluidAccess {
        getVariant(): $FluidVariant;
        setCapacity(arg0: number): void;
        getTotalCapacityFor(arg0: $Fluid_): number;
        static standardInputSlot(arg0: number): $ConfigurableFluidStack;
        static standardOutputSlot(arg0: number): $ConfigurableFluidStack;
        static lockedInputSlot(arg0: number, arg1: $Fluid_): $ConfigurableFluidStack;
        static lockedOutputSlot(arg0: number, arg1: $Fluid_): $ConfigurableFluidStack;
        static standardIOSlot(arg0: number, arg1: boolean): $ConfigurableFluidStack;
        getRemainingSpace(): number;
        static copyList(arg0: $List_<$ConfigurableFluidStack>): $ArrayList<$ConfigurableFluidStack>;
        toStack(): $FluidStack;
        constructor(arg0: $ConfigurableFluidStack);
        constructor(arg0: number);
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get variant(): $FluidVariant;
        set capacity(value: number);
        get remainingSpace(): number;
    }
    export class $SlotPositions$Builder {
        build(): $SlotPositions;
        addSlot(arg0: number, arg1: number): $SlotPositions$Builder;
        addSlots(arg0: number, arg1: number, arg2: number, arg3: number): $SlotPositions$Builder;
        buildWithConsumer(arg0: $Consumer_<$SlotPositions$Builder>): $SlotPositions;
        constructor();
    }
    export class $MIStorage<T, K extends $TransferVariant<T>, S extends $AbstractConfigurableStack<T, K>> implements $Storage<K> {
        extract(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>): number;
        extract(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        insert(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>, arg4: boolean): number;
        insert(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        iterator(): $Iterator<$StorageView<K>>;
        extractAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        extractAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_, arg3: $Predicate_<S>): number;
        insertAllSlot(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        getVersion(): number;
        supportsInsertion(): boolean;
        nonEmptyViews(): $Iterable<$StorageView<K>>;
        supportsExtraction(): boolean;
        nonEmptyIterator(): $Iterator<$StorageView<K>>;
        spliterator(): $Spliterator<K>;
        forEach(arg0: $Consumer_<K>): void;
        [Symbol.iterator](): Iterator<$StorageView<K>>
        get version(): number;
    }
    export class $MIFluidStorage extends $MIStorage<$Fluid, $FluidVariant, $ConfigurableFluidStack> {
        fluidHandler: $IFluidHandler;
        constructor(arg0: $List_<$ConfigurableFluidStack>);
    }
    export class $ConfigurableSlot {
    }
    export interface $ConfigurableSlot {
        getConfig(): $SlotConfig;
        get config(): $SlotConfig;
    }
    /**
     * Values that may be interpreted as {@link $ConfigurableSlot}.
     */
    export type $ConfigurableSlot_ = (() => $SlotConfig);
    export class $ChangeListener {
        static notify(arg0: $Map_<$ChangeListener, $Object>): void;
        listenAll(arg0: $List_<$AbstractConfigurableStack<never, never>>, arg1: $Object): void;
        constructor();
    }
    export class $MIItemStorage extends $MIStorage<$Item, $ItemVariant, $ConfigurableItemStack> {
        itemHandler: $IItemHandler;
        constructor(arg0: $List_<$ConfigurableItemStack>);
    }
    export class $ConfigurableItemStack extends $AbstractConfigurableStack<$Item, $ItemVariant> implements $ItemAccess {
        getVariant(): $ItemVariant;
        isValid(arg0: $ItemStack_): boolean;
        setKey(arg0: $ItemVariant): void;
        getTotalCapacityFor(arg0: $Item_): number;
        getRemainingCapacityFor(arg0: $ItemVariant): number;
        toStack(): $ItemStack;
        adjustCapacity(arg0: boolean, arg1: boolean): void;
        static standardInputSlot(): $ConfigurableItemStack;
        static standardOutputSlot(): $ConfigurableItemStack;
        static lockedInputSlot(arg0: $Item_): $ConfigurableItemStack;
        static standardIOSlot(arg0: boolean): $ConfigurableItemStack;
        static copyList(arg0: $List_<$ConfigurableItemStack>): $ArrayList<$ConfigurableItemStack>;
        getAdjustedCapacity(): number;
        constructor(arg0: $ConfigurableItemStack);
        constructor();
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        get variant(): $ItemVariant;
        set key(value: $ItemVariant);
        get adjustedCapacity(): number;
    }
    export class $SlotPositions {
        getY(arg0: number): number;
        size(): number;
        static empty(): $SlotPositions;
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $SlotPositions;
        getX(arg0: number): number;
        toBuilder(): $SlotPositions$Builder;
        sublist(arg0: number, arg1: number): $SlotPositions;
    }
    export class $SlotConfig {
        static readSlotList<T extends $ConfigurableSlot>(arg0: $List_<T>, arg1: $List_<T>): void;
    }
    export class $AbstractConfigurableStack<T, K extends $TransferVariant<T>> extends $SnapshotJournal<$ResourceAmount<K>> implements $StorageView<K>, $ConfigurableSlot {
        extract(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        isEmpty(): boolean;
        getResource(): K;
        empty(): void;
        increment(arg0: number): void;
        decrement(arg0: number): void;
        addListener(arg0: $ChangeListener, arg1: $Object): void;
        getConfig(): $SlotConfig;
        removeListener(arg0: $ChangeListener): void;
        setKey(arg0: K): void;
        revertToSnapshot(arg0: $ResourceAmount_<K>): void;
        isLockedTo(arg0: K): boolean;
        createSnapshot(): $Object;
        getAmount(): number;
        extractDirect(arg0: K, arg1: number, arg2: $TransactionContext_): number;
        enableMachineLock(arg0: K): void;
        canPlayerLock(): boolean;
        getTotalCapacityFor(arg0: K): number;
        isResourceAllowedByLock(arg0: K): boolean;
        isResourceAllowedByLock(arg0: K): boolean;
        setAmount(arg0: number): void;
        toNbt(arg0: $HolderLookup$Provider): $CompoundTag;
        canPlayerExtract(): boolean;
        getLockedInstance(): K;
        canPlayerInsert(): boolean;
        isPlayerLocked(): boolean;
        isMachineLocked(): boolean;
        static playerLockNoOverride<T, K extends $TransferVariant<T>>(arg0: T, arg1: number, arg2: $List_<$AbstractConfigurableStack<T, K>>): void;
        canPipesExtract(): boolean;
        canPipesInsert(): boolean;
        disableMachineLock(): void;
        isResourceBlank(): boolean;
        togglePlayerLock(): void;
        togglePlayerLock(arg0: K): void;
        playerLock(arg0: K, arg1: $Simulation_): boolean;
        getUnderlyingView(): $StorageView<K>;
        constructor(arg0: $CompoundTag_, arg1: $HolderLookup$Provider);
        constructor(arg0: $AbstractConfigurableStack<K, K>);
        constructor();
        get resource(): K;
        get config(): $SlotConfig;
        set key(value: K);
        get lockedInstance(): K;
        get playerLocked(): boolean;
        get machineLocked(): boolean;
        get resourceBlank(): boolean;
        get underlyingView(): $StorageView<K>;
    }
    export class $MIInventory implements $MachineComponent {
        addListener(arg0: $ChangeListener, arg1: $Object): void;
        getItemStacks(): $List<$ConfigurableItemStack>;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        autoExtractItems(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        autoExtractFluids(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        autoInsertItems(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        autoInsertFluids(arg0: $Level_, arg1: $BlockPos_, arg2: $Direction_): void;
        getFluidStacks(): $List<$ConfigurableFluidStack>;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        fluidStorage: $MIFluidStorage;
        itemStorage: $MIItemStorage;
        fluidPositions: $SlotPositions;
        itemPositions: $SlotPositions;
        static EMPTY: $MIInventory;
        constructor(arg0: $List_<$ConfigurableItemStack>, arg1: $List_<$ConfigurableFluidStack>, arg2: $SlotPositions, arg3: $SlotPositions);
        get itemStacks(): $List<$ConfigurableItemStack>;
        get fluidStacks(): $List<$ConfigurableFluidStack>;
    }
}
