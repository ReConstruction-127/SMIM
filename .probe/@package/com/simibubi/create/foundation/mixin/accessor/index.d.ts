import { $Level, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $EntityRenderer } from "@package/net/minecraft/client/renderer/entity";
import { $ShapedRecipePattern } from "@package/net/minecraft/world/item/crafting";
import { $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState } from "@package/net/minecraft/world/level/material";
import { $ModelPart } from "@package/net/minecraft/client/model/geom";
import { $SubtitleOverlay } from "@package/net/minecraft/client/gui/components";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance } from "@package/net/minecraft/world/effect";
import { $FallingBlockEntity } from "@package/net/minecraft/world/entity/item";
import { $VoxelShape, $CollisionContext } from "@package/net/minecraft/world/phys/shapes";
import { $List, $Map_, $Map } from "@package/java/util";
import { $Frustum } from "@package/net/minecraft/client/renderer/culling";
import { $Function } from "@package/java/util/function";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $PotionBrewing$Mix, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $LootItemCondition$Builder, $LootItemCondition$Builder_ } from "@package/net/minecraft/world/level/storage/loot/predicates";
import { $FontSet } from "@package/net/minecraft/client/gui/font";
import { $Iterable } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $EntityTickList } from "@package/net/minecraft/world/level/entity";

declare module "@package/com/simibubi/create/foundation/mixin/accessor" {
    export class $FlowingFluidAccessor {
    }
    export interface $FlowingFluidAccessor {
        create$getNewLiquid(arg0: $Level_, arg1: $BlockPos_, arg2: $BlockState_): $FluidState;
    }
    /**
     * Values that may be interpreted as {@link $FlowingFluidAccessor}.
     */
    export type $FlowingFluidAccessor_ = ((arg0: $Level, arg1: $BlockPos, arg2: $BlockState) => $FluidState);
    export class $FallingBlockEntityAccessor {
        static create$callInit(arg0: $Level_, arg1: number, arg2: number, arg3: number, arg4: $BlockState_): $FallingBlockEntity;
    }
    export interface $FallingBlockEntityAccessor {
    }
    export class $LivingEntityAccessor {
    }
    export interface $LivingEntityAccessor {
        create$callSpawnItemParticles(arg0: $ItemStack_, arg1: number): void;
    }
    /**
     * Values that may be interpreted as {@link $LivingEntityAccessor}.
     */
    export type $LivingEntityAccessor_ = ((arg0: $ItemStack, arg1: number) => void);
    export class $ShapedRecipeAccessor {
    }
    export interface $ShapedRecipeAccessor {
        create$getPattern(): $ShapedRecipePattern;
    }
    /**
     * Values that may be interpreted as {@link $ShapedRecipeAccessor}.
     */
    export type $ShapedRecipeAccessor_ = (() => $ShapedRecipePattern);
    export class $StateHolderAccessor<O, S> {
    }
    export interface $StateHolderAccessor<O, S> {
        getOwner(): O;
        get owner(): O;
    }
    /**
     * Values that may be interpreted as {@link $StateHolderAccessor}.
     */
    export type $StateHolderAccessor_<O, S> = (() => O);
    export class $PotionBrewingAccessor {
    }
    export interface $PotionBrewingAccessor {
        create$isContainer(arg0: $ItemStack_): boolean;
        create$getPotionMixes(): $List<$PotionBrewing$Mix<$Potion>>;
        create$getContainerMixes(): $List<$PotionBrewing$Mix<$Item>>;
    }
    export class $SystemReportAccessor {
        static getOPERATING_SYSTEM(): string;
        static getJAVA_VERSION(): string;
        static get OPERATING_SYSTEM(): string;
        static get JAVA_VERSION(): string;
    }
    export interface $SystemReportAccessor {
        getEntries(): $Map<string, string>;
        get entries(): $Map<string, string>;
    }
    /**
     * Values that may be interpreted as {@link $SystemReportAccessor}.
     */
    export type $SystemReportAccessor_ = (() => $Map_<string, string>);
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        create$setYPos(arg0: number): void;
        create$setXPos(arg0: number): void;
    }
    export class $FontAccessor {
    }
    export interface $FontAccessor {
        create$getFonts(): $Function<$ResourceLocation, $FontSet>;
    }
    /**
     * Values that may be interpreted as {@link $FontAccessor}.
     */
    export type $FontAccessor_ = (() => $Function<$ResourceLocation, $FontSet>);
    export class $GuiAccessor {
    }
    export interface $GuiAccessor {
        create$getToolHighlightTimer(): number;
        create$renderTextureOverlay(arg0: $GuiGraphics, arg1: $ResourceLocation_, arg2: number): void;
        create$getSubtitleOverlay(): $SubtitleOverlay;
    }
    export class $ServerLevelAccessor {
    }
    export interface $ServerLevelAccessor {
        create$getEntityTickList(): $EntityTickList;
    }
    /**
     * Values that may be interpreted as {@link $ServerLevelAccessor}.
     */
    export type $ServerLevelAccessor_ = (() => $EntityTickList);
    export class $BlockBehaviourAccessor {
    }
    export interface $BlockBehaviourAccessor {
        create$getShape(arg0: $BlockState_, arg1: $BlockGetter, arg2: $BlockPos_, arg3: $CollisionContext): $VoxelShape;
    }
    /**
     * Values that may be interpreted as {@link $BlockBehaviourAccessor}.
     */
    export type $BlockBehaviourAccessor_ = ((arg0: $BlockState, arg1: $BlockGetter, arg2: $BlockPos, arg3: $CollisionContext) => $VoxelShape);
    export class $MinecartFurnaceAccessor {
    }
    export interface $MinecartFurnaceAccessor {
        create$setFuel(arg0: number): void;
        create$getFuel(): number;
    }
    export class $NbtAccounterAccessor {
    }
    export interface $NbtAccounterAccessor {
        create$getUsage(): number;
    }
    /**
     * Values that may be interpreted as {@link $NbtAccounterAccessor}.
     */
    export type $NbtAccounterAccessor_ = (() => number);
    export class $AgeableListModelAccessor {
    }
    export interface $AgeableListModelAccessor {
        create$callHeadParts(): $Iterable<$ModelPart>;
        create$callBodyParts(): $Iterable<$ModelPart>;
    }
    export class $MobEffectInstanceAccessor {
    }
    export interface $MobEffectInstanceAccessor {
        create$getHiddenEffect(): $MobEffectInstance;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectInstanceAccessor}.
     */
    export type $MobEffectInstanceAccessor_ = (() => $MobEffectInstance);
    export class $LevelRendererAccessor {
    }
    export interface $LevelRendererAccessor {
        create$getCapturedFrustum(): $Frustum;
        create$getCullingFrustum(): $Frustum;
    }
    export class $ItemFrameAccessor {
    }
    export interface $ItemFrameAccessor {
        create$getFrameItemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $ItemFrameAccessor}.
     */
    export type $ItemFrameAccessor_ = (() => $ItemStack_);
    export class $BlockLootSubProviderAccessor {
    }
    export interface $BlockLootSubProviderAccessor {
        create$hasSilkTouch(): $LootItemCondition$Builder;
    }
    /**
     * Values that may be interpreted as {@link $BlockLootSubProviderAccessor}.
     */
    export type $BlockLootSubProviderAccessor_ = (() => $LootItemCondition$Builder_);
    export class $UseOnContextAccessor {
    }
    export interface $UseOnContextAccessor {
        create$getHitResult(): $BlockHitResult;
    }
    /**
     * Values that may be interpreted as {@link $UseOnContextAccessor}.
     */
    export type $UseOnContextAccessor_ = (() => $BlockHitResult);
    export class $MinecraftAccessor {
    }
    export interface $MinecraftAccessor {
        create$setMissTime(arg0: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MinecraftAccessor}.
     */
    export type $MinecraftAccessor_ = ((arg0: number) => void);
    export class $EntityRenderDispatcherAccessor {
    }
    export interface $EntityRenderDispatcherAccessor {
        create$getRenderers(): $Map<$EntityType<never>, $EntityRenderer<never>>;
    }
    /**
     * Values that may be interpreted as {@link $EntityRenderDispatcherAccessor}.
     */
    export type $EntityRenderDispatcherAccessor_ = (() => $Map_<$EntityType_<never>, $EntityRenderer<never>>);
}
