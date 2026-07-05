import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Path_, $Path } from "@package/java/nio/file";
export * as release_protochunks from "@package/org/embeddedt/modernfix/duck/release_protochunks";
export * as suspend_integrated_server_during_load from "@package/org/embeddedt/modernfix/duck/suspend_integrated_server_during_load";

declare module "@package/org/embeddedt/modernfix/duck" {
    export class $IProfilingServerFunctionManager {
    }
    export interface $IProfilingServerFunctionManager {
        mfix$getProfilingResults(): string;
    }
    /**
     * Values that may be interpreted as {@link $IProfilingServerFunctionManager}.
     */
    export type $IProfilingServerFunctionManager_ = (() => string);
    export class $IBlockState {
    }
    export interface $IBlockState {
        clearCache(): void;
        isCacheInvalid(): boolean;
        get cacheInvalid(): boolean;
    }
    export class $IChunkGenerator {
    }
    export interface $IChunkGenerator {
        mfix$setStrongholdCachePath(arg0: $Path_, arg1: $MinecraftServer): void;
    }
    /**
     * Values that may be interpreted as {@link $IChunkGenerator}.
     */
    export type $IChunkGenerator_ = ((arg0: $Path, arg1: $MinecraftServer) => void);
    export class $ITimeTrackingServer {
    }
    export interface $ITimeTrackingServer {
        mfix$getLastTickStartTime(): number;
    }
    /**
     * Values that may be interpreted as {@link $ITimeTrackingServer}.
     */
    export type $ITimeTrackingServer_ = (() => number);
}
