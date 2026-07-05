import { $Direction_ } from "@package/net/minecraft/core";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Set_ } from "@package/java/util";

declare module "@package/org/embeddedt/embeddium/impl/render/immediate/model" {
    export class $ModelCuboid {
        shouldDrawFace(arg0: number): boolean;
        u5: number;
        mirror: boolean;
        z1: number;
        y1: number;
        z2: number;
        x1: number;
        y2: number;
        x2: number;
        v0: number;
        u0: number;
        v1: number;
        u1: number;
        v2: number;
        u2: number;
        u3: number;
        u4: number;
        constructor(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: number, arg8: number, arg9: number, arg10: number, arg11: boolean, arg12: number, arg13: number, arg14: $Set_<$Direction_>);
    }
    export class $ModelPartData {
        static from(arg0: $ModelPart): $ModelPartData;
    }
    export interface $ModelPartData {
        isHidden(): boolean;
        /**
         * @deprecated
         */
        getChildren(): $ModelPart[];
        isVisible(): boolean;
        /**
         * @deprecated
         */
        getCuboids(): $ModelCuboid[];
        get hidden(): boolean;
        get children(): $ModelPart[];
        get visible(): boolean;
        get cuboids(): $ModelCuboid[];
    }
}
