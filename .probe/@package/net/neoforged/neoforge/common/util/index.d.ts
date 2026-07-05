import { $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Item$TooltipContext, $TooltipFlag } from "@package/net/minecraft/world/item";
import { $CompoundTag, $Tag } from "@package/net/minecraft/nbt";
import { $HumanoidArm, $EntityDimensions, $Entity$RemovalReason, $PortalProcessor, $WalkAnimationState, $Entity } from "@package/net/minecraft/world/entity";
import { $ServerGamePacketListenerImpl } from "@package/net/minecraft/server/network";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FishingHook } from "@package/net/minecraft/world/entity/projectile";
import { $Hash$Strategy } from "@package/it/unimi/dsi/fastutil";
import { $SequencedSet } from "@package/java/util";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $InteractionHand } from "@package/net/minecraft/world";
import { $ObjectLinkedOpenCustomHashSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider, $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerPlayerGameMode, $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $InventoryMenu, $AbstractContainerMenu } from "@package/net/minecraft/world/inventory";
import { $Enum, $Object } from "@package/java/lang";
import { $Vec3 } from "@package/net/minecraft/world/phys";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/net/neoforged/neoforge/common/util" {
    /**
     * Proxy object for a value that is calculated on first access, and can be refreshed as well.
     */
    export class $Lazy<T> implements $Supplier<T> {
        /**
         * Invalidates the cache, causing the supplier to be called again on the next access.
         */
        invalidate(): void;
        get(): T;
        /**
         * Constructs a lazy-initialized object.
         */
        static of<T>(supplier: $Supplier_<T>): $Lazy<T>;
    }
    /**
     * Represents a captured snapshot of a block, including the level, position, state, BE data, and setBlock flags.
     * 
     * Used to record the prior state and unwind changes if the change was denied, such as during `BreakEvent`.
     */
    export class $BlockSnapshot {
        /**
         * @return the snapshot's recorded block state
         */
        getState(): $BlockState;
        /**
         * Creates a new snapshot with the default block flags (and Block#UPDATE_CLIENTS.
         */
        static create(dim: $ResourceKey_<$Level>, level: $LevelAccessor, pos: $BlockPos_): $BlockSnapshot;
        /**
         * Creates a new snapshot of the data at the given position.
         */
        static create(dim: $ResourceKey_<$Level>, level: $LevelAccessor, pos: $BlockPos_, flag: number): $BlockSnapshot;
        /**
         * @return the stored level, attempting to resolve it from the current server if it has gone out of scope
         */
        getLevel(): $LevelAccessor;
        getFlags(): number;
        /**
         * @return the recorded block entity NBT data, if one was present
         */
        getTag(): $CompoundTag;
        /**
         * @return the snapshot's recorded block state
         */
        getCurrentState(): $BlockState;
        /**
         * @return the recorded dimension key
         */
        getDimension(): $ResourceKey<$Level>;
        /**
         * Calls `#restoreToLocation` with the stored level, position, and block flags.
         */
        restore(): boolean;
        /**
         * Calls `#restoreToLocation` with the stored level, position, but custom block flags.
         */
        restore(flags: number): boolean;
        /**
         * @return the recorded position
         */
        getPos(): $BlockPos;
        /**
         * Loads the stored `BlockEntity` data if one exists at the given position.
         */
        restoreBlockEntity(level: $LevelAccessor, pos: $BlockPos_): boolean;
        /**
         * Recreates a block entity from the stored data (pos/state/NBT) of this block snapshot.
         */
        recreateBlockEntity(provider: $HolderLookup$Provider): $BlockEntity;
        /**
         * Restores this block snapshot to the target level and position with the specified flags.
         */
        restoreToLocation(level: $LevelAccessor, pos: $BlockPos_, flags: number): boolean;
        get state(): $BlockState;
        get level(): $LevelAccessor;
        get flags(): number;
        get tag(): $CompoundTag;
        get currentState(): $BlockState;
        get dimension(): $ResourceKey<$Level>;
        get pos(): $BlockPos;
    }
    /**
     * A basic fake server player implementation that can be used to simulate player actions.
     */
    export class $FakePlayer extends $ServerPlayer {
        serializeNBT(arg0: $HolderLookup$Provider): $Player;
        static DEFAULT_BASE_GRAVITY: number;
        hasImpulse: boolean;
        static USE_ITEM_INTERVAL: number;
        yHeadRot: number;
        yCloakO: number;
        noPhysics: boolean;
        yo: number;
        connection: $ServerGamePacketListenerImpl;
        yBodyRotO: number;
        removalReason: $Entity$RemovalReason;
        zza: number;
        swingingArm: $InteractionHand;
        static CRAFTING_SLOT_OFFSET: number;
        static INTERACTION_DISTANCE_VERIFICATION_BUFFER: number;
        static ID_TAG: string;
        static WAKE_UP_DURATION: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_1_0: number;
        xRotO: number;
        zo: number;
        wonGame: boolean;
        walkDist: number;
        noCulling: boolean;
        walkAnimation: $WalkAnimationState;
        gameMode: $ServerPlayerGameMode;
        object: $Object;
        static STANDING_DIMENSIONS: $EntityDimensions;
        yya: number;
        server: $MinecraftServer;
        oAttackAnim: number;
        yHeadRotO: number;
        static UUID_TAG: string;
        static DEFAULT_MODEL_CUSTOMIZATION: number;
        hurtDuration: number;
        static DEATH_DURATION: number;
        portalProcess: $PortalProcessor;
        static SWIMMING_BB_HEIGHT: number;
        static DEFAULT_ENTITY_INTERACTION_RANGE: number;
        verticalCollision: boolean;
        verticalCollisionBelow: boolean;
        experienceLevel: number;
        static DEFAULT_BABY_SCALE: number;
        static ATTRIBUTES_FIELD: string;
        static PERSISTED_NBT_TAG: string;
        static DEFAULT_BB_HEIGHT: number;
        seenCredits: boolean;
        xxa: number;
        zCloak: number;
        flyDist: number;
        currentImpulseImpactPos: $Vec3;
        static PASSENGERS_TAG: string;
        xCloakO: number;
        wasOnFire: boolean;
        attackAnim: number;
        zOld: number;
        timeOffs: number;
        rotA: number;
        horizontalCollision: boolean;
        static ENDER_SLOT_OFFSET: number;
        static ARMOR_SLOT_OFFSET: number;
        static SLEEP_DURATION: number;
        static HELD_ITEM_SLOT: number;
        yCloak: number;
        swingTime: number;
        static BODY_ARMOR_OFFSET: number;
        xCloak: number;
        tickCount: number;
        static BOARDING_COOLDOWN: number;
        static MAX_HEALTH: number;
        static SWING_DURATION: number;
        yRotO: number;
        static MIN_MOVEMENT_DISTANCE: number;
        static CONTENTS_SLOT_INDEX: number;
        static BASE_JUMP_POWER: number;
        static DEFAULT_EYE_HEIGHT: number;
        static CROUCH_BB_HEIGHT: number;
        moveDist: number;
        zCloakO: number;
        mainSupportingBlockPos: ($BlockPos) | undefined;
        bob: number;
        experienceProgress: number;
        create_diesel_generators$turretPos: $BlockPos;
        totalExperience: number;
        xOld: number;
        wasInPowderSnow: boolean;
        containerMenu: $AbstractContainerMenu;
        hurtTime: number;
        swinging: boolean;
        hurtMarked: boolean;
        static DEFAULT_MAIN_HAND: $HumanoidArm;
        deathTime: number;
        static EQUIPMENT_SLOT_OFFSET: number;
        invulnerableTime: number;
        jumping: boolean;
        static BASE_TICKS_REQUIRED_TO_FREEZE: number;
        fallDistance: number;
        static DEFAULT_VEHICLE_ATTACHMENT: $Vec3;
        inventoryMenu: $InventoryMenu;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_5: number;
        static MAX_ENTITY_TAG_COUNT: number;
        static ARMOR_SLOTS: number;
        static DELTA_AFFECTED_BY_BLOCKS_BELOW_0_2: number;
        static PLAYER_HURT_EXPERIENCE_TIME: number;
        yOld: number;
        static HAND_SLOTS: number;
        static DEFAULT_BB_WIDTH: number;
        minorHorizontalCollision: boolean;
        enteredNetherPosition: $Vec3;
        static EXTRA_RENDER_CULLING_SIZE_WITH_BIG_HAT: number;
        fishing: $FishingHook;
        removeArrowTime: number;
        walkDistO: number;
        static SWIMMING_BB_WIDTH: number;
        static FREEZE_HURT_FREQUENCY: number;
        isInPowderSnow: boolean;
        static ATTACHMENTS_NBT_KEY: string;
        yBodyRot: number;
        blocksBuilding: boolean;
        takeXpDelay: number;
        static DEFAULT_BLOCK_INTERACTION_RANGE: number;
        oBob: number;
        static TOTAL_AIR_SUPPLY: number;
        xo: number;
        invulnerableDuration: number;
        removeStingerTime: number;
        static BASE_SAFE_FALL_DISTANCE: number;
        effectsDirty: boolean;
        currentExplosionCause: $Entity;
        constructor(level: $ServerLevel, name: $GameProfile);
    }
    export class $TriState extends $Enum<$TriState> {
        isTrue(): boolean;
        static values(): $TriState[];
        static valueOf(arg0: string): $TriState;
        isDefault(): boolean;
        isFalse(): boolean;
        static TRUE: $TriState;
        static FALSE: $TriState;
        static DEFAULT: $TriState;
        get true(): boolean;
        get default(): boolean;
        get false(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TriState}.
     */
    export type $TriState_ = "true" | "default" | "false";
    /**
     * Special linked hash set that allow changing the order of its entries and is strict to throw if attempting to add an entry that already exists.
     * Requires a strategy for the hashing behavior. Use `BasicStrategy#BASIC` or `IdentityStrategy#IDENTITY` if no special hashing needed.
     */
    export class $InsertableLinkedOpenCustomHashSet<T> extends $ObjectLinkedOpenCustomHashSet<T> {
        addBefore(arg0: T, arg1: T): boolean;
        addAfter(arg0: T, arg1: T): boolean;
        reversed(): $SequencedSet<T>;
        /**
         * Constructs a new `InsertableLinkedOpenCustomHashSet` with a `BasicStrategy`.
         */
        constructor();
        /**
         * Constructs a new `InsertableLinkedOpenCustomHashSet` with the given `Strategy`.
         */
        constructor(strategy: $Hash$Strategy<T>);
    }
    /**
     * Extended `TooltipContext` used when generating attribute tooltips.
     */
    export class $AttributeTooltipContext {
        static of(player: $Player, itemCtx: $Item$TooltipContext, flag: $TooltipFlag): $AttributeTooltipContext;
    }
    export interface $AttributeTooltipContext extends $Item$TooltipContext {
        /**
         * @return the current tooltip flag
         */
        flag(): $TooltipFlag;
        /**
         * @return the player for whom tooltips are being generated for, if known
         */
        player(): $Player;
    }
    /**
     * An interface designed to unify various things in the Minecraft
     * code base that can be serialized to and from a NBT tag.
     */
    export class $INBTSerializable<T extends $Tag> {
    }
    export interface $INBTSerializable<T extends $Tag> {
        serializeNBT(arg0: $HolderLookup$Provider): T;
        deserializeNBT(arg0: $HolderLookup$Provider, arg1: T): void;
    }
}
