import { $GeoBone } from "@package/software/bernie/geckolib/cache/object";

declare module "@package/software/bernie/geckolib/animation/state" {
    export class $BoneSnapshot {
        static copy(arg0: $BoneSnapshot): $BoneSnapshot;
        getOffsetZ(): number;
        updateScale(arg0: number, arg1: number, arg2: number): void;
        getBone(): $GeoBone;
        getOffsetX(): number;
        getRotY(): number;
        getRotX(): number;
        updateRotation(arg0: number, arg1: number, arg2: number): void;
        updateOffset(arg0: number, arg1: number, arg2: number): void;
        getOffsetY(): number;
        getRotZ(): number;
        getScaleX(): number;
        getScaleY(): number;
        getScaleZ(): number;
        stopPosAnim(arg0: number): void;
        startScaleAnim(): void;
        startRotAnim(): void;
        startPosAnim(): void;
        stopScaleAnim(arg0: number): void;
        stopRotAnim(arg0: number): void;
        getLastResetRotationTick(): number;
        isScaleAnimInProgress(): boolean;
        getLastResetScaleTick(): number;
        isRotAnimInProgress(): boolean;
        isPosAnimInProgress(): boolean;
        getLastResetPositionTick(): number;
        constructor(arg0: $GeoBone);
        get offsetZ(): number;
        get bone(): $GeoBone;
        get offsetX(): number;
        get rotY(): number;
        get rotX(): number;
        get offsetY(): number;
        get rotZ(): number;
        get scaleX(): number;
        get scaleY(): number;
        get scaleZ(): number;
        get lastResetRotationTick(): number;
        get scaleAnimInProgress(): boolean;
        get lastResetScaleTick(): number;
        get rotAnimInProgress(): boolean;
        get posAnimInProgress(): boolean;
        get lastResetPositionTick(): number;
    }
}
