import { $Level } from "@package/net/minecraft/world/level";
import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $Team, $TeamManager } from "@package/dev/ftb/mods/ftbteams/api";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ChunkDimPos_, $ChunkDimPos } from "@package/dev/ftb/mods/ftblibrary/math";
import { $PrivacyProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $UUID, $Map, $UUID_, $Collection } from "@package/java/util";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Predicate_ } from "@package/java/util/function";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/dev/ftb/mods/ftbchunks/api" {
    export class $ClaimedChunk {
    }
    export interface $ClaimedChunk extends $ClaimResult {
        unload(arg0: $CommandSourceStack): void;
        getPos(): $ChunkDimPos;
        getForceLoadedTime(): number;
        getTeamData(): $ChunkTeamData;
        getTimeClaimed(): number;
        isActuallyForceLoaded(): boolean;
        hasForceLoadExpired(arg0: number): boolean;
        setForceLoadExpiryTime(arg0: number): void;
        getForceLoadExpiryTime(): number;
        isForceLoaded(): boolean;
        unclaim(arg0: $CommandSourceStack, arg1: boolean): void;
        get pos(): $ChunkDimPos;
        get forceLoadedTime(): number;
        get teamData(): $ChunkTeamData;
        get timeClaimed(): number;
        get actuallyForceLoaded(): boolean;
        get forceLoaded(): boolean;
    }
    export class $ChunkTeamData {
    }
    export interface $ChunkTeamData {
        claim(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean): $ClaimResult;
        getManager(): $ClaimedChunkManager;
        forceLoad(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        forceLoad(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        getTeam(): $Team;
        allowMobGriefing(): boolean;
        canPlayerUse(arg0: $ServerPlayer, arg1: $PrivacyProperty): boolean;
        isAlly(arg0: $UUID_): boolean;
        shouldHideClaims(): boolean;
        unForceLoad(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        unForceLoad(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        isTeamMember(arg0: $UUID_): boolean;
        getLastLoginTime(): number;
        getTeamManager(): $TeamManager;
        canDoOfflineForceLoading(): boolean;
        getForceLoadedChunks(): $Collection<$ClaimedChunk>;
        setExtraClaimChunks(arg0: number): void;
        setExtraForceLoadChunks(arg0: number): void;
        checkMemberForceLoading(arg0: $UUID_): void;
        getExtraClaimChunks(): number;
        canExplosionsDamageTerrain(): boolean;
        getMaxForceLoadChunks(): number;
        getExtraForceLoadChunks(): number;
        getMaxClaimChunks(): number;
        getClaimedChunks(): $Collection<$ClaimedChunk>;
        unclaim(source: $CommandSourceStack, pos: $ChunkDimPos_, checkOnly: boolean): $ClaimResult;
        unclaim(arg0: $CommandSourceStack, arg1: $ChunkDimPos_, arg2: boolean, arg3: boolean): $ClaimResult;
        allowPVP(): boolean;
        get manager(): $ClaimedChunkManager;
        get team(): $Team;
        get lastLoginTime(): number;
        get teamManager(): $TeamManager;
        get forceLoadedChunks(): $Collection<$ClaimedChunk>;
        get maxForceLoadChunks(): number;
        get maxClaimChunks(): number;
        get claimedChunks(): $Collection<$ClaimedChunk>;
    }
    export class $ProtectionPolicy extends $Enum<$ProtectionPolicy> {
        static values(): $ProtectionPolicy[];
        static valueOf(name: string): $ProtectionPolicy;
        shouldPreventInteraction(): boolean;
        isOverride(): boolean;
        static DENY: $ProtectionPolicy;
        static CHECK: $ProtectionPolicy;
        static ALLOW: $ProtectionPolicy;
        get override(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ProtectionPolicy}.
     */
    export type $ProtectionPolicy_ = "check" | "deny" | "allow";
    export class $ClaimResult {
        static success(): $ClaimResult;
        static customProblem(translationKey: string): $ClaimResult;
    }
    export interface $ClaimResult {
        getMessage(): $MutableComponent;
        isSuccess(): boolean;
        getResultId(): string;
        get message(): $MutableComponent;
        get resultId(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClaimResult}.
     */
    export type $ClaimResult_ = (() => string);
    export class $Protection {
        static isFood(stack: $ItemStack_): boolean;
        static isBeneficialPotion(stack: $ItemStack_): boolean;
        static EDIT_FLUID: $Protection;
        static EDIT_BLOCK: $Protection;
        static RIGHT_CLICK_ITEM: $Protection;
        static INTERACT_ENTITY: $Protection;
        static ATTACK_NONLIVING_ENTITY: $Protection;
        static EDIT_AND_INTERACT_BLOCK: $Protection;
        static INTERACT_BLOCK: $Protection;
    }
    export interface $Protection {
        getProtectionPolicy(arg0: $ServerPlayer, arg1: $BlockPos_, arg2: $InteractionHand_, arg3: $ClaimedChunk, arg4: $Entity): $ProtectionPolicy;
    }
    /**
     * Values that may be interpreted as {@link $Protection}.
     */
    export type $Protection_ = ((arg0: $ServerPlayer, arg1: $BlockPos, arg2: $InteractionHand, arg3: $ClaimedChunk, arg4: $Entity) => $ProtectionPolicy_);
    export class $ClaimedChunkManager {
    }
    export interface $ClaimedChunkManager {
        shouldPreventInteraction(arg0: $Entity, arg1: $InteractionHand_, arg2: $BlockPos_, arg3: $Protection_, arg4: $Entity): boolean;
        getChunk(arg0: $ChunkDimPos_): $ClaimedChunk;
        isChunkForceLoaded(arg0: $ChunkDimPos_): boolean;
        getPersonalData(arg0: $UUID_): $ChunkTeamData;
        getAllClaimedChunks(): $Collection<$ClaimedChunk>;
        getForceLoadedChunks(): $Map<$ResourceKey<$Level>, $Long2ObjectMap<$UUID>>;
        getForceLoadedChunks(arg0: $ResourceKey_<$Level>): $Long2ObjectMap<$UUID>;
        getBypassProtection(arg0: $UUID_): boolean;
        setBypassProtection(arg0: $UUID_, arg1: boolean): void;
        getClaimedChunksByTeam(arg0: $Predicate_<$ClaimedChunk>): $Map<$UUID, $Collection<$ClaimedChunk>>;
        getOrCreateData(arg0: $ServerPlayer): $ChunkTeamData;
        getOrCreateData(arg0: $Team): $ChunkTeamData;
        get allClaimedChunks(): $Collection<$ClaimedChunk>;
    }
}
