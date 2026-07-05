import { $DataFetcher$Task, $DataFetcher } from "@package/com/mojang/realmsclient/gui/task";
import { $RealmsPersistence } from "@package/com/mojang/realmsclient/util";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $RealmsClient } from "@package/com/mojang/realmsclient/client";
import { $RealmsNews, $RealmsServer, $RealmsServerPlayerLists, $RealmsNotification } from "@package/com/mojang/realmsclient/dto";
export * as task from "@package/com/mojang/realmsclient/gui/task";

declare module "@package/com/mojang/realmsclient/gui" {
    export class $RealmsDataFetcher {
        getTasks(): $List<$DataFetcher$Task<never>>;
        dataFetcher: $DataFetcher;
        notificationsTask: $DataFetcher$Task<$List<$RealmsNotification>>;
        pendingInvitesTask: $DataFetcher$Task<number>;
        trialAvailabilityTask: $DataFetcher$Task<boolean>;
        newsTask: $DataFetcher$Task<$RealmsNews>;
        newsManager: $RealmsNewsManager;
        serverListUpdateTask: $DataFetcher$Task<$RealmsDataFetcher$ServerListData>;
        onlinePlayersTask: $DataFetcher$Task<$RealmsServerPlayerLists>;
        constructor(realmsClient: $RealmsClient);
        get tasks(): $List<$DataFetcher$Task<never>>;
    }
    export class $RealmsDataFetcher$ServerListData extends $Record {
        serverList(): $List<$RealmsServer>;
        availableSnapshotServers(): $List<$RealmsServer>;
        constructor(arg0: $List_<$RealmsServer>, arg1: $List_<$RealmsServer>);
    }
    /**
     * Values that may be interpreted as {@link $RealmsDataFetcher$ServerListData}.
     */
    export type $RealmsDataFetcher$ServerListData_ = { serverList?: $List_<$RealmsServer>, availableSnapshotServers?: $List_<$RealmsServer>,  } | [serverList?: $List_<$RealmsServer>, availableSnapshotServers?: $List_<$RealmsServer>, ];
    export class $RealmsNewsManager {
        newsLink(): string;
        updateUnreadNews(realmsNews: $RealmsNews): void;
        hasUnreadNews(): boolean;
        constructor(newsLocalStorage: $RealmsPersistence);
    }
}
