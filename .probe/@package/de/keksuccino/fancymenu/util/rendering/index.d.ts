import { $Color } from "@package/java/awt";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
export * as ui from "@package/de/keksuccino/fancymenu/util/rendering/ui";

declare module "@package/de/keksuccino/fancymenu/util/rendering" {
    export class $AspectRatio {
        getAspectRatioSizeByMinimumSize(arg0: number, arg1: number): number[];
        getAspectRatioSizeByMaximumSize(arg0: number, arg1: number): number[];
        getAspectRatioWidth(arg0: number): number;
        getAspectRatioHeight(arg0: number): number;
        getInputHeight(): number;
        getInputWidth(): number;
        constructor(arg0: number, arg1: number);
        get inputHeight(): number;
        get inputWidth(): number;
    }
    export class $DrawableColor {
        static of(arg0: number, arg1: number, arg2: number, arg3: number): $DrawableColor;
        static of(arg0: number): $DrawableColor;
        static of(arg0: string): $DrawableColor;
        static of(arg0: $Color): $DrawableColor;
        static of(arg0: number, arg1: number, arg2: number): $DrawableColor;
        copy(): $DrawableColor;
        getColorInt(): number;
        getColorIntWithAlpha(arg0: number): number;
        getAsFloats(): $DrawableColor$FloatColor;
        setAsShaderColor(arg0: $GuiGraphics): void;
        setAsShaderColor(arg0: $GuiGraphics, arg1: number): void;
        resetShaderColor(arg0: $GuiGraphics): void;
        getColor(): $Color;
        getHex(): string;
        static ofHtml(arg0: string): $DrawableColor;
        static WHITE: $DrawableColor;
        static BLACK: $DrawableColor;
        static FULLY_TRANSPARENT: $DrawableColor;
        static EMPTY: $DrawableColor;
        get colorInt(): number;
        get asFloats(): $DrawableColor$FloatColor;
        get color(): $Color;
        get hex(): string;
    }
    export class $DrawableColor$FloatColor extends $Record {
        red(): number;
        blue(): number;
        green(): number;
        alpha(): number;
        constructor(red: number, green: number, blue: number, alpha: number);
    }
    /**
     * Values that may be interpreted as {@link $DrawableColor$FloatColor}.
     */
    export type $DrawableColor$FloatColor_ = { red?: number, blue?: number, green?: number, alpha?: number,  } | [red?: number, blue?: number, green?: number, alpha?: number, ];
}
