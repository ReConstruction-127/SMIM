import { $ChemicalStack, $Chemical, $Chemical_ } from "@package/mekanism/api/chemical";
import { $Predicate, $Predicate_ } from "@package/java/util/function";
import { $Holder_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ChemicalIngredient } from "@package/mekanism/api/recipes/ingredients/chemical";
import { $List } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as chemical from "@package/mekanism/api/recipes/ingredients/chemical";

declare module "@package/mekanism/api/recipes/ingredients" {
    export class $InputIngredient<TYPE> {
    }
    export interface $InputIngredient<TYPE> extends $Predicate<TYPE> {
        testType(arg0: TYPE): boolean;
        getMatchingInstance(arg0: TYPE): TYPE;
        hasNoMatchingInstances(): boolean;
        logMissingTags(): void;
        getRepresentations(): $List<TYPE>;
        getNeededAmount(arg0: TYPE): number;
        get representations(): $List<TYPE>;
    }
    export class $ChemicalStackIngredient implements $InputIngredient<$ChemicalStack> {
        test(arg0: $ChemicalStack): boolean;
        static of(arg0: $ChemicalIngredient, arg1: number): $ChemicalStackIngredient;
        testType(arg0: $Holder_<$Chemical>): boolean;
        testType(arg0: $ChemicalStack): boolean;
        /**
         * @deprecated
         */
        testType(arg0: $Chemical_): boolean;
        amount(): number;
        ingredient(): $ChemicalIngredient;
        getMatchingInstance(arg0: $ChemicalStack): $ChemicalStack;
        hasNoMatchingInstances(): boolean;
        logMissingTags(): void;
        getRepresentations(): $List<$ChemicalStack>;
        getNeededAmount(arg0: $ChemicalStack): number;
        or(arg0: $Predicate_<$ChemicalStack>): $Predicate<$ChemicalStack>;
        negate(): $Predicate<$ChemicalStack>;
        and(arg0: $Predicate_<$ChemicalStack>): $Predicate<$ChemicalStack>;
        static CODEC: $Codec<$ChemicalStackIngredient>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChemicalStackIngredient>;
        constructor(arg0: $ChemicalIngredient, arg1: number);
        get representations(): $List<$ChemicalStack>;
    }
}
