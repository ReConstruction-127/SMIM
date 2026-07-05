import { $Item_, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Fluid, $Fluid_ } from "@package/net/minecraft/world/level/material";
import { $Component } from "@package/net/minecraft/network/chat";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $List_ } from "@package/java/util";
import { $MachineModelClientData } from "@package/aztech/modern_industrialization/machines/models";
import { $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $FluidDefinition } from "@package/aztech/modern_industrialization/definition";
import { $ConfigurableFluidStack, $ConfigurableItemStack } from "@package/aztech/modern_industrialization/inventory";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MachineComponent, $MachineComponent$ServerOnly } from "@package/aztech/modern_industrialization/machines";
import { $Enum, $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/aztech/modern_industrialization/machines/components" {
    export class $OrientationComponent implements $MachineComponent {
        useWrench(arg0: $Player, arg1: $InteractionHand_, arg2: $Direction_): boolean;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onPlaced(arg0: $LivingEntity, arg1: $ItemStack_): void;
        writeModelData(arg0: $MachineModelClientData): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        facingDirection: $Direction;
        extractFluids: boolean;
        outputDirection: $Direction;
        params: $OrientationComponent$Params;
        extractItems: boolean;
        constructor(arg0: $OrientationComponent$Params, arg1: $BlockEntity);
    }
    export class $FluidItemConsumerComponent implements $MachineComponent$ServerOnly {
        static itemFuels(): $FluidItemConsumerComponent$EUProductionMap<$Item>;
        static fluidFuels(): $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        static ofFluid(arg0: number, arg1: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>): $FluidItemConsumerComponent;
        getTooltips(): $List<$Component>;
        static ofFluidFuels(arg0: number): $FluidItemConsumerComponent;
        static ofSingleFluid(arg0: number, arg1: $FluidDefinition, arg2: number): $FluidItemConsumerComponent;
        doAllowMoreThanOne(): boolean;
        getEuProduction(arg0: $List_<$ConfigurableFluidStack>, arg1: $List_<$ConfigurableItemStack>, arg2: number): number;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        fluidEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Fluid>;
        itemEUProductionMap: $FluidItemConsumerComponent$EUProductionMap<$Item>;
        maxEuProduction: number;
        constructor(arg0: number, arg1: $FluidItemConsumerComponent$EUProductionMap<$Item_>, arg2: $FluidItemConsumerComponent$EUProductionMap<$Fluid_>);
        get tooltips(): $List<$Component>;
    }
    export class $OrientationComponent$Params {
        static noFacing(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(arg0: boolean, arg1: boolean): $OrientationComponent$Params;
        static noFacingNoOutput(): $OrientationComponent$Params;
        hasFacing: boolean;
        hasExtractFluids: boolean;
        hasOutput: boolean;
        canBeVertical: boolean;
        hasExtractItems: boolean;
        constructor(arg0: boolean, arg1: boolean, arg2: boolean);
        constructor(arg0: boolean, arg1: boolean, arg2: boolean, arg3: boolean);
    }
    export class $FluidItemConsumerComponent$NumberOfFuel extends $Enum<$FluidItemConsumerComponent$NumberOfFuel> {
        static values(): $FluidItemConsumerComponent$NumberOfFuel[];
        static valueOf(arg0: string): $FluidItemConsumerComponent$NumberOfFuel;
        static SINGLE: $FluidItemConsumerComponent$NumberOfFuel;
        static NONE: $FluidItemConsumerComponent$NumberOfFuel;
        static MANY: $FluidItemConsumerComponent$NumberOfFuel;
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$NumberOfFuel}.
     */
    export type $FluidItemConsumerComponent$NumberOfFuel_ = "none" | "single" | "many";
    export class $FluidItemConsumerComponent$EUProductionMap$InformationEntry<T> extends $Record {
        variant(): T;
        eu(): number;
        constructor(eu: number, variant: T);
    }
    /**
     * Values that may be interpreted as {@link $FluidItemConsumerComponent$EUProductionMap$InformationEntry}.
     */
    export type $FluidItemConsumerComponent$EUProductionMap$InformationEntry_<T> = { eu?: number, variant?: any,  } | [eu?: number, variant?: any, ];
    export class $OverclockComponent$Catalyst extends $Record {
        multiplier(): number;
        resourceLocation(): $ResourceLocation;
        ticks(): number;
        constructor(multiplier: number, resourceLocation: $ResourceLocation_, ticks: number);
    }
    /**
     * Values that may be interpreted as {@link $OverclockComponent$Catalyst}.
     */
    export type $OverclockComponent$Catalyst_ = { resourceLocation?: $ResourceLocation_, multiplier?: number, ticks?: number,  } | [resourceLocation?: $ResourceLocation_, multiplier?: number, ticks?: number, ];
    export class $PlacedByComponent implements $MachineComponent {
        readNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider, arg2: boolean): void;
        writeNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        onPlaced(arg0: $LivingEntity): void;
        writeClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        readClientNbt(arg0: $CompoundTag_, arg1: $HolderLookup$Provider): void;
        placerId: $UUID;
        constructor();
    }
    export class $FluidItemConsumerComponent$EUProductionMap<T> {
        static empty<T>(): $FluidItemConsumerComponent$EUProductionMap<T>;
    }
    export interface $FluidItemConsumerComponent$EUProductionMap<T> {
        accept(arg0: T): boolean;
        isStandardFuels(): boolean;
        getAllAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
        getAllAccepted(): $List<T>;
        getNumberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
        getEuProduction(arg0: T): number;
        get standardFuels(): boolean;
        get allAcceptedWithEU(): $List<$FluidItemConsumerComponent$EUProductionMap$InformationEntry<T>>;
        get allAccepted(): $List<T>;
        get numberOfFuel(): $FluidItemConsumerComponent$NumberOfFuel;
    }
}
