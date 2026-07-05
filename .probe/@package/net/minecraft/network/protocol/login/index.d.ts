import { $ClientboundPacketListener, $ConnectionProtocol, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $CustomQueryPayload } from "@package/net/minecraft/network/protocol/login/custom";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $PublicKey } from "@package/java/security";
import { $PacketType, $Packet } from "@package/net/minecraft/network/protocol";
import { $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ClientCookiePacketListener } from "@package/net/minecraft/network/protocol/cookie";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as custom from "@package/net/minecraft/network/protocol/login/custom";

declare module "@package/net/minecraft/network/protocol/login" {
    export class $ClientboundGameProfilePacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        type(): $PacketType<$ClientboundGameProfilePacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        gameProfile(): $GameProfile;
        /**
         * @deprecated
         * Whether decoding errors will be ignored for this packet.
         */
        strictErrorHandling(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ClientboundGameProfilePacket>;
        constructor(arg0: $GameProfile, arg1: boolean);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundGameProfilePacket}.
     */
    export type $ClientboundGameProfilePacket_ = { strictErrorHandling?: boolean, gameProfile?: $GameProfile,  } | [strictErrorHandling?: boolean, gameProfile?: $GameProfile, ];
    export class $ClientboundHelloPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundHelloPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getPublicKey(): $PublicKey;
        getServerId(): string;
        getChallenge(): number[];
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        shouldAuthenticate(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundHelloPacket>;
        constructor(serverId: string, publicKey: number[], challenge: number[], shouldAuthenticate: boolean);
        get publicKey(): $PublicKey;
        get serverId(): string;
        get challenge(): number[];
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundCustomQueryPacket extends $Record implements $Packet<$ClientLoginPacketListener> {
        payload(): $CustomQueryPayload;
        type(): $PacketType<$ClientboundCustomQueryPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        transactionId(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundCustomQueryPacket>;
        constructor(arg0: number, arg1: $CustomQueryPayload);
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ClientboundCustomQueryPacket}.
     */
    export type $ClientboundCustomQueryPacket_ = { transactionId?: number, payload?: $CustomQueryPayload,  } | [transactionId?: number, payload?: $CustomQueryPayload, ];
    export class $ClientboundLoginCompressionPacket implements $Packet<$ClientLoginPacketListener> {
        type(): $PacketType<$ClientboundLoginCompressionPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        getCompressionThreshold(): number;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginCompressionPacket>;
        constructor(compressionThreshold: number);
        get compressionThreshold(): number;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    export class $ClientboundLoginDisconnectPacket implements $Packet<$ClientLoginPacketListener> {
        getReason(): $Component;
        type(): $PacketType<$ClientboundLoginDisconnectPacket>;
        /**
         * Passes this Packet on to the NetHandler for processing.
         */
        handle(handler: $ClientLoginPacketListener): void;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isTerminal(): boolean;
        /**
         * Whether decoding errors will be ignored for this packet.
         */
        isSkippable(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ClientboundLoginDisconnectPacket>;
        constructor(reason: $Component_);
        get reason(): $Component;
        get terminal(): boolean;
        get skippable(): boolean;
    }
    /**
     * PacketListener for the client side of the LOGIN protocol.
     */
    export class $ClientLoginPacketListener {
    }
    export interface $ClientLoginPacketListener extends $ClientCookiePacketListener, $ClientboundPacketListener {
        protocol(): $ConnectionProtocol;
        handleGameProfile(packet: $ClientboundGameProfilePacket_): void;
        handleCustomQuery(packet: $ClientboundCustomQueryPacket_): void;
        handleHello(packet: $ClientboundHelloPacket): void;
        handleCompression(packet: $ClientboundLoginCompressionPacket): void;
        handleDisconnect(packet: $ClientboundLoginDisconnectPacket): void;
    }
}
