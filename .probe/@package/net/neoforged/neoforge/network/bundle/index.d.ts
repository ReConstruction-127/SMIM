import { $Consumer_ } from "@package/java/util/function";
import { $Packet } from "@package/net/minecraft/network/protocol";
import { $CustomPacketPayload_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $ClientCommonPacketListener } from "@package/net/minecraft/network/protocol/common";

declare module "@package/net/neoforged/neoforge/network/bundle" {
    export class $PacketAndPayloadAcceptor<L extends $ClientCommonPacketListener> {
        accept(packet: $Packet<L>): $PacketAndPayloadAcceptor<L>;
        accept(payload: $CustomPacketPayload_): $PacketAndPayloadAcceptor<L>;
        constructor(consumer: $Consumer_<$Packet<L>>);
    }
}
