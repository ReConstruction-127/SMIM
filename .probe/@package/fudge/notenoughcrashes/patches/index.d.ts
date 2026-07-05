import { $MetricsRecorder } from "@package/net/minecraft/util/profiling/metrics/profiling";

declare module "@package/fudge/notenoughcrashes/patches" {
    export class $MinecraftClientAccess {
    }
    export interface $MinecraftClientAccess {
        getRecorder(): $MetricsRecorder;
        setRecorder(arg0: $MetricsRecorder): void;
    }
}
