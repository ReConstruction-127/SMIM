import { $EndCrystal, $EnderDragon } from "@package/net/minecraft/world/entity/boss/enderdragon";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $ServerPlayer, $ServerLevel } from "@package/net/minecraft/server/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $List, $List_ } from "@package/java/util";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";

declare module "@package/net/minecraft/world/level/dimension/end" {
    export class $EndDragonFight {
        tick(): void;
        setDragonKilled(dragon: $EnderDragon): void;
        updateDragon(dragon: $EnderDragon): void;
        onCrystalDestroyed(crystal: $EndCrystal, dmgSrc: $DamageSource_): void;
        getCrystalsAlive(): number;
        getDragonUUID(): $UUID;
        removePlayer(arg0: $ServerPlayer): void;
        resetSpikeCrystals(): void;
        /**
         * @deprecated
         */
        removeAllGateways(): void;
        hasPreviouslyKilledDragon(): boolean;
        addPlayer(arg0: $ServerPlayer): void;
        saveData(): $EndDragonFight$Data;
        tryRespawn(): void;
        /**
         * @deprecated
         */
        skipArenaLoadedCheck(): void;
        static TIME_BETWEEN_PLAYER_SCANS: number;
        static ARENA_TICKET_LEVEL: number;
        static DRAGON_SPAWN_Y: number;
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_);
        constructor(level: $ServerLevel, seed: number, arg2: $EndDragonFight$Data_, data: $BlockPos_);
        set dragonKilled(value: $EnderDragon);
        get crystalsAlive(): number;
        get dragonUUID(): $UUID;
    }
    export class $EndDragonFight$Data extends $Record {
        isRespawning(): boolean;
        exitPortalLocation(): ($BlockPos) | undefined;
        dragonKilled(): boolean;
        needsStateScanning(): boolean;
        previouslyKilled(): boolean;
        dragonUUID(): ($UUID) | undefined;
        gateways(): ($List<number>) | undefined;
        static CODEC: $Codec<$EndDragonFight$Data>;
        static DEFAULT: $EndDragonFight$Data;
        constructor(needsStateScanning: boolean, dragonKilled: boolean, previouslyKilled: boolean, isRespawning: boolean, dragonUUID: ($UUID_) | undefined, exitPortalLocation: ($BlockPos_) | undefined, gateways: ($List_<number>) | undefined);
        get respawning(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $EndDragonFight$Data}.
     */
    export type $EndDragonFight$Data_ = { dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean, dragonKilled?: boolean,  } | [dragonUUID?: ($UUID_) | undefined, gateways?: ($List_<number>) | undefined, exitPortalLocation?: ($BlockPos_) | undefined, previouslyKilled?: boolean, isRespawning?: boolean, needsStateScanning?: boolean, dragonKilled?: boolean, ];
}
