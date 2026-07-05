import { $Level } from "@package/net/minecraft/world/level";
import { $WaypointSession } from "@package/xaero/hud/minimap/waypoint";
import { $MinimapSession } from "@package/xaero/hud/minimap/module";
import { $List, $Map$Entry } from "@package/java/util";
import { $MinimapWorld } from "@package/xaero/hud/minimap/world";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ServerWaypointManager } from "@package/xaero/hud/minimap/waypoint/server";
import { $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $XaeroPath } from "@package/xaero/hud/path";
import { $MinimapWorldConnectionManager } from "@package/xaero/hud/minimap/world/connection";
import { $WaypointsSort, $WaypointWorldContainer } from "@package/xaero/common/minimap/waypoints";
import { $Iterable } from "@package/java/lang";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $RootConfig } from "@package/xaero/hud/minimap/world/container/config";

declare module "@package/xaero/hud/minimap/world/container" {
    export class $MinimapWorldContainer {
        getName(arg0: string): string;
        isEmpty(): boolean;
        setName(arg0: string, arg1: string): void;
        getRoot(): $MinimapWorldRootContainer;
        getPath(): $XaeroPath;
        getSubName(): string;
        setPath(arg0: $XaeroPath): void;
        getSession(): $MinimapSession;
        getFirstWorld(): $MinimapWorld;
        getRootConfig(): $RootConfig;
        removeName(arg0: string): void;
        getWorlds(): $Iterable<$MinimapWorld>;
        getLastNode(): string;
        addWorld(arg0: string): $MinimapWorld;
        addWorld(arg0: $MinimapWorld): void;
        removeWorld(arg0: string): void;
        addSubContainer(arg0: $XaeroPath): $MinimapWorldContainer;
        getSubContainers(): $Iterable<$MinimapWorldContainer>;
        deleteSubContainer(arg0: $XaeroPath): boolean;
        getWorldsCopy(): $List<$MinimapWorld>;
        getFullWorldName(arg0: string, arg1: string): string;
        getDirectoryPath(): $Path;
        getFirstWorldConnectedTo(arg0: $MinimapWorld): $MinimapWorld;
        fixPathCharacterCases(arg0: $XaeroPath): $XaeroPath;
        getServerWaypointManager(): $ServerWaypointManager;
        getAllWorldsIterable(): $Iterable<$MinimapWorld>;
        containsSubContainer(arg0: $XaeroPath): boolean;
        get empty(): boolean;
        get root(): $MinimapWorldRootContainer;
        get subName(): string;
        get session(): $MinimapSession;
        get firstWorld(): $MinimapWorld;
        get rootConfig(): $RootConfig;
        get worlds(): $Iterable<$MinimapWorld>;
        get lastNode(): string;
        get subContainers(): $Iterable<$MinimapWorldContainer>;
        get worldsCopy(): $List<$MinimapWorld>;
        get directoryPath(): $Path;
        get serverWaypointManager(): $ServerWaypointManager;
        get allWorldsIterable(): $Iterable<$MinimapWorld>;
    }
    export class $MinimapWorldRootContainer extends $WaypointWorldContainer {
        getConfig(): $RootConfig;
        /**
         * @deprecated
         */
        isTeleportationEnabled(): boolean;
        /**
         * @deprecated
         */
        getSortType(): $WaypointsSort;
        /**
         * @deprecated
         */
        setSortType(arg0: $WaypointsSort): void;
        /**
         * @deprecated
         */
        isSortReversed(): boolean;
        /**
         * @deprecated
         */
        isIgnoreHeightmaps(): boolean;
        /**
         * @deprecated
         */
        setServerTeleportCommandRotationFormat(arg0: string): void;
        /**
         * @deprecated
         */
        getServerTeleportCommandRotationFormat(): string;
        /**
         * @deprecated
         */
        setSortReversed(arg0: boolean): void;
        getDimensionScale(arg0: $ResourceKey_<$Level>): number;
        renameOldContainer(arg0: $XaeroPath): void;
        /**
         * @deprecated
         */
        toggleSortReversed(): void;
        isConfigLoaded(): boolean;
        getDimensionType(arg0: $ResourceKey_<$Level>): $DimensionType;
        /**
         * @deprecated
         */
        toggleSortType(): void;
        setDimensionTypeId(arg0: $ResourceKey_<$Level>, arg1: $ResourceLocation_): void;
        getSubWorldConnections(): $MinimapWorldConnectionManager;
        updateConnectionsField(arg0: $WaypointSession): void;
        /**
         * @deprecated
         */
        setIgnoreHeightmaps(arg0: boolean): void;
        /**
         * @deprecated
         */
        setIgnoreServerLevelId(arg0: boolean): void;
        /**
         * @deprecated
         */
        setTeleportationEnabled(arg0: boolean): void;
        /**
         * @deprecated
         */
        getDefaultMultiworldId(): string;
        /**
         * @deprecated
         */
        setDefaultMultiworldId(arg0: string): void;
        updateDimensionType(arg0: $ClientLevel): void;
        /**
         * @deprecated
         */
        isIgnoreServerLevelId(): boolean;
        /**
         * @deprecated
         */
        isUsingMultiworldDetection(): boolean;
        getDimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
        /**
         * @deprecated
         */
        getServerTeleportCommandFormat(): string;
        /**
         * @deprecated
         */
        setServerTeleportCommandFormat(arg0: string): void;
        /**
         * @deprecated
         */
        setUsingDefaultTeleportCommand(arg0: boolean): void;
        /**
         * @deprecated
         */
        setUsingMultiworldDetection(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUsingDefaultTeleportCommand(): boolean;
        get config(): $RootConfig;
        get configLoaded(): boolean;
        get subWorldConnections(): $MinimapWorldConnectionManager;
        get dimensionTypeIds(): $Iterable<$Map$Entry<$ResourceKey<$Level>, $ResourceLocation>>;
    }
}
