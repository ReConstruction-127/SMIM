import { $WaypointWorldRenderer } from "@package/xaero/hud/minimap/waypoint/render/world";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/hud/minimap/element/render/over";
import { $MinimapSafeModeRenderer, $MinimapFBORenderer } from "@package/xaero/common/minimap/render";
import { $WaypointsIngameRenderer, $WaypointsGuiRenderer } from "@package/xaero/common/minimap/waypoints/render";
import { $InfoDisplays } from "@package/xaero/hud/minimap/info";
import { $MinimapElementWorldRendererHandler } from "@package/xaero/hud/minimap/element/render/world";
import { $HudMod } from "@package/xaero/common";
import { $Throwable } from "@package/java/lang";
import { $WaypointMapRenderer, $WaypointsGuiRenderer as $WaypointsGuiRenderer$1 } from "@package/xaero/hud/minimap/waypoint/render";
import { $CompassRenderer } from "@package/xaero/hud/minimap/compass/render";
export * as waypoint from "@package/xaero/hud/minimap/waypoint";
export * as world from "@package/xaero/hud/minimap/world";
export * as info from "@package/xaero/hud/minimap/info";
export * as element from "@package/xaero/hud/minimap/element";
export * as radar from "@package/xaero/hud/minimap/radar";
export * as player from "@package/xaero/hud/minimap/player";
export * as module from "@package/xaero/hud/minimap/module";
export * as compass from "@package/xaero/hud/minimap/compass";
export * as common from "@package/xaero/hud/minimap/common";

declare module "@package/xaero/hud/minimap" {
    export class $Minimap {
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        getWorldRendererHandler(): $MinimapElementWorldRendererHandler;
        setCrashedWith(arg0: $Throwable): void;
        getInfoDisplays(): $InfoDisplays;
        getCrashedWith(): $Throwable;
        getCompassRenderer(): $CompassRenderer;
        checkCrashes(): void;
        getMinimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        getWaypointWorldRenderer(): $WaypointWorldRenderer;
        /**
         * @deprecated
         */
        getWaypointsIngameRenderer(): $WaypointsIngameRenderer;
        /**
         * @deprecated
         */
        getWaypointsGuiRenderer(): $WaypointsGuiRenderer;
        getMinimapFBORenderer(): $MinimapFBORenderer;
        getWaypointMapRenderer(): $WaypointMapRenderer;
        /**
         * @deprecated
         */
        getWaypointGuiRenderer(): $WaypointsGuiRenderer$1;
        usingFBO(): boolean;
        getModMain(): $HudMod;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        get worldRendererHandler(): $MinimapElementWorldRendererHandler;
        get infoDisplays(): $InfoDisplays;
        get compassRenderer(): $CompassRenderer;
        get minimapSafeModeRenderer(): $MinimapSafeModeRenderer;
        get waypointWorldRenderer(): $WaypointWorldRenderer;
        get waypointsIngameRenderer(): $WaypointsIngameRenderer;
        get waypointsGuiRenderer(): $WaypointsGuiRenderer;
        get minimapFBORenderer(): $MinimapFBORenderer;
        get waypointMapRenderer(): $WaypointMapRenderer;
        get waypointGuiRenderer(): $WaypointsGuiRenderer$1;
        get modMain(): $HudMod;
    }
}
