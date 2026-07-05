import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $TooltipComponent } from "@package/net/minecraft/world/inventory/tooltip";
import { $GuiGraphics, $Font } from "@package/net/minecraft/client/gui";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $Vector2ic, $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/gui/screens/inventory/tooltip" {
    export class $ClientTooltipPositioner {
    }
    export interface $ClientTooltipPositioner {
        positionTooltip(screenWidth: number, screenHeight: number, mouseX: number, mouseY: number, tooltipWidth: number, tooltipHeight: number): $Vector2ic;
    }
    /**
     * Values that may be interpreted as {@link $ClientTooltipPositioner}.
     */
    export type $ClientTooltipPositioner_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number) => $Vector2ic);
    export class $ClientTooltipComponent {
        static create(text: $FormattedCharSequence_): $ClientTooltipComponent;
        static create(visualTooltipComponent: $TooltipComponent): $ClientTooltipComponent;
    }
    export interface $ClientTooltipComponent {
        renderText(font: $Font, mouseX: number, mouseY: number, matrix: $Matrix4f, bufferSource: $MultiBufferSource$BufferSource): void;
        renderImage(font: $Font, x: number, y: number, guiGraphics: $GuiGraphics): void;
        getWidth(font: $Font): number;
        getHeight(): number;
        get height(): number;
    }
}
