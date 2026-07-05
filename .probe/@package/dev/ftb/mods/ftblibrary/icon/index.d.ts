import { $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Style } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PixelBuffer } from "@package/dev/ftb/mods/ftblibrary/math";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Object } from "@package/java/lang";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftblibrary/icon" {
    export class $Icon implements $Drawable {
        isEmpty(): boolean;
        static empty(): $Color4I;
        copy(): $Icon;
        static getIcon(id: $ResourceLocation_): $Icon;
        static getIcon(id: string): $Icon;
        static getIcon(json: $JsonElement_): $Icon;
        createPixelBuffer(): $PixelBuffer;
        aspectRatio(): number;
        hasPixelBuffer(): boolean;
        withPadding(padding: number): $Icon;
        withColor(color: $Color4I): $Icon;
        combineWith(...icons: $Icon[]): $Icon;
        combineWith(icon: $Icon): $Icon;
        getIngredient(): $Object;
        withTint(color: $Color4I): $Icon;
        getJson(): $JsonElement;
        withUV(x: number, y: number, w: number, h: number, tw: number, th: number): $Icon;
        withUV(u0: number, v0: number, u1: number, v1: number): $Icon;
        withBorder(color: $Color4I, roundEdges: boolean): $Icon;
        getPixelBufferFrameCount(): number;
        drawStatic(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        draw3D(graphics: $GuiGraphics): void;
        static CODEC: $Codec<$Icon>;
        static STRING_CODEC: $Codec<$Icon>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        constructor();
        get ingredient(): $Object;
        get json(): $JsonElement;
        get pixelBufferFrameCount(): number;
    }
    export class $MutableColor4I extends $Color4I {
        set(r: number, g: number, b: number, a: number): $Color4I;
        set(col: $Color4I, a: number): $Color4I;
        set(col: $Color4I): $Color4I;
        set(col: number, a: number): $Color4I;
        set(col: number): $Color4I;
        setFromHSB(h: number, s: number, b: number): $Color4I;
        addBrightness(b: number): $Color4I;
        setAlpha(a: number): $Color4I;
        static GRAY: $Color4I;
        static WHITE: $Color4I;
        static LIGHT_RED: $Color4I;
        static CODEC: $Codec<$Icon>;
        static BLUE: $Color4I;
        static LIGHT_GREEN: $Color4I;
        static GREEN: $Color4I;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        static RED: $Color4I;
        static TEMP: $Color4I;
        static LIGHT_BLUE: $Color4I;
        static BLACK: $Color4I;
        static DARK_GRAY: $Color4I;
        static STRING_CODEC: $Codec<$Icon>;
        set alpha(value: number);
    }
    export class $Drawable {
    }
    export interface $Drawable {
        draw(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        drawStatic(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        draw3D(graphics: $GuiGraphics): void;
    }
    /**
     * Values that may be interpreted as {@link $Drawable}.
     */
    export type $Drawable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number) => void);
    export class $ImageIcon extends $Icon implements $IResourceIcon {
        copy(): $ImageIcon;
        bindTexture(): void;
        withColor(color: $Color4I): $ImageIcon;
        getResourceLocation(): $ResourceLocation;
        minU: number;
        maxV: number;
        maxU: number;
        static CODEC: $Codec<$Icon>;
        color: $Color4I;
        texture: $ResourceLocation;
        static MISSING_IMAGE: $ResourceLocation;
        minV: number;
        tileSize: number;
        static STRING_CODEC: $Codec<$Icon>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        constructor(tex: $ResourceLocation_);
        get resourceLocation(): $ResourceLocation;
    }
    export class $IResourceIcon {
    }
    export interface $IResourceIcon {
        getResourceLocation(): $ResourceLocation;
        get resourceLocation(): $ResourceLocation;
    }
    /**
     * Values that may be interpreted as {@link $IResourceIcon}.
     */
    export type $IResourceIcon_ = (() => $ResourceLocation_);
    export class $Color4I extends $Icon {
        static fromString(s: string): $Color4I;
        static fromJson(element: $JsonElement_): $Color4I;
        static rgb(r: number, g: number, b: number): $Color4I;
        static rgb(col: number): $Color4I;
        rgb(): number;
        static rgb(color: $Vec3_): $Color4I;
        bluef(): number;
        redf(): number;
        greenf(): number;
        whiteIfEmpty(): $Color4I;
        addBrightness(percent: number): $Color4I;
        lerp(col: $Color4I, m: number): $Color4I;
        mutable(): $MutableColor4I;
        isMutable(): boolean;
        static RGBtoHSB(r: number, g: number, b: number, hsbvals: number[]): number[];
        greeni(): number;
        static get256(id: number): $Color4I;
        static HSBtoRGB(hue: number, saturation: number, brightness: number): number;
        bluei(): number;
        alphai(): number;
        withAlphaf(alpha: number): $Color4I;
        toStyle(): $Style;
        redi(): number;
        alphaf(): number;
        withAlpha(a: number): $Color4I;
        static hsb(h: number, s: number, b: number): $Color4I;
        static rgba(r: number, g: number, b: number, a: number): $Color4I;
        rgba(): number;
        static rgba(col: number): $Color4I;
        static getChatFormattingColor(id: number): $Color4I;
        static getChatFormattingColor(formatting: $ChatFormatting_): $Color4I;
        static GRAY: $Color4I;
        static WHITE: $Color4I;
        static LIGHT_RED: $Color4I;
        static CODEC: $Codec<$Icon>;
        static BLUE: $Color4I;
        static LIGHT_GREEN: $Color4I;
        static GREEN: $Color4I;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $Icon>;
        static RED: $Color4I;
        static LIGHT_BLUE: $Color4I;
        static BLACK: $Color4I;
        static DARK_GRAY: $Color4I;
        static STRING_CODEC: $Codec<$Icon>;
    }
}
