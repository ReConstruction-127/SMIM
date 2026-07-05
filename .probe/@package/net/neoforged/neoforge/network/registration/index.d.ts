import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $CustomPacketPayload, $CustomPacketPayload$Type_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Enum } from "@package/java/lang";
import { $IPayloadHandler_ } from "@package/net/neoforged/neoforge/network/handling";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/neoforged/neoforge/network/registration" {
    /**
     * Builder-style helper for registering `CustomPacketPayload`s, used for modded networking.
     */
    export class $PayloadRegistrar {
        /**
         * Creates a copy of this registrar with optional mode enabled. Payloads registered with the returned copy will be marked as optional.
         * 
         * If any non-optional payloads are missing during a connection attempt, the connection will fail.
         */
        optional(): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Creates a copy of this registrar with a different version. Payloads registered with the returned copy will use the passed version, instead of the version from the constructor.
         * 
         * On Neo-Neo connections, the connection will only succeed if all registered payloads have the same version.
         * 
         * On other connections, the payload version is ignored, since only Neo knows how to communicate Neo payload versions.
         */
        versioned(version: string): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        configurationBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Creates a copy of this registrar with a different default handling thread.
         * 
         * When the handling thread is set to `HandlerThread#MAIN`, all registered handlers will be wrapped in `MainThreadPayloadHandler`.
         * 
         * The initial handling thread is `HandlerThread#MAIN`.
         */
        executesOn(thread: $HandlerThread_): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        playToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$RegistryFriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonToClient<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonToServer<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        /**
         * Registers a client-bound payload for the play phase.
         */
        commonBidirectional<T extends $CustomPacketPayload>(type: $CustomPacketPayload$Type_<T>, reader: $StreamCodec<$FriendlyByteBuf, T>, handler: $IPayloadHandler_<T>): $PayloadRegistrar;
        constructor(version: string);
    }
    export class $HandlerThread extends $Enum<$HandlerThread> {
        static values(): $HandlerThread[];
        static valueOf(arg0: string): $HandlerThread;
        static NETWORK: $HandlerThread;
        static MAIN: $HandlerThread;
    }
    /**
     * Values that may be interpreted as {@link $HandlerThread}.
     */
    export type $HandlerThread_ = "main" | "network";
}
