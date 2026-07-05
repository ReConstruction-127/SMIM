import { $SoundEngine } from "@package/net/minecraft/client/sounds";

declare module "@package/de/keksuccino/melody/mixin/mixins/common/client" {
    export class $IMixinSoundManager {
    }
    export interface $IMixinSoundManager {
        getSoundEngineMelody(): $SoundEngine;
        get soundEngineMelody(): $SoundEngine;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSoundManager}.
     */
    export type $IMixinSoundManager_ = (() => $SoundEngine);
    export class $IMixinSoundEngine {
    }
    export interface $IMixinSoundEngine {
        getLoadedMelody(): boolean;
        get loadedMelody(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IMixinSoundEngine}.
     */
    export type $IMixinSoundEngine_ = (() => boolean);
}
