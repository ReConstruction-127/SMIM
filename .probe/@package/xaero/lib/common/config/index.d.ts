import { $IConfigChangeListener } from "@package/xaero/lib/common/config/listener";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
import { $Iterable } from "@package/java/lang";
export * as server from "@package/xaero/lib/common/config/server";
export * as option from "@package/xaero/lib/common/config/option";
export * as single from "@package/xaero/lib/common/config/single";
export * as profile from "@package/xaero/lib/common/config/profile";
export * as channel from "@package/xaero/lib/common/config/channel";
export * as listener from "@package/xaero/lib/common/config/listener";
export * as sync from "@package/xaero/lib/common/config/sync";

declare module "@package/xaero/lib/common/config" {
    export class $Config {
        reset(): void;
        get<T>(arg0: $ConfigOption<T>): T;
        set<T>(arg0: $ConfigOption<T>, arg1: T): T;
        getChangeListener(): $IConfigChangeListener;
        setChangeListener(arg0: $IConfigChangeListener): void;
        addFailedSerializedValue<T>(arg0: $ConfigOption<T>, arg1: string): void;
        getFailedSerializedValue(arg0: $ConfigOption<never>): string;
        getRemovedLargeOptions(): $Iterable<$ConfigOption<never>>;
        postSave(): void;
        getDirtyOptions(): $Iterable<$ConfigOption<never>>;
        getChangeCount(): number;
        setOptionDefault<T>(arg0: $ConfigOption<T>): void;
        clearDirtyOptions(): void;
        setDefaults(): void;
        copyOptionFrom<T>(arg0: $ConfigOption<T>, arg1: $Config): void;
        isAllowNullValues(): boolean;
        copyOptionsFrom(arg0: $Config): void;
        usedOptions(): $Iterable<$ConfigOption<never>>;
        get removedLargeOptions(): $Iterable<$ConfigOption<never>>;
        get dirtyOptions(): $Iterable<$ConfigOption<never>>;
        get changeCount(): number;
        set optionDefault(value: $ConfigOption<T>);
        get allowNullValues(): boolean;
    }
}
