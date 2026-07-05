import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $UUID_, $Date, $UUID } from "@package/java/util";
import { $QuestObjectBase } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/util" {
    export class $ProgressChange {
        getDate(): $Date;
        getPlayerId(): $UUID;
        static createServerSide(origin: number, reset: boolean, playerId: $UUID_, notifications: boolean): $ProgressChange;
        maybeForceProgress(teamId: $UUID_): void;
        withNotifications(): $ProgressChange;
        setReset(reset: boolean): $ProgressChange;
        shouldReset(): boolean;
        shouldNotify(): boolean;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ProgressChange>;
        constructor(origin: $QuestObjectBase, playerId: $UUID_);
        get date(): $Date;
        get playerId(): $UUID;
        set reset(value: boolean);
    }
}
