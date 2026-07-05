import { $VoxelShape, $DiscreteVoxelShape } from "@package/net/minecraft/world/phys/shapes";

declare module "@package/malte0811/ferritecore/mixin/accessors" {
    export class $DiscreteVSAccess {
    }
    export interface $DiscreteVSAccess {
        getYSize(): number;
        getZSize(): number;
        getXSize(): number;
        get YSize(): number;
        get ZSize(): number;
        get XSize(): number;
    }
    export class $BakedQuadAccess {
    }
    export interface $BakedQuadAccess {
        setVertices(arg0: number[]): void;
        set vertices(value: number[]);
    }
    /**
     * Values that may be interpreted as {@link $BakedQuadAccess}.
     */
    export type $BakedQuadAccess_ = ((arg0: number[]) => void);
    export class $VoxelShapeAccess {
    }
    export interface $VoxelShapeAccess {
        getShape(): $DiscreteVoxelShape;
        getFaces(): $VoxelShape[];
        setShape(arg0: $DiscreteVoxelShape): void;
        setFaces(arg0: $VoxelShape[]): void;
    }
}
