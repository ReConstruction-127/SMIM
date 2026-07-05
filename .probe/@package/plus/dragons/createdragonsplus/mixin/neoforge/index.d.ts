import { $PackType, $PackType_ } from "@package/net/minecraft/server/packs";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";

declare module "@package/plus/dragons/createdragonsplus/mixin/neoforge" {
    export class $ExistingFileHelperAccessor {
    }
    export interface $ExistingFileHelperAccessor {
        invokeGetManager(arg0: $PackType_): $ResourceManager;
    }
    /**
     * Values that may be interpreted as {@link $ExistingFileHelperAccessor}.
     */
    export type $ExistingFileHelperAccessor_ = ((arg0: $PackType) => $ResourceManager);
}
