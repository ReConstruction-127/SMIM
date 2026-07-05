import { $ItemStack } from "@package/net/minecraft/world/item";
import { $PostChain, $MultiBufferSource$BufferSource, $PostPass } from "@package/net/minecraft/client/renderer";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $LerpingBossEvent, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $PlayerModelPart } from "@package/net/minecraft/world/entity/player";
import { $ResourceLoadStateTracker, $Options$FieldAccess } from "@package/net/minecraft/client";
import { $NativeImage$Format_, $NativeImage } from "@package/com/mojang/blaze3d/platform";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $List_ } from "@package/java/util";
import { $FormattedCharSequence } from "@package/net/minecraft/util";
import { $BiFunction } from "@package/java/util/function";
import { $SpectatorMenu } from "@package/net/minecraft/client/gui/spectator";
import { $Path } from "@package/java/nio/file";
import { $PackType } from "@package/net/minecraft/server/packs";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $WritableByteChannel } from "@package/java/nio/channels";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/de/keksuccino/fancymenu/mixin/mixins/common/client" {
    export class $IMixinPostChain {
    }
    export interface $IMixinPostChain {
        getPasses_FancyMenu(): $List<$PostPass>;
        get passes_FancyMenu(): $List<$PostPass>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPostChain}.
     */
    export type $IMixinPostChain_ = (() => $List_<$PostPass>);
    export class $IMixinMusicManager {
    }
    export interface $IMixinMusicManager {
        getCurrentMusic_FancyMenu(): $SoundInstance;
        get currentMusic_FancyMenu(): $SoundInstance;
    }
    /**
     * Values that may be interpreted as {@link $IMixinMusicManager}.
     */
    export type $IMixinMusicManager_ = (() => $SoundInstance);
    export class $IMixinSpectatorGui {
    }
    export interface $IMixinSpectatorGui {
        invoke_getHotbarAlpha_FancyMenu(): number;
        get_menu_FancyMenu(): $SpectatorMenu;
        get _menu_FancyMenu(): $SpectatorMenu;
    }
    export class $IMixinGui {
    }
    export interface $IMixinGui {
        get_overlayMessageString_FancyMenu(): $Component;
        get_overlayMessageTime_FancyMenu(): number;
        get_toolHighlightTimer_FancyMenu(): number;
        get_title_FancyMenu(): $Component;
        get_subtitle_FancyMenu(): $Component;
        get _overlayMessageString_FancyMenu(): $Component;
        get _overlayMessageTime_FancyMenu(): number;
        get _toolHighlightTimer_FancyMenu(): number;
        get _title_FancyMenu(): $Component;
        get _subtitle_FancyMenu(): $Component;
    }
    export class $IMixinGameRenderer {
    }
    export interface $IMixinGameRenderer {
        getBlurEffect_FancyMenu(): $PostChain;
        get blurEffect_FancyMenu(): $PostChain;
    }
    /**
     * Values that may be interpreted as {@link $IMixinGameRenderer}.
     */
    export type $IMixinGameRenderer_ = (() => $PostChain);
    export class $IMixinEditBox {
    }
    export interface $IMixinEditBox {
        invokeDeleteTextFancyMenu(arg0: number): void;
        getFocusedTimeFancyMenu(): number;
        getHighlightPosFancyMenu(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        getDisplayPosFancyMenu(): number;
        setDisplayPosFancyMenu(arg0: number): void;
        getBorderedFancyMenu(): boolean;
        getMaxLengthFancyMenu(): number;
        getIsEditableFancyMenu(): boolean;
        getTextColorFancyMenu(): number;
        getSuggestionFancyMenu(): string;
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number, arg4: number): void;
        getHintFancyMenu(): $Component;
        get focusedTimeFancyMenu(): number;
        get highlightPosFancyMenu(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get borderedFancyMenu(): boolean;
        get maxLengthFancyMenu(): number;
        get isEditableFancyMenu(): boolean;
        get textColorFancyMenu(): number;
        get suggestionFancyMenu(): string;
        get textColorUneditableFancyMenu(): number;
        get hintFancyMenu(): $Component;
    }
    export class $IMixinAbstractContainerScreen {
    }
    export interface $IMixinAbstractContainerScreen {
        get_hoveredSlot_FancyMenu(): $Slot;
        get_draggingItem_FancyMenu(): $ItemStack;
        get _hoveredSlot_FancyMenu(): $Slot;
        get _draggingItem_FancyMenu(): $ItemStack;
    }
    export class $IMixinPlayerModel {
    }
    export interface $IMixinPlayerModel {
        getCloakFancyMenu(): $ModelPart;
        get cloakFancyMenu(): $ModelPart;
    }
    /**
     * Values that may be interpreted as {@link $IMixinPlayerModel}.
     */
    export type $IMixinPlayerModel_ = (() => $ModelPart);
    export class $IMixinNativeImage {
        static invoke_class_constructor_FancyMenu(arg0: $NativeImage$Format_, arg1: number, arg2: number, arg3: boolean, arg4: number): $NativeImage;
    }
    export interface $IMixinNativeImage {
        get_pixels_FancyMenu(): number;
        invoke_writeToChannel_FancyMenu(arg0: $WritableByteChannel): boolean;
        get _pixels_FancyMenu(): number;
    }
    export class $IMixinMinecraft {
    }
    export interface $IMixinMinecraft {
        getReloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
        openChatScreenFancyMenu(arg0: string): void;
        get reloadStateTrackerFancyMenu(): $ResourceLoadStateTracker;
    }
    export class $IMixinVanillaPackResources {
    }
    export interface $IMixinVanillaPackResources {
        getRootPaths_FancyMenu(): $List<$Path>;
        getPathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
        get rootPaths_FancyMenu(): $List<$Path>;
        get pathsForType_FancyMenu(): $Map<$PackType, $List<$Path>>;
    }
    export class $IMixinClientLanguage {
    }
    export interface $IMixinClientLanguage {
        getStorageFancyMenu(): $Map<string, string>;
        get storageFancyMenu(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinClientLanguage}.
     */
    export type $IMixinClientLanguage_ = (() => $Map_<string, string>);
    export class $IMixinAbstractWidget {
    }
    export interface $IMixinAbstractWidget {
        getAlphaFancyMenu(): number;
        setMessageFieldFancyMenu(arg0: $Component_): void;
        setHeightFancyMenu(arg0: number): void;
        get alphaFancyMenu(): number;
        set messageFieldFancyMenu(value: $Component_);
        set heightFancyMenu(value: number);
    }
    export class $IMixinSplashRenderer {
    }
    export interface $IMixinSplashRenderer {
        getSplashFancyMenu(): string;
        get splashFancyMenu(): string;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSplashRenderer}.
     */
    export type $IMixinSplashRenderer_ = (() => string);
    export class $IMixinOptions {
    }
    export interface $IMixinOptions {
        invokeProcessOptionsFancyMenu(arg0: $Options$FieldAccess): void;
        getModelPartsFancyMenu(): $Set<$PlayerModelPart>;
        get modelPartsFancyMenu(): $Set<$PlayerModelPart>;
    }
    export class $IMixinScreen {
    }
    export interface $IMixinScreen {
        invokeRemoveWidgetFancyMenu(arg0: $GuiEventListener): void;
        getRenderablesFancyMenu(): $List<$Renderable>;
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        invoke_init_FancyMenu(): void;
        get_initialized_FancyMenu(): boolean;
        get renderablesFancyMenu(): $List<$Renderable>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        get _initialized_FancyMenu(): boolean;
    }
    export class $IMixinBossHealthOverlay {
    }
    export interface $IMixinBossHealthOverlay {
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    /**
     * Values that may be interpreted as {@link $IMixinBossHealthOverlay}.
     */
    export type $IMixinBossHealthOverlay_ = (() => $Map_<$UUID_, $LerpingBossEvent>);
    export class $IMixinReceivingLevelScreen {
    }
    export interface $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(arg0: number): void;
        set createdAtFancyMenu(value: number);
    }
    /**
     * Values that may be interpreted as {@link $IMixinReceivingLevelScreen}.
     */
    export type $IMixinReceivingLevelScreen_ = ((arg0: number) => void);
    export class $IMixinGuiGraphics {
    }
    export interface $IMixinGuiGraphics {
        getBufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
        get bufferSource_FancyMenu(): $MultiBufferSource$BufferSource;
    }
    /**
     * Values that may be interpreted as {@link $IMixinGuiGraphics}.
     */
    export type $IMixinGuiGraphics_ = (() => $MultiBufferSource$BufferSource);
}
