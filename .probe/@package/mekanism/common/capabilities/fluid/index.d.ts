import { $MultiblockData } from "@package/mekanism/common/lib/multiblock";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $IExtendedFluidTank } from "@package/mekanism/api/fluid";
import { $Predicate_, $BiPredicate_, $IntSupplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $AutomationType, $AutomationType_, $Action_, $IContentsListener_ } from "@package/mekanism/api";

declare module "@package/mekanism/common/capabilities/fluid" {
    export class $BasicFluidTank implements $IExtendedFluidTank {
        getCapacity(): number;
        extract(amount: number, action: $Action_, automationType: $AutomationType_): $FluidStack;
        insert(stack: $FluidStack_, action: $Action_, automationType: $AutomationType_): $FluidStack;
        isEmpty(): boolean;
        static create(capacity: number, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static create(capacity: number, listener: $IContentsListener_): $BasicFluidTank;
        static create(capacity: number, canExtract: $Predicate_<$FluidStack>, canInsert: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static create(capacity: number, canExtract: $BiPredicate_<$FluidStack, $AutomationType>, canInsert: $BiPredicate_<$FluidStack, $AutomationType>, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static create(capacity: number, canExtract: $Predicate_<$FluidStack>, canInsert: $Predicate_<$FluidStack>, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static input(capacity: number, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static input(capacity: number, canInsert: $Predicate_<$FluidStack>, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $BasicFluidTank;
        static output(capacity: number, listener: $IContentsListener_): $BasicFluidTank;
        isFluidValid(stack: $FluidStack_): boolean;
        setStack(stack: $FluidStack_): void;
        getFluidAmount(): number;
        setStackSize(amount: number, action: $Action_): number;
        getFluid(): $FluidStack;
        serializeNBT(provider: $HolderLookup$Provider): $CompoundTag;
        setStackUnchecked(stack: $FluidStack_): void;
        isFluidEqual(other: $FluidStack_): boolean;
        onContentsChanged(): void;
        growStack(amount: number, action: $Action_): number;
        /**
         * @deprecated
         */
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        /**
         * @deprecated
         */
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        getNeeded(): number;
        setEmpty(): void;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): void;
        shrinkStack(arg0: number, arg1: $Action_): number;
        get capacity(): number;
        set stack(value: $FluidStack_);
        get fluidAmount(): number;
        get fluid(): $FluidStack;
        set stackUnchecked(value: $FluidStack_);
        get needed(): number;
    }
    export class $VariableCapacityFluidTank extends $BasicFluidTank {
        static create(capacity: $IntSupplier_, canExtract: $BiPredicate_<$FluidStack, $AutomationType>, canInsert: $BiPredicate_<$FluidStack, $AutomationType>, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
        static create(multiblock: $MultiblockData, capacity: $IntSupplier_, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
        static input(multiblock: $MultiblockData, capacity: $IntSupplier_, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
        static input(capacity: $IntSupplier_, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
        static output(capacity: $IntSupplier_, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
        static output(multiblock: $MultiblockData, capacity: $IntSupplier_, validator: $Predicate_<$FluidStack>, listener: $IContentsListener_): $VariableCapacityFluidTank;
    }
}
