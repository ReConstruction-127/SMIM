import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Map_ } from "@package/java/util";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $WorldDimensions } from "@package/net/minecraft/world/level/levelgen";

declare module "@package/net/minecraft/world/level/levelgen/presets" {
    export class $WorldPreset {
        overworld(): ($LevelStem) | undefined;
        createWorldDimensions(): $WorldDimensions;
        static CODEC: $Codec<$Holder<$WorldPreset>>;
        static DIRECT_CODEC: $Codec<$WorldPreset>;
        constructor(dimensions: $Map_<$ResourceKey_<$LevelStem>, $LevelStem_>);
    }
    /**
     * Values that may be interpreted as {@link $WorldPreset}.
     */
    export type $WorldPreset_ = RegistryTypes.WorldgenWorldPreset;
    export interface $WorldPreset extends RegistryMarked<RegistryTypes.WorldgenWorldPresetTag, RegistryTypes.WorldgenWorldPreset> {}
}
