import { $Level_ } from "@package/net/minecraft/world/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $LevelRenderer } from "@package/net/minecraft/client/renderer";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Map } from "@package/java/util";
import { $BlockPos } from "@package/net/minecraft/core";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/travel" {
    export interface $TravelTargetType<T> extends RegistryMarked<RegistryTypes.EnderioTravelTargetTypesTag, RegistryTypes.EnderioTravelTargetTypes> {}
    export class $TravelTargetSerializer<T extends $TravelTarget> {
    }
    export interface $TravelTargetSerializer<T extends $TravelTarget> {
        codec(): $MapCodec<T>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
    }
    /**
     * Values that may be interpreted as {@link $TravelTargetSerializer}.
     */
    export type $TravelTargetSerializer_<T> = RegistryTypes.EnderioTravelTargetSerializers;
    export class $TravelTarget {
        static CODEC: $Codec<$TravelTarget>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TravelTarget>;
    }
    export interface $TravelTarget {
        type(): $TravelTargetType<never>;
        pos(): $BlockPos;
        canTeleportTo(): boolean;
        serializer(): $TravelTargetSerializer<never>;
        interact(arg0: $Level_, arg1: $Player): boolean;
        canInteract(): boolean;
        /**
         * @deprecated
         */
        canTravelTo(): boolean;
        item2BlockRange(): number;
        block2BlockRange(): number;
        canJumpTo(): boolean;
    }
    export class $RegisterTravelRenderersEvent$TravelRendererFactory<T extends $TravelTarget> {
    }
    export interface $RegisterTravelRenderersEvent$TravelRendererFactory<T extends $TravelTarget> {
        createRenderer(): $TravelRenderer<T>;
    }
    /**
     * Values that may be interpreted as {@link $RegisterTravelRenderersEvent$TravelRendererFactory}.
     */
    export type $RegisterTravelRenderersEvent$TravelRendererFactory_<T> = (() => $TravelRenderer<T>);
    export class $TravelTargetType<T extends $TravelTarget> {
        static simple<T extends $TravelTarget>(arg0: $ResourceLocation_): $TravelTargetType<T>;
    }
    export interface $TravelTargetType<T extends $TravelTarget> {
    }
    /**
     * Values that may be interpreted as {@link $TravelTargetType}.
     */
    export type $TravelTargetType_<T> = RegistryTypes.EnderioTravelTargetTypes;
    export class $RegisterTravelRenderersEvent extends $Event implements $IModBusEvent {
        register<T extends $TravelTarget>(arg0: $TravelTargetType_<T>, arg1: $RegisterTravelRenderersEvent$TravelRendererFactory_<T>): void;
        getRenderers(): $Map<$TravelTargetType<never>, $RegisterTravelRenderersEvent$TravelRendererFactory<never>>;
        constructor();
        get renderers(): $Map<$TravelTargetType<never>, $RegisterTravelRenderersEvent$TravelRendererFactory<never>>;
    }
    export class $TravelRenderer<T extends $TravelTarget> {
    }
    export interface $TravelRenderer<T extends $TravelTarget> {
        render(arg0: T, arg1: $LevelRenderer, arg2: $PoseStack, arg3: number, arg4: boolean, arg5: number): void;
    }
    /**
     * Values that may be interpreted as {@link $TravelRenderer}.
     */
    export type $TravelRenderer_<T> = ((arg0: T, arg1: $LevelRenderer, arg2: $PoseStack, arg3: number, arg4: boolean, arg5: number) => void);
    export interface $TravelTargetSerializer<T> extends RegistryMarked<RegistryTypes.EnderioTravelTargetSerializersTag, RegistryTypes.EnderioTravelTargetSerializers> {}
}
