import { $Dynamic, $Codec } from "@package/com/mojang/serialization";
import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $DataFixer, $DSL$TypeReference } from "@package/com/mojang/datafixers";
export * as fixes from "@package/net/minecraft/util/datafix/fixes";

declare module "@package/net/minecraft/util/datafix" {
    export class $DataFixTypes extends $Enum<$DataFixTypes> {
        static values(): $DataFixTypes[];
        update(fixer: $DataFixer, tag: $CompoundTag_, version: number, newVersion: number): $CompoundTag;
        update<T>(fixer: $DataFixer, input: $Dynamic<T>, version: number, newVersion: number): $Dynamic<T>;
        static valueOf(arg0: string): $DataFixTypes;
        wrapCodec<A>(codec: $Codec<A>, dataFixer: $DataFixer, dataVersion: number): $Codec<A>;
        updateToCurrentVersion(fixer: $DataFixer, tag: $CompoundTag_, version: number): $CompoundTag;
        updateToCurrentVersion<T>(fixer: $DataFixer, input: $Dynamic<T>, version: number): $Dynamic<T>;
        static SAVED_DATA_MAP_DATA: $DataFixTypes;
        static WORLD_GEN_SETTINGS: $DataFixTypes;
        static SAVED_DATA_MAP_INDEX: $DataFixTypes;
        static STRUCTURE: $DataFixTypes;
        static STATS: $DataFixTypes;
        static LEVEL: $DataFixTypes;
        static OPTIONS: $DataFixTypes;
        static ADVANCEMENTS: $DataFixTypes;
        static POI_CHUNK: $DataFixTypes;
        static SAVED_DATA_COMMAND_STORAGE: $DataFixTypes;
        static PLAYER: $DataFixTypes;
        static SAVED_DATA_FORCED_CHUNKS: $DataFixTypes;
        static TYPES_FOR_LEVEL_LIST: $Set<$DSL$TypeReference>;
        static SAVED_DATA_RANDOM_SEQUENCES: $DataFixTypes;
        static SAVED_DATA_RAIDS: $DataFixTypes;
        static SAVED_DATA_SCOREBOARD: $DataFixTypes;
        static SAVED_DATA_STRUCTURE_FEATURE_INDICES: $DataFixTypes;
        static ENTITY_CHUNK: $DataFixTypes;
        static HOTBAR: $DataFixTypes;
        static CHUNK: $DataFixTypes;
    }
    /**
     * Values that may be interpreted as {@link $DataFixTypes}.
     */
    export type $DataFixTypes_ = "level" | "player" | "chunk" | "hotbar" | "options" | "structure" | "stats" | "saved_data_command_storage" | "saved_data_forced_chunks" | "saved_data_map_data" | "saved_data_map_index" | "saved_data_raids" | "saved_data_random_sequences" | "saved_data_scoreboard" | "saved_data_structure_feature_indices" | "advancements" | "poi_chunk" | "world_gen_settings" | "entity_chunk";
}
