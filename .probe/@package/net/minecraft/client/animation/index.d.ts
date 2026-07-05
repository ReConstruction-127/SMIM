import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $Record } from "@package/java/lang";
import { $Vector3f } from "@package/org/joml";

declare module "@package/net/minecraft/client/animation" {
    export class $AnimationChannel$Interpolation {
    }
    export interface $AnimationChannel$Interpolation {
        apply(animationVecCache: $Vector3f, keyframeDelta: number, keyframes: $Keyframe_[], currentKeyframeIdx: number, nextKeyframeIdx: number, scale: number): $Vector3f;
    }
    /**
     * Values that may be interpreted as {@link $AnimationChannel$Interpolation}.
     */
    export type $AnimationChannel$Interpolation_ = ((arg0: $Vector3f, arg1: number, arg2: $Keyframe[], arg3: number, arg4: number, arg5: number) => $Vector3f);
    export class $Keyframe extends $Record {
        target(): $Vector3f;
        timestamp(): number;
        interpolation(): $AnimationChannel$Interpolation;
        constructor(arg0: number, arg1: $Vector3f, arg2: $AnimationChannel$Interpolation_);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_ = { interpolation?: $AnimationChannel$Interpolation_, target?: $Vector3f, timestamp?: number,  } | [interpolation?: $AnimationChannel$Interpolation_, target?: $Vector3f, timestamp?: number, ];
    export class $AnimationChannel$Target {
    }
    export interface $AnimationChannel$Target {
        apply(modelPart: $ModelPart, animationVector: $Vector3f): void;
    }
    /**
     * Values that may be interpreted as {@link $AnimationChannel$Target}.
     */
    export type $AnimationChannel$Target_ = ((arg0: $ModelPart, arg1: $Vector3f) => void);
}
