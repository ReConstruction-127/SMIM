import { $Component } from "@package/net/minecraft/network/chat";
import { $Set_, $Set } from "@package/java/util";
import { $Enum, $Record } from "@package/java/lang";
import { $ReflectionBasedSerialization } from "@package/com/mojang/realmsclient/dto";

declare module "@package/com/mojang/realmsclient/util" {
    export class $RealmsPersistence {
        read(): $RealmsPersistence$RealmsPersistenceData;
        save(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        static writeFile(persistenceData: $RealmsPersistence$RealmsPersistenceData): void;
        static readFile(): $RealmsPersistence$RealmsPersistenceData;
        constructor();
    }
    export class $RealmsPersistence$RealmsPersistenceData implements $ReflectionBasedSerialization {
        hasUnreadNews: boolean;
        newsLink: string;
        constructor();
    }
    export class $LevelType extends $Enum<$LevelType> {
        getName(): $Component;
        static values(): $LevelType[];
        static valueOf(arg0: string): $LevelType;
        getDtoIndex(): number;
        static AMPLIFIED: $LevelType;
        static FLAT: $LevelType;
        static LARGE_BIOMES: $LevelType;
        static DEFAULT: $LevelType;
        get dtoIndex(): number;
    }
    /**
     * Values that may be interpreted as {@link $LevelType}.
     */
    export type $LevelType_ = "default" | "flat" | "large_biomes" | "amplified";
    export class $WorldGenerationInfo extends $Record {
        seed(): string;
        levelType(): $LevelType;
        generateStructures(): boolean;
        experiments(): $Set<string>;
        constructor(arg0: string, arg1: $LevelType_, arg2: boolean, arg3: $Set_<string>);
    }
    /**
     * Values that may be interpreted as {@link $WorldGenerationInfo}.
     */
    export type $WorldGenerationInfo_ = { experiments?: $Set_<string>, seed?: string, generateStructures?: boolean, levelType?: $LevelType_,  } | [experiments?: $Set_<string>, seed?: string, generateStructures?: boolean, levelType?: $LevelType_, ];
}
