import { $WorldGenerationInfo_ } from "@package/com/mojang/realmsclient/util";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $List, $UUID_, $List_ } from "@package/java/util";
import { $RealmsNews, $ServerActivityList, $RealmsServerAddress, $Ops, $RealmsServerList, $BackupList, $UploadInfo, $WorldTemplatePaginatedList, $RealmsServer, $RealmsServerPlayerLists, $PingResult, $PendingInvitesList, $RealmsWorldOptions, $Subscription, $WorldDownload, $RealmsServer$WorldType_, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/client" {
    export class $RealmsClient {
        update(worldId: number, arg1: string, name: string): void;
        join(serverId: number): $RealmsServerAddress;
        op(worldId: number, arg1: $UUID_): $Ops;
        close(worldId: number): boolean;
        open(worldId: number): boolean;
        static create(): $RealmsClient;
        static create(minecraft: $Minecraft): $RealmsClient;
        getNotifications(): $List<$RealmsNotification>;
        invite(worldId: number, arg1: string): $RealmsServer;
        updateSlot(worldId: number, arg1: number, slotId: $RealmsWorldOptions): void;
        deop(worldId: number, arg1: $UUID_): $Ops;
        backupsFor(worldId: number): $BackupList;
        agreeToTos(): void;
        switchSlot(worldId: number, arg1: number): boolean;
        getActivity(worldId: number): $ServerActivityList;
        uninvite(worldId: number, arg1: $UUID_): void;
        notificationsDismiss(uuidList: $List_<$UUID_>): void;
        sendPingResults(pingResult: $PingResult): void;
        notificationsSeen(uuidList: $List_<$UUID_>): void;
        pendingInvitesCount(): number;
        listSnapshotEligibleRealms(): $List<$RealmsServer>;
        getOwnRealm(id: number): $RealmsServer;
        hasParentalConsent(): boolean;
        initializeRealm(worldId: number, arg1: string, name: string): void;
        uninviteMyselfFrom(worldId: number): void;
        resetWorldWithSeed(worldId: number, arg1: $WorldGenerationInfo_): boolean;
        restoreWorld(worldId: number, arg1: string): void;
        clientCompatible(): $RealmsClient$CompatibleVersionResponse;
        subscriptionFor(worldId: number): $Subscription;
        rejectInvitation(inviteId: string): void;
        deleteRealm(worldId: number): void;
        pendingInvites(): $PendingInvitesList;
        acceptInvitation(inviteId: string): void;
        requestUploadInfo(worldId: number, arg1: string | null): $UploadInfo;
        listRealms(): $RealmsServerList;
        getNews(): $RealmsNews;
        trialAvailable(): boolean;
        getLiveStats(): $RealmsServerPlayerLists;
        resetWorldWithTemplate(worldId: number, arg1: string): boolean;
        putIntoMinigameMode(worldId: number, arg1: string): boolean;
        requestDownloadInfo(worldId: number, arg1: number): $WorldDownload;
        createSnapshotRealm(parentId: number): $RealmsServer;
        fetchWorldTemplates(page: number, pageSize: number, worldType: $RealmsServer$WorldType_): $WorldTemplatePaginatedList;
        static ENVIRONMENT: $RealmsClient$Environment;
        constructor(sessionId: string, username: string, minecraft: $Minecraft);
        get notifications(): $List<$RealmsNotification>;
        get news(): $RealmsNews;
        get liveStats(): $RealmsServerPlayerLists;
    }
    export class $RealmsClient$Environment extends $Enum<$RealmsClient$Environment> {
        static values(): $RealmsClient$Environment[];
        static valueOf(arg0: string): $RealmsClient$Environment;
        static byName(name: string): ($RealmsClient$Environment) | undefined;
        baseUrl: string;
        protocol: string;
        static STAGE: $RealmsClient$Environment;
        static LOCAL: $RealmsClient$Environment;
        static PRODUCTION: $RealmsClient$Environment;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$Environment}.
     */
    export type $RealmsClient$Environment_ = "production" | "stage" | "local";
    export class $RealmsClient$CompatibleVersionResponse extends $Enum<$RealmsClient$CompatibleVersionResponse> {
        static values(): $RealmsClient$CompatibleVersionResponse[];
        static valueOf(arg0: string): $RealmsClient$CompatibleVersionResponse;
        static OTHER: $RealmsClient$CompatibleVersionResponse;
        static COMPATIBLE: $RealmsClient$CompatibleVersionResponse;
        static OUTDATED: $RealmsClient$CompatibleVersionResponse;
    }
    /**
     * Values that may be interpreted as {@link $RealmsClient$CompatibleVersionResponse}.
     */
    export type $RealmsClient$CompatibleVersionResponse_ = "compatible" | "outdated" | "other";
}
