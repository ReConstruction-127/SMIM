import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $LayeredDraw$Layer_, $LayeredDraw$Layer } from "@package/net/minecraft/client/gui";
export * as map from "@package/net/neoforged/neoforge/client/gui/map";

declare module "@package/net/neoforged/neoforge/client/gui" {
    export class $GuiLayerManager$NamedLayer extends $Record {
        name(): $ResourceLocation;
        layer(): $LayeredDraw$Layer;
        constructor(name: $ResourceLocation_, layer: $LayeredDraw$Layer_);
    }
    /**
     * Values that may be interpreted as {@link $GuiLayerManager$NamedLayer}.
     */
    export type $GuiLayerManager$NamedLayer_ = { layer?: $LayeredDraw$Layer_, name?: $ResourceLocation_,  } | [layer?: $LayeredDraw$Layer_, name?: $ResourceLocation_, ];
}
