import { $CommonVertexAttribute_ } from "@package/org/embeddedt/embeddium/api/vertex/attributes";

declare module "@package/org/embeddedt/embeddium/api/vertex/format" {
    export class $VertexFormatDescription {
    }
    export interface $VertexFormatDescription {
        id(): number;
        stride(): number;
        containsElement(arg0: $CommonVertexAttribute_): boolean;
        getElementOffset(arg0: $CommonVertexAttribute_): number;
        isSimpleFormat(): boolean;
        get simpleFormat(): boolean;
    }
}
