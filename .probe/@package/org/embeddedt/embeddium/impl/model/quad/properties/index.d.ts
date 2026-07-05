import { $Direction_ } from "@package/net/minecraft/core";
import { $Enum } from "@package/java/lang";

declare module "@package/org/embeddedt/embeddium/impl/model/quad/properties" {
    export class $ModelQuadFacing extends $Enum<$ModelQuadFacing> {
        static values(): $ModelQuadFacing[];
        static valueOf(arg0: string): $ModelQuadFacing;
        getOpposite(): $ModelQuadFacing;
        static fromDirection(arg0: $Direction_): $ModelQuadFacing;
        static NEG_Z: $ModelQuadFacing;
        static POS_X: $ModelQuadFacing;
        static NEG_Y: $ModelQuadFacing;
        static UNASSIGNED: $ModelQuadFacing;
        static ALL: number;
        static POS_Y: $ModelQuadFacing;
        static NEG_X: $ModelQuadFacing;
        static POS_Z: $ModelQuadFacing;
        static VALUES: $ModelQuadFacing[];
        static COUNT: number;
        static NONE: number;
        get opposite(): $ModelQuadFacing;
    }
    /**
     * Values that may be interpreted as {@link $ModelQuadFacing}.
     */
    export type $ModelQuadFacing_ = "pos_x" | "pos_y" | "pos_z" | "neg_x" | "neg_y" | "neg_z" | "unassigned";
}
