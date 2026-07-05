import { $Supplier_ } from "@package/java/util/function";
import { $MetricCategory_ } from "@package/net/minecraft/util/profiling/metrics";
import { $Path_ } from "@package/java/nio/file";
import { $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
export * as metrics from "@package/net/minecraft/util/profiling/metrics";

declare module "@package/net/minecraft/util/profiling" {
    export class $ResultField implements $Comparable<$ResultField> {
        compareTo(arg0: $ResultField): number;
        getColor(): number;
        globalPercentage: number;
        percentage: number;
        count: number;
        name: string;
        constructor(name: string, percentage: number, arg2: number, globalPercentage: number);
        get color(): number;
    }
    export class $ProfilerFiller {
        static tee(first: $ProfilerFiller, second: $ProfilerFiller): $ProfilerFiller;
        static ROOT: string;
    }
    export interface $ProfilerFiller {
        push(entryIdSupplier: $Supplier_<string>): void;
        push(entryId: string): void;
        /**
         * End section
         */
        pop(): void;
        markForCharting(category: $MetricCategory_): void;
        incrementCounter(entryId: string): void;
        incrementCounter(entryIdSupplier: $Supplier_<string>): void;
        incrementCounter(counterName: string, increment: number): void;
        incrementCounter(counterNameSupplier: $Supplier_<string>, increment: number): void;
        popPush(entryIdSupplier: $Supplier_<string>): void;
        popPush(entryId: string): void;
        /**
         * End section
         */
        startTick(): void;
        /**
         * End section
         */
        endTick(): void;
    }
    export class $ProfileResults {
        static demanglePath(path: string): string;
        static PATH_SEPARATOR: string;
    }
    export interface $ProfileResults {
        getTickDuration(): number;
        getNanoDuration(): number;
        getTimes(sectionPath: string): $List<$ResultField>;
        getEndTimeTicks(): number;
        getEndTimeNano(): number;
        saveResults(path: $Path_): boolean;
        getStartTimeTicks(): number;
        getStartTimeNano(): number;
        getProfilerResults(): string;
        get tickDuration(): number;
        get nanoDuration(): number;
        get endTimeTicks(): number;
        get endTimeNano(): number;
        get startTimeTicks(): number;
        get startTimeNano(): number;
        get profilerResults(): string;
    }
}
