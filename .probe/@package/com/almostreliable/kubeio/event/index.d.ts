import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Item, $Item_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Map_, $Map } from "@package/java/util";
import { $Object, $Record } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $VirtualDataMapFile } from "@package/dev/latvian/mods/kubejs/script/data";

declare module "@package/com/almostreliable/kubeio/event" {
    export class $GrindingBallModificationEvent implements $KubeEvent {
        add(arg0: $Item_, arg1: number, arg2: number, arg3: number, arg4: number): void;
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
    export class $VatReagentModificationEvent extends $Record implements $KubeEvent {
        remove(arg0: $ItemPredicate_): void;
        clear(): void;
        add(arg0: $ItemPredicate_, arg1: $TagKey_<$Item>, arg2: number): void;
        dataMap(): $VirtualDataMapFile<$Item, $Map<$TagKey<$Item>, number>>;
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
        constructor(dataMap: $VirtualDataMapFile<$Item_, $Map_<$TagKey_<$Item>, number>>);
    }
    /**
     * Values that may be interpreted as {@link $VatReagentModificationEvent}.
     */
    export type $VatReagentModificationEvent_ = { dataMap?: $VirtualDataMapFile<$Item_, $Map_<$TagKey_<$Item>, number>>,  } | [dataMap?: $VirtualDataMapFile<$Item_, $Map_<$TagKey_<$Item>, number>>, ];
    export class $ConduitRegistryEvent implements $KubeEvent {
        registerMeConduit(arg0: string, arg1: $Component_, arg2: string, arg3: boolean): void;
        registerEnergyConduit(arg0: string, arg1: $Component_, arg2: number): void;
        registerFluidConduit(arg0: string, arg1: $Component_, arg2: number, arg3: boolean, arg4: boolean): void;
        registerChemicalConduit(arg0: string, arg1: $Component_, arg2: number, arg3: boolean): void;
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
