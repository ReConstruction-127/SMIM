import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/entity/boss/enderdragon/phases" {
    export class $DragonPhaseInstance {
    }
    export interface $DragonPhaseInstance {
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, damageSource: $DamageSource_, player: $Player | null): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        getPhase(): $EnderDragonPhase<$DragonPhaseInstance>;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        isSitting(): boolean;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        get flySpeed(): number;
        get turnSpeed(): number;
        get phase(): $EnderDragonPhase<$DragonPhaseInstance>;
        get flyTargetLocation(): $Vec3;
        get sitting(): boolean;
    }
    export class $DragonLandingPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonSittingPhase extends $AbstractDragonPhaseInstance {
        constructor(arg0: $EnderDragon);
    }
    export class $DragonHoverPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $DragonChargePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(targetLocation: $Vec3_): void;
        constructor(dragon: $EnderDragon);
        set target(value: $Vec3_);
    }
    export class $DragonStrafePlayerPhase extends $AbstractDragonPhaseInstance {
        setTarget(attackTarget: $LivingEntity): void;
        constructor(dragon: $EnderDragon);
        set target(value: $LivingEntity);
    }
    export class $DragonLandingApproachPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $DragonSittingFlamingPhase extends $AbstractDragonSittingPhase {
        /**
         * Called when this phase is set to active
         */
        resetFlameCount(): void;
        constructor(dragon: $EnderDragon);
    }
    export class $DragonSittingScanningPhase extends $AbstractDragonSittingPhase {
        constructor(dragon: $EnderDragon);
    }
    export class $DragonDeathPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $EnderDragonPhaseManager {
        getCurrentPhase(): $DragonPhaseInstance;
        getPhase<T extends $DragonPhaseInstance>(phase: $EnderDragonPhase<T>): T;
        setPhase(phase: $EnderDragonPhase<never>): void;
        constructor(dragon: $EnderDragon);
        get currentPhase(): $DragonPhaseInstance;
    }
    export class $DragonTakeoffPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $DragonHoldingPatternPhase extends $AbstractDragonPhaseInstance {
        constructor(dragon: $EnderDragon);
    }
    export class $EnderDragonPhase<T extends $DragonPhaseInstance> {
        getId(): number;
        static getCount(): number;
        createInstance(dragon: $EnderDragon): $DragonPhaseInstance;
        /**
         * Gets a phase by its ID. If the phase is out of bounds (negative or beyond the end of the phase array), returns `#HOLDING_PATTERN`.
         */
        static getById(id: number): $EnderDragonPhase<never>;
        static HOVERING: $EnderDragonPhase<$DragonHoverPhase>;
        static STRAFE_PLAYER: $EnderDragonPhase<$DragonStrafePlayerPhase>;
        static SITTING_FLAMING: $EnderDragonPhase<$DragonSittingFlamingPhase>;
        static HOLDING_PATTERN: $EnderDragonPhase<$DragonHoldingPatternPhase>;
        static LANDING: $EnderDragonPhase<$DragonLandingPhase>;
        static CHARGING_PLAYER: $EnderDragonPhase<$DragonChargePlayerPhase>;
        static LANDING_APPROACH: $EnderDragonPhase<$DragonLandingApproachPhase>;
        static DYING: $EnderDragonPhase<$DragonDeathPhase>;
        static SITTING_SCANNING: $EnderDragonPhase<$DragonSittingScanningPhase>;
        static TAKEOFF: $EnderDragonPhase<$DragonTakeoffPhase>;
        static SITTING_ATTACKING: $EnderDragonPhase<$DragonSittingAttackingPhase>;
        get id(): number;
        static get count(): number;
    }
    export class $DragonSittingAttackingPhase extends $AbstractDragonSittingPhase {
        constructor(dragon: $EnderDragon);
    }
    export class $AbstractDragonPhaseInstance implements $DragonPhaseInstance {
        /**
         * Called when this phase is set to active
         */
        begin(): void;
        /**
         * Called when this phase is set to active
         */
        end(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getFlySpeed(): number;
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, dmgSrc: $DamageSource_, plyr: $Player | null): void;
        /**
         * Called when this phase is set to active
         */
        doServerTick(): void;
        /**
         * Called when this phase is set to active
         */
        doClientTick(): void;
        /**
         * Returns the maximum amount dragon may rise or fall during this phase
         */
        getTurnSpeed(): number;
        /**
         * Returns the location the dragon is flying toward
         */
        getFlyTargetLocation(): $Vec3;
        isSitting(): boolean;
        onHurt(damageSource: $DamageSource_, amount: number): number;
        constructor(dragon: $EnderDragon);
        get flySpeed(): number;
        get turnSpeed(): number;
        get flyTargetLocation(): $Vec3;
        get sitting(): boolean;
    }
}
