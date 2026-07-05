import { $DifficultyInstance } from "@package/net/minecraft/world";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ItemEnchantments$Mutable } from "@package/net/minecraft/world/item/enchantment";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/item/enchantment/providers" {
    export class $EnchantmentProvider {
        static DIRECT_CODEC: $Codec<$EnchantmentProvider>;
    }
    export interface $EnchantmentProvider {
        codec(): $MapCodec<$EnchantmentProvider>;
        enchant(stack: $ItemStack_, enchantments: $ItemEnchantments$Mutable, random: $RandomSource, difficulty: $DifficultyInstance): void;
    }
    /**
     * Values that may be interpreted as {@link $EnchantmentProvider}.
     */
    export type $EnchantmentProvider_ = RegistryTypes.EnchantmentProvider;
    export interface $EnchantmentProvider extends RegistryMarked<RegistryTypes.EnchantmentProviderTag, RegistryTypes.EnchantmentProvider> {}
}
