import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RenderableResource } from "@package/de/keksuccino/fancymenu/util/resource";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";
import { $IAudio } from "@package/de/keksuccino/fancymenu/util/resource/resources/audio";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Runnable_, $Runnable, $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $DrawableColor } from "@package/de/keksuccino/fancymenu/util/rendering";

declare module "@package/de/keksuccino/fancymenu/util/rendering/ui/widget" {
    export class $CustomizableWidget$CustomBackgroundResetBehavior extends $Enum<$CustomizableWidget$CustomBackgroundResetBehavior> {
        static values(): $CustomizableWidget$CustomBackgroundResetBehavior[];
        static valueOf(arg0: string): $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_NEVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
        static RESET_ON_HOVER_AND_UNHOVER: $CustomizableWidget$CustomBackgroundResetBehavior;
    }
    /**
     * Values that may be interpreted as {@link $CustomizableWidget$CustomBackgroundResetBehavior}.
     */
    export type $CustomizableWidget$CustomBackgroundResetBehavior_ = "reset_never" | "reset_on_hover" | "reset_on_unhover" | "reset_on_hover_and_unhover";
    export class $UniqueWidget {
    }
    export interface $UniqueWidget {
        setWidgetIdentifierFancyMenu(arg0: string): $AbstractWidget;
        getWidgetIdentifierFancyMenu(): string;
    }
    export class $CustomizableWidget {
    }
    export interface $CustomizableWidget {
        getFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        setCustomBackgroundNormalFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundHoverFancyMenu(arg0: $RenderableResource): void;
        setCustomClickSoundFancyMenu(arg0: $IAudio): void;
        isUnderlineLabelOnHoverFancyMenu(): boolean;
        setNineSliceBorderX_FancyMenu(arg0: number): void;
        getHoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getLastHoverOrFocusStateFancyMenu(): boolean;
        getCustomBackgroundHoverFancyMenu(): $RenderableResource;
        getLabelHoverColorFancyMenu(): $DrawableColor;
        setNineSliceBorderTop_FancyMenu(arg0: number): void;
        setUnderlineLabelOnHoverFancyMenu(arg0: boolean): void;
        setNineSliceBorderRight_FancyMenu(arg0: number): void;
        addFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        setNineSliceBorderY_FancyMenu(arg0: number): void;
        setNineSliceBorderLeft_FancyMenu(arg0: number): void;
        setLastHoverOrFocusStateFancyMenu(arg0: boolean): void;
        getCustomBackgroundNormalFancyMenu(): $RenderableResource;
        addHoverStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        setLabelHoverColorFancyMenu(arg0: $DrawableColor): void;
        tickHoverStateListenersFancyMenu(arg0: boolean): void;
        getCustomClickSoundFancyMenu(): $IAudio;
        setNineSliceBorderBottom_FancyMenu(arg0: number): void;
        tickFocusStateListenersFancyMenu(arg0: boolean): void;
        renderCustomBackgroundFancyMenu(arg0: $AbstractWidget, arg1: $GuiGraphics, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        stopCustomClickSoundFancyMenu(): void;
        getOriginalMessageFancyMenu(): $Component;
        getHitboxRotationDegreesFancyMenu(): number;
        isLabelShadowFancyMenu(): boolean;
        setCustomYFancyMenu(arg0: number): void;
        setCustomWidthFancyMenu(arg0: number): void;
        setHoverLabelFancyMenu(arg0: $Component_): void;
        getLastHoverStateFancyMenu(): boolean;
        setLastHoverStateFancyMenu(arg0: boolean): void;
        setLastFocusStateFancyMenu(arg0: boolean): void;
        setUnhoverSoundFancyMenu(arg0: $IAudio): void;
        getHoverLabelFancyMenu(): $Component;
        setCustomLabelFancyMenu(arg0: $Component_): void;
        setCustomHeightFancyMenu(arg0: number): void;
        setLabelBaseColorFancyMenu(arg0: $DrawableColor): void;
        getLabelBaseColorFancyMenu(): $DrawableColor;
        getLabelScaleFancyMenu(): number;
        getUnhoverSoundFancyMenu(): $IAudio;
        getHoverSoundFancyMenu(): $IAudio;
        setLabelShadowFancyMenu(arg0: boolean): void;
        setLabelScaleFancyMenu(arg0: number): void;
        setHoverSoundFancyMenu(arg0: $IAudio): void;
        resolveLabelScaleFancyMenu(): number;
        setHitboxRotationFancyMenu(arg0: number, arg1: number, arg2: number): void;
        getLastFocusStateFancyMenu(): boolean;
        getCustomLabelFancyMenu(): $Component;
        setCustomXFancyMenu(arg0: number): void;
        getCustomWidthFancyMenu(): number;
        getCustomHeightFancyMenu(): number;
        getCustomXFancyMenu(): number;
        getCustomYFancyMenu(): number;
        stopUnhoverSoundFancyMenu(): void;
        stopHoverSoundFancyMenu(): void;
        addHoverOrFocusStateListenerFancyMenu(arg0: $Consumer_<boolean>): void;
        getHoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        getCustomBackgroundInactiveFancyMenu(): $RenderableResource;
        tickHoverOrFocusStateListenersFancyMenu(arg0: boolean): void;
        setCustomBackgroundInactiveFancyMenu(arg0: $RenderableResource): void;
        setCustomBackgroundResetBehaviorFancyMenu(arg0: $CustomizableWidget$CustomBackgroundResetBehavior_): void;
        resetWidgetSizeAndPositionFancyMenu(): void;
        getResetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        addResetCustomizationsListenerFancyMenu(arg0: $Runnable_): void;
        setNineSliceCustomBackground_FancyMenu(arg0: boolean): void;
        getCustomBackgroundResetBehaviorFancyMenu(): $CustomizableWidget$CustomBackgroundResetBehavior;
        isHiddenFancyMenu(): boolean;
        isNineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        getNineSliceCustomBackgroundBorderX_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderY_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        getNineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        resetWidgetCustomizationsFancyMenu(): void;
        getHitboxVerticalTiltDegreesFancyMenu(): number;
        getHitboxHorizontalTiltDegreesFancyMenu(): number;
        setHiddenFancyMenu(arg0: boolean): void;
        get focusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderX_FancyMenu(value: number);
        get hoverStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        set nineSliceBorderTop_FancyMenu(value: number);
        set nineSliceBorderRight_FancyMenu(value: number);
        set nineSliceBorderY_FancyMenu(value: number);
        set nineSliceBorderLeft_FancyMenu(value: number);
        set nineSliceBorderBottom_FancyMenu(value: number);
        get originalMessageFancyMenu(): $Component;
        get hitboxRotationDegreesFancyMenu(): number;
        get hoverOrFocusStateListenersFancyMenu(): $List<$Consumer<boolean>>;
        get resetCustomizationsListenersFancyMenu(): $List<$Runnable>;
        set nineSliceCustomBackground_FancyMenu(value: boolean);
        get nineSliceCustomBackgroundTexture_FancyMenu(): boolean;
        get nineSliceCustomBackgroundBorderX_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderBottom_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderY_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderRight_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderTop_FancyMenu(): number;
        get nineSliceCustomBackgroundBorderLeft_FancyMenu(): number;
        get hitboxVerticalTiltDegreesFancyMenu(): number;
        get hitboxHorizontalTiltDegreesFancyMenu(): number;
    }
}
