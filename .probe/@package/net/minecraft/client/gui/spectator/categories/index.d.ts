import { $SpectatorMenuItem } from "@package/net/minecraft/client/gui/spectator";
import { $List_ } from "@package/java/util";

declare module "@package/net/minecraft/client/gui/spectator/categories" {
    export class $SpectatorPage {
        getItem(index: number): $SpectatorMenuItem;
        getSelectedSlot(): number;
        static NO_SELECTION: number;
        constructor(items: $List_<$SpectatorMenuItem>, selection: number);
        get selectedSlot(): number;
    }
}
