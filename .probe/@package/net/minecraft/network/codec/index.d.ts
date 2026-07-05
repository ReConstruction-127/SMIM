import { $Function_, $BiFunction_, $UnaryOperator_ } from "@package/java/util/function";
import { $Function5_, $Function4_, $Function3_, $Function6_ } from "@package/com/mojang/datafixers/util";
import { $ByteBuf } from "@package/io/netty/buffer";

declare module "@package/net/minecraft/network/codec" {
    export class $StreamEncoder<O, T> {
    }
    export interface $StreamEncoder<O, T> {
        encode(buffer: O, value: T): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamEncoder}.
     */
    export type $StreamEncoder_<O, T> = ((arg0: O, arg1: T) => void);
    export class $StreamCodec<B, V> {
        static of<B, V>(encoder: $StreamEncoder_<B, V>, decoder: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
        static unit<B, V>(expectedValue: V): $StreamCodec<B, V>;
        static recursive<B, T>(modifier: $UnaryOperator_<$StreamCodec<B, T>>): $StreamCodec<B, T>;
        static composite<B, C, T1, T2, T3, T4, T5>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, factory: $Function5_<T1, T2, T3, T4, T5, C>): $StreamCodec<B, C>;
        static composite<B, C, T1>(codec: $StreamCodec<B, T1>, getter: $Function_<C, T1>, factory: $Function_<T1, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4, T5, T6>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, codec5: $StreamCodec<B, T5>, getter5: $Function_<C, T5>, codec6: $StreamCodec<B, T6>, getter6: $Function_<C, T6>, factory: $Function6_<T1, T2, T3, T4, T5, T6, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, factory: $Function3_<T1, T2, T3, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, factory: $BiFunction_<T1, T2, C>): $StreamCodec<B, C>;
        static composite<B, C, T1, T2, T3, T4>(codec1: $StreamCodec<B, T1>, getter1: $Function_<C, T1>, codec2: $StreamCodec<B, T2>, getter2: $Function_<C, T2>, codec3: $StreamCodec<B, T3>, getter3: $Function_<C, T3>, codec4: $StreamCodec<B, T4>, getter4: $Function_<C, T4>, factory: $Function4_<T1, T2, T3, T4, C>): $StreamCodec<B, C>;
        static ofMember<B, V>(encoder: $StreamMemberEncoder_<B, V>, decoder: $StreamDecoder_<B, V>): $StreamCodec<B, V>;
    }
    export interface $StreamCodec<B, V> extends $StreamDecoder<B, V>, $StreamEncoder<B, V> {
        dispatch<U>(keyGetter: $Function_<U, V>, codecGetter: $Function_<V, $StreamCodec<B, U>>): $StreamCodec<B, U>;
        cast<S extends B>(): $StreamCodec<S, V>;
        apply<O>(operation: $StreamCodec$CodecOperation_<B, V, O>): $StreamCodec<B, O>;
        map<O>(keyGetter: $Function_<V, O>, codecGetter: $Function_<O, V>): $StreamCodec<B, O>;
        mapStream<O extends $ByteBuf>(bufferFactory: $Function_<O, B>): $StreamCodec<O, V>;
    }
    export class $StreamDecoder<I, T> {
    }
    export interface $StreamDecoder<I, T> {
        decode(buffer: I): T;
    }
    /**
     * Values that may be interpreted as {@link $StreamDecoder}.
     */
    export type $StreamDecoder_<I, T> = ((arg0: I) => T);
    export class $StreamMemberEncoder<O, T> {
    }
    export interface $StreamMemberEncoder<O, T> {
        encode(value: T, output: O): void;
    }
    /**
     * Values that may be interpreted as {@link $StreamMemberEncoder}.
     */
    export type $StreamMemberEncoder_<O, T> = ((arg0: T, arg1: O) => void);
    export class $StreamCodec$CodecOperation<B, S, T> {
    }
    export interface $StreamCodec$CodecOperation<B, S, T> {
        apply(codec: $StreamCodec<B, S>): $StreamCodec<B, T>;
    }
    /**
     * Values that may be interpreted as {@link $StreamCodec$CodecOperation}.
     */
    export type $StreamCodec$CodecOperation_<B, S, T> = ((arg0: $StreamCodec<B, S>) => $StreamCodec<B, T>);
}
