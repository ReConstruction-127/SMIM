import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $MachineBlockEntity } from "@package/aztech/modern_industrialization/machines";
import { $List_ } from "@package/java/util";
import { $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/machines/recipe/condition" {
    export class $MachineProcessCondition$Context {
    }
    export interface $MachineProcessCondition$Context {
        getLevel(): $ServerLevel;
        getBlockEntity(): $MachineBlockEntity;
        get level(): $ServerLevel;
        get blockEntity(): $MachineBlockEntity;
    }
    /**
     * Values that may be interpreted as {@link $MachineProcessCondition$Context}.
     */
    export type $MachineProcessCondition$Context_ = (() => $MachineBlockEntity);
    export class $MachineProcessCondition {
        static CODEC: $Codec<$MachineProcessCondition>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $MachineProcessCondition>;
    }
    export interface $MachineProcessCondition {
        codec(): $MapCodec<$MachineProcessCondition>;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, $MachineProcessCondition>;
        icon(): $ItemStack;
        canProcessRecipe(arg0: $MachineProcessCondition$Context_, arg1: $MachineRecipe): boolean;
        appendDescription(arg0: $List_<$Component_>): void;
    }
}
