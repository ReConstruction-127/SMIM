import { RegistryTypes, RegistryMarked } from "@special/types";

declare module "@package/net/minecraft/world/entity/schedule" {
    export interface $Activity extends RegistryMarked<RegistryTypes.ActivityTag, RegistryTypes.Activity> {}
    export class $Activity {
        getName(): string;
        static CORE: $Activity;
        static ROAR: $Activity;
        static FIGHT: $Activity;
        static TONGUE: $Activity;
        static PLAY: $Activity;
        static PANIC: $Activity;
        static INVESTIGATE: $Activity;
        static CELEBRATE: $Activity;
        static RIDE: $Activity;
        static MEET: $Activity;
        static HIDE: $Activity;
        static DIG: $Activity;
        static PLAY_DEAD: $Activity;
        static LONG_JUMP: $Activity;
        static AVOID: $Activity;
        static RAID: $Activity;
        static SWIM: $Activity;
        static EMERGE: $Activity;
        static REST: $Activity;
        static IDLE: $Activity;
        static SNIFF: $Activity;
        static WORK: $Activity;
        static ADMIRE_ITEM: $Activity;
        static PRE_RAID: $Activity;
        static LAY_SPAWN: $Activity;
        static RAM: $Activity;
        constructor(name: string);
        get name(): string;
    }
    /**
     * Values that may be interpreted as {@link $Activity}.
     */
    export type $Activity_ = RegistryTypes.Activity;
    export interface $Schedule extends RegistryMarked<RegistryTypes.ScheduleTag, RegistryTypes.Schedule> {}
    export class $Schedule {
        getActivityAt(dayTime: number): $Activity;
        static WORK_START_TIME: number;
        static VILLAGER_DEFAULT: $Schedule;
        static VILLAGER_BABY: $Schedule;
        static SIMPLE: $Schedule;
        static TOTAL_WORK_TIME: number;
        static EMPTY: $Schedule;
        constructor();
    }
    /**
     * Values that may be interpreted as {@link $Schedule}.
     */
    export type $Schedule_ = RegistryTypes.Schedule;
}
