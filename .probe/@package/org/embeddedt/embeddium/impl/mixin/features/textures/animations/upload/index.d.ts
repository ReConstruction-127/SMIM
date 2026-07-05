import { $SpriteContents$FrameInfo, $SpriteContents$AnimatedTexture } from "@package/net/minecraft/client/renderer/texture";
import { $List } from "@package/java/util";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations/upload" {
    export class $SpriteContentsAccessor {
    }
    export interface $SpriteContentsAccessor {
        getImages(): $NativeImage[];
        get images(): $NativeImage[];
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsAccessor}.
     */
    export type $SpriteContentsAccessor_ = (() => $NativeImage[]);
    export class $SpriteContentsAnimatorImplAccessor {
    }
    export interface $SpriteContentsAnimatorImplAccessor {
        getFrameIndex(): number;
        getFrameTicks(): number;
        getAnimationInfo(): $SpriteContents$AnimatedTexture;
        get frameIndex(): number;
        get frameTicks(): number;
        get animationInfo(): $SpriteContents$AnimatedTexture;
    }
    export class $SpriteContentsAnimationFrameAccessor {
    }
    export interface $SpriteContentsAnimationFrameAccessor {
        getIndex(): number;
        getTime(): number;
        get index(): number;
        get time(): number;
    }
    export class $SpriteContentsAnimationAccessor {
    }
    export interface $SpriteContentsAnimationAccessor {
        getFrames(): $List<$SpriteContents$FrameInfo>;
        getFrameRowSize(): number;
        get frames(): $List<$SpriteContents$FrameInfo>;
        get frameRowSize(): number;
    }
}
