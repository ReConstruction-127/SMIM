import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $BlockDestructionProgress } from "@package/net/minecraft/server/level";
import { $MultiBufferSource$BufferSource, $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $SortedSet } from "@package/java/util";

declare module "@package/net/irisshaders/iris/compat/embeddium/mixin/monocle/mixin" {
    export class $EmbeddiumWorldRendererAssessor {
    }
    export interface $EmbeddiumWorldRendererAssessor {
        invokeRenderGlobalBlockEntities(arg0: $PoseStack, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: number, arg4: $MultiBufferSource$BufferSource, arg5: number, arg6: number, arg7: number, arg8: $BlockEntityRenderDispatcher): void;
        invokeRenderBlockEntities(arg0: $PoseStack, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: number, arg4: $MultiBufferSource$BufferSource, arg5: number, arg6: number, arg7: number, arg8: $BlockEntityRenderDispatcher): void;
    }
}
