import { $Codec } from "@package/com/mojang/serialization";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $PreparableReloadListener$PreparationBarrier_, $PreparableReloadListener } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $Set_, $List_ } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $GlyphProvider, $GlyphProvider$Conditional, $GlyphInfo, $GlyphProvider_, $GlyphProvider$Conditional_ } from "@package/com/mojang/blaze3d/font";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record, $AutoCloseable } from "@package/java/lang";
import { $Font, $Font$DisplayMode_ } from "@package/net/minecraft/client/gui";
export * as glyphs from "@package/net/minecraft/client/gui/font/glyphs";

declare module "@package/net/minecraft/client/gui/font" {
    export class $FontOption extends $Enum<$FontOption> implements $StringRepresentable {
        static values(): $FontOption[];
        static valueOf(arg0: string): $FontOption;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$FontOption>;
        static UNIFORM: $FontOption;
        static JAPANESE_VARIANTS: $FontOption;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FontOption}.
     */
    export type $FontOption_ = "uniform" | "jp";
    export class $FontOption$Filter {
        apply(options: $Set_<$FontOption_>): boolean;
        merge(filter: $FontOption$Filter): $FontOption$Filter;
        static CODEC: $Codec<$FontOption$Filter>;
        static ALWAYS_PASS: $FontOption$Filter;
        constructor(values: $Map_<$FontOption_, boolean>);
    }
    export class $GlyphRenderTypes extends $Record {
        normal(): $RenderType;
        select(displayMode: $Font$DisplayMode_): $RenderType;
        polygonOffset(): $RenderType;
        seeThrough(): $RenderType;
        static createForIntensityTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        static createForColorTexture(id: $ResourceLocation_): $GlyphRenderTypes;
        constructor(arg0: $RenderType, arg1: $RenderType, arg2: $RenderType);
    }
    /**
     * Values that may be interpreted as {@link $GlyphRenderTypes}.
     */
    export type $GlyphRenderTypes_ = { polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType,  } | [polygonOffset?: $RenderType, seeThrough?: $RenderType, normal?: $RenderType, ];
    export class $FontManager implements $PreparableReloadListener, $AutoCloseable {
        apply(preperation: $FontManager$Preparation_, profiler: $ProfilerFiller): void;
        close(): void;
        prepare(resourceManager: $ResourceManager, executor: $Executor_): $CompletableFuture<$FontManager$Preparation>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        updateOptions(options: $Options): void;
        createFontFilterFishy(): $Font;
        createFont(): $Font;
        getName(): string;
        static MISSING_FONT: $ResourceLocation;
        constructor(textureManager: $TextureManager);
        get name(): string;
    }
    export class $FontManager$Preparation extends $Record {
        allProviders(): $List<$GlyphProvider>;
        fontSets(): $Map<$ResourceLocation, $List<$GlyphProvider$Conditional>>;
    }
    /**
     * Values that may be interpreted as {@link $FontManager$Preparation}.
     */
    export type $FontManager$Preparation_ = { fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>,  } | [fontSets?: $Map_<$ResourceLocation_, $List_<$GlyphProvider$Conditional_>>, allProviders?: $List_<$GlyphProvider_>, ];
    export class $FontSet implements $AutoCloseable {
        name(): $ResourceLocation;
        close(): void;
        reload(allProviders: $List_<$GlyphProvider$Conditional_>, options: $Set_<$FontOption_>): void;
        reload(options: $Set_<$FontOption_>): void;
        getGlyph(character: number): $BakedGlyph;
        getGlyphInfo(character: number, filterFishyGlyphs: boolean): $GlyphInfo;
        whiteGlyph(): $BakedGlyph;
        getRandomGlyph(glyph: $GlyphInfo): $BakedGlyph;
        constructor(textureManager: $TextureManager, name: $ResourceLocation_);
    }
}
