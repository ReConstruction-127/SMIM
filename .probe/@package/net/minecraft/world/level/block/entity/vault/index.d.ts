import { $PlayerDetector$EntitySelector, $PlayerDetector_, $PlayerDetector } from "@package/net/minecraft/world/level/block/entity/trialspawner";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum, $Record } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/block/entity/vault" {
    export class $VaultServerData {
        addToRewardedPlayers(player: $Player): void;
        ejectionProgress(): number;
    }
    export class $VaultSharedData {
        setDisplayItem(displayItem: $ItemStack_): void;
        getDisplayItem(): $ItemStack;
        hasDisplayItem(): boolean;
    }
    export class $VaultBlockEntity extends $BlockEntity {
        getConfig(): $VaultConfig;
        getServerData(): $VaultServerData;
        setConfig(config: $VaultConfig_): void;
        getClientData(): $VaultClientData;
        getSharedData(): $VaultSharedData;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(pos: $BlockPos_, state: $BlockState_);
        get serverData(): $VaultServerData;
        get clientData(): $VaultClientData;
        get sharedData(): $VaultSharedData;
    }
    export class $VaultState extends $Enum<$VaultState> implements $StringRepresentable {
        static values(): $VaultState[];
        static valueOf(arg0: string): $VaultState;
        lightLevel(): number;
        getSerializedName(): string;
        tickAndGetNext(level: $ServerLevel, pos: $BlockPos_, config: $VaultConfig_, serverData: $VaultServerData, sharedData: $VaultSharedData): $VaultState;
        onTransition(level: $ServerLevel, pos: $BlockPos_, state: $VaultState_, config: $VaultConfig_, sharedData: $VaultSharedData, isOminous: boolean): void;
        getRemappedEnumConstantName(): string;
        static ACTIVE: $VaultState;
        static INACTIVE: $VaultState;
        static EJECTING: $VaultState;
        static UNLOCKING: $VaultState;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $VaultState}.
     */
    export type $VaultState_ = "inactive" | "active" | "unlocking" | "ejecting";
    export class $VaultClientData {
        previousSpin(): number;
        currentSpin(): number;
        static ROTATION_SPEED: number;
    }
    export class $VaultConfig extends $Record {
        keyItem(): $ItemStack;
        overrideLootTableToDisplay(): ($ResourceKey<$LootTable>) | undefined;
        lootTable(): $ResourceKey<$LootTable>;
        deactivationRange(): number;
        activationRange(): number;
        entitySelector(): $PlayerDetector$EntitySelector;
        playerDetector(): $PlayerDetector;
        constructor(arg0: $ResourceKey_<$LootTable>, arg1: number, arg2: number, arg3: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined, arg5: $PlayerDetector_, arg6: $PlayerDetector$EntitySelector);
        constructor(lootTable: $ResourceKey_<$LootTable>, activationRange: number, arg2: number, deactivationRange: $ItemStack_, arg4: ($ResourceKey_<$LootTable>) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $VaultConfig}.
     */
    export type $VaultConfig_ = { keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_,  } | [keyItem?: $ItemStack_, activationRange?: number, overrideLootTableToDisplay?: ($ResourceKey_<$LootTable>) | undefined, deactivationRange?: number, entitySelector?: $PlayerDetector$EntitySelector, lootTable?: $ResourceKey_<$LootTable>, playerDetector?: $PlayerDetector_, ];
}
