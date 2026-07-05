import { $TreeConfiguration } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $EntityType_, $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $CallbackInfoReturnable } from "@package/org/spongepowered/asm/mixin/injection/callback";
import { $IClientBlockExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $VoxelShape } from "@package/net/minecraft/world/phys/shapes";
import { $Map, $Set, $List, $Collection_, $List_ } from "@package/java/util";
import { $StringRepresentable, $RandomSource } from "@package/net/minecraft/util";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Consumer_, $BiConsumer_ } from "@package/java/util/function";
import { $TriState } from "@package/net/neoforged/neoforge/common/util";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $ServerPlayer$RespawnPosAngle, $ServerLevel } from "@package/net/minecraft/server/level";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockPos, $BlockPos_, $Holder$Reference, $Holder, $Direction_, $Direction$Axis, $Direction, $IdMapper } from "@package/net/minecraft/core";
import { $IBlockExtension, $IBucketPickupExtension } from "@package/net/neoforged/neoforge/common/extensions";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $StateDefinition, $BlockState_, $BlockState, $BlockBehaviour$Properties, $BlockBehaviour } from "@package/net/minecraft/world/level/block/state";
import { $LiquidBlockAccessor } from "@package/dev/architectury/mixin/forge/neoforge";
import { $FenceGateBlockAccessor } from "@package/com/hlysine/create_connected/mixin/copycat/fencegate";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $BlockAndTintGetter, $Explosion, $LevelAccessor, $LevelReader, $BlockGetter, $SignalGetter, $ItemLike, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $Item_, $Item$TooltipContext, $TooltipFlag, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_, $FlowingFluid, $PushReaction, $MapColor } from "@package/net/minecraft/world/level/material";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Biome$Precipitation_ } from "@package/net/minecraft/world/level/biome";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $AttachFace, $WallSide, $WoodType, $Half, $IntegerProperty, $BooleanProperty, $WoodType_, $DoubleBlockHalf, $DirectionProperty, $BlockSetType, $SlabType, $BlockSetType_, $DoorHingeSide, $EnumProperty, $StairsShape } from "@package/net/minecraft/world/level/block/state/properties";
import { $BlockPlaceContext, $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $InjectedLiquidBlockExtension, $InjectedBlockExtension } from "@package/dev/architectury/extensions/injected";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $BlockKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $DimensionTransition, $DimensionTransition_ } from "@package/net/minecraft/world/level/portal";
import { $OctahedralGroup } from "@package/com/mojang/math";
import { $HitResult, $Vec3, $Vec3_, $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BubbleColumnDirection } from "@package/net/neoforged/neoforge/common/enums";
import { $SignBlockEntity, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
export * as state from "@package/net/minecraft/world/level/block/state";
export * as entity from "@package/net/minecraft/world/level/block/entity";
export * as piston from "@package/net/minecraft/world/level/block/piston";

declare module "@package/net/minecraft/world/level/block" {
    export class $SimpleWaterloggedBlock {
    }
    export interface $SimpleWaterloggedBlock extends $BucketPickup, $LiquidBlockContainer {
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        get pickupSound(): ($SoundEvent) | undefined;
    }
    export class $MultifaceSpreader$SpreadPos extends $Record {
        pos(): $BlockPos;
        face(): $Direction;
        constructor(arg0: $BlockPos_, arg1: $Direction_);
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadPos}.
     */
    export type $MultifaceSpreader$SpreadPos_ = { pos?: $BlockPos_, face?: $Direction_,  } | [pos?: $BlockPos_, face?: $Direction_, ];
    export class $SupportType extends $Enum<$SupportType> {
        static values(): $SupportType[];
        static valueOf(arg0: string): $SupportType;
        isSupporting(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, face: $Direction_): boolean;
        static CENTER: $SupportType;
        static FULL: $SupportType;
        static RIGID: $SupportType;
    }
    /**
     * Values that may be interpreted as {@link $SupportType}.
     */
    export type $SupportType_ = "full" | "center" | "rigid";
    export class $MultifaceSpreader$SpreadType extends $Enum<$MultifaceSpreader$SpreadType> {
        static values(): $MultifaceSpreader$SpreadType[];
        static valueOf(arg0: string): $MultifaceSpreader$SpreadType;
        getSpreadPos(pos: $BlockPos_, face: $Direction_, spreadDirection: $Direction_): $MultifaceSpreader$SpreadPos;
        static WRAP_AROUND: $MultifaceSpreader$SpreadType;
        static SAME_POSITION: $MultifaceSpreader$SpreadType;
        static SAME_PLANE: $MultifaceSpreader$SpreadType;
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadType}.
     */
    export type $MultifaceSpreader$SpreadType_ = "same_position" | "same_plane" | "wrap_around";
    export class $PressurePlateBlock extends $BasePressurePlateBlock {
        codec(): $MapCodec<$PressurePlateBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$PressurePlateBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $MultifaceBlock extends $Block {
        static unpack(packedDirections: number): $Set<$Direction>;
        static pack(directions: $Collection_<$Direction_>): number;
        static canAttachTo(level: $BlockGetter, direction: $Direction_, pos: $BlockPos_, state: $BlockState_): boolean;
        static getFaceProperty(direction: $Direction_): $BooleanProperty;
        static availableFaces(state: $BlockState_): $Set<$Direction>;
        getSpreader(): $MultifaceSpreader;
        isValidStateForPlacement(level: $BlockGetter, state: $BlockState_, pos: $BlockPos_, direction: $Direction_): boolean;
        getStateForPlacement(currentState: $BlockState_, level: $BlockGetter, pos: $BlockPos_, lookingDirection: $Direction_): $BlockState;
        static hasFace(state: $BlockState_, direction: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get spreader(): $MultifaceSpreader;
    }
    export class $FenceBlock extends $CrossCollisionBlock {
        codec(): $MapCodec<$FenceBlock>;
        connectsTo(state: $BlockState_, isSideSolid: boolean, direction: $Direction_): boolean;
        handler$zoi000$farmersdelight$denyConnectionToRopeFenceGate(arg0: $BlockState_, arg1: boolean, arg2: $Direction_, arg3: $CallbackInfoReturnable<any>): void;
        handler$zoi000$farmersdelight$denyConnectionToRopeFence(arg0: $BlockState_, arg1: $CallbackInfoReturnable<any>): void;
        handler$zlp000$create_connected$hasProperties(arg0: $CallbackInfoReturnable<any>): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FenceBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $StairBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$StairBlock>;
        static isStairs(state: $BlockState_): boolean;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StairBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static SHAPE: $EnumProperty<$StairsShape>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(baseState: $BlockState_, properties: $BlockBehaviour$Properties);
    }
    export class $SlabBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$SlabBlock>;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$SlabBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static TYPE: $EnumProperty<$SlabType>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $SculkSpreader {
        load(tag: $CompoundTag_): void;
        clear(): void;
        save(tag: $CompoundTag_): void;
        updateCursors(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, shouldConvertBlocks: boolean): void;
        additionalDecayRate(): number;
        addCursors(pos: $BlockPos_, charge: number): void;
        replaceableBlocks(): $TagKey<$Block>;
        chargeDecayRate(): number;
        noGrowthRadius(): number;
        isWorldGeneration(): boolean;
        growthSpawnCost(): number;
        static createWorldGenSpreader(): $SculkSpreader;
        getCursors(): $List<$SculkSpreader$ChargeCursor>;
        static createLevelSpreader(): $SculkSpreader;
        static MAX_DECAY_FACTOR: number;
        static SHRIEKER_PLACEMENT_RATE: number;
        static MAX_CHARGE: number;
        static MAX_GROWTH_RATE_RADIUS: number;
        constructor(isWorldGeneration: boolean, replaceableBlocks: $TagKey_<$Block>, growthSpawnCoat: number, noGrowthRadius: number, chargeDecayRate: number, additionalDecayRate: number);
        get worldGeneration(): boolean;
        get cursors(): $List<$SculkSpreader$ChargeCursor>;
    }
    export class $WallSignBlock extends $SignBlock {
        codec(): $MapCodec<$WallSignBlock>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $SoundType {
        getBreakSound(): $SoundEvent;
        getHitSound(): $SoundEvent;
        getPitch(): number;
        getVolume(): number;
        getFallSound(): $SoundEvent;
        getStepSound(): $SoundEvent;
        getPlaceSound(): $SoundEvent;
        static CANDLE: $SoundType;
        static MUD_BRICKS: $SoundType;
        static HANGING_ROOTS: $SoundType;
        static NYLIUM: $SoundType;
        static COPPER_GRATE: $SoundType;
        static NETHERITE_BLOCK: $SoundType;
        static PACKED_MUD: $SoundType;
        static MOSS_CARPET: $SoundType;
        static SMALL_AMETHYST_BUD: $SoundType;
        static ANVIL: $SoundType;
        static CHERRY_SAPLING: $SoundType;
        static ROOTS: $SoundType;
        static WART_BLOCK: $SoundType;
        static SCULK_VEIN: $SoundType;
        static WET_SPONGE: $SoundType;
        pitch: number;
        static LARGE_AMETHYST_BUD: $SoundType;
        static FUNGUS: $SoundType;
        static TUFF: $SoundType;
        static BAMBOO_SAPLING: $SoundType;
        static DEEPSLATE: $SoundType;
        static NETHER_GOLD_ORE: $SoundType;
        static TWISTING_VINES: $SoundType;
        static PINK_PETALS: $SoundType;
        static SLIME_BLOCK: $SoundType;
        static SCULK_SENSOR: $SoundType;
        static HONEY_BLOCK: $SoundType;
        static TUFF_BRICKS: $SoundType;
        static LILY_PAD: $SoundType;
        static AZALEA: $SoundType;
        static MEDIUM_AMETHYST_BUD: $SoundType;
        static SMALL_DRIPLEAF: $SoundType;
        static LADDER: $SoundType;
        static CHISELED_BOOKSHELF: $SoundType;
        static DECORATED_POT: $SoundType;
        static BASALT: $SoundType;
        static GILDED_BLACKSTONE: $SoundType;
        static POINTED_DRIPSTONE: $SoundType;
        static GLASS: $SoundType;
        static POLISHED_DEEPSLATE: $SoundType;
        static CHERRY_WOOD_HANGING_SIGN: $SoundType;
        static ROOTED_DIRT: $SoundType;
        static DEEPSLATE_BRICKS: $SoundType;
        static SOUL_SAND: $SoundType;
        static AMETHYST: $SoundType;
        static SCULK_CATALYST: $SoundType;
        static BAMBOO_WOOD: $SoundType;
        static CORAL_BLOCK: $SoundType;
        static SCULK_SHRIEKER: $SoundType;
        static SCAFFOLDING: $SoundType;
        static CHAIN: $SoundType;
        static TRIAL_SPAWNER: $SoundType;
        static SOUL_SOIL: $SoundType;
        static CALCITE: $SoundType;
        static VINE: $SoundType;
        static DRIPSTONE_BLOCK: $SoundType;
        static WOOD: $SoundType;
        static CHERRY_WOOD: $SoundType;
        static NETHER_SPROUTS: $SoundType;
        static SUSPICIOUS_SAND: $SoundType;
        static SUSPICIOUS_GRAVEL: $SoundType;
        static FROGLIGHT: $SoundType;
        static CROP: $SoundType;
        static DECORATED_POT_CRACKED: $SoundType;
        static NETHER_WOOD: $SoundType;
        static GRASS: $SoundType;
        static GLOW_LICHEN: $SoundType;
        static WOOL: $SoundType;
        static MUD: $SoundType;
        static SAND: $SoundType;
        static BAMBOO: $SoundType;
        static SNOW: $SoundType;
        static MOSS: $SoundType;
        static WEEPING_VINES: $SoundType;
        static CHERRY_LEAVES: $SoundType;
        static BONE_BLOCK: $SoundType;
        static SPORE_BLOSSOM: $SoundType;
        volume: number;
        static NETHER_WART: $SoundType;
        static FLOWERING_AZALEA: $SoundType;
        static DEEPSLATE_TILES: $SoundType;
        static METAL: $SoundType;
        static AZALEA_LEAVES: $SoundType;
        static SHROOMLIGHT: $SoundType;
        static NETHER_ORE: $SoundType;
        static HANGING_SIGN: $SoundType;
        static BAMBOO_WOOD_HANGING_SIGN: $SoundType;
        static AMETHYST_CLUSTER: $SoundType;
        static VAULT: $SoundType;
        static COPPER: $SoundType;
        static GRAVEL: $SoundType;
        static MANGROVE_ROOTS: $SoundType;
        static LANTERN: $SoundType;
        static COBWEB: $SoundType;
        static POWDER_SNOW: $SoundType;
        static ANCIENT_DEBRIS: $SoundType;
        static EMPTY: $SoundType;
        static NETHER_BRICKS: $SoundType;
        static MUDDY_MANGROVE_ROOTS: $SoundType;
        static BIG_DRIPLEAF: $SoundType;
        static HEAVY_CORE: $SoundType;
        static POLISHED_TUFF: $SoundType;
        static HARD_CROP: $SoundType;
        static LODESTONE: $SoundType;
        static STEM: $SoundType;
        static NETHER_WOOD_HANGING_SIGN: $SoundType;
        static CAVE_VINES: $SoundType;
        static NETHERRACK: $SoundType;
        static WET_GRASS: $SoundType;
        static SPONGE: $SoundType;
        static COPPER_BULB: $SoundType;
        static SCULK: $SoundType;
        static FROGSPAWN: $SoundType;
        static SWEET_BERRY_BUSH: $SoundType;
        static STONE: $SoundType;
        /**
         * @deprecated
         */
        constructor(volume: number, pitch: number, breakSound: $SoundEvent_, stepSound: $SoundEvent_, placeSound: $SoundEvent_, hitSound: $SoundEvent_, fallSound: $SoundEvent_);
        get breakSound(): $SoundEvent;
        get hitSound(): $SoundEvent;
        get fallSound(): $SoundEvent;
        get stepSound(): $SoundEvent;
        get placeSound(): $SoundEvent;
    }
    /**
     * Values that may be interpreted as {@link $SoundType}.
     */
    export type $SoundType_ = "empty" | "wood" | "gravel" | "grass" | "lily_pad" | "stone" | "metal" | "glass" | "wool" | "sand" | "snow" | "powder_snow" | "ladder" | "anvil" | "slime_block" | "honey_block" | "wet_grass" | "coral_block" | "bamboo" | "bamboo_sapling" | "scaffolding" | "sweet_berry_bush" | "crop" | "hard_crop" | "vine" | "nether_wart" | "lantern" | "stem" | "nylium" | "fungus" | "roots" | "shroomlight" | "weeping_vines" | "twisting_vines" | "soul_sand" | "soul_soil" | "basalt" | "wart_block" | "netherrack" | "nether_bricks" | "nether_sprouts" | "nether_ore" | "bone_block" | "netherite_block" | "ancient_debris" | "lodestone" | "chain" | "nether_gold_ore" | "gilded_blackstone" | "candle" | "amethyst" | "amethyst_cluster" | "small_amethyst_bud" | "medium_amethyst_bud" | "large_amethyst_bud" | "tuff" | "tuff_bricks" | "polished_tuff" | "calcite" | "dripstone_block" | "pointed_dripstone" | "copper" | "copper_bulb" | "copper_grate" | "cave_vines" | "spore_blossom" | "azalea" | "flowering_azalea" | "moss_carpet" | "pink_petals" | "moss" | "big_dripleaf" | "small_dripleaf" | "rooted_dirt" | "hanging_roots" | "azalea_leaves" | "sculk_sensor" | "sculk_catalyst" | "sculk" | "sculk_vein" | "sculk_shrieker" | "glow_lichen" | "deepslate" | "deepslate_bricks" | "deepslate_tiles" | "polished_deepslate" | "froglight" | "frogspawn" | "mangrove_roots" | "muddy_mangrove_roots" | "mud" | "mud_bricks" | "packed_mud" | "hanging_sign" | "nether_wood_hanging_sign" | "bamboo_wood_hanging_sign" | "bamboo_wood" | "nether_wood" | "cherry_wood" | "cherry_sapling" | "cherry_leaves" | "cherry_wood_hanging_sign" | "chiseled_bookshelf" | "suspicious_sand" | "suspicious_gravel" | "decorated_pot" | "decorated_pot_cracked" | "trial_spawner" | "sponge" | "wet_sponge" | "vault" | "heavy_core" | "cobweb";
    export interface $Block extends RegistryMarked<RegistryTypes.BlockTag, RegistryTypes.Block> {}
    export class $Portal$Transition extends $Enum<$Portal$Transition> {
        static values(): $Portal$Transition[];
        static valueOf(arg0: string): $Portal$Transition;
        static CONFUSION: $Portal$Transition;
        static NONE: $Portal$Transition;
    }
    /**
     * Values that may be interpreted as {@link $Portal$Transition}.
     */
    export type $Portal$Transition_ = "confusion" | "none";
    export class $Portal {
    }
    export interface $Portal {
        getLocalTransition(): $Portal$Transition;
        getPortalTransitionTime(level: $ServerLevel, entity: $Entity): number;
        getPortalDestination(level: $ServerLevel, entity: $Entity, pos: $BlockPos_): $DimensionTransition;
        get localTransition(): $Portal$Transition;
    }
    /**
     * Values that may be interpreted as {@link $Portal}.
     */
    export type $Portal_ = ((arg0: $ServerLevel, arg1: $Entity, arg2: $BlockPos) => $DimensionTransition_);
    export class $MultifaceSpreader$SpreadConfig {
    }
    export interface $MultifaceSpreader$SpreadConfig {
        placeBlock(level: $LevelAccessor, pos: $MultifaceSpreader$SpreadPos_, state: $BlockState_, markForPostprocessing: boolean): boolean;
        getStateForPlacement(currentState: $BlockState_, level: $BlockGetter, pos: $BlockPos_, lookingDirection: $Direction_): $BlockState;
        hasFace(state: $BlockState_, direction: $Direction_): boolean;
        isOtherBlockValidAsSource(otherBlock: $BlockState_): boolean;
        canSpreadInto(level: $BlockGetter, pos: $BlockPos_, spreadPos: $MultifaceSpreader$SpreadPos_): boolean;
        getSpreadTypes(): $MultifaceSpreader$SpreadType[];
        canSpreadFrom(state: $BlockState_, direction: $Direction_): boolean;
        get spreadTypes(): $MultifaceSpreader$SpreadType[];
    }
    export class $ButtonBlock extends $FaceAttachedHorizontalDirectionalBlock {
        codec(): $MapCodec<$ButtonBlock>;
        press(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player | null): void;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$ButtonBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        type: $BlockSetType;
        ticksToStayPressed: number;
        static UPDATE_INVISIBLE: number;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
        constructor(type: $BlockSetType_, ticksToStayPressed: number, properties: $BlockBehaviour$Properties);
    }
    export class $DoorBlock extends $Block {
        type(): $BlockSetType;
        isOpen(state: $BlockState_): boolean;
        codec(): $MapCodec<$DoorBlock>;
        setOpen(entity: $Entity | null, level: $Level_, state: $BlockState_, pos: $BlockPos_, open: boolean): void;
        static isWoodenDoor(level: $Level_, pos: $BlockPos_): boolean;
        static isWoodenDoor(state: $BlockState_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$DoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$DoubleBlockHalf>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static HINGE: $EnumProperty<$DoorHingeSide>;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $Block extends $BlockBehaviour implements $ItemLike, $IBlockExtension, $InjectedBlockExtension, $BlockKJS {
        getName(): $MutableComponent;
        static getId(state: $BlockState_ | null): number;
        /**
         * Called after this block has been removed by a player.
         */
        destroy(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): void;
        static box(x1: number, arg1: number, y1: number, arg3: number, z1: number, arg5: number): $VoxelShape;
        getStateDefinition(): $StateDefinition<$Block, $BlockState>;
        /**
         * @return the description ID of this block, for use with language files.
         */
        getDescriptionId(): string;
        /**
         * Called periodically clientside on blocks near the player to show effects (like furnace fire particles).
         */
        animateTick(state: $BlockState_, level: $Level_, pos: $BlockPos_, random: $RandomSource): void;
        /**
         * @deprecated
         */
        getCloneItemStack(level: $LevelReader, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        fallOn(level: $Level_, state: $BlockState_, pos: $BlockPos_, entity: $Entity, fallDistance: number): void;
        static byItem(item: $Item_ | null): $Block;
        static stateById(id: number): $BlockState;
        stepOn(level: $Level_, pos: $BlockPos_, state: $BlockState_, entity: $Entity): void;
        static getDrops(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, blockEntity: $BlockEntity | null, entity: $Entity | null, tool: $ItemStack_): $List<$ItemStack>;
        static getDrops(state: $BlockState_, level: $ServerLevel, pos: $BlockPos_, blockEntity: $BlockEntity | null): $List<$ItemStack>;
        static isFaceFull(shape: $VoxelShape, face: $Direction_): boolean;
        handler$bep000$ftbultimine$onPlayerWillDestroy(level: $Level_, blockPos: $BlockPos_, blockState: $BlockState_, player: $Player, cir: $CallbackInfoReturnable<any>): void;
        /**
         * @deprecated
         */
        builtInRegistryHolder(): $Holder$Reference<$Block>;
        getStateForPlacement(context: $BlockPlaceContext): $BlockState;
        /**
         * @return whether the given position has a rigid top face
         */
        static canSupportRigidBlock(level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Called when an Entity lands on this Block.
         * This method is responsible for doing any modification on the motion of the entity that should result from the landing.
         */
        updateEntityAfterFallOn(level: $BlockGetter, entity: $Entity): void;
        handlePrecipitation(state: $BlockState_, level: $Level_, pos: $BlockPos_, precipitation: $Biome$Precipitation_): void;
        isPossibleToRespawnInThis(state: $BlockState_): boolean;
        /**
         * @deprecated
         * @return how much this block resists an explosion
         */
        getExplosionResistance(): number;
        /**
         * With the provided block state, performs neighbor checks for all neighboring blocks to get an "adjusted" blockstate for placement in the world, if the current state is not valid.
         */
        static updateFromNeighbourShapes(currentState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $BlockState;
        static popResourceFromFace(level: $Level_, pos: $BlockPos_, direction: $Direction_, stack: $ItemStack_): void;
        static isExceptionForConnection(state: $BlockState_): boolean;
        getBlockBuilder(): $BlockBuilder;
        setBlockBuilder(b: $BlockBuilder): void;
        /**
         * @return how much this block resists an explosion
         */
        getFriction(): number;
        /**
         * Spawns the given amount of experience into the Level as experience orb entities.
         */
        popExperience(level: $ServerLevel, pos: $BlockPos_, amount: number): void;
        static pushEntitiesUp(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_): $BlockState;
        static updateOrDestroy(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, flags: number, recursionLeft: number): void;
        /**
         * Replaces oldState with newState, possibly playing effects and creating drops. Flags are as in `BlockState, int)`.
         */
        static updateOrDestroy(oldState: $BlockState_, newState: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, flags: number): void;
        /**
         * Called when this Block is destroyed by an Explosion
         */
        wasExploded(level: $Level_, pos: $BlockPos_, explosion: $Explosion): void;
        /**
         * @return how much this block resists an explosion
         */
        getSpeedFactor(): number;
        /**
         * @return whether the provided `VoxelShape` is a full block (1x1x1)
         */
        static isShapeFullBlock(shape: $VoxelShape): boolean;
        static dropResources(state: $BlockState_, level: $Level_, pos: $BlockPos_, blockEntity: $BlockEntity | null, entity: $Entity | null, tool: $ItemStack_): void;
        static dropResources(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, blockEntity: $BlockEntity | null): void;
        static dropResources(state: $BlockState_, level: $Level_, pos: $BlockPos_): void;
        /**
         * Called after a player has successfully harvested this block. This method will only be called if the player has used the correct tool and drops should be spawned.
         */
        playerDestroy(level: $Level_, player: $Player, pos: $BlockPos_, state: $BlockState_, blockEntity: $BlockEntity | null, tool: $ItemStack_): void;
        /**
         * @return whether the given position has a solid center in the given direction
         */
        static canSupportCenter(level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        static shouldRenderFace(state: $BlockState_, level: $BlockGetter, offset: $BlockPos_, face: $Direction_, pos: $BlockPos_): boolean;
        static popResource(itemStack: $Level_, arg1: $BlockPos_, arg2: $ItemStack_): void;
        /**
         * Called by BlockItem after this block has been placed.
         */
        setPlacedBy(level: $Level_, pos: $BlockPos_, state: $BlockState_, placer: $LivingEntity | null, stack: $ItemStack_): void;
        setNameKey(arg0: string): void;
        playerWillDestroy(level: $Level_, pos: $BlockPos_, state: $BlockState_, player: $Player): $BlockState;
        /**
         * @deprecated
         * @return whether this block should drop its drops when destroyed by the given explosion
         */
        dropFromExplosion(explosion: $Explosion): boolean;
        withPropertiesOf(state: $BlockState_): $BlockState;
        /**
         * @return how much this block resists an explosion
         */
        getJumpFactor(): number;
        hasDynamicShape(): boolean;
        appendHoverText(stack: $ItemStack_, context: $Item$TooltipContext, tooltipComponents: $List_<$Component_>, tooltipFlag: $TooltipFlag): void;
        /**
         * @deprecated
         */
        initializeClient(arg0: $Consumer_<$IClientBlockExtensions>): void;
        /**
         * Gets the default state for this block
         */
        defaultBlockState(): $BlockState;
        isEmpty(state: $BlockState_): boolean;
        rotate(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, direction: $Rotation_): $BlockState;
        /**
         * Called when A user uses the creative pick block button on this block
         */
        getCloneItemStack(state: $BlockState_, target: $HitResult, level: $LevelReader, pos: $BlockPos_, player: $Player): $ItemStack;
        isBurning(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns how many experience points this block drops when broken, before application of enchantments.
         */
        getExpDrop(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, blockEntity: $BlockEntity, breaker: $Entity, tool: $ItemStack_): number;
        /**
         * Determines if this block can stick to another block when pushed by a piston.
         */
        canStickTo(state: $BlockState_, other: $BlockState_): boolean;
        /**
         * Checks if a player or entity handles movement on this block like scaffolding.
         */
        isLadder(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * Called when a tree grows on top of this block and tries to set it to dirt by the trunk placer.
         * An override that returns true is responsible for using the place function to
         * set blocks in the world properly during generation. A modded grass block might override this method
         * to ensure it turns into the corresponding modded dirt instead of regular dirt when a tree grows on it.
         * For modded grass blocks, returning true from this method is NOT a substitute for adding your block
         * to the #minecraft:dirt tag, rather for changing the behaviour to something other than setting to dirt.
         * 
         * NOTE: This happens DURING world generation, the generation may be incomplete when this is called.
         * Use the placeFunction when modifying the level.
         */
        onTreeGrow(state: $BlockState_, level: $LevelReader, placeFunction: $BiConsumer_<$BlockPos, $BlockState>, randomSource: $RandomSource, pos: $BlockPos_, config: $TreeConfiguration): boolean;
        isFertile(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Determines if this block is classified as a bed, replacing `instanceof BedBlock` checks.
         * 
         * If true, players may sleep in it, though the block must manually put the player to sleep
         * by calling `Player#startSleepInBed` from `BlockBehaviour#useWithoutItem` or similar.
         * 
         * If you want players to be able to respawn at your bed, you also need to override `#getRespawnPosition`.
         */
        isBed(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, sleeper: $LivingEntity): boolean;
        /**
         * Gets the path type of the adjacent block to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Used to determine the state 'viewed' by an entity (see
         * `Camera#getBlockAtCamera()`).
         * Can be used by fluid blocks to determine if the viewpoint is within the fluid or not.
         */
        getStateAtViewpoint(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, viewpoint: $Vec3_): $BlockState;
        /**
         * Returns the reaction of the block when pushed or pulled by a piston. This method should be not called directly, instead via `BlockState#getPistonPushReaction()`.
         * 
         * - NORMAL: is pushable and pullable by sticky pistons
         * - DESTROY: is being destroyed on pushing and pulling
         * - BLOCK: is not being able to be moved
         * - IGNORE: only usable by entities
         * - PUSH_ONLY: can only be pushed, blocks on trying to be pulled
         * - `null`: use the PistonPushReaction from the BlockBehaviour.Properties passed into the Block Constructor
         */
        getPistonPushReaction(state: $BlockState_): $PushReaction;
        /**
         * Called to determine whether to allow the block to handle its own indirect power rather than using the default rules.
         */
        shouldCheckWeakPower(state: $BlockState_, level: $SignalGetter, pos: $BlockPos_, side: $Direction_): boolean;
        /**
         * Determines if this block's collision box should be treated as though it can extend above its block space.
         * Use this to replicate fence and wall behavior.
         */
        collisionExtendsVertically(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, collidingEntity: $Entity): boolean;
        /**
         * Determines the amount of enchanting power this block can provide to an enchanting table.
         */
        getEnchantPowerBonus(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): number;
        /**
         * Determines if this block can spawn Bubble Columns and if so, what direction the column flows.
         * 
         * NOTE: The block itself will still need to call `BubbleColumnBlock#updateColumn(LevelAccessor, BlockPos, BlockState)` in their tick method and schedule a block tick in the block's onPlace.
         * Also, schedule a fluid tick in updateShape method if update direction is up. Both are needed in order to get the Bubble Columns to function properly. See `SoulSandBlock` and `MagmaBlock` for example.
         */
        getBubbleColumnDirection(state: $BlockState_): $BubbleColumnDirection;
        /**
         * Location sensitive version of getExplosionResistance
         */
        getExplosionResistance(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): number;
        /**
         * Determines if this block should drop loot when exploded.
         */
        canDropFromExplosion(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, explosion: $Explosion): boolean;
        hasDynamicLightEmission(state: $BlockState_): boolean;
        /**
         * Called when a player removes a block. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * This is called regardless of whether the player can harvest the block or
         * not.
         * 
         * Return true if the block is actually destroyed.
         * 
         * This function is called on both the logical client and logical server.
         */
        onDestroyedByPlayer(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, willHarvest: boolean, fluid: $FluidState): boolean;
        /**
         * Called when a block is removed by `PushReaction#DESTROY`. This is responsible for
         * actually destroying the block, and the block is intact at time of call.
         * 
         * Will only be called if `BlockState#getPistonPushReaction` returns `PushReaction#DESTROY`.
         * 
         * Note: When used in multiplayer, this is called on both client and
         * server sides!
         */
        onDestroyedByPushReaction(state: $BlockState_, level: $Level_, pos: $BlockPos_, pushDirection: $Direction_, fluid: $FluidState): void;
        supportsExternalFaceHiding(state: $BlockState_): boolean;
        getBeaconColorMultiplier(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, beaconPos: $BlockPos_): number;
        /**
         * Called to determine whether this block should use the fluid overlay texture or flowing texture when it is placed under the fluid.
         */
        shouldDisplayFluidOverlay(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, fluidState: $FluidState): boolean;
        /**
         * Returns the state that this block should transform into when right-clicked by a tool.
         * For example: Used to determine if an axe can strip,
         * a shovel can path, or a hoe can till.
         * Returns `null` if nothing should happen.
         */
        getToolModifiedState(state: $BlockState_, context: $UseOnContext, itemAbility: $ItemAbility_, simulate: boolean): $BlockState;
        /**
         * Determines if a fluid adjacent to the block on the given side should not be rendered.
         */
        shouldHideAdjacentFluidFace(state: $BlockState_, selfFace: $Direction_, adjacentFluid: $FluidState): boolean;
        /**
         * Checks if this block makes an open trapdoor above it climbable.
         */
        makesOpenTrapdoorAboveClimbable(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, trapdoorState: $BlockState_): boolean;
        /**
         * Gets the path type of this block when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, mob: $Mob): $PathType;
        /**
         * Gets the slipperiness at the given location at the given state. Normally
         * between 0 and 1.
         * 
         * Note that entities may reduce slipperiness by a certain factor of their own;
         * for `LivingEntity`, this is `.91`.
         * `ItemEntity` uses `.98`, and
         * `FishingHook` uses `.92`.
         */
        getFriction(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity): number;
        /**
         * Whether this block hides the neighbors face pointed towards by the given direction.
         * 
         * This method should only be used for blocks you don't control, for your own blocks override
         * `Block#skipRendering(BlockState, BlockState, Direction)` on the respective block instead
         * 
         * **Note that this method may be called on any of the client's meshing threads.**
         * 
         * As such, if you need any data from your `BlockEntity`, you should put it in `ModelData` to guarantee
         * safe concurrent access to it on the client.
         * 
         * `IBlockGetterExtension#getModelData(BlockPos)` will return the `ModelData` for the queried block,
         * or `ModelData#EMPTY` if none is present.
         */
        hidesNeighborFace(level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, neighborState: $BlockState_, dir: $Direction_): boolean;
        getLightEmission(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): number;
        /**
         * Allows a block to override the standard vanilla running particles.
         * This is called from Entity.spawnSprintParticle and is called both,
         * Client and server side, it's up to the implementor to client check / server check.
         * By default vanilla spawns particles only on the client and the server methods no-op.
         */
        addRunningEffects(state: $BlockState_, level: $Level_, pos: $BlockPos_, entity: $Entity): boolean;
        isStickyBlock(state: $BlockState_): boolean;
        /**
         * Determines if this block either force allow or force disallow a plant from being placed on it. (Or pass and let the plant's decision win)
         * This will be called in plant's canSurvive method and/or mayPlace method.
         */
        canSustainPlant(state: $BlockState_, level: $BlockGetter, soilPosition: $BlockPos_, facing: $Direction_, plant: $BlockState_): $TriState;
        /**
         * Determines if this block can be used as the frame of a conduit.
         */
        isConduitFrame(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, conduit: $BlockPos_): boolean;
        /**
         * Sensitive version of getSoundType
         */
        getSoundType(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $Entity): $SoundType;
        /**
         * Returns the position that the entity is moved to upon respawning at this block.
         */
        getRespawnPosition(state: $BlockState_, type: $EntityType_<never>, levelReader: $LevelReader, pos: $BlockPos_, orientation: number): ($ServerPlayer$RespawnPosAngle) | undefined;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        ignitedByLava(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Called when a block entity on a side of this block changes, is created, or is destroyed.
         * 
         * This method is not suitable for listening to capability invalidations.
         * For capability invalidations specifically, use `BlockCapabilityCache` instead.
         */
        onNeighborChange(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, neighbor: $BlockPos_): void;
        /**
         * Returns the direction of the block. Same values that
         * are returned by BlockDirectional. Called every frame tick for every living entity. Be VERY fast.
         */
        getBedDirection(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): $Direction;
        /**
         * Allows a block to override the standard EntityLivingBase.updateFallState
         * particles, this is a server side method that spawns particles with
         * WorldServer.spawnParticle.
         */
        addLandingEffects(state1: $BlockState_, level: $ServerLevel, pos: $BlockPos_, state2: $BlockState_, entity: $LivingEntity, numberOfParticles: number): boolean;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getFlammability(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Determines if the player can harvest this block, obtaining it's drops when the block is destroyed.
         */
        canHarvestBlock(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, player: $Player): boolean;
        /**
         * Called when a user either starts or stops sleeping in the bed.
         */
        setBedOccupied(state: $BlockState_, level: $Level_, pos: $BlockPos_, sleeper: $LivingEntity, occupied: boolean): void;
        isPortalFrame(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Checks if a player or entity handles movement on this block like scaffolding.
         */
        isScaffolding(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, entity: $LivingEntity): boolean;
        /**
         * Returns the `BlockState` that this block reports to look like on the given side, for querying by other mods.
         * Note: Overriding this does not change how this block renders. That must still be handled in the block's model.
         * 
         * Common implementors would be covers and facades, or any other mimic blocks that proxy another block's model.
         * Common consumers would be models with connected textures that wish to seamlessly connect to mimic blocks.
         * 
         * **Note that this method may be called on the server, or on any of the client's meshing threads.**
         * 
         * As such, if you need any data from your `BlockEntity`, you should put it in `ModelData` to guarantee
         * safe concurrent access to it on the client.
         * 
         * Calling `ILevelExtension#getModelDataManager()` will return `null` if in a server context, where it is
         * safe to query your `BlockEntity` directly. Otherwise, `IBlockGetterExtension#getModelData(BlockPos)` will return
         * the `ModelData` for the queried block, or `ModelData#EMPTY` if none is present.
         */
        getAppearance(state: $BlockState_, level: $BlockAndTintGetter, pos: $BlockPos_, side: $Direction_, queryState: $BlockState_, queryPos: $BlockPos_): $BlockState;
        /**
         * Returns the direct signal this block emits in the given direction.
         * 
         * NOTE: directions in redstone signal related methods are backwards, so this method
         * checks for the signal emitted in the *opposite* direction of the one given.
         */
        getFireSpreadSpeed(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): number;
        /**
         * Called when the block is destroyed by an explosion.
         * Useful for allowing the block to take into account tile entities,
         * state, etc. when exploded, before it is removed.
         */
        onBlockExploded(state: $BlockState_, level: $Level_, pos: $BlockPos_, explosion: $Explosion): void;
        /**
         * If the block is flammable, this is called when it gets lit on fire.
         */
        onCaughtFire(state: $BlockState_, level: $Level_, pos: $BlockPos_, direction: $Direction_, igniter: $LivingEntity): void;
        /**
         * Returns the `MapColor` shown on the map.
         */
        getMapColor(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, defaultColor: $MapColor): $MapColor;
        /**
         * Currently only called by fire when it is on top of this block.
         * Returning true will prevent the fire from naturally dying during updating.
         * Also prevents firing from dying from rain.
         */
        isFireSource(state: $BlockState_, level: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        /**
         * Called after the `BlockState` at the given `BlockPos` was changed and neighbors were updated.
         * This method is called on the server and client side.
         * Modifying the level is disallowed in this method.
         * Useful for calculating additional data based on the new state and the neighbor's reactions to the state change.
         */
        onBlockStateChange(level: $LevelReader, pos: $BlockPos_, oldState: $BlockState_, newState: $BlockState_): void;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canBeHydrated(state: $BlockState_, getter: $BlockGetter, pos: $BlockPos_, fluid: $FluidState, fluidPos: $BlockPos_): boolean;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        isFlammable(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        getWeakChanges(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * Called when fire is updating, checks if a block face can catch fire.
         */
        canConnectRedstone(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, direction: $Direction_): boolean;
        isSlimeBlock(state: $BlockState_): boolean;
        /**
         * Determines if this block's collision box should be treated as though it can extend above its block space.
         * Use this to replicate fence and wall behavior.
         */
        canEntityDestroy(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, collidingEntity: $Entity): boolean;
        arch$holder(): $Holder<$Block>;
        setDestroySpeed(v: number): void;
        setLightEmission(v: number): void;
        setRequiresTool(v: boolean): void;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        getBlockStates(): $List<$BlockState>;
        arch$registryName(): $ResourceLocation;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
        get name(): $MutableComponent;
        get stateDefinition(): $StateDefinition<$Block, $BlockState>;
        get descriptionId(): string;
        get speedFactor(): number;
        set nameKey(value: string);
        get jumpFactor(): number;
        set destroySpeed(value: number);
        set requiresTool(value: boolean);
        get blockStates(): $List<$BlockState>;
    }
    /**
     * Values that may be interpreted as {@link $Block}.
     */
    export type $Block_ = RegistryTypes.Block;
    export class $SignBlock extends $BaseEntityBlock implements $SimpleWaterloggedBlock {
        type(): $WoodType;
        static getWoodType(block: $Block_): $WoodType;
        getYRotationDegrees(state: $BlockState_): number;
        getSignHitboxCenterPosition(state: $BlockState_): $Vec3;
        openTextEdit(player: $Player, signEntity: $SignBlockEntity, isFrontText: boolean): void;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $RenderShape extends $Enum<$RenderShape> {
        static values(): $RenderShape[];
        static valueOf(arg0: string): $RenderShape;
        static INVISIBLE: $RenderShape;
        static MODEL: $RenderShape;
        static ENTITYBLOCK_ANIMATED: $RenderShape;
    }
    /**
     * Values that may be interpreted as {@link $RenderShape}.
     */
    export type $RenderShape_ = "invisible" | "entityblock_animated" | "model";
    export class $FenceGateBlock extends $HorizontalDirectionalBlock implements $FenceGateBlockAccessor {
        codec(): $MapCodec<$FenceGateBlock>;
        static connectsToDirection(state: $BlockState_, direction: $Direction_): boolean;
        callUseWithoutItem(state: $BlockState_, level: $Level_, pos: $BlockPos_, player: $Player, hitResult: $BlockHitResult): $InteractionResult;
        static IN_WALL: $BooleanProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$FenceGateBlock>;
        closeSound: $SoundEvent;
        openSound: $SoundEvent;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(arg0: ($WoodType_) | undefined, arg1: $BlockBehaviour$Properties, arg2: ($SoundEvent_) | undefined, arg3: ($SoundEvent_) | undefined);
        constructor(arg0: $BlockBehaviour$Properties, arg1: $SoundEvent_, arg2: $SoundEvent_);
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $CeilingHangingSignBlock extends $SignBlock {
        codec(): $MapCodec<$CeilingHangingSignBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$CeilingHangingSignBlock>;
        static ATTACHED: $BooleanProperty;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $IronBarsBlock extends $CrossCollisionBlock {
        codec(): $MapCodec<$IronBarsBlock>;
        attachsTo(state: $BlockState_, solidSide: boolean): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$IronBarsBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $RotatedPillarBlock extends $Block {
        codec(): $MapCodec<$RotatedPillarBlock>;
        /**
         * Returns the blockstate with the given rotation from the passed blockstate. If inapplicable, returns the passed blockstate.
         */
        static rotatePillar(state: $BlockState_, rot: $Rotation_): $BlockState;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$RotatedPillarBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static AXIS: $EnumProperty<$Direction$Axis>;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $LiquidBlock extends $Block implements $BucketPickup, $LiquidBlockAccessor, $InjectedLiquidBlockExtension {
        codec(): $MapCodec<$LiquidBlock>;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        arch$getFluid(): $FlowingFluid;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        getFluid(): $FlowingFluid;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$LiquidBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static LEVEL: $IntegerProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static POSSIBLE_FLOW_DIRECTIONS: $ImmutableList<$Direction>;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static STABLE_SHAPE: $VoxelShape;
        fluid: $FlowingFluid;
        static UPDATE_CLIENTS: number;
        constructor(fluid: $FlowingFluid, properties: $BlockBehaviour$Properties);
    }
    export class $WallBlock extends $Block implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$WallBlock>;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static SOUTH_WALL: $EnumProperty<$WallSide>;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST_WALL: $EnumProperty<$WallSide>;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static NORTH_WALL: $EnumProperty<$WallSide>;
        static UPDATE_MOVE_BY_PISTON: number;
        static EAST_WALL: $EnumProperty<$WallSide>;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UP: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        constructor(properties: $BlockBehaviour$Properties);
    }
    export class $FaceAttachedHorizontalDirectionalBlock extends $HorizontalDirectionalBlock {
        static canAttach(reader: $LevelReader, pos: $BlockPos_, direction: $Direction_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static FACE: $EnumProperty<$AttachFace>;
    }
    export class $SkullBlock$Type {
        static TYPES: $Map<string, $SkullBlock$Type>;
        static CODEC: $Codec<$SkullBlock$Type>;
    }
    export interface $SkullBlock$Type extends $StringRepresentable {
    }
    /**
     * Values that may be interpreted as {@link $SkullBlock$Type}.
     */
    export type $SkullBlock$Type_ = (() => void);
    export class $MultifaceSpreader {
        spreadFromFaceTowardRandomDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, spreadDirection: $Direction_, random: $RandomSource, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        spreadFromRandomFaceTowardRandomDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource): ($MultifaceSpreader$SpreadPos) | undefined;
        spreadFromFaceTowardDirection(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, spreadDirection: $Direction_, face: $Direction_, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        getSpreadFromFaceTowardDirection(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, spreadDirection: $Direction_, face: $Direction_, predicate: $MultifaceSpreader$SpreadPredicate_): ($MultifaceSpreader$SpreadPos) | undefined;
        canSpreadInAnyDirection(state: $BlockState_, level: $BlockGetter, pos: $BlockPos_, spreadDirection: $Direction_): boolean;
        spreadAll(state: $BlockState_, level: $LevelAccessor, pos: $BlockPos_, markForPostprocessing: boolean): number;
        spreadToFace(level: $LevelAccessor, pos: $MultifaceSpreader$SpreadPos_, markForPostprocessing: boolean): ($MultifaceSpreader$SpreadPos) | undefined;
        static DEFAULT_SPREAD_ORDER: $MultifaceSpreader$SpreadType[];
        constructor(block: $MultifaceBlock);
        constructor(config: $MultifaceSpreader$SpreadConfig);
    }
    export class $MultifaceSpreader$SpreadPredicate {
    }
    export interface $MultifaceSpreader$SpreadPredicate {
        test(level: $BlockGetter, pos: $BlockPos_, spreadPos: $MultifaceSpreader$SpreadPos_): boolean;
    }
    /**
     * Values that may be interpreted as {@link $MultifaceSpreader$SpreadPredicate}.
     */
    export type $MultifaceSpreader$SpreadPredicate_ = ((arg0: $BlockGetter, arg1: $BlockPos, arg2: $MultifaceSpreader$SpreadPos) => boolean);
    export class $BasePressurePlateBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
    }
    export class $Mirror extends $Enum<$Mirror> implements $StringRepresentable {
        static values(): $Mirror[];
        static valueOf(arg0: string): $Mirror;
        symbol(): $Component;
        /**
         * Mirror the given facing according to this mirror
         */
        mirror(facing: $Direction_): $Direction;
        /**
         * Mirrors the given rotation like specified by this mirror. Rotations start at 0 and go up to rotationCount-1. 0 is front, rotationCount/2 is back.
         */
        mirror(rotation: number, rotationCount: number): number;
        /**
         * Determines the rotation that is equivalent to this mirror if the rotating object faces in the given direction
         */
        getRotation(facing: $Direction_): $Rotation;
        getSerializedName(): string;
        rotation(): $OctahedralGroup;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$Mirror>;
        static FRONT_BACK: $Mirror;
        static LEFT_RIGHT: $Mirror;
        static NONE: $Mirror;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Mirror}.
     */
    export type $Mirror_ = "none" | "left_right" | "front_back";
    export class $Blocks {
        static register(resourceKey: $ResourceKey_<$Block>, block: $Block_): $Block;
        static register(key: string, block: $Block_): $Block;
        static always(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_): boolean;
        static always(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static ocelotOrParrot(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static rebuildCache(): void;
        static never(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_, entity: $EntityType_<never>): boolean;
        static never(state: $BlockState_, blockGetter: $BlockGetter, pos: $BlockPos_): boolean;
        static GREEN_CONCRETE_POWDER: $Block;
        static PIGLIN_HEAD: $Block;
        static TUBE_CORAL_WALL_FAN: $Block;
        static PURPLE_CARPET: $Block;
        static SMALL_AMETHYST_BUD: $Block;
        static DEAD_TUBE_CORAL: $Block;
        static JUNGLE_PRESSURE_PLATE: $Block;
        static GREEN_GLAZED_TERRACOTTA: $Block;
        static EXPOSED_CUT_COPPER: $Block;
        static WATER_CAULDRON: $Block;
        static POTTED_AZALEA: $Block;
        static TRAPPED_CHEST: $Block;
        static STONE_BRICK_STAIRS: $Block;
        static SANDSTONE_WALL: $Block;
        static WATER: $Block;
        static MELON_STEM: $Block;
        static OAK_WOOD: $Block;
        static WHITE_TULIP: $Block;
        static GRAY_STAINED_GLASS: $Block;
        static BLUE_ORCHID: $Block;
        static SPRUCE_DOOR: $Block;
        static STRIPPED_BIRCH_LOG: $Block;
        static LIGHT_BLUE_TERRACOTTA: $Block;
        static ZOMBIE_HEAD: $Block;
        static BROWN_WOOL: $Block;
        static GRANITE_WALL: $Block;
        static SHORT_GRASS: $Block;
        static ORANGE_SHULKER_BOX: $Block;
        static GREEN_CANDLE: $Block;
        static CRACKED_STONE_BRICKS: $Block;
        static BRICK_SLAB: $Block;
        static CYAN_CANDLE_CAKE: $Block;
        static BLUE_CANDLE: $Block;
        static LAPIS_BLOCK: $Block;
        static PURPLE_BED: $Block;
        static JUNGLE_SLAB: $Block;
        static END_STONE_BRICK_STAIRS: $Block;
        static JUNGLE_PLANKS: $Block;
        static TURTLE_EGG: $Block;
        static WHITE_CANDLE: $Block;
        static VERDANT_FROGLIGHT: $Block;
        static COBBLESTONE: $Block;
        static TUBE_CORAL: $Block;
        static GILDED_BLACKSTONE: $Block;
        static CYAN_STAINED_GLASS_PANE: $Block;
        static WAXED_COPPER_BULB: $Block;
        static SMOOTH_RED_SANDSTONE_SLAB: $Block;
        static CHISELED_SANDSTONE: $Block;
        static LIGHT_BLUE_SHULKER_BOX: $Block;
        static NETHER_BRICK_WALL: $Block;
        static RED_WOOL: $Block;
        static WAXED_WEATHERED_CUT_COPPER_STAIRS: $Block;
        static COMMAND_BLOCK: $Block;
        static ROOTED_DIRT: $Block;
        static PRISMARINE_STAIRS: $Block;
        static DEEPSLATE_TILE_STAIRS: $Block;
        static POLISHED_ANDESITE: $Block;
        static CRAFTING_TABLE: $Block;
        static CORNFLOWER: $Block;
        static SCULK_SHRIEKER: $Block;
        static RED_WALL_BANNER: $Block;
        static INFESTED_COBBLESTONE: $Block;
        static DIORITE: $Block;
        static LIGHT_BLUE_CONCRETE: $Block;
        static POLISHED_ANDESITE_SLAB: $Block;
        static POLISHED_BLACKSTONE_BUTTON: $Block;
        static SPRUCE_WALL_SIGN: $Block;
        static MOSSY_STONE_BRICK_WALL: $Block;
        static POLISHED_DEEPSLATE_WALL: $Block;
        static WARPED_SLAB: $Block;
        static STONE_BRICK_WALL: $Block;
        static DARK_OAK_WOOD: $Block;
        static JUNGLE_WALL_SIGN: $Block;
        static CRIMSON_HYPHAE: $Block;
        static WAXED_EXPOSED_CUT_COPPER_STAIRS: $Block;
        static JUKEBOX: $Block;
        static POTTED_RED_MUSHROOM: $Block;
        static DARK_OAK_BUTTON: $Block;
        static POTTED_ORANGE_TULIP: $Block;
        static CRACKED_DEEPSLATE_BRICKS: $Block;
        static CHERRY_PRESSURE_PLATE: $Block;
        static WARPED_STAIRS: $Block;
        static MANGROVE_PLANKS: $Block;
        static DEEPSLATE_TILE_WALL: $Block;
        static BLACK_CONCRETE_POWDER: $Block;
        static DARK_OAK_PRESSURE_PLATE: $Block;
        static STRIPPED_SPRUCE_WOOD: $Block;
        static MANGROVE_LOG: $Block;
        static OAK_BUTTON: $Block;
        static GRANITE: $Block;
        static SAND: $Block;
        static LIGHT: $Block;
        static OAK_WALL_SIGN: $Block;
        static BROWN_TERRACOTTA: $Block;
        static ORANGE_STAINED_GLASS_PANE: $Block;
        static REINFORCED_DEEPSLATE: $Block;
        static WHITE_WALL_BANNER: $Block;
        static NETHER_WART: $Block;
        static YELLOW_CARPET: $Block;
        static LILY_OF_THE_VALLEY: $Block;
        static DEEPSLATE_TILES: $Block;
        static HAY_BLOCK: $Block;
        static LECTERN: $Block;
        static RAW_COPPER_BLOCK: $Block;
        static CRIMSON_FENCE_GATE: $Block;
        static BLACK_STAINED_GLASS_PANE: $Block;
        static ALLIUM: $Block;
        static COBBLESTONE_STAIRS: $Block;
        static TUFF_BRICK_WALL: $Block;
        static CRYING_OBSIDIAN: $Block;
        static DETECTOR_RAIL: $Block;
        static SOUL_CAMPFIRE: $Block;
        static CUT_SANDSTONE_SLAB: $Block;
        static CREEPER_WALL_HEAD: $Block;
        static AMETHYST_CLUSTER: $Block;
        static PURPLE_STAINED_GLASS: $Block;
        static BROWN_CONCRETE_POWDER: $Block;
        static TUFF_STAIRS: $Block;
        static MANGROVE_ROOTS: $Block;
        static TERRACOTTA: $Block;
        static REDSTONE_WIRE: $Block;
        static YELLOW_WALL_BANNER: $Block;
        static END_STONE_BRICKS: $Block;
        static COARSE_DIRT: $Block;
        static LIGHT_GRAY_GLAZED_TERRACOTTA: $Block;
        static GLOWSTONE: $Block;
        static MANGROVE_HANGING_SIGN: $Block;
        static DIORITE_SLAB: $Block;
        static ANCIENT_DEBRIS: $Block;
        static WAXED_EXPOSED_COPPER_TRAPDOOR: $Block;
        static PINK_SHULKER_BOX: $Block;
        static CARROTS: $Block;
        static CRIMSON_DOOR: $Block;
        static GLASS_PANE: $Block;
        static POLISHED_TUFF: $Block;
        static DIAMOND_ORE: $Block;
        static CHIPPED_ANVIL: $Block;
        static DEEPSLATE_COPPER_ORE: $Block;
        static OAK_LEAVES: $Block;
        static CYAN_BANNER: $Block;
        static BAMBOO_STAIRS: $Block;
        static MAGENTA_BED: $Block;
        static WAXED_OXIDIZED_CUT_COPPER_SLAB: $Block;
        static SPONGE: $Block;
        static RED_BED: $Block;
        static SCULK: $Block;
        static POTTED_BROWN_MUSHROOM: $Block;
        static WARPED_WALL_SIGN: $Block;
        static MANGROVE_TRAPDOOR: $Block;
        static CANDLE: $Block;
        static STRIPPED_SPRUCE_LOG: $Block;
        static WAXED_EXPOSED_COPPER_DOOR: $Block;
        static COPPER_GRATE: $Block;
        static CHORUS_PLANT: $Block;
        static ANDESITE_STAIRS: $Block;
        static WAXED_WEATHERED_COPPER_BULB: $Block;
        static SPRUCE_WALL_HANGING_SIGN: $Block;
        static BRICKS: $Block;
        static PISTON_HEAD: $Block;
        static CRIMSON_WALL_SIGN: $Block;
        static RED_NETHER_BRICK_WALL: $Block;
        static WET_SPONGE: $Block;
        static STRUCTURE_BLOCK: $Block;
        static CHERRY_BUTTON: $Block;
        static RED_CARPET: $Block;
        static ENCHANTING_TABLE: $Block;
        static YELLOW_STAINED_GLASS: $Block;
        static SOUL_FIRE: $Block;
        static DEEPSLATE: $Block;
        static RED_BANNER: $Block;
        static BLUE_STAINED_GLASS_PANE: $Block;
        static SPRUCE_LOG: $Block;
        static COPPER_TRAPDOOR: $Block;
        static POTTED_RED_TULIP: $Block;
        static BIRCH_FENCE: $Block;
        static SOUL_LANTERN: $Block;
        static POLISHED_BLACKSTONE_BRICKS: $Block;
        static POTTED_AZURE_BLUET: $Block;
        static WHITE_STAINED_GLASS_PANE: $Block;
        static LIME_STAINED_GLASS: $Block;
        static DIORITE_WALL: $Block;
        static MAGMA_BLOCK: $Block;
        static DARK_OAK_SIGN: $Block;
        static POLISHED_DEEPSLATE: $Block;
        static BLUE_CONCRETE_POWDER: $Block;
        static CHORUS_FLOWER: $Block;
        static BLACK_GLAZED_TERRACOTTA: $Block;
        static RED_STAINED_GLASS: $Block;
        static BARRIER: $Block;
        static WARPED_FENCE_GATE: $Block;
        static DEEPSLATE_REDSTONE_ORE: $Block;
        static BAMBOO_MOSAIC_STAIRS: $Block;
        static DEEPSLATE_BRICK_STAIRS: $Block;
        static GRAY_CANDLE: $Block;
        static FARMLAND: $Block;
        static TRIAL_SPAWNER: $Block;
        static SKELETON_WALL_SKULL: $Block;
        static PRISMARINE_BRICKS: $Block;
        static SMOOTH_BASALT: $Block;
        static DARK_OAK_LOG: $Block;
        static BRAIN_CORAL_FAN: $Block;
        static WEATHERED_CUT_COPPER_SLAB: $Block;
        static ACACIA_HANGING_SIGN: $Block;
        static MAGENTA_SHULKER_BOX: $Block;
        static QUARTZ_PILLAR: $Block;
        static WARPED_TRAPDOOR: $Block;
        static BROWN_CANDLE_CAKE: $Block;
        static STRIPPED_BAMBOO_BLOCK: $Block;
        static PURPLE_WALL_BANNER: $Block;
        static REDSTONE_BLOCK: $Block;
        static COBBLED_DEEPSLATE_WALL: $Block;
        static DEAD_BUBBLE_CORAL_WALL_FAN: $Block;
        static CHISELED_POLISHED_BLACKSTONE: $Block;
        static BIRCH_SLAB: $Block;
        static EXPOSED_CHISELED_COPPER: $Block;
        static LIME_SHULKER_BOX: $Block;
        static QUARTZ_SLAB: $Block;
        static OXIDIZED_COPPER_GRATE: $Block;
        static QUARTZ_BLOCK: $Block;
        static SNOW: $Block;
        static SUGAR_CANE: $Block;
        static BRAIN_CORAL_WALL_FAN: $Block;
        static ACACIA_FENCE: $Block;
        static DARK_OAK_FENCE: $Block;
        static HORN_CORAL: $Block;
        static TUBE_CORAL_FAN: $Block;
        static POTTED_CHERRY_SAPLING: $Block;
        static MOSSY_COBBLESTONE: $Block;
        static DAYLIGHT_DETECTOR: $Block;
        static WARPED_FENCE: $Block;
        static POLISHED_TUFF_WALL: $Block;
        static BUBBLE_CORAL: $Block;
        static JUNGLE_STAIRS: $Block;
        static CYAN_CARPET: $Block;
        static OXIDIZED_COPPER_DOOR: $Block;
        static OBSERVER: $Block;
        static DEEPSLATE_DIAMOND_ORE: $Block;
        static AMETHYST_BLOCK: $Block;
        static SPRUCE_TRAPDOOR: $Block;
        static CHERRY_STAIRS: $Block;
        static CUT_COPPER: $Block;
        static BLAST_FURNACE: $Block;
        static OBSIDIAN: $Block;
        static RED_SANDSTONE_SLAB: $Block;
        static FIRE_CORAL_FAN: $Block;
        static AZURE_BLUET: $Block;
        static BAMBOO_WALL_SIGN: $Block;
        static PURPLE_STAINED_GLASS_PANE: $Block;
        static LIME_GLAZED_TERRACOTTA: $Block;
        static CARTOGRAPHY_TABLE: $Block;
        static ORANGE_CANDLE: $Block;
        static WITHER_ROSE: $Block;
        static PISTON: $Block;
        static DEAD_BRAIN_CORAL_FAN: $Block;
        static BLACK_CANDLE: $Block;
        static YELLOW_BANNER: $Block;
        static CUT_RED_SANDSTONE: $Block;
        static BIRCH_SAPLING: $Block;
        static LIME_CONCRETE: $Block;
        static BEETROOTS: $Block;
        static PURPUR_SLAB: $Block;
        static PURPLE_BANNER: $Block;
        static PURPLE_CONCRETE_POWDER: $Block;
        static BIRCH_LOG: $Block;
        static DEEPSLATE_BRICK_WALL: $Block;
        static DARK_PRISMARINE_SLAB: $Block;
        static ACACIA_PLANKS: $Block;
        static MYCELIUM: $Block;
        static RED_SANDSTONE: $Block;
        static BROWN_CONCRETE: $Block;
        static PRISMARINE_BRICK_STAIRS: $Block;
        static CAVE_VINES: $Block;
        static STONE_SLAB: $Block;
        static LIME_WALL_BANNER: $Block;
        static MANGROVE_WALL_SIGN: $Block;
        static BIRCH_LEAVES: $Block;
        static CHERRY_WALL_HANGING_SIGN: $Block;
        static BLUE_CANDLE_CAKE: $Block;
        static BAMBOO_FENCE_GATE: $Block;
        static DEEPSLATE_GOLD_ORE: $Block;
        static NETHER_BRICK_FENCE: $Block;
        static BROWN_MUSHROOM: $Block;
        static TUFF_BRICK_SLAB: $Block;
        static CYAN_SHULKER_BOX: $Block;
        static POLISHED_BLACKSTONE_SLAB: $Block;
        static WAXED_EXPOSED_CHISELED_COPPER: $Block;
        static JUNGLE_WALL_HANGING_SIGN: $Block;
        static NETHERITE_BLOCK: $Block;
        static ACACIA_PRESSURE_PLATE: $Block;
        static RED_SAND: $Block;
        static PACKED_MUD: $Block;
        static POLISHED_GRANITE_STAIRS: $Block;
        static MAGENTA_BANNER: $Block;
        static QUARTZ_STAIRS: $Block;
        static DRIED_KELP_BLOCK: $Block;
        static SCULK_VEIN: $Block;
        static BREWING_STAND: $Block;
        static CACTUS: $Block;
        static CAKE: $Block;
        static SMOOTH_QUARTZ_SLAB: $Block;
        static STRIPPED_ACACIA_WOOD: $Block;
        static BAMBOO_MOSAIC_SLAB: $Block;
        static LIGHT_GRAY_BANNER: $Block;
        static GREEN_BANNER: $Block;
        static SPRUCE_SIGN: $Block;
        static BLUE_STAINED_GLASS: $Block;
        static CHISELED_TUFF_BRICKS: $Block;
        static STRIPPED_BIRCH_WOOD: $Block;
        static SLIME_BLOCK: $Block;
        static RED_MUSHROOM: $Block;
        static BAMBOO_FENCE: $Block;
        static SPRUCE_SAPLING: $Block;
        static LIGHT_BLUE_STAINED_GLASS: $Block;
        static EXPOSED_COPPER_DOOR: $Block;
        static POLISHED_GRANITE_SLAB: $Block;
        static SMOOTH_RED_SANDSTONE_STAIRS: $Block;
        static WAXED_COPPER_TRAPDOOR: $Block;
        static BRAIN_CORAL: $Block;
        static COMPARATOR: $Block;
        static REDSTONE_ORE: $Block;
        static STRIPPED_CRIMSON_HYPHAE: $Block;
        static DRAGON_WALL_HEAD: $Block;
        static PINK_CANDLE: $Block;
        static DEAD_FIRE_CORAL_BLOCK: $Block;
        static MAGENTA_CANDLE_CAKE: $Block;
        static WITHER_SKELETON_SKULL: $Block;
        static RED_SANDSTONE_WALL: $Block;
        static LIGHT_GRAY_TERRACOTTA: $Block;
        static LIGHT_BLUE_STAINED_GLASS_PANE: $Block;
        static GRASS_BLOCK: $Block;
        static EXPOSED_COPPER_TRAPDOOR: $Block;
        static MAGENTA_STAINED_GLASS: $Block;
        static CRIMSON_PRESSURE_PLATE: $Block;
        static COAL_ORE: $Block;
        static DEEPSLATE_BRICKS: $Block;
        static WAXED_EXPOSED_COPPER_BULB: $Block;
        static ICE: $Block;
        static PURPLE_SHULKER_BOX: $Block;
        static GRAY_CANDLE_CAKE: $Block;
        static LIGHT_GRAY_CONCRETE_POWDER: $Block;
        static STRIPPED_OAK_WOOD: $Block;
        static DEEPSLATE_BRICK_SLAB: $Block;
        static GOLD_ORE: $Block;
        static GREEN_CARPET: $Block;
        static OCHRE_FROGLIGHT: $Block;
        static POLISHED_BLACKSTONE: $Block;
        static CLAY: $Block;
        static TUBE_CORAL_BLOCK: $Block;
        static LILAC: $Block;
        static RED_SANDSTONE_STAIRS: $Block;
        static STRIPPED_CHERRY_LOG: $Block;
        static DEAD_BRAIN_CORAL_WALL_FAN: $Block;
        static WAXED_CUT_COPPER_STAIRS: $Block;
        static DARK_PRISMARINE: $Block;
        static WAXED_EXPOSED_COPPER_GRATE: $Block;
        static NETHER_SPROUTS: $Block;
        static BUBBLE_CORAL_BLOCK: $Block;
        static BLUE_GLAZED_TERRACOTTA: $Block;
        static ACACIA_FENCE_GATE: $Block;
        static BRICK_WALL: $Block;
        static GLOW_LICHEN: $Block;
        static CHERRY_DOOR: $Block;
        static WITHER_SKELETON_WALL_SKULL: $Block;
        static BIRCH_FENCE_GATE: $Block;
        static LIGHT_GRAY_CONCRETE: $Block;
        static MOSSY_COBBLESTONE_STAIRS: $Block;
        static OXIDIZED_CUT_COPPER_SLAB: $Block;
        static DARK_OAK_TRAPDOOR: $Block;
        static YELLOW_TERRACOTTA: $Block;
        static PITCHER_CROP: $Block;
        static WEATHERED_CHISELED_COPPER: $Block;
        static CHISELED_RED_SANDSTONE: $Block;
        static JUNGLE_WOOD: $Block;
        static CRACKED_DEEPSLATE_TILES: $Block;
        static WHITE_BANNER: $Block;
        static ACACIA_DOOR: $Block;
        static FLOWERING_AZALEA: $Block;
        static MOSSY_STONE_BRICKS: $Block;
        static PRISMARINE: $Block;
        static WARPED_BUTTON: $Block;
        static DEAD_TUBE_CORAL_BLOCK: $Block;
        static TUFF_SLAB: $Block;
        static SMOOTH_SANDSTONE: $Block;
        static DIAMOND_BLOCK: $Block;
        static OAK_SAPLING: $Block;
        static POLISHED_DEEPSLATE_SLAB: $Block;
        static LAVA: $Block;
        static MANGROVE_FENCE_GATE: $Block;
        static CHISELED_DEEPSLATE: $Block;
        static STONE_BRICK_SLAB: $Block;
        static CUT_COPPER_STAIRS: $Block;
        static GRAY_CONCRETE: $Block;
        static DARK_OAK_LEAVES: $Block;
        static EXPOSED_COPPER_GRATE: $Block;
        static BAMBOO_PRESSURE_PLATE: $Block;
        static MELON: $Block;
        static SEA_LANTERN: $Block;
        static GREEN_CONCRETE: $Block;
        static LANTERN: $Block;
        static ORANGE_WALL_BANNER: $Block;
        static VOID_AIR: $Block;
        static SMOOTH_STONE_SLAB: $Block;
        static SMOOTH_STONE: $Block;
        static GREEN_STAINED_GLASS_PANE: $Block;
        static ORANGE_CONCRETE: $Block;
        static RED_NETHER_BRICKS: $Block;
        static MANGROVE_DOOR: $Block;
        static CYAN_CONCRETE_POWDER: $Block;
        static WAXED_COPPER_BLOCK: $Block;
        static SMOKER: $Block;
        static BIRCH_PLANKS: $Block;
        static TRIPWIRE: $Block;
        static REPEATING_COMMAND_BLOCK: $Block;
        static RED_CONCRETE_POWDER: $Block;
        static BIRCH_DOOR: $Block;
        static CRIMSON_SIGN: $Block;
        static CRIMSON_TRAPDOOR: $Block;
        static CHISELED_COPPER: $Block;
        static WEATHERED_COPPER_TRAPDOOR: $Block;
        static BLUE_CARPET: $Block;
        static DEEPSLATE_TILE_SLAB: $Block;
        static DRAGON_EGG: $Block;
        static SANDSTONE: $Block;
        static CRIMSON_STAIRS: $Block;
        static EXPOSED_COPPER: $Block;
        static WEATHERED_CUT_COPPER_STAIRS: $Block;
        static COBBLED_DEEPSLATE_SLAB: $Block;
        static MOSS_CARPET: $Block;
        static ANVIL: $Block;
        static REPEATER: $Block;
        static CRIMSON_HANGING_SIGN: $Block;
        static OXIDIZED_COPPER_BULB: $Block;
        static DEAD_BRAIN_CORAL: $Block;
        static BOOKSHELF: $Block;
        static SMOOTH_QUARTZ_STAIRS: $Block;
        static LIGHT_BLUE_CANDLE: $Block;
        static SPRUCE_WOOD: $Block;
        static BLACK_TERRACOTTA: $Block;
        static STONE_STAIRS: $Block;
        static POLISHED_TUFF_SLAB: $Block;
        static LIME_WOOL: $Block;
        static SPRUCE_FENCE: $Block;
        static OAK_PRESSURE_PLATE: $Block;
        static HONEY_BLOCK: $Block;
        static STRIPPED_DARK_OAK_WOOD: $Block;
        static MEDIUM_AMETHYST_BUD: $Block;
        static BIRCH_STAIRS: $Block;
        static POTTED_BAMBOO: $Block;
        static MANGROVE_BUTTON: $Block;
        static BIRCH_TRAPDOOR: $Block;
        static COMPOSTER: $Block;
        static ORANGE_STAINED_GLASS: $Block;
        static DECORATED_POT: $Block;
        static GLASS: $Block;
        static STRIPPED_MANGROVE_LOG: $Block;
        static CHERRY_PLANKS: $Block;
        static SOUL_SAND: $Block;
        static GREEN_STAINED_GLASS: $Block;
        static GRAY_STAINED_GLASS_PANE: $Block;
        static POTTED_FLOWERING_AZALEA: $Block;
        static BLUE_WOOL: $Block;
        static MAGENTA_WOOL: $Block;
        static BAMBOO_DOOR: $Block;
        static PITCHER_PLANT: $Block;
        static DEAD_HORN_CORAL: $Block;
        static PINK_BED: $Block;
        static CYAN_CANDLE: $Block;
        static POPPY: $Block;
        static CYAN_TERRACOTTA: $Block;
        static TRIPWIRE_HOOK: $Block;
        static PACKED_ICE: $Block;
        static YELLOW_CONCRETE: $Block;
        static WEATHERED_COPPER_DOOR: $Block;
        static ACACIA_STAIRS: $Block;
        static VINE: $Block;
        static POTTED_SPRUCE_SAPLING: $Block;
        static BUBBLE_COLUMN: $Block;
        static INFESTED_STONE_BRICKS: $Block;
        static COPPER_ORE: $Block;
        static BAMBOO_TRAPDOOR: $Block;
        static PODZOL: $Block;
        static WARPED_WART_BLOCK: $Block;
        static POLISHED_BLACKSTONE_WALL: $Block;
        static WARPED_NYLIUM: $Block;
        static STRIPPED_CRIMSON_STEM: $Block;
        static POTTED_ALLIUM: $Block;
        static BLUE_BED: $Block;
        static DEAD_FIRE_CORAL: $Block;
        static BLACK_WALL_BANNER: $Block;
        static BLACK_CARPET: $Block;
        static MUD: $Block;
        static PINK_TERRACOTTA: $Block;
        static POTTED_LILY_OF_THE_VALLEY: $Block;
        static FIRE_CORAL_BLOCK: $Block;
        static WARPED_WALL_HANGING_SIGN: $Block;
        static GRAY_GLAZED_TERRACOTTA: $Block;
        static CHERRY_LEAVES: $Block;
        static WEATHERED_COPPER_GRATE: $Block;
        static JUNGLE_FENCE: $Block;
        static SPAWNER: $Block;
        static POLISHED_BASALT: $Block;
        static WARPED_FUNGUS: $Block;
        static GRAY_WALL_BANNER: $Block;
        static WHITE_CONCRETE_POWDER: $Block;
        static RAIL: $Block;
        static GRAY_TERRACOTTA: $Block;
        static NETHER_PORTAL: $Block;
        static BEDROCK: $Block;
        static INFESTED_DEEPSLATE: $Block;
        static SHROOMLIGHT: $Block;
        static CHAIN_COMMAND_BLOCK: $Block;
        static CYAN_GLAZED_TERRACOTTA: $Block;
        static WAXED_WEATHERED_CUT_COPPER_SLAB: $Block;
        static STRIPPED_DARK_OAK_LOG: $Block;
        static GRAY_WOOL: $Block;
        static CYAN_WALL_BANNER: $Block;
        static DARK_OAK_SLAB: $Block;
        static OAK_SIGN: $Block;
        static RED_CONCRETE: $Block;
        static CRACKED_POLISHED_BLACKSTONE_BRICKS: $Block;
        static BEEHIVE: $Block;
        static WAXED_OXIDIZED_COPPER_DOOR: $Block;
        static GRAY_SHULKER_BOX: $Block;
        static WARPED_DOOR: $Block;
        static OAK_FENCE: $Block;
        static NETHER_BRICKS: $Block;
        static RED_CANDLE: $Block;
        static PURPLE_CANDLE_CAKE: $Block;
        static FLETCHING_TABLE: $Block;
        static BIG_DRIPLEAF_STEM: $Block;
        static GRAY_BANNER: $Block;
        static JUNGLE_FENCE_GATE: $Block;
        static MAGENTA_CONCRETE: $Block;
        static LIGHT_BLUE_WALL_BANNER: $Block;
        static BLACK_SHULKER_BOX: $Block;
        static BUBBLE_CORAL_WALL_FAN: $Block;
        static FROGSPAWN: $Block;
        static JUNGLE_TRAPDOOR: $Block;
        static ACTIVATOR_RAIL: $Block;
        static OXIDIZED_CUT_COPPER_STAIRS: $Block;
        static DIRT_PATH: $Block;
        static FROSTED_ICE: $Block;
        static ORANGE_CARPET: $Block;
        static PINK_CARPET: $Block;
        static STRUCTURE_VOID: $Block;
        static POWDER_SNOW_CAULDRON: $Block;
        static POTTED_ACACIA_SAPLING: $Block;
        static STONECUTTER: $Block;
        static LIME_CONCRETE_POWDER: $Block;
        static PINK_BANNER: $Block;
        static POLISHED_BLACKSTONE_PRESSURE_PLATE: $Block;
        static GREEN_WOOL: $Block;
        static HORN_CORAL_FAN: $Block;
        static POTTED_WARPED_ROOTS: $Block;
        static DEAD_HORN_CORAL_WALL_FAN: $Block;
        static CHERRY_FENCE: $Block;
        static OAK_WALL_HANGING_SIGN: $Block;
        static MOSSY_COBBLESTONE_SLAB: $Block;
        static BAMBOO_SAPLING: $Block;
        static DARK_PRISMARINE_STAIRS: $Block;
        static TWISTING_VINES: $Block;
        static LIME_BANNER: $Block;
        static PINK_CONCRETE: $Block;
        static RED_CANDLE_CAKE: $Block;
        static JUNGLE_BUTTON: $Block;
        static WAXED_WEATHERED_COPPER: $Block;
        static MUSHROOM_STEM: $Block;
        static BLUE_TERRACOTTA: $Block;
        static BROWN_MUSHROOM_BLOCK: $Block;
        static DEAD_TUBE_CORAL_FAN: $Block;
        static MAGENTA_GLAZED_TERRACOTTA: $Block;
        static CHISELED_BOOKSHELF: $Block;
        static TUFF_WALL: $Block;
        static POTTED_CACTUS: $Block;
        static DEAD_BUBBLE_CORAL: $Block;
        static WHITE_GLAZED_TERRACOTTA: $Block;
        static POTTED_BIRCH_SAPLING: $Block;
        static DEAD_FIRE_CORAL_WALL_FAN: $Block;
        static WAXED_OXIDIZED_COPPER: $Block;
        static GREEN_BED: $Block;
        static BROWN_WALL_BANNER: $Block;
        static CAULDRON: $Block;
        static POLISHED_ANDESITE_STAIRS: $Block;
        static POTTED_OAK_SAPLING: $Block;
        static CHERRY_FENCE_GATE: $Block;
        static EMERALD_BLOCK: $Block;
        static POTTED_TORCHFLOWER: $Block;
        static LIME_STAINED_GLASS_PANE: $Block;
        static ORANGE_BANNER: $Block;
        static WAXED_WEATHERED_CHISELED_COPPER: $Block;
        static CAVE_AIR: $Block;
        static LIGHT_BLUE_GLAZED_TERRACOTTA: $Block;
        static PINK_STAINED_GLASS: $Block;
        static OXIDIZED_COPPER: $Block;
        static SPRUCE_STAIRS: $Block;
        static BLUE_ICE: $Block;
        static SCAFFOLDING: $Block;
        static BLUE_SHULKER_BOX: $Block;
        static HORN_CORAL_BLOCK: $Block;
        static CRIMSON_SLAB: $Block;
        static RESPAWN_ANCHOR: $Block;
        static POTTED_JUNGLE_SAPLING: $Block;
        static KELP: $Block;
        static COPPER_BLOCK: $Block;
        static STRIPPED_WARPED_HYPHAE: $Block;
        static STRIPPED_JUNGLE_LOG: $Block;
        static ANDESITE_SLAB: $Block;
        static SUSPICIOUS_GRAVEL: $Block;
        static ATTACHED_MELON_STEM: $Block;
        static POTTED_CRIMSON_ROOTS: $Block;
        static GOLD_BLOCK: $Block;
        static CRIMSON_PLANKS: $Block;
        static DARK_OAK_FENCE_GATE: $Block;
        static SPRUCE_PRESSURE_PLATE: $Block;
        static ACACIA_LEAVES: $Block;
        static COBBLESTONE_SLAB: $Block;
        static HEAVY_WEIGHTED_PRESSURE_PLATE: $Block;
        static PINK_CONCRETE_POWDER: $Block;
        static WAXED_COPPER_GRATE: $Block;
        static LIGHT_BLUE_CONCRETE_POWDER: $Block;
        static WHITE_BED: $Block;
        static CHISELED_TUFF: $Block;
        static BUBBLE_CORAL_FAN: $Block;
        static YELLOW_CANDLE_CAKE: $Block;
        static ACACIA_WALL_HANGING_SIGN: $Block;
        static JUNGLE_LOG: $Block;
        static NOTE_BLOCK: $Block;
        static MANGROVE_SIGN: $Block;
        static WARPED_HYPHAE: $Block;
        static CHERRY_SIGN: $Block;
        static TORCHFLOWER_CROP: $Block;
        static SPRUCE_SLAB: $Block;
        static PEONY: $Block;
        static OXEYE_DAISY: $Block;
        static OAK_HANGING_SIGN: $Block;
        static ACACIA_SIGN: $Block;
        static STRIPPED_WARPED_STEM: $Block;
        static BEACON: $Block;
        static WAXED_OXIDIZED_CUT_COPPER: $Block;
        static MOSS_BLOCK: $Block;
        static HONEYCOMB_BLOCK: $Block;
        static POTTED_FERN: $Block;
        static NETHER_BRICK_STAIRS: $Block;
        static COBWEB: $Block;
        static POTTED_WITHER_ROSE: $Block;
        static DARK_OAK_WALL_SIGN: $Block;
        static OAK_LOG: $Block;
        static STRIPPED_JUNGLE_WOOD: $Block;
        static DEAD_BRAIN_CORAL_BLOCK: $Block;
        static MUDDY_MANGROVE_ROOTS: $Block;
        static TINTED_GLASS: $Block;
        static MAGENTA_CANDLE: $Block;
        static YELLOW_BED: $Block;
        static LIGHT_GRAY_CANDLE: $Block;
        static END_GATEWAY: $Block;
        static POTTED_WARPED_FUNGUS: $Block;
        static POTTED_DARK_OAK_SAPLING: $Block;
        static CHISELED_QUARTZ_BLOCK: $Block;
        static LIME_CARPET: $Block;
        static DEEPSLATE_EMERALD_ORE: $Block;
        static MUD_BRICK_SLAB: $Block;
        static PURPLE_GLAZED_TERRACOTTA: $Block;
        static IRON_BARS: $Block;
        static WHITE_CONCRETE: $Block;
        static STONE: $Block;
        static YELLOW_WOOL: $Block;
        static CAVE_VINES_PLANT: $Block;
        static ROSE_BUSH: $Block;
        static MUD_BRICKS: $Block;
        static BROWN_CARPET: $Block;
        static WAXED_CHISELED_COPPER: $Block;
        static STRIPPED_CHERRY_WOOD: $Block;
        static BLACKSTONE_STAIRS: $Block;
        static WHITE_CANDLE_CAKE: $Block;
        static REDSTONE_WALL_TORCH: $Block;
        static BLACK_CANDLE_CAKE: $Block;
        static ACACIA_LOG: $Block;
        static INFESTED_MOSSY_STONE_BRICKS: $Block;
        static ORANGE_GLAZED_TERRACOTTA: $Block;
        static MUD_BRICK_STAIRS: $Block;
        static MAGENTA_CONCRETE_POWDER: $Block;
        static TNT: $Block;
        static BELL: $Block;
        static TWISTING_VINES_PLANT: $Block;
        static BLACKSTONE_SLAB: $Block;
        static TORCHFLOWER: $Block;
        static SPRUCE_HANGING_SIGN: $Block;
        static STRIPPED_ACACIA_LOG: $Block;
        static RAW_IRON_BLOCK: $Block;
        static BROWN_BANNER: $Block;
        static AIR: $Block;
        static GRANITE_STAIRS: $Block;
        static BEE_NEST: $Block;
        static CHEST: $Block;
        static PINK_PETALS: $Block;
        static SCULK_SENSOR: $Block;
        static OAK_DOOR: $Block;
        static MANGROVE_FENCE: $Block;
        static LILY_PAD: $Block;
        static SMALL_DRIPLEAF: $Block;
        static PURPUR_STAIRS: $Block;
        static EXPOSED_CUT_COPPER_SLAB: $Block;
        static LADDER: $Block;
        static RED_MUSHROOM_BLOCK: $Block;
        static WALL_TORCH: $Block;
        static CRAFTER: $Block;
        static BASALT: $Block;
        static MAGENTA_WALL_BANNER: $Block;
        static BAMBOO_SIGN: $Block;
        static TALL_GRASS: $Block;
        static DEAD_BUSH: $Block;
        static EXPOSED_CUT_COPPER_STAIRS: $Block;
        static PETRIFIED_OAK_SLAB: $Block;
        static MUD_BRICK_WALL: $Block;
        static LIGHT_BLUE_CARPET: $Block;
        static MANGROVE_WALL_HANGING_SIGN: $Block;
        static CALIBRATED_SCULK_SENSOR: $Block;
        static SCULK_CATALYST: $Block;
        static WAXED_OXIDIZED_CUT_COPPER_STAIRS: $Block;
        static WARPED_ROOTS: $Block;
        static CHAIN: $Block;
        static FIRE_CORAL: $Block;
        static DEEPSLATE_IRON_ORE: $Block;
        static WAXED_OXIDIZED_COPPER_BULB: $Block;
        static CHISELED_NETHER_BRICKS: $Block;
        static LIGHT_GRAY_STAINED_GLASS_PANE: $Block;
        static COAL_BLOCK: $Block;
        static WHITE_STAINED_GLASS: $Block;
        static WEATHERED_CUT_COPPER: $Block;
        static PURPUR_PILLAR: $Block;
        static CALCITE: $Block;
        static ACACIA_TRAPDOOR: $Block;
        static CHERRY_WOOD: $Block;
        static WHITE_CARPET: $Block;
        static CRIMSON_STEM: $Block;
        static CHISELED_STONE_BRICKS: $Block;
        static RAW_GOLD_BLOCK: $Block;
        static JIGSAW: $Block;
        static PURPUR_BLOCK: $Block;
        static FURNACE: $Block;
        static JACK_O_LANTERN: $Block;
        static BLACK_BED: $Block;
        static BIRCH_PRESSURE_PLATE: $Block;
        static DEEPSLATE_LAPIS_ORE: $Block;
        static WAXED_OXIDIZED_CHISELED_COPPER: $Block;
        static LARGE_FERN: $Block;
        static SNIFFER_EGG: $Block;
        static BAMBOO_WALL_HANGING_SIGN: $Block;
        static PURPLE_TERRACOTTA: $Block;
        static CUT_RED_SANDSTONE_SLAB: $Block;
        static DIRT: $Block;
        static WEEPING_VINES: $Block;
        static COBBLED_DEEPSLATE: $Block;
        static GRAY_BED: $Block;
        static BONE_BLOCK: $Block;
        static LIGHT_BLUE_CANDLE_CAKE: $Block;
        static POLISHED_DIORITE: $Block;
        static CUT_SANDSTONE: $Block;
        static WHITE_TERRACOTTA: $Block;
        static MOSSY_COBBLESTONE_WALL: $Block;
        static GRINDSTONE: $Block;
        static POWERED_RAIL: $Block;
        static JUNGLE_SIGN: $Block;
        static DARK_OAK_PLANKS: $Block;
        static ACACIA_WOOD: $Block;
        static END_STONE_BRICK_SLAB: $Block;
        static MANGROVE_WOOD: $Block;
        static LIGHT_GRAY_STAINED_GLASS: $Block;
        static PIGLIN_WALL_HEAD: $Block;
        static POTTED_OXEYE_DAISY: $Block;
        static CHERRY_WALL_SIGN: $Block;
        static SEAGRASS: $Block;
        static WEATHERED_COPPER: $Block;
        static WAXED_WEATHERED_COPPER_GRATE: $Block;
        static OAK_PLANKS: $Block;
        static DEAD_TUBE_CORAL_WALL_FAN: $Block;
        static END_PORTAL_FRAME: $Block;
        static WAXED_OXIDIZED_COPPER_TRAPDOOR: $Block;
        static DEEPSLATE_COAL_ORE: $Block;
        static FLOWER_POT: $Block;
        static HEAVY_CORE: $Block;
        static RED_TERRACOTTA: $Block;
        static WAXED_EXPOSED_CUT_COPPER: $Block;
        static WARPED_SIGN: $Block;
        static COPPER_BULB: $Block;
        static SWEET_BERRY_BUSH: $Block;
        static SNOW_BLOCK: $Block;
        static CRIMSON_FENCE: $Block;
        static POLISHED_DIORITE_SLAB: $Block;
        static LAVA_CAULDRON: $Block;
        static BRAIN_CORAL_BLOCK: $Block;
        static MOSSY_STONE_BRICK_SLAB: $Block;
        static STONE_BRICKS: $Block;
        static SANDSTONE_STAIRS: $Block;
        static BROWN_BED: $Block;
        static MANGROVE_LEAVES: $Block;
        static POTTED_DANDELION: $Block;
        static SMOOTH_SANDSTONE_SLAB: $Block;
        static CHERRY_TRAPDOOR: $Block;
        static ATTACHED_PUMPKIN_STEM: $Block;
        static MAGENTA_TERRACOTTA: $Block;
        static SMOOTH_SANDSTONE_STAIRS: $Block;
        static SPRUCE_PLANKS: $Block;
        static DRAGON_HEAD: $Block;
        static CHERRY_SAPLING: $Block;
        static FIRE: $Block;
        static ANDESITE_WALL: $Block;
        static BLACK_WOOL: $Block;
        static LIGHT_GRAY_CARPET: $Block;
        static PURPLE_CONCRETE: $Block;
        static LIGHTNING_ROD: $Block;
        static CYAN_BED: $Block;
        static CHERRY_HANGING_SIGN: $Block;
        static LARGE_AMETHYST_BUD: $Block;
        static RED_SHULKER_BOX: $Block;
        static PEARLESCENT_FROGLIGHT: $Block;
        static REDSTONE_TORCH: $Block;
        static MAGENTA_CARPET: $Block;
        static STICKY_PISTON: $Block;
        static CRIMSON_ROOTS: $Block;
        static PUMPKIN: $Block;
        static SMOOTH_QUARTZ: $Block;
        static FLOWERING_AZALEA_LEAVES: $Block;
        static NETHER_WART_BLOCK: $Block;
        static COBBLED_DEEPSLATE_STAIRS: $Block;
        static COBBLESTONE_WALL: $Block;
        static WHEAT: $Block;
        static BLUE_WALL_BANNER: $Block;
        static DEAD_FIRE_CORAL_FAN: $Block;
        static LIME_CANDLE: $Block;
        static ACACIA_SLAB: $Block;
        static CRIMSON_NYLIUM: $Block;
        static ORANGE_CANDLE_CAKE: $Block;
        static OXIDIZED_COPPER_TRAPDOOR: $Block;
        static ORANGE_TERRACOTTA: $Block;
        static BLACK_CONCRETE: $Block;
        static DROPPER: $Block;
        static AZALEA: $Block;
        static POTTED_POPPY: $Block;
        static MOSSY_STONE_BRICK_STAIRS: $Block;
        static WARPED_HANGING_SIGN: $Block;
        static OAK_STAIRS: $Block;
        static BLACK_STAINED_GLASS: $Block;
        static IRON_TRAPDOOR: $Block;
        static KELP_PLANT: $Block;
        static PINK_CANDLE_CAKE: $Block;
        static INFESTED_CHISELED_STONE_BRICKS: $Block;
        static BLUE_BANNER: $Block;
        static POLISHED_DIORITE_STAIRS: $Block;
        static WARPED_PRESSURE_PLATE: $Block;
        static HORN_CORAL_WALL_FAN: $Block;
        static BAMBOO_HANGING_SIGN: $Block;
        static OAK_SLAB: $Block;
        static POINTED_DRIPSTONE: $Block;
        static WAXED_EXPOSED_COPPER: $Block;
        static PURPLE_CANDLE: $Block;
        static CRIMSON_FUNGUS: $Block;
        static DARK_OAK_HANGING_SIGN: $Block;
        static DARK_OAK_SAPLING: $Block;
        static ACACIA_BUTTON: $Block;
        static EMERALD_ORE: $Block;
        static POLISHED_DEEPSLATE_STAIRS: $Block;
        static LIGHT_GRAY_CANDLE_CAKE: $Block;
        static OAK_FENCE_GATE: $Block;
        static POTTED_WHITE_TULIP: $Block;
        static POLISHED_BLACKSTONE_STAIRS: $Block;
        static WAXED_CUT_COPPER_SLAB: $Block;
        static BAMBOO_BLOCK: $Block;
        static SUNFLOWER: $Block;
        static CAMPFIRE: $Block;
        static SANDSTONE_SLAB: $Block;
        static MANGROVE_PRESSURE_PLATE: $Block;
        static SPRUCE_BUTTON: $Block;
        static POTTED_MANGROVE_PROPAGULE: $Block;
        static CYAN_WOOL: $Block;
        static JUNGLE_HANGING_SIGN: $Block;
        static ZOMBIE_WALL_HEAD: $Block;
        static TARGET: $Block;
        static PRISMARINE_BRICK_SLAB: $Block;
        static LOOM: $Block;
        static DRIPSTONE_BLOCK: $Block;
        static CREEPER_HEAD: $Block;
        static BAMBOO_PLANKS: $Block;
        static NETHER_QUARTZ_ORE: $Block;
        static DEAD_BUBBLE_CORAL_FAN: $Block;
        static SUSPICIOUS_SAND: $Block;
        static BLACK_BANNER: $Block;
        static COPPER_DOOR: $Block;
        static WAXED_COPPER_DOOR: $Block;
        static LIGHT_BLUE_BED: $Block;
        static BIRCH_WALL_SIGN: $Block;
        static PRISMARINE_WALL: $Block;
        static PINK_STAINED_GLASS_PANE: $Block;
        static WEATHERED_COPPER_BULB: $Block;
        static DIORITE_STAIRS: $Block;
        static BLACKSTONE_WALL: $Block;
        static BRICK_STAIRS: $Block;
        static END_PORTAL: $Block;
        static PLAYER_WALL_HEAD: $Block;
        static BIRCH_HANGING_SIGN: $Block;
        static DAMAGED_ANVIL: $Block;
        static PINK_WALL_BANNER: $Block;
        static BAMBOO: $Block;
        static CONDUIT: $Block;
        static JUNGLE_LEAVES: $Block;
        static RED_TULIP: $Block;
        static SPORE_BLOSSOM: $Block;
        static WAXED_WEATHERED_COPPER_DOOR: $Block;
        static DARK_OAK_STAIRS: $Block;
        static YELLOW_SHULKER_BOX: $Block;
        static PINK_GLAZED_TERRACOTTA: $Block;
        static CANDLE_CAKE: $Block;
        static DANDELION: $Block;
        static AZALEA_LEAVES: $Block;
        static COCOA: $Block;
        static RED_GLAZED_TERRACOTTA: $Block;
        static BAMBOO_MOSAIC: $Block;
        static WARPED_STEM: $Block;
        static OAK_TRAPDOOR: $Block;
        static YELLOW_CONCRETE_POWDER: $Block;
        static BAMBOO_BUTTON: $Block;
        static PURPLE_WOOL: $Block;
        static VAULT: $Block;
        static LIGHT_BLUE_BANNER: $Block;
        static END_STONE: $Block;
        static SPRUCE_FENCE_GATE: $Block;
        static GRAVEL: $Block;
        static BUDDING_AMETHYST: $Block;
        static CYAN_STAINED_GLASS: $Block;
        static LAPIS_ORE: $Block;
        static ORANGE_BED: $Block;
        static WAXED_WEATHERED_COPPER_TRAPDOOR: $Block;
        static BIG_DRIPLEAF: $Block;
        static POTTED_CORNFLOWER: $Block;
        static DISPENSER: $Block;
        static NETHER_BRICK_SLAB: $Block;
        static CYAN_CONCRETE: $Block;
        static SMITHING_TABLE: $Block;
        static IRON_ORE: $Block;
        static POLISHED_BLACKSTONE_BRICK_SLAB: $Block;
        static NETHERRACK: $Block;
        static RED_STAINED_GLASS_PANE: $Block;
        static GREEN_CANDLE_CAKE: $Block;
        static BROWN_SHULKER_BOX: $Block;
        static HANGING_ROOTS: $Block;
        static PRISMARINE_SLAB: $Block;
        static SMOOTH_RED_SANDSTONE: $Block;
        static BROWN_STAINED_GLASS: $Block;
        static BIRCH_WALL_HANGING_SIGN: $Block;
        static SKELETON_SKULL: $Block;
        static GREEN_WALL_BANNER: $Block;
        static END_STONE_BRICK_WALL: $Block;
        static POLISHED_TUFF_STAIRS: $Block;
        static TORCH: $Block;
        static ENDER_CHEST: $Block;
        static WAXED_OXIDIZED_COPPER_GRATE: $Block;
        static FERN: $Block;
        static BIRCH_SIGN: $Block;
        static POLISHED_GRANITE: $Block;
        static PINK_TULIP: $Block;
        static INFESTED_CRACKED_STONE_BRICKS: $Block;
        static JUNGLE_SAPLING: $Block;
        static TALL_SEAGRASS: $Block;
        static LEVER: $Block;
        static DEAD_BUBBLE_CORAL_BLOCK: $Block;
        static STONE_PRESSURE_PLATE: $Block;
        static TUFF: $Block;
        static POLISHED_BLACKSTONE_BRICK_STAIRS: $Block;
        static NETHER_GOLD_ORE: $Block;
        static LIME_BED: $Block;
        static POTTED_DEAD_BUSH: $Block;
        static QUARTZ_BRICKS: $Block;
        static POTTED_PINK_TULIP: $Block;
        static STRIPPED_OAK_LOG: $Block;
        static MANGROVE_SLAB: $Block;
        static END_ROD: $Block;
        static WARPED_PLANKS: $Block;
        static CHERRY_SLAB: $Block;
        static ORANGE_CONCRETE_POWDER: $Block;
        static ORANGE_WOOL: $Block;
        static PLAYER_HEAD: $Block;
        static LIME_TERRACOTTA: $Block;
        static MANGROVE_STAIRS: $Block;
        static TUFF_BRICKS: $Block;
        static WHITE_WOOL: $Block;
        static GRAY_CARPET: $Block;
        static GREEN_TERRACOTTA: $Block;
        static BROWN_CANDLE: $Block;
        static DARK_OAK_DOOR: $Block;
        static GREEN_SHULKER_BOX: $Block;
        static GRAY_CONCRETE_POWDER: $Block;
        static OXIDIZED_CUT_COPPER: $Block;
        static LIGHT_GRAY_WALL_BANNER: $Block;
        static WHITE_SHULKER_BOX: $Block;
        static CRIMSON_BUTTON: $Block;
        static IRON_BLOCK: $Block;
        static BLUE_CONCRETE: $Block;
        static REDSTONE_LAMP: $Block;
        static POLISHED_BLACKSTONE_BRICK_WALL: $Block;
        static PUMPKIN_STEM: $Block;
        static POTTED_BLUE_ORCHID: $Block;
        static POTATOES: $Block;
        static BIRCH_BUTTON: $Block;
        static HOPPER: $Block;
        static DARK_OAK_WALL_HANGING_SIGN: $Block;
        static LIGHT_WEIGHTED_PRESSURE_PLATE: $Block;
        static SOUL_SOIL: $Block;
        static YELLOW_CANDLE: $Block;
        static SOUL_TORCH: $Block;
        static LIGHT_BLUE_WOOL: $Block;
        static TUFF_BRICK_STAIRS: $Block;
        static ACACIA_WALL_SIGN: $Block;
        static POTTED_CRIMSON_FUNGUS: $Block;
        static LIGHT_GRAY_SHULKER_BOX: $Block;
        static WAXED_CUT_COPPER: $Block;
        static STRIPPED_MANGROVE_WOOD: $Block;
        static FIRE_CORAL_WALL_FAN: $Block;
        static CHERRY_LOG: $Block;
        static WAXED_WEATHERED_CUT_COPPER: $Block;
        static YELLOW_STAINED_GLASS_PANE: $Block;
        static CUT_COPPER_SLAB: $Block;
        static BLACKSTONE: $Block;
        static RED_NETHER_BRICK_SLAB: $Block;
        static LIME_CANDLE_CAKE: $Block;
        static MAGENTA_STAINED_GLASS_PANE: $Block;
        static DEAD_HORN_CORAL_FAN: $Block;
        static SHULKER_BOX: $Block;
        static DEAD_HORN_CORAL_BLOCK: $Block;
        static CARVED_PUMPKIN: $Block;
        static PINK_WOOL: $Block;
        static WEEPING_VINES_PLANT: $Block;
        static LIGHT_GRAY_WOOL: $Block;
        static JUNGLE_DOOR: $Block;
        static STONE_BUTTON: $Block;
        static GRANITE_SLAB: $Block;
        static CRACKED_NETHER_BRICKS: $Block;
        static LIGHT_GRAY_BED: $Block;
        static ACACIA_SAPLING: $Block;
        static POWDER_SNOW: $Block;
        static EXPOSED_COPPER_BULB: $Block;
        static BAMBOO_SLAB: $Block;
        static CRIMSON_WALL_HANGING_SIGN: $Block;
        static IRON_DOOR: $Block;
        static BROWN_STAINED_GLASS_PANE: $Block;
        static MOVING_PISTON: $Block;
        static WAXED_EXPOSED_CUT_COPPER_SLAB: $Block;
        static SOUL_WALL_TORCH: $Block;
        static BIRCH_WOOD: $Block;
        static LODESTONE: $Block;
        static SEA_PICKLE: $Block;
        static SPRUCE_LEAVES: $Block;
        static ORANGE_TULIP: $Block;
        static ANDESITE: $Block;
        static RED_NETHER_BRICK_STAIRS: $Block;
        static MANGROVE_PROPAGULE: $Block;
        static BROWN_GLAZED_TERRACOTTA: $Block;
        static BARREL: $Block;
        static OXIDIZED_CHISELED_COPPER: $Block;
        static INFESTED_STONE: $Block;
        static YELLOW_GLAZED_TERRACOTTA: $Block;
        constructor();
    }
    export class $SculkSpreader$ChargeCursor {
        update(level: $LevelAccessor, pos: $BlockPos_, random: $RandomSource, spreader: $SculkSpreader, shouldConvertBlocks: boolean): void;
        getDecayDelay(): number;
        getCharge(): number;
        getPos(): $BlockPos;
        getFacingData(): $Set<$Direction>;
        static CODEC: $Codec<$SculkSpreader$ChargeCursor>;
        static MAX_CURSOR_DECAY_DELAY: number;
        constructor(pos: $BlockPos_, charge: number);
        get decayDelay(): number;
        get charge(): number;
        get pos(): $BlockPos;
        get facingData(): $Set<$Direction>;
    }
    export class $TrapDoorBlock extends $HorizontalDirectionalBlock implements $SimpleWaterloggedBlock {
        codec(): $MapCodec<$TrapDoorBlock>;
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$TrapDoorBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static OPEN: $BooleanProperty;
        static POWERED: $BooleanProperty;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static HALF: $EnumProperty<$Half>;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        constructor(type: $BlockSetType_, properties: $BlockBehaviour$Properties);
    }
    export class $CrossCollisionBlock extends $Block implements $SimpleWaterloggedBlock {
        canPlaceLiquid(player: $Player | null, level: $BlockGetter, pos: $BlockPos_, state: $BlockState_, fluid: $Fluid_): boolean;
        placeLiquid(level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_, fluidState: $FluidState): boolean;
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        getPickupSound(): ($SoundEvent) | undefined;
        /**
         * State sensitive variant of `BucketPickup#getPickupSound()`.
         * 
         * Override to change the pickup sound based on the `BlockState` of the object being picked up.
         */
        getPickupSound(state: $BlockState_): ($SoundEvent) | undefined;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static WEST: $BooleanProperty;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static NORTH: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static SOUTH: $BooleanProperty;
        static UPDATE_CLIENTS: number;
        static EAST: $BooleanProperty;
    }
    export class $StandingSignBlock extends $SignBlock {
        codec(): $MapCodec<$StandingSignBlock>;
        static ROTATION: $IntegerProperty;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$StandingSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
    export class $Rotation extends $Enum<$Rotation> implements $StringRepresentable {
        static values(): $Rotation[];
        static valueOf(arg0: string): $Rotation;
        rotate(facing: $Direction_): $Direction;
        rotate(rotation: number, positionCount: number): number;
        /**
         * Chooses a random rotation.
         */
        static getRandom(random: $RandomSource): $Rotation;
        /**
         * Get a list of all rotations in random order.
         */
        static getShuffled(random: $RandomSource): $List<$Rotation>;
        getSerializedName(): string;
        getRotated(rotation: $Rotation_): $Rotation;
        rotation(): $OctahedralGroup;
        getRemappedEnumConstantName(): string;
        static COUNTERCLOCKWISE_90: $Rotation;
        static CODEC: $Codec<$Rotation>;
        static CLOCKWISE_90: $Rotation;
        static CLOCKWISE_180: $Rotation;
        static NONE: $Rotation;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $Rotation}.
     */
    export type $Rotation_ = "none" | "clockwise_90" | "180" | "counterclockwise_90";
    export class $HorizontalDirectionalBlock extends $Block {
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$Block>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static UPDATE_KNOWN_SHAPE: number;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
    }
    export class $BucketPickup {
    }
    export interface $BucketPickup extends $IBucketPickupExtension {
        pickupBlock(player: $Player | null, level: $LevelAccessor, pos: $BlockPos_, state: $BlockState_): $ItemStack;
        /**
         * @deprecated
         */
        getPickupSound(): ($SoundEvent) | undefined;
        get pickupSound(): ($SoundEvent) | undefined;
    }
    export class $WallHangingSignBlock extends $SignBlock {
        codec(): $MapCodec<$WallHangingSignBlock>;
        canAttachTo(level: $LevelReader, state: $BlockState_, pos: $BlockPos_, direction: $Direction_): boolean;
        canPlace(state: $BlockState_, level: $LevelReader, pos: $BlockPos_): boolean;
        static UPDATE_IMMEDIATE: number;
        static CODEC: $MapCodec<$WallHangingSignBlock>;
        static UPDATE_NEIGHBORS: number;
        static INDESTRUCTIBLE: number;
        static SHAPE_NORTHSOUTH: $VoxelShape;
        static UPDATE_NONE: number;
        static UPDATE_INVISIBLE: number;
        static UPDATE_MOVE_BY_PISTON: number;
        static PLANK_EASTWEST: $VoxelShape;
        static UPDATE_LIMIT: number;
        static BLOCK_STATE_REGISTRY: $IdMapper<$BlockState>;
        static UPDATE_ALL: number;
        static UPDATE_ALL_IMMEDIATE: number;
        static WATERLOGGED: $BooleanProperty;
        static UPDATE_KNOWN_SHAPE: number;
        static PLANK_NORTHSOUTH: $VoxelShape;
        static UPDATE_SUPPRESS_DROPS: number;
        static INSTANT: number;
        static UPDATE_CLIENTS: number;
        static FACING: $DirectionProperty;
        static SHAPE_EASTWEST: $VoxelShape;
        constructor(type: $WoodType_, properties: $BlockBehaviour$Properties);
    }
}
