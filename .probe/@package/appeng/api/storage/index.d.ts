import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $IGridNodeService, $IManagedGridNode } from "@package/appeng/api/networking";
import { $Actionable_ } from "@package/appeng/api/config";
import { $IActionSource } from "@package/appeng/api/networking/security";
import { $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/storage" {
    export class $MEStorage {
        static checkPreconditions(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): void;
    }
    export interface $MEStorage {
        getDescription(): $Component;
        extract(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        insert(arg0: $AEKey, arg1: number, arg2: $Actionable_, arg3: $IActionSource): number;
        getAvailableStacks(): $KeyCounter;
        getAvailableStacks(arg0: $KeyCounter): void;
        isPreferredStorageFor(arg0: $AEKey, arg1: $IActionSource): boolean;
        get description(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $MEStorage}.
     */
    export type $MEStorage_ = (() => $Component_);
    export class $IStorageMounts {
        static DEFAULT_PRIORITY: number;
    }
    export interface $IStorageMounts {
        mount(arg0: $MEStorage_): void;
        mount(arg0: $MEStorage_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IStorageMounts}.
     */
    export type $IStorageMounts_ = ((arg0: $MEStorage, arg1: number) => void);
    export class $IStorageProvider {
        static requestUpdate(arg0: $IManagedGridNode): void;
    }
    export interface $IStorageProvider extends $IGridNodeService {
        mountInventories(arg0: $IStorageMounts_): void;
    }
    /**
     * Values that may be interpreted as {@link $IStorageProvider}.
     */
    export type $IStorageProvider_ = ((arg0: $IStorageMounts) => void);
    export class $AEKeyFilter {
        static none(): $AEKeyFilter;
    }
    export interface $AEKeyFilter {
        matches(arg0: $AEKey): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AEKeyFilter}.
     */
    export type $AEKeyFilter_ = ((arg0: $AEKey) => boolean);
}
