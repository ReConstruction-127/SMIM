import { $BiConsumer_ } from "@package/java/util/function";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $DataTicket } from "@package/software/bernie/geckolib/constant/dataticket";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $GeoBone, $BakedGeoModel } from "@package/software/bernie/geckolib/cache/object";
import { $GeoRenderer } from "@package/software/bernie/geckolib/renderer";
import { $GeoAnimatable } from "@package/software/bernie/geckolib/animatable";
import { $Animation, $AnimationProcessor, $AnimationState } from "@package/software/bernie/geckolib/animation";

declare module "@package/software/bernie/geckolib/model" {
    export class $GeoModel<T extends $GeoAnimatable> {
        /**
         * @deprecated
         */
        getTextureResource(arg0: T): $ResourceLocation;
        getTextureResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        getBone(arg0: string): ($GeoBone) | undefined;
        getAnimation(arg0: T, arg1: string): $Animation;
        getRenderType(arg0: T, arg1: $ResourceLocation_): $RenderType;
        getBakedModel(arg0: $ResourceLocation_): $BakedGeoModel;
        getAnimationProcessor(): $AnimationProcessor<T>;
        applyMolangQueries(arg0: $AnimationState<T>, arg1: number): void;
        /**
         * @deprecated
         */
        getModelResource(arg0: T): $ResourceLocation;
        getModelResource(arg0: T, arg1: $GeoRenderer<T>): $ResourceLocation;
        handleAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>, arg3: number): void;
        crashIfBoneMissing(): boolean;
        addAdditionalStateData(arg0: T, arg1: number, arg2: $BiConsumer_<$DataTicket<T>, T>): void;
        getAnimationResource(arg0: T): $ResourceLocation;
        setCustomAnimations(arg0: T, arg1: number, arg2: $AnimationState<T>): void;
        getAnimationResourceFallbacks(arg0: T): $ResourceLocation[];
        constructor();
        get animationProcessor(): $AnimationProcessor<T>;
    }
}
