import { $IFluidHandler$FluidAction_, $IFluidHandler } from "@package/net/neoforged/neoforge/fluids/capability";
import { $INBTSerializable } from "@package/net/neoforged/neoforge/common/util";
import { $HolderLookup$Provider, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack, $IFluidTank } from "@package/net/neoforged/neoforge/fluids";
import { $List } from "@package/java/util";
import { $AutomationType_, $Action_, $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/api/fluid" {
    export class $IExtendedFluidHandler {
    }
    export interface $IExtendedFluidHandler extends $IFluidHandler {
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        insertFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        extractFluid(arg0: number, arg1: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
    }
    export class $IExtendedFluidTank {
    }
    export interface $IExtendedFluidTank extends $IFluidTank, $INBTSerializable<$CompoundTag>, $IContentsListener {
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        extract(arg0: number, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        insert(arg0: $FluidStack_, arg1: $Action_, arg2: $AutomationType_): $FluidStack;
        isEmpty(): boolean;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getNeeded(): number;
        setStack(arg0: $FluidStack_): void;
        getFluidAmount(): number;
        setEmpty(): void;
        setStackSize(arg0: number, arg1: $Action_): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        setStackUnchecked(arg0: $FluidStack_): void;
        isFluidEqual(arg0: $FluidStack_): boolean;
        shrinkStack(arg0: number, arg1: $Action_): number;
        growStack(arg0: number, arg1: $Action_): number;
        get needed(): number;
        set stack(value: $FluidStack_);
        get fluidAmount(): number;
        set stackUnchecked(value: $FluidStack_);
    }
    export class $ISidedFluidHandler {
    }
    export interface $ISidedFluidHandler extends $IExtendedFluidHandler {
        getTankCapacity(arg0: number): number;
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_): boolean;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidInTank(arg0: number): $FluidStack;
        getTanks(arg0: $Direction_): number;
        getTanks(): number;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Action_): $FluidStack;
        getFluidSideFor(): $Direction;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        setFluidInTank(arg0: number, arg1: $FluidStack_): void;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        get fluidSideFor(): $Direction;
    }
    export class $IMekanismFluidHandler {
    }
    export interface $IMekanismFluidHandler extends $ISidedFluidHandler, $IContentsListener {
        getTankCapacity(arg0: number, arg1: $Direction_): number;
        isFluidValid(arg0: number, arg1: $FluidStack_, arg2: $Direction_): boolean;
        getFluidInTank(arg0: number, arg1: $Direction_): $FluidStack;
        getFluidTank(arg0: number, arg1: $Direction_): $IExtendedFluidTank;
        getTanks(arg0: $Direction_): number;
        insertFluid(arg0: number, arg1: $FluidStack_, arg2: $Direction_, arg3: $Action_): $FluidStack;
        insertFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        setFluidInTank(arg0: number, arg1: $FluidStack_, arg2: $Direction_): void;
        canHandleFluid(): boolean;
        extractFluid(arg0: number, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: $FluidStack_, arg1: $Direction_, arg2: $Action_): $FluidStack;
        extractFluid(arg0: number, arg1: number, arg2: $Direction_, arg3: $Action_): $FluidStack;
        getFluidTanks(arg0: $Direction_): $List<$IExtendedFluidTank>;
    }
}
