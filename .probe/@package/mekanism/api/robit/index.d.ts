import { $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Component } from "@package/net/minecraft/network/chat";
import { $ResourceLocation, $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";

declare module "@package/mekanism/api/robit" {
    export interface $RobitSkin extends RegistryMarked<RegistryTypes.MekanismRobitSkinTag, RegistryTypes.MekanismRobitSkin> {}
    export class $RobitSkin {
        static getTranslatedName(arg0: $ResourceKey_<$RobitSkin>): $Component;
        static getTranslationKey(arg0: $ResourceKey_<$RobitSkin>): string;
    }
    export interface $RobitSkin {
        textures(): $List<$ResourceLocation>;
        codec(): $MapCodec<$RobitSkin>;
        customModel(): $ResourceLocation;
        isUnlocked(arg0: $Player): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RobitSkin}.
     */
    export type $RobitSkin_ = RegistryTypes.MekanismRobitSkin;
}
