import { $Level } from "@package/net/minecraft/world/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $PreTagKubeEvent } from "@package/dev/latvian/mods/kubejs/server/tag";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ParseResults } from "@package/com/mojang/brigadier";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $CommandEvent } from "@package/net/neoforged/neoforge/event";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $List, $Map, $Set, $List_ } from "@package/java/util";
import { $SyncServerDataPayload } from "@package/dev/latvian/mods/kubejs/net";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";
import { $VirtualDataPack, $GeneratedDataStage } from "@package/dev/latvian/mods/kubejs/script/data";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Supplier_ } from "@package/java/util/function";
import { $RegistryAccess } from "@package/net/minecraft/core";
import { $PackResources } from "@package/net/minecraft/server/packs";
import { $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeSchemaStorage } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $Throwable, $Object } from "@package/java/lang";
import { $ScriptType, $KubeJSContextFactory, $ScriptPack, $ScriptManager } from "@package/dev/latvian/mods/kubejs/script";
export * as tag from "@package/dev/latvian/mods/kubejs/server/tag";

declare module "@package/dev/latvian/mods/kubejs/server" {
    export class $ServerScriptManager extends $ScriptManager {
        static release(): $ServerScriptManager;
        static createPackResources(original: $List_<$PackResources>): $List<$PackResources>;
        reloadAndCapture(): void;
        static createForDataGen(): $ServerScriptManager;
        virtualPacks: $Map<$GeneratedDataStage, $VirtualDataPack>;
        scriptType: $ScriptType;
        registriesDataPack: $VirtualDataPack;
        serverRegistryTags: $Map<$ResourceLocation, $Set<$ResourceLocation>>;
        internalDataPack: $VirtualDataPack;
        canListenEvents: boolean;
        recipeSchemaStorage: $RecipeSchemaStorage;
        firstLoad: boolean;
        packs: $Map<string, $ScriptPack>;
        preTagEvents: $Map<$ResourceKey<never>, $PreTagKubeEvent>;
        serverData: $SyncServerDataPayload;
        contextFactory: $KubeJSContextFactory;
    }
    export class $CommandKubeEvent extends $ServerKubeEvent {
        getInput(): string;
        getException(): $Throwable;
        setException(exception: $Throwable): void;
        setParseResults(parse: $ParseResults<$CommandSourceStack>): void;
        getParseResults(): $ParseResults<$CommandSourceStack>;
        getCommandName(): string;
        server: $MinecraftServer;
        constructor(event: $CommandEvent);
        get input(): string;
        get commandName(): string;
    }
    export class $BasicCommandKubeEvent implements $KubeEntityEvent {
        getId(): string;
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getEntity(): $Entity;
        respond(text: $Component_): void;
        respondLazily(text: $Supplier_<$Component>, informAdmins: boolean): void;
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
        getPlayer(): $Player;
        input: string;
        id: string;
        constructor(source: $CommandSourceStack, id: string, input: string);
        get level(): $Level;
        get block(): $LevelBlock;
        get entity(): $Entity;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
        get player(): $Player;
    }
    export class $ServerKubeEvent implements $KubeEvent {
        getServer(): $MinecraftServer;
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
        server: $MinecraftServer;
        constructor(s: $MinecraftServer);
    }
}
