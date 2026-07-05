import { $Stream } from "@package/java/util/stream";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";

declare module "@package/dev/latvian/mods/kubejs/create/core/mixin" {
    export class $FluidIngredientStacksInvoker {
    }
    export interface $FluidIngredientStacksInvoker {
        callGenerateStacks(): $Stream<$FluidStack>;
    }
    /**
     * Values that may be interpreted as {@link $FluidIngredientStacksInvoker}.
     */
    export type $FluidIngredientStacksInvoker_ = (() => $Stream<$FluidStack_>);
}
