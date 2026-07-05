import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $CreativeModeTab_, $Item$Properties, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $FlowingFluid, $Fluid } from "@package/net/minecraft/world/level/material";
import { $ResourceKey_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $EntityType } from "@package/net/minecraft/world/entity";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $DeferredSupplier } from "@package/dev/architectury/registry/registries";

declare module "@package/dev/architectury/extensions/injected" {
    export class $InjectedRegistryEntryExtension<T> {
    }
    export interface $InjectedRegistryEntryExtension<T> {
        arch$registryName(): $ResourceLocation;
        arch$holder(): $Holder<T>;
    }
    /**
     * Values that may be interpreted as {@link $InjectedRegistryEntryExtension}.
     */
    export type $InjectedRegistryEntryExtension_<T> = (() => $Holder_<T>);
    export class $InjectedFluidExtension {
    }
    export interface $InjectedFluidExtension extends $InjectedRegistryEntryExtension<$Fluid> {
        arch$holder(): $Holder<$Fluid>;
    }
    export class $InjectedBlockExtension {
    }
    export interface $InjectedBlockExtension extends $InjectedRegistryEntryExtension<$Block> {
        arch$holder(): $Holder<$Block>;
    }
    export class $InjectedBucketItemExtension {
    }
    export interface $InjectedBucketItemExtension {
        arch$getFluid(): $Fluid;
    }
    export class $InjectedItemPropertiesExtension {
    }
    export interface $InjectedItemPropertiesExtension {
        arch$tab(tab: $CreativeModeTab_): $Item$Properties;
        arch$tab(tab: $DeferredSupplier<$CreativeModeTab_>): $Item$Properties;
        arch$tab(tab: $ResourceKey_<$CreativeModeTab>): $Item$Properties;
    }
    export class $InjectedEntityTypeExtension {
    }
    export interface $InjectedEntityTypeExtension extends $InjectedRegistryEntryExtension<$EntityType<never>> {
        arch$holder(): $Holder<$EntityType<never>>;
    }
    export class $InjectedItemExtension {
    }
    export interface $InjectedItemExtension extends $InjectedRegistryEntryExtension<$Item> {
        arch$holder(): $Holder<$Item>;
    }
    export class $InjectedLiquidBlockExtension {
    }
    export interface $InjectedLiquidBlockExtension {
        arch$getFluid(): $FlowingFluid;
    }
}
