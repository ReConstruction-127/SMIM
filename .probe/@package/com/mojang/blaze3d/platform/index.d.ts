import { $InputStream, $File_ } from "@package/java/io";
import { $IMixinNativeImage } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $Component } from "@package/net/minecraft/network/chat";
import { $FT_Face } from "@package/org/lwjgl/util/freetype";
import { $IoSupplier, $IoSupplier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $List_, $OptionalInt } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $LazyLoadedValue } from "@package/net/minecraft/util";
import { $BiConsumer_, $IntUnaryOperator_ } from "@package/java/util/function";
import { $Path_ } from "@package/java/nio/file";
import { $NativeImageAccessor } from "@package/org/embeddedt/embeddium/impl/mixin/features/textures";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $GLFWVidMode$Buffer, $GLFWVidMode } from "@package/org/lwjgl/glfw";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $WindowKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $WritableByteChannel } from "@package/java/nio/channels";

declare module "@package/com/mojang/blaze3d/platform" {
    export class $NativeImage$Format extends $Enum<$NativeImage$Format> {
        static values(): $NativeImage$Format[];
        static valueOf(arg0: string): $NativeImage$Format;
        components(): number;
        greenOffset(): number;
        hasLuminanceOrBlue(): boolean;
        hasLuminance(): boolean;
        alphaOffset(): number;
        supportedByStb(): boolean;
        luminanceOffset(): number;
        hasLuminanceOrRed(): boolean;
        setUnpackPixelStoreState(): void;
        luminanceOrAlphaOffset(): number;
        luminanceOrRedOffset(): number;
        hasLuminanceOrAlpha(): boolean;
        setPackPixelStoreState(): void;
        luminanceOrBlueOffset(): number;
        hasLuminanceOrGreen(): boolean;
        luminanceOrGreenOffset(): number;
        glFormat(): number;
        hasAlpha(): boolean;
        hasGreen(): boolean;
        hasBlue(): boolean;
        hasRed(): boolean;
        blueOffset(): number;
        redOffset(): number;
        static LUMINANCE_ALPHA: $NativeImage$Format;
        static RGBA: $NativeImage$Format;
        static LUMINANCE: $NativeImage$Format;
        static RGB: $NativeImage$Format;
    }
    /**
     * Values that may be interpreted as {@link $NativeImage$Format}.
     */
    export type $NativeImage$Format_ = "rgba" | "rgb" | "luminance_alpha" | "luminance";
    export class $MonitorCreator {
    }
    export interface $MonitorCreator {
        createMonitor(monitor: number): $Monitor;
    }
    /**
     * Values that may be interpreted as {@link $MonitorCreator}.
     */
    export type $MonitorCreator_ = ((arg0: number) => $Monitor);
    export class $NativeImage implements $AutoCloseable, $IMixinNativeImage, $NativeImageAccessor {
        writeToFile(file: $File_): void;
        writeToFile(path: $Path_): void;
        format(): $NativeImage$Format;
        static read(format: $NativeImage$Format_ | null, textureData: $ByteBuffer): $NativeImage;
        static read(format: $NativeImage$Format_ | null, textureStream: $InputStream): $NativeImage;
        static read(textureStream: $InputStream): $NativeImage;
        static read(textureData: $ByteBuffer): $NativeImage;
        static read(bytes: number[]): $NativeImage;
        close(): void;
        copyFrom(other: $NativeImage): void;
        asByteArray(): number[];
        getWidth(): number;
        untrack(): void;
        getRedOrLuminance(x: number, y: number): number;
        setPixelLuminance(x: number, y: number, luminance: number): void;
        downloadTexture(level: number, opaque: boolean): void;
        copyFromFont(face: $FT_Face, index: number): boolean;
        getPixelRGBA(x: number, y: number): number;
        getBlueOrLuminance(x: number, y: number): number;
        /**
         * @deprecated
         */
        makePixelArray(): number[];
        setPixelRGBA(x: number, y: number, abgrColor: number): void;
        applyToAllPixels(_function: $IntUnaryOperator_): void;
        getHeight(): number;
        getPixelsRGBA(): number[];
        static invoke_class_constructor_FancyMenu$fancymenu_$md$cdee65$0(arg0: $NativeImage$Format_, arg1: number, arg2: number, arg3: boolean, arg4: number): $NativeImage;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, mipmap: boolean, autoClose: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, mipmap: boolean): void;
        upload(level: number, xOffset: number, yOffset: number, unpackSkipPixels: number, unpackSkipRows: number, width: number, height: number, blur: boolean, clamp: boolean, mipmap: boolean, autoClose: boolean): void;
        downloadDepthBuffer(unused: number): void;
        getGreenOrLuminance(x: number, y: number): number;
        getLuminanceOrAlpha(x: number, y: number): number;
        mappedCopy(_function: $IntUnaryOperator_): $NativeImage;
        blendPixel(x: number, y: number, abgrColor: number): void;
        copyRect(source: $NativeImage, xFrom: number, yFrom: number, xTo: number, yTo: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        copyRect(xFrom: number, yFrom: number, xToDelta: number, yToDelta: number, width: number, height: number, mirrorX: boolean, mirrorY: boolean): void;
        drawPixels(): void;
        fillRect(x: number, y: number, width: number, height: number, value: number): void;
        flipY(): void;
        resizeSubRectTo(x: number, y: number, width: number, height: number, image: $NativeImage): void;
        getPointer(): number;
        get_pixels_FancyMenu(): number;
        invoke_writeToChannel_FancyMenu(channel: $WritableByteChannel): boolean;
        pixels: number;
        constructor(width: number, height: number, useCalloc: boolean);
        constructor(format: $NativeImage$Format_, width: number, height: number, useCalloc: boolean);
        get width(): number;
        get height(): number;
        get pixelsRGBA(): number[];
        get pointer(): number;
        get _pixels_FancyMenu(): number;
    }
    export class $VideoMode {
        write(): string;
        static read(videoMode: string | null): ($VideoMode) | undefined;
        getWidth(): number;
        getHeight(): number;
        getRefreshRate(): number;
        getGreenBits(): number;
        getBlueBits(): number;
        getRedBits(): number;
        constructor(glfwVideoMode: $GLFWVidMode);
        constructor(bufferVideoMode: $GLFWVidMode$Buffer);
        constructor(width: number, height: number, redBits: number, greenBits: number, blueBits: number, refreshRate: number);
        get width(): number;
        get height(): number;
        get refreshRate(): number;
        get greenBits(): number;
        get blueBits(): number;
        get redBits(): number;
    }
    export class $Monitor {
        getY(): number;
        getCurrentMode(): $VideoMode;
        getVideoModeIndex(videoMode: $VideoMode): number;
        getModeCount(): number;
        refreshVideoModes(): void;
        getPreferredVidMode(videoMode: ($VideoMode) | undefined): $VideoMode;
        getMode(index: number): $VideoMode;
        getMonitor(): number;
        getX(): number;
        constructor(monitor: number);
        get y(): number;
        get currentMode(): $VideoMode;
        get modeCount(): number;
        get monitor(): number;
        get x(): number;
    }
    export class $InputConstants$Key {
        getName(): string;
        getValue(): number;
        getType(): $InputConstants$Type;
        getDisplayName(): $Component;
        getNumericKeyValue(): $OptionalInt;
        displayName: $LazyLoadedValue<$Component>;
        get name(): string;
        get value(): number;
        get type(): $InputConstants$Type;
        get numericKeyValue(): $OptionalInt;
    }
    export class $Window implements $AutoCloseable, $WindowKJS {
        getY(): number;
        close(): void;
        setWindowed(windowedWidth: number, windowedHeight: number): void;
        setFramerateLimit(limit: number): void;
        setErrorSection(errorSection: string): void;
        updateVsync(vsyncEnabled: boolean): void;
        isFullscreen(): boolean;
        toggleFullScreen(): void;
        updateDisplay(): void;
        getFramerateLimit(): number;
        calculateScale(guiScale: number, forceUnicode: boolean): number;
        shouldClose(): boolean;
        getWidth(): number;
        getHeight(): number;
        findBestMonitor(): $Monitor;
        static checkGlfwError(errorConsumer: $BiConsumer_<number, string>): void;
        getRefreshRate(): number;
        defaultErrorCallback(error: number, description: number): void;
        changeFullscreenVideoMode(): void;
        static getPlatform(): string;
        setDefaultErrorCallback(): void;
        updateRawMouseInput(vsyncEnabled: boolean): void;
        getGuiScaledHeight(): number;
        getGuiScaledWidth(): number;
        setGuiScale(scaleFactor: number): void;
        getGuiScale(): number;
        setTitle(errorSection: string): void;
        setIcon(packResources: $PackResources, iconSet: $IconSet_): void;
        setWidth(limit: number): void;
        setHeight(limit: number): void;
        getPreferredFullscreenVideoMode(): ($VideoMode) | undefined;
        /**
         * Gets a pointer to the native window object that is passed to GLFW.
         */
        getWindow(): number;
        getX(): number;
        getScreenHeight(): number;
        getScreenWidth(): number;
        setPreferredFullscreenVideoMode(preferredFullscreenVideoMode: ($VideoMode) | undefined): void;
        kjs$loadIcons(original: $List_<$IoSupplier_<$InputStream>>): $List<$IoSupplier<$InputStream>>;
        static BASE_HEIGHT: number;
        static BASE_WIDTH: number;
        constructor(eventHandler: $WindowEventHandler, screenManager: $ScreenManager, displayData: $DisplayData, preferredFullscreenVideoMode: string | null, title: string);
        get y(): number;
        set errorSection(value: string);
        get fullscreen(): boolean;
        get refreshRate(): number;
        static get platform(): string;
        get guiScaledHeight(): number;
        get guiScaledWidth(): number;
        set title(value: string);
        get window(): number;
        get x(): number;
        get screenHeight(): number;
        get screenWidth(): number;
    }
    export class $InputConstants$Type extends $Enum<$InputConstants$Type> {
        getOrCreate(keyCode: number): $InputConstants$Key;
        static values(): $InputConstants$Type[];
        static valueOf(arg0: string): $InputConstants$Type;
        static SCANCODE: $InputConstants$Type;
        static MOUSE: $InputConstants$Type;
        static KEYSYM: $InputConstants$Type;
    }
    /**
     * Values that may be interpreted as {@link $InputConstants$Type}.
     */
    export type $InputConstants$Type_ = "keysym" | "scancode" | "mouse";
    export class $ScreenManager {
        shutdown(): void;
        static clamp(value: number, min: number, max: number): number;
        findBestMonitor(window: $Window): $Monitor;
        getMonitor(monitorID: number): $Monitor;
        constructor(monitorCreator: $MonitorCreator_);
    }
    export class $WindowEventHandler {
    }
    export interface $WindowEventHandler {
        resizeDisplay(): void;
        setWindowActive(windowActive: boolean): void;
        cursorEntered(): void;
        set windowActive(value: boolean);
    }
    export class $IconSet extends $Enum<$IconSet> {
        static values(): $IconSet[];
        static valueOf(arg0: string): $IconSet;
        getStandardIcons(resources: $PackResources): $List<$IoSupplier<$InputStream>>;
        getMacIcon(resources: $PackResources): $IoSupplier<$InputStream>;
        static SNAPSHOT: $IconSet;
        static RELEASE: $IconSet;
    }
    /**
     * Values that may be interpreted as {@link $IconSet}.
     */
    export type $IconSet_ = "release" | "snapshot";
    export class $DisplayData {
        fullscreenHeight: $OptionalInt;
        fullscreenWidth: $OptionalInt;
        width: number;
        height: number;
        isFullscreen: boolean;
        constructor(width: number, height: number, fullscreenWidth: $OptionalInt, fullscreenHeight: $OptionalInt, isFullscreen: boolean);
    }
}
