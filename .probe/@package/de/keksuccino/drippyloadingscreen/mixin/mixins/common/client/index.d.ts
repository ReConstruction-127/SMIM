import { $FontManager } from "@package/net/minecraft/client/gui/font";

declare module "@package/de/keksuccino/drippyloadingscreen/mixin/mixins/common/client" {
    export class $IMixinMinecraft {
    }
    export interface $IMixinMinecraft {
        getFontManagerDrippy(): $FontManager;
        get fontManagerDrippy(): $FontManager;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMinecraft}.
     */
    export type $IMixinMinecraft_ = (() => $FontManager);
}
