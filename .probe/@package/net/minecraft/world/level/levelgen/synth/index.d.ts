import { $Holder } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $DoubleList } from "@package/it/unimi/dsi/fastutil/doubles";
import { $Record, $StringBuilder } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/synth" {
    /**
     * This samples the sum of two individual samplers of perlin noise octaves.
     * The input coordinates are scaled by `#INPUT_FACTOR`, and the result is scaled by `#valueFactor`.
     */
    export class $NormalNoise {
        getValue(x: number, arg1: number, y: number): number;
        parameters(): $NormalNoise$NoiseParameters;
        static create(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        static create(random: $RandomSource, firstOctave: number, ...amplitudes: number[]): $NormalNoise;
        maxValue(): number;
        /**
         * @deprecated
         */
        static createLegacyNetherBiome(random: $RandomSource, parameters: $NormalNoise$NoiseParameters_): $NormalNoise;
        parityConfigString(builder: $StringBuilder): void;
    }
    /**
     * This class generates multiple octaves of simplex noise. Each individual octave is an instance of `SimplexNoise`.
     * Mojang uses the term 'Perlin' to describe octaves or fBm (Fractal Brownian Motion) noise and this class does not actually generate Perlin noise.
     */
    export class $PerlinSimplexNoise {
        getValue(x: number, arg1: number, y: boolean): number;
        constructor(random: $RandomSource, octaves: $List_<number>);
    }
    export class $NormalNoise$NoiseParameters extends $Record {
        firstOctave(): number;
        amplitudes(): $DoubleList;
        static CODEC: $Codec<$Holder<$NormalNoise$NoiseParameters>>;
        static DIRECT_CODEC: $Codec<$NormalNoise$NoiseParameters>;
        constructor(arg0: number, arg1: $DoubleList);
        constructor(firstOctave: number, amplitude: number, ...arg2: number[]);
        constructor(firstOctave: number, amplitudes: $List_<number>);
    }
    /**
     * Values that may be interpreted as {@link $NormalNoise$NoiseParameters}.
     */
    export type $NormalNoise$NoiseParameters_ = RegistryTypes.WorldgenNoise | { amplitudes?: $DoubleList, firstOctave?: number,  } | [amplitudes?: $DoubleList, firstOctave?: number, ];
    export interface $NormalNoise$NoiseParameters extends RegistryMarked<RegistryTypes.WorldgenNoiseTag, RegistryTypes.WorldgenNoise> {}
}
