import { $Level_ } from "@package/net/minecraft/world/level";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_, $Holder_, $Registry, $Holder$Reference, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as vibrations from "@package/net/minecraft/world/level/gameevent/vibrations";

declare module "@package/net/minecraft/world/level/gameevent" {
    export class $DynamicGameEventListener<T extends $GameEventListener> {
        remove(level: $ServerLevel): void;
        add(level: $ServerLevel): void;
        move(level: $ServerLevel): void;
        getListener(): T;
        constructor(listener: T);
        get listener(): T;
    }
    export class $GameEventListener$Provider<T extends $GameEventListener> {
    }
    export interface $GameEventListener$Provider<T extends $GameEventListener> {
        getListener(): T;
        get listener(): T;
    }
    /**
     * Values that may be interpreted as {@link $GameEventListener$Provider}.
     */
    export type $GameEventListener$Provider_<T> = (() => T);
    export class $GameEventListenerRegistry$ListenerVisitor {
    }
    export interface $GameEventListenerRegistry$ListenerVisitor {
        visit(listener: $GameEventListener, pos: $Vec3_): void;
    }
    /**
     * Values that may be interpreted as {@link $GameEventListenerRegistry$ListenerVisitor}.
     */
    export type $GameEventListenerRegistry$ListenerVisitor_ = ((arg0: $GameEventListener, arg1: $Vec3) => void);
    export class $BlockPositionSource implements $PositionSource {
        getPosition(level: $Level_): ($Vec3) | undefined;
        getType(): $PositionSourceType<$BlockPositionSource>;
        static CODEC: $MapCodec<$BlockPositionSource>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BlockPositionSource>;
        constructor(pos: $BlockPos_);
        get type(): $PositionSourceType<$BlockPositionSource>;
    }
    export class $GameEventListenerRegistry {
        static NOOP: $GameEventListenerRegistry;
    }
    export interface $GameEventListenerRegistry {
        isEmpty(): boolean;
        register(listener: $GameEventListener): void;
        unregister(listener: $GameEventListener): void;
        visitInRangeListeners(gameEvent: $Holder_<$GameEvent>, pos: $Vec3_, context: $GameEvent$Context_, visitor: $GameEventListenerRegistry$ListenerVisitor_): boolean;
        get empty(): boolean;
    }
    export class $GameEventListener$DeliveryMode extends $Enum<$GameEventListener$DeliveryMode> {
        static values(): $GameEventListener$DeliveryMode[];
        static valueOf(arg0: string): $GameEventListener$DeliveryMode;
        static UNSPECIFIED: $GameEventListener$DeliveryMode;
        static BY_DISTANCE: $GameEventListener$DeliveryMode;
    }
    /**
     * Values that may be interpreted as {@link $GameEventListener$DeliveryMode}.
     */
    export type $GameEventListener$DeliveryMode_ = "unspecified" | "by_distance";
    export class $EntityPositionSource implements $PositionSource {
        getPosition(level: $Level_): ($Vec3) | undefined;
        getType(): $PositionSourceType<$EntityPositionSource>;
        static CODEC: $MapCodec<$EntityPositionSource>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $EntityPositionSource>;
        constructor(entity: $Entity, yOffset: number);
        get type(): $PositionSourceType<$EntityPositionSource>;
    }
    export class $GameEvent$Context extends $Record {
        static of(sourceEntity: $Entity | null): $GameEvent$Context;
        static of(affectedState: $BlockState_ | null): $GameEvent$Context;
        static of(sourceEntity: $Entity | null, affectedState: $BlockState_ | null): $GameEvent$Context;
        sourceEntity(): $Entity;
        affectedState(): $BlockState;
        constructor(arg0: $Entity | null, arg1: $BlockState_ | null);
    }
    /**
     * Values that may be interpreted as {@link $GameEvent$Context}.
     */
    export type $GameEvent$Context_ = { affectedState?: $BlockState_, sourceEntity?: $Entity,  } | [affectedState?: $BlockState_, sourceEntity?: $Entity, ];
    export interface $GameEvent extends RegistryMarked<RegistryTypes.GameEventTag, RegistryTypes.GameEvent> {}
    export class $GameEventListener {
    }
    export interface $GameEventListener {
        getDeliveryMode(): $GameEventListener$DeliveryMode;
        handleGameEvent(level: $ServerLevel, gameEvent: $Holder_<$GameEvent>, context: $GameEvent$Context_, pos: $Vec3_): boolean;
        /**
         * Gets the listening radius of the listener. Events within this radius will notify the listener when broadcasted.
         */
        getListenerRadius(): number;
        /**
         * Gets the position of the listener itself.
         */
        getListenerSource(): $PositionSource;
        get deliveryMode(): $GameEventListener$DeliveryMode;
        get listenerRadius(): number;
        get listenerSource(): $PositionSource;
    }
    export interface $PositionSourceType<T> extends RegistryMarked<RegistryTypes.PositionSourceTypeTag, RegistryTypes.PositionSourceType> {}
    export class $PositionSourceType<T extends $PositionSource> {
        /**
         * Registers a new PositionSource type with the game registry.
         * @see net.minecraft.core.Registry#POSITION_SOURCE_TYPE
         * @return The newly registered source type.
         */
        static register<S extends $PositionSourceType<T>, T extends $PositionSource>(id: string, type: S): S;
        static ENTITY: $PositionSourceType<$EntityPositionSource>;
        static BLOCK: $PositionSourceType<$BlockPositionSource>;
    }
    export interface $PositionSourceType<T extends $PositionSource> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $PositionSourceType}.
     */
    export type $PositionSourceType_<T> = RegistryTypes.PositionSourceType;
    export class $PositionSource {
        static CODEC: $Codec<$PositionSource>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $PositionSource>;
    }
    export interface $PositionSource {
        getPosition(level: $Level_): ($Vec3) | undefined;
        getType(): $PositionSourceType<$PositionSource>;
        get type(): $PositionSourceType<$PositionSource>;
    }
    /**
     * Describes an in game event or action that can be detected by listeners such as the Sculk Sensor block.
     * @param notificationRadius The radius around an event source to broadcast this event. Any listeners within this radius will be notified when the event happens.
     */
    export class $GameEvent extends $Record {
        static bootstrap(registry: $Registry<$GameEvent_>): $Holder<$GameEvent>;
        notificationRadius(): number;
        static EXPLODE: $Holder$Reference<$GameEvent>;
        static BLOCK_DESTROY: $Holder$Reference<$GameEvent>;
        static BLOCK_OPEN: $Holder$Reference<$GameEvent>;
        static ENTITY_MOUNT: $Holder$Reference<$GameEvent>;
        static FLUID_PLACE: $Holder$Reference<$GameEvent>;
        static DEFAULT_NOTIFICATION_RADIUS: number;
        static BLOCK_ATTACH: $Holder$Reference<$GameEvent>;
        static BLOCK_DETACH: $Holder$Reference<$GameEvent>;
        static ENTITY_DAMAGE: $Holder$Reference<$GameEvent>;
        static PROJECTILE_SHOOT: $Holder$Reference<$GameEvent>;
        static DRINK: $Holder$Reference<$GameEvent>;
        static ENTITY_DIE: $Holder$Reference<$GameEvent>;
        static HIT_GROUND: $Holder$Reference<$GameEvent>;
        static BLOCK_ACTIVATE: $Holder$Reference<$GameEvent>;
        static RESONATE_10: $Holder$Reference<$GameEvent>;
        static CODEC: $Codec<$Holder<$GameEvent>>;
        static RESONATE_14: $Holder$Reference<$GameEvent>;
        static RESONATE_13: $Holder$Reference<$GameEvent>;
        static RESONATE_12: $Holder$Reference<$GameEvent>;
        static RESONATE_11: $Holder$Reference<$GameEvent>;
        static CONTAINER_CLOSE: $Holder$Reference<$GameEvent>;
        static LIGHTNING_STRIKE: $Holder$Reference<$GameEvent>;
        static CONTAINER_OPEN: $Holder$Reference<$GameEvent>;
        static PRIME_FUSE: $Holder$Reference<$GameEvent>;
        static SWIM: $Holder$Reference<$GameEvent>;
        static BLOCK_CLOSE: $Holder$Reference<$GameEvent>;
        static EAT: $Holder$Reference<$GameEvent>;
        static TELEPORT: $Holder$Reference<$GameEvent>;
        static RESONATE_15: $Holder$Reference<$GameEvent>;
        static INSTRUMENT_PLAY: $Holder$Reference<$GameEvent>;
        static SCULK_SENSOR_TENDRILS_CLICKING: $Holder$Reference<$GameEvent>;
        static ENTITY_PLACE: $Holder$Reference<$GameEvent>;
        static SPLASH: $Holder$Reference<$GameEvent>;
        static BLOCK_DEACTIVATE: $Holder$Reference<$GameEvent>;
        static ITEM_INTERACT_FINISH: $Holder$Reference<$GameEvent>;
        static SHRIEK: $Holder$Reference<$GameEvent>;
        static ENTITY_ACTION: $Holder$Reference<$GameEvent>;
        static JUKEBOX_PLAY: $Holder$Reference<$GameEvent>;
        static NOTE_BLOCK_PLAY: $Holder$Reference<$GameEvent>;
        static BLOCK_CHANGE: $Holder$Reference<$GameEvent>;
        static FLAP: $Holder$Reference<$GameEvent>;
        static PROJECTILE_LAND: $Holder$Reference<$GameEvent>;
        static EQUIP: $Holder$Reference<$GameEvent>;
        static ENTITY_INTERACT: $Holder$Reference<$GameEvent>;
        static UNEQUIP: $Holder$Reference<$GameEvent>;
        static STEP: $Holder$Reference<$GameEvent>;
        static JUKEBOX_STOP_PLAY: $Holder$Reference<$GameEvent>;
        static RESONATE_7: $Holder$Reference<$GameEvent>;
        static RESONATE_6: $Holder$Reference<$GameEvent>;
        static ITEM_INTERACT_START: $Holder$Reference<$GameEvent>;
        static SHEAR: $Holder$Reference<$GameEvent>;
        static RESONATE_5: $Holder$Reference<$GameEvent>;
        static RESONATE_4: $Holder$Reference<$GameEvent>;
        static ELYTRA_GLIDE: $Holder$Reference<$GameEvent>;
        static RESONATE_9: $Holder$Reference<$GameEvent>;
        static ENTITY_DISMOUNT: $Holder$Reference<$GameEvent>;
        static FLUID_PICKUP: $Holder$Reference<$GameEvent>;
        static RESONATE_8: $Holder$Reference<$GameEvent>;
        static RESONATE_3: $Holder$Reference<$GameEvent>;
        static RESONATE_2: $Holder$Reference<$GameEvent>;
        static BLOCK_PLACE: $Holder$Reference<$GameEvent>;
        static RESONATE_1: $Holder$Reference<$GameEvent>;
        constructor(notificationRadius: number);
    }
    /**
     * Values that may be interpreted as {@link $GameEvent}.
     */
    export type $GameEvent_ = RegistryTypes.GameEvent | { notificationRadius?: number,  } | [notificationRadius?: number, ];
}
