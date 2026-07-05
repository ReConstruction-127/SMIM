import { $Serializable, $InputStream, $File_ } from "@package/java/io";
import { $RenderableImage } from "@package/java/awt/image/renderable";
import { $BiConsumer_, $Function_, $BiFunction_ } from "@package/java/util/function";
import { $Dimension2D, $PathIterator, $AffineTransform, $Point2D, $Rectangle2D } from "@package/java/awt/geom";
import { $AttributedCharacterIterator$Attribute, $CharacterIterator, $AttributedCharacterIterator } from "@package/java/text";
import { $ColorSpace } from "@package/java/awt/color";
import { $FontRenderContext, $TextAttribute, $LineMetrics, $GlyphVector } from "@package/java/awt/font";
import { $Cloneable, $Object } from "@package/java/lang";
import { $Map_, $Locale, $Collection, $Map, $Map$Entry, $Set } from "@package/java/util";
import { $VolatileImage, $ImageObserver_, $ImageProducer, $BufferedImage, $BufferedImageOp, $ColorModel, $WritableRaster, $Raster, $RenderedImage } from "@package/java/awt/image";
export * as geom from "@package/java/awt/geom";
export * as image from "@package/java/awt/image";
export * as font from "@package/java/awt/font";
export * as color from "@package/java/awt/color";

declare module "@package/java/awt" {
    export class $PaintContext {
    }
    export interface $PaintContext {
        dispose(): void;
        getRaster(arg0: number, arg1: number, arg2: number, arg3: number): $Raster;
        getColorModel(): $ColorModel;
        get colorModel(): $ColorModel;
    }
    export class $GraphicsDevice {
        getType(): number;
        getConfigurations(): $GraphicsConfiguration[];
        getDefaultConfiguration(): $GraphicsConfiguration;
        isWindowTranslucencySupported(arg0: $GraphicsDevice$WindowTranslucency): boolean;
        setDisplayMode(arg0: $DisplayMode): void;
        getDisplayMode(): $DisplayMode;
        getBestConfiguration(arg0: $GraphicsConfigTemplate): $GraphicsConfiguration;
        getFullScreenWindow(): $Window;
        setFullScreenWindow(arg0: $Window): void;
        isFullScreenSupported(): boolean;
        isDisplayChangeSupported(): boolean;
        getDisplayModes(): $DisplayMode[];
        getAvailableAcceleratedMemory(): number;
        getIDstring(): string;
        static TYPE_IMAGE_BUFFER: number;
        static TYPE_RASTER_SCREEN: number;
        static TYPE_PRINTER: number;
        get type(): number;
        get configurations(): $GraphicsConfiguration[];
        get defaultConfiguration(): $GraphicsConfiguration;
        get fullScreenSupported(): boolean;
        get displayChangeSupported(): boolean;
        get displayModes(): $DisplayMode[];
        get availableAcceleratedMemory(): number;
        get IDstring(): string;
    }
    export class $GraphicsConfiguration {
        getBounds(): $Rectangle;
        isTranslucencyCapable(): boolean;
        getColorModel(): $ColorModel;
        getColorModel(arg0: number): $ColorModel;
        createCompatibleImage(arg0: number, arg1: number, arg2: number): $BufferedImage;
        createCompatibleImage(arg0: number, arg1: number): $BufferedImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: number): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: $ImageCapabilities, arg3: number): $VolatileImage;
        createCompatibleVolatileImage(arg0: number, arg1: number, arg2: $ImageCapabilities): $VolatileImage;
        getImageCapabilities(): $ImageCapabilities;
        getDefaultTransform(): $AffineTransform;
        getNormalizingTransform(): $AffineTransform;
        getBufferCapabilities(): $BufferCapabilities;
        getDevice(): $GraphicsDevice;
        get bounds(): $Rectangle;
        get translucencyCapable(): boolean;
        get imageCapabilities(): $ImageCapabilities;
        get defaultTransform(): $AffineTransform;
        get normalizingTransform(): $AffineTransform;
        get bufferCapabilities(): $BufferCapabilities;
        get device(): $GraphicsDevice;
    }
    export class $Polygon implements $Shape, $Serializable {
        invalidate(): void;
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        intersects(arg0: $Rectangle2D): boolean;
        reset(): void;
        contains(arg0: $Point2D): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: $Rectangle2D): boolean;
        contains(arg0: $Point): boolean;
        getBounds(): $Rectangle;
        translate(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        inside(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        getBoundingBox(): $Rectangle;
        getBounds2D(): $Rectangle2D;
        addPoint(arg0: number, arg1: number): void;
        getPathIterator(arg0: $AffineTransform): $PathIterator;
        getPathIterator(arg0: $AffineTransform, arg1: number): $PathIterator;
        ypoints: number[];
        xpoints: number[];
        npoints: number;
        constructor();
        constructor(arg0: number[], arg1: number[], arg2: number);
        get bounds(): $Rectangle;
        get boundingBox(): $Rectangle;
        get bounds2D(): $Rectangle2D;
    }
    export class $Shape {
    }
    export interface $Shape {
        intersects(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        intersects(arg0: $Rectangle2D): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: $Point2D): boolean;
        contains(arg0: number, arg1: number): boolean;
        contains(arg0: $Rectangle2D): boolean;
        getBounds(): $Rectangle;
        getBounds2D(): $Rectangle2D;
        getPathIterator(arg0: $AffineTransform, arg1: number): $PathIterator;
        getPathIterator(arg0: $AffineTransform): $PathIterator;
        get bounds(): $Rectangle;
        get bounds2D(): $Rectangle2D;
    }
    export class $Point extends $Point2D implements $Serializable {
        getLocation(): $Point;
        move(arg0: number, arg1: number): void;
        setLocation(arg0: $Point): void;
        setLocation(arg0: number, arg1: number): void;
        translate(arg0: number, arg1: number): void;
        x: number;
        y: number;
        constructor();
        constructor(arg0: number, arg1: number);
        constructor(arg0: $Point);
    }
    export class $BufferCapabilities implements $Cloneable {
        clone(): $Object;
        isPageFlipping(): boolean;
        getFlipContents(): $BufferCapabilities$FlipContents;
        getFrontBufferCapabilities(): $ImageCapabilities;
        getBackBufferCapabilities(): $ImageCapabilities;
        isFullScreenRequired(): boolean;
        isMultiBufferAvailable(): boolean;
        constructor(arg0: $ImageCapabilities, arg1: $ImageCapabilities, arg2: $BufferCapabilities$FlipContents);
        get pageFlipping(): boolean;
        get flipContents(): $BufferCapabilities$FlipContents;
        get frontBufferCapabilities(): $ImageCapabilities;
        get backBufferCapabilities(): $ImageCapabilities;
        get fullScreenRequired(): boolean;
        get multiBufferAvailable(): boolean;
    }
    export class $Font implements $Serializable {
        isPlain(): boolean;
        getName(): string;
        static decode(arg0: string): $Font;
        getSize(): number;
        getAttributes(): $Map<$TextAttribute, never>;
        getFamily(arg0: $Locale): string;
        getFamily(): string;
        canDisplay(arg0: string): boolean;
        canDisplay(arg0: number): boolean;
        deriveFont(arg0: number): $Font;
        deriveFont(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>): $Font;
        deriveFont(arg0: number): $Font;
        deriveFont(arg0: number, arg1: $AffineTransform): $Font;
        deriveFont(arg0: number, arg1: number): $Font;
        deriveFont(arg0: $AffineTransform): $Font;
        static getFont(arg0: string, arg1: $Font): $Font;
        static getFont(arg0: string): $Font;
        static getFont(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>): $Font;
        static createFont(arg0: number, arg1: $InputStream): $Font;
        static createFont(arg0: number, arg1: $File_): $Font;
        isBold(): boolean;
        isItalic(): boolean;
        isTransformed(): boolean;
        getStyle(): number;
        getTransform(): $AffineTransform;
        getLineMetrics(arg0: string, arg1: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getLineMetrics(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $FontRenderContext): $LineMetrics;
        getNumGlyphs(): number;
        createGlyphVector(arg0: $FontRenderContext, arg1: number[]): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: string): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: $CharacterIterator): $GlyphVector;
        createGlyphVector(arg0: $FontRenderContext, arg1: string[]): $GlyphVector;
        hasUniformLineMetrics(): boolean;
        getStringBounds(arg0: string, arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: string, arg1: $FontRenderContext): $Rectangle2D;
        getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: $FontRenderContext): $Rectangle2D;
        getMaxCharBounds(arg0: $FontRenderContext): $Rectangle2D;
        getFontName(arg0: $Locale): string;
        getFontName(): string;
        hasLayoutAttributes(): boolean;
        getMissingGlyphCode(): number;
        getBaselineFor(arg0: string): number;
        getItalicAngle(): number;
        static textRequiresLayout(arg0: string[], arg1: number, arg2: number): boolean;
        static createFonts(arg0: $InputStream): $Font[];
        static createFonts(arg0: $File_): $Font[];
        getPSName(): string;
        getSize2D(): number;
        getAvailableAttributes(): $AttributedCharacterIterator$Attribute[];
        canDisplayUpTo(arg0: $CharacterIterator, arg1: number, arg2: number): number;
        canDisplayUpTo(arg0: string[], arg1: number, arg2: number): number;
        canDisplayUpTo(arg0: string): number;
        layoutGlyphVector(arg0: $FontRenderContext, arg1: string[], arg2: number, arg3: number, arg4: number): $GlyphVector;
        static PLAIN: number;
        static ITALIC: number;
        static CENTER_BASELINE: number;
        static HANGING_BASELINE: number;
        static DIALOG: string;
        static MONOSPACED: string;
        static DIALOG_INPUT: string;
        static LAYOUT_NO_LIMIT_CONTEXT: number;
        static LAYOUT_RIGHT_TO_LEFT: number;
        static SANS_SERIF: string;
        static SERIF: string;
        static TRUETYPE_FONT: number;
        static ROMAN_BASELINE: number;
        static LAYOUT_NO_START_CONTEXT: number;
        static LAYOUT_LEFT_TO_RIGHT: number;
        static BOLD: number;
        static TYPE1_FONT: number;
        constructor(arg0: $Map_<$AttributedCharacterIterator$Attribute, never>);
        constructor(arg0: string, arg1: number, arg2: number);
        get plain(): boolean;
        get name(): string;
        get size(): number;
        get attributes(): $Map<$TextAttribute, never>;
        get bold(): boolean;
        get italic(): boolean;
        get transformed(): boolean;
        get style(): number;
        get transform(): $AffineTransform;
        get numGlyphs(): number;
        get missingGlyphCode(): number;
        get italicAngle(): number;
        get PSName(): string;
        get size2D(): number;
        get availableAttributes(): $AttributedCharacterIterator$Attribute[];
    }
    export class $RenderingHints$Key {
        isCompatibleValue(arg0: $Object): boolean;
    }
    export class $Dimension extends $Dimension2D implements $Serializable {
        getSize(): $Dimension;
        setSize(arg0: $Dimension): void;
        setSize(arg0: number, arg1: number): void;
        width: number;
        height: number;
        constructor(arg0: $Dimension);
        constructor();
        constructor(arg0: number, arg1: number);
    }
    export class $CompositeContext {
    }
    export interface $CompositeContext {
        compose(arg0: $Raster, arg1: $Raster, arg2: $WritableRaster): void;
        dispose(): void;
    }
    export class $RenderingHints implements $Map<$Object, $Object>, $Cloneable {
        remove(arg0: $Object): $Object;
        size(): number;
        get(arg0: $Object): $Object;
        put(arg0: $Object, arg1: $Object): $Object;
        values(): $Collection<$Object>;
        clone(): $Object;
        clear(): void;
        isEmpty(): boolean;
        add(arg0: $RenderingHints): void;
        entrySet(): $Set<$Map$Entry<$Object, $Object>>;
        putAll(arg0: $Map_<never, never>): void;
        containsKey(arg0: $Object): boolean;
        keySet(): $Set<$Object>;
        containsValue(arg0: $Object): boolean;
        remove(arg0: $Object, arg1: $Object): boolean;
        replace(arg0: $Object, arg1: $Object, arg2: $Object): boolean;
        replace(arg0: $Object, arg1: $Object): $Object;
        replaceAll(arg0: $BiFunction_<$Object, $Object, $Object>): void;
        merge(arg0: $Object, arg1: $Object, arg2: $BiFunction_<$Object, $Object, $Object>): $Object;
        putIfAbsent(arg0: $Object, arg1: $Object): $Object;
        compute(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        forEach(arg0: $BiConsumer_<$Object, $Object>): void;
        computeIfAbsent(arg0: $Object, arg1: $Function_<$Object, $Object>): $Object;
        getOrDefault(arg0: $Object, arg1: $Object): $Object;
        computeIfPresent(arg0: $Object, arg1: $BiFunction_<$Object, $Object, $Object>): $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_VRGB: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_VBGR: $Object;
        static KEY_FRACTIONALMETRICS: $RenderingHints$Key;
        static VALUE_RESOLUTION_VARIANT_SIZE_FIT: $Object;
        static VALUE_TEXT_ANTIALIAS_DEFAULT: $Object;
        static VALUE_TEXT_ANTIALIAS_OFF: $Object;
        static VALUE_ANTIALIAS_OFF: $Object;
        static VALUE_INTERPOLATION_BICUBIC: $Object;
        static VALUE_COLOR_RENDER_QUALITY: $Object;
        static VALUE_COLOR_RENDER_DEFAULT: $Object;
        static VALUE_STROKE_DEFAULT: $Object;
        static VALUE_RENDER_DEFAULT: $Object;
        static VALUE_RENDER_QUALITY: $Object;
        static KEY_ALPHA_INTERPOLATION: $RenderingHints$Key;
        static KEY_DITHERING: $RenderingHints$Key;
        static VALUE_FRACTIONALMETRICS_OFF: $Object;
        static VALUE_ANTIALIAS_DEFAULT: $Object;
        static VALUE_ALPHA_INTERPOLATION_SPEED: $Object;
        static KEY_TEXT_ANTIALIASING: $RenderingHints$Key;
        static VALUE_TEXT_ANTIALIAS_GASP: $Object;
        static KEY_TEXT_LCD_CONTRAST: $RenderingHints$Key;
        static VALUE_RENDER_SPEED: $Object;
        static VALUE_FRACTIONALMETRICS_ON: $Object;
        static VALUE_RESOLUTION_VARIANT_DEFAULT: $Object;
        static KEY_ANTIALIASING: $RenderingHints$Key;
        static VALUE_DITHER_ENABLE: $Object;
        static KEY_STROKE_CONTROL: $RenderingHints$Key;
        static VALUE_STROKE_PURE: $Object;
        static KEY_RENDERING: $RenderingHints$Key;
        static VALUE_DITHER_DEFAULT: $Object;
        static KEY_RESOLUTION_VARIANT: $RenderingHints$Key;
        static VALUE_INTERPOLATION_BILINEAR: $Object;
        static VALUE_ALPHA_INTERPOLATION_QUALITY: $Object;
        static VALUE_RESOLUTION_VARIANT_BASE: $Object;
        static KEY_COLOR_RENDERING: $RenderingHints$Key;
        static VALUE_RESOLUTION_VARIANT_DPI_FIT: $Object;
        static VALUE_ANTIALIAS_ON: $Object;
        static VALUE_STROKE_NORMALIZE: $Object;
        static VALUE_FRACTIONALMETRICS_DEFAULT: $Object;
        static VALUE_INTERPOLATION_NEAREST_NEIGHBOR: $Object;
        static VALUE_DITHER_DISABLE: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_HRGB: $Object;
        static VALUE_TEXT_ANTIALIAS_LCD_HBGR: $Object;
        static KEY_INTERPOLATION: $RenderingHints$Key;
        static VALUE_ALPHA_INTERPOLATION_DEFAULT: $Object;
        static VALUE_TEXT_ANTIALIAS_ON: $Object;
        static VALUE_COLOR_RENDER_SPEED: $Object;
        constructor(arg0: $Map_<$RenderingHints$Key, never>);
        constructor(arg0: $RenderingHints$Key, arg1: $Object);
        get empty(): boolean;
    }
    export class $ImageCapabilities implements $Cloneable {
        clone(): $Object;
        isAccelerated(): boolean;
        isTrueVolatile(): boolean;
        constructor(arg0: boolean);
        get accelerated(): boolean;
        get trueVolatile(): boolean;
    }
    export class $Graphics {
        /**
         * @deprecated
         */
        finalize(): void;
        create(): $Graphics;
        create(arg0: number, arg1: number, arg2: number, arg3: number): $Graphics;
        setColor(arg0: $Color): void;
        dispose(): void;
        getFontMetrics(): $FontMetrics;
        getFontMetrics(arg0: $Font): $FontMetrics;
        translate(arg0: number, arg1: number): void;
        getFont(): $Font;
        getColor(): $Color;
        setFont(arg0: $Font): void;
        getClip(): $Shape;
        drawString(arg0: $AttributedCharacterIterator, arg1: number, arg2: number): void;
        drawString(arg0: string, arg1: number, arg2: number): void;
        fillRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: $Color, arg4: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: $Color, arg6: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $Color, arg10: $ImageObserver_): boolean;
        drawImage(arg0: $Image, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: $ImageObserver_): boolean;
        drawLine(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        copyArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        getClipBounds(): $Rectangle;
        getClipBounds(arg0: $Rectangle): $Rectangle;
        setClip(arg0: $Shape): void;
        setClip(arg0: number, arg1: number, arg2: number, arg3: number): void;
        drawPolygon(arg0: $Polygon): void;
        drawPolygon(arg0: number[], arg1: number[], arg2: number): void;
        fillPolygon(arg0: number[], arg1: number[], arg2: number): void;
        fillPolygon(arg0: $Polygon): void;
        setPaintMode(): void;
        setXORMode(arg0: $Color): void;
        drawRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        fillRoundRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        draw3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        fill3DRect(arg0: number, arg1: number, arg2: number, arg3: number, arg4: boolean): void;
        drawOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
        fillOval(arg0: number, arg1: number, arg2: number, arg3: number): void;
        fillArc(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        drawPolyline(arg0: number[], arg1: number[], arg2: number): void;
        drawChars(arg0: string[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawBytes(arg0: number[], arg1: number, arg2: number, arg3: number, arg4: number): void;
        /**
         * @deprecated
         */
        getClipRect(): $Rectangle;
        hitClip(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        clipRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        clearRect(arg0: number, arg1: number, arg2: number, arg3: number): void;
        set XORMode(value: $Color);
    }
    export class $Rectangle extends $Rectangle2D implements $Shape, $Serializable {
        intersects(arg0: $Rectangle): boolean;
        add(arg0: $Point): void;
        add(arg0: number, arg1: number): void;
        add(arg0: $Rectangle): void;
        contains(arg0: $Rectangle): boolean;
        contains(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        contains(arg0: $Point): boolean;
        contains(arg0: number, arg1: number): boolean;
        getLocation(): $Point;
        getSize(): $Dimension;
        grow(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        resize(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        move(arg0: number, arg1: number): void;
        setSize(arg0: $Dimension): void;
        setSize(arg0: number, arg1: number): void;
        union(arg0: $Rectangle): $Rectangle;
        setLocation(arg0: $Point): void;
        setLocation(arg0: number, arg1: number): void;
        intersection(arg0: $Rectangle): $Rectangle;
        translate(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        inside(arg0: number, arg1: number): boolean;
        setBounds(arg0: $Rectangle): void;
        setBounds(arg0: number, arg1: number, arg2: number, arg3: number): void;
        /**
         * @deprecated
         */
        reshape(arg0: number, arg1: number, arg2: number, arg3: number): void;
        static OUT_TOP: number;
        static OUT_RIGHT: number;
        x: number;
        width: number;
        y: number;
        static OUT_BOTTOM: number;
        static OUT_LEFT: number;
        height: number;
        constructor(arg0: $Point, arg1: $Dimension);
        constructor(arg0: $Point);
        constructor(arg0: $Dimension);
        constructor();
        constructor(arg0: $Rectangle);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number, arg1: number);
    }
    export class $Composite {
    }
    export interface $Composite {
        createContext(arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints): $CompositeContext;
    }
    /**
     * Values that may be interpreted as {@link $Composite}.
     */
    export type $Composite_ = ((arg0: $ColorModel, arg1: $ColorModel, arg2: $RenderingHints) => $CompositeContext);
    export class $Paint {
    }
    export interface $Paint extends $Transparency {
        createContext(arg0: $ColorModel, arg1: $Rectangle, arg2: $Rectangle2D, arg3: $AffineTransform, arg4: $RenderingHints): $PaintContext;
    }
    export class $Color implements $Paint, $Serializable {
        static decode(arg0: string): $Color;
        createContext(arg0: $ColorModel, arg1: $Rectangle, arg2: $Rectangle2D, arg3: $AffineTransform, arg4: $RenderingHints): $PaintContext;
        getComponents(arg0: $ColorSpace, arg1: number[]): number[];
        getComponents(arg0: number[]): number[];
        static getColor(arg0: string, arg1: $Color): $Color;
        static getColor(arg0: string, arg1: number): $Color;
        static getColor(arg0: string): $Color;
        getRGB(): number;
        getTransparency(): number;
        static RGBtoHSB(arg0: number, arg1: number, arg2: number, arg3: number[]): number[];
        static HSBtoRGB(arg0: number, arg1: number, arg2: number): number;
        getAlpha(): number;
        getBlue(): number;
        getRed(): number;
        getGreen(): number;
        getRGBComponents(arg0: number[]): number[];
        getRGBColorComponents(arg0: number[]): number[];
        brighter(): $Color;
        static getHSBColor(arg0: number, arg1: number, arg2: number): $Color;
        getColorComponents(arg0: $ColorSpace, arg1: number[]): number[];
        getColorComponents(arg0: number[]): number[];
        getColorSpace(): $ColorSpace;
        darker(): $Color;
        static lightGray: $Color;
        static magenta: $Color;
        static GRAY: $Color;
        static pink: $Color;
        static BLUE: $Color;
        static yellow: $Color;
        static cyan: $Color;
        static red: $Color;
        static gray: $Color;
        static PINK: $Color;
        static white: $Color;
        static BLACK: $Color;
        static ORANGE: $Color;
        static WHITE: $Color;
        static green: $Color;
        static black: $Color;
        static GREEN: $Color;
        static RED: $Color;
        static orange: $Color;
        static LIGHT_GRAY: $Color;
        static blue: $Color;
        static darkGray: $Color;
        static MAGENTA: $Color;
        static YELLOW: $Color;
        static DARK_GRAY: $Color;
        static CYAN: $Color;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        constructor(arg0: number);
        constructor(arg0: number, arg1: boolean);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(arg0: $ColorSpace, arg1: number[], arg2: number);
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
        get RGB(): number;
        get transparency(): number;
        get alpha(): number;
        get colorSpace(): $ColorSpace;
    }
    export class $Stroke {
    }
    export interface $Stroke {
        createStrokedShape(arg0: $Shape): $Shape;
    }
    /**
     * Values that may be interpreted as {@link $Stroke}.
     */
    export type $Stroke_ = ((arg0: $Shape) => $Shape);
    export class $Image {
        getProperty(arg0: string, arg1: $ImageObserver_): $Object;
        flush(): void;
        getSource(): $ImageProducer;
        getWidth(arg0: $ImageObserver_): number;
        getHeight(arg0: $ImageObserver_): number;
        getCapabilities(arg0: $GraphicsConfiguration): $ImageCapabilities;
        getGraphics(): $Graphics;
        setAccelerationPriority(arg0: number): void;
        getScaledInstance(arg0: number, arg1: number, arg2: number): $Image;
        getAccelerationPriority(): number;
        static SCALE_DEFAULT: number;
        static UndefinedProperty: $Object;
        static SCALE_FAST: number;
        static SCALE_AREA_AVERAGING: number;
        static SCALE_SMOOTH: number;
        static SCALE_REPLICATE: number;
        get source(): $ImageProducer;
        get graphics(): $Graphics;
    }
    export class $Graphics2D extends $Graphics {
        scale(arg0: number, arg1: number): void;
        fill(arg0: $Shape): void;
        transform(arg0: $AffineTransform): void;
        rotate(arg0: number, arg1: number, arg2: number): void;
        rotate(arg0: number): void;
        hit(arg0: $Rectangle, arg1: $Shape, arg2: boolean): boolean;
        getBackground(): $Color;
        draw(arg0: $Shape): void;
        translate(arg0: number, arg1: number): void;
        getFontRenderContext(): $FontRenderContext;
        clip(arg0: $Shape): void;
        drawString(arg0: string, arg1: number, arg2: number): void;
        drawString(arg0: $AttributedCharacterIterator, arg1: number, arg2: number): void;
        shear(arg0: number, arg1: number): void;
        setBackground(arg0: $Color): void;
        getTransform(): $AffineTransform;
        setPaint(arg0: $Paint): void;
        getPaint(): $Paint;
        setTransform(arg0: $AffineTransform): void;
        setRenderingHint(arg0: $RenderingHints$Key, arg1: $Object): void;
        drawImage(arg0: $BufferedImage, arg1: $BufferedImageOp, arg2: number, arg3: number): void;
        drawImage(arg0: $Image, arg1: $AffineTransform, arg2: $ImageObserver_): boolean;
        getComposite(): $Composite;
        setComposite(arg0: $Composite_): void;
        drawGlyphVector(arg0: $GlyphVector, arg1: number, arg2: number): void;
        drawRenderedImage(arg0: $RenderedImage, arg1: $AffineTransform): void;
        drawRenderableImage(arg0: $RenderableImage, arg1: $AffineTransform): void;
        getDeviceConfiguration(): $GraphicsConfiguration;
        setStroke(arg0: $Stroke_): void;
        getRenderingHint(arg0: $RenderingHints$Key): $Object;
        setRenderingHints(arg0: $Map_<never, never>): void;
        addRenderingHints(arg0: $Map_<never, never>): void;
        getRenderingHints(): $RenderingHints;
        getStroke(): $Stroke;
        get fontRenderContext(): $FontRenderContext;
        get deviceConfiguration(): $GraphicsConfiguration;
    }
    export class $Transparency {
        static OPAQUE: number;
        static TRANSLUCENT: number;
        static BITMASK: number;
    }
    export interface $Transparency {
        getTransparency(): number;
        get transparency(): number;
    }
    /**
     * Values that may be interpreted as {@link $Transparency}.
     */
    export type $Transparency_ = (() => number);
    export class $FontMetrics implements $Serializable {
        stringWidth(arg0: string): number;
        getHeight(): number;
        getFontRenderContext(): $FontRenderContext;
        getFont(): $Font;
        getLineMetrics(arg0: string, arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getLineMetrics(arg0: string, arg1: $Graphics): $LineMetrics;
        getLineMetrics(arg0: string[], arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getLineMetrics(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $Graphics): $LineMetrics;
        getDescent(): number;
        getAscent(): number;
        charWidth(arg0: string): number;
        charWidth(arg0: number): number;
        getLeading(): number;
        getMaxDescent(): number;
        getWidths(): number[];
        charsWidth(arg0: string[], arg1: number, arg2: number): number;
        hasUniformLineMetrics(): boolean;
        getStringBounds(arg0: $CharacterIterator, arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: string[], arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: string, arg1: number, arg2: number, arg3: $Graphics): $Rectangle2D;
        getStringBounds(arg0: string, arg1: $Graphics): $Rectangle2D;
        getMaxCharBounds(arg0: $Graphics): $Rectangle2D;
        getMaxAscent(): number;
        /**
         * @deprecated
         */
        getMaxDecent(): number;
        getMaxAdvance(): number;
        bytesWidth(arg0: number[], arg1: number, arg2: number): number;
        get height(): number;
        get fontRenderContext(): $FontRenderContext;
        get font(): $Font;
        get descent(): number;
        get ascent(): number;
        get leading(): number;
        get maxDescent(): number;
        get widths(): number[];
        get maxAscent(): number;
        get maxDecent(): number;
        get maxAdvance(): number;
    }
}
