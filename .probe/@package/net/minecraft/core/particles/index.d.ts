import { $MapCodec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Vector3f } from "@package/org/joml";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/core/particles" {
    export class $ParticleGroup {
        getLimit(): number;
        static SPORE_BLOSSOM: $ParticleGroup;
        constructor(limit: number);
        get limit(): number;
    }
    export class $ParticleOptions {
    }
    export interface $ParticleOptions {
        getType(): $ParticleType<never>;
        get type(): $ParticleType<never>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleOptions}.
     */
    export type $ParticleOptions_ = string | (() => $ParticleType_<never>);
    export interface $ParticleType<T> extends RegistryMarked<RegistryTypes.ParticleTypeTag, RegistryTypes.ParticleType> {}
    export class $ScalableParticleOptionsBase implements $ParticleOptions {
        getScale(): number;
        static MIN_SCALE: number;
        static MAX_SCALE: number;
        constructor(scale: number);
        get scale(): number;
    }
    export class $SimpleParticleType extends $ParticleType<$SimpleParticleType> implements $ParticleOptions {
        getType(): $ParticleType<never>;
        constructor(overrideLimiter: boolean);
        get type(): $ParticleType<never>;
    }
    export class $ParticleType<T extends $ParticleOptions> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        getOverrideLimiter(): boolean;
        get overrideLimiter(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleType}.
     */
    export type $ParticleType_<T> = RegistryTypes.ParticleType;
    export class $DustParticleOptions extends $ScalableParticleOptionsBase {
        getColor(): $Vector3f;
        static CODEC: $MapCodec<$DustParticleOptions>;
        static MIN_SCALE: number;
        static REDSTONE: $DustParticleOptions;
        static REDSTONE_PARTICLE_COLOR: $Vector3f;
        static MAX_SCALE: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $DustParticleOptions>;
        constructor(color: $Vector3f, scale: number);
        get color(): $Vector3f;
    }
}
