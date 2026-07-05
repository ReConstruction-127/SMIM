import { $Thread } from "@package/java/lang";

declare module "@package/org/embeddedt/embeddium/impl/mixin/core/render" {
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        embeddium$getGameThread(): $Thread;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = (() => $Thread);
}
