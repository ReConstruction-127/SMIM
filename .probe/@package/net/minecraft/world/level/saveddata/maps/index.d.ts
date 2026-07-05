import { $Level, $BlockGetter, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $ItemStack_, $DyeColor } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $List, $List_, $Collection } from "@package/java/util";
import { $StationMapData, $StationMarker, $StationBlockEntity } from "@package/com/simibubi/create/content/trains/station";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $Record, $Iterable } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/level/saveddata/maps" {
    export class $MapDecorationType extends $Record {
        showOnItemFrame(): boolean;
        hasMapColor(): boolean;
        mapColor(): number;
        trackCount(): boolean;
        explorationMapElement(): boolean;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$MapDecorationType>>;
        static NO_MAP_COLOR: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$MapDecorationType>>;
        constructor(arg0: $ResourceLocation_, arg1: boolean, arg2: number, arg3: boolean, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $MapDecorationType}.
     */
    export type $MapDecorationType_ = RegistryTypes.MapDecorationType | { trackCount?: boolean, explorationMapElement?: boolean, assetId?: $ResourceLocation_, mapColor?: number, showOnItemFrame?: boolean,  } | [trackCount?: boolean, explorationMapElement?: boolean, assetId?: $ResourceLocation_, mapColor?: number, showOnItemFrame?: boolean, ];
    export class $MapBanner extends $Record {
        name(): ($Component) | undefined;
        getId(): string;
        pos(): $BlockPos;
        color(): $DyeColor;
        getDecoration(): $Holder<$MapDecorationType>;
        static fromWorld(level: $BlockGetter, pos: $BlockPos_): $MapBanner;
        static CODEC: $Codec<$MapBanner>;
        static LIST_CODEC: $Codec<$List<$MapBanner>>;
        constructor(arg0: $BlockPos_, arg1: $DyeColor_, arg2: ($Component_) | undefined);
        get id(): string;
        get decoration(): $Holder<$MapDecorationType>;
    }
    /**
     * Values that may be interpreted as {@link $MapBanner}.
     */
    export type $MapBanner_ = { pos?: $BlockPos_, color?: $DyeColor_, name?: ($Component_) | undefined,  } | [pos?: $BlockPos_, color?: $DyeColor_, name?: ($Component_) | undefined, ];
    export class $MapItemSavedData$MapPatch extends $Record {
        width(): number;
        height(): number;
        startX(): number;
        startY(): number;
        applyToMap(savedData: $MapItemSavedData): void;
        mapColors(): number[];
        static STREAM_CODEC: $StreamCodec<$ByteBuf, ($MapItemSavedData$MapPatch) | undefined>;
        constructor(startX: number, startY: number, width: number, height: number, mapColors: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MapItemSavedData$MapPatch}.
     */
    export type $MapItemSavedData$MapPatch_ = { startX?: number, startY?: number, width?: number, mapColors?: number[], height?: number,  } | [startX?: number, startY?: number, width?: number, mapColors?: number[], height?: number, ];
    export class $MapDecoration extends $Record {
        name(): ($Component) | undefined;
        type(): $Holder<$MapDecorationType>;
        x(): number;
        y(): number;
        rot(): number;
        getSpriteLocation(): $ResourceLocation;
        renderOnFrame(): boolean;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MapDecoration>;
        constructor(type: $Holder_<$MapDecorationType>, x: number, y: number, rot: number, name: ($Component_) | undefined);
        get spriteLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $MapDecoration}.
     */
    export type $MapDecoration_ = { x?: number, rot?: number, y?: number, type?: $Holder_<$MapDecorationType>, name?: ($Component_) | undefined,  } | [x?: number, rot?: number, y?: number, type?: $Holder_<$MapDecorationType>, name?: ($Component_) | undefined, ];
    export class $MapItemSavedData$HoldingPlayer {
        step: number;
        player: $Player;
    }
    export class $MapId extends $Record {
        id(): number;
        key(): string;
        static CODEC: $Codec<$MapId>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $MapId>;
        constructor(arg0: number);
    }
    /**
     * Values that may be interpreted as {@link $MapId}.
     */
    export type $MapId_ = { id?: number,  } | [id?: number, ];
    export class $MapItemSavedData extends $SavedData implements $StationMapData {
        static load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $MapItemSavedData;
        static factory(): $SavedData$Factory<$MapItemSavedData>;
        setColor(x: number, z: number, color: number): void;
        removedFromFrame(pos: $BlockPos_, entityId: number): void;
        getDecorations(): $Iterable<$MapDecoration>;
        static addTargetDecoration(stack: $ItemStack_, pos: $BlockPos_, type: string, mapDecorationType: $Holder_<$MapDecorationType>): void;
        /**
         * Whether this `SavedData` needs saving to disk.
         */
        isExplorationMap(): boolean;
        locked(): $MapItemSavedData;
        getUpdatePacket(mapId: $MapId_, player: $Player): $Packet<never>;
        getHoldingPlayer(player: $Player): $MapItemSavedData$HoldingPlayer;
        checkBanners(reader: $BlockGetter, x: number, z: number): void;
        updateColor(x: number, z: number, color: number): boolean;
        /**
         * Adds the player passed to the list of visible players and checks to see which players are visible
         */
        tickCarriedBy(player: $Player, mapStack: $ItemStack_): void;
        toggleBanner(accessor: $LevelAccessor, pos: $BlockPos_): boolean;
        static createFresh(x: number, arg1: number, z: number, arg3: boolean, scale: boolean, trackingPosition: $ResourceKey_<$Level>): $MapItemSavedData;
        isTrackedCountOverLimit(trackedCount: number): boolean;
        scaled(): $MapItemSavedData;
        static createForClient(scale: number, locked: boolean, dimension: $ResourceKey_<$Level>): $MapItemSavedData;
        handler$ccj000$create$onCheckBanners(arg0: $BlockGetter, arg1: number, arg2: number, arg3: $CallbackInfo): void;
        toggleStation(arg0: $LevelAccessor, arg1: $BlockPos_, arg2: $StationBlockEntity): boolean;
        addClientSideDecorations(decorations: $List_<$MapDecoration_>): void;
        addDecoration(decorationType: $Holder_<$MapDecorationType>, level: $LevelAccessor | null, id: string, x: number, arg4: number, z: number, arg6: $Component_ | null): void;
        addStationMarker(arg0: $StationMarker): void;
        removeDecoration(identifier: string): void;
        getBanners(): $Collection<$MapBanner>;
        centerZ: number;
        static TRACKED_DECORATION_LIMIT: number;
        centerX: number;
        scale: number;
        static MAX_SCALE: number;
        dimension: $ResourceKey<$Level>;
        colors: number[];
        get decorations(): $Iterable<$MapDecoration>;
        get explorationMap(): boolean;
        get banners(): $Collection<$MapBanner>;
    }
    export interface $MapDecorationType extends RegistryMarked<RegistryTypes.MapDecorationTypeTag, RegistryTypes.MapDecorationType> {}
}
