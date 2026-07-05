import { $Serializable } from "@package/java/io";
import { $Map$Entry } from "@package/java/util";
import { $Throwable, $Comparable } from "@package/java/lang";
import { $FailableBiFunction_, $FailableBiConsumer_ } from "@package/org/apache/commons/lang3/function";

declare module "@package/org/apache/commons/lang3/tuple" {
    export class $Pair<L, R> implements $Map$Entry<L, R>, $Comparable<$Pair<L, R>>, $Serializable {
        getLeft(): L;
        getRight(): R;
        toString(arg0: string): string;
        compareTo(arg0: $Pair<L, R>): number;
        getValue(): R;
        apply<V, E extends $Throwable>(arg0: $FailableBiFunction_<L, R, V, E>): V;
        static of<L, R>(arg0: L, arg1: R): $Pair<L, R>;
        static of<L, R>(arg0: $Map$Entry<L, R>): $Pair<L, R>;
        getKey(): L;
        accept<E extends $Throwable>(arg0: $FailableBiConsumer_<L, R, E>): void;
        static emptyArray<L, R>(): $Pair<L, R>[];
        static ofNonNull<L, R>(arg0: L, arg1: R): $Pair<L, R>;
        static EMPTY_ARRAY: $Pair<never, never>[];
        constructor();
        get left(): L;
        get right(): R;
        get value(): R;
        get key(): L;
    }
    export class $MutablePair<L, R> extends $Pair<L, R> {
        static of<L, R>(arg0: L, arg1: R): $MutablePair<L, R>;
        static of<L, R>(arg0: $Map$Entry<L, R>): $MutablePair<L, R>;
        static emptyArray<L, R>(): $MutablePair<L, R>[];
        static ofNonNull<L, R>(arg0: L, arg1: R): $MutablePair<L, R>;
        setRight(arg0: R): void;
        setLeft(arg0: L): void;
        static EMPTY_ARRAY: $MutablePair<never, never>[];
        left: L;
        right: R;
        constructor(arg0: L, arg1: R);
        constructor();
    }
}
