import { $Consumer_, $Supplier, $Supplier_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Dist } from "@package/net/neoforged/api/distmarker";
import { $Runnable_, $Object, $Enum } from "@package/java/lang";

declare module "@package/dev/architectury/utils" {
    export class $Env extends $Enum<$Env> {
        static values(): $Env[];
        static valueOf(name: string): $Env;
        toPlatform(): $Dist;
        static fromPlatform(type: $Object): $Env;
        static SERVER: $Env;
        static CLIENT: $Env;
    }
    /**
     * Values that may be interpreted as {@link $Env}.
     */
    export type $Env_ = "client" | "server";
    export class $OptionalSupplier<T> {
    }
    export interface $OptionalSupplier<T> extends $Supplier<T> {
        stream(): $Stream<T>;
        isPresent(): boolean;
        orElse(other: T): T;
        ifPresent(action: $Consumer_<T>): void;
        ifPresentOrElse(action: $Consumer_<T>, emptyAction: $Runnable_): void;
        orElseGet(supplier: $Supplier_<T>): T;
        getOrNull(): T;
        toOptional(): (T) | undefined;
        get present(): boolean;
        get orNull(): T;
    }
}
