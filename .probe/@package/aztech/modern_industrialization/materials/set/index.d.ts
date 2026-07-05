import { $Enum } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/materials/set" {
    export class $MaterialSet extends $Enum<$MaterialSet> {
        static values(): $MaterialSet[];
        static valueOf(arg0: string): $MaterialSet;
        static DULL: $MaterialSet;
        static METALLIC: $MaterialSet;
        static SHINY: $MaterialSet;
        static STONE: $MaterialSet;
    }
    /**
     * Values that may be interpreted as {@link $MaterialSet}.
     */
    export type $MaterialSet_ = "metallic" | "shiny" | "stone" | "dull";
}
