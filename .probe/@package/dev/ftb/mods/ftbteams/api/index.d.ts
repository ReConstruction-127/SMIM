import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $TeamPropertyCollection, $TeamProperty } from "@package/dev/ftb/mods/ftbteams/api/property";
import { $Enum } from "@package/java/lang";
import { $UUID_, $UUID, $List, $Map, $Collection, $Set } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
export * as property from "@package/dev/ftb/mods/ftbteams/api/property";
export * as event from "@package/dev/ftb/mods/ftbteams/api/event";

declare module "@package/dev/ftb/mods/ftbteams/api" {
    export class $TeamManager {
    }
    export interface $TeamManager {
        getId(): $UUID;
        createPartyTeam(arg0: $ServerPlayer, arg1: string, arg2: string, arg3: $Color4I): $Team;
        getTeamByName(arg0: string): ($Team) | undefined;
        getTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        setChatRedirected(arg0: $ServerPlayer, arg1: boolean): void;
        createServerTeam(arg0: $CommandSourceStack, arg1: string, arg2: string, arg3: $Color4I, arg4: $UUID_): $Team;
        createServerTeam(commandSourceStack: $CommandSourceStack, name: string, description: string, color: $Color4I): $Team;
        getTeams(): $Collection<$Team>;
        getServer(): $MinecraftServer;
        getExtraData(): $CompoundTag;
        isChatRedirected(arg0: $ServerPlayer): boolean;
        getTeamForPlayer(arg0: $ServerPlayer): ($Team) | undefined;
        getTeamByID(arg0: $UUID_): ($Team) | undefined;
        markDirty(): void;
        getPlayerTeamForPlayerID(arg0: $UUID_): ($Team) | undefined;
        arePlayersInSameTeam(arg0: $UUID_, arg1: $UUID_): boolean;
        getKnownPlayerTeams(): $Map<$UUID, $Team>;
        get id(): $UUID;
        get teams(): $Collection<$Team>;
        get server(): $MinecraftServer;
        get extraData(): $CompoundTag;
        get knownPlayerTeams(): $Map<$UUID, $Team>;
    }
    export class $TeamRank extends $Enum<$TeamRank> implements $StringRepresentable {
        static values(): $TeamRank[];
        static valueOf(name: string): $TeamRank;
        getDisplayName(): $Component;
        getIcon(): ($Icon) | undefined;
        isAtLeast(rank: $TeamRank_): boolean;
        isOwner(): boolean;
        getSerializedName(): string;
        isMemberOrBetter(): boolean;
        isOfficerOrBetter(): boolean;
        isAllyOrBetter(): boolean;
        isInvitedOrBetter(): boolean;
        getPower(): number;
        isEnemyOrWorse(): boolean;
        isNoneOrBetter(): boolean;
        getRemappedEnumConstantName(): string;
        static OWNER: $TeamRank;
        static INVITED: $TeamRank;
        static ALLY: $TeamRank;
        static NAME_MAP: $NameMap<$TeamRank>;
        static ENEMY: $TeamRank;
        static OFFICER: $TeamRank;
        static NONE: $TeamRank;
        static MEMBER: $TeamRank;
        get displayName(): $Component;
        get icon(): ($Icon) | undefined;
        get owner(): boolean;
        get serializedName(): string;
        get memberOrBetter(): boolean;
        get officerOrBetter(): boolean;
        get allyOrBetter(): boolean;
        get invitedOrBetter(): boolean;
        get power(): number;
        get enemyOrWorse(): boolean;
        get noneOrBetter(): boolean;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TeamRank}.
     */
    export type $TeamRank_ = "enemy" | "none" | "ally" | "invited" | "member" | "officer" | "owner";
    export class $Team {
    }
    export interface $Team {
        getMembers(): $Set<$UUID>;
        getName(): $Component;
        getProperty<T>(arg0: $TeamProperty<T>): T;
        setProperty<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getProperties(): $TeamPropertyCollection;
        getId(): $UUID;
        getOwner(): $UUID;
        isValid(): boolean;
        getShortName(): string;
        isPartyTeam(): boolean;
        syncOnePropertyToTeam<T>(arg0: $TeamProperty<T>, arg1: T): void;
        getExtraData(): $CompoundTag;
        getOnlineMembers(): $Collection<$ServerPlayer>;
        sendMessage(arg0: $UUID_, arg1: $Component_): void;
        sendMessage(arg0: $UUID_, arg1: string): void;
        getTeamId(): $UUID;
        markDirty(): void;
        isPlayerTeam(): boolean;
        getMessageHistory(): $List<$TeamMessage>;
        getRankForPlayer(arg0: $UUID_): $TeamRank;
        getTeamInfo(): $List<$Component>;
        getPlayersByRank(arg0: $TeamRank_): $Map<$UUID, $TeamRank>;
        getColoredName(): $Component;
        isClientTeam(): boolean;
        createParty(arg0: string, arg1: $Color4I): $Team;
        isServerTeam(): boolean;
        getTypeTranslationKey(): string;
        syncOnePropertyToAll<T>(arg0: $MinecraftServer, arg1: $TeamProperty<T>, arg2: T): void;
        get members(): $Set<$UUID>;
        get name(): $Component;
        get properties(): $TeamPropertyCollection;
        get id(): $UUID;
        get owner(): $UUID;
        get valid(): boolean;
        get shortName(): string;
        get partyTeam(): boolean;
        get extraData(): $CompoundTag;
        get onlineMembers(): $Collection<$ServerPlayer>;
        get teamId(): $UUID;
        get playerTeam(): boolean;
        get messageHistory(): $List<$TeamMessage>;
        get teamInfo(): $List<$Component>;
        get coloredName(): $Component;
        get clientTeam(): boolean;
        get serverTeam(): boolean;
        get typeTranslationKey(): string;
    }
    export class $TeamMessage {
    }
    export interface $TeamMessage {
        text(): $Component;
        date(): number;
        sender(): $UUID;
    }
}
