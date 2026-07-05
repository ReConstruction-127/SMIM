import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Pair } from "@package/it/unimi/dsi/fastutil";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/enderio/enderio/api/farm" {
    export class $FarmTaskType extends $Enum<$FarmTaskType> {
        priority(): number;
        static values(): $FarmTaskType[];
        static valueOf(arg0: string): $FarmTaskType;
        static PLANT: $FarmTaskType;
        static FERTILIZE: $FarmTaskType;
        static HARVEST: $FarmTaskType;
    }
    /**
     * Values that may be interpreted as {@link $FarmTaskType}.
     */
    export type $FarmTaskType_ = "plant" | "fertilize" | "harvest";
    export class $FarmInteraction extends $Enum<$FarmInteraction> {
        static values(): $FarmInteraction[];
        static valueOf(arg0: string): $FarmInteraction;
        static BLOCKED: $FarmInteraction;
        static FINISHED: $FarmInteraction;
        static IGNORED: $FarmInteraction;
    }
    /**
     * Values that may be interpreted as {@link $FarmInteraction}.
     */
    export type $FarmInteraction_ = "finished" | "blocked" | "ignored";
    export class $FarmTask {
    }
    export interface $FarmTask {
        process<T extends $BlockEntity>(arg0: $BlockPos_, arg1: T): $FarmInteraction;
    }
    /**
     * Values that may be interpreted as {@link $FarmTask}.
     */
    export type $FarmTask_ = ((arg0: $BlockPos, arg1: any) => $FarmInteraction_);
    export class $RegisterFarmTasksEvent extends $Event implements $IModBusEvent {
        register(arg0: $FarmTaskType_, arg1: $FarmTask_): void;
        getTasks(): $List<$Pair<$FarmTaskType, $FarmTask>>;
        constructor();
        get tasks(): $List<$Pair<$FarmTaskType, $FarmTask>>;
    }
}
