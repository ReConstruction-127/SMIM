import { $Holder_, $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $ArmorMaterial, $Item_, $Item } from "@package/net/minecraft/world/item";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $Map_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/world/item/armortrim" {
    export class $TrimMaterial extends $Record {
        static create(assetName: string, ingredient: $Item_, itemModelIndex: number, description: $Component_, overrideArmorMaterials: $Map_<$Holder_<$ArmorMaterial>, string>): $TrimMaterial;
        description(): $Component;
        itemModelIndex(): number;
        assetName(): string;
        overrideArmorMaterials(): $Map<$Holder<$ArmorMaterial>, string>;
        ingredient(): $Holder<$Item>;
        static CODEC: $Codec<$Holder<$TrimMaterial>>;
        static DIRECT_CODEC: $Codec<$TrimMaterial>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimMaterial>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimMaterial>>;
        constructor(arg0: string, arg1: $Holder_<$Item>, arg2: number, arg3: $Map_<$Holder_<$ArmorMaterial>, string>, arg4: $Component_);
    }
    /**
     * Values that may be interpreted as {@link $TrimMaterial}.
     */
    export type $TrimMaterial_ = RegistryTypes.TrimMaterial | { description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ingredient?: $Holder_<$Item>,  } | [description?: $Component_, assetName?: string, itemModelIndex?: number, overrideArmorMaterials?: $Map_<$Holder_<$ArmorMaterial>, string>, ingredient?: $Holder_<$Item>, ];
    export class $TrimPattern extends $Record {
        description(): $Component;
        templateItem(): $Holder<$Item>;
        copyWithStyle(trimMaterial: $Holder_<$TrimMaterial>): $Component;
        decal(): boolean;
        assetId(): $ResourceLocation;
        static CODEC: $Codec<$Holder<$TrimPattern>>;
        static DIRECT_CODEC: $Codec<$TrimPattern>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TrimPattern>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$TrimPattern>>;
        constructor(arg0: $ResourceLocation_, arg1: $Holder_<$Item>, arg2: $Component_, arg3: boolean);
    }
    /**
     * Values that may be interpreted as {@link $TrimPattern}.
     */
    export type $TrimPattern_ = RegistryTypes.TrimPattern | { assetId?: $ResourceLocation_, description?: $Component_, templateItem?: $Holder_<$Item>, decal?: boolean,  } | [assetId?: $ResourceLocation_, description?: $Component_, templateItem?: $Holder_<$Item>, decal?: boolean, ];
    export interface $TrimMaterial extends RegistryMarked<RegistryTypes.TrimMaterialTag, RegistryTypes.TrimMaterial> {}
    export interface $TrimPattern extends RegistryMarked<RegistryTypes.TrimPatternTag, RegistryTypes.TrimPattern> {}
}
