import { $Config } from "@package/xaero/lib/common/config";
import { $ObjectCategoryRuleResolver } from "@package/xaero/hud/category/rule/resolver";
import { $Path } from "@package/java/nio/file";
import { $EntityRadarCategoryData } from "@package/xaero/hud/minimap/radar/category/serialization/data";
import { $IEditConfigScreenContext } from "@package/xaero/lib/client/gui/config/context";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ModSettings } from "@package/xaero/common/settings";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $FilterObjectCategory } from "@package/xaero/hud/category";
export * as serialization from "@package/xaero/hud/minimap/radar/category/serialization";

declare module "@package/xaero/hud/minimap/radar/category" {
    export class $EntityRadarDefaultCategories {
        setupDefault(arg0: $ModSettings): $EntityRadarCategory;
        constructor(arg0: boolean);
        set upDefault(value: $ModSettings);
    }
    export class $EntityRadarCategoryConfigIO {
        loadRootCategory(arg0: $Config): $EntityRadarCategory;
        storeRootCategory(arg0: $EntityRadarCategory, arg1: $Config): void;
    }
    export class $EntityRadarCategory extends $FilterObjectCategory<$Entity, $Player, $EntityRadarCategoryData, $EntityRadarCategory> {
    }
    export class $EntityRadarBackwardsCompatibilityConfig {
        readSetting(arg0: string[]): boolean;
        showPlayers: boolean;
        tamedMobNames: number;
        displayNameWhenIconFails: boolean;
        hostileColor: number;
        friendlyMobNames: number;
        playerIcons: number;
        playersColor: number;
        otherTeamsNames: number;
        showItems: boolean;
        alwaysEntityNametags: boolean;
        mobIcons: number;
        otherTeamColor: number;
        tamedIcons: number;
        showMobs: boolean;
        showOtherTeam: boolean;
        playerNames: number;
        dotsSize: number;
        itemNames: number;
        tamedMobsColor: number;
        hostileIcons: number;
        showHostile: boolean;
        itemsColor: number;
        headsScale: number;
        otherColor: number;
        showTamed: boolean;
        hostileMobNames: number;
        heightLimit: number;
        otherNames: number;
        showEntityHeight: boolean;
        itemFramesOnRadar: boolean;
        entityAmount: number;
        mobsColor: number;
        showOther: boolean;
        constructor();
    }
    export class $EntityRadarCategoryManager {
        init(): void;
        getRuleResolver(): $ObjectCategoryRuleResolver;
        getRootCategory(): $EntityRadarCategory;
        loadEditedCategory(arg0: $Config, arg1: boolean): $EntityRadarCategory;
        getEditedCategory(): $EntityRadarCategory;
        getMainIO(): $EntityRadarCategoryConfigIO;
        fetchDefaultClientCategory(): $EntityRadarCategory;
        fetchDefaultClientCategory(arg0: number): $EntityRadarCategory;
        fetchDefaultServerCategory(arg0: number): $EntityRadarCategory;
        fetchDefaultServerCategory(): $EntityRadarCategory;
        getSyncedRootCategory(): $EntityRadarCategory;
        editedCategoryNeedsSaving(): boolean;
        storeEditedCategory(arg0: boolean): void;
        storeEditedCategory(arg0: $EntityRadarCategory, arg1: boolean): void;
        forgetEditedCategory(): void;
        getSecondaryLegacyFilePath(): $Path;
        updateFromConfigChange(arg0: $Config): void;
        resetRootCategorySettings(arg0: $IEditConfigScreenContext): void;
        getEditedCategoryConfig(): $Config;
        setEditedCategoryNeedsSaving(arg0: boolean): void;
        getDefaultCategoryConfigurator(): $EntityRadarDefaultCategories;
        getEffectiveSyncedRootCategory(): $EntityRadarCategory;
        get ruleResolver(): $ObjectCategoryRuleResolver;
        get rootCategory(): $EntityRadarCategory;
        get editedCategory(): $EntityRadarCategory;
        get mainIO(): $EntityRadarCategoryConfigIO;
        get syncedRootCategory(): $EntityRadarCategory;
        get secondaryLegacyFilePath(): $Path;
        get editedCategoryConfig(): $Config;
        get defaultCategoryConfigurator(): $EntityRadarDefaultCategories;
        get effectiveSyncedRootCategory(): $EntityRadarCategory;
    }
}
