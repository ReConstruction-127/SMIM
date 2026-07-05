import { $Registry } from "@package/net/minecraft/core";
import { $CapacitorModifier_ } from "@package/com/enderio/enderio/api/capacitor";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/com/almostreliable/kubeio/builder" {
    export class $CapacitorBuilder extends $ItemBuilder {
        baseValue(arg0: number): $CapacitorBuilder;
        hideFromCreativeTab(): $CapacitorBuilder;
        modifierValue(arg0: $CapacitorModifier_, arg1: number): $CapacitorBuilder;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
