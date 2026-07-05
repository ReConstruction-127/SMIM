import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $ItemVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/item";

declare module "@package/aztech/modern_industrialization/api/machine/component" {
    export class $FluidAccess {
    }
    export interface $FluidAccess {
        getCapacity(): number;
        getVariant(): $FluidVariant;
        getAmount(): number;
        toStack(): $FluidStack;
        get capacity(): number;
        get variant(): $FluidVariant;
        get amount(): number;
    }
    export class $ItemAccess {
    }
    export interface $ItemAccess {
        getVariant(): $ItemVariant;
        getAmount(): number;
        toStack(): $ItemStack;
        get variant(): $ItemVariant;
        get amount(): number;
    }
}
