import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/preset" {
    export class $HudPresetManager {
        register(arg0: $HudPreset): void;
        getPresets(): $Iterable<$HudPreset>;
        constructor();
        get presets(): $Iterable<$HudPreset>;
    }
}
