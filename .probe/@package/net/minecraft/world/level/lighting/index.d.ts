import { $LightLayer_, $ChunkPos, $LevelHeightAccessor, $BlockGetter } from "@package/net/minecraft/world/level";
import { $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $CallbackInfoReturnable, $CallbackInfo } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $DataLayer, $LightChunkGetter, $ChunkAccess } from "@package/net/minecraft/world/level/chunk";
import { $Enum } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/lighting" {
    export class $LayerLightEventListener {
    }
    export interface $LayerLightEventListener extends $LightEventListener {
        getLightValue(levelPos: $BlockPos_): number;
        getDataLayerData(sectionPos: $SectionPos): $DataLayer;
    }
    export class $LightEventListener {
    }
    export interface $LightEventListener {
        setLightEnabled(chunkPos: $ChunkPos, lightEnabled: boolean): void;
        checkBlock(pos: $BlockPos_): void;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        updateSectionStatus(pos: $SectionPos, isQueueEmpty: boolean): void;
        runLightUpdates(): number;
        propagateLightSources(chunkPos: $ChunkPos): void;
        hasLightWork(): boolean;
    }
    export class $LevelLightEngine implements $LightEventListener {
        setLightEnabled(pos: $ChunkPos, retain: boolean): void;
        checkBlock(pos: $BlockPos_): void;
        getRawBrightness(blockPos: $BlockPos_, amount: number): number;
        getLayerListener(type: $LightLayer_): $LayerLightEventListener;
        updateSectionStatus(pos: $SectionPos, isEmpty: boolean): void;
        lightOnInSection(sectionPos: $SectionPos): boolean;
        runLightUpdates(): number;
        getLightSectionCount(): number;
        getDebugData(lightLayer: $LightLayer_, sectionPos: $SectionPos): string;
        propagateLightSources(chunkPos: $ChunkPos): void;
        retainData(pos: $ChunkPos, retain: boolean): void;
        handler$cng000$embeddium_extra$checkBlock(pos: $BlockPos_, ci: $CallbackInfo): void;
        handler$cng000$embeddium_extra$doLightUpdates(cir: $CallbackInfoReturnable<any>): void;
        queueSectionData(lightLayer: $LightLayer_, sectionPos: $SectionPos, dataLayer: $DataLayer | null): void;
        getMinLightSection(): number;
        getMaxLightSection(): number;
        getDebugSectionType(lightLayer: $LightLayer_, sectionPos: $SectionPos): $LayerLightSectionStorage$SectionType;
        hasLightWork(): boolean;
        updateSectionStatus(pos: $BlockPos_, isQueueEmpty: boolean): void;
        static LIGHT_SECTION_PADDING: number;
        constructor(lightChunkGetter: $LightChunkGetter, blockLight: boolean, skyLight: boolean);
        get lightSectionCount(): number;
        get minLightSection(): number;
        get maxLightSection(): number;
    }
    export class $ChunkSkyLightSources {
        update(level: $BlockGetter, x: number, y: number, z: number): boolean;
        fillFrom(chunk: $ChunkAccess): void;
        getHighestLowestSourceY(): number;
        getLowestSourceY(x: number, z: number): number;
        static NEGATIVE_INFINITY: number;
        constructor(level: $LevelHeightAccessor);
        get highestLowestSourceY(): number;
    }
    export class $LayerLightSectionStorage$SectionType extends $Enum<$LayerLightSectionStorage$SectionType> {
        static values(): $LayerLightSectionStorage$SectionType[];
        static valueOf(arg0: string): $LayerLightSectionStorage$SectionType;
        display(): string;
        static LIGHT_ONLY: $LayerLightSectionStorage$SectionType;
        static LIGHT_AND_DATA: $LayerLightSectionStorage$SectionType;
        static EMPTY: $LayerLightSectionStorage$SectionType;
    }
    /**
     * Values that may be interpreted as {@link $LayerLightSectionStorage$SectionType}.
     */
    export type $LayerLightSectionStorage$SectionType_ = "empty" | "light_only" | "light_and_data";
}
