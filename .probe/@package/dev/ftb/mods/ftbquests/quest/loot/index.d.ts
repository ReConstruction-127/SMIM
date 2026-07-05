import { $ConfigGroup } from "@package/dev/ftb/mods/ftblibrary/config";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Color4I } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $List, $Map, $Collection } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Reward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $RandomSource } from "@package/net/minecraft/util";
import { $BaseQuestFile, $QuestObjectBase, $Quest } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/loot" {
    export class $EntityWeight {
        getWeight(entity: $Entity): number;
        readData(nbt: $CompoundTag_): void;
        writeData(nbt: $CompoundTag_): void;
        writeNetData(data: $FriendlyByteBuf): void;
        readNetData(data: $FriendlyByteBuf): void;
        boss: number;
        passive: number;
        monster: number;
        constructor();
    }
    export class $LootCrate {
        getTable(): $RewardTable;
        getColor(): $Color4I;
        getDrops(): $EntityWeight;
        createStack(): $ItemStack;
        getItemName(): string;
        getStringID(): string;
        readData(nbt: $CompoundTag_): void;
        writeData(nbt: $CompoundTag_): void;
        fillConfigGroup(config: $ConfigGroup): void;
        static getLootCrates(isClient: boolean): $Map<string, $LootCrate>;
        writeNetData(data: $FriendlyByteBuf): void;
        readNetData(data: $FriendlyByteBuf): void;
        static allCrateStacks(isClientSide: boolean): $Collection<$ItemStack>;
        isGlow(): boolean;
        initFromTable(): void;
        constructor(table: $RewardTable, initFromTable: boolean);
        get table(): $RewardTable;
        get color(): $Color4I;
        get drops(): $EntityWeight;
        get itemName(): string;
        get stringID(): string;
        get glow(): boolean;
    }
    export class $RewardTable extends $QuestObjectBase {
        copy(): $RewardTable;
        getFile(): $BaseQuestFile;
        getTotalWeight(includeEmpty: boolean): number;
        getFilename(): string;
        addMouseOverText(list: $TooltipList, includeWeight: boolean, includeEmpty: boolean): void;
        getTitleOrElse(def: $Component_): $Component;
        shouldShowTooltip(): boolean;
        static isFakeQuestId(id: number): boolean;
        getLootCrate(): $LootCrate;
        getFakeQuest(): $Quest;
        toggleLootCrate(): $LootCrate;
        makeWeightedItemReward(stack: $ItemStack_, weight: number): $WeightedReward;
        getWeightedRewards(): $List<$WeightedReward>;
        addReward(weightedReward: $WeightedReward): void;
        static createRewardForTable(id: number, type: string, file: $BaseQuestFile): $QuestObjectBase;
        removeReward(weightedReward: $WeightedReward): void;
        generateWeightedRandomRewards(random: $RandomSource, nAttempts: number, includeEmpty: boolean): $Collection<$WeightedReward>;
        id: number;
        constructor(id: number, file: $BaseQuestFile);
        constructor(id: number, file: $BaseQuestFile, filename: string);
        get file(): $BaseQuestFile;
        get filename(): string;
        get lootCrate(): $LootCrate;
        get fakeQuest(): $Quest;
        get weightedRewards(): $List<$WeightedReward>;
    }
    export class $WeightedReward implements $Comparable<$WeightedReward> {
        compareTo(o: $WeightedReward): number;
        copy(): $WeightedReward;
        getReward(): $Reward;
        getWeight(): number;
        setWeight(weight: number): void;
        static chanceString(weight: number, totalWeight: number): string;
        static chanceString(weight: number, totalWeight: number, empty: boolean): string;
        constructor(reward: $Reward, weight: number);
        get reward(): $Reward;
    }
}
