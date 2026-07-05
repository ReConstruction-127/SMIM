import { $NativeImage } from "@package/com/mojang/blaze3d/platform";
export * as animations from "@package/org/embeddedt/embeddium/impl/mixin/features/textures/animations";

declare module "@package/org/embeddedt/embeddium/impl/mixin/features/textures" {
    export class $NativeImageAccessor {
    }
    export interface $NativeImageAccessor {
        getPointer(): number;
        get pointer(): number;
    }
    /**
     * Values that may be interpreted as {@link $NativeImageAccessor}.
     */
    export type $NativeImageAccessor_ = (() => number);
    export class $SpriteContentsInvoker {
    }
    export interface $SpriteContentsInvoker {
        invokeUpload(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsInvoker}.
     */
    export type $SpriteContentsInvoker_ = ((arg0: number, arg1: number, arg2: number, arg3: number, arg4: $NativeImage[]) => void);
}
