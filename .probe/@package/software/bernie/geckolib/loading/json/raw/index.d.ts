import { $JsonDeserializer } from "@package/com/google/gson";
import { $Enum, $Record } from "@package/java/lang";

declare module "@package/software/bernie/geckolib/loading/json/raw" {
    export class $ModelProperties extends $Record {
        identifier(): string;
        static deserializer(): $JsonDeserializer<$ModelProperties>;
        animationArmsDown(): boolean;
        preserveModelPose(): boolean;
        animationNoHeadBob(): boolean;
        visibleBoundsWidth(): number;
        textureHeight(): number;
        textureWidth(): number;
        animationStatueOfLibertyArms(): boolean;
        animationSingleLegAnimation(): boolean;
        animationSingleArmAnimation(): boolean;
        animationArmsOutFront(): boolean;
        animationInvertedCrouch(): boolean;
        animationStationaryLegs(): boolean;
        animationUpsideDown(): boolean;
        animationDontShowArmor(): boolean;
        visibleBoundsOffset(): number[];
        visibleBoundsHeight(): number;
        constructor(animationArmsDown: boolean, animationArmsOutFront: boolean, animationDontShowArmor: boolean, animationInvertedCrouch: boolean, animationNoHeadBob: boolean, animationSingleArmAnimation: boolean, animationSingleLegAnimation: boolean, animationStationaryLegs: boolean, animationStatueOfLibertyArms: boolean, animationUpsideDown: boolean, identifier: string, preserveModelPose: boolean, textureHeight: number, textureWidth: number, visibleBoundsHeight: number, visibleBoundsOffset: number[], visibleBoundsWidth: number);
    }
    /**
     * Values that may be interpreted as {@link $ModelProperties}.
     */
    export type $ModelProperties_ = { textureWidth?: number, animationArmsDown?: boolean, visibleBoundsHeight?: number, animationDontShowArmor?: boolean, preserveModelPose?: boolean, animationStationaryLegs?: boolean, animationArmsOutFront?: boolean, animationNoHeadBob?: boolean, animationSingleLegAnimation?: boolean, animationSingleArmAnimation?: boolean, textureHeight?: number, visibleBoundsWidth?: number, animationStatueOfLibertyArms?: boolean, visibleBoundsOffset?: number[], animationUpsideDown?: boolean, animationInvertedCrouch?: boolean, identifier?: string,  } | [textureWidth?: number, animationArmsDown?: boolean, visibleBoundsHeight?: number, animationDontShowArmor?: boolean, preserveModelPose?: boolean, animationStationaryLegs?: boolean, animationArmsOutFront?: boolean, animationNoHeadBob?: boolean, animationSingleLegAnimation?: boolean, animationSingleArmAnimation?: boolean, textureHeight?: number, visibleBoundsWidth?: number, animationStatueOfLibertyArms?: boolean, visibleBoundsOffset?: number[], animationUpsideDown?: boolean, animationInvertedCrouch?: boolean, identifier?: string, ];
    export class $FaceUV$Rotation extends $Enum<$FaceUV$Rotation> {
        static values(): $FaceUV$Rotation[];
        static valueOf(arg0: string): $FaceUV$Rotation;
        static fromValue(arg0: number): $FaceUV$Rotation;
        rotateUvs(arg0: number, arg1: number, arg2: number, arg3: number): number[];
        static CLOCKWISE_90: $FaceUV$Rotation;
        static CLOCKWISE_270: $FaceUV$Rotation;
        static CLOCKWISE_180: $FaceUV$Rotation;
        static NONE: $FaceUV$Rotation;
    }
    /**
     * Values that may be interpreted as {@link $FaceUV$Rotation}.
     */
    export type $FaceUV$Rotation_ = "none" | "clockwise_90" | "clockwise_180" | "clockwise_270";
}
