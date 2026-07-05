import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IItemHandler } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IConfigurable } from "@package/mekanism/api";
import { $Map, $Set } from "@package/java/util";
import { $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Structure, $MultiblockManager, $IStructuralMultiblock, $MultiblockData } from "@package/mekanism/common/lib/multiblock";
import { $Supplier } from "@package/java/util/function";
import { $InteractionResult, $ItemInteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $IChemicalHandler } from "@package/mekanism/api/chemical";
import { $BlockPos_, $Holder_, $Direction } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $TileEntityMekanism, $CapabilityTileEntity } from "@package/mekanism/common/tile/base";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $IHeatHandler } from "@package/mekanism/api/heat";
import { $ICapabilityProvider } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/tile/prefab" {
    export class $TileEntityStructuralMultiblock extends $TileEntityMekanism implements $IStructuralMultiblock, $IConfigurable {
        getStructure(manager: $MultiblockManager<never>): $Structure;
        multiblockFormed(multiblock: $MultiblockData): void;
        multiblockUnformed(structure: $Structure): void;
        setStructure(manager: $MultiblockManager<never>, structure: $Structure): void;
        getDefaultData(): $MultiblockData;
        hasStructure(structure: $Structure): boolean;
        onActivate(player: $Player, hand: $InteractionHand_, stack: $ItemStack_): $ItemInteractionResult;
        hasFormedMultiblock(): boolean;
        getStructureMap(): $Map<$MultiblockManager<never>, $Structure>;
        onRightClick(player: $Player): $InteractionResult;
        onSneakRightClick(player: $Player): $InteractionResult;
        structuralGuiAccessAllowed(): boolean;
        resetForFormed(): void;
        resetStructure(manager: $MultiblockManager<never>): $Structure;
        setMultiblockData(manager: $MultiblockManager<never>, multiblockData: $MultiblockData): void;
        getMultiblockData(manager: $MultiblockManager<never>): $MultiblockData;
        static ITEM_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IItemHandler>;
        ticker: number;
        static FLUID_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IFluidHandler>;
        facingSupplier: $Supplier<$Direction>;
        static CHEMICAL_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IChemicalHandler>;
        static HEAT_HANDLER_PROVIDER: $ICapabilityProvider<$CapabilityTileEntity, $Direction, $IHeatHandler>;
        static ATTACHMENTS_NBT_KEY: string;
        playersUsing: $Set<$Player>;
        constructor(provider: $Holder_<$Block>, pos: $BlockPos_, state: $BlockState_);
        get defaultData(): $MultiblockData;
        get structureMap(): $Map<$MultiblockManager<never>, $Structure>;
    }
}
