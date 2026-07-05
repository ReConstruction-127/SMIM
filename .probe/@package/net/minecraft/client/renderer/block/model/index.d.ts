import { $Gson } from "@package/com/google/gson";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $ModelState, $BakedModel, $ModelBaker, $Material, $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $List, $Map_, $List_, $Collection, $Map } from "@package/java/util";
import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $Function_ } from "@package/java/util/function";
import { $Direction$Axis_, $Direction_, $Direction$Axis, $Direction } from "@package/net/minecraft/core";
import { $ModelQuadFacing } from "@package/org/embeddedt/embeddium/impl/model/quad/properties";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum, $Record } from "@package/java/lang";
import { $SpriteTransparencyLevel } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
import { $Reader } from "@package/java/io";
import { $BlockGeometryBakingContext } from "@package/net/neoforged/neoforge/client/model/geometry";
import { $ItemStack_, $ItemDisplayContext_, $ItemDisplayContext } from "@package/net/minecraft/world/item";
import { $ImmutableList, $ImmutableMap } from "@package/com/google/common/collect";
import { $BakedQuadView } from "@package/org/embeddedt/embeddium/impl/model/quad";
import { $Stream } from "@package/java/util/stream";
import { $ExtraFaceData, $ExtraFaceData_ } from "@package/net/neoforged/neoforge/client/model";
import { $BakedQuadAccess } from "@package/malte0811/ferritecore/mixin/accessors";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $EpsilonizableBlockElement } from "@package/org/embeddedt/embeddium/impl/model";
import { $MutableObject } from "@package/org/apache/commons/lang3/mutable";
import { $Transformation } from "@package/com/mojang/math";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/client/renderer/block/model" {
    export class $ItemTransform {
        apply(leftHand: boolean, poseStack: $PoseStack): void;
        static NO_TRANSFORM: $ItemTransform;
        rotation: $Vector3f;
        translation: $Vector3f;
        scale: $Vector3f;
        rightRotation: $Vector3f;
        constructor(rotation: $Vector3f, translation: $Vector3f, scale: $Vector3f);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Vector3f, arg3: $Vector3f);
    }
    export class $BlockElement implements $EpsilonizableBlockElement {
        uvsByFace(face: $Direction_): number[];
        getFaceData(): $ExtraFaceData;
        embeddium$epsilonize(): void;
        setFaceData(arg0: $ExtraFaceData_): void;
        rotation: $BlockElementRotation;
        shade: boolean;
        from: $Vector3f;
        to: $Vector3f;
        faces: $Map<$Direction, $BlockElementFace>;
        constructor(from: $Vector3f, to: $Vector3f, faces: $Map_<$Direction_, $BlockElementFace_>, rotation: $BlockElementRotation_ | null, shade: boolean);
        constructor(arg0: $Vector3f, arg1: $Vector3f, arg2: $Map_<$Direction_, $BlockElementFace_>, arg3: $BlockElementRotation_ | null, arg4: boolean, arg5: $ExtraFaceData_);
    }
    export class $BlockFaceUV {
        getV(index: number): number;
        getU(index: number): number;
        getReverseIndex(index: number): number;
        setMissingUv(uvs: number[]): void;
        uvs: number[];
        rotation: number;
        constructor(uvs: number[] | null, rotation: number);
        set missingUv(value: number[]);
    }
    export class $FaceBakery {
        recalculateWinding(vertices: number[], direction: $Direction_): void;
        applyModelRotation(pos: $Vector3f, transform: $Transformation): void;
        static calculateFacing(faceData: number[]): $Direction;
        static recomputeUVs(uv: $BlockFaceUV, facing: $Direction_, rotation: $Transformation): $BlockFaceUV;
        bakeQuad(posFrom: $Vector3f, posTo: $Vector3f, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, transform: $ModelState, rotation: $BlockElementRotation_ | null, shade: boolean): $BakedQuad;
        static VERTEX_INT_SIZE: number;
        static UV_INDEX: number;
        static VERTEX_COUNT: number;
        constructor();
    }
    export class $BlockElementFace extends $Record {
        parent(): $MutableObject<$BlockElement>;
        texture(): string;
        uv(): $BlockFaceUV;
        faceData(): $ExtraFaceData;
        tintIndex(): number;
        cullForDirection(): $Direction;
        static NO_TINT: number;
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV);
        constructor(cullForDirection: $Direction_ | null, tintIndex: number, texture: string, uv: $BlockFaceUV, faceData: $ExtraFaceData_ | null, parent: $MutableObject<$BlockElement>);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementFace}.
     */
    export type $BlockElementFace_ = { parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV, faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string,  } | [parent?: $MutableObject<$BlockElement>, tintIndex?: number, uv?: $BlockFaceUV, faceData?: $ExtraFaceData_, cullForDirection?: $Direction_, texture?: string, ];
    export class $ItemOverrides$BakedOverride {
        model: $BakedModel;
    }
    export class $ItemOverride$Predicate {
        getProperty(): $ResourceLocation;
        getValue(): number;
        constructor(property: $ResourceLocation_, value: number);
        get property(): $ResourceLocation;
        get value(): number;
    }
    export class $BlockModel$GuiLight extends $Enum<$BlockModel$GuiLight> {
        static values(): $BlockModel$GuiLight[];
        static valueOf(name: string): $BlockModel$GuiLight;
        static getByName(name: string): $BlockModel$GuiLight;
        getSerializedName(): string;
        lightLikeBlock(): boolean;
        static SIDE: $BlockModel$GuiLight;
        static FRONT: $BlockModel$GuiLight;
        get serializedName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlockModel$GuiLight}.
     */
    export type $BlockModel$GuiLight_ = "front" | "side";
    export class $BakedQuad implements $BakedQuadAccess, $BakedQuadView {
        setFlags(arg0: number): void;
        getY(arg0: number): number;
        getFlags(): number;
        getTintIndex(): number;
        getColorIndex(): number;
        getForgeNormal(arg0: number): number;
        getLightFace(): $Direction;
        getDirection(): $Direction;
        getVertices(): number[];
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        isTinted(): boolean;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        getLight(arg0: number): number;
        getNormalFace(): $ModelQuadFacing;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        getComputedFaceNormal(): number;
        hasAmbientOcclusion(): boolean;
        hasShade(): boolean;
        isShade(): boolean;
        getTransparencyLevel(): $SpriteTransparencyLevel;
        getModFaceNormal(): number;
        hasColor(): boolean;
        setVertices(arg0: number[]): void;
        tintIndex: number;
        sprite: $TextureAtlasSprite;
        constructor(vertices: number[], tintIndex: number, direction: $Direction_, sprite: $TextureAtlasSprite, shade: boolean);
        constructor(arg0: number[], arg1: number, arg2: $Direction_, arg3: $TextureAtlasSprite, arg4: boolean, arg5: boolean);
        get colorIndex(): number;
        get lightFace(): $Direction;
        get direction(): $Direction;
        get tinted(): boolean;
        get normalFace(): $ModelQuadFacing;
        get computedFaceNormal(): number;
        get shade(): boolean;
        get transparencyLevel(): $SpriteTransparencyLevel;
        get modFaceNormal(): number;
    }
    export class $ItemOverrides {
        resolve(model: $BakedModel, stack: $ItemStack_, level: $ClientLevel | null, entity: $LivingEntity | null, seed: number): $BakedModel;
        getOverrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
        static NO_OVERRIDE: number;
        static EMPTY: $ItemOverrides;
        constructor(arg0: $ModelBaker, arg1: $UnbakedModel, arg2: $List_<$ItemOverride>, arg3: $Function_<$Material, $TextureAtlasSprite>);
        /**
         * @deprecated
         */
        constructor(baker: $ModelBaker, model: $BlockModel, overrides: $List_<$ItemOverride>);
        get overrides(): $ImmutableList<$ItemOverrides$BakedOverride>;
    }
    export class $ItemTransforms {
        getTransform(displayContext: $ItemDisplayContext_): $ItemTransform;
        hasTransform(displayContext: $ItemDisplayContext_): boolean;
        static NO_TRANSFORMS: $ItemTransforms;
        head: $ItemTransform;
        firstPersonLeftHand: $ItemTransform;
        moddedTransforms: $ImmutableMap<$ItemDisplayContext, $ItemTransform>;
        firstPersonRightHand: $ItemTransform;
        thirdPersonRightHand: $ItemTransform;
        thirdPersonLeftHand: $ItemTransform;
        gui: $ItemTransform;
        ground: $ItemTransform;
        fixed: $ItemTransform;
        constructor(arg0: $ItemTransform, arg1: $ItemTransform, arg2: $ItemTransform, arg3: $ItemTransform, arg4: $ItemTransform, arg5: $ItemTransform, arg6: $ItemTransform, arg7: $ItemTransform, arg8: $ImmutableMap<$ItemDisplayContext_, $ItemTransform>);
        /**
         * @deprecated
         */
        constructor(thirdPersonLeftHand: $ItemTransform, thirdPersonRightHand: $ItemTransform, firstPersonLeftHand: $ItemTransform, firstPersonRightHand: $ItemTransform, head: $ItemTransform, gui: $ItemTransform, ground: $ItemTransform, fixed: $ItemTransform);
        constructor(transforms: $ItemTransforms);
    }
    export class $BlockElementRotation extends $Record {
        origin(): $Vector3f;
        rescale(): boolean;
        axis(): $Direction$Axis;
        angle(): number;
        constructor(arg0: $Vector3f, arg1: $Direction$Axis_, arg2: number, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $BlockElementRotation}.
     */
    export type $BlockElementRotation_ = { rescale?: boolean, axis?: $Direction$Axis_, angle?: number, origin?: $Vector3f,  } | [rescale?: boolean, axis?: $Direction$Axis_, angle?: number, origin?: $Vector3f, ];
    export class $ItemOverride {
        getPredicates(): $Stream<$ItemOverride$Predicate>;
        /**
         * @return the location of the target model
         */
        getModel(): $ResourceLocation;
        constructor(model: $ResourceLocation_, predicates: $List_<$ItemOverride$Predicate>);
        get predicates(): $Stream<$ItemOverride$Predicate>;
        get model(): $ResourceLocation;
    }
    export class $BlockModel implements $UnbakedModel {
        static fromString(jsonString: string): $BlockModel;
        isResolved(): boolean;
        static fromStream(reader: $Reader): $BlockModel;
        /**
         * @deprecated
         */
        getElements(): $List<$BlockElement>;
        getOverrides(arg0: $ModelBaker, arg1: $BlockModel, arg2: $Function_<$Material, $TextureAtlasSprite>): $ItemOverrides;
        getOverrides(): $List<$ItemOverride>;
        getDependencies(): $Collection<$ResourceLocation>;
        bake(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        bake(baker: $ModelBaker, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState): $BakedModel;
        getTransforms(): $ItemTransforms;
        getMaterial(name: string): $Material;
        resolveParents(resolver: $Function_<$ResourceLocation, $UnbakedModel>): void;
        hasAmbientOcclusion(): boolean;
        getParentLocation(): $ResourceLocation;
        hasTexture(textureName: string): boolean;
        getGuiLight(): $BlockModel$GuiLight;
        getRootModel(): $BlockModel;
        bakeVanilla(baker: $ModelBaker, model: $BlockModel, spriteGetter: $Function_<$Material, $TextureAtlasSprite>, state: $ModelState, guiLight3d: boolean): $BakedModel;
        static bakeFace(element: $BlockElement, face: $BlockElementFace_, sprite: $TextureAtlasSprite, facing: $Direction_, state: $ModelState): $BakedQuad;
        parent: $BlockModel;
        textureMap: $Map<string, $Either<$Material, string>>;
        static PARTICLE_TEXTURE_REFERENCE: string;
        name: string;
        static GSON: $Gson;
        customData: $BlockGeometryBakingContext;
        static FACE_BAKERY: $FaceBakery;
        constructor(parentLocation: $ResourceLocation_ | null, elements: $List_<$BlockElement>, textureMap: $Map_<string, $Either<$Material, string>>, hasAmbientOcclusion: boolean | null, guiLight: $BlockModel$GuiLight_ | null, transforms: $ItemTransforms, overrides: $List_<$ItemOverride>);
        get resolved(): boolean;
        get elements(): $List<$BlockElement>;
        get dependencies(): $Collection<$ResourceLocation>;
        get transforms(): $ItemTransforms;
        get parentLocation(): $ResourceLocation;
        get guiLight(): $BlockModel$GuiLight;
        get rootModel(): $BlockModel;
    }
}
