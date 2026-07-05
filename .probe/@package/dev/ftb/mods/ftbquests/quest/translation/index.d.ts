import { $NameMap } from "@package/dev/ftb/mods/ftblibrary/config";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Path_ } from "@package/java/nio/file";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $BaseQuestFile, $QuestObjectBase, $ServerQuestFile } from "@package/dev/ftb/mods/ftbquests/quest";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/ftb/mods/ftbquests/quest/translation" {
    export class $TranslationKey extends $Enum<$TranslationKey> {
        getName(): string;
        static values(): $TranslationKey[];
        static valueOf(name: string): $TranslationKey;
        validate(either: $Either<string, $List_<string>>): $Either<string, $List<string>>;
        getTranslationKey(): string;
        isListVal(): boolean;
        static QUEST_DESC: $TranslationKey;
        static NAME_MAP: $NameMap<$TranslationKey>;
        static TITLE: $TranslationKey;
        static QUEST_SUBTITLE: $TranslationKey;
        static CHAPTER_SUBTITLE: $TranslationKey;
        get translationKey(): string;
        get listVal(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $TranslationKey}.
     */
    export type $TranslationKey_ = "title" | "quest_subtitle" | "quest_desc" | "chapter_subtitle";
    export class $TranslationTable {
        remove(key: string): void;
        size(): number;
        put(key: string, message: string): void;
        put(key: string, message: $List_<string>): void;
        contains(key: string): boolean;
        static fromNBT(tag: $CompoundTag_): $TranslationTable;
        saveToNBT(): $CompoundTag;
        getStringListTranslation(key: string): ($List<string>) | undefined;
        getStringTranslation(key: string): (string) | undefined;
        findStaleEntries(file: $ServerQuestFile): $List<string>;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $TranslationTable>;
        constructor();
    }
    export class $TranslationManager {
        saveToNBT(langFolder: $Path_, force: boolean): void;
        syncTableFromServer(locale: string, table: $TranslationTable): void;
        addInitialTranslation(extra: $CompoundTag_, locale: string, translationKey: $TranslationKey_, value: string): void;
        loadFromNBT(file: $BaseQuestFile, langFolder: $Path_): void;
        static syncTable(player: $ServerPlayer, language: string): void;
        sendTableToPlayer(player: $ServerPlayer, locale: string): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: $List_<string>): void;
        addTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_, message: string): void;
        sendTranslationsToPlayer(player: $ServerPlayer): void;
        removeAllTranslations(obj: $QuestObjectBase): void;
        getStringListTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): ($List<string>) | undefined;
        getStringTranslation(object: $QuestObjectBase, locale: string, subKey: $TranslationKey_): (string) | undefined;
        processInitialTranslation(extra: $CompoundTag_, object: $QuestObjectBase): void;
        hasMissingTranslation(object: $QuestObjectBase, key: $TranslationKey_): boolean;
        cleanupTranslations(source: $CommandSourceStack, dryRun: boolean): void;
        static DEFAULT_FALLBACK_LOCALE: string;
        constructor();
    }
}
