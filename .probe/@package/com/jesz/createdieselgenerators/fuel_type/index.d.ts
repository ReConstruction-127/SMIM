import { $HolderSet_, $HolderLookup$RegistryLookup, $HolderSet } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $EngineTypes_ } from "@package/com/jesz/createdieselgenerators/content/diesel_engine";
import { $Record } from "@package/java/lang";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/com/jesz/createdieselgenerators/fuel_type" {
    export interface $FuelType extends RegistryMarked<RegistryTypes.CreatedieselgeneratorsFuelTypeTag, RegistryTypes.CreatedieselgeneratorsFuelType> {}
    export class $FuelType extends $Record {
        normal(): $FuelType$PerEngineProperties;
        soundPitch(): number;
        static getTypeFor(arg0: $HolderLookup$RegistryLookup<$FuelType_>, arg1: $Fluid_): $FuelType;
        fluid(): $HolderSet<$Fluid>;
        isFlammable(): boolean;
        getGenerated(arg0: $EngineTypes_): $FuelType$PerEngineProperties;
        getGenerated(arg0: $BlockEntity): $FuelType$PerEngineProperties;
        modular(): $FuelType$PerEngineProperties;
        huge(): $FuelType$PerEngineProperties;
        burnerStrength(): number;
        static CODEC: $Codec<$FuelType>;
        static NCODEC: $Codec<$FuelType>;
        static EMPTY: $FuelType;
        constructor(fluid: $HolderSet_<$Fluid>, normal: $FuelType$PerEngineProperties_, modular: $FuelType$PerEngineProperties_, huge: $FuelType$PerEngineProperties_, soundPitch: number, burnerStrength: number);
        get flammable(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $FuelType}.
     */
    export type $FuelType_ = RegistryTypes.CreatedieselgeneratorsFuelType | { modular?: $FuelType$PerEngineProperties_, fluid?: $HolderSet_<$Fluid>, huge?: $FuelType$PerEngineProperties_, normal?: $FuelType$PerEngineProperties_, burnerStrength?: number, soundPitch?: number,  } | [modular?: $FuelType$PerEngineProperties_, fluid?: $HolderSet_<$Fluid>, huge?: $FuelType$PerEngineProperties_, normal?: $FuelType$PerEngineProperties_, burnerStrength?: number, soundPitch?: number, ];
    export class $FuelType$PerEngineProperties extends $Record {
        strength(): number;
        speed(): number;
        burn(): number;
        static CODEC: $Codec<$FuelType$PerEngineProperties>;
        constructor(speed: number, strength: number, burn: number);
    }
    /**
     * Values that may be interpreted as {@link $FuelType$PerEngineProperties}.
     */
    export type $FuelType$PerEngineProperties_ = { burn?: number, strength?: number, speed?: number,  } | [burn?: number, strength?: number, speed?: number, ];
}
