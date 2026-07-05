import { $Level_ } from "@package/net/minecraft/world/level";
import { $TooltipFlag } from "@package/net/minecraft/world/item";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $GenericStack, $KeyCounter, $AEItemKey, $GenericStack_, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/crafting" {
    export class $PatternDetailsTooltip$Property extends $Record {
        name(): $Component;
        value(): $Component;
        constructor(name: $Component_, value: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $PatternDetailsTooltip$Property}.
     */
    export type $PatternDetailsTooltip$Property_ = { value?: $Component_, name?: $Component_,  } | [value?: $Component_, name?: $Component_, ];
    export class $IPatternDetails {
    }
    export interface $IPatternDetails {
        getDefinition(): $AEItemKey;
        getInputs(): $IPatternDetails$IInput[];
        getTooltip(arg0: $Level_, arg1: $TooltipFlag): $PatternDetailsTooltip;
        getPrimaryOutput(): $GenericStack;
        supportsPushInputsToExternalInventory(): boolean;
        pushInputsToExternalInventory(arg0: $KeyCounter[], arg1: $IPatternDetails$PatternInputSink_): void;
        getOutputs(): $List<$GenericStack>;
        get definition(): $AEItemKey;
        get inputs(): $IPatternDetails$IInput[];
        get primaryOutput(): $GenericStack;
        get outputs(): $List<$GenericStack>;
    }
    export class $IPatternDetails$IInput {
    }
    export interface $IPatternDetails$IInput {
        getMultiplier(): number;
        isValid(arg0: $AEKey, arg1: $Level_): boolean;
        getPossibleInputs(): $GenericStack[];
        getRemainingKey(arg0: $AEKey): $AEKey;
        get multiplier(): number;
        get possibleInputs(): $GenericStack[];
    }
    export class $PatternDetailsTooltip {
        getProperties(): $List<$PatternDetailsTooltip$Property>;
        addProperty(arg0: $Component_, arg1: $Component_): void;
        addProperty(arg0: $Component_): void;
        getInputs(): $List<$GenericStack>;
        addOutput(arg0: $AEKey, arg1: number): void;
        addOutput(arg0: $GenericStack_): void;
        addInput(arg0: $AEKey, arg1: number): void;
        addInput(arg0: $GenericStack_): void;
        getOutputs(): $List<$GenericStack>;
        addInputsAndOutputs(arg0: $IPatternDetails): void;
        setOutputMethod(arg0: $Component_): void;
        getOutputMethod(): $Component;
        static OUTPUT_TEXT_PRODUCES: $Component;
        static OUTPUT_TEXT_CRAFTS: $Component;
        constructor(arg0: $Component_);
        get properties(): $List<$PatternDetailsTooltip$Property>;
        get inputs(): $List<$GenericStack>;
        get outputs(): $List<$GenericStack>;
    }
    export class $IPatternDetails$PatternInputSink {
    }
    export interface $IPatternDetails$PatternInputSink {
        pushInput(arg0: $AEKey, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $IPatternDetails$PatternInputSink}.
     */
    export type $IPatternDetails$PatternInputSink_ = ((arg0: $AEKey, arg1: number) => void);
}
