import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/sounds" {
    export class $Music {
        getEvent(): $Holder<$SoundEvent>;
        getMaxDelay(): number;
        getMinDelay(): number;
        replaceCurrentMusic(): boolean;
        static CODEC: $Codec<$Music>;
        constructor(event: $Holder_<$SoundEvent>, minDelay: number, maxDelay: number, replaceCurrentMusic: boolean);
        get event(): $Holder<$SoundEvent>;
        get maxDelay(): number;
        get minDelay(): number;
    }
    export interface $SoundEvent extends RegistryMarked<RegistryTypes.SoundEventTag, RegistryTypes.SoundEvent> {}
    export class $SoundSource extends $Enum<$SoundSource> {
        getName(): string;
        static values(): $SoundSource[];
        static valueOf(arg0: string): $SoundSource;
        static RECORDS: $SoundSource;
        static MUSIC: $SoundSource;
        static MASTER: $SoundSource;
        static HOSTILE: $SoundSource;
        static PLAYERS: $SoundSource;
        static VOICE: $SoundSource;
        static WEATHER: $SoundSource;
        static BLOCKS: $SoundSource;
        static AMBIENT: $SoundSource;
        static NEUTRAL: $SoundSource;
    }
    /**
     * Values that may be interpreted as {@link $SoundSource}.
     */
    export type $SoundSource_ = "master" | "music" | "records" | "weather" | "blocks" | "hostile" | "neutral" | "players" | "ambient" | "voice";
    export class $SoundEvent {
        getLocation(): $ResourceLocation;
        getRange(volume: number): number;
        static createFixedRangeEvent(location: $ResourceLocation_, range: number): $SoundEvent;
        static createVariableRangeEvent(location: $ResourceLocation_): $SoundEvent;
        static CODEC: $Codec<$Holder<$SoundEvent>>;
        static DIRECT_CODEC: $Codec<$SoundEvent>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$ByteBuf, $SoundEvent>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$SoundEvent>>;
        get location(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $SoundEvent}.
     */
    export type $SoundEvent_ = RegistryTypes.SoundEvent;
}
