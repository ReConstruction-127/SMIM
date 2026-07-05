import { $Int2DoubleMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $DoubleSupplier_, $Consumer_, $ToDoubleFunction_ } from "@package/java/util/function";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
export * as profiling from "@package/net/minecraft/util/profiling/metrics/profiling";

declare module "@package/net/minecraft/util/profiling/metrics" {
    export class $MetricSampler {
        getName(): string;
        static builder<T>(name: string, category: $MetricCategory_, sampler: $ToDoubleFunction_<T>, context: T): $MetricSampler$MetricSamplerBuilder<T>;
        result(): $MetricSampler$SamplerResult;
        static create<T>(name: string, category: $MetricCategory_, context: T, sampler: $ToDoubleFunction_<T>): $MetricSampler;
        static create(name: string, category: $MetricCategory_, sampler: $DoubleSupplier_): $MetricSampler;
        getCategory(): $MetricCategory;
        triggersThreshold(): boolean;
        onStartTick(): void;
        onFinished(): void;
        onEndTick(tickTime: number): void;
        get name(): string;
        get category(): $MetricCategory;
    }
    export class $MetricSampler$MetricSamplerBuilder<T> {
        build(): $MetricSampler;
        withThresholdAlert(thresholdTest: $MetricSampler$ThresholdTest_): $MetricSampler$MetricSamplerBuilder<T>;
        withBeforeTick(beforeTick: $Consumer_<T>): $MetricSampler$MetricSamplerBuilder<T>;
        constructor(name: string, category: $MetricCategory_, sampler: $ToDoubleFunction_<T>, context: T);
    }
    export class $ProfilerMeasured {
    }
    export interface $ProfilerMeasured {
        profiledMetrics(): $List<$MetricSampler>;
    }
    /**
     * Values that may be interpreted as {@link $ProfilerMeasured}.
     */
    export type $ProfilerMeasured_ = (() => $List_<$MetricSampler>);
    export class $MetricCategory extends $Enum<$MetricCategory> {
        getDescription(): string;
        static values(): $MetricCategory[];
        static valueOf(arg0: string): $MetricCategory;
        static JVM: $MetricCategory;
        static PATH_FINDING: $MetricCategory;
        static EVENT_LOOPS: $MetricCategory;
        static TICK_LOOP: $MetricCategory;
        static CHUNK_RENDERING: $MetricCategory;
        static CPU: $MetricCategory;
        static MAIL_BOXES: $MetricCategory;
        static CHUNK_RENDERING_DISPATCHING: $MetricCategory;
        static GPU: $MetricCategory;
        get description(): string;
    }
    /**
     * Values that may be interpreted as {@link $MetricCategory}.
     */
    export type $MetricCategory_ = "path_finding" | "event_loops" | "mail_boxes" | "tick_loop" | "jvm" | "chunk_rendering" | "chunk_rendering_dispatching" | "cpu" | "gpu";
    export class $MetricSampler$SamplerResult {
        getLastTick(): number;
        getFirstTick(): number;
        valueAtTick(tick: number): number;
        constructor(firstTick: number, lastTick: number, recording: $Int2DoubleMap);
        get lastTick(): number;
        get firstTick(): number;
    }
    export class $MetricSampler$ThresholdTest {
    }
    export interface $MetricSampler$ThresholdTest {
        test(value: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MetricSampler$ThresholdTest}.
     */
    export type $MetricSampler$ThresholdTest_ = ((arg0: number) => boolean);
}
