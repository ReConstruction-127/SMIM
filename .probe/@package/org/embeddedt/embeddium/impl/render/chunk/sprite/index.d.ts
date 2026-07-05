import { $SpriteContents, $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $Enum } from "@package/java/lang";

declare module "@package/org/embeddedt/embeddium/impl/render/chunk/sprite" {
    export class $SpriteTransparencyLevelHolder {
        static getTransparencyLevel(arg0: $TextureAtlasSprite): $SpriteTransparencyLevel;
        static getTransparencyLevel(arg0: $SpriteContents): $SpriteTransparencyLevel;
    }
    export interface $SpriteTransparencyLevelHolder {
        embeddium$getTransparencyLevel(): $SpriteTransparencyLevel;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTransparencyLevelHolder}.
     */
    export type $SpriteTransparencyLevelHolder_ = (() => $SpriteTransparencyLevel_);
    export class $SpriteTransparencyLevel extends $Enum<$SpriteTransparencyLevel> {
        static values(): $SpriteTransparencyLevel[];
        static valueOf(arg0: string): $SpriteTransparencyLevel;
        chooseNextLevel(arg0: $SpriteTransparencyLevel_): $SpriteTransparencyLevel;
        static OPAQUE: $SpriteTransparencyLevel;
        static TRANSLUCENT: $SpriteTransparencyLevel;
        static TRANSPARENT: $SpriteTransparencyLevel;
    }
    /**
     * Values that may be interpreted as {@link $SpriteTransparencyLevel}.
     */
    export type $SpriteTransparencyLevel_ = "opaque" | "transparent" | "translucent";
}
