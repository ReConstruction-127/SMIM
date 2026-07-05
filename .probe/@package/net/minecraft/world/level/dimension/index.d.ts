import { $Level } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Dynamic, $DataResult, $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ChunkGenerator } from "@package/net/minecraft/world/level/chunk";
import { $OptionalLong } from "@package/java/util";
import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $IntProvider_, $IntProvider } from "@package/net/minecraft/util/valueproviders";
import { $Path_, $Path } from "@package/java/nio/file";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Record } from "@package/java/lang";
import { $DimensionTypeAccessor } from "@package/net/irisshaders/iris/mixin";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as end from "@package/net/minecraft/world/level/dimension/end";

declare module "@package/net/minecraft/world/level/dimension" {
    export class $LevelStem extends $Record {
        type(): $Holder<$DimensionType>;
        generator(): $ChunkGenerator;
        static CODEC: $Codec<$LevelStem>;
        static OVERWORLD: $ResourceKey<$LevelStem>;
        static NETHER: $ResourceKey<$LevelStem>;
        static END: $ResourceKey<$LevelStem>;
        constructor(type: $Holder_<$DimensionType>, generator: $ChunkGenerator);
    }
    /**
     * Values that may be interpreted as {@link $LevelStem}.
     */
    export type $LevelStem_ = { type?: $Holder_<$DimensionType>, generator?: $ChunkGenerator,  } | [type?: $Holder_<$DimensionType>, generator?: $ChunkGenerator, ];
    export class $DimensionType extends $Record implements $DimensionTypeAccessor {
        natural(): boolean;
        timeOfDay(dayTime: number): number;
        /**
         * @deprecated
         */
        static parseLegacy(dynamic: $Dynamic<never>): $DataResult<$ResourceKey<$Level>>;
        effectsLocation(): $ResourceLocation;
        static getStorageFolder(dimensionKey: $ResourceKey_<$Level>, levelFolder: $Path_): $Path;
        monsterSettings(): $DimensionType$MonsterSettings;
        monsterSpawnBlockLightLimit(): number;
        height(): number;
        hasRaids(): boolean;
        fixedTime(): $OptionalLong;
        moonPhase(dayTime: number): number;
        infiniburn(): $TagKey<$Block>;
        ultraWarm(): boolean;
        static getTeleportationScale(firstType: $DimensionType_, secondType: $DimensionType_): number;
        bedWorks(): boolean;
        minY(): number;
        hasSkyLight(): boolean;
        ambientLight(): number;
        hasFixedTime(): boolean;
        coordinateScale(): number;
        logicalHeight(): number;
        respawnAnchorWorks(): boolean;
        hasCeiling(): boolean;
        piglinSafe(): boolean;
        monsterSpawnLightTest(): $IntProvider;
        getAmbientLight(): number;
        getFixedTime(): $OptionalLong;
        static MIN_Y: number;
        static CODEC: $Codec<$Holder<$DimensionType>>;
        static MIN_HEIGHT: number;
        static MAX_Y: number;
        static Y_SIZE: number;
        static WAY_ABOVE_MAX_Y: number;
        static WAY_BELOW_MIN_Y: number;
        static DIRECT_CODEC: $Codec<$DimensionType>;
        static BITS_FOR_Y: number;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$DimensionType>>;
        static MOON_BRIGHTNESS_PER_PHASE: number[];
        constructor(fixedTime: $OptionalLong, hasSkyLight: boolean, hasCeiling: boolean, ultraWarm: boolean, natural: boolean, coordinateScale: number, arg6: boolean, bedWorks: boolean, respawnAnchorWorks: number, minY: number, height: number, logicalHeight: $TagKey_<$Block>, infiniburn: $ResourceLocation_, effectsLocation: number, ambientLight: $DimensionType$MonsterSettings_);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType}.
     */
    export type $DimensionType_ = RegistryTypes.DimensionType | { minY?: number, respawnAnchorWorks?: boolean, infiniburn?: $TagKey_<$Block>, coordinateScale?: number, fixedTime?: $OptionalLong, natural?: boolean, monsterSettings?: $DimensionType$MonsterSettings_, effectsLocation?: $ResourceLocation_, ambientLight?: number, hasSkyLight?: boolean, logicalHeight?: number, hasCeiling?: boolean, height?: number, bedWorks?: boolean, ultraWarm?: boolean,  } | [minY?: number, respawnAnchorWorks?: boolean, infiniburn?: $TagKey_<$Block>, coordinateScale?: number, fixedTime?: $OptionalLong, natural?: boolean, monsterSettings?: $DimensionType$MonsterSettings_, effectsLocation?: $ResourceLocation_, ambientLight?: number, hasSkyLight?: boolean, logicalHeight?: number, hasCeiling?: boolean, height?: number, bedWorks?: boolean, ultraWarm?: boolean, ];
    export class $DimensionType$MonsterSettings extends $Record {
        monsterSpawnBlockLightLimit(): number;
        hasRaids(): boolean;
        piglinSafe(): boolean;
        monsterSpawnLightTest(): $IntProvider;
        static CODEC: $MapCodec<$DimensionType$MonsterSettings>;
        constructor(arg0: boolean, arg1: boolean, arg2: $IntProvider_, arg3: number);
    }
    /**
     * Values that may be interpreted as {@link $DimensionType$MonsterSettings}.
     */
    export type $DimensionType$MonsterSettings_ = { monsterSpawnLightTest?: $IntProvider_, hasRaids?: boolean, monsterSpawnBlockLightLimit?: number, piglinSafe?: boolean,  } | [monsterSpawnLightTest?: $IntProvider_, hasRaids?: boolean, monsterSpawnBlockLightLimit?: number, piglinSafe?: boolean, ];
    export interface $DimensionType extends RegistryMarked<RegistryTypes.DimensionTypeTag, RegistryTypes.DimensionType> {}
}
