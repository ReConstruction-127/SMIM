import { $SpriteContents$Ticker } from "@package/net/minecraft/client/renderer/texture";

declare module "@package/net/irisshaders/iris/texture" {
    export class $SpriteContentsExtension {
    }
    export interface $SpriteContentsExtension {
        getCreatedTicker(): $SpriteContents$Ticker;
        get createdTicker(): $SpriteContents$Ticker;
    }
    /**
     * Values that may be interpreted as {@link $SpriteContentsExtension}.
     */
    export type $SpriteContentsExtension_ = (() => $SpriteContents$Ticker);
}
