import { $Codec } from "@package/com/mojang/serialization";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $RadialData } from "@package/mekanism/api/radial";
import { $List, $Collection, $Map, $Set } from "@package/java/util";
import { $IntPredicate_, $LongSupplier, $IntFunction_, $Supplier_, $Function_, $LongSupplier_, $Consumer_ } from "@package/java/util/function";
import { $InteractionResult, $InteractionHand_ } from "@package/net/minecraft/world";
import { $HolderLookup$Provider, $Holder_, $Holder } from "@package/net/minecraft/core";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enchantment, $ItemEnchantments } from "@package/net/minecraft/world/item/enchantment";
import { $IRadialMode, $NestedRadialMode } from "@package/mekanism/api/radial/mode";
import { $Enum, $Record } from "@package/java/lang";
import { $IModuleDataProvider_, $IModuleDataProvider, $IItemProvider, $IItemProvider_ } from "@package/mekanism/api/providers";
import { $ItemAbility_ } from "@package/net/neoforged/neoforge/common";
import { $DeferredHolder } from "@package/net/neoforged/neoforge/registries";
import { $FloatSupplier_, $FloatSupplier } from "@package/mekanism/api/functions";
import { $IHasTextComponent_ } from "@package/mekanism/api/text";
import { $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $BlockSource_ } from "@package/net/minecraft/core/dispenser";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $ItemAttributeModifierEvent } from "@package/net/neoforged/neoforge/event";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $ModuleBooleanConfig, $ModuleConfig } from "@package/mekanism/api/gear/config";
import { $UseOnContext } from "@package/net/minecraft/world/item/context";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $DamageSource_ } from "@package/net/minecraft/world/damagesource";
import { $IEnergyContainer } from "@package/mekanism/api/energy";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as config from "@package/mekanism/api/gear/config";

declare module "@package/mekanism/api/gear" {
    export class $ModuleData$ModuleDataBuilder<MODULE extends $ICustomModule<MODULE>> {
        exclusive(arg0: number): $ModuleData$ModuleDataBuilder<MODULE>;
        exclusive(...arg0: $ModuleData$ExclusiveFlag_[]): $ModuleData$ModuleDataBuilder<MODULE>;
        maxStackSize(arg0: number): $ModuleData$ModuleDataBuilder<MODULE>;
        static custom<MODULE extends $ICustomModule<MODULE>>(arg0: $Function_<$IModule<MODULE>, MODULE>, arg1: $Holder_<$Item>): $ModuleData$ModuleDataBuilder<MODULE>;
        /**
         * @deprecated
         */
        static custom<MODULE extends $ICustomModule<MODULE>>(arg0: $Function_<$IModule<MODULE>, MODULE>, arg1: $IItemProvider_): $ModuleData$ModuleDataBuilder<MODULE>;
        /**
         * @deprecated
         */
        static marker(arg0: $IItemProvider_): $ModuleData$ModuleDataBuilder<never>;
        static marker(arg0: $Holder_<$Item>): $ModuleData$ModuleDataBuilder<never>;
        addConfig<TYPE, CONFIG extends $ModuleConfig<TYPE>>(arg0: CONFIG, arg1: $Codec<CONFIG>, arg2: $StreamCodec<$RegistryFriendlyByteBuf, CONFIG>): $ModuleData$ModuleDataBuilder<MODULE>;
        addConfig(arg0: $ModuleBooleanConfig): $ModuleData$ModuleDataBuilder<MODULE>;
        modeChangeDisabledByDefault(): $ModuleData$ModuleDataBuilder<MODULE>;
        addInstalledCountConfig<TYPE, CONFIG extends $ModuleConfig<TYPE>>(arg0: $IntFunction_<CONFIG>, arg1: $IntFunction_<$Codec<CONFIG>>, arg2: $IntFunction_<$StreamCodec<$RegistryFriendlyByteBuf, CONFIG>>): $ModuleData$ModuleDataBuilder<MODULE>;
        addInstalledCountConfig<TYPE, CONFIG extends $ModuleConfig<TYPE>>(arg0: $IntPredicate_, arg1: $IntFunction_<CONFIG>, arg2: $IntFunction_<$Codec<CONFIG>>, arg3: $IntFunction_<$StreamCodec<$RegistryFriendlyByteBuf, CONFIG>>): $ModuleData$ModuleDataBuilder<MODULE>;
        addMaxInstalledConfig<TYPE, CONFIG extends $ModuleConfig<TYPE>>(arg0: $IntFunction_<CONFIG>, arg1: $IntFunction_<$Codec<CONFIG>>, arg2: $IntFunction_<$StreamCodec<$RegistryFriendlyByteBuf, CONFIG>>): $ModuleData$ModuleDataBuilder<MODULE>;
        handlesModeChange(): $ModuleData$ModuleDataBuilder<MODULE>;
        noDisable(): $ModuleData$ModuleDataBuilder<MODULE>;
        disabledByDefault(): $ModuleData$ModuleDataBuilder<MODULE>;
        static customInstanced<MODULE extends $ICustomModule<MODULE>>(arg0: $Supplier_<MODULE>, arg1: $Holder_<$Item>): $ModuleData$ModuleDataBuilder<MODULE>;
        /**
         * @deprecated
         */
        static customInstanced<MODULE extends $ICustomModule<MODULE>>(arg0: $Supplier_<MODULE>, arg1: $IItemProvider_): $ModuleData$ModuleDataBuilder<MODULE>;
        rendersHUD(): $ModuleData$ModuleDataBuilder<MODULE>;
    }
    export class $IHUDElement {
    }
    export interface $IHUDElement {
        getText(): $Component;
        getIcon(): $ResourceLocation;
        getColor(): number;
        get text(): $Component;
        get icon(): $ResourceLocation;
        get color(): number;
    }
    export class $ModuleData$ExclusiveFlag extends $Enum<$ModuleData$ExclusiveFlag> {
        static values(): $ModuleData$ExclusiveFlag[];
        static valueOf(arg0: string): $ModuleData$ExclusiveFlag;
        getMask(): number;
        static getCompoundMask(...arg0: $ModuleData$ExclusiveFlag_[]): number;
        static OVERRIDE_DROPS: $ModuleData$ExclusiveFlag;
        static INTERACT_EMPTY: $ModuleData$ExclusiveFlag;
        static INTERACT_ENTITY: $ModuleData$ExclusiveFlag;
        static INTERACT_ANY: number;
        static NONE: number;
        static ANY: number;
        static OVERRIDE_JUMP: $ModuleData$ExclusiveFlag;
        static INTERACT_BLOCK: $ModuleData$ExclusiveFlag;
        get mask(): number;
    }
    /**
     * Values that may be interpreted as {@link $ModuleData$ExclusiveFlag}.
     */
    export type $ModuleData$ExclusiveFlag_ = "interact_empty" | "interact_entity" | "interact_block" | "override_jump" | "override_drops";
    export class $IModuleContainer {
    }
    export interface $IModuleContainer {
        get(arg0: $Holder_<$ModuleData<never>>): $IModule<never>;
        get<MODULE extends $ICustomModule<MODULE>>(arg0: $DeferredHolder<$ModuleData_<never>, $ModuleData_<MODULE>>): $IModule<MODULE>;
        /**
         * @deprecated
         */
        get<MODULE extends $ICustomModule<MODULE>>(arg0: $IModuleDataProvider_<MODULE>): $IModule<MODULE>;
        modules(): $Collection<$IModule<never>>;
        getUnchecked<MODULE extends $ICustomModule<MODULE>>(arg0: $Holder_<$ModuleData<never>>): $IModule<MODULE>;
        /**
         * @deprecated
         */
        has(arg0: $IModuleDataProvider_<never>): boolean;
        has(arg0: $Holder_<$ModuleData<never>>): boolean;
        replaceModuleConfig(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $Holder_<$ModuleData<never>>, arg3: $ModuleConfig<never>): $IModuleContainer;
        /**
         * @deprecated
         */
        replaceModuleConfig<MODULE extends $ICustomModule<MODULE>>(arg0: $HolderLookup$Provider, arg1: $ItemStack_, arg2: $IModuleDataProvider_<MODULE>, arg3: $ModuleConfig<never>): $IModuleContainer;
        installedCount(): number;
        /**
         * @deprecated
         */
        installedCount(arg0: $IModuleDataProvider_<never>): number;
        installedCount(arg0: $Holder_<$ModuleData<never>>): number;
        getHUDStrings(arg0: $Player, arg1: $ItemStack_): $List<$Component>;
        getIfEnabled(arg0: $Holder_<$ModuleData<never>>): $IModule<never>;
        getIfEnabled<MODULE extends $ICustomModule<MODULE>>(arg0: $DeferredHolder<$ModuleData_<never>, $ModuleData_<MODULE>>): $IModule<MODULE>;
        /**
         * @deprecated
         */
        getIfEnabled<MODULE extends $ICustomModule<MODULE>>(arg0: $IModuleDataProvider_<MODULE>): $IModule<MODULE>;
        /**
         * @deprecated
         */
        hasEnabled(arg0: $IModuleDataProvider_<never>): boolean;
        hasEnabled(arg0: $Holder_<$ModuleData<never>>): boolean;
        getModuleEnchantmentLevel(arg0: $Holder_<$Enchantment>): number;
        moduleBasedEnchantments(): $ItemEnchantments;
        typedModules(): $Map<$ModuleData<never>, $IModule<never>>;
        getHUDElements(arg0: $Player, arg1: $ItemStack_): $List<$IHUDElement>;
        moduleTypes(): $Set<$ModuleData<never>>;
    }
    export class $ModuleData<MODULE extends $ICustomModule<MODULE>> implements $IModuleDataProvider<MODULE> {
        create(arg0: $IModule<MODULE>): MODULE;
        getMaxStackSize(): number;
        getTranslationKey(): string;
        /**
         * @deprecated
         */
        getItemProvider(): $IItemProvider;
        isExclusive(arg0: number): boolean;
        getExclusiveFlags(): number;
        configCodecs(arg0: number): $Codec<$List<$ModuleConfig<never>>>;
        isNoDisable(): boolean;
        defaultConfigs(arg0: number): $List<$ModuleConfig<never>>;
        configStreamCodecs(arg0: number): $StreamCodec<$RegistryFriendlyByteBuf, $List<$ModuleConfig<never>>>;
        getNamedConfig(arg0: number, arg1: $ResourceLocation_): $ModuleConfig<never>;
        getItemHolder(): $Holder<$Item>;
        getModuleData(): $ModuleData<MODULE>;
        getDescriptionTranslationKey(): string;
        getRegistryName(): $ResourceLocation;
        getName(): string;
        getTextComponent(): $Component;
        constructor(arg0: $ModuleData$ModuleDataBuilder<MODULE>);
        get maxStackSize(): number;
        get translationKey(): string;
        get itemProvider(): $IItemProvider;
        get exclusiveFlags(): number;
        get noDisable(): boolean;
        get itemHolder(): $Holder<$Item>;
        get moduleData(): $ModuleData<MODULE>;
        get descriptionTranslationKey(): string;
        get registryName(): $ResourceLocation;
        get name(): string;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ModuleData}.
     */
    export type $ModuleData_<MODULE> = RegistryTypes.MekanismModule;
    export class $ICustomModule$ModuleDispenseResult extends $Enum<$ICustomModule$ModuleDispenseResult> {
        static values(): $ICustomModule$ModuleDispenseResult[];
        static valueOf(arg0: string): $ICustomModule$ModuleDispenseResult;
        static HANDLED: $ICustomModule$ModuleDispenseResult;
        static FAIL_PREVENT_DROP: $ICustomModule$ModuleDispenseResult;
        static DEFAULT: $ICustomModule$ModuleDispenseResult;
    }
    /**
     * Values that may be interpreted as {@link $ICustomModule$ModuleDispenseResult}.
     */
    export type $ICustomModule$ModuleDispenseResult_ = "handled" | "default" | "fail_prevent_drop";
    export class $IModule<MODULE extends $ICustomModule<MODULE>> {
    }
    export interface $IModule<MODULE extends $ICustomModule<MODULE>> {
        isEnabled(): boolean;
        getData(): $ModuleData<MODULE>;
        getConfig<TYPE>(arg0: $ResourceLocation_): $ModuleConfig<TYPE>;
        getDataHolder(): $Holder<$ModuleData<never>>;
        getBooleanConfigOrFalse(arg0: $ResourceLocation_): boolean;
        getUntypedData(): $ModuleData<never>;
        getInstalledCount(): number;
        handlesModeChange(): boolean;
        getCustomInstance(): MODULE;
        getEnergyContainer(arg0: $ItemStack_): $IEnergyContainer;
        canUseEnergy(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): boolean;
        canUseEnergy(arg0: $LivingEntity, arg1: $IEnergyContainer, arg2: number, arg3: boolean): boolean;
        canUseEnergy(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: boolean): boolean;
        hasEnoughEnergy(arg0: $ItemStack_, arg1: number): boolean;
        hasEnoughEnergy(arg0: $ItemStack_, arg1: $LongSupplier_): boolean;
        toggleEnabled(arg0: $IModuleContainer, arg1: $ItemStack_, arg2: $Player, arg3: $Component_): void;
        getContainerEnergy(arg0: $ItemStack_): number;
        getConfigOrThrow<TYPE>(arg0: $ResourceLocation_): $ModuleConfig<TYPE>;
        useEnergy(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number, arg3: boolean): number;
        useEnergy(arg0: $LivingEntity, arg1: $ItemStack_, arg2: number): number;
        useEnergy(arg0: $LivingEntity, arg1: $IEnergyContainer, arg2: number, arg3: boolean): number;
        handlesRadialModeChange(): boolean;
        handlesAnyModeChange(): boolean;
        displayModeChange(arg0: $Player, arg1: $Component_, arg2: $IHasTextComponent_): void;
        get enabled(): boolean;
        get data(): $ModuleData<MODULE>;
        get dataHolder(): $Holder<$ModuleData<never>>;
        get untypedData(): $ModuleData<never>;
        get installedCount(): number;
        get customInstance(): MODULE;
    }
    export interface $ModuleData<MODULE> extends RegistryMarked<RegistryTypes.MekanismModuleTag, RegistryTypes.MekanismModule> {}
    export class $ICustomModule<MODULE extends $ICustomModule<MODULE>> {
    }
    export interface $ICustomModule<MODULE extends $ICustomModule<MODULE>> {
        setMode<MODE extends $IRadialMode>(arg0: $IModule<MODULE>, arg1: $Player, arg2: $IModuleContainer, arg3: $ItemStack_, arg4: $RadialData<MODE>, arg5: MODE): boolean;
        getMode<MODE extends $IRadialMode>(arg0: $IModule<MODULE>, arg1: $ItemStack_, arg2: $RadialData<MODE>): MODE;
        onRemoved(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: boolean): void;
        tickClient(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $Player): void;
        tickServer(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $Player): void;
        canChangeRadialModeWhenDisabled(arg0: $IModule<MODULE>): boolean;
        getDamageAbsorbInfo(arg0: $IModule<MODULE>, arg1: $DamageSource_): $ICustomModule$ModuleDamageAbsorbInfo;
        canChangeModeWhenDisabled(arg0: $IModule<MODULE>): boolean;
        onAdded(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: boolean): void;
        adjustAttributes(arg0: $IModule<MODULE>, arg1: $ItemAttributeModifierEvent): void;
        canPerformAction(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $ItemAbility_): boolean;
        onItemUse(arg0: $IModule<MODULE>, arg1: $UseOnContext): $InteractionResult;
        addRadialModes(arg0: $IModule<MODULE>, arg1: $ItemStack_, arg2: $Consumer_<$NestedRadialMode>): void;
        onInteract(arg0: $IModule<MODULE>, arg1: $Player, arg2: $LivingEntity, arg3: $InteractionHand_, arg4: $IModuleContainer, arg5: $ItemStack_): $InteractionResult;
        addHUDElements(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $Player, arg4: $Consumer_<$IHUDElement>): void;
        onDispense(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $BlockSource_): $ICustomModule$ModuleDispenseResult;
        getModeScrollComponent(arg0: $IModule<MODULE>, arg1: $ItemStack_): $Component;
        addHUDStrings(arg0: $IModule<MODULE>, arg1: $IModuleContainer, arg2: $ItemStack_, arg3: $Player, arg4: $Consumer_<$Component>): void;
        changeMode(arg0: $IModule<MODULE>, arg1: $Player, arg2: $IModuleContainer, arg3: $ItemStack_, arg4: number, arg5: boolean): void;
    }
    export class $ICustomModule$ModuleDamageAbsorbInfo extends $Record {
        energyCost(): $LongSupplier;
        absorptionRatio(): $FloatSupplier;
        constructor(absorptionRatio: $FloatSupplier_, energyCost: $LongSupplier_);
    }
    /**
     * Values that may be interpreted as {@link $ICustomModule$ModuleDamageAbsorbInfo}.
     */
    export type $ICustomModule$ModuleDamageAbsorbInfo_ = { absorptionRatio?: $FloatSupplier_, energyCost?: $LongSupplier_,  } | [absorptionRatio?: $FloatSupplier_, energyCost?: $LongSupplier_, ];
}
