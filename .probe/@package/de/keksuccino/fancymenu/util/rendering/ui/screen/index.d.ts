import { $List_, $List } from "@package/java/util";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/screen" {
    export class $CustomizableScreen {
    }
    export interface $CustomizableScreen {
        removeOnInitChildrenFancyMenu(): $List<$GuiEventListener>;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableScreen}.
     */
    export type $CustomizableScreen_ = (() => $List_<$GuiEventListener>);
}
