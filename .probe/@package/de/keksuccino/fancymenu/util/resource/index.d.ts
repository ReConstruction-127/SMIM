import { $InputStream, $Closeable } from "@package/java/io";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $AspectRatio } from "@package/de/keksuccino/fancymenu/util/rendering";
export * as resources from "@package/de/keksuccino/fancymenu/util/resource/resources";

declare module "@package/de/keksuccino/fancymenu/util/resource" {
    export class $Resource {
    }
    export interface $Resource extends $Closeable {
        isClosed(): boolean;
        open(): $InputStream;
        waitForReady(arg0: number): void;
        waitForLoadingCompletedOrFailed(arg0: number): void;
        isReady(): boolean;
        isLoadingFailed(): boolean;
        isLoadingCompleted(): boolean;
        get closed(): boolean;
        get ready(): boolean;
        get loadingFailed(): boolean;
        get loadingCompleted(): boolean;
    }
    export class $RenderableResource {
        static MISSING_TEXTURE_LOCATION: $ResourceLocation;
        static FULLY_TRANSPARENT_TEXTURE: $ResourceLocation;
    }
    export interface $RenderableResource extends $Resource {
        reset(): void;
        getAspectRatio(): $AspectRatio;
        getWidth(): number;
        getHeight(): number;
        getResourceLocation(): $ResourceLocation;
        get aspectRatio(): $AspectRatio;
        get width(): number;
        get height(): number;
        get resourceLocation(): $ResourceLocation;
    }
}
