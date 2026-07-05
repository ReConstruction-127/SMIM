import { $Serializable } from "@package/java/io";
import { $Int2ByteFunction_, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction_, $IntCollection, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $IntBinaryOperator_ as $IntBinaryOperator_$1, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2DoubleFunction, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $Byte2ReferenceFunction, $Byte2LongFunction_, $Byte2DoubleFunction, $Byte2ShortFunction, $Byte2LongFunction, $Byte2ShortFunction_, $Byte2BooleanFunction, $Byte2ByteFunction, $Byte2IntFunction_, $Byte2ObjectFunction_, $Byte2FloatFunction, $Byte2DoubleFunction_, $Byte2CharFunction, $Byte2ObjectFunction, $Byte2ByteFunction_, $Byte2CharFunction_, $Byte2ReferenceFunction_, $Byte2IntFunction, $Byte2FloatFunction_ } from "@package/it/unimi/dsi/fastutil/bytes";
import { $Hash, $Function } from "@package/it/unimi/dsi/fastutil";
import { $SortedMap, $PrimitiveIterator$OfLong, $Map, $Map$Entry, $ListIterator, $Spliterator, $List, $SequencedCollection, $Map_, $Collection, $SequencedSet, $Comparator, $Spliterator$OfLong, $Set, $Iterator } from "@package/java/util";
import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2ObjectFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2DoubleFunction, $Float2ReferenceFunction_, $Float2FloatFunction, $Float2IntFunction_, $Float2ReferenceFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $LongToDoubleFunction, $LongConsumer_ as $LongConsumer_$1, $LongToIntFunction, $LongPredicate as $LongPredicate$1, $Function as $Function$1, $LongPredicate_ as $LongPredicate_$1, $LongToIntFunction_, $BiConsumer_, $LongConsumer as $LongConsumer$1, $UnaryOperator_, $LongFunction, $Consumer_, $Predicate_, $LongUnaryOperator_, $Predicate, $Consumer, $LongFunction_, $Function_, $LongUnaryOperator as $LongUnaryOperator$1, $IntBinaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $Object2LongFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $ObjectCollection, $Object2ByteFunction_, $Reference2ByteFunction_, $Object2BooleanFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2ObjectFunction_, $Object2CharFunction_, $Object2FloatFunction, $Reference2CharFunction, $Reference2FloatFunction, $Object2CharFunction, $Reference2DoubleFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $ObjectSortedSet, $Object2DoubleFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2LongFunction, $Reference2LongFunction, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2FloatFunction_, $Object2ByteFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Object2ObjectFunction, $ObjectSet } from "@package/it/unimi/dsi/fastutil/objects";
import { $LongStream, $Stream } from "@package/java/util/stream";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2ObjectFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2DoubleFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2BooleanFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ObjectFunction, $Char2CharFunction_, $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2CharFunction, $Char2ShortFunction, $Char2LongFunction_, $Char2ReferenceFunction_, $Char2DoubleFunction, $Char2ByteFunction, $Char2ReferenceFunction } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2LongFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Cloneable, $Comparable, $Iterable, $Object } from "@package/java/lang";
import { $Short2IntFunction_, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ByteFunction_, $Short2CharFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/longs" {
    export class $LongPredicate {
    }
    export interface $LongPredicate extends $Predicate<number>, $LongPredicate$1 {
        /**
         * @deprecated
         */
        test(arg0: number): boolean;
        /**
         * @deprecated
         */
        or(arg0: $Predicate_<number>): $Predicate<number>;
        or(arg0: $LongPredicate_$1): $LongPredicate;
        or(arg0: $LongPredicate_): $LongPredicate;
        and(arg0: $LongPredicate_): $LongPredicate;
        /**
         * @deprecated
         */
        and(arg0: $Predicate_<number>): $Predicate<number>;
        negate(): $Predicate<number>;
    }
    /**
     * Values that may be interpreted as {@link $LongPredicate}.
     */
    export type $LongPredicate_ = (() => void);
    export class $LongCollection {
    }
    export interface $LongCollection extends $Collection<number>, $LongIterable {
        /**
         * @deprecated
         */
        toLongArray(arg0: number[]): number[];
        toLongArray(): number[];
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        toArray(arg0: number[]): number[];
        iterator(): $LongIterator;
        /**
         * @deprecated
         */
        stream(): $Stream<number>;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        contains(arg0: number): boolean;
        addAll(arg0: $LongCollection): boolean;
        /**
         * @deprecated
         */
        removeIf(arg0: $Predicate_<number>): boolean;
        removeIf(arg0: $LongPredicate_$1): boolean;
        removeIf(arg0: $LongPredicate_): boolean;
        removeAll(arg0: $LongCollection): boolean;
        retainAll(arg0: $LongCollection): boolean;
        containsAll(arg0: $LongCollection): boolean;
        /**
         * @deprecated
         */
        parallelStream(): $Stream<number>;
        rem(arg0: number): boolean;
        longStream(): $LongStream;
        longSpliterator(): $LongSpliterator;
        longIterator(): $LongIterator;
        longParallelStream(): $LongStream;
        spliterator(): $Spliterator<number>;
    }
    export class $Long2ObjectMap<V> {
    }
    export interface $Long2ObjectMap<V> extends $Long2ObjectFunction<V>, $Map<number, V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        values(): $ObjectCollection<V>;
        clear(): void;
        replace(arg0: number, arg1: V, arg2: V): boolean;
        replace(arg0: number, arg1: V): V;
        merge(arg0: number, arg1: V, arg2: $BiFunction_<V, V, V>): V;
        putIfAbsent(arg0: number, arg1: V): V;
        compute(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        forEach(arg0: $BiConsumer_<number, V>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        computeIfAbsent(arg0: number, arg1: $LongFunction_<V>): V;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, V, V>): V;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2ObjectFunction_<V>): V;
        long2ObjectEntrySet(): $ObjectSet<$Long2ObjectMap$Entry<V>>;
        defaultReturnValue(): V;
        defaultReturnValue(arg0: V): void;
        entrySet(): $Set<$Map$Entry<number, V>>;
        keySet(): $Set<number>;
    }
    export class $Long2DoubleFunction {
    }
    export interface $Long2DoubleFunction extends $Function<number, number>, $LongToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Double2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Double2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2DoubleFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2DoubleFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2DoubleFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2DoubleFunction;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Double2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2DoubleFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2DoubleFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2DoubleFunction<T>;
        andThenInt(arg0: $Double2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2DoubleFunction}.
     */
    export type $Long2DoubleFunction_ = ((arg0: number) => number);
    export class $AbstractLong2ObjectSortedMap<V> extends $AbstractLong2ObjectMap<V> implements $Long2ObjectSortedMap<V> {
        /**
         * @deprecated
         */
        entrySet(): $ObjectSortedSet<$Map$Entry<number, V>>;
        /**
         * @deprecated
         */
        subMap(arg0: number, arg1: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        headMap(arg0: number): $Long2ObjectSortedMap<V>;
        /**
         * @deprecated
         */
        tailMap(arg0: number): $Long2ObjectSortedMap<V>;
        reversed(): $SortedMap<number, V>;
        putFirst(arg0: number, arg1: V): V;
        putLast(arg0: number, arg1: V): V;
        sequencedKeySet(): $SequencedSet<number>;
        sequencedValues(): $SequencedCollection<V>;
        sequencedEntrySet(): $SequencedSet<$Map$Entry<number, V>>;
        firstEntry(): $Map$Entry<number, V>;
        lastEntry(): $Map$Entry<number, V>;
        pollFirstEntry(): $Map$Entry<number, V>;
        pollLastEntry(): $Map$Entry<number, V>;
        values(): $ObjectCollection<V>;
        keySet(): $LongSortedSet;
        firstKey(): number;
        lastKey(): number;
    }
    export class $LongConsumer {
    }
    export interface $LongConsumer extends $Consumer<number>, $LongConsumer$1 {
        /**
         * @deprecated
         */
        accept(arg0: number): void;
        /**
         * @deprecated
         */
        andThen(arg0: $Consumer_<number>): $Consumer<number>;
        andThen(arg0: $LongConsumer_): $LongConsumer;
    }
    /**
     * Values that may be interpreted as {@link $LongConsumer}.
     */
    export type $LongConsumer_ = (() => void);
    export class $Long2ByteFunction {
    }
    export interface $Long2ByteFunction extends $Function<number, number>, $LongToIntFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Byte2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ByteFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ByteFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ByteFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2ByteFunction;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Byte2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ByteFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ByteFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ByteFunction<T>;
        andThenInt(arg0: $Byte2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2ByteFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2ByteFunction}.
     */
    export type $Long2ByteFunction_ = ((arg0: number) => number);
    export class $LongSet {
        static of(arg0: number, arg1: number): $LongSet;
        static of(): $LongSet;
        static of(...arg0: number[]): $LongSet;
        static of(arg0: number): $LongSet;
        static of(arg0: number, arg1: number, arg2: number): $LongSet;
    }
    export interface $LongSet extends $LongCollection, $Set<number> {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        spliterator(): $LongSpliterator;
        /**
         * @deprecated
         */
        rem(arg0: number): boolean;
        iterator(): $LongIterator;
    }
    export class $Long2ObjectMap$Entry<V> {
    }
    export interface $Long2ObjectMap$Entry<V> extends $Map$Entry<number, V> {
        /**
         * @deprecated
         */
        getKey(): number;
        getLongKey(): number;
        get key(): number;
        get longKey(): number;
    }
    export class $Long2BooleanFunction {
    }
    export interface $Long2BooleanFunction extends $Function<number, boolean>, $LongPredicate$1 {
        remove(arg0: number): boolean;
        /**
         * @deprecated
         */
        get(arg0: $Object): boolean;
        get(arg0: number): boolean;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: boolean): boolean;
        put(arg0: number, arg1: boolean): boolean;
        test(arg0: number): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: boolean): boolean;
        getOrDefault(arg0: number, arg1: boolean): boolean;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, boolean>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<boolean, T>): $Function$1<number, T>;
        defaultReturnValue(): boolean;
        defaultReturnValue(arg0: boolean): void;
        andThenShort(arg0: $Boolean2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2BooleanFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2BooleanFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2BooleanFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2BooleanFunction;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Boolean2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2BooleanFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2BooleanFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2BooleanFunction<T>;
        andThenInt(arg0: $Boolean2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2BooleanFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2BooleanFunction}.
     */
    export type $Long2BooleanFunction_ = ((arg0: number) => boolean);
    export class $LongIterable {
        [Symbol.iterator](): Iterator<number>
    }
    export interface $LongIterable extends $Iterable<number> {
        forEach(arg0: $LongConsumer_$1): void;
        /**
         * @deprecated
         */
        forEach(arg0: $Consumer_<number>): void;
        forEach(arg0: $LongConsumer_): void;
        longSpliterator(): $LongSpliterator;
        longIterator(): $LongIterator;
        iterator(): $Iterator<number>;
        spliterator(): $Spliterator<number>;
        [Symbol.iterator](): Iterator<number>
    }
    /**
     * Values that may be interpreted as {@link $LongIterable}.
     */
    export type $LongIterable_ = (() => $Iterator<number>);
    export class $LongIterator {
    }
    export interface $LongIterator extends $PrimitiveIterator$OfLong {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $LongConsumer_): void;
        skip(arg0: number): number;
        nextLong(): number;
        next(): number;
    }
    export class $Long2LongFunction {
        static identity(): $Long2LongFunction;
    }
    export interface $Long2LongFunction extends $Function<number, number>, $LongUnaryOperator$1 {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsLong(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Long2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Long2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2LongFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2LongFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2LongFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2LongFunction;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Long2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2LongFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2LongFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2LongFunction<T>;
        andThenInt(arg0: $Long2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2LongFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2LongFunction}.
     */
    export type $Long2LongFunction_ = ((arg0: number) => number);
    export class $Long2ShortFunction {
    }
    export interface $Long2ShortFunction extends $Function<number, number>, $LongToIntFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Short2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Short2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Short2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ShortFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ShortFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2ShortFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2ShortFunction;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Short2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2ShortFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ShortFunction<T>;
        andThenInt(arg0: $Short2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2ShortFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2ShortFunction}.
     */
    export type $Long2ShortFunction_ = ((arg0: number) => number);
    export class $LongList {
        static of(...arg0: number[]): $LongList;
        static of(): $LongList;
        static of(arg0: number, arg1: number): $LongList;
        static of(arg0: number): $LongList;
        static of(arg0: number, arg1: number, arg2: number): $LongList;
    }
    export interface $LongList extends $List<number>, $Comparable<$List<number>>, $LongCollection {
        /**
         * @deprecated
         */
        remove(arg0: $Object): boolean;
        size(arg0: number): void;
        indexOf(arg0: number): number;
        /**
         * @deprecated
         */
        indexOf(arg0: $Object): number;
        getLong(arg0: number): number;
        lastIndexOf(arg0: number): number;
        /**
         * @deprecated
         */
        lastIndexOf(arg0: $Object): number;
        replaceAll(arg0: $LongUnaryOperator): void;
        /**
         * @deprecated
         */
        replaceAll(arg0: $UnaryOperator_<number>): void;
        replaceAll(arg0: $LongUnaryOperator_): void;
        /**
         * @deprecated
         */
        add(arg0: number): boolean;
        add(arg0: number, arg1: number): void;
        /**
         * @deprecated
         */
        add(arg0: number, arg1: number): void;
        add(arg0: number): boolean;
        iterator(): $LongListIterator;
        /**
         * @deprecated
         */
        contains(arg0: $Object): boolean;
        addAll(arg0: number, arg1: $LongCollection): boolean;
        addAll(arg0: $LongList): boolean;
        addAll(arg0: number, arg1: $LongList): boolean;
        set(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        set(arg0: number, arg1: number): number;
        sort(arg0: $LongComparator): void;
        /**
         * @deprecated
         */
        sort(arg0: $Comparator<number>): void;
        getElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number, arg1: number[]): void;
        setElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        setElements(arg0: number[]): void;
        /**
         * @deprecated
         */
        unstableSort(arg0: $Comparator<number>): void;
        unstableSort(arg0: $LongComparator): void;
        removeElements(arg0: number, arg1: number): void;
        addElements(arg0: number, arg1: number[], arg2: number, arg3: number): void;
        addElements(arg0: number, arg1: number[]): void;
        removeLong(arg0: number): number;
        get(arg0: number): number;
        subList(arg0: number, arg1: number): $List<number>;
        spliterator(): $Spliterator<number>;
        listIterator(arg0: number): $ListIterator<number>;
        listIterator(): $ListIterator<number>;
    }
    export class $Long2CharFunction {
    }
    export interface $Long2CharFunction extends $Function<number, string>, $LongToIntFunction {
        remove(arg0: number): string;
        /**
         * @deprecated
         */
        remove(arg0: $Object): string;
        /**
         * @deprecated
         */
        get(arg0: $Object): string;
        get(arg0: number): string;
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: string): string;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: string): string;
        getOrDefault(arg0: number, arg1: string): string;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, string>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<string, T>): $Function$1<number, T>;
        defaultReturnValue(): string;
        defaultReturnValue(arg0: string): void;
        andThenShort(arg0: $Char2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Char2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Char2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2CharFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2CharFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2CharFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2CharFunction;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Char2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2CharFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2CharFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2CharFunction<T>;
        andThenInt(arg0: $Char2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2CharFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2CharFunction}.
     */
    export type $Long2CharFunction_ = ((arg0: number) => string);
    export class $Long2ReferenceFunction<V> {
    }
    export interface $Long2ReferenceFunction<V> extends $Function<number, V>, $LongFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Long2ShortFunction;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Long2DoubleFunction;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Long2LongFunction;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ReferenceFunction<T, V>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ReferenceFunction<V>;
        composeFloat(arg0: $Float2LongFunction_): $Float2ReferenceFunction<V>;
        composeChar(arg0: $Char2LongFunction_): $Char2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2ReferenceFunction<V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ReferenceFunction<V>;
        composeShort(arg0: $Short2LongFunction_): $Short2ReferenceFunction<V>;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2ReferenceFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ReferenceFunction}.
     */
    export type $Long2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Long2IntMap {
    }
    export interface $Long2IntMap extends $Long2IntFunction, $Map<number, number> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        remove(arg0: number, arg1: number): boolean;
        /**
         * @deprecated
         */
        remove(arg0: $Object, arg1: $Object): boolean;
        size(): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        values(): $IntCollection;
        clear(): void;
        replace(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number): number;
        replace(arg0: number, arg1: number, arg2: number): boolean;
        /**
         * @deprecated
         */
        replace(arg0: number, arg1: number, arg2: number): boolean;
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        merge(arg0: number, arg1: number, arg2: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        entrySet(): $ObjectSet<$Map$Entry<number, number>>;
        /**
         * @deprecated
         */
        putIfAbsent(arg0: number, arg1: number): number;
        putIfAbsent(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        compute(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        forEach(arg0: $BiConsumer_<number, number>): void;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        computeIfAbsent(arg0: number, arg1: $LongToIntFunction_): number;
        /**
         * @deprecated
         */
        computeIfAbsent(arg0: number, arg1: $Function_<number, number>): number;
        computeIfAbsent(arg0: number, arg1: $Long2IntFunction_): number;
        containsValue(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsValue(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        computeIfPresent(arg0: number, arg1: $BiFunction_<number, number, number>): number;
        /**
         * @deprecated
         */
        computeIfAbsentPartial(arg0: number, arg1: $Long2IntFunction_): number;
        computeIfAbsentNullable(arg0: number, arg1: $LongFunction_<number>): number;
        defaultReturnValue(arg0: number): void;
        defaultReturnValue(): number;
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_): number;
        mergeInt(arg0: number, arg1: number, arg2: $IntBinaryOperator_$1): number;
        long2IntEntrySet(): $ObjectSet<$Long2IntMap$Entry>;
        keySet(): $Set<number>;
    }
    export class $Long2ObjectFunction<V> {
    }
    export interface $Long2ObjectFunction<V> extends $Function<number, V>, $LongFunction<V> {
        /**
         * @deprecated
         */
        remove(arg0: $Object): V;
        remove(arg0: number): V;
        /**
         * @deprecated
         */
        get(arg0: $Object): V;
        get(arg0: number): V;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: V): V;
        put(arg0: number, arg1: V): V;
        apply(arg0: number): V;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        getOrDefault(arg0: number, arg1: V): V;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: V): V;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, V>;
        defaultReturnValue(arg0: V): void;
        defaultReturnValue(): V;
        andThenShort(arg0: $Object2ShortFunction_<V>): $Long2ShortFunction;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Long2DoubleFunction;
        andThenLong(arg0: $Object2LongFunction_<V>): $Long2LongFunction;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2ObjectFunction<T, V>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2ObjectFunction<V>;
        composeFloat(arg0: $Float2LongFunction_): $Float2ObjectFunction<V>;
        composeChar(arg0: $Char2LongFunction_): $Char2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2ObjectFunction<V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2ObjectFunction<V>;
        composeShort(arg0: $Short2LongFunction_): $Short2ObjectFunction<V>;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2ObjectFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Long2ObjectFunction}.
     */
    export type $Long2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Long2IntFunction {
    }
    export interface $Long2IntFunction extends $Function<number, number>, $LongToIntFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsInt(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Int2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Int2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Int2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2IntFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2IntFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2IntFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2IntFunction;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Int2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2IntFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2IntFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2IntFunction<T>;
        andThenInt(arg0: $Int2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2IntFunction}.
     */
    export type $Long2IntFunction_ = ((arg0: number) => number);
    export class $Long2IntMap$Entry {
    }
    export interface $Long2IntMap$Entry extends $Map$Entry<number, number> {
        /**
         * @deprecated
         */
        getValue(): number;
        /**
         * @deprecated
         */
        setValue(arg0: number): number;
        setValue(arg0: number): number;
        getLongKey(): number;
        getIntValue(): number;
        getKey(): number;
        get longKey(): number;
        get intValue(): number;
        get key(): number;
    }
    export class $Long2ObjectLinkedOpenHashMap<V> extends $AbstractLong2ObjectSortedMap<V> implements $Serializable, $Cloneable, $Hash {
        clone(): $Object;
        trim(): boolean;
        trim(arg0: number): boolean;
        ensureCapacity(arg0: number): void;
        removeFirst(): V;
        removeLast(): V;
        getAndMoveToLast(arg0: number): V;
        putAndMoveToLast(arg0: number, arg1: V): V;
        getAndMoveToFirst(arg0: number): V;
        putAndMoveToFirst(arg0: number, arg1: V): V;
        values(): $ObjectCollection<V>;
        firstKey(): number;
        lastKey(): number;
        constructor(arg0: $Map_<number, V>);
        constructor(arg0: $Long2ObjectMap<V>, arg1: number);
        constructor(arg0: $Long2ObjectMap<V>);
        constructor(arg0: number[], arg1: V[], arg2: number);
        constructor(arg0: number[], arg1: V[]);
        constructor(arg0: number, arg1: number);
        constructor(arg0: number);
        constructor();
        constructor(arg0: $Map_<number, V>, arg1: number);
    }
    export class $LongSpliterator {
    }
    export interface $LongSpliterator extends $Spliterator$OfLong {
        /**
         * @deprecated
         */
        forEachRemaining(arg0: $Consumer_<number>): void;
        forEachRemaining(arg0: $LongConsumer_): void;
        skip(arg0: number): number;
        /**
         * @deprecated
         */
        tryAdvance(arg0: $Consumer_<number>): boolean;
        tryAdvance(arg0: $LongConsumer_): boolean;
        trySplit(): $Spliterator<number>;
        getComparator(): $Comparator<number>;
        get comparator(): $Comparator<number>;
    }
    export class $Long2FloatFunction {
    }
    export interface $Long2FloatFunction extends $Function<number, number>, $LongToDoubleFunction {
        remove(arg0: number): number;
        /**
         * @deprecated
         */
        remove(arg0: $Object): number;
        /**
         * @deprecated
         */
        get(arg0: $Object): number;
        get(arg0: number): number;
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        put(arg0: number, arg1: number): number;
        /**
         * @deprecated
         */
        containsKey(arg0: $Object): boolean;
        containsKey(arg0: number): boolean;
        /**
         * @deprecated
         */
        getOrDefault(arg0: $Object, arg1: number): number;
        getOrDefault(arg0: number, arg1: number): number;
        applyAsDouble(arg0: number): number;
        /**
         * @deprecated
         */
        compose<T>(arg0: $Function_<T, number>): $Function$1<T, number>;
        /**
         * @deprecated
         */
        andThen<T>(arg0: $Function_<number, T>): $Function$1<number, T>;
        defaultReturnValue(): number;
        defaultReturnValue(arg0: number): void;
        andThenShort(arg0: $Float2ShortFunction_): $Long2ShortFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Long2ObjectFunction<T>;
        andThenDouble(arg0: $Float2DoubleFunction_): $Long2DoubleFunction;
        andThenLong(arg0: $Float2LongFunction_): $Long2LongFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Long2FloatFunction;
        composeReference<T>(arg0: $Reference2LongFunction_<T>): $Reference2FloatFunction<T>;
        composeByte(arg0: $Byte2LongFunction_): $Byte2FloatFunction;
        composeFloat(arg0: $Float2LongFunction_): $Float2FloatFunction;
        composeChar(arg0: $Char2LongFunction_): $Char2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Long2CharFunction;
        composeLong(arg0: $Long2LongFunction_): $Long2FloatFunction;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Long2ReferenceFunction<T>;
        andThenByte(arg0: $Float2ByteFunction_): $Long2ByteFunction;
        composeDouble(arg0: $Double2LongFunction_): $Double2FloatFunction;
        composeShort(arg0: $Short2LongFunction_): $Short2FloatFunction;
        composeObject<T>(arg0: $Object2LongFunction_<T>): $Object2FloatFunction<T>;
        andThenInt(arg0: $Float2IntFunction_): $Long2IntFunction;
        composeInt(arg0: $Int2LongFunction_): $Int2FloatFunction;
    }
    /**
     * Values that may be interpreted as {@link $Long2FloatFunction}.
     */
    export type $Long2FloatFunction_ = ((arg0: number) => number);
}
