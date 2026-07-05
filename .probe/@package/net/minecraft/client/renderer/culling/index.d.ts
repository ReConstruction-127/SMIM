import { $AABB_ } from "@package/net/minecraft/world/phys";
import { $ViewportProvider, $Viewport } from "@package/org/embeddedt/embeddium/impl/render/viewport";
import { $Matrix4f } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/culling" {
    export class $Frustum implements $ViewportProvider {
        prepare(camX: number, arg1: number, camY: number): void;
        isVisible(aabb: $AABB_): boolean;
        offsetToFullyIncludeCameraCube(offset: number): $Frustum;
        sodium$createViewport(): $Viewport;
        static OFFSET_STEP: number;
        constructor(frustum: $Matrix4f, projection: $Matrix4f);
        constructor(other: $Frustum);
    }
}
