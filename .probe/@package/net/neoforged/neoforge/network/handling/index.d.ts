import { $Supplier_ } from "@package/java/util/function";
import { $ICommonPacketListener } from "@package/net/neoforged/neoforge/common/extensions";
import { $ChannelHandlerContext } from "@package/io/netty/channel";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Connection, $ConnectionProtocol } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $ConfigurationTask$Type_ } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $PacketFlow, $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload, $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Runnable_ } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/network/handling" {
    /**
     * Callback for handling custom packets.
     */
    export class $IPayloadHandler<T extends $CustomPacketPayload> {
    }
    export interface $IPayloadHandler<T extends $CustomPacketPayload> {
        handle(arg0: T, arg1: $IPayloadContext): void;
    }
    /**
     * Values that may be interpreted as {@link $IPayloadHandler}.
     */
    export type $IPayloadHandler_<T> = ((arg0: T, arg1: $IPayloadContext) => void);
    /**
     * Common context interface for payload handlers.
     */
    export class $IPayloadContext {
    }
    export interface $IPayloadContext {
        /**
         * Sends the given payload back to the sender.
         */
        handle(payload: $CustomPacketPayload_): void;
        /**
         * Handles a packet using the current context.
         * 
         * Used to trigger vanilla handling when custom payloads may be transformed into a vanilla packet.
         */
        handle(packet: $Packet<never>): void;
        /**
         * @return the protocol of the connection
         */
        protocol(): $ConnectionProtocol;
        /**
         * @return the connection
         */
        connection(): $Connection;
        /**
         * Retrieves the packet listener associated with this context.
         * 
         * For usability, this is typed to `ICommonPacketListener`, but can be downcast to the vanilla packet listeners if necessary.
         */
        listener(): $ICommonPacketListener;
        /**
         * Disconnects the player from the network.
         */
        disconnect(reason: $Component_): void;
        /**
         * @return the flow of the received payload
         */
        flow(): $PacketFlow;
        /**
         * @return the channel handler context
         */
        channelHandlerContext(): $ChannelHandlerContext;
        /**
         * Sends the given payload back to the sender.
         */
        reply(payload: $CustomPacketPayload_): void;
        /**
         * Retrieves the player relevant to this payload. Players are only available in the `ConnectionProtocol#PLAY` phase.
         * 
         * For server-bound payloads, retrieves the sending `ServerPlayer`.
         * 
         * For client-bound payloads, retrieves the receiving `LocalPlayer`.
         */
        player(): $Player;
        /**
         * For handlers running on the network thread, submits the given task to be run on the main thread of the game.
         * 
         * For handlers running on the main thread, immediately executes the task.
         * 
         * On the network thread, the future will be automatically guarded against exceptions using `CompletableFuture#exceptionally`.
         * If you need to catch your own exceptions, use a try/catch block within your task.
         */
        enqueueWork(task: $Runnable_): $CompletableFuture<void>;
        enqueueWork<T>(task: $Supplier_<T>): $CompletableFuture<T>;
        /**
         * Marks a `ConfigurationTask` as completed.
         */
        finishCurrentTask(type: $ConfigurationTask$Type_): void;
    }
}
