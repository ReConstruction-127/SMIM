import { $ModuleSession } from "@package/xaero/hud/module";
import { $Iterable } from "@package/java/lang";

declare module "@package/xaero/hud/pushbox" {
    export class $PushboxManager {
        add(arg0: $PushBox): void;
        getAll(): $Iterable<$PushBox>;
        constructor();
        get all(): $Iterable<$PushBox>;
    }
    export class $PushboxHandler {
        postUpdateAll(arg0: $PushboxManager): void;
        applyPushboxes(arg0: $PushboxManager, arg1: $PushboxHandler$State, arg2: number, arg3: number, arg4: number): void;
        applyScreenEdges(arg0: $PushboxHandler$State, arg1: number, arg2: number, arg3: number): void;
        updateAll(arg0: $PushboxManager): void;
        constructor();
    }
    export class $PushboxHandler$State {
        resetForModule(arg0: $ModuleSession<never>, arg1: number, arg2: number, arg3: number): $PushboxHandler$State;
        w: number;
        x: number;
        h: number;
        y: number;
        constructor();
    }
}
