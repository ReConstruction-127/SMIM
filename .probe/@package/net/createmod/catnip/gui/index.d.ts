import { $BindableTexture } from "@package/net/createmod/catnip/render";
import { $AbstractSimiScreenAccessor } from "@package/com/hlysine/create_connected/mixin/sequencedgearshift";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $LerpedFloat } from "@package/net/createmod/catnip/animation";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Collection_, $List } from "@package/java/util";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Color } from "@package/net/createmod/catnip/theme";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
import { $Couple } from "@package/net/createmod/catnip/data";
export * as widget from "@package/net/createmod/catnip/gui/widget";
export * as element from "@package/net/createmod/catnip/gui/element";

declare module "@package/net/createmod/catnip/gui" {
    export class $NavigatableSimiScreen extends $AbstractSimiScreen {
        isEquivalentTo(arg0: $NavigatableSimiScreen): boolean;
        centerScalingOnMouse(): void;
        static isCurrentlyRenderingPreviousScreen(): boolean;
        centerScalingOn(arg0: number, arg1: number): void;
        shareContextWith(arg0: $NavigatableSimiScreen): void;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        transition: $LerpedFloat;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static COLOR_NAV_ARROW: $Couple<$Color>;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor();
        static get currentlyRenderingPreviousScreen(): boolean;
    }
    export class $TextureSheetSegment {
    }
    export interface $TextureSheetSegment extends $BindableTexture {
        getWidth(): number;
        getHeight(): number;
        getStartY(): number;
        getStartX(): number;
        get width(): number;
        get height(): number;
        get startY(): number;
        get startX(): number;
    }
    export class $AbstractSimiScreen extends $Screen implements $AbstractSimiScreenAccessor {
        callRemoveWidgets(arg0: $Collection_<$GuiEventListener>): void;
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
    }
    export class $TickableGuiEventListener {
    }
    export interface $TickableGuiEventListener extends $GuiEventListener {
        tick(): void;
    }
}
