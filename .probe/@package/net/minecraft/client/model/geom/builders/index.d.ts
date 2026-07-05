import { $Direction_ } from "@package/net/minecraft/core";
import { $PartPose, $ModelPart, $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $Set_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/model/geom/builders" {
    export class $CubeDeformation {
        extend(growX: number, growY: number, growZ: number): $CubeDeformation;
        extend(grow: number): $CubeDeformation;
        static NONE: $CubeDeformation;
        constructor(growX: number, growY: number, growZ: number);
        constructor(grow: number);
    }
    export class $PartDefinition {
        getChild(name: string): $PartDefinition;
        bake(texWidth: number, texHeight: number): $ModelPart;
        addOrReplaceChild(name: string, cubes: $CubeListBuilder, partPose: $PartPose): $PartDefinition;
    }
    export class $LayerDefinition {
        static create(mesh: $MeshDefinition, texWidth: number, texHeight: number): $LayerDefinition;
        bakeRoot(): $ModelPart;
    }
    export class $CubeListBuilder {
        static create(): $CubeListBuilder;
        mirror(): $CubeListBuilder;
        mirror(mirror: boolean): $CubeListBuilder;
        getCubes(): $List<$CubeDefinition>;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, mirror: boolean): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, texScaleU: number, texScaleV: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number): $CubeListBuilder;
        addBox(originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, visibleFaces: $Set_<$Direction_>): $CubeListBuilder;
        addBox(comment: string, originX: number, originY: number, originZ: number, dimensionX: number, dimensionY: number, dimensionZ: number, cubeDeformation: $CubeDeformation): $CubeListBuilder;
        texOffs(xTexOffs: number, yTexOffs: number): $CubeListBuilder;
        constructor();
        get cubes(): $List<$CubeDefinition>;
    }
    export class $MeshDefinition {
        getRoot(): $PartDefinition;
        constructor();
        get root(): $PartDefinition;
    }
    export class $CubeDefinition {
        bake(texWidth: number, texHeight: number): $ModelPart$Cube;
    }
}
