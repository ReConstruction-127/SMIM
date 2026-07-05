import { $Duration_ } from "@package/java/time";
import { $Consumer_ } from "@package/java/util/function";
import { $Callable_, $TimeUnit_, $Executor_ } from "@package/java/util/concurrent";
import { $TimeSource_ } from "@package/net/minecraft/util";

declare module "@package/com/mojang/realmsclient/gui/task" {
    export class $DataFetcher$Subscription {
        reset(): void;
        tick(): void;
        subscribe<T>(task: $DataFetcher$Task<T>, output: $Consumer_<T>): void;
        forceUpdate(): void;
        constructor(arg0: $DataFetcher);
    }
    export class $RepeatedDelayStrategy {
        static exponentialBackoff(maxFailureDelay: number): $RepeatedDelayStrategy;
        static CONSTANT: $RepeatedDelayStrategy;
    }
    export interface $RepeatedDelayStrategy {
        delayCyclesAfterFailure(): number;
        delayCyclesAfterSuccess(): number;
    }
    export class $DataFetcher {
        createSubscription(): $DataFetcher$Subscription;
        createTask<T>(id: string, updater: $Callable_<T>, period: $Duration_, repeatStrategy: $RepeatedDelayStrategy): $DataFetcher$Task<T>;
        constructor(executor: $Executor_, resolution: $TimeUnit_, timeSource: $TimeSource_);
    }
    export class $DataFetcher$Task<T> {
        reset(): void;
    }
}
