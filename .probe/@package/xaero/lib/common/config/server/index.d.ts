import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $ServerPlayerData } from "@package/xaero/lib/common/player";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $ServerConfigChangeListener } from "@package/xaero/lib/common/config/server/listener";
import { $OptionValueRedirectorManager } from "@package/xaero/lib/common/config/option/value/redirect";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileManager, $ConfigProfile } from "@package/xaero/lib/common/config/profile";
export * as listener from "@package/xaero/lib/common/config/server/listener";
export * as sync from "@package/xaero/lib/common/config/server/sync";

declare module "@package/xaero/lib/common/config/server" {
    export class $ServerConfigManager {
        getChannel(): $ConfigChannel;
        getRaw<T>(arg0: $ConfigProfile, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getRaw<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        setChannel(arg0: $ConfigChannel): void;
        setServer(arg0: $MinecraftServer): void;
        getProfileManager(): $ConfigProfileManager;
        getChangeListener(): $ServerConfigChangeListener;
        setChangeListener(arg0: $ServerConfigChangeListener): void;
        hasServerProfileEditPermission(arg0: $ServerPlayerData): boolean;
        getEnforcedProfileForPlayer(arg0: $ServerPlayerData): $ConfigProfile;
        getPermissionBasedProfileId(arg0: $ServerPlayerData): string;
        getServer(): $MinecraftServer;
        postLoad(): void;
        getDefaultEnforcedProfile(): $ConfigProfile;
        usesDefaultEnforcedProfile(arg0: $ServerPlayer): boolean;
        usesDefaultEnforcedProfile(arg0: $ServerPlayerData): boolean;
        getPermissionBasedProfile(arg0: $ServerPlayerData): $ConfigProfile;
        getEffective<T>(arg0: $ServerPlayerData, arg1: $ConfigOption<T>): T;
        getEffective<T>(arg0: $ServerPlayer, arg1: $ConfigOption<T>): T;
        getRedirectorManager(): $OptionValueRedirectorManager;
        setDefaultEnforcedProfileId(arg0: string): void;
        get profileManager(): $ConfigProfileManager;
        get defaultEnforcedProfile(): $ConfigProfile;
        get redirectorManager(): $OptionValueRedirectorManager;
        set defaultEnforcedProfileId(value: string);
    }
}
