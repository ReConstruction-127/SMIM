import { $Message } from "@package/org/apache/logging/log4j/message";

declare module "@package/org/apache/logging/log4j/util" {
    export class $MessageSupplier {
    }
    export interface $MessageSupplier {
        get(): $Message;
    }
    /**
     * Values that may be interpreted as {@link $MessageSupplier}.
     */
    export type $MessageSupplier_ = (() => $Message);
    /**
     * @deprecated
     */
    export class $Supplier<T> {
    }
    export interface $Supplier<T> {
        get(): T;
    }
    /**
     * Values that may be interpreted as {@link $Supplier}.
     */
    export type $Supplier_<T> = (() => T);
}
