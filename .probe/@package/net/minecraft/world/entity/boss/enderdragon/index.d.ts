import { $Level_ } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $EnderDragonPart } from "@package/net/minecraft/world/entity/boss";
import { $EntityType_, $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $AttributeSupplier$Builder } from "@package/net/minecraft/world/entity/ai/attributes";
import { $EndDragonFight } from "@package/net/minecraft/world/level/dimension/end";
import { $EnderDragonPhaseManager } from "@package/net/minecraft/world/entity/boss/enderdragon/phases";
import { $EntityDataAccessor } from "@package/net/minecraft/network/syncher";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $Path, $Node } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Enemy } from "@package/net/minecraft/world/entity/monster";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
export * as phases from "@package/net/minecraft/world/entity/boss/enderdragon/phases";

declare module "@package/net/minecraft/world/entity/boss/enderdragon" {
    export class $EnderDragon extends $Mob implements $Enemy {
        /**
         * Find and return a path among the circles described by pathPoints, or null if the shortest path would just be directly between the start and finish with no intermediate points.
         * 
         * Starting with pathPoint[startIdx], it searches the neighboring points (and their neighboring points, and so on) until it reaches pathPoint[finishIdx], at which point it calls makePath to seal the deal.
         */
        findPath(startIndex: number, finishIndex: number, andThen: $Node | null): $Path;
        getHeadPartYOffset(partIndex: number, spineEndOffsets: number[], headPartOffsets: number[]): number;
        /**
         * Returns a double[3] array with movement offsets, used to calculate trailing tail/neck positions. [0] = yaw offset, [1] = y offset, [2] = unused, always 0. Parameters: buffer index offset, partial ticks.
         */
        getLatencyPos(bufferIndexOffset: number, partialTicks: number): number[];
        /**
         * Generates values for the fields pathPoints, and neighbors, and then returns the nearest pathPoint to the specified position.
         */
        findClosestNode(): number;
        /**
         * Returns the index into pathPoints of the nearest PathPoint.
         */
        findClosestNode(x: number, arg1: number, y: number): number;
        onCrystalDestroyed(crystal: $EndCrystal, pos: $BlockPos_, damageSource: $DamageSource_): void;
        setFightOrigin(fightOrigin: $BlockPos_): void;
        getSubEntities(): $EnderDragonPart[];
        getFightOrigin(): $BlockPos;
        getPhaseManager(): $EnderDragonPhaseManager;
        getHeadLookVector(partialTicks: number): $Vec3;
        /**
         * Called every tick so the entity can update its state as required. For example, zombies and skeletons use this to react to sunlight and start to burn.
         */
        onFlap(): void;
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        isFlapping(): boolean;
        hurt(part: $EnderDragonPart, source: $DamageSource_, damage: number): boolean;
        setDragonFight(dragonFight: $EndDragonFight): void;
        getDragonFight(): $EndDragonFight;
        static createAttributes(): $AttributeSupplier$Builder;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        posPointer: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        noPhysics: boolean;
        yo: number;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        goalSelector: $GoalSelector;
        swingingArm: $InteractionHand;
        static ID_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        hurtDuration: number;
        oFlapTime: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        flapTime: number;
        static DEFAULT_BABY_SCALE: number;
        static DATA_PHASE: $EntityDataAccessor<number>;
        static ATTRIBUTES_FIELD: string;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        xxa: number;
        flyDist: number;
        static PASSENGERS_TAG: string;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        nearestCrystal: $EndCrystal;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        tickCount: number;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        static BOARDING_COOLDOWN: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        moveDist: number;
        positions: number[][];
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        yRotA: number;
        create_diesel_generators$turretPos: $BlockPos;
        xOld: number;
        wasInPowderSnow: boolean;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        head: $EnderDragonPart;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        dragonDeathTime: number;
        inWall: boolean;
        yBodyRot: number;
        blocksBuilding: boolean;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        constructor(entityType: $EntityType_<$EnderDragon>, level: $Level_);
        get subEntities(): $EnderDragonPart[];
        get phaseManager(): $EnderDragonPhaseManager;
        get flapping(): boolean;
    }
    export class $EndCrystal extends $Entity {
        /**
         * Returns `true` if other Entities should be prevented from moving through this Entity.
         */
        showsBottom(): boolean;
        getBeamTarget(): $BlockPos;
        setBeamTarget(beamTarget: $BlockPos_ | null): void;
        setShowBottom(showBottom: boolean): void;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        invulnerableTime: number;
        static UUID_TAG: string;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        hasImpulse: boolean;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        tickCount: number;
        noPhysics: boolean;
        yo: number;
        yOld: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        static BOARDING_COOLDOWN: number;
        static DEFAULT_BB_HEIGHT: number;
        removalReason: $Entity$RemovalReason;
        yRotO: number;
        static CONTENTS_SLOT_INDEX: number;
        walkDistO: number;
        moveDist: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        static PASSENGERS_TAG: string;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        blocksBuilding: boolean;
        xRotO: number;
        wasOnFire: boolean;
        zo: number;
        zOld: number;
        create_diesel_generators$turretPos: $BlockPos;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        time: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        horizontalCollision: boolean;
        constructor(entityType: $EntityType_<$EndCrystal>, level: $Level_);
        constructor(level: $Level_, x: number, arg2: number, y: number);
        set showBottom(value: boolean);
    }
}
