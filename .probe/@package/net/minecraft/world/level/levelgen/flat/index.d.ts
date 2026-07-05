import { $Holder_, $HolderSet_, $Holder, $HolderGetter, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $BlockState } from "@package/net/minecraft/world/level/block/state";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $BiomeGenerationSettings, $Biome, $Biome_ } from "@package/net/minecraft/world/level/biome";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $StructureSet_, $StructureSet } from "@package/net/minecraft/world/level/levelgen/structure";
import { $PlacedFeature, $PlacedFeature_ } from "@package/net/minecraft/world/level/levelgen/placement";

declare module "@package/net/minecraft/world/level/levelgen/flat" {
    export class $FlatLayerInfo {
        getBlockState(): $BlockState;
        /**
         * Return the amount of layers for this set of layers.
         */
        getHeight(): number;
        static CODEC: $Codec<$FlatLayerInfo>;
        constructor(height: number, block: $Block_);
        get blockState(): $BlockState;
        get height(): number;
    }
    export interface $FlatLevelGeneratorPreset extends RegistryMarked<RegistryTypes.WorldgenFlatLevelGeneratorPresetTag, RegistryTypes.WorldgenFlatLevelGeneratorPreset> {}
    export class $FlatLevelGeneratorSettings {
        static getDefault(biomes: $HolderGetter<$Biome_>, structureSetGetter: $HolderGetter<$StructureSet_>, placedFeatureGetter: $HolderGetter<$PlacedFeature_>): $FlatLevelGeneratorSettings;
        adjustGenerationSettings(biome: $Holder_<$Biome>): $BiomeGenerationSettings;
        updateLayers(): void;
        /**
         * Return the biome used on this preset.
         */
        getBiome(): $Holder<$Biome>;
        /**
         * Return the list of layers on this preset.
         */
        getLayers(): $List<$BlockState>;
        structureOverrides(): ($HolderSet<$StructureSet>) | undefined;
        withBiomeAndLayers(layerInfos: $List_<$FlatLayerInfo>, structureSets: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>): $FlatLevelGeneratorSettings;
        setAddLakes(): void;
        /**
         * Return the list of layers on this preset.
         */
        getLayersInfo(): $List<$FlatLayerInfo>;
        static getDefaultBiome(biomes: $HolderGetter<$Biome_>): $Holder<$Biome>;
        setDecoration(): void;
        static createLakesList(placedFEatureGetter: $HolderGetter<$PlacedFeature_>): $List<$Holder<$PlacedFeature>>;
        static CODEC: $Codec<$FlatLevelGeneratorSettings>;
        constructor(structureOverrides: ($HolderSet_<$StructureSet>) | undefined, biome: $Holder_<$Biome>, lakes: $List_<$Holder_<$PlacedFeature>>);
        get biome(): $Holder<$Biome>;
        get layers(): $List<$BlockState>;
        get layersInfo(): $List<$FlatLayerInfo>;
    }
    export class $FlatLevelGeneratorPreset extends $Record {
        settings(): $FlatLevelGeneratorSettings;
        displayItem(): $Holder<$Item>;
        static CODEC: $Codec<$Holder<$FlatLevelGeneratorPreset>>;
        static DIRECT_CODEC: $Codec<$FlatLevelGeneratorPreset>;
        constructor(arg0: $Holder_<$Item>, arg1: $FlatLevelGeneratorSettings);
    }
    /**
     * Values that may be interpreted as {@link $FlatLevelGeneratorPreset}.
     */
    export type $FlatLevelGeneratorPreset_ = RegistryTypes.WorldgenFlatLevelGeneratorPreset | { displayItem?: $Holder_<$Item>, settings?: $FlatLevelGeneratorSettings,  } | [displayItem?: $Holder_<$Item>, settings?: $FlatLevelGeneratorSettings, ];
}
