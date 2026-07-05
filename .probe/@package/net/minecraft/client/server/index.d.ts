import { $LevelSettings } from "@package/net/minecraft/world/level";
import { $ChunkProgressListenerFactory_ } from "@package/net/minecraft/server/level/progress";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $MinecraftServer$ReloadableResources, $WorldStem_, $MinecraftServer, $Services_ } from "@package/net/minecraft/server";
import { $IDeferrableIntegratedServer } from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Minecraft } from "@package/net/minecraft/client";
import { $LevelStorageSource$LevelStorageAccess } from "@package/net/minecraft/world/level/storage";
import { $Thread } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";

declare module "@package/net/minecraft/client/server" {
    export class $IntegratedServer extends $MinecraftServer implements $IDeferrableIntegratedServer {
        /**
         * Saves all necessary data as preparation for stopping the server.
         */
        mfix$markClientLoadFinished(): void;
        /**
         * Initialises the server and starts it.
         */
        initServer(): boolean;
        setUUID(uuid: $UUID_): void;
        static VANILLA_BRAND: string;
        static ANONYMOUS_PLAYER_PROFILE: $GameProfile;
        resources: $MinecraftServer$ReloadableResources;
        storageSource: $LevelStorageSource$LevelStorageAccess;
        static ABSOLUTE_MAX_WORLD_SIZE: number;
        static DEMO_SETTINGS: $LevelSettings;
        constructor(serverThread: $Thread, minecraft: $Minecraft, storageSource: $LevelStorageSource$LevelStorageAccess, packRepository: $PackRepository, worldStem: $WorldStem_, services: $Services_, progressListenerFactory: $ChunkProgressListenerFactory_);
        set UUID(value: $UUID_);
    }
}
