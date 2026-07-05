import { $PlayerInfo } from "@package/net/minecraft/client/multiplayer";
import { $Minecraft } from "@package/net/minecraft/client";
import { $UUID_, $Set, $UUID } from "@package/java/util";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";

declare module "@package/net/minecraft/client/gui/screens/social" {
    export class $PlayerSocialManager {
        isHidden(id: $UUID_): boolean;
        stopOnlineMode(): void;
        startOnlineMode(): void;
        shouldHideMessageFrom(id: $UUID_): boolean;
        removePlayer(id: $UUID_): void;
        isBlocked(id: $UUID_): boolean;
        getHiddenPlayers(): $Set<$UUID>;
        addPlayer(playerInfo: $PlayerInfo): void;
        hidePlayer(id: $UUID_): void;
        showPlayer(id: $UUID_): void;
        getDiscoveredUUID(uuid: string): $UUID;
        constructor(minecraft: $Minecraft, service: $UserApiService);
        get hiddenPlayers(): $Set<$UUID>;
    }
}
