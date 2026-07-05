import { $BlockPos, $SectionPos } from "@package/net/minecraft/core";
import { $Frustum_ } from "@package/org/embeddedt/embeddium/impl/render/viewport/frustum";
import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $Vector3d } from "@package/org/joml";
export * as frustum from "@package/org/embeddedt/embeddium/impl/render/viewport/frustum";

declare module "@package/org/embeddedt/embeddium/impl/render/viewport" {
    export class $ViewportProvider {
    }
    export interface $ViewportProvider {
        sodium$createViewport(): $Viewport;
    }
    /**
     * Values that may be interpreted as {@link $ViewportProvider}.
     */
    export type $ViewportProvider_ = (() => $Viewport);
    export class $CameraTransform {
        intX: number;
        fracX: number;
        x: number;
        fracY: number;
        y: number;
        intZ: number;
        z: number;
        intY: number;
        fracZ: number;
        constructor(arg0: number, arg1: number, arg2: number);
    }
    export class $Viewport {
        getTransform(): $CameraTransform;
        getBlockCoord(): $BlockPos;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isBoxVisible(arg0: $AABB_): boolean;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
        getChunkCoord(): $SectionPos;
        constructor(arg0: $Frustum_, arg1: $Vector3d);
        get transform(): $CameraTransform;
        get blockCoord(): $BlockPos;
        get chunkCoord(): $SectionPos;
    }
}
