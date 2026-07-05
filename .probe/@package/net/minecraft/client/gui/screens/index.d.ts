import { $IMixinReceivingLevelScreen, $IMixinScreen as $IMixinScreen$1 } from "@package/de/keksuccino/fancymenu/mixin/mixins/common/client";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $NarratableEntry$NarrationPriority_, $NarratableEntry$NarrationPriority, $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component_, $Style, $Component } from "@package/net/minecraft/network/chat";
import { $ScreenAccessor as $ScreenAccessor$1 } from "@package/dev/tr7zw/trender/gui/impl/mixin/client";
import { $IMixinScreen } from "@package/de/keksuccino/konkrete/mixin/mixins/client";
import { $FocusNavigationEvent$TabNavigation, $FocusNavigationEvent$ArrowNavigation, $ScreenDirection_ } from "@package/net/minecraft/client/gui/navigation";
import { $Tooltip, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Inventory } from "@package/net/minecraft/world/entity/player";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $List_ } from "@package/java/util";
import { $ScreenAccessor as $ScreenAccessor$2 } from "@package/net/blay09/mods/balm/mixin";
import { $FormattedCharSequence, $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $ScreenAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $BooleanSupplier_ } from "@package/java/util/function";
import { $Music } from "@package/net/minecraft/sounds";
import { $CustomizableScreen } from "@package/de/keksuccino/fancymenu/util/rendering/ui/screen";
import { $Path_ } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClientTooltipPositioner_, $ClientTooltipPositioner } from "@package/net/minecraft/client/gui/screens/inventory/tooltip";
import { $MenuType_, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $GuiEventListener, $AbstractContainerEventHandler } from "@package/net/minecraft/client/gui/components/events";
export * as worldselection from "@package/net/minecraft/client/gui/screens/worldselection";
export * as recipebook from "@package/net/minecraft/client/gui/screens/recipebook";
export * as inventory from "@package/net/minecraft/client/gui/screens/inventory";
export * as social from "@package/net/minecraft/client/gui/screens/social";

declare module "@package/net/minecraft/client/gui/screens" {
    export class $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
    }
    export interface $MenuScreens$ScreenConstructor<T extends $AbstractContainerMenu, U extends $Screen> {
        create(menu: T, inventory: $Inventory, title: $Component_): U;
        fromPacket(title: $Component_, type: $MenuType_<T>, mc: $Minecraft, windowId: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MenuScreens$ScreenConstructor}.
     */
    export type $MenuScreens$ScreenConstructor_<T, U> = ((arg0: T, arg1: $Inventory, arg2: $Component) => U);
    export class $ReceivingLevelScreen extends $Screen implements $IMixinReceivingLevelScreen {
        setCreatedAtFancyMenu(time: number): void;
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        constructor(levelReceived: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_);
        set createdAtFancyMenu(value: number);
    }
    export class $ReceivingLevelScreen$Reason extends $Enum<$ReceivingLevelScreen$Reason> {
        static values(): $ReceivingLevelScreen$Reason[];
        static valueOf(arg0: string): $ReceivingLevelScreen$Reason;
        static OTHER: $ReceivingLevelScreen$Reason;
        static NETHER_PORTAL: $ReceivingLevelScreen$Reason;
        static END_PORTAL: $ReceivingLevelScreen$Reason;
    }
    /**
     * Values that may be interpreted as {@link $ReceivingLevelScreen$Reason}.
     */
    export type $ReceivingLevelScreen$Reason_ = "nether_portal" | "end_portal" | "other";
    export class $Screen$DeferredTooltipRendering extends $Record {
        tooltip(): $List<$FormattedCharSequence>;
        positioner(): $ClientTooltipPositioner;
        constructor(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_);
    }
    /**
     * Values that may be interpreted as {@link $Screen$DeferredTooltipRendering}.
     */
    export type $Screen$DeferredTooltipRendering_ = { positioner?: $ClientTooltipPositioner_, tooltip?: $List_<$FormattedCharSequence_>,  } | [positioner?: $ClientTooltipPositioner_, tooltip?: $List_<$FormattedCharSequence_>, ];
    export class $Screen extends $AbstractContainerEventHandler implements $Renderable, $ScreenAccessor$2, $IMixinScreen, $ScreenAccessor$1, $ScreenAccessor, $IMixinScreen$1, $CustomizableScreen {
        init(minecraft: $Minecraft, width: number, height: number): void;
        added(): void;
        removed(): void;
        resize(minecraft: $Minecraft, width: number, height: number): void;
        onClose(): void;
        tick(): void;
        getTitle(): $Component;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        render(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        getMinecraft(): $Minecraft;
        static isSelectAll(keyCode: number): boolean;
        onFilesDrop(packs: $List_<$Path_>): void;
        static getTooltipFromItem(minecraft: $Minecraft, item: $ItemStack_): $List<$Component>;
        setInitialFocus(listener: $GuiEventListener): void;
        createTabEvent(): $FocusNavigationEvent$TabNavigation;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasControlDown(): boolean;
        static wrapScreenError(action: $Runnable_, errorDesc: string, screenName: string): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasShiftDown(): boolean;
        addRenderableOnly<T extends $Renderable>(renderable: T): T;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderBackground(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        shouldCloseOnEsc(): boolean;
        createArrowEvent(direction: $ScreenDirection_): $FocusNavigationEvent$ArrowNavigation;
        afterMouseMove(): void;
        afterMouseAction(): void;
        getBackgroundMusic(): $Music;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        removeOnInitChildrenFancyMenu(): $List<any>;
        renderTransparentBackground(partialTick: $GuiGraphics): void;
        static renderMenuBackgroundTexture(guiGraphics: $GuiGraphics, texture: $ResourceLocation_, x: number, y: number, uOffset: number, vOffset: number, width: number, height: number): void;
        setTooltipForNextRenderPass(packs: $List_<$FormattedCharSequence_>): void;
        setTooltipForNextRenderPass(tooltip: $Tooltip, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(tooltip: $List_<$FormattedCharSequence_>, positioner: $ClientTooltipPositioner_, override: boolean): void;
        setTooltipForNextRenderPass(title: $Component_): void;
        static isCopy(keyCode: number): boolean;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        isPauseScreen(): boolean;
        /**
         * Renders the graphical user interface (GUI) element.
         */
        renderWithTooltip(guiGraphics: $GuiGraphics, mouseX: number, mouseY: number, partialTick: number): void;
        addWidget<T extends $GuiEventListener>(widget: T): T;
        clearFocus(): void;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        static hasAltDown(): boolean;
        static isPaste(keyCode: number): boolean;
        static isCut(keyCode: number): boolean;
        addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        updateNarratorStatus(onlyNarrateNew: boolean): void;
        handleDelayedNarration(): void;
        static findNarratableWidget(entries: $List_<$NarratableEntry>, target: $NarratableEntry | null): $Screen$NarratableSearchResult;
        afterKeyboardAction(): void;
        handleComponentClicked(style: $Style | null): boolean;
        getNarrationMessage(): $Component;
        triggerImmediateNarration(onlyNarrateNew: boolean): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getChildren(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        libgui$getChildren(): $List<$GuiEventListener>;
        setFontKonkrete(arg0: $Font): void;
        invokeAddRenderableWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        invokeRemoveWidgetFancyMenu(listener: $GuiEventListener): void;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesFancyMenu(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenFancyMenu(): $List<$GuiEventListener>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getNarratablesFancyMenu(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getChildrenKonkrete(): $List<$GuiEventListener>;
        invokeAddWidgetKonkrete<T extends $GuiEventListener>(widget: T): T;
        invoke_init_FancyMenu(): void;
        balm$addRenderableWidget<T extends $GuiEventListener>(widget: T): T;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getNarratables(): $List<$NarratableEntry>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        catnip$getRenderables(): $List<$Renderable>;
        /**
         * @return `true` if the GUI element is dragging, `false` otherwise
         */
        get_initialized_FancyMenu(): boolean;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        getRenderablesKonkrete(): $List<$Renderable>;
        /**
         * @return a List containing all GUI element children of this GUI element
         */
        balm_getRenderables(): $List<$Renderable>;
        static MENU_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get minecraft(): $Minecraft;
        set initialFocus(value: $GuiEventListener);
        get backgroundMusic(): $Music;
        get pauseScreen(): boolean;
        get narrationMessage(): $Component;
        set fontKonkrete(value: $Font);
        get renderablesFancyMenu(): $List<$Renderable>;
        get childrenFancyMenu(): $List<$GuiEventListener>;
        get narratablesFancyMenu(): $List<$NarratableEntry>;
        get childrenKonkrete(): $List<$GuiEventListener>;
        get _initialized_FancyMenu(): boolean;
        get renderablesKonkrete(): $List<$Renderable>;
    }
    export class $Overlay implements $Renderable {
        isPauseScreen(): boolean;
        constructor();
        get pauseScreen(): boolean;
    }
    export class $Screen$NarratableSearchResult {
        entry: $NarratableEntry;
        index: number;
        priority: $NarratableEntry$NarrationPriority;
        constructor(entry: $NarratableEntry, index: number, priority: $NarratableEntry$NarrationPriority_);
    }
}
