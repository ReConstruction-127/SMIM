import { $Object, $Enum } from "@package/java/lang";

declare module "@package/mezz/jei/api/ingredients/subtypes" {
    /**
     * @deprecated
     */
    export class $IIngredientSubtypeInterpreter<T> {
        /**
         * @deprecated
         */
        static NONE: string;
    }
    export interface $IIngredientSubtypeInterpreter<T> {
        /**
         * @deprecated
         */
        apply(arg0: T, arg1: $UidContext_): string;
    }
    /**
     * Values that may be interpreted as {@link $IIngredientSubtypeInterpreter}.
     */
    export type $IIngredientSubtypeInterpreter_<T> = ((arg0: T, arg1: $UidContext) => string);
    export class $UidContext extends $Enum<$UidContext> {
        static values(): $UidContext[];
        static valueOf(arg0: string): $UidContext;
        static Ingredient: $UidContext;
        static Recipe: $UidContext;
    }
    /**
     * Values that may be interpreted as {@link $UidContext}.
     */
    export type $UidContext_ = "ingredient" | "recipe";
    export class $ISubtypeInterpreter<T> {
    }
    export interface $ISubtypeInterpreter<T> {
        /**
         * @deprecated
         */
        getLegacyStringSubtypeInfo(arg0: T, arg1: $UidContext_): string;
        getSubtypeData(arg0: T, arg1: $UidContext_): $Object;
    }
}
