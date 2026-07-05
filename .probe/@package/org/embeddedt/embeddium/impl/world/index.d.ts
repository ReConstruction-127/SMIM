import { $ClientLevel } from "@package/net/minecraft/client/multiplayer";
import { $EmbeddiumWorldRenderer } from "@package/org/embeddedt/embeddium/impl/render";
import { $PalettedContainerRO } from "@package/net/minecraft/world/level/chunk";

declare module "@package/org/embeddedt/embeddium/impl/world" {
    export class $WorldRendererExtended {
    }
    export interface $WorldRendererExtended {
        sodium$getWorldRenderer(): $EmbeddiumWorldRenderer;
    }
    /**
     * Values that may be interpreted as {@link $WorldRendererExtended}.
     */
    export type $WorldRendererExtended_ = (() => $EmbeddiumWorldRenderer);
    export class $BiomeSeedProvider {
        static getBiomeSeed(arg0: $ClientLevel): number;
    }
    export interface $BiomeSeedProvider {
        sodium$getBiomeSeed(): number;
    }
    /**
     * Values that may be interpreted as {@link $BiomeSeedProvider}.
     */
    export type $BiomeSeedProvider_ = (() => number);
    export class $ReadableContainerExtended<T> {
        static clone<T>(arg0: $PalettedContainerRO<T>): $PalettedContainerRO<T>;
        static of<T>(arg0: $PalettedContainerRO<T>): $ReadableContainerExtended<T>;
    }
    export interface $ReadableContainerExtended<T> {
        sodium$copy(): $PalettedContainerRO<T>;
        sodium$unpack(arg0: T[], arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        sodium$unpack(arg0: T[]): void;
    }
}
