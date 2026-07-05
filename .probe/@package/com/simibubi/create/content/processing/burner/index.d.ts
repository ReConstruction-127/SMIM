import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/com/simibubi/create/content/processing/burner" {
    export class $BlazeBurnerBlock$HeatLevel extends $Enum<$BlazeBurnerBlock$HeatLevel> implements $StringRepresentable {
        static values(): $BlazeBurnerBlock$HeatLevel[];
        static valueOf(arg0: string): $BlazeBurnerBlock$HeatLevel;
        isAtLeast(arg0: $BlazeBurnerBlock$HeatLevel_): boolean;
        static byIndex(arg0: number): $BlazeBurnerBlock$HeatLevel;
        getSerializedName(): string;
        nextActiveLevel(): $BlazeBurnerBlock$HeatLevel;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$BlazeBurnerBlock$HeatLevel>;
        static SEETHING: $BlazeBurnerBlock$HeatLevel;
        static KINDLED: $BlazeBurnerBlock$HeatLevel;
        static SMOULDERING: $BlazeBurnerBlock$HeatLevel;
        static NONE: $BlazeBurnerBlock$HeatLevel;
        static FADING: $BlazeBurnerBlock$HeatLevel;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $BlazeBurnerBlock$HeatLevel}.
     */
    export type $BlazeBurnerBlock$HeatLevel_ = "none" | "smouldering" | "fading" | "kindled" | "seething";
}
