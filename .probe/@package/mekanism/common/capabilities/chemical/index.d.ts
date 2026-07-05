import { $IChemicalTank } from "@package/mekanism/api/chemical";
import { $Direction_ } from "@package/net/minecraft/core";
import { $List } from "@package/java/util";
import { $IContentsListener } from "@package/mekanism/api";

declare module "@package/mekanism/common/capabilities/chemical" {
    export class $IChemicalTracker {
    }
    export interface $IChemicalTracker extends $IContentsListener {
        getChemicalTanks(side: $Direction_): $List<$IChemicalTank>;
    }
}
