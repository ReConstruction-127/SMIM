import { $Level } from "@package/net/minecraft/world/level";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $BlockPos, $RegistryAccess } from "@package/net/minecraft/core";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Object } from "@package/java/lang";
import { $ClaimResult_, $ClaimedChunk, $ClaimResult } from "@package/dev/ftb/mods/ftbchunks/api";
import { $KubeEntityEvent } from "@package/dev/latvian/mods/kubejs/entity";

declare module "@package/dev/ftb/mods/ftbxmodcompat/neoforge/ftbchunks/kubejs" {
    export class $BeforeEventJS extends $AfterEventJS {
        setResult(r: $ClaimResult_): void;
        getResult(): $ClaimResult;
        setCustomResult(messageKey: string): void;
        chunk: $ClaimedChunk;
        source: $CommandSourceStack;
        constructor(source: $CommandSourceStack, chunk: $ClaimedChunk);
        set customResult(value: string);
    }
    export class $AfterEventJS implements $KubeEntityEvent {
        getEntity(): $Entity;
        getClaimPos(): $BlockPos;
        getLevel(): $Level;
        getPlayer(): $Player;
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
        chunk: $ClaimedChunk;
        source: $CommandSourceStack;
        constructor(s: $CommandSourceStack, c: $ClaimedChunk);
        get entity(): $Entity;
        get claimPos(): $BlockPos;
        get level(): $Level;
        get player(): $Player;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
