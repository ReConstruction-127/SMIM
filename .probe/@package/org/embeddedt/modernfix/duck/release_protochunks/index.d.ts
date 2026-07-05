import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Executor } from "@package/java/util/concurrent";

declare module "@package/org/embeddedt/modernfix/duck/release_protochunks" {
    export class $ISuspendedHolderTrackingChunkMap {
    }
    export interface $ISuspendedHolderTrackingChunkMap {
        mfix$markForSuspensionCheck(arg0: $ChunkPos): void;
        mfix$getMainThreadExecutor(): $Executor;
    }
    export class $IClearableChunkHolder {
        static LOWEST_DROPPABLE_TICKET_LEVEL: number;
    }
    export interface $IClearableChunkHolder {
        mfix$resetProtoChunkFutures(): void;
    }
    /**
     * Values that may be interpreted as {@link $IClearableChunkHolder}.
     */
    export type $IClearableChunkHolder_ = (() => void);
}
