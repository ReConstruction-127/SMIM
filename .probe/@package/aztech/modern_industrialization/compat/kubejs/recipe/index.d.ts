import { $BiPredicate_ } from "@package/java/util/function";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MachineProcessCondition$Context } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $Object } from "@package/java/lang";
import { $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";

declare module "@package/aztech/modern_industrialization/compat/kubejs/recipe" {
    export class $CustomConditionEventJS implements $KubeEvent {
        register(arg0: string, arg1: $BiPredicate_<$MachineProcessCondition$Context, $MachineRecipe>, ...arg2: $Component_[]): void;
        registerWithIcon(arg0: string, arg1: $BiPredicate_<$MachineProcessCondition$Context, $MachineRecipe>, arg2: $ItemStack_, ...arg3: $Component_[]): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
}
