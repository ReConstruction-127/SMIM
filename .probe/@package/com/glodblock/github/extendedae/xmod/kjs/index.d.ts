import { $Supplier_ } from "@package/java/util/function";
import { $Registry } from "@package/net/minecraft/core";
import { $Item } from "@package/net/minecraft/world/item";
import { $ResourceLocation, $ResourceLocation_, $ResourceKey } from "@package/net/minecraft/resources";
import { $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $AEKey } from "@package/appeng/api/stacks";

declare module "@package/com/glodblock/github/extendedae/xmod/kjs" {
    export class $InfinityCellBuilder extends $ItemBuilder {
        /**
         * Create an infinity cell with given AEKey.
         */
        type(arg0: $Supplier_<$AEKey>): this;
        /**
         * Create an infinity cell with given fluid.
         */
        fluidType(arg0: $ResourceLocation_): this;
        /**
         * Create an infinity cell with given item.
         */
        itemType(arg0: $ResourceLocation_): this;
        /**
         * Set infinity cell's model in ME drive.
         */
        cellModel(arg0: $ResourceLocation_): this;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        registryKey: $ResourceKey<$Registry<$Item>>;
        constructor(arg0: $ResourceLocation_);
    }
}
