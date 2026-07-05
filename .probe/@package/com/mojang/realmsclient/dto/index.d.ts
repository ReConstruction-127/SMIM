import { $JsonElement_, $JsonObject_ } from "@package/com/google/gson";
import { $ServerData } from "@package/net/minecraft/client/multiplayer";
import { $ProfileResult } from "@package/com/mojang/authlib/yggdrasil";
import { $URI } from "@package/java/net";
import { $Enum, $Object } from "@package/java/lang";
import { $UUID, $List, $Map_, $Map, $Set, $UUID_, $Date } from "@package/java/util";

declare module "@package/com/mojang/realmsclient/dto" {
    export class $Ops extends $ValueObject {
        static parse(json: string): $Ops;
        ops: $Set<string>;
        constructor();
    }
    export class $Backup extends $ValueObject {
        static parse(json: $JsonElement_): $Backup;
        isUploadedVersion(): boolean;
        setUploadedVersion(uploadedVersion: boolean): void;
        metadata: $Map<string, string>;
        size: number;
        lastModifiedDate: $Date;
        backupId: string;
        changeList: $Map<string, string>;
        constructor();
    }
    export class $ValueObject {
        constructor();
    }
    export class $PendingInvitesList extends $ValueObject {
        static parse(json: string): $PendingInvitesList;
        pendingInvites: $List<$PendingInvite>;
        constructor();
    }
    export class $WorldTemplatePaginatedList extends $ValueObject {
        static parse(json: string): $WorldTemplatePaginatedList;
        isLastPage(): boolean;
        total: number;
        size: number;
        templates: $List<$WorldTemplate>;
        page: number;
        constructor();
        constructor(size: number);
        get lastPage(): boolean;
    }
    export class $RealmsNews extends $ValueObject {
        static parse(json: string): $RealmsNews;
        newsLink: string;
        constructor();
    }
    export class $ServerActivityList extends $ValueObject {
        static parse(json: string): $ServerActivityList;
        periodInMillis: number;
        serverActivities: $List<$ServerActivity>;
        constructor();
    }
    export class $Subscription$SubscriptionType extends $Enum<$Subscription$SubscriptionType> {
        static values(): $Subscription$SubscriptionType[];
        static valueOf(arg0: string): $Subscription$SubscriptionType;
        static NORMAL: $Subscription$SubscriptionType;
        static RECURRING: $Subscription$SubscriptionType;
    }
    /**
     * Values that may be interpreted as {@link $Subscription$SubscriptionType}.
     */
    export type $Subscription$SubscriptionType_ = "normal" | "recurring";
    export class $UploadInfo extends $ValueObject {
        static parse(json: string): $UploadInfo;
        getToken(): string;
        static createRequest(token: string | null): string;
        isWorldClosed(): boolean;
        getUploadEndpoint(): $URI;
        static assembleUri(uri: string, port: number): $URI;
        get token(): string;
        get worldClosed(): boolean;
        get uploadEndpoint(): $URI;
    }
    export class $RealmsServer$Compatibility extends $Enum<$RealmsServer$Compatibility> {
        static values(): $RealmsServer$Compatibility[];
        static valueOf(arg0: string): $RealmsServer$Compatibility;
        isCompatible(): boolean;
        needsUpgrade(): boolean;
        needsDowngrade(): boolean;
        static COMPATIBLE: $RealmsServer$Compatibility;
        static NEEDS_DOWNGRADE: $RealmsServer$Compatibility;
        static UNVERIFIABLE: $RealmsServer$Compatibility;
        static NEEDS_UPGRADE: $RealmsServer$Compatibility;
        static INCOMPATIBLE: $RealmsServer$Compatibility;
        static RELEASE_TYPE_INCOMPATIBLE: $RealmsServer$Compatibility;
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$Compatibility}.
     */
    export type $RealmsServer$Compatibility_ = "unverifiable" | "incompatible" | "release_type_incompatible" | "needs_downgrade" | "needs_upgrade" | "compatible";
    export class $RealmsWorldOptions extends $ValueObject {
        clone(): $RealmsWorldOptions;
        static parse(json: $JsonObject_): $RealmsWorldOptions;
        setEmpty(empty: boolean): void;
        toJson(): string;
        getSlotName(slotIndex: number): string;
        getDefaultSlotName(slotIndex: number): string;
        static createEmptyDefaults(): $RealmsWorldOptions;
        static createDefaults(): $RealmsWorldOptions;
        spawnMonsters: boolean;
        spawnProtection: number;
        commandBlocks: boolean;
        templateImage: string;
        pvp: boolean;
        spawnNPCs: boolean;
        templateId: number;
        version: string;
        empty: boolean;
        difficulty: number;
        spawnAnimals: boolean;
        gameMode: number;
        forceGameMode: boolean;
        compatibility: $RealmsServer$Compatibility;
        constructor(pvp: boolean, spawnAnimals: boolean, spawnMonsters: boolean, spawnNPCs: boolean, spawnProtection: number, commandBlocks: boolean, difficulty: number, gameMode: number, forceGameMode: boolean, slotName: string, version: string, compatibility: $RealmsServer$Compatibility_);
    }
    export class $RealmsServer$State extends $Enum<$RealmsServer$State> {
        static values(): $RealmsServer$State[];
        static valueOf(arg0: string): $RealmsServer$State;
        static CLOSED: $RealmsServer$State;
        static UNINITIALIZED: $RealmsServer$State;
        static OPEN: $RealmsServer$State;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$State}.
     */
    export type $RealmsServer$State_ = "closed" | "open" | "uninitialized";
    export class $WorldTemplate$WorldTemplateType extends $Enum<$WorldTemplate$WorldTemplateType> {
        static values(): $WorldTemplate$WorldTemplateType[];
        static valueOf(arg0: string): $WorldTemplate$WorldTemplateType;
        static ADVENTUREMAP: $WorldTemplate$WorldTemplateType;
        static WORLD_TEMPLATE: $WorldTemplate$WorldTemplateType;
        static MINIGAME: $WorldTemplate$WorldTemplateType;
        static EXPERIENCE: $WorldTemplate$WorldTemplateType;
        static INSPIRATION: $WorldTemplate$WorldTemplateType;
    }
    /**
     * Values that may be interpreted as {@link $WorldTemplate$WorldTemplateType}.
     */
    export type $WorldTemplate$WorldTemplateType_ = "world_template" | "minigame" | "adventuremap" | "experience" | "inspiration";
    export class $WorldTemplate extends $ValueObject {
        static parse(json: $JsonObject_): $WorldTemplate;
        trailer: string;
        image: string;
        author: string;
        name: string;
        link: string;
        recommendedPlayers: string;
        id: string;
        type: $WorldTemplate$WorldTemplateType;
        version: string;
        constructor();
    }
    export class $RealmsServerPlayerLists extends $ValueObject {
        static parse(json: string): $RealmsServerPlayerLists;
        getProfileResultsFor(index: number): $List<$ProfileResult>;
        servers: $Map<number, $List<$ProfileResult>>;
        constructor();
    }
    export class $RealmsNotification {
        seen(): boolean;
        uuid(): $UUID;
        static parseList(json: string): $List<$RealmsNotification>;
        dismissable(): boolean;
    }
    export class $PlayerInfo extends $ValueObject implements $ReflectionBasedSerialization {
        isOperator(): boolean;
        getName(): string;
        setName(name: string): void;
        getUuid(): $UUID;
        setOnline(accepted: boolean): void;
        setOperator(accepted: boolean): void;
        setUuid(uuid: $UUID_): void;
        getOnline(): boolean;
        getAccepted(): boolean;
        setAccepted(accepted: boolean): void;
        constructor();
    }
    export class $Subscription extends $ValueObject {
        static parse(json: string): $Subscription;
        daysLeft: number;
        type: $Subscription$SubscriptionType;
        startDate: number;
        constructor();
    }
    export class $RealmsServerAddress extends $ValueObject {
        static parse(json: string): $RealmsServerAddress;
        address: string;
        resourcePackHash: string;
        resourcePackUrl: string;
        constructor();
    }
    export class $BackupList extends $ValueObject {
        static parse(json: string): $BackupList;
        backups: $List<$Backup>;
        constructor();
    }
    export class $PendingInvite extends $ValueObject {
        static parse(json: $JsonObject_): $PendingInvite;
        date: $Date;
        realmName: string;
        realmOwnerUuid: $UUID;
        invitationId: string;
        realmOwnerName: string;
        constructor();
    }
    export class $RealmsServerList extends $ValueObject {
        static parse(json: string): $RealmsServerList;
        servers: $List<$RealmsServer>;
        constructor();
    }
    export class $RegionPingResult extends $ValueObject implements $ReflectionBasedSerialization {
        ping(): number;
        constructor(regionName: string, ping: number);
    }
    export class $ServerActivity extends $ValueObject {
        static parse(json: $JsonObject_): $ServerActivity;
        leaveTime: number;
        profileUuid: string;
        joinTime: number;
        constructor();
    }
    export class $PingResult extends $ValueObject implements $ReflectionBasedSerialization {
        pingResults: $List<$RegionPingResult>;
        realmIds: $List<number>;
        constructor();
    }
    export class $RealmsServer extends $ValueObject {
        getDescription(): string;
        getName(): string;
        clone(): $Object;
        setName(motd: string): void;
        static parse(json: $JsonObject_): $RealmsServer;
        static parse(json: string): $RealmsServer;
        setDescription(motd: string): void;
        isCompatible(): boolean;
        static getCompatibility(id: string | null): $RealmsServer$Compatibility;
        isSnapshotRealm(): boolean;
        needsUpgrade(): boolean;
        isMinigameActive(): boolean;
        toServerData(ip: string): $ServerData;
        getMinigameName(): string;
        getWorldName(slot: number): string;
        needsDowngrade(): boolean;
        cloneSlots(slots: $Map_<number, $RealmsWorldOptions>): $Map<number, $RealmsWorldOptions>;
        owner: string;
        motd: string;
        worldType: $RealmsServer$WorldType;
        ownerUUID: $UUID;
        expiredTrial: boolean;
        parentRealmId: number;
        players: $List<$PlayerInfo>;
        parentWorldName: string;
        minigameName: string;
        minigameImage: string;
        slots: $Map<number, $RealmsWorldOptions>;
        expired: boolean;
        activeSlot: number;
        minigameId: number;
        name: string;
        activeVersion: string;
        id: number;
        state: $RealmsServer$State;
        daysLeft: number;
        remoteSubscriptionId: string;
        compatibility: $RealmsServer$Compatibility;
        constructor();
        get compatible(): boolean;
        get snapshotRealm(): boolean;
        get minigameActive(): boolean;
    }
    export class $ReflectionBasedSerialization {
    }
    export interface $ReflectionBasedSerialization {
    }
    export class $RealmsServer$WorldType extends $Enum<$RealmsServer$WorldType> {
        static values(): $RealmsServer$WorldType[];
        static valueOf(arg0: string): $RealmsServer$WorldType;
        static ADVENTUREMAP: $RealmsServer$WorldType;
        static MINIGAME: $RealmsServer$WorldType;
        static EXPERIENCE: $RealmsServer$WorldType;
        static NORMAL: $RealmsServer$WorldType;
        static INSPIRATION: $RealmsServer$WorldType;
    }
    /**
     * Values that may be interpreted as {@link $RealmsServer$WorldType}.
     */
    export type $RealmsServer$WorldType_ = "normal" | "minigame" | "adventuremap" | "experience" | "inspiration";
    export class $WorldDownload extends $ValueObject {
        static parse(json: string): $WorldDownload;
        resourcePackHash: string;
        downloadLink: string;
        resourcePackUrl: string;
        constructor();
    }
}
