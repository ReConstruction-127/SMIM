import { $BehaviorControl } from "@package/net/minecraft/world/entity/ai/behavior";
import { $Supplier_ } from "@package/java/util/function";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $SensorType_, $Sensor } from "@package/net/minecraft/world/entity/ai/sensing";
import { $Dynamic, $DataResult, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Schedule, $Activity_, $Activity, $Schedule_ } from "@package/net/minecraft/world/entity/schedule";
import { $List, $Map, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $MemoryModuleType_, $MemoryModuleType, $MemoryStatus_, $ExpirableValue } from "@package/net/minecraft/world/entity/ai/memory";
export * as goal from "@package/net/minecraft/world/entity/ai/goal";
export * as sensing from "@package/net/minecraft/world/entity/ai/sensing";
export * as village from "@package/net/minecraft/world/entity/ai/village";
export * as attributes from "@package/net/minecraft/world/entity/ai/attributes";
export * as memory from "@package/net/minecraft/world/entity/ai/memory";
export * as control from "@package/net/minecraft/world/entity/ai/control";
export * as behavior from "@package/net/minecraft/world/entity/ai/behavior";
export * as targeting from "@package/net/minecraft/world/entity/ai/targeting";
export * as gossip from "@package/net/minecraft/world/entity/ai/gossip";
export * as navigation from "@package/net/minecraft/world/entity/ai/navigation";

declare module "@package/net/minecraft/world/entity/ai" {
    export class $Brain<E extends $LivingEntity> {
        static provider<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Brain$Provider<E>;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: (U) | undefined): void;
        setMemory<U>(memoryType: $MemoryModuleType_<U>, memory: U | null): void;
        isActive(activity: $Activity_): boolean;
        tick(level: $ServerLevel, entity: E): void;
        stopAll(level: $ServerLevel, entity: E): void;
        setActiveActivityIfPossible(activity: $Activity_): void;
        getSchedule(): $Schedule;
        static codec<E extends $LivingEntity>(memoryTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>): $Codec<$Brain<E>>;
        getMemory<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        setActiveActivityToFirstValid(activities: $List_<$Activity_>): void;
        checkMemory(memoryType: $MemoryModuleType_<never>, memoryStatus: $MemoryStatus_): boolean;
        eraseMemory<U>(type: $MemoryModuleType_<U>): void;
        setMemoryWithExpiry<U>(memoryType: $MemoryModuleType_<U>, memory: U, timeToLive: number): void;
        addActivityAndRemoveMemoryWhenStopped(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<E>>, memoryType: $MemoryModuleType_<never>): void;
        setSchedule(newSchedule: $Schedule_): void;
        setDefaultActivity(activity: $Activity_): void;
        useDefaultActivity(): void;
        addActivity(activity: $Activity_, priorityStart: number, tasks: $ImmutableList<$BehaviorControl<E>>): void;
        addActivity(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>): void;
        setCoreActivities(newActivities: $Set_<$Activity_>): void;
        isMemoryValue<U>(memoryType: $MemoryModuleType_<U>, memory: U): boolean;
        serializeStart<T>(ops: $DynamicOps<T>): $DataResult<T>;
        clearMemories(): void;
        getTimeUntilExpiry<U>(memoryType: $MemoryModuleType_<U>): number;
        updateActivityFromSchedule(dayTime: number, arg1: number): void;
        addActivityWithConditions(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>, memoryStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>): void;
        copyWithoutBehaviors(): $Brain<E>;
        getActiveNonCoreActivity(): ($Activity) | undefined;
        removeAllBehaviors(): void;
        hasMemoryValue(type: $MemoryModuleType_<never>): boolean;
        /**
         * @deprecated
         */
        getActiveActivities(): $Set<$Activity>;
        /**
         * @deprecated
         */
        getRunningBehaviors(): $List<$BehaviorControl<E>>;
        /**
         * @deprecated
         */
        getMemories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
        getMemoryInternal<U>(type: $MemoryModuleType_<U>): (U) | undefined;
        addActivityAndRemoveMemoriesWhenStopped(activity: $Activity_, tasks: $ImmutableList<$Pair<number, $BehaviorControl<E>>>, memorieStatuses: $Set_<$Pair<$MemoryModuleType_<never>, $MemoryStatus_>>, memoryTypes: $Set_<$MemoryModuleType_<never>>): void;
        constructor(memoryModuleTypes: $Collection_<$MemoryModuleType_<never>>, sensorTypes: $Collection_<$SensorType_<$Sensor<E>>>, memoryValues: $ImmutableList<$Brain$MemoryValue<never>>, codec: $Supplier_<$Codec<$Brain<E>>>);
        set activeActivityIfPossible(value: $Activity_);
        set activeActivityToFirstValid(value: $List_<$Activity_>);
        set defaultActivity(value: $Activity_);
        set coreActivities(value: $Set_<$Activity_>);
        get activeNonCoreActivity(): ($Activity) | undefined;
        get activeActivities(): $Set<$Activity>;
        get runningBehaviors(): $List<$BehaviorControl<E>>;
        get memories(): $Map<$MemoryModuleType<never>, ($ExpirableValue<never>) | undefined>;
    }
    export class $Brain$MemoryValue<U> {
    }
    export class $Brain$Provider<E extends $LivingEntity> {
        makeBrain(ops: $Dynamic<never>): $Brain<E>;
    }
}
