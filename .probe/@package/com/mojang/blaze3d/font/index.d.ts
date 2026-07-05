import { $IntSet } from "@package/it/unimi/dsi/fastutil/ints";
import { $Function_ } from "@package/java/util/function";
import { $BakedGlyph } from "@package/net/minecraft/client/gui/font/glyphs";
import { $FontOption$Filter } from "@package/net/minecraft/client/gui/font";
import { $Record, $AutoCloseable } from "@package/java/lang";

declare module "@package/com/mojang/blaze3d/font" {
    export class $SheetGlyphInfo {
    }
    export interface $SheetGlyphInfo {
        getLeft(): number;
        getRight(): number;
        upload(xOffset: number, yOffset: number): void;
        getBottom(): number;
        isColored(): boolean;
        getTop(): number;
        getBearingTop(): number;
        getPixelHeight(): number;
        getBearingLeft(): number;
        getPixelWidth(): number;
        getOversample(): number;
        get left(): number;
        get right(): number;
        get bottom(): number;
        get colored(): boolean;
        get top(): number;
        get bearingTop(): number;
        get pixelHeight(): number;
        get bearingLeft(): number;
        get pixelWidth(): number;
        get oversample(): number;
    }
    export class $GlyphProvider$Conditional extends $Record implements $AutoCloseable {
        filter(): $FontOption$Filter;
        provider(): $GlyphProvider;
        close(): void;
        constructor(arg0: $GlyphProvider_, arg1: $FontOption$Filter);
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider$Conditional}.
     */
    export type $GlyphProvider$Conditional_ = { filter?: $FontOption$Filter, provider?: $GlyphProvider_,  } | [filter?: $FontOption$Filter, provider?: $GlyphProvider_, ];
    export class $GlyphInfo {
    }
    export interface $GlyphInfo {
        bake(glyphProvider: $Function_<$SheetGlyphInfo, $BakedGlyph>): $BakedGlyph;
        getShadowOffset(): number;
        getAdvance(): number;
        getAdvance(bold: boolean): number;
        getBoldOffset(): number;
        get shadowOffset(): number;
        get boldOffset(): number;
    }
    export class $GlyphProvider {
        static BASELINE: number;
    }
    export interface $GlyphProvider extends $AutoCloseable {
        close(): void;
        getGlyph(character: number): $GlyphInfo;
        getSupportedGlyphs(): $IntSet;
        get supportedGlyphs(): $IntSet;
    }
    /**
     * Values that may be interpreted as {@link $GlyphProvider}.
     */
    export type $GlyphProvider_ = (() => $IntSet);
}
