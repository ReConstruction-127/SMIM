import { $GridEvent } from "@package/appeng/api/networking/events";
import { $IEnergyService } from "@package/appeng/api/networking/energy";
import { $Level_, $ItemLike_ } from "@package/net/minecraft/world/level";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ISpatialService } from "@package/appeng/api/networking/spatial";
import { $IStorageService } from "@package/appeng/api/networking/storage";
import { $IPathingService } from "@package/appeng/api/networking/pathing";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UUID, $List, $Map, $Set, $Set_ } from "@package/java/util";
import { $ICraftingService } from "@package/appeng/api/networking/crafting";
import { $AEItemKey } from "@package/appeng/api/stacks";
import { $AEColor_, $AEColor } from "@package/appeng/api/util";
import { $ITickManager } from "@package/appeng/api/networking/ticking";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $CrashReportCategory } from "@package/net/minecraft";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Enum, $Object, $Iterable, $Class } from "@package/java/lang";
import { $JsonWriter } from "@package/com/google/gson/stream";
export * as crafting from "@package/appeng/api/networking/crafting";
export * as energy from "@package/appeng/api/networking/energy";
export * as storage from "@package/appeng/api/networking/storage";
export * as spatial from "@package/appeng/api/networking/spatial";
export * as security from "@package/appeng/api/networking/security";
export * as events from "@package/appeng/api/networking/events";
export * as ticking from "@package/appeng/api/networking/ticking";
export * as pathing from "@package/appeng/api/networking/pathing";

declare module "@package/appeng/api/networking" {
    export class $IGridConnection {
    }
    export interface $IGridConnection {
        b(): $IGridNode;
        a(): $IGridNode;
        destroy(): void;
        getDirection(arg0: $IGridNode): $Direction;
        isInWorld(): boolean;
        getUsedChannels(): number;
        getOtherSide(arg0: $IGridNode): $IGridNode;
        get inWorld(): boolean;
        get usedChannels(): number;
    }
    export class $IManagedGridNode {
    }
    export interface $IManagedGridNode {
        setFlags(...arg0: $GridFlags_[]): $IManagedGridNode;
        destroy(): void;
        create(arg0: $Level_, arg1: $BlockPos_): void;
        isActive(): boolean;
        getNode(): $IGridNode;
        ifPresent(arg0: $Consumer_<$IGrid>): boolean;
        ifPresent(arg0: $BiConsumer_<$IGrid, $IGridNode>): boolean;
        addService<T extends $IGridNodeService>(arg0: $Class<T>, arg1: T): $IManagedGridNode;
        saveToNBT(arg0: $CompoundTag_): void;
        isReady(): boolean;
        isPowered(): boolean;
        setTagName(arg0: string): $IManagedGridNode;
        setIdlePowerUsage(arg0: number): $IManagedGridNode;
        setOwningPlayer(arg0: $Player): void;
        setExposedOnSides(arg0: $Set_<$Direction_>): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemLike_): $IManagedGridNode;
        setVisualRepresentation(arg0: $AEItemKey): $IManagedGridNode;
        setVisualRepresentation(arg0: $ItemStack_): $IManagedGridNode;
        loadFromNBT(arg0: $CompoundTag_): void;
        hasGridBooted(): boolean;
        isOnline(): boolean;
        getGrid(): $IGrid;
        setOwningPlayerId(arg0: number): void;
        setInWorldNode(arg0: boolean): $IManagedGridNode;
        setGridColor(arg0: $AEColor_): $IManagedGridNode;
        set flags(value: $GridFlags_[]);
        get active(): boolean;
        get node(): $IGridNode;
        get ready(): boolean;
        get powered(): boolean;
        set tagName(value: string);
        set idlePowerUsage(value: number);
        set owningPlayer(value: $Player);
        set exposedOnSides(value: $Set_<$Direction_>);
        get online(): boolean;
        get grid(): $IGrid;
        set owningPlayerId(value: number);
        set inWorldNode(value: boolean);
        set gridColor(value: $AEColor_);
    }
    export class $IGridNode {
    }
    export interface $IGridNode {
        isActive(): boolean;
        getOwner(): $Object;
        getLevel(): $ServerLevel;
        getService<T extends $IGridNodeService>(arg0: $Class<T>): T;
        isPowered(): boolean;
        fillCrashReportCategory(arg0: $CrashReportCategory): void;
        hasFlag(arg0: $GridFlags_): boolean;
        getConnections(): $List<$IGridConnection>;
        hasGridBooted(): boolean;
        getMaxChannels(): number;
        getUsedChannels(): number;
        getConnectedSides(): $Set<$Direction>;
        getIdlePowerUsage(): number;
        getOwningPlayerId(): number;
        getGridColor(): $AEColor;
        beginVisit(arg0: $IGridVisitor_): void;
        isOnline(): boolean;
        getGrid(): $IGrid;
        meetsChannelRequirements(): boolean;
        getInWorldConnections(): $Map<$Direction, $IGridConnection>;
        getOwningPlayerProfileId(): $UUID;
        getVisualRepresentation(): $AEItemKey;
        get active(): boolean;
        get owner(): $Object;
        get level(): $ServerLevel;
        get powered(): boolean;
        get connections(): $List<$IGridConnection>;
        get maxChannels(): number;
        get usedChannels(): number;
        get connectedSides(): $Set<$Direction>;
        get idlePowerUsage(): number;
        get owningPlayerId(): number;
        get gridColor(): $AEColor;
        get online(): boolean;
        get grid(): $IGrid;
        get inWorldConnections(): $Map<$Direction, $IGridConnection>;
        get owningPlayerProfileId(): $UUID;
        get visualRepresentation(): $AEItemKey;
    }
    export class $IGridVisitor {
    }
    export interface $IGridVisitor {
        visitNode(arg0: $IGridNode): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IGridVisitor}.
     */
    export type $IGridVisitor_ = ((arg0: $IGridNode) => boolean);
    export class $IGridService {
    }
    export interface $IGridService {
    }
    export class $IGrid {
    }
    export interface $IGrid {
        size(): number;
        isEmpty(): boolean;
        "export"(arg0: $JsonWriter): void;
        getService<C extends $IGridService>(arg0: $Class<C>): C;
        getMachineNodes(arg0: $Class<never>): $Iterable<$IGridNode>;
        getStorageService(): $IStorageService;
        getCraftingService(): $ICraftingService;
        getPathingService(): $IPathingService;
        getMachineClasses(): $Iterable<$Class<never>>;
        getTickManager(): $ITickManager;
        getActiveMachines<T>(arg0: $Class<T>): $Set<T>;
        getMachines<T>(arg0: $Class<T>): $Set<T>;
        getEnergyService(): $IEnergyService;
        getSpatialService(): $ISpatialService;
        postEvent<T extends $GridEvent>(arg0: T): T;
        getNodes(): $Iterable<$IGridNode>;
        getPivot(): $IGridNode;
        get empty(): boolean;
        get storageService(): $IStorageService;
        get craftingService(): $ICraftingService;
        get pathingService(): $IPathingService;
        get machineClasses(): $Iterable<$Class<never>>;
        get tickManager(): $ITickManager;
        get energyService(): $IEnergyService;
        get spatialService(): $ISpatialService;
        get nodes(): $Iterable<$IGridNode>;
        get pivot(): $IGridNode;
    }
    export class $IGridNodeService {
    }
    export interface $IGridNodeService {
    }
    export class $GridFlags extends $Enum<$GridFlags> {
        static values(): $GridFlags[];
        static valueOf(arg0: string): $GridFlags;
        static COMPRESSED_CHANNEL: $GridFlags;
        static CANNOT_CARRY_COMPRESSED: $GridFlags;
        static CANNOT_CARRY: $GridFlags;
        static DENSE_CAPACITY: $GridFlags;
        static PREFERRED: $GridFlags;
        static MULTIBLOCK: $GridFlags;
        static REQUIRE_CHANNEL: $GridFlags;
    }
    /**
     * Values that may be interpreted as {@link $GridFlags}.
     */
    export type $GridFlags_ = "require_channel" | "compressed_channel" | "cannot_carry" | "cannot_carry_compressed" | "dense_capacity" | "multiblock" | "preferred";
}
