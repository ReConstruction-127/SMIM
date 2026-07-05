import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ConnectionProtocol_, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PacketFlow_ } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $UUID, $List, $Set, $UUID_, $Set_, $List_ } from "@package/java/util";
import { $ClientboundCustomPayloadPacket, $ServerboundCustomPayloadPacket } from "@package/net/minecraft/network/protocol/common";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $StreamCodec, $StreamDecoder_, $StreamMemberEncoder_ } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/common/custom" {
    export class $CustomPacketPayload$TypeAndCodec<B extends $FriendlyByteBuf, T extends $CustomPacketPayload> extends $Record {
        type(): $CustomPacketPayload$Type<T>;
        codec(): $StreamCodec<B, T>;
        constructor(type: $CustomPacketPayload$Type_<T>, codec: $StreamCodec<B, T>);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$TypeAndCodec}.
     */
    export type $CustomPacketPayload$TypeAndCodec_<B, T> = { codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>, type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>,  } | [codec?: $StreamCodec<$FriendlyByteBuf, $CustomPacketPayload_>, type?: $CustomPacketPayload$Type_<$CustomPacketPayload_>, ];
    export class $BrainDebugPayload$BrainDump extends $Record {
        name(): string;
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        xp(): number;
        uuid(): $UUID;
        activities(): $List<string>;
        inventory(): string;
        hasPoi(pos: $BlockPos_): boolean;
        health(): number;
        profession(): string;
        memories(): $List<string>;
        maxHealth(): number;
        gossips(): $List<string>;
        behaviors(): $List<string>;
        hasPotentialPoi(pos: $BlockPos_): boolean;
        potentialPois(): $Set<$BlockPos>;
        pois(): $Set<$BlockPos>;
        angerLevel(): number;
        wantsGolem(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: string, arg3: string, arg4: number, arg5: number, arg6: number, arg7: $Vec3_, arg8: string, arg9: $Path | null, arg10: boolean, arg11: number, arg12: $List_<string>, arg13: $List_<string>, arg14: $List_<string>, arg15: $List_<string>, arg16: $Set_<$BlockPos_>, arg17: $Set_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BrainDebugPayload$BrainDump}.
     */
    export type $BrainDebugPayload$BrainDump_ = { gossips?: $List_<string>, pois?: $Set_<$BlockPos_>, profession?: string, wantsGolem?: boolean, activities?: $List_<string>, name?: string, maxHealth?: number, uuid?: $UUID_, inventory?: string, path?: $Path, memories?: $List_<string>, id?: number, potentialPois?: $Set_<$BlockPos_>, xp?: number, health?: number, behaviors?: $List_<string>, angerLevel?: number, pos?: $Vec3_,  } | [gossips?: $List_<string>, pois?: $Set_<$BlockPos_>, profession?: string, wantsGolem?: boolean, activities?: $List_<string>, name?: string, maxHealth?: number, uuid?: $UUID_, inventory?: string, path?: $Path, memories?: $List_<string>, id?: number, potentialPois?: $Set_<$BlockPos_>, xp?: number, health?: number, behaviors?: $List_<string>, angerLevel?: number, pos?: $Vec3_, ];
    export class $BeeDebugPayload$BeeInfo extends $Record {
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        pos(): $Vec3;
        path(): $Path;
        hasHive(pos: $BlockPos_): boolean;
        hivePos(): $BlockPos;
        uuid(): $UUID;
        travelTicks(): number;
        generateName(): string;
        blacklistedHives(): $List<$BlockPos>;
        goals(): $Set<string>;
        flowerPos(): $BlockPos;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: $Vec3_, arg3: $Path | null, arg4: $BlockPos_ | null, arg5: $BlockPos_ | null, arg6: number, arg7: $Set_<string>, arg8: $List_<$BlockPos_>);
    }
    /**
     * Values that may be interpreted as {@link $BeeDebugPayload$BeeInfo}.
     */
    export type $BeeDebugPayload$BeeInfo_ = { travelTicks?: number, flowerPos?: $BlockPos_, pos?: $Vec3_, hivePos?: $BlockPos_, blacklistedHives?: $List_<$BlockPos_>, id?: number, path?: $Path, uuid?: $UUID_, goals?: $Set_<string>,  } | [travelTicks?: number, flowerPos?: $BlockPos_, pos?: $Vec3_, hivePos?: $BlockPos_, blacklistedHives?: $List_<$BlockPos_>, id?: number, path?: $Path, uuid?: $UUID_, goals?: $Set_<string>, ];
    export class $CustomPacketPayload$Type<T extends $CustomPacketPayload> extends $Record {
        id(): $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$Type}.
     */
    export type $CustomPacketPayload$Type_<T> = { id?: $ResourceLocation_,  } | [id?: $ResourceLocation_, ];
    export class $HiveDebugPayload$HiveInfo extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        pos(): $BlockPos;
        occupantCount(): number;
        honeyLevel(): number;
        hiveType(): string;
        sedated(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BlockPos_, arg1: string, arg2: number, arg3: number, arg4: boolean);
    }
    /**
     * Values that may be interpreted as {@link $HiveDebugPayload$HiveInfo}.
     */
    export type $HiveDebugPayload$HiveInfo_ = { pos?: $BlockPos_, occupantCount?: number, hiveType?: string, honeyLevel?: number, sedated?: boolean,  } | [pos?: $BlockPos_, occupantCount?: number, hiveType?: string, honeyLevel?: number, sedated?: boolean, ];
    export class $GoalDebugPayload$DebugGoal extends $Record {
        name(): string;
        priority(): number;
        write(buffer: $FriendlyByteBuf): void;
        isRunning(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: boolean, arg2: string);
        get running(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $GoalDebugPayload$DebugGoal}.
     */
    export type $GoalDebugPayload$DebugGoal_ = { priority?: number, isRunning?: boolean, name?: string,  } | [priority?: number, isRunning?: boolean, name?: string, ];
    export class $BreezeDebugPayload$BreezeInfo extends $Record {
        id(): number;
        write(buffer: $FriendlyByteBuf): void;
        uuid(): $UUID;
        jumpTarget(): $BlockPos;
        generateName(): string;
        attackTarget(): number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $UUID_, arg1: number, arg2: number, arg3: $BlockPos_);
    }
    /**
     * Values that may be interpreted as {@link $BreezeDebugPayload$BreezeInfo}.
     */
    export type $BreezeDebugPayload$BreezeInfo_ = { jumpTarget?: $BlockPos_, attackTarget?: number, id?: number, uuid?: $UUID_,  } | [jumpTarget?: $BlockPos_, attackTarget?: number, id?: number, uuid?: $UUID_, ];
    export class $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
    }
    export interface $CustomPacketPayload$FallbackProvider<B extends $FriendlyByteBuf> {
        create(id: $ResourceLocation_): $StreamCodec<B, $CustomPacketPayload>;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload$FallbackProvider}.
     */
    export type $CustomPacketPayload$FallbackProvider_<B> = ((arg0: $ResourceLocation) => $StreamCodec<B, $CustomPacketPayload>);
    export class $StructuresDebugPayload$PieceInfo extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        boundingBox(): $BoundingBox;
        isStart(): boolean;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $BoundingBox, arg1: boolean);
        get start(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $StructuresDebugPayload$PieceInfo}.
     */
    export type $StructuresDebugPayload$PieceInfo_ = { isStart?: boolean, boundingBox?: $BoundingBox,  } | [isStart?: boolean, boundingBox?: $BoundingBox, ];
    export class $CustomPacketPayload {
        static codec<B extends $ByteBuf, T extends $CustomPacketPayload>(encoder: $StreamMemberEncoder_<B, T>, decoder: $StreamDecoder_<B, T>): $StreamCodec<B, T>;
        static codec<B extends $FriendlyByteBuf>(arg0: $CustomPacketPayload$FallbackProvider_<B>, arg1: $List_<$CustomPacketPayload$TypeAndCodec_<B, never>>, arg2: $ConnectionProtocol_, arg3: $PacketFlow_): $StreamCodec<B, $CustomPacketPayload>;
        static createType<T extends $CustomPacketPayload>(id: string): $CustomPacketPayload$Type<T>;
    }
    export interface $CustomPacketPayload {
        type(): $CustomPacketPayload$Type<$CustomPacketPayload>;
        toVanillaClientbound(): $ClientboundCustomPayloadPacket;
        toVanillaServerbound(): $ServerboundCustomPayloadPacket;
    }
    /**
     * Values that may be interpreted as {@link $CustomPacketPayload}.
     */
    export type $CustomPacketPayload_ = (() => $CustomPacketPayload$Type_<$CustomPacketPayload>);
}
