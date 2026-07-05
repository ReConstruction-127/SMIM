import { $Config } from "@package/xaero/lib/common/config";
import { $AbstractConfigPacket$OptionEntry } from "@package/xaero/lib/common/packet/config";
import { $ConfigOptionManager } from "@package/xaero/lib/common/config/option";
import { $ConfigProfileInfoPacket$Entry } from "@package/xaero/lib/common/packet/config/profile";
import { $CommonConfigChannelSynchronizer } from "@package/xaero/lib/common/config/sync";
import { $SingleConfigManager } from "@package/xaero/lib/common/config/single";
import { $Logger } from "@package/org/apache/logging/log4j";
import { $Iterable_ } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $SyncedConfigProfileInfoManager } from "@package/xaero/lib/client/config/sync/profile";
import { $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/config/sync" {
    export class $ClientConfigChannelSynchronizer extends $CommonConfigChannelSynchronizer {
        reset(): void;
        createProfile(arg0: string, arg1: string, arg2: string): void;
        deleteProfile(arg0: string): void;
        onDeleteConfigProfilePacket(arg0: string): void;
        changeDefaultEnforcedProfileId(arg0: string): void;
        onEnforcedConfigPacket(arg0: boolean, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        onConfigProfileInfoPacket(arg0: $List_<$ConfigProfileInfoPacket$Entry>, arg1: string, arg2: boolean): void;
        onEditProfilePacket(arg0: string, arg1: $Iterable_<$AbstractConfigPacket$OptionEntry>): void;
        syncDirtyOptions(arg0: $ConfigProfile): void;
        requestProfile(arg0: string): void;
        logger: $Logger;
        constructor(arg0: $ConfigOptionManager, arg1: $SyncedConfigManager, arg2: $Logger);
    }
    export class $SyncedConfigManager extends $SingleConfigManager<$Config> {
        reset(): void;
        resetEdit(): void;
        receiveEditedProfile(arg0: $ConfigProfile): void;
        getDesiredEditedProfileId(): string;
        setSyncingEditedProfile(arg0: boolean): void;
        setDesiredEditedProfileId(arg0: string): void;
        isSyncingEditedProfile(): boolean;
        isChannelPresentOnServer(): boolean;
        getProfileInfoManager(): $SyncedConfigProfileInfoManager;
        setSynchronizer(arg0: $ClientConfigChannelSynchronizer): void;
        confirmEdit(arg0: $ConfigProfile): void;
        getEditedProfile(): $ConfigProfile;
        confirmChannelPresenceOnServer(): void;
        logger: $Logger;
        get channelPresentOnServer(): boolean;
        get profileInfoManager(): $SyncedConfigProfileInfoManager;
        set synchronizer(value: $ClientConfigChannelSynchronizer);
        get editedProfile(): $ConfigProfile;
    }
}
