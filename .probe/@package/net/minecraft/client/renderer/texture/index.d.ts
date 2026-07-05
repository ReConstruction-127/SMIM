import { $SpriteContentsAnimatedTextureAccessor, $SpriteContentsTickerAccessor, $SpriteContentsAccessor as $SpriteContentsAccessor$1, $TextureAtlasAccessor, $SpriteContentsFrameInfoAccessor } from "@package/net/irisshaders/iris/mixin/texture";
import { $SpriteContentsExtension as $SpriteContentsExtension$1 } from "@package/net/irisshaders/iris/texture";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $IMixinDynamicTexture } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $SpriteContentsExtended } from "@package/org/embeddedt/embeddium/impl/render/texture";
import { $ResourceManager, $ResourceMetadata_, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener, $ResourceMetadata } from "@package/net/minecraft/server/packs/resources";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $List, $Map_, $Map } from "@package/java/util";
import { $SpriteContentsAnimationAccessor, $SpriteContentsAnimationFrameAccessor as $SpriteContentsAnimationFrameAccessor$1 } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/tracking";
import { $SpriteContentsAnimationFrameAccessor, $SpriteContentsAnimationAccessor as $SpriteContentsAnimationAccessor$1, $SpriteContentsAccessor, $SpriteContentsAnimatorImplAccessor } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/upload";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IntStream } from "@package/java/util/stream";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $SpriteContentsInvoker } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PBRSpriteHolder, $SpriteContentsExtension, $PBRAtlasHolder, $TextureAtlasExtension } from "@package/net/irisshaders/iris/pbr/texture";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $SpriteFinderImpl, $SpriteFinderImpl$SpriteFinderAccess } from "@package/appeng/thirdparty/fabric";
import { $Record, $AutoCloseable } from "@package/java/lang";
import { $SpriteTransparencyLevel, $SpriteTransparencyLevelHolder } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
export * as atlas from "@package/net/minecraft/client/renderer/texture/atlas";

declare module "@package/net/minecraft/client/renderer/texture" {
    export class $SpriteTicker {
    }
    export interface $SpriteTicker extends $AutoCloseable {
        close(): void;
        tickAndUpload(x: number, y: number): void;
    }
    export class $AbstractTexture implements $AutoCloseable {
        reset(textureManager: $TextureManager, resourceManager: $ResourceManager, path: $ResourceLocation_, executor: $Executor_): void;
        load(resourceManager: $ResourceManager): void;
        getId(): number;
        close(): void;
        bind(): void;
        setFilter(blur: boolean, mipmap: boolean): void;
        setBlurMipmap(blur: boolean, mipmap: boolean): void;
        restoreLastBlurMipmap(): void;
        releaseId(): void;
        static NOT_ASSIGNED: number;
        constructor();
        get id(): number;
    }
    export class $SpriteContents$Ticker implements $SpriteTicker, $SpriteContentsTickerAccessor, $SpriteContentsAnimatorImplAccessor {
        close(): void;
        tickAndUpload(x: number, y: number): void;
        handler$zii000$embeddium$assignParent(arg0: $SpriteContents, arg1: $SpriteContents$AnimatedTexture, arg2: $SpriteContents$InterpolationData, arg3: $CallbackInfo): void;
        getFrameIndex(): number;
        getFrame(): number;
        setFrame(arg0: number): void;
        getFrameTicks(): number;
        getSubFrame(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        setSubFrame(arg0: number): void;
        get frameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $OverlayTexture implements $AutoCloseable {
        static v(hurt: boolean): number;
        close(): void;
        static u(u: number): number;
        setupOverlayColor(): void;
        static pack(u: number, hurt: boolean): number;
        static pack(u: number, v: number): number;
        teardownOverlayColor(): void;
        static NO_WHITE_U: number;
        static WHITE_OVERLAY_V: number;
        static NO_OVERLAY: number;
        static RED_OVERLAY_V: number;
        constructor();
    }
    export class $SpriteContents implements $Stitcher$Entry, $AutoCloseable, $SpriteContentsExtension$1, $SpriteContentsAccessor$1, $SpriteContentsExtension, $SpriteContentsAccessor, $SpriteTransparencyLevelHolder, $SpriteContentsExtended, $SpriteContentsInvoker {
        name(): $ResourceLocation;
        close(): void;
        width(): number;
        metadata(): $ResourceMetadata;
        getPBRHolder(): $PBRSpriteHolder;
        uploadFirstFrame(x: number, y: number): void;
        height(): number;
        createTicker(): $SpriteTicker;
        getCreatedTicker(): $SpriteContents$Ticker;
        sodium$setActive(arg0: boolean): void;
        sodium$isActive(): boolean;
        embeddium$getTransparencyLevel(): $SpriteTransparencyLevel;
        getOriginalImage(): $NativeImage;
        getOrCreatePBRHolder(): $PBRSpriteHolder;
        isTransparent(frame: number, x: number, y: number): boolean;
        getFrameCount(): number;
        getUniqueFrames(): $IntStream;
        increaseMipLevel(mipLevel: number): void;
        sodium$hasAnimation(): boolean;
        getAnimatedTexture(): $SpriteContents$AnimatedTexture;
        invokeUpload(x: number, y: number, frameX: number, frameY: number, atlasData: $NativeImage[]): void;
        getImages(): $NativeImage[];
        animatedTexture: $SpriteContents$AnimatedTexture;
        byMipLevel: $NativeImage[];
        originalImage: $NativeImage;
        constructor(name: $ResourceLocation_, frameSize: $FrameSize_, originalImage: $NativeImage, metadata: $ResourceMetadata_);
        get PBRHolder(): $PBRSpriteHolder;
        get createdTicker(): $SpriteContents$Ticker;
        get orCreatePBRHolder(): $PBRSpriteHolder;
        get frameCount(): number;
        get uniqueFrames(): $IntStream;
        get images(): $NativeImage[];
    }
    export class $Dumpable {
    }
    export interface $Dumpable {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
    }
    /**
     * Values that may be interpreted as {@link $Dumpable}.
     */
    export type $Dumpable_ = ((arg0: $ResourceLocation, arg1: $Path) => void);
    export class $DynamicTexture extends $AbstractTexture implements $Dumpable, $IMixinDynamicTexture {
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        upload(): void;
        setPixels(pixels: $NativeImage): void;
        getPixels(): $NativeImage;
        getPixelsKonkrete(): $NativeImage;
        setPixelsKonkrete(pixels: $NativeImage): void;
        static NOT_ASSIGNED: number;
        constructor(pixels: $NativeImage);
        constructor(width: number, height: number, useCalloc: boolean);
    }
    export class $SpriteContents$AnimatedTexture implements $SpriteContentsAnimatedTextureAccessor, $SpriteContentsAnimationAccessor, $SpriteContentsAnimationAccessor$1 {
        uploadFirstFrame(x: number, y: number): void;
        createTicker(): $SpriteTicker;
        uploadFrame(x: number, y: number, frameIndex: number): void;
        getUniqueFrames(): $IntStream;
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        invokeUploadFrame(x: number, y: number, frameIndex: number): void;
        frames: $List<$SpriteContents$FrameInfo>;
        frameRowSize: number;
        interpolateFrames: boolean;
        get uniqueFrames(): $IntStream;
    }
    export class $SpriteContents$InterpolationData implements $AutoCloseable {
        close(): void;
        handler$zkg000$embeddium$assignParent(arg0: $SpriteContents, arg1: $CallbackInfo): void;
    }
    export class $SpriteLoader$Preparations extends $Record {
        width(): number;
        regions(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        height(): number;
        mipLevel(): number;
        missing(): $TextureAtlasSprite;
        waitForUpload(): $CompletableFuture<$SpriteLoader$Preparations>;
        readyForUpload(): $CompletableFuture<void>;
        constructor(width: number, height: number, mipLevel: number, missing: $TextureAtlasSprite, regions: $Map_<$ResourceLocation_, $TextureAtlasSprite>, readyForUpload: $CompletableFuture<void>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteLoader$Preparations}.
     */
    export type $SpriteLoader$Preparations_ = { width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>,  } | [width?: number, missing?: $TextureAtlasSprite, height?: number, regions?: $Map_<$ResourceLocation_, $TextureAtlasSprite>, mipLevel?: number, readyForUpload?: $CompletableFuture<void>, ];
    export class $Tickable {
    }
    export interface $Tickable {
        tick(): void;
    }
    /**
     * Values that may be interpreted as {@link $Tickable}.
     */
    export type $Tickable_ = (() => void);
    export class $TextureAtlas extends $AbstractTexture implements $Dumpable, $Tickable, $TextureAtlasAccessor, $TextureAtlasExtension, $SpriteFinderImpl$SpriteFinderAccess {
        location(): $ResourceLocation;
        tick(): void;
        getPBRHolder(): $PBRAtlasHolder;
        dumpContents(resourceLocation: $ResourceLocation_, path: $Path_): void;
        getTextures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        clearTextureData(): void;
        updateFilter(preparations: $SpriteLoader$Preparations_): void;
        getWidth(): number;
        maxSupportedTextureSize(): number;
        fabric_spriteFinder(): $SpriteFinderImpl;
        wrapOperation$cna000$embeddium_extra$sodiumExtra$tickAnimatedSprites(instance: $TextureAtlasSprite, original: $Operation_<any>): $TextureAtlasSprite$Ticker;
        getHeight(): number;
        getSprite(name: $ResourceLocation_): $TextureAtlasSprite;
        upload(preparations: $SpriteLoader$Preparations_): void;
        getOrCreatePBRHolder(): $PBRAtlasHolder;
        cycleAnimationFrames(): void;
        getTexturesByName(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        callGetWidth(): number;
        callGetHeight(): number;
        getMipLevel(): number;
        static NOT_ASSIGNED: number;
        /**
         * @deprecated
         */
        static LOCATION_BLOCKS: $ResourceLocation;
        /**
         * @deprecated
         */
        static LOCATION_PARTICLES: $ResourceLocation;
        texturesByName: $Map<$ResourceLocation, $TextureAtlasSprite>;
        sprites: $List<$SpriteContents>;
        constructor(location: $ResourceLocation_);
        get PBRHolder(): $PBRAtlasHolder;
        get textures(): $Map<$ResourceLocation, $TextureAtlasSprite>;
        get width(): number;
        get height(): number;
        get orCreatePBRHolder(): $PBRAtlasHolder;
        get mipLevel(): number;
    }
    export class $TextureManager implements $PreparableReloadListener, $Tickable, $AutoCloseable {
        register(name: string, texture: $DynamicTexture): $ResourceLocation;
        register(path: $ResourceLocation_, texture: $AbstractTexture): void;
        close(): void;
        release(path: $ResourceLocation_): void;
        tick(): void;
        reload(stage: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getTexture(path: $ResourceLocation_, defaultTexture: $AbstractTexture): $AbstractTexture;
        getTexture(path: $ResourceLocation_): $AbstractTexture;
        dumpAllSheets(path: $Path_): void;
        preload(path: $ResourceLocation_, backgroundExecutor: $Executor_): $CompletableFuture<void>;
        bindForSetup(path: $ResourceLocation_): void;
        getName(): string;
        byPath: $Map<$ResourceLocation, $AbstractTexture>;
        static INTENTIONAL_MISSING_TEXTURE: $ResourceLocation;
        constructor(resourceManager: $ResourceManager);
        get name(): string;
    }
    export class $TextureAtlasSprite {
        getY(): number;
        wrap(consumer: $VertexConsumer): $VertexConsumer;
        contents(): $SpriteContents;
        getUOffset(u: number): number;
        getVOffset(u: number): number;
        uploadFirstFrame(): void;
        getPixelRGBA(arg0: number, arg1: number, arg2: number): number;
        createTicker(): $TextureAtlasSprite$Ticker;
        atlasLocation(): $ResourceLocation;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU0(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getU1(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        getV1(): number;
        getV(u: number): number;
        getU(u: number): number;
        getX(): number;
        /**
         * @return the minimum U coordinate to use when rendering this sprite
         */
        uvShrinkRatio(): number;
        get y(): number;
        get v0(): number;
        get u0(): number;
        get u1(): number;
        get v1(): number;
        get x(): number;
    }
    export class $SpriteContents$FrameInfo implements $SpriteContentsFrameInfoAccessor, $SpriteContentsAnimationFrameAccessor$1, $SpriteContentsAnimationFrameAccessor {
        getIndex(): number;
        getTime(): number;
        index: number;
        time: number;
    }
    export class $TextureAtlasSprite$Ticker {
    }
    export interface $TextureAtlasSprite$Ticker extends $AutoCloseable {
        close(): void;
        tickAndUpload(): void;
    }
    export class $Stitcher$Entry {
    }
    export interface $Stitcher$Entry {
        name(): $ResourceLocation;
        width(): number;
        height(): number;
    }
}
