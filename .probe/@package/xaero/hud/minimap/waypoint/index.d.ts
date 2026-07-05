import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Component } from "@package/net/minecraft/network/chat";
import { $HudMod } from "@package/xaero/common";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Waypoint } from "@package/xaero/common/minimap/waypoints";
import { $Enum } from "@package/java/lang";
import { $WaypointDeleter } from "@package/xaero/hud/minimap/waypoint/render";
export * as render from "@package/xaero/hud/minimap/waypoint/render";
export * as set from "@package/xaero/hud/minimap/waypoint/set";

declare module "@package/xaero/hud/minimap/waypoint" {
    export class $WaypointPurpose extends $Enum<$WaypointPurpose> {
        static values(): $WaypointPurpose[];
        static valueOf(arg0: string): $WaypointPurpose;
        isDeath(): boolean;
        isDestination(): boolean;
        static OLD_DEATH: $WaypointPurpose;
        static DESTINATION: $WaypointPurpose;
        static DEATH: $WaypointPurpose;
        static NORMAL: $WaypointPurpose;
        get death(): boolean;
        get destination(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WaypointPurpose}.
     */
    export type $WaypointPurpose_ = "normal" | "death" | "old_death" | "destination";
    export class $WaypointSharingHandler {
        shareWaypoint(arg0: $Screen, arg1: $Waypoint, arg2: $MinimapWorld): void;
        onWaypointAdd(arg0: string[]): void;
        onWaypointReceived(arg0: string, arg1: string): void;
        onShareConfirmationResult(arg0: boolean): void;
        static WAYPOINT_OLD_SHARE_PREFIX: string;
        static WAYPOINT_ADD_PREFIX: string;
        static WAYPOINT_SHARE_PREFIX: string;
    }
    export class $WaypointSession {
        getSession(): $MinimapSession;
        getTemporaryHandler(): $TemporaryWaypointHandler;
        getSetChangedTime(): number;
        getDeathpointHandler(): $DeathpointHandler;
        setSetChangedTime(arg0: number): void;
        getCollector(): $WaypointCollector;
        getTeleport(): $WaypointTeleport;
        getDestinationHandler(): $DestinationHandler;
        getSharing(): $WaypointSharingHandler;
        getMc(): $Minecraft;
        getDeleter(): $WaypointDeleter;
        constructor(arg0: $HudMod, arg1: $MinimapSession);
        get session(): $MinimapSession;
        get temporaryHandler(): $TemporaryWaypointHandler;
        get deathpointHandler(): $DeathpointHandler;
        get collector(): $WaypointCollector;
        get teleport(): $WaypointTeleport;
        get destinationHandler(): $DestinationHandler;
        get sharing(): $WaypointSharingHandler;
        get mc(): $Minecraft;
        get deleter(): $WaypointDeleter;
    }
    export class $WaypointColor extends $Enum<$WaypointColor> {
        getName(): $Component;
        static values(): $WaypointColor[];
        static valueOf(arg0: string): $WaypointColor;
        static fromIndex(arg0: number): $WaypointColor;
        getFormat(): string;
        static getRandom(): $WaypointColor;
        getHex(): number;
        static GOLD: $WaypointColor;
        static GRAY: $WaypointColor;
        static AQUA: $WaypointColor;
        static WHITE: $WaypointColor;
        static BLUE: $WaypointColor;
        static DARK_AQUA: $WaypointColor;
        static PURPLE: $WaypointColor;
        static DARK_BLUE: $WaypointColor;
        static GREEN: $WaypointColor;
        static RED: $WaypointColor;
        static DARK_PURPLE: $WaypointColor;
        static DARK_RED: $WaypointColor;
        static BLACK: $WaypointColor;
        static DARK_GREEN: $WaypointColor;
        static YELLOW: $WaypointColor;
        static DARK_GRAY: $WaypointColor;
        get format(): string;
        static get random(): $WaypointColor;
        get hex(): number;
    }
    /**
     * Values that may be interpreted as {@link $WaypointColor}.
     */
    export type $WaypointColor_ = "black" | "dark_blue" | "dark_green" | "dark_aqua" | "dark_red" | "dark_purple" | "gold" | "gray" | "dark_gray" | "blue" | "green" | "aqua" | "red" | "purple" | "yellow" | "white";
}
