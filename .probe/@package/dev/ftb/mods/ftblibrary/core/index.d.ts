import { $Item, $Item_ } from "@package/net/minecraft/world/item";

declare module "@package/dev/ftb/mods/ftblibrary/core" {
    export class $ItemFTBL {
    }
    export interface $ItemFTBL {
        setCraftingRemainingItemFTBL(arg0: $Item_): void;
        set craftingRemainingItemFTBL(value: $Item_);
    }
    /**
     * Values that may be interpreted as {@link $ItemFTBL}.
     */
    export type $ItemFTBL_ = ((arg0: $Item) => void);
}
