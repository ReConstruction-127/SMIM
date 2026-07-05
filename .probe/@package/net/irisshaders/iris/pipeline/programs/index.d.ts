import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ResourceProvider, $ResourceProvider_ } from "@package/net/minecraft/server/packs/resources";

declare module "@package/net/irisshaders/iris/pipeline/programs" {
    export class $ShaderInstanceInterface {
    }
    export interface $ShaderInstanceInterface {
        iris$createExtraShaders(arg0: $ResourceProvider_, arg1: $ResourceLocation_): void;
    }
    /**
     * Values that may be interpreted as {@link $ShaderInstanceInterface}.
     */
    export type $ShaderInstanceInterface_ = ((arg0: $ResourceProvider, arg1: $ResourceLocation) => void);
}
