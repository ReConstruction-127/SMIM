import { $Float2LongFunction_, $Float2FloatFunction_, $Float2ShortFunction, $Float2BooleanFunction, $Float2FloatFunction, $Float2ObjectFunction_, $Float2IntFunction_, $Float2IntFunction, $Float2ObjectFunction, $Float2ReferenceFunction, $Float2ShortFunction_, $Float2CharFunction, $Float2CharFunction_, $Float2ByteFunction_, $Float2LongFunction, $Float2DoubleFunction, $Float2DoubleFunction_, $Float2ReferenceFunction_, $Float2ByteFunction } from "@package/it/unimi/dsi/fastutil/floats";
import { $Int2ByteFunction_, $Int2CharFunction_, $Int2FloatFunction_, $Int2LongFunction, $Int2IntFunction, $Int2ShortFunction, $Int2ObjectFunction_, $Int2CharFunction, $Int2DoubleFunction, $Int2DoubleFunction_, $Int2FloatFunction, $Int2ByteFunction, $Int2ObjectFunction, $Int2ReferenceFunction, $Int2BooleanFunction, $Int2ReferenceFunction_, $Int2IntFunction_, $Int2LongFunction_, $Int2ShortFunction_ } from "@package/it/unimi/dsi/fastutil/ints";
import { $IntPredicate, $IntFunction, $IntToDoubleFunction, $Function as $Function$1, $Function_, $IntToLongFunction, $IntUnaryOperator } from "@package/java/util/function";
import { $Long2ReferenceFunction_, $Long2CharFunction, $Long2LongFunction, $Long2ObjectFunction_, $Long2ShortFunction_, $Long2IntFunction, $Long2FloatFunction, $Long2LongFunction_, $Long2ByteFunction, $Long2ShortFunction, $Long2BooleanFunction, $Long2IntFunction_, $Long2ObjectFunction, $Long2CharFunction_, $Long2DoubleFunction, $Long2ReferenceFunction, $Long2DoubleFunction_, $Long2FloatFunction_, $Long2ByteFunction_ } from "@package/it/unimi/dsi/fastutil/longs";
import { $Object2LongFunction_, $Reference2DoubleFunction_, $Reference2ShortFunction, $Reference2FloatFunction_, $Object2DoubleFunction, $Reference2IntFunction, $Object2IntFunction, $Object2ShortFunction, $Object2ObjectFunction_, $Reference2IntFunction_, $Object2ShortFunction_, $Object2IntFunction_, $Reference2CharFunction_, $Reference2BooleanFunction, $Object2ByteFunction_, $Object2DoubleFunction_, $Reference2ByteFunction_, $Object2ReferenceFunction, $Reference2DoubleFunction, $Object2BooleanFunction, $Object2LongFunction, $Object2ReferenceFunction_, $Reference2ReferenceFunction, $Reference2LongFunction, $Reference2ObjectFunction_, $Reference2ShortFunction_, $Reference2ObjectFunction, $Object2CharFunction_, $Object2FloatFunction_, $Object2ByteFunction, $Object2FloatFunction, $Reference2ByteFunction, $Reference2ReferenceFunction_, $Reference2LongFunction_, $Reference2CharFunction, $Reference2FloatFunction, $Object2ObjectFunction, $Object2CharFunction } from "@package/it/unimi/dsi/fastutil/objects";
import { $Double2FloatFunction, $Double2IntFunction, $Double2IntFunction_, $Double2LongFunction, $Double2DoubleFunction, $Double2ObjectFunction, $Double2ByteFunction_, $Double2ByteFunction, $Double2ReferenceFunction, $Double2BooleanFunction, $Double2CharFunction_, $Double2ObjectFunction_, $Double2CharFunction, $Double2ReferenceFunction_, $Double2ShortFunction, $Double2FloatFunction_, $Double2LongFunction_, $Double2ShortFunction_, $Double2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Char2IntFunction, $Char2FloatFunction_, $Char2ByteFunction_, $Char2BooleanFunction, $Char2CharFunction, $Char2ObjectFunction_, $Char2LongFunction, $Char2ShortFunction, $Char2ShortFunction_, $Char2LongFunction_, $Char2FloatFunction, $Char2IntFunction_, $Char2DoubleFunction_, $Char2ReferenceFunction_, $Char2ByteFunction, $Char2DoubleFunction, $Char2ReferenceFunction, $Char2ObjectFunction, $Char2CharFunction_ } from "@package/it/unimi/dsi/fastutil/chars";
import { $Boolean2LongFunction_, $Boolean2FloatFunction_, $Boolean2ReferenceFunction_, $Boolean2ShortFunction_, $Boolean2CharFunction_, $Boolean2IntFunction_, $Boolean2ObjectFunction_, $Boolean2ByteFunction_, $Boolean2DoubleFunction_ } from "@package/it/unimi/dsi/fastutil/booleans";
import { $Object } from "@package/java/lang";
import { $Function } from "@package/it/unimi/dsi/fastutil";
import { $Short2IntFunction_, $Short2ObjectFunction, $Short2IntFunction, $Short2LongFunction, $Short2LongFunction_, $Short2FloatFunction_, $Short2DoubleFunction, $Short2ReferenceFunction_, $Short2FloatFunction, $Short2ShortFunction, $Short2BooleanFunction, $Short2ByteFunction, $Short2ObjectFunction_, $Short2ReferenceFunction, $Short2ShortFunction_, $Short2DoubleFunction_, $Short2ByteFunction_, $Short2CharFunction_, $Short2CharFunction } from "@package/it/unimi/dsi/fastutil/shorts";

declare module "@package/it/unimi/dsi/fastutil/bytes" {
    export class $Byte2ShortFunction {
    }
    export interface $Byte2ShortFunction extends $Function<number, number>, $IntUnaryOperator {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Short2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Short2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Short2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Short2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Short2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ShortFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ShortFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ShortFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ShortFunction;
        andThenChar(arg0: $Short2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ShortFunction;
        andThenReference<T>(arg0: $Short2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Short2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ShortFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2ShortFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ShortFunction<T>;
        andThenInt(arg0: $Short2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2ShortFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ShortFunction}.
     */
    export type $Byte2ShortFunction_ = ((arg0: number) => number);
    export class $Byte2LongFunction {
    }
    export interface $Byte2LongFunction extends $Function<number, number>, $IntToLongFunction {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Long2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Long2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Long2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Long2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Long2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2LongFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2LongFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2LongFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2LongFunction;
        andThenChar(arg0: $Long2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2LongFunction;
        andThenReference<T>(arg0: $Long2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Long2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2LongFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2LongFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2LongFunction<T>;
        andThenInt(arg0: $Long2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2LongFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2LongFunction}.
     */
    export type $Byte2LongFunction_ = ((arg0: number) => number);
    export class $Byte2CharFunction {
    }
    export interface $Byte2CharFunction extends $Function<number, string>, $IntUnaryOperator {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Char2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Char2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Char2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Char2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Char2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2CharFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2CharFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2CharFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2CharFunction;
        andThenChar(arg0: $Char2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2CharFunction;
        andThenReference<T>(arg0: $Char2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Char2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2CharFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2CharFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2CharFunction<T>;
        andThenInt(arg0: $Char2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2CharFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2CharFunction}.
     */
    export type $Byte2CharFunction_ = ((arg0: number) => string);
    export class $Byte2IntFunction {
    }
    export interface $Byte2IntFunction extends $Function<number, number>, $IntUnaryOperator {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Int2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Int2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Int2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Int2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Int2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2IntFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2IntFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2IntFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2IntFunction;
        andThenChar(arg0: $Int2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2IntFunction;
        andThenReference<T>(arg0: $Int2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Int2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2IntFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2IntFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2IntFunction<T>;
        andThenInt(arg0: $Int2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2IntFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2IntFunction}.
     */
    export type $Byte2IntFunction_ = ((arg0: number) => number);
    export class $Byte2ReferenceFunction<V> {
    }
    export interface $Byte2ReferenceFunction<V> extends $Function<number, V>, $IntFunction<V> {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Reference2ShortFunction_<V>): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Reference2ObjectFunction_<V, T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Reference2DoubleFunction_<V>): $Byte2DoubleFunction;
        andThenLong(arg0: $Reference2LongFunction_<V>): $Byte2LongFunction;
        andThenFloat(arg0: $Reference2FloatFunction_<V>): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ReferenceFunction<T, V>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ReferenceFunction<V>;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ReferenceFunction<V>;
        composeChar(arg0: $Char2ByteFunction_): $Char2ReferenceFunction<V>;
        andThenChar(arg0: $Reference2CharFunction_<V>): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ReferenceFunction<V>;
        andThenReference<T>(arg0: $Reference2ReferenceFunction_<V, T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Reference2ByteFunction_<V>): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ReferenceFunction<V>;
        composeShort(arg0: $Short2ByteFunction_): $Short2ReferenceFunction<V>;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ReferenceFunction<T, V>;
        andThenInt(arg0: $Reference2IntFunction_<V>): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2ReferenceFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ReferenceFunction}.
     */
    export type $Byte2ReferenceFunction_<V> = ((arg0: number) => V);
    export class $Byte2FloatFunction {
    }
    export interface $Byte2FloatFunction extends $Function<number, number>, $IntToDoubleFunction {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Float2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Float2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Float2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Float2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Float2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2FloatFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2FloatFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2FloatFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2FloatFunction;
        andThenChar(arg0: $Float2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2FloatFunction;
        andThenReference<T>(arg0: $Float2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Float2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2FloatFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2FloatFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2FloatFunction<T>;
        andThenInt(arg0: $Float2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2FloatFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2FloatFunction}.
     */
    export type $Byte2FloatFunction_ = ((arg0: number) => number);
    export class $Byte2ByteFunction {
        static identity(): $Byte2ByteFunction;
    }
    export interface $Byte2ByteFunction extends $Function<number, number>, $IntUnaryOperator {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Byte2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Byte2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Byte2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Byte2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Byte2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ByteFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ByteFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ByteFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2ByteFunction;
        andThenChar(arg0: $Byte2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ByteFunction;
        andThenReference<T>(arg0: $Byte2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Byte2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ByteFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2ByteFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ByteFunction<T>;
        andThenInt(arg0: $Byte2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2ByteFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ByteFunction}.
     */
    export type $Byte2ByteFunction_ = ((arg0: number) => number);
    export class $Byte2ObjectFunction<V> {
    }
    export interface $Byte2ObjectFunction<V> extends $Function<number, V>, $IntFunction<V> {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Object2ShortFunction_<V>): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Object2ObjectFunction_<V, T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Object2DoubleFunction_<V>): $Byte2DoubleFunction;
        andThenLong(arg0: $Object2LongFunction_<V>): $Byte2LongFunction;
        andThenFloat(arg0: $Object2FloatFunction_<V>): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2ObjectFunction<T, V>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2ObjectFunction<V>;
        composeFloat(arg0: $Float2ByteFunction_): $Float2ObjectFunction<V>;
        composeChar(arg0: $Char2ByteFunction_): $Char2ObjectFunction<V>;
        andThenChar(arg0: $Object2CharFunction_<V>): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2ObjectFunction<V>;
        andThenReference<T>(arg0: $Object2ReferenceFunction_<V, T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Object2ByteFunction_<V>): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2ObjectFunction<V>;
        composeShort(arg0: $Short2ByteFunction_): $Short2ObjectFunction<V>;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2ObjectFunction<T, V>;
        andThenInt(arg0: $Object2IntFunction_<V>): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2ObjectFunction<V>;
    }
    /**
     * Values that may be interpreted as {@link $Byte2ObjectFunction}.
     */
    export type $Byte2ObjectFunction_<V> = ((arg0: number) => V);
    export class $Byte2BooleanFunction {
    }
    export interface $Byte2BooleanFunction extends $Function<number, boolean>, $IntPredicate {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Boolean2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Boolean2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Boolean2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Boolean2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Boolean2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2BooleanFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2BooleanFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2BooleanFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2BooleanFunction;
        andThenChar(arg0: $Boolean2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2BooleanFunction;
        andThenReference<T>(arg0: $Boolean2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Boolean2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2BooleanFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2BooleanFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2BooleanFunction<T>;
        andThenInt(arg0: $Boolean2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2BooleanFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2BooleanFunction}.
     */
    export type $Byte2BooleanFunction_ = ((arg0: number) => boolean);
    export class $Byte2DoubleFunction {
    }
    export interface $Byte2DoubleFunction extends $Function<number, number>, $IntToDoubleFunction {
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
        /**
         * @deprecated
         */
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
        andThenShort(arg0: $Double2ShortFunction_): $Byte2ShortFunction;
        andThenObject<T>(arg0: $Double2ObjectFunction_<T>): $Byte2ObjectFunction<T>;
        andThenDouble(arg0: $Double2DoubleFunction_): $Byte2DoubleFunction;
        andThenLong(arg0: $Double2LongFunction_): $Byte2LongFunction;
        andThenFloat(arg0: $Double2FloatFunction_): $Byte2FloatFunction;
        composeReference<T>(arg0: $Reference2ByteFunction_<T>): $Reference2DoubleFunction<T>;
        composeByte(arg0: $Byte2ByteFunction_): $Byte2DoubleFunction;
        composeFloat(arg0: $Float2ByteFunction_): $Float2DoubleFunction;
        composeChar(arg0: $Char2ByteFunction_): $Char2DoubleFunction;
        andThenChar(arg0: $Double2CharFunction_): $Byte2CharFunction;
        composeLong(arg0: $Long2ByteFunction_): $Long2DoubleFunction;
        andThenReference<T>(arg0: $Double2ReferenceFunction_<T>): $Byte2ReferenceFunction<T>;
        andThenByte(arg0: $Double2ByteFunction_): $Byte2ByteFunction;
        composeDouble(arg0: $Double2ByteFunction_): $Double2DoubleFunction;
        composeShort(arg0: $Short2ByteFunction_): $Short2DoubleFunction;
        composeObject<T>(arg0: $Object2ByteFunction_<T>): $Object2DoubleFunction<T>;
        andThenInt(arg0: $Double2IntFunction_): $Byte2IntFunction;
        composeInt(arg0: $Int2ByteFunction_): $Int2DoubleFunction;
    }
    /**
     * Values that may be interpreted as {@link $Byte2DoubleFunction}.
     */
    export type $Byte2DoubleFunction_ = ((arg0: number) => number);
}
