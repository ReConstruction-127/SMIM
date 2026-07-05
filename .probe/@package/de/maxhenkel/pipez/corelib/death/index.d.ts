import { $HolderLookup$Provider, $BlockPos, $NonNullList } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $UUID, $Collection_ } from "@package/java/util";
import { $DamageSource_, $DamageSource } from "@package/net/minecraft/world/damagesource";

declare module "@package/de/maxhenkel/pipez/corelib/death" {
    export class $Death {
        getId(): $UUID;
        getTimestamp(): number;
        getBlockPos(): $BlockPos;
        getDimension(): string;
        static fromNBT(arg0: $HolderLookup$Provider, arg1: $CompoundTag_): $Death;
        getModel(): number;
        toNBT(arg0: $HolderLookup$Provider): $CompoundTag;
        toNBT(arg0: $HolderLookup$Provider, arg1: boolean): $CompoundTag;
        getEquipment(): $NonNullList<$ItemStack>;
        getPlayerUUID(): $UUID;
        getExperience(): number;
        getPosX(): number;
        getPosY(): number;
        getAllItems(): $NonNullList<$ItemStack>;
        static fromPlayer(arg0: $Player): $Death;
        getPosZ(): number;
        getPlayerName(): string;
        getAdditionalItems(): $NonNullList<$ItemStack>;
        processDrops(arg0: $Collection_<$ItemEntity>): void;
        getMainInventory(): $NonNullList<$ItemStack>;
        getArmorInventory(): $NonNullList<$ItemStack>;
        getOffHandInventory(): $NonNullList<$ItemStack>;
        get id(): $UUID;
        get timestamp(): number;
        get blockPos(): $BlockPos;
        get dimension(): string;
        get model(): number;
        get equipment(): $NonNullList<$ItemStack>;
        get playerUUID(): $UUID;
        get experience(): number;
        get posX(): number;
        get posY(): number;
        get allItems(): $NonNullList<$ItemStack>;
        get posZ(): number;
        get playerName(): string;
        get additionalItems(): $NonNullList<$ItemStack>;
        get mainInventory(): $NonNullList<$ItemStack>;
        get armorInventory(): $NonNullList<$ItemStack>;
        get offHandInventory(): $NonNullList<$ItemStack>;
    }
    export class $PlayerDeathEvent extends $Event {
        getSource(): $DamageSource;
        getPlayer(): $ServerPlayer;
        removeDrops(): void;
        storeDeath(): void;
        getDeath(): $Death;
        constructor(arg0: $Death, arg1: $ServerPlayer, arg2: $DamageSource_);
        get source(): $DamageSource;
        get player(): $ServerPlayer;
        get death(): $Death;
    }
}
