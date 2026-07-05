import { $Component_, $FormattedText, $Component } from "@package/net/minecraft/network/chat";
import { $BooleanConsumer_, $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Window } from "@package/com/mojang/blaze3d/platform";
import { $List, $List_ } from "@package/java/util";
import { $FormattedCharSequence_ } from "@package/net/minecraft/util";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Consumer_ } from "@package/java/util/function";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $Color4I, $ImageIcon, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Iterable_, $Enum, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Key, $KeyModifiers, $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as input from "@package/dev/ftb/mods/ftblibrary/ui/input";

declare module "@package/dev/ftb/mods/ftblibrary/ui" {
    export class $ContextMenu extends $ModalPanel implements $PopupMenu {
        setMaxRows(maxRows: number): void;
        getModalPanel(): $ModalPanel;
        hasIcons(): boolean;
        setDrawVerticalSeparators(drawVerticalSeparators: boolean): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        set maxRows(value: number);
        get modalPanel(): $ModalPanel;
        set drawVerticalSeparators(value: boolean);
    }
    export class $CursorType extends $Enum<$CursorType> {
        static values(): $CursorType[];
        static valueOf(name: string): $CursorType;
        static set(type: $CursorType_): void;
        static VRESIZE: $CursorType;
        static ARROW: $CursorType;
        static CROSSHAIR: $CursorType;
        static IBEAM: $CursorType;
        static HRESIZE: $CursorType;
        static HAND: $CursorType;
    }
    /**
     * Values that may be interpreted as {@link $CursorType}.
     */
    export type $CursorType_ = "arrow" | "ibeam" | "crosshair" | "hand" | "hresize" | "vresize";
    export class $Panel extends $Widget {
        add(widget: $Widget): void;
        addAll(list: $Iterable_<$Widget>): void;
        setOffset(flag: boolean): void;
        getOnlyInteractWithWidgetsInside(): boolean;
        setOnlyInteractWithWidgetsInside(value: boolean): void;
        getWidget(index: number): $Widget;
        clearWidgets(): void;
        setScrollStep(s: number): void;
        refreshWidgets(): void;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        align(layout: $WidgetLayout_): number;
        setOnlyRenderWidgetsInside(value: boolean): void;
        getOnlyRenderWidgetsInside(): boolean;
        getContentHeight(): number;
        drawOffsetBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        isMouseOverAnyWidget(): boolean;
        isDefaultScrollVertical(): boolean;
        alignWidgets(): void;
        getWidgets(): $List<$Widget>;
        getContentWidth(): number;
        scrollPanel(scroll: number): boolean;
        getScrollStep(): number;
        movePanelScroll(dx: number, dy: number): boolean;
        drawWidget(graphics: $GuiGraphics, theme: $Theme, widget: $Widget, x: number, y: number, w: number, h: number): void;
        isOffset(): boolean;
        addWidgets(): void;
        getScrollY(): number;
        setScrollX(scroll: number): void;
        setScrollY(scroll: number): void;
        getScrollX(): number;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
        get contentHeight(): number;
        get mouseOverAnyWidget(): boolean;
        get defaultScrollVertical(): boolean;
        get widgets(): $List<$Widget>;
        get contentWidth(): number;
    }
    export class $WidgetType extends $Enum<$WidgetType> {
        static values(): $WidgetType[];
        static valueOf(name: string): $WidgetType;
        static mouseOver(mouseOver: boolean): $WidgetType;
        static DISABLED: $WidgetType;
        static MOUSE_OVER: $WidgetType;
        static NORMAL: $WidgetType;
    }
    /**
     * Values that may be interpreted as {@link $WidgetType}.
     */
    export type $WidgetType_ = "normal" | "mouse_over" | "disabled";
    export class $Button extends $Widget {
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        drawBackground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        setTitle(s: $Component_): $Button;
        setIcon(i: $Icon): $Button;
        onClicked(arg0: $MouseButton): void;
        setForceButtonSize(forceButtonSize: boolean): $Button;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, t: $Component_, i: $Icon);
        constructor(panel: $Panel);
        set title(value: $Component_);
        set icon(value: $Icon);
        set forceButtonSize(value: boolean);
    }
    export class $DropDownMenu extends $ModalPanel implements $PopupMenu {
        getModalPanel(): $ModalPanel;
        setMaxHeightPercent(maxHeightPercent: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel, i: $List_<$ContextMenuItem>);
        get modalPanel(): $ModalPanel;
        set maxHeightPercent(value: number);
    }
    export class $Theme {
        trimStringToWidthReverse(text: string, width: number): string;
        listFormattedStringToWidth(text: $FormattedText, width: number): $List<$FormattedText>;
        drawCheckboxBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, radioButton: boolean): void;
        getInvertedContentColor(): $Color4I;
        drawScrollBar(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, vertical: boolean): void;
        trimStringToWidth(text: $FormattedText, width: number): $FormattedText;
        trimStringToWidth(text: string, width: number): string;
        getFontHeight(): number;
        drawTextBox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        getContentColor(type: $WidgetType_): $Color4I;
        getStringWidth(text: $FormattedText): number;
        getStringWidth(text: $FormattedCharSequence_): number;
        getStringWidth(text: string): number;
        getFont(): $Font;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, flags: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number): number;
        drawString(graphics: $GuiGraphics, text: $Object, x: number, y: number, color: $Color4I, flags: number): number;
        drawPanelBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawScrollBarBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawWidget(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawGui(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawButton(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_): void;
        drawContextMenuBackground(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawContainerSlot(graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        drawHorizontalTab(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, selected: boolean): void;
        drawCheckbox(graphics: $GuiGraphics, x: number, y: number, w: number, h: number, type: $WidgetType_, selected: boolean, radioButton: boolean): void;
        static MOUSE_OVER: number;
        static BACKGROUND_SQUARES: $ImageIcon;
        static CENTERED: number;
        static SHADOW: number;
        static CENTERED_V: number;
        static DARK: number;
        static renderDebugBoxes: boolean;
        static UNICODE: number;
        static DEFAULT: $Theme;
        constructor();
        get invertedContentColor(): $Color4I;
        get fontHeight(): number;
        get font(): $Font;
    }
    export class $IOpenableScreen {
    }
    export interface $IOpenableScreen extends $Runnable {
        run(): void;
        openGuiLater(): void;
        closeContextMenu(): void;
        openGui(): void;
        closeGui(openPrevScreen: boolean): void;
        closeGui(): void;
        openAfter(runnable: $Runnable_): $Runnable;
    }
    /**
     * Values that may be interpreted as {@link $IOpenableScreen}.
     */
    export type $IOpenableScreen_ = (() => void);
    export class $BaseScreen extends $Panel {
        isMouseOver(x: number, y: number, w: number, h: number): boolean;
        isMouseOver(widget: $Widget): boolean;
        getMinecraft(): $Minecraft;
        shouldCloseOnEsc(): boolean;
        drawForeground(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        onInit(): boolean;
        onPostInit(): void;
        usePreviousScreenOnBack(): boolean;
        drawDefaultBackground(graphics: $GuiGraphics): boolean;
        openYesNoFull(title: $Component_, desc: $Component_, callback: $BooleanConsumer_): void;
        setFocusedWidget(widget: $Widget): void;
        getMaxZLevel(): number;
        openYesNo(title: $Component_, desc: $Component_, callback: $Runnable_): void;
        pushModalPanel(modalPanel: $ModalPanel): void;
        getTheme(): $Theme;
        onBack(): void;
        initGui(): void;
        updateGui(mx: number, my: number, pt: number): void;
        popModalPanel(): $ModalPanel;
        closeModalPanel(panel: $ModalPanel): void;
        anyModalPanelOpen(): boolean;
        onClosedByKey(key: $Key): boolean;
        setRenderBlur(renderBlur: boolean): void;
        doesGuiPauseGame(): boolean;
        getContextMenu(): ($ModalPanel) | undefined;
        openPopupMenu(popupMenu: $PopupMenu_): void;
        getPrevScreen(): $Screen;
        setPreviousScreen(prevScreen: $Screen): void;
        shouldRenderBlur(): boolean;
        openContextMenu(newContextMenu: $ContextMenu): void;
        openContextMenu(menuItems: $List_<$ContextMenuItem>): $ContextMenu;
        openDropdownMenu(dropDownMenu: $DropDownMenu): void;
        openDropdownMenu(menuItems: $List_<$ContextMenuItem>): $DropDownMenu;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(previousScreen: $Screen);
        constructor();
        get minecraft(): $Minecraft;
        set focusedWidget(value: $Widget);
        get maxZLevel(): number;
        get theme(): $Theme;
        set renderBlur(value: boolean);
        get contextMenu(): ($ModalPanel) | undefined;
        get prevScreen(): $Screen;
        set previousScreen(value: $Screen);
    }
    export class $WidgetLayout {
        static VERTICAL: $WidgetLayout;
        static NO_PADDING: $WidgetLayout$Padding;
        static HORIZONTAL: $WidgetLayout;
        static NONE: $WidgetLayout;
    }
    export interface $WidgetLayout {
        align(arg0: $Panel): number;
        getLayoutPadding(): $WidgetLayout$Padding;
        get layoutPadding(): $WidgetLayout$Padding;
    }
    /**
     * Values that may be interpreted as {@link $WidgetLayout}.
     */
    export type $WidgetLayout_ = ((arg0: $Panel) => number);
    export class $PopupMenu {
    }
    export interface $PopupMenu {
        getModalPanel(): $ModalPanel;
        get modalPanel(): $ModalPanel;
    }
    /**
     * Values that may be interpreted as {@link $PopupMenu}.
     */
    export type $PopupMenu_ = (() => $ModalPanel);
    export class $ContextMenuItem implements $Comparable<$ContextMenuItem> {
        compareTo(o: $ContextMenuItem): number;
        isEnabled(): boolean;
        static separator(): $ContextMenuItem;
        getTitle(): $Component;
        static title(title: $Component_): $ContextMenuItem;
        drawIcon(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getIcon(): $Icon;
        setEnabled(enabled: boolean): $ContextMenuItem;
        onClicked(button: $Button, panel: $Panel, mouseButton: $MouseButton): void;
        createWidget(panel: $ContextMenu): $Widget;
        addMouseOverText(list: $TooltipList): void;
        static subMenu(title: $Component_, icon: $Icon, subItems: $List_<$ContextMenuItem>): $ContextMenuItem;
        setCloseMenu(v: boolean): $ContextMenuItem;
        setYesNoText(s: $Component_): $ContextMenuItem;
        getYesNoText(): $Component;
        isClickable(): boolean;
        static SEPARATOR: $ContextMenuItem;
        constructor(title: $Component_, icon: $Icon, callback: $Consumer_<$Button>);
        get icon(): $Icon;
        set closeMenu(value: boolean);
        get clickable(): boolean;
    }
    export class $ModalPanel extends $Panel {
        getExtraZlevel(): number;
        setExtraZlevel(extraZlevel: number): void;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(panel: $Panel);
    }
    export class $Widget$DrawLayer extends $Enum<$Widget$DrawLayer> {
        static values(): $Widget$DrawLayer[];
        static valueOf(name: string): $Widget$DrawLayer;
        static FOREGROUND: $Widget$DrawLayer;
        static BACKGROUND: $Widget$DrawLayer;
    }
    /**
     * Values that may be interpreted as {@link $Widget$DrawLayer}.
     */
    export type $Widget$DrawLayer_ = "background" | "foreground";
    export class $IScreenWrapper {
    }
    export interface $IScreenWrapper extends $IOpenableScreen {
        getGui(): $BaseScreen;
        openGui(): void;
        closeGui(openPrevScreen: boolean): void;
        get gui(): $BaseScreen;
    }
    /**
     * Values that may be interpreted as {@link $IScreenWrapper}.
     */
    export type $IScreenWrapper_ = (() => $BaseScreen);
    export class $Widget implements $IScreenWrapper, $Comparable<$Widget> {
        getY(): number;
        compareTo(widget: $Widget): number;
        isEnabled(): boolean;
        getParent(): $Panel;
        tick(): void;
        setSize(w: number, h: number): void;
        getTitle(): $Component;
        isMouseOver(): boolean;
        mouseDragged(button: number, dragX: number, dragY: number): boolean;
        mouseReleased(button: $MouseButton): void;
        keyReleased(key: $Key): void;
        mouseScrolled(scroll: number): boolean;
        getWidth(): number;
        draw(graphics: $GuiGraphics, theme: $Theme, x: number, y: number, w: number, h: number): void;
        getGui(): $BaseScreen;
        getHeight(): number;
        getCursor(): $CursorType;
        static setClipboardString(string: string): void;
        getWidgetType(): $WidgetType;
        playClickSound(): void;
        collidesWith(x: number, y: number, w: number, h: number): boolean;
        static getClipboardString(): string;
        getDrawLayer(): $Widget$DrawLayer;
        setDrawLayer(drawLayer: $Widget$DrawLayer_): void;
        static isCtrlKeyDown(): boolean;
        setX(v: number): void;
        setY(v: number): void;
        static isMouseButtonDown(button: $MouseButton): boolean;
        shouldAddMouseOverText(): boolean;
        setPosAndSize(x: number, y: number, w: number, h: number): $Widget;
        shouldDraw(): boolean;
        setPos(x: number, y: number): void;
        setWidth(v: number): void;
        setHeight(v: number): void;
        /**
         * @deprecated
         */
        getScreen(): $Window;
        getWindow(): $Window;
        getMouseX(): number;
        getMouseY(): number;
        keyPressed(key: $Key): boolean;
        static isKeyDown(key: number): boolean;
        charTyped(c: string, modifiers: $KeyModifiers): boolean;
        getX(): number;
        mousePressed(button: $MouseButton): boolean;
        addMouseOverText(list: $TooltipList): void;
        mouseDoubleClicked(button: $MouseButton): boolean;
        static isShiftKeyDown(): boolean;
        isGhostIngredientTarget(ingredient: $Object): boolean;
        acceptGhostIngredient(ingredient: $Object): void;
        handleClick(click: string): boolean;
        handleClick(scheme: string, path: string): boolean;
        getPartialTicks(): number;
        getPosX(): number;
        getPosY(): number;
        onClosed(): void;
        getIngredientUnderMouse(): ($PositionedIngredient) | undefined;
        updateMouseOver(mouseX: number, mouseY: number): void;
        checkMouseOver(mouseX: number, mouseY: number): boolean;
        openGui(): void;
        closeGui(openPrevScreen: boolean): void;
        run(): void;
        openGuiLater(): void;
        closeContextMenu(): void;
        closeGui(): void;
        openAfter(runnable: $Runnable_): $Runnable;
        posX: number;
        posY: number;
        width: number;
        height: number;
        constructor(p: $Panel);
        get enabled(): boolean;
        get parent(): $Panel;
        get title(): $Component;
        get mouseOver(): boolean;
        get gui(): $BaseScreen;
        get cursor(): $CursorType;
        get widgetType(): $WidgetType;
        static get ctrlKeyDown(): boolean;
        get screen(): $Window;
        get window(): $Window;
        get mouseX(): number;
        get mouseY(): number;
        static get shiftKeyDown(): boolean;
        get partialTicks(): number;
        get ingredientUnderMouse(): ($PositionedIngredient) | undefined;
    }
}
