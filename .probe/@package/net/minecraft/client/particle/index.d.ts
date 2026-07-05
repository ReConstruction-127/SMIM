import { $LightTexture } from "@package/net/minecraft/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ParticleType_, $ParticleGroup, $ParticleOptions_, $ParticleOptions } from "@package/net/minecraft/core/particles";
import { $Camera } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $ParticleAccessor } from "@package/com/almostreliable/ponderjs/mixin";
import { $RandomSource } from "@package/net/minecraft/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $ParticleEngineAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $BufferBuilder, $VertexConsumer, $Tesselator } from "@package/com/mojang/blaze3d/vertex";
import { $TextureAtlasSprite, $TextureManager, $TextureAtlas } from "@package/net/minecraft/client/renderer/texture";
import { $AABB_, $Vec3, $AABB, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";

declare module "@package/net/minecraft/client/particle" {
    export class $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
    }
    export interface $ParticleEngine$SpriteParticleRegistration<T extends $ParticleOptions> {
        create(sprites: $SpriteSet): $ParticleProvider<T>;
    }
    /**
     * Values that may be interpreted as {@link $ParticleEngine$SpriteParticleRegistration}.
     */
    export type $ParticleEngine$SpriteParticleRegistration_<T> = ((arg0: $SpriteSet) => $ParticleProvider<T>);
    export class $ParticleProvider<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $Particle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider}.
     */
    export type $ParticleProvider_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $Particle);
    export class $SingleQuadParticle$FacingCameraMode {
        static LOOKAT_Y: $SingleQuadParticle$FacingCameraMode;
        static LOOKAT_XYZ: $SingleQuadParticle$FacingCameraMode;
    }
    export interface $SingleQuadParticle$FacingCameraMode {
        setRotation(quaternion: $Quaternionf, camera: $Camera, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $SingleQuadParticle$FacingCameraMode}.
     */
    export type $SingleQuadParticle$FacingCameraMode_ = ((arg0: $Quaternionf, arg1: $Camera, arg2: number) => void);
    export class $SimpleAnimatedParticle extends $TextureSheetParticle {
        setColor(color: number): void;
        getLightColor(partialTick: number): number;
        setFadeColor(color: number): void;
        gravity: number;
        set color(value: number);
        set fadeColor(value: number);
    }
    export class $Particle implements $ParticleAccessor {
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        remove(): void;
        scale(scale: number): $Particle;
        /**
         * Returns `true` if this effect has not yet expired. "I feel happy! I feel happy!"
         */
        isAlive(): boolean;
        move(x: number, arg1: number, y: number): void;
        /**
         * Called to indicate that this particle effect has expired and should be discontinued.
         */
        tick(): void;
        setColor(particleRed: number, particleGreen: number, particleBlue: number): void;
        render(buffer: $VertexConsumer, camera: $Camera, partialTicks: number): void;
        setPos(x: number, arg1: number, y: number): void;
        getRenderType(): $ParticleRenderType;
        setBoundingBox(bb: $AABB_): void;
        getBoundingBox(): $AABB;
        setPower(scale: number): $Particle;
        getRenderBoundingBox(arg0: number): $AABB;
        getPos(): $Vec3;
        setParticleSpeed(x: number, arg1: number, y: number): void;
        getLifetime(): number;
        getParticleGroup(): ($ParticleGroup) | undefined;
        setLifetime(particleLifeTime: number): void;
        ponderjs$setStoppedByCollision(arg0: boolean): void;
        ponderjs$setHasPhysics(arg0: boolean): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setGravity(alpha: number): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setFriction(alpha: number): void;
        ponderjs$setLifetime(particleLifeTime: number): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setAlpha(alpha: number): void;
        /**
         * Sets the particle alpha (float)
         */
        ponderjs$setRoll(alpha: number): void;
        gravity: number;
        constructor(level: $ClientLevel, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number);
        get alive(): boolean;
        get renderType(): $ParticleRenderType;
        set power(value: number);
        get particleGroup(): ($ParticleGroup) | undefined;
    }
    export class $SingleQuadParticle extends $Particle {
        getQuadSize(scaleFactor: number): number;
        getFacingCameraMode(): $SingleQuadParticle$FacingCameraMode;
        gravity: number;
        get facingCameraMode(): $SingleQuadParticle$FacingCameraMode;
    }
    export class $ParticleRenderType {
        static NO_RENDER: $ParticleRenderType;
        static TERRAIN_SHEET: $ParticleRenderType;
        static PARTICLE_SHEET_LIT: $ParticleRenderType;
        static PARTICLE_SHEET_OPAQUE: $ParticleRenderType;
        static PARTICLE_SHEET_TRANSLUCENT: $ParticleRenderType;
        static CUSTOM: $ParticleRenderType;
    }
    export interface $ParticleRenderType {
        begin(tesselator: $Tesselator, textureManager: $TextureManager): $BufferBuilder;
        isTranslucent(): boolean;
        get translucent(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ParticleRenderType}.
     */
    export type $ParticleRenderType_ = ((arg0: $Tesselator, arg1: $TextureManager) => $BufferBuilder);
    export class $SpriteSet {
    }
    export interface $SpriteSet {
        get(age: number, lifetime: number): $TextureAtlasSprite;
        get(random: $RandomSource): $TextureAtlasSprite;
    }
    export class $ParticleEngine implements $PreparableReloadListener, $ParticleEngineAccessor {
        add(effect: $Particle): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleMetaFactory: $ParticleEngine$SpriteParticleRegistration_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, particleFactory: $ParticleProvider_<T>): void;
        /**
         * @deprecated
         */
        register<T extends $ParticleOptions>(particleType: $ParticleType_<T>, sprite: $ParticleProvider$Sprite_<T>): void;
        destroy(pos: $BlockPos_, state: $BlockState_): void;
        close(): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        setLevel(level: $ClientLevel | null): void;
        /**
         * @deprecated
         */
        render(lightTexture: $LightTexture, camera: $Camera, partialTick: number): void;
        render(arg0: $LightTexture, arg1: $Camera, arg2: number, arg3: $Frustum | null, arg4: $Predicate_<$ParticleRenderType>): void;
        addBlockHitEffects(arg0: $BlockPos_, arg1: $BlockHitResult): void;
        createTrackingEmitter(entity: $Entity, data: $ParticleOptions_, lifetime: number): void;
        createTrackingEmitter(entity: $Entity, particleData: $ParticleOptions_): void;
        /**
         * Adds block hit particles for the specified block
         */
        crack(pos: $BlockPos_, side: $Direction_): void;
        createParticle(particleData: $ParticleOptions_, x: number, arg2: number, y: number, arg4: number, z: number, arg6: number): $Particle;
        iterateParticles(arg0: $Consumer_<$Particle>): void;
        handler$cni000$embeddium_extra$addBlockBreakParticles(pos: $BlockPos_, state: $BlockState_, ci: $CallbackInfo): void;
        handler$cni000$embeddium_extra$addBlockBreakingParticles(pos: $BlockPos_, direction: $Direction_, ci: $CallbackInfo): void;
        handler$cni000$embeddium_extra$addParticle(parameters: $ParticleOptions_, x: number, y: number, z: number, velocityX: number, velocityY: number, velocityZ: number, cir: $CallbackInfoReturnable<any>): void;
        countParticles(): string;
        getName(): string;
        ponder$getProviders(): $Map<$ResourceLocation, $ParticleProvider<never>>;
        textureAtlas: $TextureAtlas;
        constructor(level: $ClientLevel, textureManager: $TextureManager);
        set level(value: $ClientLevel | null);
        get name(): string;
    }
    export class $TextureSheetParticle extends $SingleQuadParticle {
        setSpriteFromAge(sprite: $SpriteSet): void;
        pickSprite(sprite: $SpriteSet): void;
        gravity: number;
        set spriteFromAge(value: $SpriteSet);
    }
    export class $ParticleProvider$Sprite<T extends $ParticleOptions> {
    }
    export interface $ParticleProvider$Sprite<T extends $ParticleOptions> {
        createParticle(type: T, level: $ClientLevel, x: number, arg3: number, y: number, arg5: number, z: number, arg7: number): $TextureSheetParticle;
    }
    /**
     * Values that may be interpreted as {@link $ParticleProvider$Sprite}.
     */
    export type $ParticleProvider$Sprite_<T> = ((arg0: T, arg1: $ClientLevel, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number) => $TextureSheetParticle);
}
