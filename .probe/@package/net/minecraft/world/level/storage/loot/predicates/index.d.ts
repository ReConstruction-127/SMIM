import { $Predicate, $Function_ } from "@package/java/util/function";
import { $Holder } from "@package/net/minecraft/core";
import { $MapCodec_, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Iterable_, $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/predicates" {
    /**
     * Base interface for builders that can accept loot conditions.
     * 
     * @see LootItemCondition
     */
    export class $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
    }
    export interface $ConditionUserBuilder<T extends $ConditionUserBuilder<T>> {
        unwrap(): T;
        when<E>(builderSources: $Iterable_<E>, toBuilderFunction: $Function_<E, $LootItemCondition$Builder>): T;
        when(conditionBuilder: $LootItemCondition$Builder_): T;
    }
    /**
     * A condition based on `LootContext`.
     * 
     * @see `LootItemConditions`
     * @see `PredicateManager`
     */
    export class $LootItemCondition {
        static CODEC: $Codec<$Holder<$LootItemCondition>>;
        static DIRECT_CODEC: $Codec<$LootItemCondition>;
        static TYPED_CODEC: $Codec<$LootItemCondition>;
    }
    export interface $LootItemCondition extends $LootContextUser, $Predicate<$LootContext> {
        getType(): $LootItemConditionType;
        get type(): $LootItemConditionType;
    }
    export class $AnyOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export class $LootItemCondition$Builder {
    }
    export interface $LootItemCondition$Builder {
        build(): $LootItemCondition;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $LootItemCondition$Builder}.
     */
    export type $LootItemCondition$Builder_ = (() => $LootItemCondition);
    /**
     * The SerializerType for `LootItemCondition`.
     */
    export class $LootItemConditionType extends $Record {
        codec(): $MapCodec<$LootItemCondition>;
        constructor(arg0: $MapCodec_<$LootItemCondition>);
    }
    /**
     * Values that may be interpreted as {@link $LootItemConditionType}.
     */
    export type $LootItemConditionType_ = RegistryTypes.LootConditionType | { codec?: $MapCodec_<$LootItemCondition>,  } | [codec?: $MapCodec_<$LootItemCondition>, ];
    export class $AllOfCondition$Builder extends $CompositeLootItemCondition$Builder {
        constructor(...arg0: $LootItemCondition$Builder_[]);
    }
    export interface $LootItemConditionType extends RegistryMarked<RegistryTypes.LootConditionTypeTag, RegistryTypes.LootConditionType> {}
    export class $CompositeLootItemCondition$Builder implements $LootItemCondition$Builder {
        build(): $LootItemCondition;
        addTerm(condition: $LootItemCondition$Builder_): void;
        or(condition: $LootItemCondition$Builder_): $AnyOfCondition$Builder;
        and(condition: $LootItemCondition$Builder_): $AllOfCondition$Builder;
        invert(): $LootItemCondition$Builder;
    }
}
