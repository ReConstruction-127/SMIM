import { $IGridNode } from "@package/appeng/api/networking";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Class } from "@package/java/lang";

declare module "@package/appeng/api/networking/security" {
    export class $IActionSource {
        static empty(): $IActionSource;
        static ofPlayer(arg0: $Player, arg1: $IActionHost_): $IActionSource;
        static ofPlayer(arg0: $Player): $IActionSource;
        static ofMachine(arg0: $IActionHost_): $IActionSource;
    }
    export interface $IActionSource {
        context<T>(arg0: $Class<T>): (T) | undefined;
        player(): ($Player) | undefined;
        machine(): ($IActionHost) | undefined;
    }
    export class $IActionHost {
    }
    export interface $IActionHost {
        getActionableNode(): $IGridNode;
        get actionableNode(): $IGridNode;
    }
    /**
     * Values that may be interpreted as {@link $IActionHost}.
     */
    export type $IActionHost_ = (() => $IGridNode);
}
