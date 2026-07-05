import { $Level } from "@package/net/minecraft/world/level";
import { $GoalSelector } from "@package/net/minecraft/world/entity/ai/goal";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $SavedData, $SavedData$Factory } from "@package/net/minecraft/world/level/saveddata";
import { $Set } from "@package/java/util";
import { $InteractionHand, $Difficulty_ } from "@package/net/minecraft/world";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_, $Holder_, $HolderGetter } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $PatrollingMonster } from "@package/net/minecraft/world/entity/monster";
import { $DimensionType } from "@package/net/minecraft/world/level/dimension";
import { $BannerPattern_ } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/minecraft/world/entity/raid" {
    export class $Raids extends $SavedData {
        get(id: number): $Raid;
        static load(level: $ServerLevel, tag: $CompoundTag_): $Raids;
        static factory(level: $ServerLevel): $SavedData$Factory<$Raids>;
        /**
         * Marks this `SavedData` dirty, to be saved to disk when the level next saves.
         */
        tick(): void;
        static canJoinRaid(raider: $Raider, raid: $Raid): boolean;
        getNearbyRaid(pos: $BlockPos_, distance: number): $Raid;
        static getFileId(dimensionTypeHolder: $Holder_<$DimensionType>): string;
        createOrExtendRaid(player: $ServerPlayer, pos: $BlockPos_): $Raid;
        constructor(level: $ServerLevel);
    }
    export class $Raider extends $PatrollingMonster {
        applyRaidBuffs(level: $ServerLevel, wave: number, unused: boolean): void;
        getCurrentRaid(): $Raid;
        setCelebrating(canJoinRaid: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasActiveRaid(): boolean;
        getCelebrateSound(): $SoundEvent;
        setCurrentRaid(raid: $Raid | null): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        canJoinRaid(): boolean;
        setCanJoinRaid(canJoinRaid: boolean): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCelebrating(): boolean;
        setTicksOutsideRaid(ticksOutsideRaid: number): void;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getTicksOutsideRaid(): number;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        isCaptain(): boolean;
        setWave(ticksOutsideRaid: number): void;
        /**
         * If a rider of this entity can interact with this entity. Should return true on the
         * ridden entity if so.
         */
        hasRaid(): boolean;
        /**
         * Returns the current armor value as determined by a call to InventoryPlayer.getTotalArmorValue
         */
        getWave(): number;
        serializeNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        static MAX_WEARING_ARMOR_CHANCE: number;
        static PRESERVE_ITEM_DROP_CHANCE_THRESHOLD: number;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static DEFAULT_EQUIPMENT_DROP_CHANCE: number;
        static ARMOR_SLOT_OFFSET: number;
        static USE_ITEM_INTERVAL: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        static MAX_PICKUP_LOOT_CHANCE: number;
        yHeadRot: number;
        tickCount: number;
        noPhysics: boolean;
        static MAX_ENCHANTED_ARMOR_CHANCE: number;
        static MAX_ENCHANTED_WEAPON_CHANCE: number;
        yo: number;
        yBodyRotO: number;
        static BOARDING_COOLDOWN: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        static PRESERVE_ITEM_DROP_CHANCE: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        goalSelector: $GoalSelector;
        static BASE_JUMP_POWER: number;
        ambientSoundTime: number;
        swingingArm: $InteractionHand;
        moveDist: number;
        static ID_TAG: string;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        targetSelector: $GoalSelector;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        create_diesel_generators$turretPos: $BlockPos;
        walkDist: number;
        xOld: number;
        noCulling: boolean;
        wasInPowderSnow: boolean;
        walkAnimation: $WalkAnimationState;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        deathTime: number;
        yya: number;
        oAttackAnim: number;
        yHeadRotO: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static UUID_TAG: string;
        hurtDuration: number;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        verticalCollision: boolean;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        verticalCollisionBelow: boolean;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static DEFAULT_BABY_SCALE: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        static ATTRIBUTES_FIELD: string;
        minorHorizontalCollision: boolean;
        static UPDATE_GOAL_SELECTOR_EVERY_N_TICKS: number;
        static DEFAULT_BB_HEIGHT: number;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        xxa: number;
        removeArrowTime: number;
        walkDistO: number;
        static FREEZE_HURT_FREQUENCY: number;
        flyDist: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        static PASSENGERS_TAG: string;
        blocksBuilding: boolean;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        timeOffs: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        rotA: number;
        horizontalCollision: boolean;
        get celebrateSound(): $SoundEvent;
        get captain(): boolean;
    }
    export class $Raid {
        stop(): void;
        getId(): number;
        save(compound: $CompoundTag_): $CompoundTag;
        isStarted(): boolean;
        isActive(): boolean;
        tick(): void;
        getLevel(): $Level;
        removeLeader(wave: number): void;
        getGroupsSpawned(): number;
        updateBossbar(): void;
        removeFromRaid(raider: $Raider, wanderedOutOfRaid: boolean): void;
        isStopped(): boolean;
        getCenter(): $BlockPos;
        static getLeaderBannerInstance(patternRegistry: $HolderGetter<$BannerPattern_>): $ItemStack;
        getEnchantOdds(): number;
        getNumGroups(difficulty: $Difficulty_): number;
        addHeroOfTheVillage(player: $Entity): void;
        isOver(): boolean;
        joinRaid(wave: number, raider: $Raider, pos: $BlockPos_ | null, isRecruited: boolean): void;
        getLeader(wave: number): $Raider;
        setLeader(wave: number, raider: $Raider): void;
        addWaveMob(wave: number, raider: $Raider, isRecruited: boolean): boolean;
        isLoss(): boolean;
        getMaxRaidOmenLevel(): number;
        getRaidOmenLevel(): number;
        getTotalRaidersAlive(): number;
        getHealthOfLivingRaiders(): number;
        isVictory(): boolean;
        isBetweenWaves(): boolean;
        absorbRaidOmen(player: $ServerPlayer): boolean;
        hasFirstWaveSpawned(): boolean;
        setRaidOmenLevel(wave: number): void;
        getTotalHealth(): number;
        getAllRaiders(): $Set<$Raider>;
        static RAID_REMOVAL_THRESHOLD_SQR: number;
        static TICKS_PER_DAY: number;
        static VILLAGE_RADIUS_BUFFER: number;
        static MAX_CELEBRATION_TICKS: number;
        static VALID_RAID_RADIUS_SQR: number;
        static MAX_NO_ACTION_TIME: number;
        static DEFAULT_MAX_RAID_OMEN_LEVEL: number;
        constructor(id: number, level: $ServerLevel, center: $BlockPos_);
        constructor(level: $ServerLevel, compound: $CompoundTag_);
        get id(): number;
        get started(): boolean;
        get active(): boolean;
        get level(): $Level;
        get groupsSpawned(): number;
        get stopped(): boolean;
        get center(): $BlockPos;
        get enchantOdds(): number;
        get over(): boolean;
        get loss(): boolean;
        get maxRaidOmenLevel(): number;
        get totalRaidersAlive(): number;
        get healthOfLivingRaiders(): number;
        get victory(): boolean;
        get betweenWaves(): boolean;
        get totalHealth(): number;
        get allRaiders(): $Set<$Raider>;
    }
}
