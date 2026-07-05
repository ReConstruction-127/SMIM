import { $ServerChunkCache$MainThreadExecutor } from "@package/net/minecraft/server/level";

declare module "@package/org/embeddedt/modernfix/common/mixin/bugfix/chunk_deadlock" {
    export class $ServerChunkCacheAccessor {
    }
    export interface $ServerChunkCacheAccessor {
        mfix$getMainThreadProcessor(): $ServerChunkCache$MainThreadExecutor;
    }
    /**
     * Values that may be interpreted as {@link $ServerChunkCacheAccessor}.
     */
    export type $ServerChunkCacheAccessor_ = (() => $ServerChunkCache$MainThreadExecutor);
}
