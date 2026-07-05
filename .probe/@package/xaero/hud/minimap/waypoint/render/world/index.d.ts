import { $MinimapElementRenderer, $MinimapElementRenderInfo } from "@package/xaero/hud/minimap/element/render";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";

declare module "@package/xaero/hud/minimap/waypoint/render/world" {
    export class $WaypointWorldRenderer extends $MinimapElementRenderer<$Waypoint, $WaypointWorldRenderContext> {
        renderElement(arg0: $Waypoint, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
    }
}
