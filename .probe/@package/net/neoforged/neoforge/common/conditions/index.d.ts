import { $JsonElement_, $JsonObject_ } from "@package/com/google/gson";
import { $TagKey_ } from "@package/net/minecraft/tags";
import { $HolderLookup$Provider, $Holder_, $Registry, $Holder } from "@package/net/minecraft/core";
import { $MapCodec, $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $RegistryOps$RegistryInfoLookup, $RegistryOps, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $List, $Map_, $Map, $Collection_, $List_, $Collection } from "@package/java/util";

declare module "@package/net/neoforged/neoforge/common/conditions" {
    export class $WithConditions$Builder<T> {
        build(): $WithConditions<T>;
        withCarrier(arg0: T): $WithConditions$Builder<T>;
        addCondition(...arg0: $ICondition[]): $WithConditions$Builder<T>;
        addCondition(arg0: $Collection_<$ICondition>): $WithConditions$Builder<T>;
        constructor();
    }
    /**
     * Extension of `RegistryOps` that also encapsulates a `IContext`.
     * This allows getting the `IContext` while decoding an entry from within a codec.
     */
    export class $ConditionalOps<T> extends $RegistryOps<T> {
        /**
         * Creates a conditional codec.
         * 
         * The conditional codec is generally not suitable for use as a dispatch target because it is never a `MapCodecCodec`.
         */
        static createConditionalCodecWithConditions<T>(ownerCodec: $Codec<T>, conditionalsKey: string): $Codec<($WithConditions<T>) | undefined>;
        static createConditionalCodecWithConditions<T>(ownerCodec: $Codec<T>): $Codec<($WithConditions<T>) | undefined>;
        /**
         * Returns a codec that can retrieve a `IContext` from a registry ops,
         * for example with `retrieveContext().decode(ops, ops.emptyMap())`.
         */
        static retrieveContext(): $MapCodec<$ICondition$IContext>;
        static decodeListWithElementConditions<T>(ownerCodec: $Codec<T>): $Codec<$List<T>>;
        /**
         * Creates a conditional codec.
         * 
         * The conditional codec is generally not suitable for use as a dispatch target because it is never a `MapCodecCodec`.
         */
        static createConditionalCodec<T>(ownerCodec: $Codec<T>, conditionalsKey: string): $Codec<(T) | undefined>;
        static createConditionalCodec<T>(ownerCodec: $Codec<T>): $Codec<(T) | undefined>;
        static DEFAULT_CONDITIONS_KEY: string;
        lookupProvider: $RegistryOps$RegistryInfoLookup;
        static CONDITIONAL_VALUE_KEY: string;
        constructor(ops: $RegistryOps<T>, context: $ICondition$IContext_);
    }
    export class $WithConditions<A> extends $Record {
        static builder<A>(arg0: A): $WithConditions$Builder<A>;
        carrier(): A;
        conditions(): $List<$ICondition>;
        constructor(conditions: $List_<$ICondition>, carrier: A);
        constructor(arg0: A);
        constructor(arg0: A, ...arg1: $ICondition[]);
    }
    /**
     * Values that may be interpreted as {@link $WithConditions}.
     */
    export type $WithConditions_<A> = { carrier?: any, conditions?: $List_<$ICondition>,  } | [carrier?: any, conditions?: $List_<$ICondition>, ];
    export class $ICondition$IContext {
        static TAGS_INVALID: $ICondition$IContext;
        static EMPTY: $ICondition$IContext;
    }
    export interface $ICondition$IContext {
        getTag<T>(arg0: $TagKey_<T>): $Collection<$Holder<T>>;
        getAllTags<T>(arg0: $ResourceKey_<$Registry<T>>): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
    }
    /**
     * Values that may be interpreted as {@link $ICondition$IContext}.
     */
    export type $ICondition$IContext_ = ((arg0: $ResourceKey<$Registry<any>>) => $Map_<$ResourceLocation_, $Collection_<$Holder_<any>>>);
    export class $ICondition {
        static getWithConditionalCodec<V, T>(arg0: $Codec<(T) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static getWithWithConditionsCodec<V, T>(arg0: $Codec<($WithConditions_<T>) | undefined>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static writeConditions(arg0: $HolderLookup$Provider, arg1: $JsonObject_, ...arg2: $ICondition[]): void;
        /**
         * Writes a list of conditions to a JSON object.
         */
        static writeConditions(registries: $HolderLookup$Provider, jsonObject: $JsonObject_, conditions: $List_<$ICondition>): void;
        /**
         * Writes a list of conditions to a JSON object.
         */
        static writeConditions(jsonOps: $DynamicOps<$JsonElement_>, jsonObject: $JsonObject_, conditions: $List_<$ICondition>): void;
        static getConditionally<V, T>(arg0: $Codec<T>, arg1: $DynamicOps<V>, arg2: V): (T) | undefined;
        static conditionsMatched<V>(arg0: $DynamicOps<V>, arg1: V): boolean;
        static CODEC: $Codec<$ICondition>;
        static LIST_CODEC: $Codec<$List<$ICondition>>;
    }
    export interface $ICondition {
        test(arg0: $ICondition$IContext_): boolean;
        codec(): $MapCodec<$ICondition>;
    }
}
