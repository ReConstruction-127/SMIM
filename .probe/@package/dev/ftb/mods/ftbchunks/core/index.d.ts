
declare module "@package/dev/ftb/mods/ftbchunks/core" {
    export class $BlockStateFTBC {
    }
    export interface $BlockStateFTBC {
        getFTBCIsWater(): boolean;
        get FTBCIsWater(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $BlockStateFTBC}.
     */
    export type $BlockStateFTBC_ = (() => boolean);
    export class $BiomeFTBC {
    }
    export interface $BiomeFTBC {
        setFTBCBiomeColorIndex(arg0: number): void;
        getFTBCBiomeColorIndex(): number;
    }
}
