import { $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ServerKubeEvent } from "@package/dev/latvian/mods/kubejs/server";
import { $Map, $UUID_, $Collection_ } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $EntityArrayList, $KubePlayerEvent } from "@package/dev/latvian/mods/kubejs/player";
import { $CustomTaskEvent, $ObjectCompletedEvent, $CustomRewardEvent, $ObjectStartedEvent } from "@package/dev/ftb/mods/ftbquests/events";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ProgressChange } from "@package/dev/ftb/mods/ftbquests/util";
import { $CustomTask$Check_, $CustomTask } from "@package/dev/ftb/mods/ftbquests/quest/task";
import { $Object } from "@package/java/lang";
import { $CustomFilterDisplayItemsEvent } from "@package/dev/ftb/mods/ftbquests/api/event";
import { $CustomReward } from "@package/dev/ftb/mods/ftbquests/quest/reward";
import { $QuestObjectBase, $TeamData, $BaseQuestFile, $QuestShape, $QuestObjectType, $QuestObject } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbquests/kubejs" {
    export class $CustomRewardKubeEvent implements $KubePlayerEvent {
        getNotify(): boolean;
        getReward(): $CustomReward;
        getPlayer(): $Player;
        getLevel(): $Level;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        getEntity(): $LivingEntity;
        constructor(e: $CustomRewardEvent);
        get notify(): boolean;
        get reward(): $CustomReward;
        get player(): $Player;
        get level(): $Level;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get entity(): $LivingEntity;
    }
    export class $QuestObjectCompletedKubeEvent extends $ServerKubeEvent {
        getObject(): $QuestObject;
        getData(): $FTBQuestsKubeJSTeamDataWrapper;
        getPlayer(): $ServerPlayer;
        getOnlineMembers(): $EntityArrayList;
        getNotifiedPlayers(): $EntityArrayList;
        server: $MinecraftServer;
        event: $ObjectCompletedEvent<never>;
        constructor(event: $ObjectCompletedEvent<never>);
        get object(): $QuestObject;
        get data(): $FTBQuestsKubeJSTeamDataWrapper;
        get player(): $ServerPlayer;
        get onlineMembers(): $EntityArrayList;
        get notifiedPlayers(): $EntityArrayList;
    }
    export class $CustomTaskKubeEvent implements $KubeEvent {
        getTask(): $CustomTask;
        setCheckTimer(t: number): void;
        setMaxProgress(max: number): void;
        setEnableButton(b: boolean): void;
        setCheck(c: $CustomTask$Check_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        event: $CustomTaskEvent;
        get task(): $CustomTask;
        set checkTimer(value: number);
        set maxProgress(value: number);
        set enableButton(value: boolean);
        set check(value: $CustomTask$Check_);
    }
    export class $FTBQuestsKubeJSTeamDataWrapper extends $FTBQuestsKubeJSTeamData {
        constructor(d: $TeamData);
    }
    export class $FTBQuestsKubeJSTeamData {
        reset(id: $Object): void;
        isStarted(id: $Object): boolean;
        getFile(): $BaseQuestFile;
        complete(id: $Object): void;
        isCompleted(id: $Object): boolean;
        getData(): $TeamData;
        getOnlineMembers(): $EntityArrayList;
        addProgress(id: $Object, progress: number): boolean;
        changeProgress(id: $Object, consumer: $Consumer_<$ProgressChange>): void;
        setLocked(v: boolean): void;
        getLocked(): boolean;
        getRelativeProgress(id: $Object): number;
        getTaskProgress(id: $Object): number;
        canStartQuest(id: $Object): boolean;
        constructor();
        get file(): $BaseQuestFile;
        get data(): $TeamData;
        get onlineMembers(): $EntityArrayList;
    }
    export class $FTBQuestsKubeJSWrapper {
        getObject(level: $Level_, id: $Object): $QuestObjectBase;
        getFile(level: $Level_): $BaseQuestFile;
        getData(player: $Player): $TeamData;
        getData(level: $Level_, uuid: $UUID_): $TeamData;
        getQuestObjectTypes(): $Map<string, $QuestObjectType>;
        getServerDataFromPlayer(player: $Player): $FTBQuestsKubeJSPlayerData;
        getServerDataFromSource(source: $CommandSourceStack): $FTBQuestsKubeJSPlayerData;
        getQuestShapes(): $Map<string, $QuestShape>;
        static INSTANCE: $FTBQuestsKubeJSWrapper;
        constructor();
        get questObjectTypes(): $Map<string, $QuestObjectType>;
        get questShapes(): $Map<string, $QuestShape>;
    }
    export class $FTBQuestsKubeJSPlayerData extends $FTBQuestsKubeJSTeamData {
        constructor(p: $Player);
    }
    export class $QuestObjectStartedKubeEvent extends $ServerKubeEvent {
        getObject(): $QuestObject;
        getData(): $FTBQuestsKubeJSTeamDataWrapper;
        getPlayer(): $ServerPlayer;
        getOnlineMembers(): $EntityArrayList;
        getNotifiedPlayers(): $EntityArrayList;
        server: $MinecraftServer;
        event: $ObjectStartedEvent<never>;
        constructor(event: $ObjectStartedEvent<never>);
        get object(): $QuestObject;
        get data(): $FTBQuestsKubeJSTeamDataWrapper;
        get player(): $ServerPlayer;
        get onlineMembers(): $EntityArrayList;
        get notifiedPlayers(): $EntityArrayList;
    }
    export class $CustomFilterItemKubeEvent implements $KubeEvent {
        addStack(stack: $ItemStack_): void;
        addStacks(stacks: $Collection_<$ItemStack_>): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(event: $CustomFilterDisplayItemsEvent);
    }
}
