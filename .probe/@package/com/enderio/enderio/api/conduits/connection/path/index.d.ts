import { $Function_ } from "@package/java/util/function";
import { $List_, $Map_, $Map, $List } from "@package/java/util";
import { $ConduitBlockConnection, $ConduitBlockConnection_ } from "@package/com/enderio/enderio/api/conduits/connection";

declare module "@package/com/enderio/enderio/api/conduits/connection/path" {
    export class $ConnectionPathProperty<T> {
        defaultValue(): T;
        aggregate(arg0: $List_<T>): T;
        static sumInt(arg0: number): $ConnectionPathProperty<number>;
        static avgLong(arg0: number): $ConnectionPathProperty<number>;
        static sumLong(arg0: number): $ConnectionPathProperty<number>;
        static minInt(arg0: number): $ConnectionPathProperty<number>;
        static maxInt(arg0: number): $ConnectionPathProperty<number>;
        static minLong(arg0: number): $ConnectionPathProperty<number>;
        static avgInt(arg0: number): $ConnectionPathProperty<number>;
        static maxLong(arg0: number): $ConnectionPathProperty<number>;
        constructor(arg0: $Function_<$List<T>, (T) | undefined>, arg1: T);
    }
    export class $ConduitConnectionPath {
        length(): number;
        reverse(): $ConduitConnectionPath;
        end(): $ConduitBlockConnection;
        properties(): $Map<$ConnectionPathProperty<never>, never>;
        start(): $ConduitBlockConnection;
        property<T>(arg0: $ConnectionPathProperty<T>): T;
        constructor(arg0: $ConduitBlockConnection_, arg1: $ConduitBlockConnection_, arg2: number, arg3: $Map_<$ConnectionPathProperty<never>, never>);
    }
    export class $ConnectionPathPropertyConsumer {
    }
    export interface $ConnectionPathPropertyConsumer {
        accept<T>(arg0: $ConnectionPathProperty<T>, arg1: T): void;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionPathPropertyConsumer}.
     */
    export type $ConnectionPathPropertyConsumer_ = ((arg0: $ConnectionPathProperty<any>, arg1: any) => void);
}
