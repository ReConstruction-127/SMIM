import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";

declare module "@package/dev/ftb/mods/ftblibrary/ui/input" {
    export class $Key {
        enter(): boolean;
        copy(): boolean;
        is(k: number): boolean;
        cut(): boolean;
        esc(): boolean;
        paste(): boolean;
        selectAll(): boolean;
        backspace(): boolean;
        escOrInventory(): boolean;
        deselectAll(): boolean;
        getInputMapping(): $InputConstants$Key;
        keyCode: number;
        modifiers: $KeyModifiers;
        scanCode: number;
        constructor(k: number, s: number, m: number);
        get inputMapping(): $InputConstants$Key;
    }
    export class $KeyModifiers {
        start(): boolean;
        shift(): boolean;
        control(): boolean;
        alt(): boolean;
        capsLock(): boolean;
        numLock(): boolean;
        onlyControl(): boolean;
        static NONE: $KeyModifiers;
        modifiers: number;
        constructor(m: number);
    }
    export class $MouseButton {
        static get(i: number): $MouseButton;
        getId(): number;
        isLeft(): boolean;
        isRight(): boolean;
        isMiddle(): boolean;
        static LEFT: $MouseButton;
        static NEXT: $MouseButton;
        static RIGHT: $MouseButton;
        static BACK: $MouseButton;
        id: number;
        static MIDDLE: $MouseButton;
        get left(): boolean;
        get right(): boolean;
        get middle(): boolean;
    }
}
