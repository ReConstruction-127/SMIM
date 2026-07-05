import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/util/random" {
    export class $WeightedEntry$IntrusiveBase implements $WeightedEntry {
        getWeight(): $Weight;
        constructor(weight: number);
        constructor(weight: $Weight);
        get weight(): $Weight;
    }
    export class $WeightedRandomList<E extends $WeightedEntry> {
        isEmpty(): boolean;
        static create<E extends $WeightedEntry>(): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(...items: E[]): $WeightedRandomList<E>;
        static create<E extends $WeightedEntry>(items: $List_<E>): $WeightedRandomList<E>;
        unwrap(): $List<E>;
        static codec<E extends $WeightedEntry>(elementCodec: $Codec<E>): $Codec<$WeightedRandomList<E>>;
        getRandom(random: $RandomSource): (E) | undefined;
        get empty(): boolean;
    }
    export class $Weight {
        static of(weight: number): $Weight;
        asInt(): number;
        static CODEC: $Codec<$Weight>;
    }
    export class $SimpleWeightedRandomList<E> extends $WeightedRandomList<$WeightedEntry$Wrapper<E>> {
        static builder<E>(): $SimpleWeightedRandomList$Builder<E>;
        static single<E>(data: E): $SimpleWeightedRandomList<E>;
        static empty<E>(): $SimpleWeightedRandomList<E>;
        getRandomValue(random: $RandomSource): ($WeightedEntry$Wrapper<E>) | undefined;
        static wrappedCodecAllowingEmpty<E>(elementCodec: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
        static wrappedCodec<E>(elementCodec: $Codec<E>): $Codec<$SimpleWeightedRandomList<E>>;
    }
    export class $WeightedEntry {
        static wrap<T>(data: T, weight: number): $WeightedEntry$Wrapper<T>;
    }
    export interface $WeightedEntry {
        getWeight(): $Weight;
        get weight(): $Weight;
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry}.
     */
    export type $WeightedEntry_ = (() => $Weight);
    export class $WeightedEntry$Wrapper<T> extends $Record implements $WeightedEntry {
        data(): T;
        weight(): $Weight;
        static codec<E>(elementCodec: $Codec<E>): $Codec<$WeightedEntry$Wrapper<E>>;
        getWeight(): $Weight;
        constructor(data: T, weight: $Weight);
    }
    /**
     * Values that may be interpreted as {@link $WeightedEntry$Wrapper}.
     */
    export type $WeightedEntry$Wrapper_<T> = { weight?: $Weight, data?: any,  } | [weight?: $Weight, data?: any, ];
    export class $SimpleWeightedRandomList$Builder<E> {
        add(data: E, weight: number): $SimpleWeightedRandomList$Builder<E>;
        add(data: E): $SimpleWeightedRandomList$Builder<E>;
        build(): $SimpleWeightedRandomList<E>;
        constructor();
    }
}
