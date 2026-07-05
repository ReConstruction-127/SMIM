import { $IFluidHandler$FluidAction, $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Codec } from "@package/com/mojang/serialization";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/config" {
    export class $CpuSelectionMode extends $Enum<$CpuSelectionMode> {
        static values(): $CpuSelectionMode[];
        static valueOf(arg0: string): $CpuSelectionMode;
        static PLAYER_ONLY: $CpuSelectionMode;
        static MACHINE_ONLY: $CpuSelectionMode;
        static ANY: $CpuSelectionMode;
    }
    /**
     * Values that may be interpreted as {@link $CpuSelectionMode}.
     */
    export type $CpuSelectionMode_ = "any" | "player_only" | "machine_only";
    export class $PowerMultiplier extends $Enum<$PowerMultiplier> {
        static values(): $PowerMultiplier[];
        static valueOf(arg0: string): $PowerMultiplier;
        multiply(arg0: number): number;
        divide(arg0: number): number;
        static CONFIG: $PowerMultiplier;
        multiplier: number;
        static ONE: $PowerMultiplier;
    }
    /**
     * Values that may be interpreted as {@link $PowerMultiplier}.
     */
    export type $PowerMultiplier_ = "one" | "config";
    export class $FuzzyMode extends $Enum<$FuzzyMode> implements $StringRepresentable {
        static values(): $FuzzyMode[];
        static valueOf(arg0: string): $FuzzyMode;
        getSerializedName(): string;
        calculateBreakPoint(arg0: number): number;
        getRemappedEnumConstantName(): string;
        static PERCENT_75: $FuzzyMode;
        static PERCENT_99: $FuzzyMode;
        static CODEC: $Codec<$FuzzyMode>;
        static PERCENT_25: $FuzzyMode;
        percentage: number;
        breakPoint: number;
        static IGNORE_ALL: $FuzzyMode;
        static PERCENT_50: $FuzzyMode;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $FuzzyMode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $FuzzyMode}.
     */
    export type $FuzzyMode_ = "ignore_all" | "percent_99" | "percent_75" | "percent_50" | "percent_25";
    export class $Actionable extends $Enum<$Actionable> {
        static values(): $Actionable[];
        static valueOf(arg0: string): $Actionable;
        static of(arg0: $IFluidHandler$FluidAction_): $Actionable;
        getFluidAction(): $IFluidHandler$FluidAction;
        static ofSimulate(arg0: boolean): $Actionable;
        isSimulate(): boolean;
        static MODULATE: $Actionable;
        static SIMULATE: $Actionable;
        get fluidAction(): $IFluidHandler$FluidAction;
        get simulate(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Actionable}.
     */
    export type $Actionable_ = "modulate" | "simulate";
}
