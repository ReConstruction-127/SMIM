import { $EntityModel } from "@package/net/minecraft/client/model";
import { $RenderLayerParent } from "@package/net/minecraft/client/renderer/entity";
import { $MultiBufferSource_ } from "@package/net/minecraft/client/renderer";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $Entity } from "@package/net/minecraft/world/entity";

declare module "@package/net/minecraft/client/renderer/entity/layers" {
    export class $RenderLayer<T extends $Entity, M extends $EntityModel<T>> {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, packedLight: number, livingEntity: T, limbSwing: number, limbSwingAmount: number, partialTick: number, ageInTicks: number, netHeadYaw: number, headPitch: number): void;
        getParentModel(): M;
        constructor(renderer: $RenderLayerParent<T, M>);
        get parentModel(): M;
    }
}
