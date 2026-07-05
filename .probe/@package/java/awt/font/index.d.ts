import { $Rectangle2D, $Point2D, $AffineTransform } from "@package/java/awt/geom";
import { $Shape, $Font, $Rectangle } from "@package/java/awt";
import { $Object, $Cloneable } from "@package/java/lang";

declare module "@package/java/awt/font" {
    export class $GlyphMetrics {
        isWhitespace(): boolean;
        getType(): number;
        isStandard(): boolean;
        getAdvance(): number;
        getBounds2D(): $Rectangle2D;
        getAdvanceY(): number;
        getLSB(): number;
        getRSB(): number;
        isLigature(): boolean;
        isCombining(): boolean;
        isComponent(): boolean;
        getAdvanceX(): number;
        static COMBINING: number;
        static WHITESPACE: number;
        static LIGATURE: number;
        static COMPONENT: number;
        static STANDARD: number;
        constructor(arg0: number, arg1: $Rectangle2D, arg2: number);
        constructor(arg0: boolean, arg1: number, arg2: number, arg3: $Rectangle2D, arg4: number);
        get whitespace(): boolean;
        get type(): number;
        get standard(): boolean;
        get advance(): number;
        get bounds2D(): $Rectangle2D;
        get advanceY(): number;
        get LSB(): number;
        get RSB(): number;
        get ligature(): boolean;
        get combining(): boolean;
        get component(): boolean;
        get advanceX(): number;
    }
    export class $FontRenderContext {
        equals(arg0: $FontRenderContext): boolean;
        isTransformed(): boolean;
        getTransform(): $AffineTransform;
        isAntiAliased(): boolean;
        usesFractionalMetrics(): boolean;
        getAntiAliasingHint(): $Object;
        getFractionalMetricsHint(): $Object;
        getTransformType(): number;
        constructor(arg0: $AffineTransform, arg1: $Object, arg2: $Object);
        constructor(arg0: $AffineTransform, arg1: boolean, arg2: boolean);
        get transformed(): boolean;
        get transform(): $AffineTransform;
        get antiAliased(): boolean;
        get antiAliasingHint(): $Object;
        get fractionalMetricsHint(): $Object;
        get transformType(): number;
    }
    export class $GlyphVector implements $Cloneable {
        equals(arg0: $GlyphVector): boolean;
        getFontRenderContext(): $FontRenderContext;
        getFont(): $Font;
        getVisualBounds(): $Rectangle2D;
        getOutline(): $Shape;
        getOutline(arg0: number, arg1: number): $Shape;
        getNumGlyphs(): number;
        getGlyphOutline(arg0: number, arg1: number, arg2: number): $Shape;
        getGlyphOutline(arg0: number): $Shape;
        getGlyphCharIndex(arg0: number): number;
        getGlyphVisualBounds(arg0: number): $Shape;
        performDefaultLayout(): void;
        getGlyphCode(arg0: number): number;
        getGlyphCodes(arg0: number, arg1: number, arg2: number[]): number[];
        getGlyphCharIndices(arg0: number, arg1: number, arg2: number[]): number[];
        getLogicalBounds(): $Rectangle2D;
        getPixelBounds(arg0: $FontRenderContext, arg1: number, arg2: number): $Rectangle;
        getGlyphPosition(arg0: number): $Point2D;
        setGlyphPosition(arg0: number, arg1: $Point2D): void;
        getGlyphTransform(arg0: number): $AffineTransform;
        setGlyphTransform(arg0: number, arg1: $AffineTransform): void;
        getLayoutFlags(): number;
        getGlyphPositions(arg0: number, arg1: number, arg2: number[]): number[];
        getGlyphLogicalBounds(arg0: number): $Shape;
        getGlyphPixelBounds(arg0: number, arg1: $FontRenderContext, arg2: number, arg3: number): $Rectangle;
        getGlyphJustificationInfo(arg0: number): $GlyphJustificationInfo;
        getGlyphMetrics(arg0: number): $GlyphMetrics;
        static FLAG_HAS_TRANSFORMS: number;
        static FLAG_HAS_POSITION_ADJUSTMENTS: number;
        static FLAG_MASK: number;
        static FLAG_COMPLEX_GLYPHS: number;
        static FLAG_RUN_RTL: number;
        get fontRenderContext(): $FontRenderContext;
        get font(): $Font;
        get visualBounds(): $Rectangle2D;
        get numGlyphs(): number;
        get logicalBounds(): $Rectangle2D;
        get layoutFlags(): number;
    }
    export class $GlyphJustificationInfo {
        growRightLimit: number;
        static PRIORITY_WHITESPACE: number;
        shrinkLeftLimit: number;
        weight: number;
        shrinkRightLimit: number;
        shrinkAbsorb: boolean;
        growPriority: number;
        static PRIORITY_KASHIDA: number;
        growAbsorb: boolean;
        static PRIORITY_NONE: number;
        growLeftLimit: number;
        static PRIORITY_INTERCHAR: number;
        shrinkPriority: number;
        constructor(arg0: number, arg1: boolean, arg2: number, arg3: number, arg4: number, arg5: boolean, arg6: number, arg7: number, arg8: number);
    }
}
