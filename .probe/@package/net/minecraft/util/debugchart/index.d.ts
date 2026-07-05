import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/util/debugchart" {
    export class $AbstractSampleLogger implements $SampleLogger {
        logSample(value: number): void;
        logPartialSample(value: number, arg1: number): void;
        logFullSample(sample: number[]): void;
    }
    export class $LocalSampleLogger extends $AbstractSampleLogger implements $SampleStorage {
        size(): number;
        reset(): void;
        get(index: number, dimension: number): number;
        get(index: number): number;
        capacity(): number;
        static CAPACITY: number;
        constructor(size: number);
        constructor(size: number, defaults: number[]);
    }
    export class $SampleLogger {
    }
    export interface $SampleLogger {
        logSample(value: number): void;
        logPartialSample(value: number, arg1: number): void;
        logFullSample(sample: number[]): void;
    }
    export class $SampleStorage {
    }
    export interface $SampleStorage {
        size(): number;
        reset(): void;
        get(index: number, dimension: number): number;
        get(index: number): number;
        capacity(): number;
    }
    export class $RemoteDebugSampleType extends $Enum<$RemoteDebugSampleType> {
        static values(): $RemoteDebugSampleType[];
        static valueOf(arg0: string): $RemoteDebugSampleType;
        static TICK_TIME: $RemoteDebugSampleType;
    }
    /**
     * Values that may be interpreted as {@link $RemoteDebugSampleType}.
     */
    export type $RemoteDebugSampleType_ = "tick_time";
}
