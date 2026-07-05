import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";

declare module "@package/net/minecraft/util/profiling/metrics/profiling" {
    export class $MetricsRecorder {
    }
    export interface $MetricsRecorder {
        end(): void;
        cancel(): void;
        isRecording(): boolean;
        getProfiler(): $ProfilerFiller;
        startTick(): void;
        endTick(): void;
        get recording(): boolean;
        get profiler(): $ProfilerFiller;
    }
}
