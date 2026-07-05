import { $ModelPartExtended } from "@package/org/embeddedt/embeddium/render/entity";
import { $ModelPartAccessor as $ModelPartAccessor$1 } from "@package/dev/engine_room/flywheel/impl/mixin";
import { $ProfilerFiller } from "@package/net/minecraft/util/profiling";
import { $ModelPartAccessor } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Executor_, $CompletableFuture } from "@package/java/util/concurrent";
import { $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $ResourceManager, $ResourceManagerReloadListener, $PreparableReloadListener$PreparationBarrier_ } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $Map, $Optional, $Set_, $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Stream } from "@package/java/util/stream";
import { $ModelCuboid, $ModelPartData } from "@package/org/embeddedt/embeddium/impl/render/immediate/model";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $VertexConsumer, $PoseStack, $PoseStack$Pose } from "@package/com/mojang/blaze3d/vertex";
import { $ModelCuboidAccessor } from "@package/org/embeddedt/embeddium/impl/model";
import { $Vector3f } from "@package/org/joml";
export * as builders from "@package/net/minecraft/client/model/geom/builders";

declare module "@package/net/minecraft/client/model/geom" {
    export class $ModelPart$Cube implements $ModelCuboidAccessor {
        compile(pose: $PoseStack$Pose, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        embeddium$getSimpleCuboid(): $ModelCuboid;
        sodium$copy(): $ModelCuboid;
        minY: number;
        polygons: $ModelPart$Polygon[];
        minX: number;
        maxZ: number;
        maxY: number;
        maxX: number;
        minZ: number;
        constructor(texCoordU: number, texCoordV: number, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, gtowX: number, growY: number, growZ: number, mirror: boolean, texScaleU: number, texScaleV: number, visibleFaces: $Set_<$Direction_>);
    }
    export class $ModelPart$Polygon {
        normal: $Vector3f;
        vertices: $ModelPart$Vertex[];
        constructor(vertices: $ModelPart$Vertex[], u1: number, v1: number, u2: number, v2: number, textureWidth: number, textureHeight: number, mirror: boolean, direction: $Direction_);
    }
    export class $ModelPart$Vertex {
        remap(u: number, v: number): $ModelPart$Vertex;
        pos: $Vector3f;
        u: number;
        v: number;
        constructor(x: number, y: number, z: number, u: number, v: number);
        constructor(pos: $Vector3f, u: number, v: number);
    }
    export class $EntityModelSet implements $ResourceManagerReloadListener {
        onResourceManagerReload(resourceManager: $ResourceManager): void;
        bakeLayer(modelLayerLocation: $ModelLayerLocation): $ModelPart;
        reload(preparationBarrier: $PreparableReloadListener$PreparationBarrier_, resourceManager: $ResourceManager, preparationsProfiler: $ProfilerFiller, reloadProfiler: $ProfilerFiller, backgroundExecutor: $Executor_, gameExecutor: $Executor_): $CompletableFuture<void>;
        getName(): string;
        constructor();
        get name(): string;
    }
    export class $ModelPart$Visitor {
    }
    export interface $ModelPart$Visitor {
        visit(pose: $PoseStack$Pose, path: string, index: number, cube: $ModelPart$Cube): void;
    }
    /**
     * Values that may be interpreted as {@link $ModelPart$Visitor}.
     */
    export type $ModelPart$Visitor_ = ((arg0: $PoseStack$Pose, arg1: string, arg2: number, arg3: $ModelPart$Cube) => void);
    export class $ModelPart implements $ModelPartAccessor$1, $ModelPartAccessor, $ModelPartExtended, $ModelPartData {
        isHidden(): boolean;
        isEmpty(): boolean;
        visit(poseStack: $PoseStack, visitor: $ModelPart$Visitor_): void;
        getChild(name: string): $ModelPart;
        getChildren(): $ModelPart[];
        copyFrom(modelPart: $ModelPart): void;
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        render(poseStack: $PoseStack, buffer: $VertexConsumer, packedLight: number, packedOverlay: number): void;
        offsetPos(offset: $Vector3f): void;
        embeddium$getPartsList(): $List<any>;
        translateAndRotate(poseStack: $PoseStack): void;
        isVisible(): boolean;
        embeddium$getDescendantsByName(): $Map<any, any>;
        setPos(x: number, y: number, z: number): void;
        setRotation(x: number, y: number, z: number): void;
        loadPose(partPose: $PartPose): void;
        resetPose(): void;
        hasChild(name: string): boolean;
        setInitialPose(partPose: $PartPose): void;
        getAllParts(): $Stream<any>;
        offsetRotation(offset: $Vector3f): void;
        getRandomCube(random: $RandomSource): $ModelPart$Cube;
        getInitialPose(): $PartPose;
        storePose(): $PartPose;
        getCuboids(): $ModelCuboid[];
        handler$cfo001$xaerominimap$onRender(arg0: $PoseStack$Pose, arg1: $VertexConsumer, arg2: number, arg3: number, arg4: number, arg5: $CallbackInfo): void;
        offsetScale(offset: $Vector3f): void;
        embeddium$asOptional(): $Optional<any>;
        getCubes(): $List<$ModelPart$Cube>;
        flywheel$children(): $Map<string, $ModelPart>;
        flywheel$compile(pose: $PoseStack$Pose, buffer: $VertexConsumer, packedLight: number, packedOverlay: number, color: number): void;
        visible: boolean;
        static DEFAULT_SCALE: number;
        zRot: number;
        yRot: number;
        xRot: number;
        yScale: number;
        children: $Map<string, $ModelPart>;
        xScale: number;
        cubes: $List<$ModelPart$Cube>;
        x: number;
        y: number;
        z: number;
        skipDraw: boolean;
        zScale: number;
        constructor(cubes: $List_<$ModelPart$Cube>, children: $Map_<string, $ModelPart>);
        get hidden(): boolean;
        get empty(): boolean;
        get allParts(): $Stream<any>;
        get cuboids(): $ModelCuboid[];
    }
    export class $ModelLayerLocation {
        getLayer(): string;
        getModel(): $ResourceLocation;
        constructor(model: $ResourceLocation_, layer: string);
        get layer(): string;
        get model(): $ResourceLocation;
    }
    export class $PartPose {
        static offset(x: number, y: number, z: number): $PartPose;
        static rotation(x: number, y: number, z: number): $PartPose;
        static offsetAndRotation(x: number, y: number, z: number, xRot: number, yRot: number, zRot: number): $PartPose;
        static ZERO: $PartPose;
        zRot: number;
        yRot: number;
        x: number;
        xRot: number;
        y: number;
        z: number;
    }
}
