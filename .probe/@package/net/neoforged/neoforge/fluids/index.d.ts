import { $JsonElement } from "@package/com/google/gson";
import { $DynamicOps, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag_, $Tag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $LivingEntity, $Mob, $Entity } from "@package/net/minecraft/world/entity";
import { $ParticleOptions, $ParticleOptions_ } from "@package/net/minecraft/core/particles";
import { $IClientFluidTypeExtensions } from "@package/net/neoforged/neoforge/client/extensions/common";
import { $UUID_, $List, $Map_, $List_ } from "@package/java/util";
import { $Unit_ } from "@package/net/minecraft/util";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $IFluidHandler$FluidAction_ } from "@package/net/neoforged/neoforge/fluids/capability";
import { $Supplier_, $Consumer_, $Predicate_, $UnaryOperator_, $BiFunction_ } from "@package/java/util/function";
import { $Lazy } from "@package/net/neoforged/neoforge/common/util";
import { $PathType, $PathType_ } from "@package/net/minecraft/world/level/pathfinder";
import { $HolderSet_, $BlockPos_, $Registry, $HolderLookup$Provider, $Holder_, $Holder, $IdMapper } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { RegistryMarked, RegistryTypes, DataComponentTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $DataComponentType, $PatchedDataComponentMap, $DataComponentHolder_, $DataComponentType_, $DataComponentMap, $DataComponentMap_, $DataComponentPatch_, $DataComponentPatch } from "@package/net/minecraft/core/component";
import { $Record, $Object } from "@package/java/lang";
import { $LootTable } from "@package/net/minecraft/world/level/storage/loot";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $SoundAction, $MutableDataComponentHolder } from "@package/net/neoforged/neoforge/common";
import { $BlockAndTintGetter, $LevelReader, $BlockGetter, $Level_ } from "@package/net/minecraft/world/level";
import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Item, $Rarity, $Rarity_, $Item$TooltipContext, $TooltipFlag, $DyeColor_, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $FluidState, $Fluid_, $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $TooltipProvider } from "@package/net/minecraft/world/item/component";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $FluidLike } from "@package/dev/latvian/mods/kubejs/fluid";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ItemEntity } from "@package/net/minecraft/world/entity/item";
import { $RecipeScriptContext } from "@package/dev/latvian/mods/kubejs/recipe";
import { $IntegerProperty, $BooleanProperty } from "@package/net/minecraft/world/level/block/state/properties";
import { $Stream } from "@package/java/util/stream";
import { $PotionContents_, $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $ResourceKey_, $ResourceKey, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ComponentFunctions } from "@package/dev/latvian/mods/kubejs/component";
import { $LiquidBlock, $Block, $Block_ } from "@package/net/minecraft/world/level/block";
import { $FluidStackKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $RelativeURL } from "@package/dev/latvian/mods/kubejs/web";
import { $Vec3_ } from "@package/net/minecraft/world/phys";
import { $Boat } from "@package/net/minecraft/world/entity/vehicle";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as capability from "@package/net/neoforged/neoforge/fluids/capability";
export * as crafting from "@package/net/neoforged/neoforge/fluids/crafting";

declare module "@package/net/neoforged/neoforge/fluids" {
    /**
     * A definition of common attributes, properties, and methods that is applied
     * to a `Fluid`. This is used to link a flowing and source fluid together
     * without relying on tags. Most accessors do not correlate to in-game features;
     * they are provided for mods to take advantage of.
     * 
     * Accessors are typically implemented in a method call chain. As such, it
     * can provide a general implementation while more specific implementations
     * can be implemented by overriding methods further in the call chain (on fluids,
     * entities, etc.).
     */
    export class $FluidType {
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(stack: $FluidStack_): $Component;
        /**
         * Returns the component representing the name of the fluid type.
         */
        getDescription(): $Component;
        /**
         * Performs how an entity moves when within the fluid. If using custom
         * movement logic, the method should return `true`. Otherwise, the
         * movement logic will default to water.
         */
        move(state: $FluidState, entity: $LivingEntity, movementVector: $Vec3_, gravity: number): boolean;
        /**
         * Returns the bucket containing the fluid.
         */
        getBucket(stack: $FluidStack_): $ItemStack;
        /**
         * Returns the identifier representing the name of the fluid.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(stack: $FluidStack_): string;
        /**
         * Returns the identifier representing the name of the fluid type.
         * If no identifier was specified, then the identifier will be defaulted
         * to `fluid_type..`.
         */
        getDescriptionId(): string;
        /**
         * Returns whether the fluid type represents air.
         */
        isAir(): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canHydrate(stack: $FluidStack_): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canHydrate(entity: $Entity): boolean;
        /**
         * Returns whether the block can be hydrated by a fluid.
         * 
         * Hydration is an arbitrary word which depends on the block.
         * 
         * - A farmland has moisture
         * - A sponge can soak up the liquid
         * - A coral can live
         */
        canHydrate(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_, source: $BlockState_, sourcePos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canSwim(entity: $Entity): boolean;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(): $Rarity;
        /**
         * Returns the rarity of the fluid.
         * 
         * Note: If not specified, the rarity of the fluid is `Rarity#COMMON`.
         */
        getRarity(stack: $FluidStack_): $Rarity;
        /**
         * Returns a sound to play when a certain action is performed by the
         * entity in the fluid. If no sound is present, then the sound will be
         * `null`.
         */
        getSound(entity: $Entity, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed at a
         * position. If no sound is present, then the sound will be `null`.
         */
        getSound(player: $Player, getter: $BlockGetter, pos: $BlockPos_, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(stack: $FluidStack_, action: $SoundAction): $SoundEvent;
        /**
         * Returns a sound to play when a certain action is performed. If no
         * sound is present, then the sound will be `null`.
         */
        getSound(action: $SoundAction): $SoundEvent;
        /**
         * Performs an action when a fluid can be vaporized when placed into a level.
         * 
         * Note: The fluid will already have been drained from the stack.
         */
        onVaporize(player: $Player, level: $Level_, pos: $BlockPos_, stack: $FluidStack_): void;
        /**
         * Returns whether the entity can drown in the fluid.
         */
        canDrownIn(entity: $LivingEntity): boolean;
        /**
         * Returns whether the fluid type represents air.
         */
        isVanilla(): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getDensity(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getDensity(stack: $FluidStack_): number;
        /**
         * Returns the associated `BlockState` for a `FluidState`.
         */
        getBlockForFluidState(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): $BlockState;
        /**
         * Determines if this fluid should be vaporized when placed into a level.
         * 
         * Note: Fluids that can turn lava into obsidian should vaporize within
         * the nether to preserve the intentions of vanilla.
         */
        isVaporizedOnPlacement(level: $Level_, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Returns how much the fluid should scale the damage done to a falling
         * entity when hitting the ground per tick.
         * 
         * Implementation: If the entity is in many fluids, the smallest modifier
         * is applied.
         */
        getFallDistanceModifier(entity: $Entity): number;
        /**
         * Returns whether the entity can ride in this vehicle under the fluid.
         */
        canRideVehicleUnder(vehicle: $Entity, rider: $Entity): boolean;
        /**
         * Returns the `FluidState` when a `FluidStack` is trying to
         * place it.
         */
        getStateForPlacement(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): $FluidState;
        /**
         * Gets the path type of the adjacent fluid to a pathfinding entity.
         * Path types with a negative malus are not traversable for the entity.
         * Pathfinding entities will favor paths consisting of a lower malus.
         * When `null`, uses vanilla behavior.
         */
        getAdjacentBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, originalType: $PathType_): $PathType;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getLightLevel(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getLightLevel(): number;
        /**
         * Returns how much the velocity of the fluid should be scaled by
         * when applied to an entity.
         */
        motionScale(entity: $Entity): number;
        /**
         * Returns whether the fluid type represents air.
         */
        isLighterThanAir(): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getViscosity(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(stack: $FluidStack_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getViscosity(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, stack: $FluidStack_): boolean;
        /**
         * Returns whether the fluid can be placed in the level.
         */
        canBePlacedInLevel(getter: $BlockAndTintGetter, pos: $BlockPos_, state: $FluidState): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(boat: $Boat): boolean;
        /**
         * Returns whether the boat can be used on the fluid.
         */
        supportsBoating(state: $FluidState, boat: $Boat): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canPushEntity(entity: $Entity): boolean;
        /**
         * Returns whether the fluid can push an entity.
         */
        canExtinguish(entity: $Entity): boolean;
        /**
         * Returns whether the block can be extinguished by this fluid.
         */
        canExtinguish(state: $FluidState, getter: $BlockGetter, pos: $BlockPos_): boolean;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(state: $FluidState, getter: $BlockAndTintGetter, pos: $BlockPos_): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         * 
         * Implementation: This is used by the bucket model to determine whether the fluid
         * should render full-bright when `applyFluidLuminosity` is `true`.
         */
        getTemperature(): number;
        /**
         * Returns the light level emitted by the fluid.
         * 
         * Note: This should be a value between `[0,15]`. If not specified, the
         * light level is `0` as most fluids do not emit light.
         */
        getTemperature(stack: $FluidStack_): number;
        /**
         * Returns whether a fluid above a pointed dripstone block can successfully fill a cauldron below.
         * 
         * If this will return `true`, this method will also do 3 things:
         * 
         * - Set the cauldron below to the proper filled state as defined by the FluidType's `DripstoneDripInfo`
         * - Send the BLOCK_CHANGE `GameEvent`
         * - Play a sound as defined by the FluidType's `DripstoneDripInfo`
         */
        handleCauldronDrip(fluid: $Fluid_, level: $Level_, cauldronPos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(state: $FluidState, reader: $LevelReader, pos: $BlockPos_): boolean;
        /**
         * Returns whether the fluid can create a source.
         */
        canConvertToSource(stack: $FluidStack_): boolean;
        getDripInfo(): $FluidType$DripstoneDripInfo;
        /**
         * Performs what to do when an item is in a fluid.
         */
        setItemMovement(entity: $ItemEntity): void;
        /**
         * Gets the path type of this fluid when an entity is pathfinding. When
         * `null`, uses vanilla behavior.
         */
        getBlockPathType(state: $FluidState, level: $BlockGetter, pos: $BlockPos_, mob: $Mob, canFluidLog: boolean): $PathType;
        /**
         * @deprecated
         */
        initializeClient(consumer: $Consumer_<$IClientFluidTypeExtensions>): void;
        static SIZE: $Lazy<number>;
        static BUCKET_VOLUME: number;
        constructor(arg0: $FluidType$Properties);
        get air(): boolean;
        get vanilla(): boolean;
        get lighterThanAir(): boolean;
        get dripInfo(): $FluidType$DripstoneDripInfo;
        set itemMovement(value: $ItemEntity);
    }
    /**
     * Values that may be interpreted as {@link $FluidType}.
     */
    export type $FluidType_ = RegistryTypes.NeoforgeFluidType;
    /**
     * Event to register `CauldronFluidContent` for modded cauldrons.
     * 
     * Registering cauldrons is done by calling `CauldronFluidContent#register`
     * and allows all cauldrons registered in this way to interoperate with each other
     * when accessed via the `FluidHandler#BLOCK` capability.
     */
    export class $RegisterCauldronFluidContentEvent extends $Event implements $IModBusEvent {
        /**
         * Register a new cauldron, allowing it to be filled and emptied through the standard capability.
         * In both cases, return the content of the cauldron, either the existing one, or the newly registered one.
         * 
         * If the block is not a subclass of `AbstractCauldronBlock`,
         * `BlockBehaviour#onPlace(BlockState, Level, BlockPos, BlockState, boolean)`
         * and `BlockBehaviour#onRemove(BlockState, Level, BlockPos, BlockState, boolean)`
         * must be overridden to invalidate capabilities when the block changes!
         * See how NeoForge patches `AbstractCauldronBlock` for reference.
         */
        register(block: $Block_, fluid: $Fluid_, totalAmount: number, levelProperty: $IntegerProperty): void;
    }
    export interface $FluidType extends RegistryMarked<RegistryTypes.NeoforgeFluidTypeTag, RegistryTypes.NeoforgeFluidType> {}
    export class $BaseFlowingFluid$Flowing extends $BaseFlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
        constructor(arg0: $BaseFlowingFluid$Properties);
    }
    /**
     * The properties of the fluid. The simple forms of each property can
     * be specified while more complex logic can be overridden in the `FluidType`.
     */
    export class $FluidType$Properties {
        static create(): $FluidType$Properties;
        addDripstoneDripping(arg0: number, arg1: $ParticleOptions_, arg2: $Block_, arg3: $SoundEvent_): $FluidType$Properties;
        sound(arg0: $SoundAction, arg1: $SoundEvent_): $FluidType$Properties;
        rarity(arg0: $Rarity_): $FluidType$Properties;
        canDrown(arg0: boolean): $FluidType$Properties;
        canHydrate(arg0: boolean): $FluidType$Properties;
        viscosity(arg0: number): $FluidType$Properties;
        lightLevel(arg0: number): $FluidType$Properties;
        canSwim(arg0: boolean): $FluidType$Properties;
        pathType(arg0: $PathType_): $FluidType$Properties;
        fallDistanceModifier(arg0: number): $FluidType$Properties;
        density(arg0: number): $FluidType$Properties;
        adjacentPathType(arg0: $PathType_): $FluidType$Properties;
        motionScale(arg0: number): $FluidType$Properties;
        supportsBoating(arg0: boolean): $FluidType$Properties;
        canPushEntity(arg0: boolean): $FluidType$Properties;
        canExtinguish(arg0: boolean): $FluidType$Properties;
        canConvertToSource(arg0: boolean): $FluidType$Properties;
        descriptionId(arg0: string): $FluidType$Properties;
        temperature(arg0: number): $FluidType$Properties;
    }
    export class $FluidType$DripstoneDripInfo extends $Record {
        dripParticle(): $ParticleOptions;
        chance(): number;
        filledCauldron(): $Block;
        constructor(chance: number, dripParticle: $ParticleOptions_, filledCauldron: $Block_);
    }
    /**
     * Values that may be interpreted as {@link $FluidType$DripstoneDripInfo}.
     */
    export type $FluidType$DripstoneDripInfo_ = { dripParticle?: $ParticleOptions_, chance?: number, filledCauldron?: $Block_,  } | [dripParticle?: $ParticleOptions_, chance?: number, filledCauldron?: $Block_, ];
    /**
     * `ItemStack` equivalent for fluids.
     * The main difference is that a fluid stack is always required to have an amount, while an item stack defaults to 1.
     * Another difference is that the component prototype of a fluid stack is currently always empty, while an item stack gets its component prototype from the item.
     * 
     * Most methods in this class are adapted from `ItemStack`.
     */
    export class $FluidStack implements $MutableDataComponentHolder, $FluidStackKJS {
        isEmpty(): boolean;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static matches(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        split(amount: number): $FluidStack;
        /**
         * Saves this stack to a tag, directly writing the keys into the passed tag.
         */
        save(lookupProvider: $HolderLookup$Provider, prefix: $Tag_): $Tag;
        /**
         * Saves this stack to a new tag.
         */
        save(lookupProvider: $HolderLookup$Provider): $Tag;
        /**
         * Tries to parse a fluid stack. Empty stacks cannot be parsed with this method.
         */
        static parse(lookupProvider: $HolderLookup$Provider, tag: $Tag_): ($FluidStack) | undefined;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copy(): $FluidStack;
        is(holderPredicate: $Predicate_<$Holder<$Fluid>>): boolean;
        is(holder: $Holder_<$Fluid>): boolean;
        is(holderSet: $HolderSet_<$Fluid>): boolean;
        /**
         * Check if the fluid type of this stack is equal to the given fluid type.
         */
        is(fluidType: $FluidType_): boolean;
        is(tag: $TagKey_<$Fluid>): boolean;
        is(fluid: $Fluid_): boolean;
        /**
         * Sets the amount of this stack.
         */
        grow(amount: number): void;
        /**
         * @deprecated
         * Returns the hover name of this stack.
         */
        getDisplayName(): $Component;
        /**
         * Returns the description id of this stack.
         */
        getDescriptionId(): string;
        /**
         * Sets the amount of this stack.
         */
        shrink(amount: number): void;
        /**
         * Returns the hover name of this stack.
         */
        getHoverName(): $Component;
        getComponents(): $PatchedDataComponentMap;
        /**
         * Sets the amount of this stack.
         */
        limitSize(amount: number): void;
        getTags(): $Stream<$TagKey<$Fluid>>;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        copyAndClear(): $FluidStack;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluidSameComponents(first: $FluidStack_, second: $FluidStack_): boolean;
        /**
         * Returns the amount of this stack.
         */
        getAmount(): number;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        getFluid(): $Fluid;
        /**
         * @deprecated
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static areFluidStackTagsEqual(first: $FluidStack_, second: $FluidStack_): boolean;
        static lenientOtionalFieldOf(fieldName: string): $MapCodec<$FluidStack>;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidStackIdentical(other: $FluidStack_): boolean;
        /**
         * Hashes the fluid and components of this stack, ignoring the amount.
         */
        static hashFluidAndComponents(stack: $FluidStack_): number;
        /**
         * @deprecated
         * Returns the description id of this stack.
         */
        getTranslationKey(): string;
        /**
         * Sets the amount of this stack.
         */
        setAmount(amount: number): void;
        /**
         * Splits off a stack of the given amount of this stack and reduces this stack by the amount.
         */
        copyWithAmount(amount: number): $FluidStack;
        /**
         * Checks if the two fluid stacks are equal. This checks the fluid, amount, and components.
         */
        static isSameFluid(first: $FluidStack_, second: $FluidStack_): boolean;
        getFluidHolder(): $Holder<$Fluid>;
        /**
         * Returns the fluid type of this stack.
         */
        getFluidType(): $FluidType;
        /**
         * A standard codec for fluid stacks that always deserializes with a fixed amount,
         * and does not accept empty stacks.
         * 
         * Fluid equivalent of `ItemStack#SINGLE_ITEM_CODEC`.
         */
        static fixedAmountCodec(amount: number): $Codec<$FluidStack>;
        /**
         * @deprecated
         * Determines if the FluidIDs and components are equal compared to a container item stack. This does not check amounts.
         */
        isFluidEqual(other: $ItemStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        isFluidEqual(other: $FluidStack_): boolean;
        /**
         * @deprecated
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        containsFluid(other: $FluidStack_): boolean;
        getComponentsPatch(): $DataComponentPatch;
        isComponentsPatchEmpty(): boolean;
        /**
         * Saves this stack to a new tag.
         */
        saveOptional(lookupProvider: $HolderLookup$Provider): $Tag;
        /**
         * Tries to parse a fluid stack, defaulting to `#EMPTY` on parsing failure.
         */
        static parseOptional(lookupProvider: $HolderLookup$Provider, tag: $CompoundTag_): $FluidStack;
        update<T>(arg0: $DataComponentType_<T>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: $UnaryOperator_<T>): T;
        update<T, U>(arg0: $Supplier_<$DataComponentType<T>>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        update<T, U>(arg0: $DataComponentType_<T>, arg1: T, arg2: U, arg3: $BiFunction_<T, U, T>): T;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $Supplier_<$DataComponentType<never>>[]): void;
        copyFrom(arg0: $DataComponentHolder_, ...arg1: $DataComponentType_<never>[]): void;
        matches(cx: $RecipeMatchContext, ingredient: $FluidIngredient_, exact: boolean): boolean;
        matches(cx: $RecipeMatchContext, s: $FluidStack_, exact: boolean): boolean;
        specialEquals(o: $Object, shallow: boolean): boolean;
        kjs$isEmpty(): boolean;
        /**
         * Returns the description id of this stack.
         */
        kjs$getId(): string;
        /**
         * Returns the description id of this stack.
         */
        kjs$getMod(): string;
        kjs$copy(amount: number): $FluidLike;
        kjs$getKey(): $ResourceKey<$Fluid>;
        /**
         * Creates a copy of this stack with `0` amount.
         */
        kjs$self(): $FluidStack;
        getCodec(): $Codec<never>;
        kjs$getWebIconURL(ops: $DynamicOps<$Tag_>, size: number): $RelativeURL;
        kjs$getRegistryId(): $ResourceKey<$Registry<$Fluid>>;
        replaceThisWith(cx: $RecipeScriptContext, arg1: $Object): $Object;
        kjs$getRegistry(): $Registry<$Fluid>;
        kjs$getIdLocation(): $ResourceLocation;
        kjs$asHolder(): $Holder<$Fluid>;
        /**
         * Returns the fluid in this stack, or `Fluids#EMPTY` if this stack is empty.
         */
        kjs$getFluid(): $Fluid;
        /**
         * Returns the amount of this stack.
         */
        kjs$getAmount(): number;
        /**
         * Determines if the fluid and the components are equal. This does not check amounts.
         */
        kjs$equalsIgnoringCount(other: $FluidStack_): boolean;
        has(component: $DataComponentType_<never>): boolean;
        patch(components: $DataComponentPatch_): $ComponentFunctions;
        getComponentHolder(): $MutableDataComponentHolder;
        getComponentMap(): $DataComponentMap;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        hasTag(tag: $ResourceLocation_): boolean;
        getTags(): $List<$ResourceLocation>;
        getTagKeys(): $List<$TagKey<$Fluid>>;
        has(type: $Supplier_<$DataComponentType<never>>): boolean;
        addToTooltip<T extends $TooltipProvider>(type: $DataComponentType_<T>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        addToTooltip<T extends $TooltipProvider>(type: $Supplier_<$DataComponentType<T>>, context: $Item$TooltipContext, adder: $Consumer_<$Component>, flag: $TooltipFlag): void;
        setCustomName(name: $Component_): void;
        setEntityData(tag: $CompoundTag_): void;
        setRarity(rarity: $Rarity_): void;
        setDyedColor(color: $KubeColor_): void;
        setProfile(profile: $GameProfile): void;
        setProfile(name: string, uuid: $UUID_): void;
        setUnit(component: $DataComponentType_<$Unit_>): $ComponentFunctions;
        /**
         * Returns the hover name of this stack.
         */
        getCustomName(): $Component;
        setBaseColor(color: $DyeColor_): void;
        setCustomData(tag: $CompoundTag_): void;
        setPotionId(potion: $Holder_<$Potion>): void;
        getCustomData(): $CompoundTag;
        setLore(lines: $List_<$Component_>, styledLines: $List_<$Component_>): void;
        setLore(lines: $List_<$Component_>): void;
        setLockCode(lock: string): void;
        setDyedColorWithTooltip(color: $KubeColor_): void;
        setAdditionalTooltipHidden(): void;
        setBlockStateProperties(properties: $Map_<string, string>): void;
        remove(type: $DataComponentType_<never>): $ComponentFunctions;
        setPotionContents(contents: $PotionContents_): void;
        getComponentString(): string;
        /**
         * Sets the amount of this stack.
         */
        setCustomModelData(amount: number): void;
        setGlintOverride(override: boolean): void;
        resetComponents(): $ComponentFunctions;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>): void;
        setContainerLootTable(lootTable: $ResourceKey_<$LootTable>, seed: number): void;
        setTooltipHidden(): void;
        static CODEC: $Codec<$FluidStack>;
        static FLUID_NON_EMPTY_CODEC: $Codec<$Holder<$Fluid>>;
        static OPTIONAL_CODEC: $Codec<$FluidStack>;
        static OPTIONAL_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        static EMPTY: $FluidStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidStack>;
        constructor(fluid: $Holder_<$Fluid>, amount: number, patch: $DataComponentPatch_);
        constructor(fluid: $Holder_<$Fluid>, amount: number);
        constructor(fluid: $Fluid_, amount: number);
        get<T extends keyof DataComponentTypes.OutputMap>(type: T): DataComponentTypes.OutputMap[T] | null;
        getOrDefault<T extends keyof DataComponentTypes.OutputMap>(type: T, _default: DataComponentTypes.OutputMap[T]): DataComponentTypes.OutputMap[T];
        set(components: $DataComponentMap_): this;
        set<T extends keyof DataComponentTypes.InputMap>(type: T, data: DataComponentTypes.InputMap[T]): this;
        get empty(): boolean;
        get displayName(): $Component;
        get descriptionId(): string;
        get hoverName(): $Component;
        get components(): $PatchedDataComponentMap;
        get fluid(): $Fluid;
        get translationKey(): string;
        get fluidHolder(): $Holder<$Fluid>;
        get fluidType(): $FluidType;
        get componentsPatch(): $DataComponentPatch;
        get componentsPatchEmpty(): boolean;
        get codec(): $Codec<never>;
        get componentHolder(): $MutableDataComponentHolder;
        get componentMap(): $DataComponentMap;
        get tagKeys(): $List<$TagKey<$Fluid>>;
        set entityData(value: $CompoundTag_);
        set rarity(value: $Rarity_);
        set dyedColor(value: $KubeColor_);
        set unit(value: $DataComponentType_<$Unit_>);
        set baseColor(value: $DyeColor_);
        set potionId(value: $Holder_<$Potion>);
        set lockCode(value: string);
        set dyedColorWithTooltip(value: $KubeColor_);
        set blockStateProperties(value: $Map_<string, string>);
        set potionContents(value: $PotionContents_);
        get componentString(): string;
        set customModelData(value: number);
        set glintOverride(value: boolean);
    }
    /**
     * Values that may be interpreted as {@link $FluidStack}.
     */
    export type $FluidStack_ = $Fluid_ | "-" | { fluid: RegistryTypes.Fluid, amount?: number,  };
    /**
     * Base implementation of a `FlowingFluid` for mods to use.
     */
    export class $BaseFlowingFluid extends $FlowingFluid {
        static FLUID_STATE_REGISTRY: $IdMapper<$FluidState>;
        static FALLING: $BooleanProperty;
        static LEVEL: $IntegerProperty;
    }
    export class $BaseFlowingFluid$Properties {
        block(arg0: $Supplier_<$LiquidBlock>): $BaseFlowingFluid$Properties;
        bucket(arg0: $Supplier_<$Item>): $BaseFlowingFluid$Properties;
        levelDecreasePerBlock(arg0: number): $BaseFlowingFluid$Properties;
        explosionResistance(arg0: number): $BaseFlowingFluid$Properties;
        slopeFindDistance(arg0: number): $BaseFlowingFluid$Properties;
        tickRate(arg0: number): $BaseFlowingFluid$Properties;
        constructor(fluidType: $Supplier_<$FluidType>, still: $Supplier_<$Fluid>, flowing: $Supplier_<$Fluid>);
    }
    /**
     * This interface represents a Fluid Tank. IT IS NOT REQUIRED but is provided for convenience.
     * You are free to handle Fluids in any way that you wish - this is simply an easy default way.
     * DO NOT ASSUME that these objects are used internally in all cases.
     */
    export class $IFluidTank {
    }
    export interface $IFluidTank {
        getCapacity(): number;
        drain(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        drain(arg0: number, arg1: $IFluidHandler$FluidAction_): $FluidStack;
        fill(arg0: $FluidStack_, arg1: $IFluidHandler$FluidAction_): number;
        isFluidValid(stack: $FluidStack_): boolean;
        getFluidAmount(): number;
        getFluid(): $FluidStack;
        get capacity(): number;
        get fluidAmount(): number;
        get fluid(): $FluidStack;
    }
}
