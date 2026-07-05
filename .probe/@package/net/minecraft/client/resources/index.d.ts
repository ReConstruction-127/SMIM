import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $SplashRenderer } from "@package/net/minecraft/client/gui/components";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $User } from "@package/net/minecraft/client";
import { $ResourceManager, $SimplePreparableReloadListener, $PreparableReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Set_ } from "@package/java/util";
import { $PaintingVariant_ } from "@package/net/minecraft/world/entity/decoration";
import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Supplier } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Path_ } from "@package/java/nio/file";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $MapDecoration_ } from "@package/net/minecraft/world/level/saveddata/maps";
import { $TextureAtlasSprite, $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $MinecraftSessionService } from "@package/com/mojang/authlib/minecraft";
export * as model from "@package/net/minecraft/client/resources/model";
export * as sounds from "@package/net/minecraft/client/resources/sounds";
export * as metadata from "@package/net/minecraft/client/resources/metadata";
export * as language from "@package/net/minecraft/client/resources/language";
export * as server from "@package/net/minecraft/client/resources/server";

declare module "@package/net/minecraft/client/resources" {
    export class $MobEffectTextureManager extends $TextureAtlasHolder {
        get(effect: $Holder_<$MobEffect>): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
    }
    export class $PaintingTextureManager extends $TextureAtlasHolder {
        get(paintingVariant: $PaintingVariant_): $TextureAtlasSprite;
        getBackSprite(): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
        get backSprite(): $TextureAtlasSprite;
    }
    export class $PlayerSkin$Model extends $Enum<$PlayerSkin$Model> {
        static values(): $PlayerSkin$Model[];
        static valueOf(name: string): $PlayerSkin$Model;
        id(): string;
        static byName(name: string | null): $PlayerSkin$Model;
        static SLIM: $PlayerSkin$Model;
        static WIDE: $PlayerSkin$Model;
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin$Model}.
     */
    export type $PlayerSkin$Model_ = "slim" | "wide";
    export class $SplashManager extends $SimplePreparableReloadListener<$List<string>> {
        getSplash(): $SplashRenderer;
        static SPLASHES_LOCATION: $ResourceLocation;
        constructor(user: $User);
        get splash(): $SplashRenderer;
    }
    export class $MapDecorationTextureManager extends $TextureAtlasHolder {
        get(mapDecoration: $MapDecoration_): $TextureAtlasSprite;
        constructor(textureManager: $TextureManager);
    }
    export class $TextureAtlasHolder implements $PreparableReloadListener, $AutoCloseable {
        close(): void;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_);
        constructor(textureManager: $TextureManager, textureAtlasLocation: $ResourceLocation_, atlasInfoLocation: $ResourceLocation_, metadataSections: $Set_<$MetadataSectionSerializer<never>>);
        get name(): string;
    }
    export class $PlayerSkin extends $Record {
        model(): $PlayerSkin$Model;
        secure(): boolean;
        texture(): $ResourceLocation;
        textureUrl(): string;
        capeTexture(): $ResourceLocation;
        elytraTexture(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: string | null, arg2: $ResourceLocation_ | null, arg3: $ResourceLocation_ | null, arg4: $PlayerSkin$Model_, arg5: boolean);
    }
    /**
     * Values that may be interpreted as {@link $PlayerSkin}.
     */
    export type $PlayerSkin_ = { model?: $PlayerSkin$Model_, elytraTexture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, texture?: $ResourceLocation_, textureUrl?: string, secure?: boolean,  } | [model?: $PlayerSkin$Model_, elytraTexture?: $ResourceLocation_, capeTexture?: $ResourceLocation_, texture?: $ResourceLocation_, textureUrl?: string, secure?: boolean, ];
    export class $SkinManager {
        getOrLoad(profile: $GameProfile): $CompletableFuture<$PlayerSkin>;
        getInsecureSkin(profile: $GameProfile): $PlayerSkin;
        lookupInsecure(profile: $GameProfile): $Supplier<$PlayerSkin>;
        constructor(textureManager: $TextureManager, root: $Path_, sessionService: $MinecraftSessionService, executor: $Executor_);
    }
}
