import { $ItemLike } from "@package/net/minecraft/world/level";
import { $ChemicalStack, $Chemical, $Chemical_ } from "@package/mekanism/api/chemical";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $IHasTranslationKey, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ICustomModule, $ModuleData_, $ModuleData } from "@package/mekanism/api/gear";

declare module "@package/mekanism/api/providers" {
    /**
     * @deprecated
     */
    export class $IBaseProvider {
    }
    export interface $IBaseProvider extends $IHasTextComponent, $IHasTranslationKey {
        getName(): string;
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        get name(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
    }
    /**
     * @deprecated
     */
    export class $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> {
    }
    export interface $IModuleDataProvider<MODULE extends $ICustomModule<MODULE>> extends $IBaseProvider {
        getTranslationKey(): string;
        getRegistryName(): $ResourceLocation;
        getModuleData(): $ModuleData<MODULE>;
        get translationKey(): string;
        get registryName(): $ResourceLocation;
        get moduleData(): $ModuleData<MODULE>;
    }
    /**
     * Values that may be interpreted as {@link $IModuleDataProvider}.
     */
    export type $IModuleDataProvider_<MODULE> = (() => $ModuleData_<MODULE>);
    /**
     * @deprecated
     */
    export class $IChemicalProvider {
    }
    export interface $IChemicalProvider extends $IBaseProvider {
        getStack(arg0: number): $ChemicalStack;
        getTranslationKey(): string;
        getRegistryName(): $ResourceLocation;
        getChemical(): $Chemical;
        getTextComponent(): $Component;
        get translationKey(): string;
        get registryName(): $ResourceLocation;
        get chemical(): $Chemical;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IChemicalProvider}.
     */
    export type $IChemicalProvider_ = (() => $Chemical_);
    /**
     * @deprecated
     */
    export class $IItemProvider {
    }
    export interface $IItemProvider extends $IBaseProvider, $ItemLike {
        getItemStack(): $ItemStack;
        getItemStack(arg0: number): $ItemStack;
        getTranslationKey(): string;
        getRegistryName(): $ResourceLocation;
        getTextComponent(): $Component;
        get translationKey(): string;
        get registryName(): $ResourceLocation;
        get textComponent(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $IItemProvider}.
     */
    export type $IItemProvider_ = (() => void);
}
