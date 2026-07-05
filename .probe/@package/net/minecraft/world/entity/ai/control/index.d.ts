import { $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/entity/ai/control" {
    export class $Control {
    }
    export interface $Control {
    }
    export class $JumpControl implements $Control {
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        jump(): void;
        /**
         * Called to actually make the entity jump if isJumping is true.
         */
        tick(): void;
        constructor(mob: $Mob);
    }
    export class $MoveControl implements $Control {
        tick(): void;
        strafe(forward: number, strafe: number): void;
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        /**
         * @return If the mob is currently trying to go somewhere
         */
        hasWanted(): boolean;
        getSpeedModifier(): number;
        /**
         * Sets the speed and location to move to
         */
        setWantedPosition(x: number, arg1: number, y: number, arg3: number): void;
        static MIN_SPEED_SQR: number;
        static MIN_SPEED: number;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
        get speedModifier(): number;
    }
    export class $LookControl implements $Control {
        /**
         * Updates look
         */
        tick(): void;
        getWantedX(): number;
        getWantedY(): number;
        getWantedZ(): number;
        /**
         * Sets the controlling mob's look vector to the provided entity's location
         */
        setLookAt(entity: $Entity): void;
        setLookAt(x: number, arg1: number, y: number): void;
        /**
         * Sets position to look at
         */
        setLookAt(x: number, arg1: number, y: number, arg3: number, z: number): void;
        /**
         * Sets the mob's look vector
         */
        setLookAt(lookVector: $Vec3_): void;
        /**
         * Sets position to look at using entity
         */
        setLookAt(entity: $Entity, deltaYaw: number, deltaPitch: number): void;
        isLookingAtTarget(): boolean;
        constructor(mob: $Mob);
        get wantedX(): number;
        get wantedY(): number;
        get wantedZ(): number;
        get lookingAtTarget(): boolean;
    }
}
