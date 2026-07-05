import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $ChunkStatus_, $ChunkStatus } from "@package/net/minecraft/world/level/chunk/status";

declare module "@package/net/minecraft/server/level/progress" {
    export class $ChunkProgressListener {
        static calculateDiameter(radius: number): number;
    }
    export interface $ChunkProgressListener {
        start(): void;
        stop(): void;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
    }
    export class $ChunkProgressListenerFactory {
    }
    export interface $ChunkProgressListenerFactory {
        create(radius: number): $ChunkProgressListener;
    }
    /**
     * Values that may be interpreted as {@link $ChunkProgressListenerFactory}.
     */
    export type $ChunkProgressListenerFactory_ = ((arg0: number) => $ChunkProgressListener);
    export class $StoringChunkProgressListener implements $ChunkProgressListener {
        start(): void;
        stop(): void;
        static create(radius: number): $StoringChunkProgressListener;
        getStatus(x: number, z: number): $ChunkStatus;
        static createFromGameruleRadius(radius: number): $StoringChunkProgressListener;
        onStatusChange(chunkPos: $ChunkPos, chunkStatus: $ChunkStatus_ | null): void;
        updateSpawnPos(center: $ChunkPos): void;
        getProgress(): number;
        getFullDiameter(): number;
        getDiameter(): number;
        static createCompleted(): $StoringChunkProgressListener;
        get progress(): number;
        get fullDiameter(): number;
        get diameter(): number;
    }
}
