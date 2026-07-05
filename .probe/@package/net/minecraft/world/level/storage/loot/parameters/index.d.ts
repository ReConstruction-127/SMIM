import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $LootContextUser, $ValidationContext } from "@package/net/minecraft/world/level/storage/loot";
import { $ProblemReporter } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/storage/loot/parameters" {
    /**
     * A parameter of a `LootContext`.
     * 
     * @see LootContextParams
     */
    export class $LootContextParam<T> {
        getName(): $ResourceLocation;
        constructor(name: $ResourceLocation_);
        get name(): $ResourceLocation;
    }
    export class $LootContextParamSet$Builder {
        build(): $LootContextParamSet;
        optional(parameter: $LootContextParam<never>): $LootContextParamSet$Builder;
        required(parameter: $LootContextParam<never>): $LootContextParamSet$Builder;
        constructor();
    }
    /**
     * A LootContextParamSet defines a set of required and optional `LootContextParam`s.
     * This is used to validate that conditions, functions and other `LootContextUser`s only use those parameters that are present for the given loot table.
     * 
     * @see LootContextParamSets
     * @see ValidationContext
     */
    export class $LootContextParamSet {
        static builder(): $LootContextParamSet$Builder;
        /**
         * Gets the required and optional parameters
         */
        getRequired(): $Set<$LootContextParam<never>>;
        /**
         * Validate that all parameters referenced by the given LootContextUser are present in this set.
         */
        validateUser(validationContext: $ValidationContext, lootContextUser: $LootContextUser): void;
        validateUser(problemReporter: $ProblemReporter, lootContextUser: $LootContextUser): void;
        /**
         * Gets the required and optional parameters
         */
        getAllowed(): $Set<$LootContextParam<never>>;
        /**
         * Whether the given parameter is allowed in this set.
         */
        isAllowed(param: $LootContextParam<never>): boolean;
        get required(): $Set<$LootContextParam<never>>;
    }
}
