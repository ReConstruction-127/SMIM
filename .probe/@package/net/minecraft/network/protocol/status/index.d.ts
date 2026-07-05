import { $Codec } from "@package/com/mojang/serialization";
import { $ClientboundPacketListener, $FriendlyByteBuf, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $ClientPongPacketListener } from "@package/net/minecraft/network/protocol/ping";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/network/protocol/status" {
    /**
     * PacketListener for the client side of the STATUS protocol.
     */
    export class $ClientStatusPacketListener {
    }
    export interface $ClientStatusPacketListener extends $ClientPongPacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleStatusResponse(packet: $ClientboundStatusResponsePacket_): void;
    }
    export class $ServerStatus$Version extends $Record {
        name(): string;
        static current(): $ServerStatus$Version;
        protocol(): number;
        static CODEC: $Codec<$ServerStatus$Version>;
        constructor(name: string, protocol: number);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Version}.
     */
    export type $ServerStatus$Version_ = { protocol?: number, name?: string,  } | [protocol?: number, name?: string, ];
    export class $ClientboundStatusResponsePacket extends $Record implements $Packet<$ClientStatusPacketListener> {
        type(): $PacketType<$ClientboundStatusResponsePacket>;
        status(): $ServerStatus;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientStatusPacketListener): void;
        cachedStatus(): string;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundStatusResponsePacket>;
        constructor(status: $ServerStatus_, cachedStatus: string);
        constructor(status: $ServerStatus_);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundStatusResponsePacket}.
     */
    export type $ClientboundStatusResponsePacket_ = { cachedStatus?: string, status?: $ServerStatus_,  } | [cachedStatus?: string, status?: $ServerStatus_, ];
    export class $ServerStatus$Favicon extends $Record {
        iconBytes(): number[];
        static CODEC: $Codec<$ServerStatus$Favicon>;
        constructor(iconBytes: number[]);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Favicon}.
     */
    export type $ServerStatus$Favicon_ = { iconBytes?: number[],  } | [iconBytes?: number[], ];
    export class $ServerStatus$Players extends $Record {
        max(): number;
        sample(): $List<$GameProfile>;
        online(): number;
        static CODEC: $Codec<$ServerStatus$Players>;
        constructor(max: number, online: number, sample: $List_<$GameProfile>);
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus$Players}.
     */
    export type $ServerStatus$Players_ = { online?: number, max?: number, sample?: $List_<$GameProfile>,  } | [online?: number, max?: number, sample?: $List_<$GameProfile>, ];
    export class $ServerStatus extends $Record {
        version(): ($ServerStatus$Version) | undefined;
        description(): $Component;
        isModded(): boolean;
        favicon(): ($ServerStatus$Favicon) | undefined;
        players(): ($ServerStatus$Players) | undefined;
        enforcesSecureChat(): boolean;
        static CODEC: $Codec<$ServerStatus>;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: ($ServerStatus$Players_) | undefined, arg2: ($ServerStatus$Version_) | undefined, arg3: ($ServerStatus$Favicon_) | undefined, arg4: boolean);
        constructor(description: $Component_, players: ($ServerStatus$Players_) | undefined, version: ($ServerStatus$Version_) | undefined, favicon: ($ServerStatus$Favicon_) | undefined, enforcesSecureChat: boolean, isModded: boolean);
        get modded(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ServerStatus}.
     */
    export type $ServerStatus_ = { favicon?: ($ServerStatus$Favicon_) | undefined, description?: $Component_, enforcesSecureChat?: boolean, players?: ($ServerStatus$Players_) | undefined, isModded?: boolean, version?: ($ServerStatus$Version_) | undefined,  } | [favicon?: ($ServerStatus$Favicon_) | undefined, description?: $Component_, enforcesSecureChat?: boolean, players?: ($ServerStatus$Players_) | undefined, isModded?: boolean, version?: ($ServerStatus$Version_) | undefined, ];
}
