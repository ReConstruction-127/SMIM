import { $MathValue, $MathValue_ } from "@package/software/bernie/geckolib/loading/math";
import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BoneSnapshot } from "@package/software/bernie/geckolib/animation/state";
import { $EasingType_, $EasingType } from "@package/software/bernie/geckolib/animation";
export * as event from "@package/software/bernie/geckolib/animation/keyframe/event";

declare module "@package/software/bernie/geckolib/animation/keyframe" {
    export class $BoneAnimationQueue extends $Record {
        addPositions(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        addNextScale(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addRotations(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        addNextPosition(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $AnimationPoint_, arg5: $AnimationPoint_, arg6: $AnimationPoint_): void;
        addNextRotation(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: $BoneSnapshot, arg4: $BoneSnapshot, arg5: $AnimationPoint_, arg6: $AnimationPoint_, arg7: $AnimationPoint_): void;
        bone(): $GeoBone;
        addScales(arg0: $AnimationPoint_, arg1: $AnimationPoint_, arg2: $AnimationPoint_): void;
        rotationXQueue(): $AnimationPointQueue;
        rotationYQueue(): $AnimationPointQueue;
        rotationZQueue(): $AnimationPointQueue;
        positionXQueue(): $AnimationPointQueue;
        positionYQueue(): $AnimationPointQueue;
        positionZQueue(): $AnimationPointQueue;
        addPosYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addPosXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        scaleXQueue(): $AnimationPointQueue;
        addScaleXPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addScaleZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        addRotationYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        scaleZQueue(): $AnimationPointQueue;
        addScaleYPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        scaleYQueue(): $AnimationPointQueue;
        addPosZPoint(arg0: $Keyframe_<never>, arg1: number, arg2: number, arg3: number, arg4: number): void;
        constructor(arg0: $GeoBone);
        constructor(bone: $GeoBone, rotationXQueue: $AnimationPointQueue, rotationYQueue: $AnimationPointQueue, rotationZQueue: $AnimationPointQueue, positionXQueue: $AnimationPointQueue, positionYQueue: $AnimationPointQueue, positionZQueue: $AnimationPointQueue, scaleXQueue: $AnimationPointQueue, scaleYQueue: $AnimationPointQueue, scaleZQueue: $AnimationPointQueue);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimationQueue}.
     */
    export type $BoneAnimationQueue_ = { bone?: $GeoBone, positionYQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, positionZQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue, rotationYQueue?: $AnimationPointQueue,  } | [bone?: $GeoBone, positionYQueue?: $AnimationPointQueue, rotationXQueue?: $AnimationPointQueue, scaleXQueue?: $AnimationPointQueue, scaleZQueue?: $AnimationPointQueue, rotationZQueue?: $AnimationPointQueue, positionXQueue?: $AnimationPointQueue, positionZQueue?: $AnimationPointQueue, scaleYQueue?: $AnimationPointQueue, rotationYQueue?: $AnimationPointQueue, ];
    export class $BoneAnimation extends $Record {
        positionKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        scaleKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        rotationKeyFrames(): $KeyframeStack<$Keyframe<$MathValue>>;
        boneName(): string;
        constructor(boneName: string, rotationKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>, scaleKeyFrames: $KeyframeStack_<$Keyframe_<$MathValue_>>);
    }
    /**
     * Values that may be interpreted as {@link $BoneAnimation}.
     */
    export type $BoneAnimation_ = { rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>,  } | [rotationKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, boneName?: string, scaleKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, positionKeyFrames?: $KeyframeStack_<$Keyframe_<$MathValue_>>, ];
    export class $KeyframeStack<T extends $Keyframe<never>> extends $Record {
        static from<F extends $Keyframe<never>>(arg0: $KeyframeStack_<F>): $KeyframeStack<F>;
        xKeyframes(): $List<T>;
        zKeyframes(): $List<T>;
        yKeyframes(): $List<T>;
        getLastKeyframeTime(): number;
        constructor();
        constructor(xKeyframes: $List_<T>, yKeyframes: $List_<T>, zKeyframes: $List_<T>);
        get lastKeyframeTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $KeyframeStack}.
     */
    export type $KeyframeStack_<T> = { xKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>, zKeyframes?: $List_<$Keyframe_<never>>,  } | [xKeyframes?: $List_<$Keyframe_<never>>, yKeyframes?: $List_<$Keyframe_<never>>, zKeyframes?: $List_<$Keyframe_<never>>, ];
    export class $Keyframe<T extends $MathValue> extends $Record {
        length(): number;
        endValue(): T;
        startValue(): T;
        easingType(): $EasingType;
        easingArgs(): $List<T>;
        constructor(length: number, startValue: T, endValue: T, easingType: $EasingType_, easingArgs: $List_<T>);
        constructor(arg0: number, arg1: T, arg2: T, arg3: $EasingType_);
        constructor(arg0: number, arg1: T, arg2: T);
    }
    /**
     * Values that may be interpreted as {@link $Keyframe}.
     */
    export type $Keyframe_<T> = { endValue?: $MathValue_, easingType?: $EasingType_, easingArgs?: $List_<$MathValue_>, startValue?: $MathValue_, length?: number,  } | [endValue?: $MathValue_, easingType?: $EasingType_, easingArgs?: $List_<$MathValue_>, startValue?: $MathValue_, length?: number, ];
}
