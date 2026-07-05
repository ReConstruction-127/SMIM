import { $List } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $Material } from "@package/dev/engine_room/flywheel/api/material";
import { $Vector4fc } from "@package/org/joml";

declare module "@package/dev/engine_room/flywheel/api/model" {
    export class $Model$ConfiguredMesh extends $Record {
        mesh(): $Mesh;
        material(): $Material;
        constructor(material: $Material, mesh: $Mesh);
    }
    /**
     * Values that may be interpreted as {@link $Model$ConfiguredMesh}.
     */
    export type $Model$ConfiguredMesh_ = { mesh?: $Mesh, material?: $Material,  } | [mesh?: $Mesh, material?: $Material, ];
    export class $Model {
    }
    export interface $Model {
        boundingSphere(): $Vector4fc;
        meshes(): $List<$Model$ConfiguredMesh>;
    }
}
