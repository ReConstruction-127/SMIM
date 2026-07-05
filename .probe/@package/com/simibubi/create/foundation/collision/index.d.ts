import { $Vec3, $Vec3_ } from "@package/net/minecraft/world/phys";

declare module "@package/com/simibubi/create/foundation/collision" {
    export class $Matrix3d {
        scale(arg0: number): $Matrix3d;
        transform(arg0: $Vec3_): $Vec3;
        transform(arg0: number, arg1: number, arg2: number): $Vec3;
        multiply(arg0: $Matrix3d): $Matrix3d;
        asIdentity(): $Matrix3d;
        asZRotation(arg0: number): $Matrix3d;
        asXRotation(arg0: number): $Matrix3d;
        asYRotation(arg0: number): $Matrix3d;
        transformTransposed(arg0: $Vec3_): $Vec3;
        transformTransposed(arg0: number, arg1: number, arg2: number): $Vec3;
        constructor();
    }
    export class $CollisionList {
        centerY: number[];
        centerZ: number[];
        size: number;
        centerX: number[];
        extentsZ: number[];
        extentsY: number[];
        extentsX: number[];
        static DEFAULT_CAPACITY: number;
        constructor();
    }
}
