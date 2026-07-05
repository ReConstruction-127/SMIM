import { $IMixinSpectatorGui } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $SpectatorMenu, $SpectatorMenuListener } from "@package/net/minecraft/client/gui/spectator";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/net/minecraft/client/gui/components/spectator" {
    export class $SpectatorGui implements $SpectatorMenuListener, $IMixinSpectatorGui {
        renderTooltip(guiGraphics: $GuiGraphics): void;
        onHotbarSelected(slot: number): void;
        isMenuActive(): boolean;
        onMouseMiddleClick(): void;
        onMouseScrolled(slot: number): void;
        renderHotbar(guiGraphics: $GuiGraphics): void;
        onSpectatorMenuClosed(menu: $SpectatorMenu): void;
        invoke_getHotbarAlpha_FancyMenu(): number;
        get_menu_FancyMenu(): $SpectatorMenu;
        constructor(minecraft: $Minecraft);
        get menuActive(): boolean;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
}
