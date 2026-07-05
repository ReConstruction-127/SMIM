import { $Long2ObjectMap } from "@package/it/unimi/dsi/fastutil/longs";
import { $MultiBufferSource$BufferSource, $RenderType, $RenderBuffers } from "@package/net/minecraft/client/renderer";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Camera, $Minecraft } from "@package/net/minecraft/client";
import { $Iterator, $SortedSet, $Collection } from "@package/java/util";
import { $EmbeddiumWorldRendererAssessor } from "@package/net/irisshaders/iris/compat/embeddium/mixin/monocle/mixin";
import { $Viewport } from "@package/org/embeddedt/embeddium/impl/render/viewport";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Consumer_ } from "@package/java/util/function";
import { $BlockDestructionProgress } from "@package/net/minecraft/server/level";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $BlockEntityRenderDispatcher } from "@package/net/minecraft/client/renderer/blockentity";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $Matrix4f } from "@package/org/joml";
export * as chunk from "@package/org/embeddedt/embeddium/impl/render/chunk";
export * as viewport from "@package/org/embeddedt/embeddium/impl/render/viewport";
export * as immediate from "@package/org/embeddedt/embeddium/impl/render/immediate";
export * as texture from "@package/org/embeddedt/embeddium/impl/render/texture";
export * as matrix_stack from "@package/org/embeddedt/embeddium/impl/render/matrix_stack";

declare module "@package/org/embeddedt/embeddium/impl/render" {
    export class $EmbeddiumWorldRenderer implements $EmbeddiumWorldRendererAssessor {
        static instance(): $EmbeddiumWorldRenderer;
        reload(): void;
        scheduleRebuildForBlockArea(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        didBlockEntityRequestOutline(): boolean;
        drawChunkLayer(arg0: $RenderType, arg1: $Matrix4f, arg2: number, arg3: number, arg4: number): void;
        setupTerrain(arg0: $Camera, arg1: $Viewport, arg2: number, arg3: boolean, arg4: boolean): void;
        isSectionReady(arg0: number, arg1: number, arg2: number): boolean;
        setWorld(arg0: $ClientLevel): void;
        forEachVisibleBlockEntity(arg0: $Consumer_<$BlockEntity>): void;
        scheduleRebuildForChunk(arg0: number, arg1: number, arg2: number, arg3: boolean): void;
        scheduleRebuildForChunks(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: boolean): void;
        scheduleTerrainUpdate(): void;
        getChunksDebugString(): string;
        getVisibleChunkCount(): number;
        renderBlockEntities(arg0: $Matrix4f, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: $Camera, arg4: number): void;
        isTerrainRenderComplete(): boolean;
        isBoxVisible(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): boolean;
        isEntityVisible(arg0: $Entity): boolean;
        static instanceNullable(): $EmbeddiumWorldRenderer;
        getDebugStrings(): $Collection<string>;
        blockEntityIterator(): $Iterator<$BlockEntity>;
        invokeRenderGlobalBlockEntities(arg0: $PoseStack, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: number, arg4: $MultiBufferSource$BufferSource, arg5: number, arg6: number, arg7: number, arg8: $BlockEntityRenderDispatcher): void;
        invokeRenderBlockEntities(arg0: $PoseStack, arg1: $RenderBuffers, arg2: $Long2ObjectMap<$SortedSet<$BlockDestructionProgress>>, arg3: number, arg4: $MultiBufferSource$BufferSource, arg5: number, arg6: number, arg7: number, arg8: $BlockEntityRenderDispatcher): void;
        constructor(arg0: $Minecraft);
        set world(value: $ClientLevel);
        get chunksDebugString(): string;
        get visibleChunkCount(): number;
        get terrainRenderComplete(): boolean;
        get debugStrings(): $Collection<string>;
    }
}
