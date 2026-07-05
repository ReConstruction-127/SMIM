import { $SpriteContents$FrameInfo } from "@package/net/minecraft/client/renderer/texture";
import { $List_, $List } from "@package/java/util";

declare module "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/tracking" {
    export class $SpriteContentsAnimationAccessor {
    }
    export interface $SpriteContentsAnimationAccessor {
        getFrames(): $List<$SpriteContents$FrameInfo>;
        get frames(): $List<$SpriteContents$FrameInfo>;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAnimationAccessor}.
     */
    export type $SpriteContentsAnimationAccessor_ = (() => $List_<$SpriteContents$FrameInfo>);
    export class $SpriteContentsAnimationFrameAccessor {
    }
    export interface $SpriteContentsAnimationFrameAccessor {
        getTime(): number;
        get time(): number;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAnimationFrameAccessor}.
     */
    export type $SpriteContentsAnimationFrameAccessor_ = (() => number);
}
