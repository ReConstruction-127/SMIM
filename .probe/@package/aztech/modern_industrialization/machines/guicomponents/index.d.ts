import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
import { $Rectangle } from "@package/aztech/modern_industrialization/util";

declare module "@package/aztech/modern_industrialization/machines/guicomponents" {
    export class $EnergyBar$Params extends $Record {
        renderY(): number;
        renderX(): number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $EnergyBar$Params>;
        constructor(renderX: number, renderY: number);
    }
    /**
     * Values that may be interpreted as {@link $EnergyBar$Params}.
     */
    export type $EnergyBar$Params_ = { renderX?: number, renderY?: number,  } | [renderX?: number, renderY?: number, ];
    export class $RecipeEfficiencyBar$Params extends $Record {
        renderY(): number;
        renderX(): number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $RecipeEfficiencyBar$Params>;
        constructor(renderX: number, renderY: number);
    }
    /**
     * Values that may be interpreted as {@link $RecipeEfficiencyBar$Params}.
     */
    export type $RecipeEfficiencyBar$Params_ = { renderX?: number, renderY?: number,  } | [renderX?: number, renderY?: number, ];
    export class $ProgressBar$Params extends $Record {
        width(): number;
        getTextureId(): $ResourceLocation;
        height(): number;
        textureHeight(): number;
        isVertical(): boolean;
        renderY(): number;
        renderX(): number;
        toRectangle(): $Rectangle;
        progressBarType(): string;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ProgressBar$Params>;
        constructor(renderX: number, renderY: number, progressBarType: string, width: number, height: number, isVertical: boolean);
        constructor(arg0: number, arg1: number, arg2: string, arg3: boolean);
        constructor(arg0: number, arg1: number, arg2: string);
        get textureId(): $ResourceLocation;
        get vertical(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ProgressBar$Params}.
     */
    export type $ProgressBar$Params_ = { width?: number, height?: number, renderX?: number, renderY?: number, progressBarType?: string, isVertical?: boolean,  } | [width?: number, height?: number, renderX?: number, renderY?: number, progressBarType?: string, isVertical?: boolean, ];
}
