import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/network/protocol/login/custom" {
    export class $CustomQueryPayload {
    }
    export interface $CustomQueryPayload {
        id(): $ResourceLocation;
        write(buffer: $FriendlyByteBuf): void;
    }
}
