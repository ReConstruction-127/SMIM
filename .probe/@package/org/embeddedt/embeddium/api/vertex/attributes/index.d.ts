import { $VertexFormatElement_ } from "@package/com/mojang/blaze3d/vertex";
import { $Enum } from "@package/java/lang";
import { $CommonVertexAttributeInterface } from "@package/net/irisshaders/iris/compat/embeddium/mixin/oculus/entity";

declare module "@package/org/embeddedt/embeddium/api/vertex/attributes" {
    export class $CommonVertexAttribute extends $Enum<$CommonVertexAttribute> implements $CommonVertexAttributeInterface {
        static values(): $CommonVertexAttribute[];
        static valueOf(arg0: string): $CommonVertexAttribute;
        getByteLength(): number;
        static createAttribute$oculus_$md$cdee65$0(arg0: string, arg1: number, arg2: $VertexFormatElement_): $CommonVertexAttribute;
        static getCommonType(arg0: $VertexFormatElement_): $CommonVertexAttribute;
        static POSITION: $CommonVertexAttribute;
        static TEXTURE: $CommonVertexAttribute;
        static COLOR: $CommonVertexAttribute;
        static LIGHT: $CommonVertexAttribute;
        static COUNT: number;
        static NORMAL: $CommonVertexAttribute;
        static OVERLAY: $CommonVertexAttribute;
        get byteLength(): number;
    }
    /**
     * Values that may be interpreted as {@link $CommonVertexAttribute}.
     */
    export type $CommonVertexAttribute_ = "position" | "color" | "texture" | "overlay" | "light" | "normal" | "tangent" | "mid_tex_coord" | "block_id" | "entity_id" | "mid_block";
}
