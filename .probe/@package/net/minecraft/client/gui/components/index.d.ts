import { $IMixinEditBox as $IMixinEditBox$1, $IMixinAbstractWidget as $IMixinAbstractWidget$1, $IMixinBossHealthOverlay, $IMixinSplashRenderer } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $CallbackInfo, $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft, $GuiMessageTag, $GuiMessage_, $GuiMessageTag_ } from "@package/net/minecraft/client";
import { $UUID, $List, $UUID_, $Collection_, $List_, $Map } from "@package/java/util";
import { $FormattedCharSequence, $ArrayListDeque } from "@package/net/minecraft/util";
import { $Consumer, $Consumer_, $BiFunction, $Predicate_, $BiFunction_, $BooleanSupplier_ } from "@package/java/util/function";
import { $BossEvent$BossBarColor_, $BossEvent, $BossEvent$BossBarOverlay_ } from "@package/net/minecraft/world";
import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $WeighedSoundEvents, $SoundEventListener, $SoundManager } from "@package/net/minecraft/client/sounds";
import { $Operation_ } from "@package/com/llamalad7/mixinextras/injector/wrapoperation";
import { $IAbstractWidgetExtension } from "@package/net/neoforged/neoforge/client/extensions";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $CustomizableWidget$CustomBackgroundResetBehavior_, $CustomizableWidget, $CustomizableWidget$CustomBackgroundResetBehavior, $UniqueWidget } from "@package/de/keksuccino/fancymenu/util/rendering/ui/widget";
import { $SoundInstance } from "@package/net/minecraft/client/resources/sounds";
import { $Record, $Runnable_ } from "@package/java/lang";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $LayoutElement } from "@package/net/minecraft/client/gui/layouts";
import { $NarratableEntry$NarrationPriority, $NarratableEntry, $NarrationSupplier, $NarrationElementOutput } from "@package/net/minecraft/client/gui/narration";
import { $MessageSignature_, $MutableComponent, $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $IMixinEditBox, $IMixinAbstractWidget } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $ScreenRectangle_, $ScreenRectangle, $FocusNavigationEvent_ } from "@package/net/minecraft/client/gui/navigation";
import { $ClientboundBossEventPacket } from "@package/net/minecraft/network/protocol/game";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";
import { $Duration_ } from "@package/java/time";
import { $LocalSampleLogger, $RemoteDebugSampleType_ } from "@package/net/minecraft/util/debugchart";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Scoreboard, $Objective } from "@package/net/minecraft/world/scores";
import { $Gui, $Font, $ComponentPath, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";
export * as toasts from "@package/net/minecraft/client/gui/components/toasts";
export * as events from "@package/net/minecraft/client/gui/components/events";
export * as spectator from "@package/net/minecraft/client/gui/components/spectator";

declare module "@package/net/minecraft/client/gui/components" {
    export class $DebugScreenOverlay {
        reset(): void;
        render(guiGraphics: $GuiGraphics): void;
        showProfilerChart(): boolean;
        showDebugScreen(): boolean;
        logFrameDuration(frameDuration: number): void;
        toggleOverlay(): void;
        toggleFpsCharts(): void;
        toggleNetworkCharts(): void;
        toggleProfilerChart(): void;
        getTickTimeLogger(): $LocalSampleLogger;
        clearChunkCache(): void;
        getPingLogger(): $LocalSampleLogger;
        handler$chc000$entityculling$getLeftText(callback: $CallbackInfoReturnable<any>): $List<any>;
        handler$coh000$embeddium_extra$preRender(context: $GuiGraphics, ci: $CallbackInfo): void;
        wrapOperation$coh000$embeddium_extra$sodiumExtra$redirectDrawRightText(instance: $DebugScreenOverlay, original: $Operation_<any>): $List<any>;
        wrapOperation$coh000$embeddium_extra$sodiumExtra$redirectDrawLeftText(instance: $DebugScreenOverlay, original: $Operation_<any>): $List<any>;
        logRemoteSample(sample: number[], sampleType: $RemoteDebugSampleType_): void;
        showNetworkCharts(): boolean;
        getBandwidthLogger(): $LocalSampleLogger;
        showFpsCharts(): boolean;
        constructor(minecraft: $Minecraft);
        get tickTimeLogger(): $LocalSampleLogger;
        get pingLogger(): $LocalSampleLogger;
        get bandwidthLogger(): $LocalSampleLogger;
    }
    export class $Tooltip implements $NarrationSupplier {
        static create(message: $Component_): $Tooltip;
        static create(message: $Component_, narration: $Component_ | null): $Tooltip;
        toCharSequence(minecraft: $Minecraft): $List<$FormattedCharSequence>;
        static splitTooltip(minecraft: $Minecraft, message: $Component_): $List<$FormattedCharSequence>;
        /**
         * Updates the narration output with the current narration information.
         */
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
    }
    export class $WidgetTooltipHolder {
        get(): $Tooltip;
        set(tooltip: $Tooltip | null): void;
        setDelay(delay: $Duration_): void;
        updateNarration(output: $NarrationElementOutput): void;
        refreshTooltipForNextRenderPass(hovering: boolean, focused: boolean, screenRectangle: $ScreenRectangle_): void;
        constructor();
        set delay(value: $Duration_);
    }
    export class $EditBox extends $AbstractWidget implements $Renderable, $IMixinEditBox, $IMixinEditBox$1 {
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getValue(): string;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setValue(textToWrite: string): void;
        setFormatter(textFormatter: $BiFunction_<string, number, $FormattedCharSequence>): void;
        setFilter(validator: $Predicate_<string>): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColorUneditable(num: number): void;
        setHint(hint: $Component_): void;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLength(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        canConsumeInput(): boolean;
        updateWidgetNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isVisible(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getCursorPosition(): number;
        getScreenX(delta: number): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        insertText(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isEditable(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteText(num: number): void;
        setVisible(select: boolean): void;
        setCanLoseFocus(select: boolean): void;
        setResponder(responder: $Consumer_<string>): void;
        setBordered(select: boolean): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        isBordered(): boolean;
        moveCursor(delta: number, select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setTextColor(num: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setMaxLength(num: number): void;
        renderWidget(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        setSuggestion(textToWrite: string | null): void;
        moveCursorToEnd(select: boolean): void;
        setTextShadow(select: boolean): void;
        moveCursorToStart(select: boolean): void;
        moveCursorTo(delta: number, select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setHighlightPos(num: number): void;
        getWordPosition(delta: number): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteChars(num: number): void;
        renderHighlight(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteCharsToPos(num: number): void;
        setEditable(select: boolean): void;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setCursorPosition(num: number): void;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getHighlighted(): string;
        /**
         * Returns the current position of the cursor.
         */
        getInnerWidth(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        deleteWords(num: number): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getTextShadow(): boolean;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        invokeDeleteTextFancyMenu(num: number): void;
        getFocusedTimeFancyMenu(): number;
        /**
         * Returns the current position of the cursor.
         */
        getHighlightPosFancyMenu(): number;
        getFormatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        /**
         * Returns the current position of the cursor.
         */
        getDisplayPosFancyMenu(): number;
        /**
         * Deletes the given number of characters from the current cursor's position, unless there is currently a selection, in which case the selection is deleted instead.
         */
        setDisplayPosFancyMenu(num: number): void;
        /**
         * Returns the current position of the cursor.
         */
        getHightlightPosKonkrete(): number;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthKonkrete(): number;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getBorderedFancyMenu(): boolean;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableKonkrete(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getMaxLengthFancyMenu(): number;
        /**
         * Adds the given text after the cursor, or replaces the currently selected text if there is a selection.
         */
        onValueChangeKonkrete(textToWrite: string): void;
        /**
         * Gets whether the background and outline of this text box should be drawn (true if so).
         */
        getIsEditableFancyMenu(): boolean;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorFancyMenu(): number;
        /**
         * Returns the text between the cursor and selectionEnd.
         */
        getSuggestionFancyMenu(): string;
        /**
         * Returns the current position of the cursor.
         */
        getTextColorUneditableFancyMenu(): number;
        invokeRenderHighlightFancyMenu(guiGraphics: $GuiGraphics, minX: number, minY: number, maxX: number, maxY: number): void;
        getHintFancyMenu(): $Component;
        static SPRITES: $WidgetSprites;
        canLoseFocus: boolean;
        visible: boolean;
        static BACKWARDS: number;
        tooltip: $WidgetTooltipHolder;
        responder: $Consumer<string>;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        static DEFAULT_TEXT_COLOR: number;
        textColor: number;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        highlightPos: number;
        static UNSET_FG_COLOR: number;
        x: number;
        y: number;
        static FORWARDS: number;
        maxLength: number;
        constructor(font: $Font, x: number, y: number, width: number, height: number, editBox: $EditBox | null, message: $Component_);
        constructor(font: $Font, x: number, y: number, width: number, height: number, message: $Component_);
        constructor(font: $Font, width: number, height: number, message: $Component_);
        set formatter(value: $BiFunction_<string, number, $FormattedCharSequence>);
        set filter(value: $Predicate_<string>);
        set textColorUneditable(value: number);
        set hint(value: $Component_);
        set suggestion(value: string | null);
        get highlighted(): string;
        get innerWidth(): number;
        get focusedTimeFancyMenu(): number;
        get highlightPosFancyMenu(): number;
        get formatterFancyMenu(): $BiFunction<string, number, $FormattedCharSequence>;
        get hightlightPosKonkrete(): number;
        get maxLengthKonkrete(): number;
        get borderedFancyMenu(): boolean;
        get isEditableKonkrete(): boolean;
        get maxLengthFancyMenu(): number;
        get isEditableFancyMenu(): boolean;
        get textColorFancyMenu(): number;
        get suggestionFancyMenu(): string;
        get textColorUneditableFancyMenu(): number;
        get hintFancyMenu(): $Component;
    }
    export class $SubtitleOverlay$Subtitle {
        refresh(location: $Vec3_): void;
        getText(): $Component;
        getClosest(location: $Vec3_): $SubtitleOverlay$SoundPlayedAt;
        isAudibleFrom(location: $Vec3_): boolean;
        purgeOldInstances(displayTime: number): void;
        isStillActive(): boolean;
        constructor(text: $Component_, range: number, location: $Vec3_);
        get text(): $Component;
        get stillActive(): boolean;
    }
    export class $SplashRenderer implements $IMixinSplashRenderer {
        render(guiGraphics: $GuiGraphics, screenWidth: number, font: $Font, color: number): void;
        getSplashFancyMenu(): string;
        static CHRISTMAS: $SplashRenderer;
        static HALLOWEEN: $SplashRenderer;
        static NEW_YEAR: $SplashRenderer;
        constructor(splash: string);
        get splashFancyMenu(): string;
    }
    export class $BossHealthOverlay implements $IMixinBossHealthOverlay {
        reset(): void;
        update(packet: $ClientboundBossEventPacket): void;
        render(guiGraphics: $GuiGraphics): void;
        shouldPlayMusic(): boolean;
        shouldCreateWorldFog(): boolean;
        shouldDarkenScreen(): boolean;
        get_events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
        constructor(minecraft: $Minecraft);
        get _events_FancyMenu(): $Map<$UUID, $LerpingBossEvent>;
    }
    export class $CycleButton$ValueListSupplier<T> {
        static create<T>(altListSelector: $BooleanSupplier_, defaultList: $List_<T>, selectedList: $List_<T>): $CycleButton$ValueListSupplier<T>;
        static create<T>(values: $Collection_<T>): $CycleButton$ValueListSupplier<T>;
    }
    export interface $CycleButton$ValueListSupplier<T> {
        getDefaultList(): $List<T>;
        getSelectedList(): $List<T>;
        get defaultList(): $List<T>;
        get selectedList(): $List<T>;
    }
    export class $ChatComponent$DelayedMessageDeletion extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $ChatComponent$DelayedMessageDeletion}.
     */
    export type $ChatComponent$DelayedMessageDeletion_ = { signature?: $MessageSignature_, deletableAfter?: number,  } | [signature?: $MessageSignature_, deletableAfter?: number, ];
    export class $LerpingBossEvent extends $BossEvent {
        constructor(id: $UUID_, name: $Component_, progress: number, color: $BossEvent$BossBarColor_, overlay: $BossEvent$BossBarOverlay_, darkenScreen: boolean, bossMusic: boolean, worldFog: boolean);
    }
    export class $ChatComponent$State {
        constructor(messages: $List_<$GuiMessage_>, history: $List_<string>, delayedMessageDeletions: $List_<$ChatComponent$DelayedMessageDeletion_>);
    }
    export class $WidgetSprites extends $Record {
        get(enabled: boolean, focused: boolean): $ResourceLocation;
        enabled(): $ResourceLocation;
        disabled(): $ResourceLocation;
        enabledFocused(): $ResourceLocation;
        disabledFocused(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $ResourceLocation_, arg2: $ResourceLocation_, arg3: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_, enabledFocused: $ResourceLocation_);
        constructor(enabled: $ResourceLocation_, disabled: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $WidgetSprites}.
     */
    export type $WidgetSprites_ = { enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_,  } | [enabled?: $ResourceLocation_, disabledFocused?: $ResourceLocation_, disabled?: $ResourceLocation_, enabledFocused?: $ResourceLocation_, ];
    export class $ChatComponent {
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        tick(): void;
        render(guiGraphics: $GuiGraphics, tickCount: number, mouseX: number, mouseY: number, focused: boolean): void;
        scrollChat(posInc: number): void;
        getWidth(): number;
        static getWidth(height: number): number;
        addMessage(chatComponent: $Component_, headerSignature: $MessageSignature_ | null, tag: $GuiMessageTag_ | null): void;
        addMessage(chatComponent: $Component_): void;
        restoreState(state: $ChatComponent$State): void;
        getHeight(): number;
        static getHeight(height: number): number;
        static defaultUnfocusedPct(): number;
        getClickedComponentStyleAt(mouseX: number, arg1: number): $Style;
        handleChatQueueClicked(mouseX: number, arg1: number): boolean;
        getMessageTagAt(mouseX: number, arg1: number): $GuiMessageTag;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        resetChatScroll(): void;
        /**
         * Adds this string to the list of sent messages, for recall using the up/down arrow keys
         */
        addRecentChat(message: string): void;
        getRecentChat(): $ArrayListDeque<string>;
        getLinesPerPage(): number;
        getScale(): number;
        storeState(): $ChatComponent$State;
        /**
         * Resets the chat scroll (executed when the GUI is closed, among others)
         */
        rescaleChat(): void;
        deleteMessage(messageSignature: $MessageSignature_): void;
        /**
         * Clears the chat.
         */
        clearMessages(clearSentMsgHistory: boolean): void;
        /**
         * Returns `true` if the chat GUI is open
         */
        isChatFocused(): boolean;
        constructor(minecraft: $Minecraft);
        get recentChat(): $ArrayListDeque<string>;
        get linesPerPage(): number;
        get scale(): number;
        get chatFocused(): boolean;
    }
    export class $PlayerTabOverlay {
        reset(): void;
        render(guiGraphics: $GuiGraphics, width: number, scoreboard: $Scoreboard, objective: $Objective | null): void;
        /**
         * Called by GuiIngame to update the information stored in the playerlist, does not actually render the list, however.
         */
        setVisible(visible: boolean): void;
        getNameForDisplay(playerInfo: $PlayerInfo): $Component;
        setFooter(footer: $Component_ | null): void;
        setHeader(footer: $Component_ | null): void;
        static MAX_ROWS_PER_COL: number;
        visible: boolean;
        constructor(minecraft: $Minecraft, gui: $Gui);
        set footer(value: $Component_ | null);
        set header(value: $Component_ | null);
    }
    export class $SubtitleOverlay$SoundPlayedAt extends $Record {
    }
    /**
     * Values that may be interpreted as {@link $SubtitleOverlay$SoundPlayedAt}.
     */
    export type $SubtitleOverlay$SoundPlayedAt_ = { location?: $Vec3_, time?: number,  } | [location?: $Vec3_, time?: number, ];
    export class $TabOrderedElement {
    }
    export interface $TabOrderedElement {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        get tabOrderGroup(): number;
    }
    export class $Renderable {
    }
    export interface $Renderable {
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
    }
    /**
     * Values that may be interpreted as {@link $Renderable}.
     */
    export type $Renderable_ = ((arg0: $GuiGraphics, arg1: number, arg2: number, arg3: number) => void);
    export class $SubtitleOverlay implements $SoundEventListener {
        render(guiGraphics: $GuiGraphics): void;
        onPlaySound(sound: $SoundInstance, accessor: $WeighedSoundEvents, range: number): void;
        audibleSubtitles: $List<$SubtitleOverlay$Subtitle>;
        constructor(minecraft: $Minecraft);
    }
    export class $AbstractWidget implements $Renderable, $GuiEventListener, $LayoutElement, $NarratableEntry, $IAbstractWidgetExtension, $IMixinAbstractWidget, $IMixinAbstractWidget$1, $UniqueWidget, $CustomizableWidget {
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getY(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getRight(): number;
        getMessage(): $Component;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isActive(): boolean;
        setSize(width: number, height: number): void;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHovered(): boolean;
        setMessage(message: $Component_): void;
        isMouseOver(mouseX: number, arg1: number): boolean;
        /**
         * Retrieves the next focus path based on the given focus navigation event.
         * 
         * @return the next focus path as a ComponentPath, or `null` if there is no next focus path.
         */
        nextFocusPath(event: $FocusNavigationEvent_): $ComponentPath;
        /**
         * Called when the mouse is dragged within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseDragged(mouseX: number, arg1: number, mouseY: number, arg3: number, button: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseReleased(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Called when a mouse button is clicked within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        mouseClicked(mouseX: number, arg1: number, mouseY: number): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getTabOrderGroup(): number;
        /**
         * @return the narration priority
         */
        narrationPriority(): $NarratableEntry$NarrationPriority;
        updateNarration(narrationElementOutput: $NarrationElementOutput): void;
        /**
         * @return the `ScreenRectangle` occupied by the GUI element
         */
        getRectangle(): $ScreenRectangle;
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getWidth(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getHeight(): number;
        getFocusStateListenersFancyMenu(): $List<any>;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        setNineSliceBorderX_FancyMenu(height: number): void;
        getHoverStateListenersFancyMenu(): $List<any>;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverOrFocusStateFancyMenu(): boolean;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderTop_FancyMenu(height: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setUnderlineLabelOnHoverFancyMenu(focused: boolean): void;
        setNineSliceBorderRight_FancyMenu(height: number): void;
        addFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        setNineSliceBorderY_FancyMenu(height: number): void;
        static wrapDefaultNarrationMessage(message: $Component_): $MutableComponent;
        setNineSliceBorderLeft_FancyMenu(height: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverOrFocusStateFancyMenu(focused: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        addHoverStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        setNineSliceBorderBottom_FancyMenu(height: number): void;
        getHitboxRotationDegreesFancyMenu(): number;
        getWidgetIdentifierFancyMenu(): string;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isLabelShadowFancyMenu(): boolean;
        setCustomYFancyMenu(arg0: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setHoverLabelFancyMenu(message: $Component_): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastHoverStateFancyMenu(): boolean;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastHoverStateFancyMenu(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setLastFocusStateFancyMenu(focused: boolean): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        getHoverLabelFancyMenu(): $Component;
        setCustomLabelFancyMenu(message: $Component_): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getLabelScaleFancyMenu(): number;
        getUnhoverSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        /**
         * Sets the focus state of the GUI element.
         */
        setLabelShadowFancyMenu(focused: boolean): void;
        setLabelScaleFancyMenu(alpha: number): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        resolveLabelScaleFancyMenu(): number;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        getLastFocusStateFancyMenu(): boolean;
        getCustomLabelFancyMenu(): $Component;
        setCustomXFancyMenu(arg0: number): void;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        static renderScrollingString(guiGraphics: $GuiGraphics, font: $Font, text: $Component_, centerX: number, minX: number, minY: number, maxX: number, maxY: number, color: number): void;
        setX(height: number): void;
        setY(height: number): void;
        addHoverOrFocusStateListenerFancyMenu(consumer: $Consumer_<any>): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<any>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getResetCustomizationsListenersFancyMenu(): $List<any>;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setNineSliceCustomBackground_FancyMenu(focused: boolean): void;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHiddenFancyMenu(): boolean;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        setWidth(height: number): void;
        setHeight(height: number): void;
        setTooltip(tooltip: $Tooltip | null): void;
        setAlpha(alpha: number): void;
        /**
         * @deprecated
         */
        onClick(mouseX: number, arg1: number): void;
        resetWidgetCustomizationsFancyMenu(): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isFocused(): boolean;
        getTooltip(): $Tooltip;
        /**
         * Sets the focus state of the GUI element.
         */
        setFocused(focused: boolean): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getX(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        onRelease(mouseX: number, arg1: number): void;
        setFGColor(height: number): void;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getBottom(): number;
        /**
         * Returns the tab order group of the GUI component.
         * Tab order group determines the order in which the components are traversed when using keyboard navigation.
         * 
         * @return The tab order group of the GUI component.
         */
        getFGColor(): number;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        setTooltipDelay(tooltipDelay: $Duration_): void;
        /**
         * @return `true` if the element is active, `false` otherwise
         */
        isHoveredOrFocused(): boolean;
        setRectangle(width: number, height: number, x: number, y: number): void;
        setTabOrderGroup(height: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        setHiddenFancyMenu(focused: boolean): void;
        clearFGColor(): void;
        playDownSound(handler: $SoundManager): void;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyReleased(keyCode: number, scanCode: number, modifiers: number): boolean;
        mouseScrolled(mouseX: number, arg1: number, mouseY: number, arg3: number): boolean;
        /**
         * Called when a keyboard key is pressed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        keyPressed(keyCode: number, scanCode: number, modifiers: number): boolean;
        /**
         * Called when a character is typed within the GUI element.
         * 
         * @return `true` if the event is consumed, `false` otherwise.
         */
        charTyped(codePoint: string, modifiers: number): boolean;
        mouseMoved(mouseX: number, arg1: number): void;
        /**
         * @return the current focus path as a ComponentPath, or `null` if there is no current focus path.
         */
        getCurrentFocusPath(): $ComponentPath;
        setPosition(width: number, height: number): void;
        /**
         * Handles the logic for when this widget is clicked. Vanilla calls this after `AbstractWidget#mouseClicked(double, double, int)` validates that:
         * 
         * - this widget is active and visible
         * - the button can be handled by this widget
         * - the mouse is over this widget
         */
        onClick(mouseX: number, mouseY: number, button: number): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverStateListenersFancyMenu(focused: boolean): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickFocusStateListenersFancyMenu(focused: boolean): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        getOriginalMessageFancyMenu(): $Component;
        stopUnhoverSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        /**
         * Sets the focus state of the GUI element.
         */
        tickHoverOrFocusStateListenersFancyMenu(focused: boolean): void;
        getAlphaFancyMenu(): number;
        setMessageFieldFancyMenu(message: $Component_): void;
        setHeightFancyMenu(height: number): void;
        setHeightKonkrete(height: number): void;
        static PERIOD_PER_SCROLLED_PIXEL: number;
        static UNSET_FG_COLOR: number;
        visible: boolean;
        x: number;
        tooltip: $WidgetTooltipHolder;
        y: number;
        active: boolean;
        static MIN_SCROLL_PERIOD: number;
        constructor(x: number, y: number, width: number, height: number, message: $Component_);
        get right(): number;
        get hovered(): boolean;
        get focusStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderX_FancyMenu(value: number);
        get hoverStateListenersFancyMenu(): $List<any>;
        set nineSliceBorderTop_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderBottom_FancyMenu(value: number);
        get hitboxRotationDegreesFancyMenu(): number;
        get hoverOrFocusStateListenersFancyMenu(): $List<any>;
        get resetCustomizationsListenersFancyMenu(): $List<any>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        set alpha(value: number);
        get bottom(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
        set tooltipDelay(value: $Duration_);
        get hoveredOrFocused(): boolean;
        get currentFocusPath(): $ComponentPath;
        get originalMessageFancyMenu(): $Component;
        get alphaFancyMenu(): number;
        set messageFieldFancyMenu(value: $Component_);
        set heightFancyMenu(value: number);
        set heightKonkrete(value: number);
    }
}
