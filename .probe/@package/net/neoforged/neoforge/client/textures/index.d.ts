import { $FrameSize, $FrameSize_ } from "@package/net/minecraft/client/resources/metadata/animation";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ResourceMetadata, $ResourceMetadata_ } from "@package/net/minecraft/server/packs/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $NativeImage } from "@package/com/mojang/blaze3d/platform";

declare module "@package/net/neoforged/neoforge/client/textures" {
    /**
     * Functional interface representing the signature of the SpriteContents constructor
     * but nullable to support skipping based on metadata.
     */
    export class $SpriteContentsConstructor {
    }
    export interface $SpriteContentsConstructor {
        /**
         * Construct an instance of SpriteContents or return null to not load the sprite.
         */
        create(id: $ResourceLocation_, frameSize: $FrameSize_, nativeImage: $NativeImage, resourceMetadata: $ResourceMetadata_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsConstructor}.
     */
    export type $SpriteContentsConstructor_ = ((arg0: $ResourceLocation, arg1: $FrameSize, arg2: $NativeImage, arg3: $ResourceMetadata) => $SpriteContents);
}
