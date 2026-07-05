import { $Level } from "@package/net/minecraft/world/level";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item } from "@package/net/minecraft/world/item";
import { $ItemWithFallbacks } from "@package/com/bmaster/createrns/util/codec";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Structure } from "@package/net/minecraft/world/level/levelgen/structure";

declare module "@package/com/bmaster/createrns/content/deposit/spec" {
    export interface $DepositSpec extends RegistryMarked<RegistryTypes.CreateRnsDepositSpecTag, RegistryTypes.CreateRnsDepositSpec> {}
    export class $DepositSpec {
        initialize(arg0: $RegistryAccess): boolean;
        structureKey(): $ResourceKey<$Structure>;
        getMapIcon(): $ItemStack;
        getScannerIcon(): $Item;
        static CODEC: $Codec<$DepositSpec>;
        static REGISTRY_KEY: $ResourceKey<$Registry<$DepositSpec>>;
        dimension: $ResourceKey<$Level>;
        structure: $ResourceLocation;
        constructor(arg0: $ItemWithFallbacks, arg1: $ItemWithFallbacks, arg2: $ResourceLocation_, arg3: $ResourceKey_<$Level>);
        get mapIcon(): $ItemStack;
        get scannerIcon(): $Item;
    }
    /**
     * Values that may be interpreted as {@link $DepositSpec}.
     */
    export type $DepositSpec_ = RegistryTypes.CreateRnsDepositSpec;
}
