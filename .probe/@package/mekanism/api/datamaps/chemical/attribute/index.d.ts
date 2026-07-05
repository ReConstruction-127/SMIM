import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $List_ } from "@package/java/util";
import { $ChemicalAttribute } from "@package/mekanism/api/chemical/attribute";

declare module "@package/mekanism/api/datamaps/chemical/attribute" {
    export class $IChemicalAttribute {
    }
    export interface $IChemicalAttribute {
        needsValidation(): boolean;
        toLegacyAttribute(): $ChemicalAttribute;
        collectTooltips(arg0: $Item$TooltipContext, arg1: $List_<$Component_>, arg2: $TooltipFlag): void;
    }
    /**
     * Values that may be interpreted as {@link $IChemicalAttribute}.
     */
    export type $IChemicalAttribute_ = (() => $ChemicalAttribute);
}
