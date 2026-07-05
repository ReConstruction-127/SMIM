import { $Registry } from "@package/net/minecraft/core";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";

declare module "@package/net/minecraft/world/flag" {
    export class $FeatureFlag {
        isModded(): boolean;
        get modded(): boolean;
    }
    export class $FeatureElement {
        static FILTERED_REGISTRIES: $Set<$ResourceKey<$Registry<$FeatureElement>>>;
    }
    export interface $FeatureElement {
        isEnabled(enabledFeatures: $FeatureFlagSet): boolean;
        requiredFeatures(): $FeatureFlagSet;
    }
    /**
     * Values that may be interpreted as {@link $FeatureElement}.
     */
    export type $FeatureElement_ = (() => $FeatureFlagSet);
    export class $FeatureFlagSet {
        intersects(set: $FeatureFlagSet): boolean;
        isEmpty(): boolean;
        join(other: $FeatureFlagSet): $FeatureFlagSet;
        static of(): $FeatureFlagSet;
        static of(flag: $FeatureFlag, ...others: $FeatureFlag[]): $FeatureFlagSet;
        static of(flag: $FeatureFlag): $FeatureFlagSet;
        contains(flag: $FeatureFlag): boolean;
        subtract(other: $FeatureFlagSet): $FeatureFlagSet;
        isSubsetOf(set: $FeatureFlagSet): boolean;
        static MAX_CONTAINER_SIZE: number;
        get empty(): boolean;
    }
}
