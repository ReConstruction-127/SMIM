import { $ReferenceSet, $Reference2ReferenceMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $BlockColors, $BlockColor } from "@package/net/minecraft/client/color/block";
import { $ItemColor } from "@package/net/minecraft/client/color/item";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/org/embeddedt/embeddium/impl/model/color/interop" {
    export class $BlockColorsExtended {
        static getProviders(arg0: $BlockColors): $Reference2ReferenceMap<$Block, $BlockColor>;
        static getOverridenVanillaBlocks(arg0: $BlockColors): $ReferenceSet<$Block>;
    }
    export interface $BlockColorsExtended {
        sodium$getProviders(): $Reference2ReferenceMap<$Block, $BlockColor>;
        sodium$getOverridenVanillaBlocks(): $ReferenceSet<$Block>;
    }
    export class $ItemColorsExtended {
    }
    export interface $ItemColorsExtended {
        sodium$getColorProvider(arg0: $ItemStack_): $ItemColor;
    }
    /**
     * Values that may be interpreted as {@link $ItemColorsExtended}.
     */
    export type $ItemColorsExtended_ = ((arg0: $ItemStack) => $ItemColor);
}
