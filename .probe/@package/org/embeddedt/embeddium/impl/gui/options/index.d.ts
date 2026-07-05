import { $Component_, $Component } from "@package/net/minecraft/network/chat";

declare module "@package/org/embeddedt/embeddium/impl/gui/options" {
    export class $TextProvider {
    }
    export interface $TextProvider {
        getLocalizedName(): $Component;
        get localizedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $TextProvider}.
     */
    export type $TextProvider_ = (() => $Component_);
}
