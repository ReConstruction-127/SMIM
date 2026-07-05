import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component } from "@package/net/minecraft/network/chat";
import { $OrientationComponent, $PlacedByComponent, $OrientationComponent$Params } from "@package/aztech/modern_industrialization/machines/components";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player, $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Spliterator, $Iterator, $List } from "@package/java/util";
import { $MachineModelClientData } from "@package/aztech/modern_industrialization/machines/models";
import { $Consumer_, $BiConsumer_, $Function_ } from "@package/java/util/function";
import { $MenuProvider, $Clearable, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MIInventory } from "@package/aztech/modern_industrialization/inventory";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GuiComponentServer, $MachineGuiParameters } from "@package/aztech/modern_industrialization/machines/gui";
import { $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Record, $Iterable, $Class } from "@package/java/lang";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $FastBlockEntity, $WrenchableBlockEntity } from "@package/aztech/modern_industrialization/blocks";
import { $BlockEntityType, $BlockEntityType_ } from "@package/net/minecraft/world/level/block/entity";
export * as models from "@package/aztech/modern_industrialization/machines/models";
export * as components from "@package/aztech/modern_industrialization/machines/components";
export * as recipe from "@package/aztech/modern_industrialization/machines/recipe";
export * as blockentities from "@package/aztech/modern_industrialization/machines/blockentities";
export * as multiblocks from "@package/aztech/modern_industrialization/machines/multiblocks";
export * as init from "@package/aztech/modern_industrialization/machines/init";
export * as gui from "@package/aztech/modern_industrialization/machines/gui";
export * as guicomponents from "@package/aztech/modern_industrialization/machines/guicomponents";

declare module "@package/aztech/modern_industrialization/machines" {
    export class $MachineComponent$ServerOnly {
    }
    export interface $MachineComponent$ServerOnly extends $MachineComponent {
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    export class $MachineComponent {
    }
    export interface $MachineComponent {
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
    }
    export class $MachineBlockEntity extends $FastBlockEntity implements $MenuProvider, $WrenchableBlockEntity, $Clearable {
        load(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        sync(arg0: boolean): void;
        getDisplayName(): $Component;
        getInventory(): $MIInventory;
        openMenu(arg0: $ServerPlayer): void;
        useWrench(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): boolean;
        clearContent(): void;
        loadAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        saveAdditional(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        createMenu(arg0: number, arg1: $Inventory, arg2: $Player): $AbstractContainerMenu;
        hasRedstoneHighSignal(): boolean;
        writeScreenOpeningData(arg0: $RegistryFriendlyByteBuf): void;
        getMachineModelData(): $MachineModelClientData;
        onPlaced(arg0: $LivingEntity, arg1: $ItemStack_): void;
        dropExtra(): $List<$ItemStack>;
        static registerFluidApi(arg0: $BlockEntityType_<never>): void;
        static registerItemApi(arg0: $BlockEntityType_<never>): void;
        getTooltips(): $List<$Component>;
        shouldTriggerClientSideContainerClosingOnOpen(): boolean;
        writeClientSideData(arg0: $AbstractContainerMenu, arg1: $RegistryFriendlyByteBuf): void;
        guiParams: $MachineGuiParameters;
        orientation: $OrientationComponent;
        placedBy: $PlacedByComponent;
        static ATTACHMENTS_NBT_KEY: string;
        guiComponents: $ComponentStorage$GuiServer;
        constructor(arg0: $BEP_, arg1: $MachineGuiParameters, arg2: $OrientationComponent$Params);
        get displayName(): $Component;
        get inventory(): $MIInventory;
        get machineModelData(): $MachineModelClientData;
        get tooltips(): $List<$Component>;
    }
    export class $ComponentStorage<C> implements $Iterable<C> {
        size(): number;
        get(arg0: number): C;
        iterator(): $Iterator<C>;
        register(...arg0: C[]): void;
        unregister(...arg0: C[]): void;
        getAll<T>(arg0: $Class<T>): $List<T>;
        forType<T>(arg0: $Class<T>, arg1: $Consumer_<T>): void;
        getOrThrow<T>(arg0: $Class<T>): T;
        forEachIndexed(arg0: $BiConsumer_<number, C>): void;
        getNullable<T>(arg0: $Class<T>): T;
        mapOrDefault<T, R>(arg0: $Class<T>, arg1: $Function_<T, R>, arg2: R): R;
        spliterator(): $Spliterator<C>;
        forEach(arg0: $Consumer_<C>): void;
        constructor();
        [Symbol.iterator](): Iterator<C>
    }
    export class $ComponentStorage$GuiServer extends $ComponentStorage<$GuiComponentServer<never, never>> {
        constructor();
    }
    export class $BEP extends $Record {
        type(): $BlockEntityType<never>;
        state(): $BlockState;
        pos(): $BlockPos;
        constructor(type: $BlockEntityType_<never>, pos: $BlockPos_, state: $BlockState_);
    }
    /**
     * Values that may be interpreted as {@link $BEP}.
     */
    export type $BEP_ = { state?: $BlockState_, type?: $BlockEntityType_<never>, pos?: $BlockPos_,  } | [state?: $BlockState_, type?: $BlockEntityType_<never>, pos?: $BlockPos_, ];
    export class $ComponentStorage$Server extends $ComponentStorage<$MachineComponent> {
        constructor();
    }
}
