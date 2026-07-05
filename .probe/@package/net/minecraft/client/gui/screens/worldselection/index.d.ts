import { $LevelSettings, $GameType, $WorldDataConfiguration, $GameRules, $WorldDataConfiguration_ } from "@package/net/minecraft/world/level";
import { $Lifecycle, $Dynamic } from "@package/com/mojang/serialization";
import { $RegistryLayer, $WorldStem, $ReloadableServerResources, $RegistryLayer_ } from "@package/net/minecraft/server";
import { $Pair } from "@package/com/mojang/datafixers/util";
import { $WorldPreset } from "@package/net/minecraft/world/level/levelgen/presets";
import { $Component } from "@package/net/minecraft/network/chat";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Minecraft } from "@package/net/minecraft/client";
import { $List, $OptionalLong, $Map } from "@package/java/util";
import { $LevelStorageSource, $LevelStorageSource$LevelStorageAccess, $WorldData } from "@package/net/minecraft/world/level/storage";
import { $Difficulty_, $Difficulty } from "@package/net/minecraft/world";
import { $PackRepository } from "@package/net/minecraft/server/packs/repository";
import { $Function_, $Consumer_, $BiFunction, $UnaryOperator } from "@package/java/util/function";
import { $Holder_, $RegistryAccess$Frozen, $Holder, $RegistryAccess, $Registry, $LayeredRegistryAccess } from "@package/net/minecraft/core";
import { $Screen, $Screen$DeferredTooltipRendering } from "@package/net/minecraft/client/gui/screens";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum, $Record, $Runnable_ } from "@package/java/lang";
import { $Font } from "@package/net/minecraft/client/gui";
import { $WorldDimensions, $WorldDimensions_, $WorldOptions, $WorldGenSettings_ } from "@package/net/minecraft/world/level/levelgen";
import { $LevelStem_, $LevelStem } from "@package/net/minecraft/world/level/dimension";

declare module "@package/net/minecraft/client/gui/screens/worldselection" {
    export class $WorldCreationContext$DimensionsUpdater {
    }
    export interface $WorldCreationContext$DimensionsUpdater extends $BiFunction<$RegistryAccess$Frozen, $WorldDimensions, $WorldDimensions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$DimensionsUpdater}.
     */
    export type $WorldCreationContext$DimensionsUpdater_ = (() => void);
    export class $WorldCreationUiState {
        getName(): string;
        setName(name: string): void;
        isDebug(): boolean;
        setSeed(name: string): void;
        getSeed(): string;
        addListener(listener: $Consumer_<$WorldCreationUiState>): void;
        setSettings(settings: $WorldCreationContext_): void;
        getSettings(): $WorldCreationContext;
        onChanged(): void;
        isAllowCommands(): boolean;
        setDifficulty(difficulty: $Difficulty_): void;
        isHardcore(): boolean;
        getGameMode(): $WorldCreationUiState$SelectedGameMode;
        setGameMode(gameMode: $WorldCreationUiState$SelectedGameMode_): void;
        getDifficulty(): $Difficulty;
        setAllowCommands(allowCommands: boolean): void;
        getTargetFolder(): string;
        getGameRules(): $GameRules;
        updateDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): void;
        getNormalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        isGenerateStructures(): boolean;
        setGenerateStructures(allowCommands: boolean): void;
        isBonusChest(): boolean;
        setGameRules(gameRules: $GameRules): void;
        getWorldType(): $WorldCreationUiState$WorldTypeEntry;
        setBonusChest(allowCommands: boolean): void;
        getAltPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        setWorldType(worldType: $WorldCreationUiState$WorldTypeEntry_): void;
        getPresetEditor(): $PresetEditor;
        constructor(savesFolder: $Path_, settings: $WorldCreationContext_, preset: ($ResourceKey_<$WorldPreset>) | undefined, seed: $OptionalLong);
        get debug(): boolean;
        get hardcore(): boolean;
        get targetFolder(): string;
        get normalPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get altPresetList(): $List<$WorldCreationUiState$WorldTypeEntry>;
        get presetEditor(): $PresetEditor;
    }
    export class $PresetEditor {
        /**
         * @deprecated
         */
        static EDITORS: $Map<($ResourceKey<$WorldPreset>) | undefined, $PresetEditor>;
    }
    export interface $PresetEditor {
        createEditScreen(lastScreen: $CreateWorldScreen, context: $WorldCreationContext_): $Screen;
    }
    /**
     * Values that may be interpreted as {@link $PresetEditor}.
     */
    export type $PresetEditor_ = ((arg0: $CreateWorldScreen, arg1: $WorldCreationContext) => $Screen);
    export class $WorldCreationContext$OptionsModifier {
    }
    export interface $WorldCreationContext$OptionsModifier extends $UnaryOperator<$WorldOptions> {
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext$OptionsModifier}.
     */
    export type $WorldCreationContext$OptionsModifier_ = (() => void);
    export class $WorldOpenFlows {
        createFreshLevel(levelName: string, levelSettings: $LevelSettings, worldOptions: $WorldOptions, dimensionGetter: $Function_<$RegistryAccess, $WorldDimensions>, lastScreen: $Screen): void;
        openWorld(worldName: string, onFail: $Runnable_): void;
        loadWorldStem(dynamic: $Dynamic<never>, safeMode: boolean, packRepository: $PackRepository): $WorldStem;
        recreateWorldData(levelStorage: $LevelStorageSource$LevelStorageAccess): $Pair<$LevelSettings, $WorldCreationContext>;
        createLevelFromExistingSettings(levelStorage: $LevelStorageSource$LevelStorageAccess, resources: $ReloadableServerResources, registries: $LayeredRegistryAccess<$RegistryLayer_>, worldData: $WorldData): void;
        static confirmWorldCreation(minecraft: $Minecraft, screen: $CreateWorldScreen, lifecycle: $Lifecycle, loadWorld: $Runnable_, skipWarnings: boolean): void;
        constructor(minecraft: $Minecraft, levelSource: $LevelStorageSource);
    }
    export class $WorldCreationUiState$WorldTypeEntry extends $Record {
        preset(): $Holder<$WorldPreset>;
        isAmplified(): boolean;
        describePreset(): $Component;
        constructor(preset: $Holder_<$WorldPreset> | null);
        get amplified(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$WorldTypeEntry}.
     */
    export type $WorldCreationUiState$WorldTypeEntry_ = { preset?: $Holder_<$WorldPreset>,  } | [preset?: $Holder_<$WorldPreset>, ];
    export class $WorldCreationContext extends $Record {
        validate(): void;
        options(): $WorldOptions;
        withDataConfiguration(arg0: $WorldDataConfiguration_): $WorldCreationContext;
        worldgenLoadContext(): $RegistryAccess$Frozen;
        dataPackResources(): $ReloadableServerResources;
        selectedDimensions(): $WorldDimensions;
        withSettings(options: $WorldOptions, selectedDimensions: $WorldDimensions_): $WorldCreationContext;
        worldgenRegistries(): $LayeredRegistryAccess<$RegistryLayer>;
        withDimensions(dimensionsUpdater: $WorldCreationContext$DimensionsUpdater_): $WorldCreationContext;
        datapackDimensions(): $Registry<$LevelStem>;
        dataConfiguration(): $WorldDataConfiguration;
        withOptions(optionsModifier: $WorldCreationContext$OptionsModifier_): $WorldCreationContext;
        constructor(options: $WorldOptions, datapackDimensions: $Registry<$LevelStem_>, selectedDimensions: $WorldDimensions_, worldgenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(options: $WorldOptions, selectedDimensions: $WorldDimensions_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
        constructor(worldGenSettings: $WorldGenSettings_, worldGenRegistries: $LayeredRegistryAccess<$RegistryLayer_>, dataPackResources: $ReloadableServerResources, dataConfiguration: $WorldDataConfiguration_);
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationContext}.
     */
    export type $WorldCreationContext_ = { datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources, dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions, selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>,  } | [datapackDimensions?: $Registry<$LevelStem_>, dataPackResources?: $ReloadableServerResources, dataConfiguration?: $WorldDataConfiguration_, options?: $WorldOptions, selectedDimensions?: $WorldDimensions_, worldgenRegistries?: $LayeredRegistryAccess<$RegistryLayer_>, ];
    export class $WorldCreationUiState$SelectedGameMode extends $Enum<$WorldCreationUiState$SelectedGameMode> {
        static values(): $WorldCreationUiState$SelectedGameMode[];
        static valueOf(arg0: string): $WorldCreationUiState$SelectedGameMode;
        getInfo(): $Component;
        static SURVIVAL: $WorldCreationUiState$SelectedGameMode;
        gameType: $GameType;
        displayName: $Component;
        static CREATIVE: $WorldCreationUiState$SelectedGameMode;
        static DEBUG: $WorldCreationUiState$SelectedGameMode;
        static HARDCORE: $WorldCreationUiState$SelectedGameMode;
        get info(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $WorldCreationUiState$SelectedGameMode}.
     */
    export type $WorldCreationUiState$SelectedGameMode_ = "survival" | "hardcore" | "creative" | "debug";
    export class $CreateWorldScreen extends $Screen {
        repositionElements(): void;
        static createFromExisting(minecraft: $Minecraft, lastScreen: $Screen | null, levelSettings: $LevelSettings, settings: $WorldCreationContext_, tempDataPackDir: $Path_ | null): $CreateWorldScreen;
        getUiState(): $WorldCreationUiState;
        popScreen(): void;
        static openFresh(minecraft: $Minecraft, lastScreen: $Screen | null): void;
        static createTempDataPackDirFromExistingWorld(datapackDir: $Path_, minecraft: $Minecraft): $Path;
        static MENU_BACKGROUND: $ResourceLocation;
        static INWORLD_FOOTER_SEPARATOR: $ResourceLocation;
        deferredTooltipRendering: $Screen$DeferredTooltipRendering;
        title: $Component;
        static FOOTER_SEPARATOR: $ResourceLocation;
        static TAB_HEADER_BACKGROUND: $ResourceLocation;
        renderables: $List<$Renderable>;
        static INWORLD_HEADER_SEPARATOR: $ResourceLocation;
        narratables: $List<$NarratableEntry>;
        width: number;
        static HEADER_SEPARATOR: $ResourceLocation;
        height: number;
        font: $Font;
        get uiState(): $WorldCreationUiState;
    }
}
