import { $Instant } from "@package/java/time";
import { $Unit } from "@package/com/mojang/datafixers/util";
import { $Screen } from "@package/net/minecraft/client/gui/screens";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $AbuseReportLimits, $AbuseReport_ } from "@package/com/mojang/authlib/minecraft/report";
import { $Minecraft } from "@package/net/minecraft/client";
import { $AbuseReportRequest$ThirdPartyServerInfo, $AbuseReportRequest$RealmInfo, $AbuseReportRequest$ClientInfo } from "@package/com/mojang/authlib/yggdrasil/request";
import { $UUID_ } from "@package/java/util";
import { $Runnable_, $Enum, $Record } from "@package/java/lang";
import { $ChatLog } from "@package/net/minecraft/client/multiplayer/chat";
import { $UserApiService } from "@package/com/mojang/authlib/minecraft";
import { $RealmsServer } from "@package/com/mojang/realmsclient/dto";

declare module "@package/net/minecraft/client/multiplayer/chat/report" {
    export class $ReportEnvironment$Server {
    }
    export interface $ReportEnvironment$Server {
    }
    export class $ReportType extends $Enum<$ReportType> {
        static values(): $ReportType[];
        static valueOf(arg0: string): $ReportType;
        backendName(): string;
        static CHAT: $ReportType;
        static USERNAME: $ReportType;
        static SKIN: $ReportType;
    }
    /**
     * Values that may be interpreted as {@link $ReportType}.
     */
    export type $ReportType_ = "chat" | "skin" | "username";
    export class $AbuseReportSender {
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $AbuseReportSender;
    }
    export interface $AbuseReportSender {
        isEnabled(): boolean;
        send(id: $UUID_, reportType: $ReportType_, report: $AbuseReport_): $CompletableFuture<$Unit>;
        reportLimits(): $AbuseReportLimits;
        get enabled(): boolean;
    }
    export class $ReportingContext {
        matches(environment: $ReportEnvironment_): boolean;
        static create(environment: $ReportEnvironment_, userApiService: $UserApiService): $ReportingContext;
        draftReportHandled(minecraft: $Minecraft, screen: $Screen, quitter: $Runnable_, quitToTitle: boolean): void;
        hasDraftReport(): boolean;
        sender(): $AbuseReportSender;
        hasDraftReportFor(uuid: $UUID_): boolean;
        setReportDraft(draftReport: $Report | null): void;
        chatLog(): $ChatLog;
        constructor(sender: $AbuseReportSender, enviroment: $ReportEnvironment_, chatLog: $ChatLog);
        set reportDraft(value: $Report | null);
    }
    export class $ReportEnvironment extends $Record {
        static create(server: $ReportEnvironment$Server | null): $ReportEnvironment;
        static local(): $ReportEnvironment;
        server(): $ReportEnvironment$Server;
        clientVersion(): string;
        static realm(realmsServer: $RealmsServer): $ReportEnvironment;
        realmInfo(): $AbuseReportRequest$RealmInfo;
        static thirdParty(ip: string): $ReportEnvironment;
        clientInfo(): $AbuseReportRequest$ClientInfo;
        thirdPartyServerInfo(): $AbuseReportRequest$ThirdPartyServerInfo;
        constructor(arg0: string, arg1: $ReportEnvironment$Server | null);
    }
    /**
     * Values that may be interpreted as {@link $ReportEnvironment}.
     */
    export type $ReportEnvironment_ = { clientVersion?: string, server?: $ReportEnvironment$Server,  } | [clientVersion?: string, server?: $ReportEnvironment$Server, ];
    export class $Report {
        copy(): $Report;
        createScreen(lastScreen: $Screen, reportingContext: $ReportingContext): $Screen;
        isReportedPlayer(playerId: $UUID_): boolean;
        constructor(reportId: $UUID_, createdAt: $Instant, reportedProfileId: $UUID_);
    }
}
