import { $IHasTranslationKey } from "@package/mekanism/api/text";
import { $CachedValue } from "@package/mekanism/common/config/value";
import { $ModConfig$Type } from "@package/net/neoforged/fml/config";
import { $ModConfigSpec$Builder, $ModConfigSpec } from "@package/net/neoforged/neoforge/common";
export * as value from "@package/mekanism/common/config/value";

declare module "@package/mekanism/common/config" {
    export class $IConfigTranslation {
        static getSectionTitle(title: string, isSection: boolean): string;
    }
    export interface $IConfigTranslation extends $IHasTranslationKey {
        title(): string;
        button(): string;
        tooltip(): string;
        applyToBuilder(builder: $ModConfigSpec$Builder): $ModConfigSpec$Builder;
    }
    export class $IMekanismConfig {
    }
    export interface $IMekanismConfig {
        save(): void;
        getFileName(): string;
        isLoaded(): boolean;
        clearCache(unloading: boolean): void;
        getConfigType(): $ModConfig$Type;
        getTranslation(): string;
        getConfigSpec(): $ModConfigSpec;
        addCachedValue(configValue: $CachedValue<never>): void;
        get fileName(): string;
        get loaded(): boolean;
        get configType(): $ModConfig$Type;
        get translation(): string;
        get configSpec(): $ModConfigSpec;
    }
}
