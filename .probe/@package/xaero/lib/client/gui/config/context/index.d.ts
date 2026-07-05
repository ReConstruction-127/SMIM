import { $Config } from "@package/xaero/lib/common/config";
import { $ConfigChannel } from "@package/xaero/lib/common/config/channel";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Iterable } from "@package/java/lang";
import { $IConfigProfileInfo, $ConfigProfile } from "@package/xaero/lib/common/config/profile";

declare module "@package/xaero/lib/client/gui/config/context" {
    export class $IEditConfigScreenContext {
    }
    export interface $IEditConfigScreenContext {
        reset(arg0: $ConfigChannel): void;
        createProfile(arg0: string, arg1: string, arg2: $ConfigChannel, arg3: string): void;
        hasPermission(arg0: $ConfigChannel): boolean;
        deleteProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getCurrentProfile(arg0: $ConfigChannel): $ConfigProfile;
        isClientSide(): boolean;
        getSyncStatus(arg0: $ConfigChannel): boolean;
        isAutoConfirm(): boolean;
        getEnforcedConfig(arg0: $ConfigChannel): $Config;
        setCurrentProfile(arg0: string, arg1: $ConfigChannel): void;
        confirmProfile(arg0: $ConfigProfile, arg1: $ConfigChannel): void;
        getSyncMessage(): $Component;
        getProfiles(arg0: $ConfigChannel): $Iterable<$IConfigProfileInfo>;
        getSelectedProfileId(arg0: $ConfigChannel): string;
        getDropdownNarration(): $Component;
        getScreenTitleFormat(): string;
        getDefaultProfileId(arg0: $ConfigChannel): string;
        isAutoDefaultProfile(): boolean;
        setDefaultProfileId(arg0: string, arg1: $ConfigChannel): void;
        profileExists(arg0: string, arg1: $ConfigChannel): boolean;
        get clientSide(): boolean;
        get autoConfirm(): boolean;
        get syncMessage(): $Component;
        get dropdownNarration(): $Component;
        get screenTitleFormat(): string;
        get autoDefaultProfile(): boolean;
    }
}
