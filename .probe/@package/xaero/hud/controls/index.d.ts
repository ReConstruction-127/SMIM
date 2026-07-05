import { $Consumer_ } from "@package/java/util/function";
import { $KeyMapping } from "@package/net/minecraft/client";
import { $KeyMappingControllerManager } from "@package/xaero/hud/controls/key";
export * as key from "@package/xaero/hud/controls/key";

declare module "@package/xaero/hud/controls" {
    export class $ControlsRegister {
        getKeyMappingControllers(): $KeyMappingControllerManager;
        onStage2(): void;
        registerKeybindings(arg0: $Consumer_<$KeyMapping>): void;
        get keyMappingControllers(): $KeyMappingControllerManager;
    }
}
