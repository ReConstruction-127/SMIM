import { $Level, $LightLayer_ } from "@package/net/minecraft/world/level";
import { $Path } from "@package/net/minecraft/world/level/pathfinder";
import { $BlockPos, $BlockPos_, $SectionPos } from "@package/net/minecraft/core";
import { $MultiBufferSource_, $MultiBufferSource, $MultiBufferSource$BufferSource } from "@package/net/minecraft/client/renderer";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VertexConsumer, $PoseStack } from "@package/com/mojang/blaze3d/vertex";
import { $PositionSource, $GameEvent } from "@package/net/minecraft/world/level/gameevent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $BeeDebugPayload$BeeInfo_, $HiveDebugPayload$HiveInfo_, $BrainDebugPayload$BrainDump_, $StructuresDebugPayload$PieceInfo_, $BreezeDebugPayload$BreezeInfo_, $GoalDebugPayload$DebugGoal_ } from "@package/net/minecraft/network/protocol/common/custom";
import { $Collection_, $List_ } from "@package/java/util";
import { $BoundingBox } from "@package/net/minecraft/world/level/levelgen/structure";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/client/renderer/debug" {
    export class $DebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource$BufferSource, camX: number, arg3: number, camY: number): void;
        /**
         * Toggles the `#renderChunkborder` value, effectively toggling the `#chunkBorderRenderer` on or off.
         * 
         * @return the new, inverted value
         */
        switchRenderChunkborder(): boolean;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number, z: number): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, y: number, z: number, color: number): void;
        static renderFloatingText(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, text: string, x: number, arg4: number, y: number, arg6: number, z: number, arg8: boolean, color: number, scale: boolean): void;
        static getTargetedEntity(entity: $Entity | null, distance: number): ($Entity) | undefined;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, minX: number, arg3: number, minY: number, arg5: number, minZ: number, arg7: number, maxX: number, arg9: number, maxY: number, arg11: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, startPos: $BlockPos_, endPos: $BlockPos_, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, pos: $BlockPos_, scale: number, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledBox(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, boundingBox: $AABB_, red: number, green: number, blue: number, alpha: number): void;
        static renderFilledUnitCube(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, pos: $BlockPos_, red: number, green: number, blue: number, alpha: number): void;
        waterDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        neighborsUpdateRenderer: $DebugRenderer$SimpleDebugRenderer;
        pathfindingRenderer: $PathfindingRenderer;
        gameTestDebugRenderer: $GameTestDebugRenderer;
        supportBlockRenderer: $DebugRenderer$SimpleDebugRenderer;
        solidFaceRenderer: $DebugRenderer$SimpleDebugRenderer;
        breezeDebugRenderer: $BreezeDebugRenderer;
        gameEventListenerRenderer: $GameEventListenerRenderer;
        structureRenderer: $StructureRenderer;
        lightDebugRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkRenderer: $DebugRenderer$SimpleDebugRenderer;
        brainDebugRenderer: $BrainDebugRenderer;
        heightMapRenderer: $DebugRenderer$SimpleDebugRenderer;
        chunkBorderRenderer: $DebugRenderer$SimpleDebugRenderer;
        collisionBoxRenderer: $DebugRenderer$SimpleDebugRenderer;
        skyLightSectionDebugRenderer: $LightSectionDebugRenderer;
        goalSelectorRenderer: $GoalSelectorDebugRenderer;
        beeDebugRenderer: $BeeDebugRenderer;
        villageSectionsDebugRenderer: $VillageSectionsDebugRenderer;
        raidDebugRenderer: $RaidDebugRenderer;
        worldGenAttemptRenderer: $DebugRenderer$SimpleDebugRenderer;
        constructor(minecraft: $Minecraft);
    }
    export class $GoalSelectorDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addGoalSelector(mobId: number, entityPos: $BlockPos_, goals: $List_<$GoalDebugPayload$DebugGoal_>): void;
        removeGoalSelector(mobId: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BeeDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addOrUpdateBeeInfo(beeInfo: $BeeDebugPayload$BeeInfo_): void;
        addOrUpdateHiveInfo(hiveInfo: $HiveDebugPayload$HiveInfo_, lastSeen: number): void;
        removeBeeInfo(id: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $GameEventListenerRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        trackListener(listenerSource: $PositionSource, listenerRange: number): void;
        trackGameEvent(gameEvent: $ResourceKey_<$GameEvent>, position: $Vec3_): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
    }
    export class $StructureRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addBoundingBox(boundingBox: $BoundingBox, pieces: $List_<$StructuresDebugPayload$PieceInfo_>, dimension: $ResourceKey_<$Level>): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BreezeDebugRenderer {
        clear(): void;
        add(breeze: $BreezeDebugPayload$BreezeInfo_): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, xOffset: number, arg3: number, yOffset: number): void;
        constructor(minecraft: $Minecraft);
    }
    export class $BrainDebugRenderer$PoiInfo {
        pos: $BlockPos;
        freeTicketCount: number;
        type: string;
        constructor(pos: $BlockPos_, type: string, freeTicketCount: number);
    }
    export class $LightSectionDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        clear(): void;
        constructor(minecraft: $Minecraft, lightLayer: $LightLayer_);
    }
    export class $GameTestDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addMarker(pos: $BlockPos_, color: number, text: string, removeAfter: number): void;
        constructor();
    }
    export class $RaidDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        setRaidCenters(raidCenters: $Collection_<$BlockPos_>): void;
        clear(): void;
        constructor(minecraft: $Minecraft);
        set raidCenters(value: $Collection_<$BlockPos_>);
    }
    export class $PathfindingRenderer implements $DebugRenderer$SimpleDebugRenderer {
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        addPath(entityId: number, path: $Path, maxDistanceToWaypoint: number): void;
        static renderPathLine(poseStack: $PoseStack, consumer: $VertexConsumer, path: $Path, x: number, arg4: number, y: number): void;
        static renderPath(poseStack: $PoseStack, buffer: $MultiBufferSource_, path: $Path, arg3: number, arg4: boolean, arg5: boolean, x: number, arg7: number, y: number): void;
        clear(): void;
        constructor();
    }
    export class $VillageSectionsDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
        setNotVillageSection(pos: $SectionPos): void;
        setVillageSection(pos: $SectionPos): void;
        set notVillageSection(value: $SectionPos);
        set villageSection(value: $SectionPos);
    }
    export class $DebugRenderer$SimpleDebugRenderer {
    }
    export interface $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, bufferSource: $MultiBufferSource_, camX: number, arg3: number, camY: number): void;
    }
    /**
     * Values that may be interpreted as {@link $DebugRenderer$SimpleDebugRenderer}.
     */
    export type $DebugRenderer$SimpleDebugRenderer_ = ((arg0: $PoseStack, arg1: $MultiBufferSource, arg2: number, arg3: number, arg4: number) => void);
    export class $BrainDebugRenderer implements $DebugRenderer$SimpleDebugRenderer {
        clear(): void;
        render(poseStack: $PoseStack, buffer: $MultiBufferSource_, x: number, arg3: number, y: number): void;
        addOrUpdateBrainDump(brainDump: $BrainDebugPayload$BrainDump_): void;
        setFreeTicketCount(pos: $BlockPos_, freeTicketCount: number): void;
        removeBrainDump(id: number): void;
        removePoi(pos: $BlockPos_): void;
        addPoi(poiInfo: $BrainDebugRenderer$PoiInfo): void;
        constructor(minecraft: $Minecraft);
    }
}
