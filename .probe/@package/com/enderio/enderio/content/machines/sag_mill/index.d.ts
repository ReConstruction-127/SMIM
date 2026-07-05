import { $TagKey, $TagKey_ } from "@package/net/minecraft/tags";
import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Either } from "@package/com/mojang/datafixers/util";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $SagMillOutputItem } from "@package/com/almostreliable/kubeio/binding";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/content/machines/sag_mill" {
    export class $SagMillingRecipe$BonusType extends $Enum<$SagMillingRecipe$BonusType> implements $StringRepresentable {
        static values(): $SagMillingRecipe$BonusType[];
        static valueOf(arg0: string): $SagMillingRecipe$BonusType;
        getSerializedName(): string;
        useGrindingBall(): boolean;
        doChance(): boolean;
        canMultiply(): boolean;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$SagMillingRecipe$BonusType>;
        static MULTIPLY_OUTPUT: $SagMillingRecipe$BonusType;
        static BY_ID: $IntFunction<$SagMillingRecipe$BonusType>;
        static CHANCE_ONLY: $SagMillingRecipe$BonusType;
        static NONE: $SagMillingRecipe$BonusType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $SagMillingRecipe$BonusType>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $SagMillingRecipe$BonusType}.
     */
    export type $SagMillingRecipe$BonusType_ = "none" | "multiply_output" | "chance_only";
    export class $SagMillingRecipe$OutputItem$SizedTagOutput extends $Record {
        count(): number;
        itemTag(): $TagKey<$Item>;
        getItemStack(): $ItemStack;
        constructor(itemTag: $TagKey_<$Item>, count: number);
        get itemStack(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $SagMillingRecipe$OutputItem$SizedTagOutput}.
     */
    export type $SagMillingRecipe$OutputItem$SizedTagOutput_ = { count?: number, itemTag?: $TagKey_<$Item>,  } | [count?: number, itemTag?: $TagKey_<$Item>, ];
    export class $SagMillingRecipe$OutputItem extends $Record implements $SagMillOutputItem {
        static ofTag(arg0: $TagKey_<$Item>, arg1: number, arg2: number, arg3: boolean): $SagMillingRecipe$OutputItem;
        static of(arg0: $ItemStack_, arg1: number, arg2: boolean): $SagMillingRecipe$OutputItem;
        isPresent(): boolean;
        output(): $Either<$ItemStack, $SagMillingRecipe$OutputItem$SizedTagOutput>;
        getItemStack(): $ItemStack;
        isOptional(): boolean;
        chance(): number;
        static CODEC: $Codec<$SagMillingRecipe$OutputItem>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $SagMillingRecipe$OutputItem>;
        constructor(output: $Either<$ItemStack_, $SagMillingRecipe$OutputItem$SizedTagOutput_>, chance: number, isOptional: boolean);
        get present(): boolean;
        get itemStack(): $ItemStack;
        get optional(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SagMillingRecipe$OutputItem}.
     */
    export type $SagMillingRecipe$OutputItem_ = { chance?: number, output?: $Either<$ItemStack_, $SagMillingRecipe$OutputItem$SizedTagOutput_>, isOptional?: boolean,  } | [chance?: number, output?: $Either<$ItemStack_, $SagMillingRecipe$OutputItem$SizedTagOutput_>, isOptional?: boolean, ];
}
