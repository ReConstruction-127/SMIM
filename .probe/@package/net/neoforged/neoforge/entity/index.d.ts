import { $HolderLookup$Provider, $BlockPos } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Entity$RemovalReason, $Entity, $PortalProcessor, $ExperienceOrb } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";

declare module "@package/net/neoforged/neoforge/entity" {
    /**
     * Event to determine which player an XP Orb should follow.
     * 
     * This is fired once a second when an XP Orbit find itself without a player to move toward.
     * 
     * The default (nearest player within `#getScanDistance()`) can be overridden with
     * either a new (Fake)Player or null to cancel the attraction.
     * 
     * Note that providing a player that is more than 8 blocks away does work, but it will
     * cause this event to be fired again after 20 ticks.
     * 
     * See also: `PickupXp` for cancelling the pickup.
     * 
     * This event is fired on both server and client on the `NeoForge#EVENT_BUS`.
     */
    export class $XpOrbTargetingEvent extends $Event {
        /**
         * Sets a new result. Can be null to cancel the default search.
         */
        setFollowingPlayer(newFollowingPlayer: $Player): void;
        /**
         * The maximum distance to scan for players. This is 8 for vanilla orbs.
         */
        getScanDistance(): number;
        /**
         * The result of the event.
         */
        getFollowingPlayer(): $Player;
        /**
         * The `ExperienceOrb` that's looking for a player to follow.
         * 
         * You can get the `Level` from this.
         */
        getXpOrb(): $ExperienceOrb;
        constructor(xpOrb: $ExperienceOrb, scanDistance: number);
        get scanDistance(): number;
        get xpOrb(): $ExperienceOrb;
    }
    export class $PartEntity<T extends $Entity> extends $Entity {
        getParent(): $CompoundTag;
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
        static BASE_SAFE_FALL_DISTANCE: number;
        hurtMarked: boolean;
        horizontalCollision: boolean;
        constructor(arg0: $CompoundTag_);
        get parent(): $CompoundTag;
    }
    /**
     * An interface for Entities that need extra information to be communicated
     * between the server and client when they are spawned.
     */
    export class $IEntityWithComplexSpawn {
    }
    export interface $IEntityWithComplexSpawn {
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        writeSpawnData(buffer: $RegistryFriendlyByteBuf): void;
        /**
         * Called by the server when constructing the spawn packet.
         * Data should be added to the provided stream.
         */
        readSpawnData(buffer: $RegistryFriendlyByteBuf): void;
    }
}
