import { $Material } from "@package/aztech/modern_industrialization/materials";
import { $Enum } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/nuclear" {
    export class $NuclearOrder extends $Enum<$NuclearOrder> {
        static values(): $NuclearOrder[];
        static valueOf(arg0: string): $NuclearOrder;
        static FUEL_ROD: $NuclearOrder;
        static HEAT_EXCHANGER: $NuclearOrder;
        static LARGE_PLATE: $NuclearOrder;
        static CONTROL_ROD: $NuclearOrder;
    }
    /**
     * Values that may be interpreted as {@link $NuclearOrder}.
     */
    export type $NuclearOrder_ = "fuel_rod" | "heat_exchanger" | "large_plate" | "control_rod";
    export class $NuclearConstant$ScatteringType extends $Enum<$NuclearConstant$ScatteringType> {
        static values(): $NuclearConstant$ScatteringType[];
        static valueOf(arg0: string): $NuclearConstant$ScatteringType;
        static HEAVY: $NuclearConstant$ScatteringType;
        static MEDIUM: $NuclearConstant$ScatteringType;
        static ULTRA_LIGHT: $NuclearConstant$ScatteringType;
        static LIGHT: $NuclearConstant$ScatteringType;
        fastFraction: number;
        slowFraction: number;
    }
    /**
     * Values that may be interpreted as {@link $NuclearConstant$ScatteringType}.
     */
    export type $NuclearConstant$ScatteringType_ = "ultra_light" | "light" | "medium" | "heavy";
    export class $IsotopeParams {
        fastScattering: number;
        fastAbsorption: number;
        thermalAbsorption: number;
        thermalScattering: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number);
    }
    export class $IsotopeFuelParams extends $IsotopeParams {
        static of(arg0: $Material): $IsotopeFuelParams;
        static mix(arg0: $IsotopeFuelParams, arg1: $IsotopeFuelParams, arg2: number): $IsotopeFuelParams;
        static mix(arg0: $Material, arg1: $Material, arg2: number): $IsotopeFuelParams;
        neutronsMultiplication: number;
        fastScattering: number;
        tempLimitHigh: number;
        fastAbsorption: number;
        thermalAbsorption: number;
        maxTemp: number;
        tempLimitLow: number;
        thermalScattering: number;
        directEnergyFactor: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number);
    }
}
