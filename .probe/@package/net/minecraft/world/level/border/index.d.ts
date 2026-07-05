import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $DynamicLike } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Enum } from "@package/java/lang";
import { $Vec3_, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/level/border" {
    export class $BorderStatus extends $Enum<$BorderStatus> {
        static values(): $BorderStatus[];
        static valueOf(arg0: string): $BorderStatus;
        /**
         * Retrieves the color that the border should be, while in this state.
         */
        getColor(): number;
        static GROWING: $BorderStatus;
        static SHRINKING: $BorderStatus;
        static STATIONARY: $BorderStatus;
        get color(): number;
    }
    /**
     * Values that may be interpreted as {@link $BorderStatus}.
     */
    export type $BorderStatus_ = "growing" | "shrinking" | "stationary";
    export class $BorderChangeListener {
    }
    export interface $BorderChangeListener {
        onBorderCenterSet(border: $WorldBorder, x: number, arg2: number): void;
        onBorderSizeSet(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetDamagePerBlock(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSizeLerping(border: $WorldBorder, oldSize: number, arg2: number, newSize: number): void;
        onBorderSetDamageSafeZOne(border: $WorldBorder, damagePerBlock: number): void;
        onBorderSetWarningTime(border: $WorldBorder, warningBlocks: number): void;
        onBorderSetWarningBlocks(border: $WorldBorder, warningBlocks: number): void;
    }
    export class $WorldBorder$Settings {
        write(nbt: $CompoundTag_): void;
        static read(dynamic: $DynamicLike<never>, defaultValue: $WorldBorder$Settings): $WorldBorder$Settings;
        getSize(): number;
        getSizeLerpTime(): number;
        getSafeZone(): number;
        getWarningBlocks(): number;
        getWarningTime(): number;
        getSizeLerpTarget(): number;
        getDamagePerBlock(): number;
        getCenterX(): number;
        getCenterZ(): number;
        get size(): number;
        get sizeLerpTime(): number;
        get safeZone(): number;
        get warningBlocks(): number;
        get warningTime(): number;
        get sizeLerpTarget(): number;
        get damagePerBlock(): number;
        get centerX(): number;
        get centerZ(): number;
    }
    export class $WorldBorder {
        getSize(): number;
        tick(): void;
        setSize(damagePerBlock: number): void;
        addListener(listener: $BorderChangeListener): void;
        getStatus(): $BorderStatus;
        removeListener(listener: $BorderChangeListener): void;
        isWithinBounds(pos: $Vec3_): boolean;
        isWithinBounds(pos: $BlockPos_): boolean;
        isWithinBounds(box: $AABB_): boolean;
        isWithinBounds(chunkPos: $ChunkPos): boolean;
        isWithinBounds(x: number, arg1: number, z: number): boolean;
        isWithinBounds(x: number, arg1: number): boolean;
        createSettings(): $WorldBorder$Settings;
        applySettings(serializer: $WorldBorder$Settings): void;
        setWarningTime(size: number): void;
        lerpSizeBetween(oldSize: number, arg1: number, newSize: number): void;
        getWarningBlocks(): number;
        getLerpTarget(): number;
        getLerpSpeed(): number;
        setDamageSafeZone(damagePerBlock: number): void;
        setDamagePerBlock(damagePerBlock: number): void;
        getWarningTime(): number;
        getAbsoluteMaxSize(): number;
        setWarningBlocks(size: number): void;
        clampToBounds(pos: $BlockPos_): $BlockPos;
        clampToBounds(x: number, arg1: number, y: number): $BlockPos;
        clampToBounds(pos: $Vec3_): $BlockPos;
        getMinZ(): number;
        getMinX(): number;
        getMaxX(): number;
        getMaxZ(): number;
        setCenter(x: number, arg1: number): void;
        isInsideCloseToBorder(entity: $Entity, bounds: $AABB_): boolean;
        getDistanceToBorder(x: number, arg1: number): number;
        getDistanceToBorder(entity: $Entity): number;
        setAbsoluteMaxSize(size: number): void;
        getCollisionShape(): $VoxelShape;
        getDamagePerBlock(): number;
        getDamageSafeZone(): number;
        getLerpRemainingTime(): number;
        getCenterX(): number;
        getCenterZ(): number;
        static DEFAULT_SETTINGS: $WorldBorder$Settings;
        static MAX_SIZE: number;
        static MAX_CENTER_COORDINATE: number;
        constructor();
        get status(): $BorderStatus;
        get lerpTarget(): number;
        get lerpSpeed(): number;
        get minZ(): number;
        get minX(): number;
        get maxX(): number;
        get maxZ(): number;
        get collisionShape(): $VoxelShape;
        get lerpRemainingTime(): number;
        get centerX(): number;
        get centerZ(): number;
    }
}
