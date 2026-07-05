import { $BiomeManager$NoiseBiomeSource } from "@package/net/minecraft/world/level/biome";

declare module "@package/org/embeddedt/modernfix/common/mixin/perf/optimize_surface_rules" {
    export class $BiomeManagerAccessor {
    }
    export interface $BiomeManagerAccessor {
        mfix$getBiomeSource(): $BiomeManager$NoiseBiomeSource;
        mfix$getZoomSeed(): number;
    }
}
