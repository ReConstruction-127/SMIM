import { $MaterialSet } from "@package/aztech/modern_industrialization/materials/set";
import { $IsotopeFuelParams } from "@package/aztech/modern_industrialization/nuclear";
import { $Enum } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $PartKeyProvider } from "@package/aztech/modern_industrialization/materials/part";

declare module "@package/aztech/modern_industrialization/materials/property" {
    export class $MaterialHardness extends $Enum<$MaterialHardness> {
        static values(): $MaterialHardness[];
        static valueOf(arg0: string): $MaterialHardness;
        static AVERAGE: $MaterialHardness;
        static HARD: $MaterialHardness;
        timeFactor: number;
        static SOFT: $MaterialHardness;
        static VERY_HARD: $MaterialHardness;
    }
    /**
     * Values that may be interpreted as {@link $MaterialHardness}.
     */
    export type $MaterialHardness_ = "soft" | "average" | "hard" | "very_hard";
    export class $MaterialProperty<T> {
        static SET: $MaterialProperty<$MaterialSet>;
        static PROPERTIES: $Collection<$MaterialProperty<never>>;
        defaultValue: T;
        static MEAN_RGB: $MaterialProperty<number>;
        static HARDNESS: $MaterialProperty<$MaterialHardness>;
        static MAIN_PART: $MaterialProperty<$PartKeyProvider>;
        static ISOTOPE: $MaterialProperty<$IsotopeFuelParams>;
        constructor(arg0: string, arg1: T);
    }
}
