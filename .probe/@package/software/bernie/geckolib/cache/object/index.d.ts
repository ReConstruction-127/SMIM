import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ModelProperties, $ModelProperties_, $FaceUV$Rotation_ } from "@package/software/bernie/geckolib/loading/json/raw";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $Vec3_, $Vec3 } from "@package/net/minecraft/world/phys";
import { $Matrix4f, $Matrix3f, $Vector3d, $Vector3f } from "@package/org/joml";

declare module "@package/software/bernie/geckolib/cache/object" {
    export class $BakedGeoModel extends $Record {
        properties(): $ModelProperties;
        getBone(arg0: string): ($GeoBone) | undefined;
        searchForChildBone(arg0: $GeoBone, arg1: string): $GeoBone;
        topLevelBones(): $List<$GeoBone>;
        constructor(topLevelBones: $List_<$GeoBone>, properties: $ModelProperties_);
    }
    /**
     * Values that may be interpreted as {@link $BakedGeoModel}.
     */
    export type $BakedGeoModel_ = { topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_,  } | [topLevelBones?: $List_<$GeoBone>, properties?: $ModelProperties_, ];
    export class $GeoCube extends $Record {
        size(): $Vec3;
        inflate(): number;
        pivot(): $Vec3;
        quads(): $GeoQuad[];
        mirror(): boolean;
        rotation(): $Vec3;
        constructor(quads: $GeoQuad_[], pivot: $Vec3_, rotation: $Vec3_, size: $Vec3_, inflate: number, mirror: boolean);
    }
    /**
     * Values that may be interpreted as {@link $GeoCube}.
     */
    export type $GeoCube_ = { pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[],  } | [pivot?: $Vec3_, mirror?: boolean, inflate?: number, size?: $Vec3_, rotation?: $Vec3_, quads?: $GeoQuad_[], ];
    export class $GeoBone {
        getName(): string;
        isHidden(): boolean;
        getParent(): $GeoBone;
        getWorldPosition(): $Vector3d;
        markScaleAsChanged(): void;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        isHidingChildren(): boolean;
        updatePivot(arg0: number, arg1: number, arg2: number): void;
        setChildrenHidden(arg0: boolean): void;
        hasScaleChanged(): boolean;
        getScaleVector(): $Vector3d;
        hasPositionChanged(): boolean;
        hasRotationChanged(): boolean;
        resetStateChanges(): void;
        isTrackingMatrices(): boolean;
        setModelPosition(arg0: $Vector3d): void;
        shouldNeverRender(): boolean;
        getLocalPosition(): $Vector3d;
        getPositionVector(): $Vector3d;
        getModelPosition(): $Vector3d;
        saveSnapshot(): $BoneSnapshot;
        getInitialSnapshot(): $BoneSnapshot;
        setHidden(arg0: boolean): void;
        getCubes(): $List<$GeoCube>;
        getRotationVector(): $Vector3d;
        getMirror(): boolean;
        setRotX(arg0: number): void;
        setRotY(arg0: number): void;
        getRotY(): number;
        getRotX(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        getPosX(): number;
        getPosY(): number;
        updatePosition(arg0: number, arg1: number, arg2: number): void;
        setPosY(arg0: number): void;
        setPosX(arg0: number): void;
        getChildBones(): $List<$GeoBone>;
        getInflate(): number;
        setRotZ(arg0: number): void;
        setPosZ(arg0: number): void;
        getPivotX(): number;
        setScaleY(arg0: number): void;
        getRotZ(): number;
        setPivotX(arg0: number): void;
        getPivotZ(): number;
        getReset(): boolean;
        setPivotY(arg0: number): void;
        getScaleX(): number;
        getScaleY(): number;
        getPivotY(): number;
        setScaleX(arg0: number): void;
        getScaleZ(): number;
        setScaleZ(arg0: number): void;
        getPosZ(): number;
        setPivotZ(arg0: number): void;
        markPositionAsChanged(): void;
        getLocalSpaceMatrix(): $Matrix4f;
        setWorldSpaceMatrix(arg0: $Matrix4f): void;
        setWorldSpaceNormal(arg0: $Matrix3f): void;
        addRotationOffsetFromBone(arg0: $GeoBone): void;
        getModelSpaceMatrix(): $Matrix4f;
        getWorldSpaceNormal(): $Matrix3f;
        getWorldSpaceMatrix(): $Matrix4f;
        setModelSpaceMatrix(arg0: $Matrix4f): void;
        markRotationAsChanged(): void;
        getModelRotationMatrix(): $Matrix4f;
        setTrackingMatrices(arg0: boolean): void;
        saveInitialSnapshot(): void;
        setLocalSpaceMatrix(arg0: $Matrix4f): void;
        constructor(arg0: $GeoBone, arg1: string, arg2: boolean, arg3: number, arg4: boolean, arg5: boolean);
        get name(): string;
        get parent(): $GeoBone;
        get worldPosition(): $Vector3d;
        get hidingChildren(): boolean;
        set childrenHidden(value: boolean);
        get scaleVector(): $Vector3d;
        get localPosition(): $Vector3d;
        get positionVector(): $Vector3d;
        get initialSnapshot(): $BoneSnapshot;
        get cubes(): $List<$GeoCube>;
        get rotationVector(): $Vector3d;
        get mirror(): boolean;
        get childBones(): $List<$GeoBone>;
        get inflate(): number;
        get reset(): boolean;
        get modelRotationMatrix(): $Matrix4f;
    }
    export class $GeoQuad extends $Record {
        direction(): $Direction;
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: $FaceUV$Rotation_, arg4: number, arg5: number, arg6: boolean, arg7: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number[], arg2: number[], arg3: number, arg4: number, arg5: boolean, arg6: $Direction_): $GeoQuad;
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: $FaceUV$Rotation_, arg6: number, arg7: number, arg8: boolean, arg9: $Direction_): $GeoQuad;
        /**
         * @deprecated
         */
        static build(arg0: $GeoVertex_[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number, arg7: boolean, arg8: $Direction_): $GeoQuad;
        normal(): $Vector3f;
        vertices(): $GeoVertex[];
        constructor(vertices: $GeoVertex_[], normal: $Vector3f, direction: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $GeoQuad}.
     */
    export type $GeoQuad_ = { direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f,  } | [direction?: $Direction_, vertices?: $GeoVertex_[], normal?: $Vector3f, ];
    export class $GeoVertex extends $Record {
        position(): $Vector3f;
        withUVs(arg0: number, arg1: number): $GeoVertex;
        texU(): number;
        texV(): number;
        constructor(arg0: number, arg1: number, arg2: number);
        constructor(position: $Vector3f, texU: number, texV: number);
    }
    /**
     * Values that may be interpreted as {@link $GeoVertex}.
     */
    export type $GeoVertex_ = { texU?: number, texV?: number, position?: $Vector3f,  } | [texU?: number, texV?: number, position?: $Vector3f, ];
}
