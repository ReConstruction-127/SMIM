import { $Level } from "@package/net/minecraft/world/level";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $Item } from "@package/net/minecraft/world/item";
import { $ClientSyncedTrackedPlayerManager as $ClientSyncedTrackedPlayerManager$1 } from "@package/xaero/hud/minimap/player/tracker/synced";
import { $ClientSyncedTrackedPlayerManager } from "@package/xaero/common/minimap/radar/tracker/synced";
import { $HudMod, $IXaeroMinimap } from "@package/xaero/common";
import { $CustomVertexConsumers } from "@package/xaero/common/graphics";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MinimapWriter } from "@package/xaero/common/minimap/write";
import { $RadarSession } from "@package/xaero/hud/minimap/radar";
import { $MinimapElementOverMapRendererHandler } from "@package/xaero/common/minimap/element/render/over";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Minimap } from "@package/xaero/hud/minimap";
import { $MinimapRadar } from "@package/xaero/common/minimap/radar";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as radar from "@package/xaero/common/minimap/radar";
export * as waypoints from "@package/xaero/common/minimap/waypoints";
export * as render from "@package/xaero/common/minimap/render";
export * as region from "@package/xaero/common/minimap/region";
export * as highlight from "@package/xaero/common/minimap/highlight";
export * as write from "@package/xaero/common/minimap/write";
export * as mcworld from "@package/xaero/common/minimap/mcworld";
export * as element from "@package/xaero/common/minimap/element";

declare module "@package/xaero/common/minimap" {
    /**
     * @deprecated
     */
    export class $MinimapInterface extends $Minimap {
        /**
         * @deprecated
         */
        getOverMapRendererHandler(): $MinimapElementOverMapRendererHandler;
        constructor(arg0: $HudMod);
        get overMapRendererHandler(): $MinimapElementOverMapRendererHandler;
    }
    export class $MinimapProcessor {
        cleanup(): void;
        onClientTick(): void;
        getMinimapInterface(): $MinimapInterface;
        getMinimapItem(): $Item;
        updateZoom(): void;
        getSession(): $MinimapSession;
        toggleManualCaveMode(): void;
        canUseFrameBuffer(): boolean;
        getFBOBufferSize(): number;
        getForcedFairPlay(): boolean;
        onPlayerTick(): void;
        setEnlargedMap(arg0: boolean): void;
        instantZoom(): void;
        getMinimapWriter(): $MinimapWriter;
        getRadarSession(): $RadarSession;
        isEnlargedMap(): boolean;
        isToResetImage(): boolean;
        setToResetImage(arg0: boolean): void;
        isManualCaveMode(): boolean;
        getMinimapZoom(): number;
        getSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        updateMinimapItem(): void;
        static hasMinimapItem(arg0: $Player): boolean;
        getServerModNetworkVersion(): number;
        getLastMapDimensionScale(): number;
        getLastMapDimension(): $ResourceKey<$Level>;
        setServerModNetworkVersion(arg0: number): void;
        isCaveModeDisplayed(): boolean;
        setLastMapDimensionScale(arg0: number): void;
        getMinimapBufferSize(arg0: number): number;
        setLastMapDimension(arg0: $ResourceKey_<$Level>): void;
        /**
         * @deprecated
         */
        getLastPlayerDimDiv(): number;
        /**
         * @deprecated
         */
        setLastPlayerDimDiv(arg0: number): void;
        setFairPlayOnlyMessageReceived(arg0: boolean): void;
        setNoMinimapMessageReceived(arg0: boolean): void;
        onRender(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $CustomVertexConsumers): void;
        /**
         * @deprecated
         */
        getEntityRadar(): $MinimapRadar;
        getTargetZoom(): number;
        getMinimapSize(): number;
        /**
         * @deprecated
         */
        getClientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
        setConsideringNetherFairPlayMessage(arg0: boolean): void;
        serverHasMod(): boolean;
        checkFBO(): void;
        getNoMinimapMessageReceived(): boolean;
        isConsideringNetherFairPlayMessage(): boolean;
        static DEBUG: boolean;
        static FRAME: number;
        constructor(arg0: $IXaeroMinimap, arg1: $MinimapSession, arg2: $MinimapWriter, arg3: $RadarSession, arg4: $ClientSyncedTrackedPlayerManager$1);
        get minimapInterface(): $MinimapInterface;
        get minimapItem(): $Item;
        get session(): $MinimapSession;
        get FBOBufferSize(): number;
        get forcedFairPlay(): boolean;
        get minimapWriter(): $MinimapWriter;
        get radarSession(): $RadarSession;
        get manualCaveMode(): boolean;
        get minimapZoom(): number;
        get syncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager$1;
        get caveModeDisplayed(): boolean;
        set fairPlayOnlyMessageReceived(value: boolean);
        get entityRadar(): $MinimapRadar;
        get targetZoom(): number;
        get minimapSize(): number;
        get clientSyncedTrackedPlayerManager(): $ClientSyncedTrackedPlayerManager;
    }
}
