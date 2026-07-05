import { $Level } from "@package/net/minecraft/world/level";
import { $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $RenderTarget } from "@package/com/mojang/blaze3d/pipeline";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $MultiTextureRenderTypeRendererProvider } from "@package/xaero/common/graphics/renderer/multitexture";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Comparable } from "@package/java/lang";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
export * as over from "@package/xaero/hud/minimap/element/render/over";
export * as world from "@package/xaero/hud/minimap/element/render/world";

declare module "@package/xaero/hud/minimap/element/render" {
    export class $MinimapElementRenderInfo {
        mapDimension: $ResourceKey<$Level>;
        renderEntityDimensionScale: number;
        backgroundCoordinateScale: number;
        cave: boolean;
        renderEntityPos: $Vec3;
        renderPos: $Vec3;
        renderEntity: $Entity;
        location: $MinimapElementRenderLocation;
        renderEntityDimension: $ResourceKey<$Level>;
        player: $Player;
        partialTicks: number;
        framebuffer: $RenderTarget;
        constructor(arg0: $MinimapElementRenderLocation, arg1: $Entity, arg2: $Player, arg3: $Vec3_, arg4: boolean, arg5: number, arg6: $RenderTarget, arg7: number, arg8: $ResourceKey_<$Level>);
    }
    export class $MinimapElementRenderer<E, RC> implements $Comparable<$MinimapElementRenderer<never, never>> {
        compareTo(arg0: $MinimapElementRenderer<never, never>): number;
        getContext(): RC;
        getProvider(): $MinimapElementRenderProvider<E, RC>;
        getOrder(): number;
        getElementReader(): $MinimapElementReader<E, RC>;
        renderElement(arg0: E, arg1: boolean, arg2: boolean, arg3: number, arg4: number, arg5: number, arg6: number, arg7: $MinimapElementRenderInfo, arg8: $GuiGraphics, arg9: $MultiBufferSource$BufferSource): boolean;
        shouldRender(arg0: $MinimapElementRenderLocation): boolean;
        postRender(arg0: $MinimapElementRenderInfo, arg1: $MultiBufferSource$BufferSource, arg2: $MultiTextureRenderTypeRendererProvider): void;
        preRender(arg0: $MinimapElementRenderInfo, arg1: $MultiBufferSource$BufferSource, arg2: $MultiTextureRenderTypeRendererProvider): void;
        constructor(arg0: $MinimapElementReader<E, RC>, arg1: $MinimapElementRenderProvider<E, RC>, arg2: RC);
        get context(): RC;
        get provider(): $MinimapElementRenderProvider<E, RC>;
        get order(): number;
        get elementReader(): $MinimapElementReader<E, RC>;
    }
}
