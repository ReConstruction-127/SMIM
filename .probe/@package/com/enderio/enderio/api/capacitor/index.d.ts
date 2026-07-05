import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Collection_, $List } from "@package/java/util";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $RandomSource, $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/api/capacitor" {
    export class $CapacitorModifier extends $Enum<$CapacitorModifier> implements $StringRepresentable {
        static values(): $CapacitorModifier[];
        static valueOf(arg0: string): $CapacitorModifier;
        getSerializedName(): string;
        static getRandomModifier(arg0: $RandomSource): ($CapacitorModifier) | undefined;
        static getRandomModifier(arg0: $RandomSource, arg1: $Collection_<$CapacitorModifier_>): ($CapacitorModifier) | undefined;
        getRemappedEnumConstantName(): string;
        static ENERGY_USE: $CapacitorModifier;
        static CODEC: $Codec<$CapacitorModifier>;
        static ENERGY_CAPACITY: $CapacitorModifier;
        static FUEL_EFFICIENCY: $CapacitorModifier;
        static FIXED: $CapacitorModifier;
        static BY_ID: $IntFunction<$CapacitorModifier>;
        modifierId: $ResourceLocation;
        static SELECTABLE_MODIFIERS: $List<$CapacitorModifier>;
        static BURNING_ENERGY_GENERATION: $CapacitorModifier;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $CapacitorModifier>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $CapacitorModifier}.
     */
    export type $CapacitorModifier_ = "energy_capacity" | "energy_use" | "fuel_efficiency" | "burning_energy_generation" | "fixed";
}
