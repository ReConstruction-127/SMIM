import { $Enum } from "@package/java/lang";

declare module "@package/mekanism/common/block/states" {
    export class $TransmitterType extends $Enum<$TransmitterType> {
        static values(): $TransmitterType[];
        static valueOf(name: string): $TransmitterType;
        getSize(): $TransmitterType$Size;
        static DIVERSION_TRANSPORTER: $TransmitterType;
        static THERMODYNAMIC_CONDUCTOR: $TransmitterType;
        static PRESSURIZED_TUBE: $TransmitterType;
        static LOGISTICAL_TRANSPORTER: $TransmitterType;
        static RESTRICTIVE_TRANSPORTER: $TransmitterType;
        static UNIVERSAL_CABLE: $TransmitterType;
        static MECHANICAL_PIPE: $TransmitterType;
        get size(): $TransmitterType$Size;
    }
    /**
     * Values that may be interpreted as {@link $TransmitterType}.
     */
    export type $TransmitterType_ = "universal_cable" | "mechanical_pipe" | "pressurized_tube" | "logistical_transporter" | "restrictive_transporter" | "diversion_transporter" | "thermodynamic_conductor";
    export class $TransmitterType$Size extends $Enum<$TransmitterType$Size> {
        static values(): $TransmitterType$Size[];
        static valueOf(name: string): $TransmitterType$Size;
        static SMALL: $TransmitterType$Size;
        static LARGE: $TransmitterType$Size;
        centerSize: number;
    }
    /**
     * Values that may be interpreted as {@link $TransmitterType$Size}.
     */
    export type $TransmitterType$Size_ = "small" | "large";
}
