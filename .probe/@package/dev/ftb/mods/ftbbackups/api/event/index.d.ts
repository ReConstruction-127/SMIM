import { $Consumer_ } from "@package/java/util/function";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Path_, $Path } from "@package/java/nio/file";
import { $Exception } from "@package/java/lang";
import { $IArchivalPlugin, $Backup, $Backup_ } from "@package/dev/ftb/mods/ftbbackups/api";

declare module "@package/dev/ftb/mods/ftbbackups/api/event" {
    export class $BackupEvent$Post extends $BackupEvent {
        getError(): ($Exception) | undefined;
        getBackup(): $Backup;
        constructor(arg0: $Backup_, arg1: $Exception | null);
        get error(): ($Exception) | undefined;
        get backup(): $Backup;
    }
    export class $BackupEvent extends $Event {
        constructor();
    }
    export class $RegisterArchivalPluginEvent extends $Event {
        register(arg0: $IArchivalPlugin): void;
        constructor(arg0: $Consumer_<$IArchivalPlugin>);
    }
    export class $BackupEvent$Pre extends $BackupEvent {
        add(arg0: $Path_): void;
        constructor(arg0: $Consumer_<$Path>);
    }
}
