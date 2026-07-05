import { $ModelCuboid } from "@package/org/embeddedt/embeddium/impl/render/immediate/model";
export * as color from "@package/org/embeddedt/embeddium/impl/model/color";
export * as quad from "@package/org/embeddedt/embeddium/impl/model/quad";

declare module "@package/org/embeddedt/embeddium/impl/model" {
    export class $ModelCuboidAccessor {
    }
    export interface $ModelCuboidAccessor {
        embeddium$getSimpleCuboid(): $ModelCuboid;
        sodium$copy(): $ModelCuboid;
    }
    export class $EpsilonizableBlockElement {
    }
    export interface $EpsilonizableBlockElement {
        embeddium$epsilonize(): void;
    }
    /**
     * Values that may be interpreted as {@link $EpsilonizableBlockElement}.
     */
    export type $EpsilonizableBlockElement_ = (() => void);
}
