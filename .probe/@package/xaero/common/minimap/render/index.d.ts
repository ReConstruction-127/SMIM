import { $MinimapProcessor } from "@package/xaero/common/minimap";
import { $Level } from "@package/net/minecraft/world/level";
import { $RadarRenderer as $RadarRenderer$1 } from "@package/xaero/hud/minimap/radar/render/element";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $HudMod } from "@package/xaero/common";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Iterator } from "@package/java/util";
import { $WaypointMapRenderer } from "@package/xaero/hud/minimap/waypoint/render";
import { $RadarRenderer } from "@package/xaero/common/minimap/render/radar/element";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $ModSettings } from "@package/xaero/common/settings";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $RadarColor } from "@package/xaero/hud/minimap/radar/color";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $CompassRenderer } from "@package/xaero/hud/minimap/compass/render";

declare module "@package/xaero/common/minimap/render" {
    export class $MinimapSafeModeRenderer extends $MinimapRenderer {
        renderEntityListSafeMode(arg0: $MinimapProcessor, arg1: $Entity, arg2: $Iterator<$Entity>, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: boolean, arg14: number, arg15: $RadarColor, arg16: $RadarColor, arg17: number): void;
        updateMapFrameSafeMode(arg0: $MinimapSession, arg1: $MinimapProcessor, arg2: $Player, arg3: $Entity, arg4: number, arg5: number, arg6: number, arg7: number, arg8: boolean, arg9: number, arg10: number, arg11: number, arg12: boolean, arg13: $ModSettings): void;
        renderEntityDotSafeMode(arg0: $MinimapProcessor, arg1: $Entity, arg2: $Entity, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: boolean, arg14: number, arg15: $RadarColor, arg16: $RadarColor, arg17: number): boolean;
        static black: number;
        static slime: number;
        constructor(arg0: $HudMod, arg1: $Minecraft, arg2: $WaypointMapRenderer, arg3: $Minimap, arg4: $CompassRenderer);
    }
    export class $MinimapFBORenderer extends $MinimapRenderer {
        renderChunksToFBO(arg0: $MinimapSession, arg1: $GuiGraphics, arg2: $MinimapProcessor, arg3: $Vec3_, arg4: $ResourceKey_<$Level>, arg5: number, arg6: number, arg7: number, arg8: number, arg9: boolean, arg10: boolean, arg11: number, arg12: number, arg13: number, arg14: boolean, arg15: $CustomVertexConsumers): void;
        loadFrameBuffer(arg0: $MinimapProcessor): void;
        deleteFramebuffers(): void;
        setLoadedFBO(arg0: boolean): void;
        /**
         * @deprecated
         */
        getRadarRenderer(): $RadarRenderer;
        isLoadedFBO(): boolean;
        resetEntityIcons(): void;
        assumeUsingFBO(): boolean;
        isTriedFBO(): boolean;
        resetEntityIconsResources(): void;
        renderMainEntityDot(arg0: $GuiGraphics, arg1: $Entity, arg2: boolean, arg3: $MultiBufferSource$BufferSource): void;
        getEntityRadarRenderer(): $RadarRenderer$1;
        onRadarIconModelRenderTrace(arg0: $EntityModel<never>, arg1: $VertexConsumer, arg2: number): void;
        onEntityIconModelPartRenderTrace(arg0: $ModelPart, arg1: number): void;
        static black: number;
        static slime: number;
        constructor(arg0: $HudMod, arg1: $Minecraft, arg2: $WaypointMapRenderer, arg3: $Minimap, arg4: $CompassRenderer);
        get radarRenderer(): $RadarRenderer;
        get triedFBO(): boolean;
        get entityRadarRenderer(): $RadarRenderer$1;
    }
}
