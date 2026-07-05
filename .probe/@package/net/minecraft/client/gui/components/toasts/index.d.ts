import { $SoundManager } from "@package/net/minecraft/client/sounds";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $Minecraft } from "@package/net/minecraft/client";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $List } from "@package/java/util";
import { $Object, $Enum, $Class } from "@package/java/lang";

declare module "@package/net/minecraft/client/gui/components/toasts" {
    export class $ToastComponent {
        clear(): void;
        render(guiGraphics: $GuiGraphics): void;
        getMinecraft(): $Minecraft;
        handler$com000$embeddium_extra$goodByeToasts(ci: $CallbackInfo): void;
        getNotificationDisplayTimeMultiplier(): number;
        getToast<T extends $Toast>(toastClass: $Class<T>, token: $Object): T;
        addToast(toast: $Toast_): void;
        visible: $List<$ToastComponent$ToastInstance<never>>;
        constructor(minecraft: $Minecraft);
        get minecraft(): $Minecraft;
        get notificationDisplayTimeMultiplier(): number;
    }
    export class $Toast$Visibility extends $Enum<$Toast$Visibility> {
        static values(): $Toast$Visibility[];
        static valueOf(arg0: string): $Toast$Visibility;
        playSound(handler: $SoundManager): void;
        static HIDE: $Toast$Visibility;
        static SHOW: $Toast$Visibility;
    }
    /**
     * Values that may be interpreted as {@link $Toast$Visibility}.
     */
    export type $Toast$Visibility_ = "show" | "hide";
    export class $Toast {
        static NO_TOKEN: $Object;
        static SLOT_HEIGHT: number;
    }
    export interface $Toast {
        slotCount(): number;
        width(): number;
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        height(): number;
        getToken(): $Object;
        get token(): $Object;
    }
    /**
     * Values that may be interpreted as {@link $Toast}.
     */
    export type $Toast_ = ((arg0: $GuiGraphics, arg1: $ToastComponent, arg2: number) => $Toast$Visibility_);
    export class $TutorialToast$Icons extends $Enum<$TutorialToast$Icons> {
        static values(): $TutorialToast$Icons[];
        static valueOf(arg0: string): $TutorialToast$Icons;
        render(guiGraphics: $GuiGraphics, x: number, y: number): void;
        static MOUSE: $TutorialToast$Icons;
        static WOODEN_PLANKS: $TutorialToast$Icons;
        static MOVEMENT_KEYS: $TutorialToast$Icons;
        static RIGHT_CLICK: $TutorialToast$Icons;
        static TREE: $TutorialToast$Icons;
        static SOCIAL_INTERACTIONS: $TutorialToast$Icons;
        static RECIPE_BOOK: $TutorialToast$Icons;
    }
    /**
     * Values that may be interpreted as {@link $TutorialToast$Icons}.
     */
    export type $TutorialToast$Icons_ = "movement_keys" | "mouse" | "tree" | "recipe_book" | "wooden_planks" | "social_interactions" | "right_click";
    export class $ToastComponent$ToastInstance<T extends $Toast> {
        render(screenWidth: number, guiGraphics: $GuiGraphics): boolean;
        getToast(): T;
        get toast(): T;
    }
    export class $TutorialToast implements $Toast {
        render(guiGraphics: $GuiGraphics, toastComponent: $ToastComponent, timeSinceLastVisible: number): $Toast$Visibility;
        updateProgress(progress: number): void;
        hide(): void;
        handler$con003$embeddium_extra$draw(context: $GuiGraphics, manager: $ToastComponent, startTime: number, cir: $CallbackInfoReturnable<any>): void;
        slotCount(): number;
        width(): number;
        height(): number;
        getToken(): $Object;
        static PROGRESS_BAR_HEIGHT: number;
        static PROGRESS_BAR_X: number;
        static PROGRESS_BAR_WIDTH: number;
        static PROGRESS_BAR_Y: number;
        constructor(icon: $TutorialToast$Icons_, title: $Component_, message: $Component_ | null, progressable: boolean);
        get token(): $Object;
    }
}
