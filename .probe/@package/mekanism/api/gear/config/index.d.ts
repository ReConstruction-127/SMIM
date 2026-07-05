import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mekanism/api/gear/config" {
    export class $ModuleBooleanConfig extends $ModuleConfig<boolean> {
        get(): boolean;
        "with"(arg0: boolean): $ModuleBooleanConfig;
        static create(arg0: $ResourceLocation_, arg1: boolean): $ModuleBooleanConfig;
        static CODEC: $Codec<$ModuleBooleanConfig>;
        static ENABLED_KEY: $ResourceLocation;
        static RENDER_HUD_KEY: $ResourceLocation;
        static HANDLES_MODE_CHANGE_KEY: $ResourceLocation;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ModuleBooleanConfig>;
    }
    export class $ModuleConfig<DATA> {
        name(): $ResourceLocation;
        get(): DATA;
        "with"(arg0: DATA): $ModuleConfig<DATA>;
        namedStreamCodec(arg0: $ResourceLocation_): $StreamCodec<$RegistryFriendlyByteBuf, $ModuleConfig<DATA>>;
        isConfigDisabled(): boolean;
        static ENABLED_KEY: $ResourceLocation;
        static RENDER_HUD_KEY: $ResourceLocation;
        static HANDLES_MODE_CHANGE_KEY: $ResourceLocation;
        get configDisabled(): boolean;
    }
}
