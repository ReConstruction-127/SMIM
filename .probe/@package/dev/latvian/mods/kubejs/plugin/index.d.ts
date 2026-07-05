import { $Event } from "@package/net/neoforged/bus/api";
import { $Class } from "@package/java/lang";
import { $ScriptType_, $ScriptType } from "@package/dev/latvian/mods/kubejs/script";
export * as builtin from "@package/dev/latvian/mods/kubejs/plugin/builtin";

declare module "@package/dev/latvian/mods/kubejs/plugin" {
    export class $KubeJSPluginEvent extends $Event {
        constructor();
    }
    export class $ClassFilter {
        allow(c: $Class<never>): void;
        allow(s: string): void;
        deny(c: $Class<never>): void;
        deny(s: string): void;
        isAllowed(s: string): boolean;
        scriptType: $ScriptType;
        constructor(scriptType: $ScriptType_);
    }
}
