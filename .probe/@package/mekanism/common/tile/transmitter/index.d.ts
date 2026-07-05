import { $Level_ } from "@package/net/minecraft/world/level";
import { $ConnectionType_ } from "@package/mekanism/common/lib/transmitter";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $TransmitterType } from "@package/mekanism/common/block/states";
import { $ProxyConfigurable$ISidedConfigurable } from "@package/mekanism/common/capabilities/proxy";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $IAlloyInteraction, $IConfigurable } from "@package/mekanism/api";
import { $List } from "@package/java/util";
import { $Transmitter } from "@package/mekanism/common/content/network/transmitter";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $IChemicalHandler } from "@package/mekanism/api/chemical";
import { $HolderLookup$Provider, $BlockPos_, $Holder_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $TransmitterModelData } from "@package/mekanism/client/model/data";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $IAlloyTier_ } from "@package/mekanism/api/tier";
import { $CapabilityTileEntity } from "@package/mekanism/common/tile/base";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IHeatHandler } from "@package/mekanism/api/heat";
import { $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/tile/transmitter" {
    export class $TileEntityTransmitter extends $CapabilityTileEntity implements $ProxyConfigurable$ISidedConfigurable, $IAlloyInteraction {
        isLoaded(): boolean;
        static tickServer(level: $Level_, pos: $BlockPos_, state: $BlockState_, transmitter: $TileEntityTransmitter): void;
        getTransmitter(): $Transmitter<never, never, never>;
        saveAdditional(nbtTags: $CompoundTag_, provider: $HolderLookup$Provider): void;
        chunkAccessibilityChange(loaded: boolean): void;
        onNeighborBlockChange(side: $Direction_): void;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        onSneakRightClick(player: $Player, side: $Direction_): $InteractionResult;
        onAlloyInteraction(player: $Player, stack: $ItemStack_, tier: $IAlloyTier_): void;
        setForceUpdate(): void;
        getTransmitterType(): $TransmitterType;
        redstoneChanged(powered: boolean): void;
        getSideLookingAt(player: $Player, fallback: $Direction_): $Direction;
        getSideLookingAt(player: $Player): $Direction;
        getCollisionBoxes(): $List<$VoxelShape>;
        sideChanged(side: $Direction_, old: $ConnectionType_, type: $ConnectionType_): void;
        onRightClick(player: $Player): $InteractionResult;
        onSneakRightClick(player: $Player): $InteractionResult;
        static ITEM_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IItemHandler>;
        static FLUID_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IFluidHandler>;
        static CONFIGURABLE_PROVIDER: $ICapabilityProvider<$TileEntityTransmitter, $Direction, $IConfigurable>;
        static CHEMICAL_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IChemicalHandler>;
        static HEAT_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IHeatHandler>;
        static ATTACHMENTS_NBT_KEY: string;
        static TRANSMITTER_PROPERTY: $ModelProperty<$TransmitterModelData>;
        constructor(blockProvider: $Holder_<$Block>, pos: $BlockPos_, state: $BlockState_);
        get loaded(): boolean;
        get transmitter(): $Transmitter<never, never, never>;
        get transmitterType(): $TransmitterType;
        get collisionBoxes(): $List<$VoxelShape>;
    }
}
