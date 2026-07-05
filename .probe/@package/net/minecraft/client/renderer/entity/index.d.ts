import { $EntityRenderDispatcherAccessor as $EntityRenderDispatcherAccessor$1 } from "@package/dev/tr7zw/notenoughanimations/mixins";
import { $ItemInHandRenderer, $MultiBufferSource_, $BlockEntityWithoutLevelRenderer, $RenderType, $ItemModelShaper } from "@package/net/minecraft/client/renderer";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $EntityType, $Entity, $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ItemColors } from "@package/net/minecraft/client/color/item";
import { $BakedModel, $ModelResourceLocation, $ModelManager } from "@package/net/minecraft/client/resources/model";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $EntityRenderDispatcherAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $RenderLayer } from "@package/net/minecraft/client/renderer/entity/layers";
import { $Minecraft, $Camera, $Options } from "@package/net/minecraft/client";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $ItemFrame } from "@package/net/minecraft/world/entity/decoration";
import { $List, $List_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $BlockRenderDispatcher } from "@package/net/minecraft/client/renderer/block";
import { $EntityModel } from "@package/net/minecraft/client/model";
import { $EntityRendererInter } from "@package/dev/tr7zw/entityculling/access";
import { $TextureManager } from "@package/net/minecraft/client/renderer/texture";
import { $Object } from "@package/java/lang";
import { $Level_ } from "@package/net/minecraft/world/level";
import { $ItemStack_, $ItemDisplayContext_ } from "@package/net/minecraft/world/item";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $ModelLayerLocation, $EntityModelSet, $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemRendererAccessor } from "@package/net/createmod/ponder/mixin/client/accessor";
import { $PlayerSkin$Model } from "@package/net/minecraft/client/resources";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $Font } from "@package/net/minecraft/client/gui";
import { $Vec3, $AABB } from "@package/net/minecraft/world/phys";
import { $Quaternionf } from "@package/org/joml";
export * as player from "@package/net/minecraft/client/renderer/entity/player";
export * as layers from "@package/net/minecraft/client/renderer/entity/layers";

declare module "@package/net/minecraft/client/renderer/entity" {
    export class $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
    }
    export interface $RenderLayerParent<T extends $Entity, M extends $EntityModel<T>> {
        getModel(): M;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        get model(): M;
    }
    export class $EntityRendererProvider$Context {
        getItemRenderer(): $ItemRenderer;
        getModelManager(): $ModelManager;
        getItemInHandRenderer(): $ItemInHandRenderer;
        getEntityRenderDispatcher(): $EntityRenderDispatcher;
        getModelSet(): $EntityModelSet;
        getResourceManager(): $ResourceManager;
        getFont(): $Font;
        bakeLayer(layer: $ModelLayerLocation): $ModelPart;
        getBlockRenderDispatcher(): $BlockRenderDispatcher;
        constructor(entityRenderDispatcher: $EntityRenderDispatcher, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, itemInHandRenderer: $ItemInHandRenderer, resourceManager: $ResourceManager, modelSet: $EntityModelSet, font: $Font);
        get itemRenderer(): $ItemRenderer;
        get modelManager(): $ModelManager;
        get itemInHandRenderer(): $ItemInHandRenderer;
        get entityRenderDispatcher(): $EntityRenderDispatcher;
        get modelSet(): $EntityModelSet;
        get resourceManager(): $ResourceManager;
        get font(): $Font;
        get blockRenderDispatcher(): $BlockRenderDispatcher;
    }
    export class $EntityRenderer<T extends $Entity> implements $EntityRendererInter<any> {
        render(entity: $Object, entityYaw: number, partialTick: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number): void;
        /**
         * Returns the font renderer from the set render manager
         */
        getFont(): $Font;
        getRenderOffset(entity: $Object, partialTicks: number): $Vec3;
        shouldRender(livingEntity: $Object, camera: $Frustum, camX: number, arg3: number, camY: number): boolean;
        shadowShouldShowName(entity: $Entity): boolean;
        shadowRenderNameTag(entity: $Entity, displayName: $Component_, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, partialTick: number): void;
        getPackedLightCoords(entity: $Object, partialTicks: number): number;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: $Object): $ResourceLocation;
        entityCullingGetCullingBox(entity: $Entity): $AABB;
        entityCullingIgnoresCulling(entity: $Entity): boolean;
        static LEASH_RENDER_STEPS: number;
        get font(): $Font;
    }
    export class $LivingEntityRenderer<T extends $LivingEntity, M extends $EntityModel<T>> extends $EntityRenderer<T> implements $RenderLayerParent<T, M> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        getModel(): M;
        static getOverlayCoords(livingEntity: $LivingEntity, u: number): number;
        addLayer(layer: $RenderLayer<T, M>): boolean;
        static isEntityUpsideDown(livingEntity: $LivingEntity): boolean;
        handler$cah000$enderio$test(arg0: $LivingEntity, arg1: $PoseStack, arg2: number, arg3: number, arg4: number, arg5: number, arg6: $CallbackInfo): void;
        static LEASH_RENDER_STEPS: number;
        layers: $List<$RenderLayer<T, M>>;
        constructor(context: $EntityRendererProvider$Context, model: M, shadowRadius: number);
        get model(): M;
    }
    export class $ItemFrameRenderer<T extends $ItemFrame> extends $EntityRenderer<T> {
        render(entity: T, entityYaw: number, partialTicks: number, poseStack: $PoseStack, buffer: $MultiBufferSource_, packedLight: number): void;
        getRenderOffset(entity: T, partialTicks: number): $Vec3;
        /**
         * Returns the location of an entity's texture.
         */
        getTextureLocation(entity: T): $ResourceLocation;
        handler$cob000$embeddium_extra$render(itemFrameEntity: $ItemFrame, f: number, g: number, matrixStack: $PoseStack, vertexConsumerProvider: $MultiBufferSource_, i: number, ci: $CallbackInfo): void;
        static LEASH_RENDER_STEPS: number;
        static BRIGHT_MAP_LIGHT_ADJUSTMENT: number;
        static GLOW_FRAME_BRIGHTNESS: number;
        constructor(context: $EntityRendererProvider$Context);
    }
    export class $EntityRendererProvider<T extends $Entity> {
    }
    export interface $EntityRendererProvider<T extends $Entity> {
        create(context: $EntityRendererProvider$Context): $EntityRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRendererProvider}.
     */
    export type $EntityRendererProvider_<T> = ((arg0: $EntityRendererProvider$Context) => $EntityRenderer<T>);
    export class $EntityRenderDispatcher implements $ResourceManagerReloadListener, $EntityRenderDispatcherAccessor$1, $EntityRenderDispatcherAccessor {
        prepare(level: $Level_, activeRenderInfo: $Camera, entity: $Entity): void;
        /**
         * World sets this RenderManager's worldObj to the world provided
         */
        setLevel(level: $Level_ | null): void;
        render<E extends $Entity>(entity: E, x: number, arg2: number, y: number, arg4: number, z: number, arg6: $PoseStack, rotationYaw: $MultiBufferSource_, partialTicks: number): void;
        getRenderer<T extends $Entity>(entity: T): $EntityRenderer<T>;
        setRenderHitBoxes(debugBoundingBox: boolean): void;
        getItemInHandRenderer(): $ItemInHandRenderer;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        overrideCameraOrientation(cameraOrientation: $Quaternionf): void;
        setRenderShadow(debugBoundingBox: boolean): void;
        shouldRenderHitBoxes(): boolean;
        shouldRender<E extends $Entity>(entity: E, frustum: $Frustum, camX: number, arg3: number, camY: number): boolean;
        distanceToSqr(entity: $Entity): number;
        distanceToSqr(x: number, arg1: number, y: number): number;
        getPackedLightCoords<E extends $Entity>(entity: E, partialTicks: number): number;
        cameraOrientation(): $Quaternionf;
        getSkinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
        crosshairPickEntity: $Entity;
        renderers: $Map<$EntityType<never>, $EntityRenderer<never>>;
        options: $Options;
        textureManager: $TextureManager;
        camera: $Camera;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, itemRenderer: $ItemRenderer, blockRenderDispatcher: $BlockRenderDispatcher, font: $Font, options: $Options, entityModels: $EntityModelSet);
        set level(value: $Level_ | null);
        set renderHitBoxes(value: boolean);
        get itemInHandRenderer(): $ItemInHandRenderer;
        set renderShadow(value: boolean);
        get skinMap(): $Map<$PlayerSkin$Model, $EntityRenderer<$Player>>;
        get name(): string;
    }
    export class $ItemRenderer implements $ResourceManagerReloadListener, $ItemRendererAccessor {
        render(itemStack: $ItemStack_, displayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, combinedLight: number, combinedOverlay: number, model: $BakedModel): void;
        renderModelLists(model: $BakedModel, stack: $ItemStack_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, buffer: $VertexConsumer): void;
        getItemModelShaper(): $ItemModelShaper;
        static getFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        renderQuadList(poseStack: $PoseStack, buffer: $VertexConsumer, quads: $List_<$BakedQuad>, itemStack: $ItemStack_, combinedLight: number, combinedOverlay: number): void;
        static getArmorFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, hasFoil: boolean): $VertexConsumer;
        getModel(stack: $ItemStack_, level: $Level_ | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        renderStatic(stack: $ItemStack_, displayContext: $ItemDisplayContext_, combinedLight: number, combinedOverlay: number, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, seed: number): void;
        renderStatic(entity: $LivingEntity | null, itemStack: $ItemStack_, diplayContext: $ItemDisplayContext_, leftHand: boolean, poseStack: $PoseStack, bufferSource: $MultiBufferSource_, level: $Level_ | null, combinedLight: number, combinedOverlay: number, seed: number): void;
        static getFoilBufferDirect(bufferSource: $MultiBufferSource_, renderType: $RenderType, isItem: boolean, glint: boolean): $VertexConsumer;
        getBlockEntityRenderer(): $BlockEntityWithoutLevelRenderer;
        static getCompassFoilBuffer(bufferSource: $MultiBufferSource_, renderType: $RenderType, pose: $PoseStack$Pose): $VertexConsumer;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        catnip$getTextureManager(): $TextureManager;
        static GUI_SLOT_CENTER_X: number;
        static COMPASS_FOIL_UI_SCALE: number;
        static COMPASS_FOIL_FIRST_PERSON_SCALE: number;
        static COMPASS_FOIL_TEXTURE_SCALE: number;
        static ENCHANTED_GLINT_ENTITY: $ResourceLocation;
        blockEntityRenderer: $BlockEntityWithoutLevelRenderer;
        static GUI_SLOT_CENTER_Y: number;
        static ITEM_COUNT_BLIT_OFFSET: number;
        static ENCHANTED_GLINT_ITEM: $ResourceLocation;
        static SPYGLASS_IN_HAND_MODEL: $ModelResourceLocation;
        textureManager: $TextureManager;
        static TRIDENT_IN_HAND_MODEL: $ModelResourceLocation;
        constructor(minecraft: $Minecraft, textureManager: $TextureManager, modelManager: $ModelManager, itemColors: $ItemColors, blockEntityRenderer: $BlockEntityWithoutLevelRenderer);
        get itemModelShaper(): $ItemModelShaper;
        get name(): string;
    }
}
