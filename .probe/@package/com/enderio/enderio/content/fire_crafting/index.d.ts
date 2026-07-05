import { $FireCraftingResultMixin } from "@package/com/almostreliable/kubeio/mixin";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $FireCraftingResult } from "@package/com/almostreliable/kubeio/binding";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/content/fire_crafting" {
    export class $FireCraftingRecipe$Result extends $Record implements $FireCraftingResult, $FireCraftingResultMixin {
        result(): $ItemStack;
        minCount(): number;
        maxCount(): number;
        chance(): number;
        static CODEC: $Codec<$FireCraftingRecipe$Result>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FireCraftingRecipe$Result>;
        constructor(result: $ItemStack_, minCount: number, maxCount: number, chance: number);
    }
    /**
     * Values that may be interpreted as {@link $FireCraftingRecipe$Result}.
     */
    export type $FireCraftingRecipe$Result_ = { maxCount?: number, chance?: number, result?: $ItemStack_, minCount?: number,  } | [maxCount?: number, chance?: number, result?: $ItemStack_, minCount?: number, ];
}
