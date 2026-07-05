import { $Level } from "@package/net/minecraft/world/level";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Object, $Record } from "@package/java/lang";
export * as voxel from "@package/mekanism/common/lib/math/voxel";

declare module "@package/mekanism/common/lib/math" {
    export class $Range3D extends $Record {
        clone(): $Object;
        dimension(): $ResourceKey<$Level>;
        zMin(): number;
        zMax(): number;
        xMax(): number;
        xMin(): number;
        constructor(xMin: number, zMin: number, xMax: number, zMax: number, dimension: $ResourceKey_<$Level>);
    }
    /**
     * Values that may be interpreted as {@link $Range3D}.
     */
    export type $Range3D_ = { xMin?: number, dimension?: $ResourceKey_<$Level>, zMin?: number, xMax?: number, zMax?: number,  } | [xMin?: number, dimension?: $ResourceKey_<$Level>, zMin?: number, xMax?: number, zMax?: number, ];
}
