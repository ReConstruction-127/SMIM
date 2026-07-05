import { $BlockAndTintGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $PoseStack$Pose, $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";

declare module "@package/net/neoforged/neoforge/client/model/lighting" {
    /**
     * Base class for all quad lighting providers.
     * 
     * Contains all the shared elements needed for `BakedQuad` processing and defers lighting logic to inheritors.
     */
    export class $QuadLighter {
        /**
         * Invalidate and reset any cached state of this lighter.
         */
        reset(): void;
        /**
         * Set up this lighter to light quads of the given block.
         */
        setup(level: $BlockAndTintGetter, pos: $BlockPos_, state: $BlockState_): void;
        process(consumer: $VertexConsumer, pose: $PoseStack$Pose, quad: $BakedQuad, overlay: number): void;
        static calculateShade(normalX: number, normalY: number, normalZ: number, constantAmbientLight: boolean): number;
        /**
         * Returns the computed brightness for each vertex of this quad.
         * 
         * The returned array is only valid until this lighter is asked to light another quad.
         */
        getComputedBrightness(): number[];
        /**
         * Compute the brightness and lightmap values for each vertex of this quad. After a call to this method, the
         * values may be accessed using `QuadLighter#getComputedBrightness()` and `QuadLighter#getComputedLightmap()`.
         * 
         * This overload allows cleanly reusing the same vertex data array many times.
         */
        computeLightingForQuad(vertices: number[], isShade: boolean): void;
        /**
         * Compute the brightness and lightmap values for each vertex of this quad. After a call to this method, the
         * values may be accessed using `QuadLighter#getComputedBrightness()` and `QuadLighter#getComputedLightmap()`.
         */
        computeLightingForQuad(quad: $BakedQuad): void;
        /**
         * Returns the computed lightmap for each vertex of this quad.
         * 
         * The returned array is only valid until this lighter is asked to light another quad.
         */
        getComputedLightmap(): number[];
        get computedBrightness(): number[];
        get computedLightmap(): number[];
    }
}
