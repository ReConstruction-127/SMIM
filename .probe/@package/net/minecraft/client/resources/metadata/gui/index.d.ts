import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/resources/metadata/gui" {
    export class $GuiSpriteScaling$Type extends $Enum<$GuiSpriteScaling$Type> implements $StringRepresentable {
        static values(): $GuiSpriteScaling$Type[];
        static valueOf(arg0: string): $GuiSpriteScaling$Type;
        codec(): $MapCodec<$GuiSpriteScaling>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$GuiSpriteScaling$Type>;
        static STRETCH: $GuiSpriteScaling$Type;
        static TILE: $GuiSpriteScaling$Type;
        static NINE_SLICE: $GuiSpriteScaling$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling$Type}.
     */
    export type $GuiSpriteScaling$Type_ = "stretch" | "tile" | "nine_slice";
    export class $GuiSpriteScaling {
        static CODEC: $Codec<$GuiSpriteScaling>;
        static DEFAULT: $GuiSpriteScaling;
    }
    export interface $GuiSpriteScaling {
        type(): $GuiSpriteScaling$Type;
    }
    /**
     * Values that may be interpreted as {@link $GuiSpriteScaling}.
     */
    export type $GuiSpriteScaling_ = (() => $GuiSpriteScaling$Type_);
}
