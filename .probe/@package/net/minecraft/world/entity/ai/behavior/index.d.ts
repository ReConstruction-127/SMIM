import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Enum } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/behavior" {
    export class $BehaviorControl<E extends $LivingEntity> {
    }
    export interface $BehaviorControl<E extends $LivingEntity> {
        debugString(): string;
        getStatus(): $Behavior$Status;
        tryStart(level: $ServerLevel, entity: E, gameTime: number): boolean;
        doStop(level: $ServerLevel, entity: E, gameTime: number): void;
        tickOrStop(level: $ServerLevel, entity: E, gameTime: number): void;
        get status(): $Behavior$Status;
    }
    export class $PositionTracker {
    }
    export interface $PositionTracker {
        currentPosition(): $Vec3;
        isVisibleBy(entity: $LivingEntity): boolean;
        currentBlockPosition(): $BlockPos;
    }
    export class $Behavior$Status extends $Enum<$Behavior$Status> {
        static values(): $Behavior$Status[];
        static valueOf(arg0: string): $Behavior$Status;
        static RUNNING: $Behavior$Status;
        static STOPPED: $Behavior$Status;
    }
    /**
     * Values that may be interpreted as {@link $Behavior$Status}.
     */
    export type $Behavior$Status_ = "stopped" | "running";
}
