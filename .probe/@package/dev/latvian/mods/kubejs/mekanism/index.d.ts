import { $TagKey_ } from "@package/net/minecraft/tags";
import { $DataResult } from "@package/com/mojang/serialization";
import { $Item } from "@package/net/minecraft/world/item";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $List_ } from "@package/java/util";
import { $ChemicalStackIngredient } from "@package/mekanism/api/recipes/ingredients";
import { $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $ChemicalStack, $Chemical } from "@package/mekanism/api/chemical";
import { $Holder_, $Holder, $Registry } from "@package/net/minecraft/core";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $ChemicalIngredient } from "@package/mekanism/api/recipes/ingredients/chemical";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/mekanism" {
    export class $KubeChemicalBuilder$Pigment extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$CleanSlurry extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$Liquid extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $MekanismChemicalWrapper {
        static stack(chemical: $Holder_<$Chemical>, amount: number): $ChemicalStack;
        static of(from: $Object): $Holder<$Chemical>;
        static read(reader: $StringReader): $DataResult<$Holder<$Chemical>>;
        static readStackIngredient(reader: $StringReader): $DataResult<$ChemicalStackIngredient>;
        static ingredientIntersection(children: $List_<$ChemicalIngredient>): $ChemicalIngredient;
        static stackOf(from: $Object): $ChemicalStack;
        static readStack(reader: $StringReader): $DataResult<$ChemicalStack>;
        static readIngredient(reader: $StringReader): $DataResult<$ChemicalIngredient>;
        static ingredientStack(ingredient: $ChemicalIngredient, amount: number): $ChemicalStackIngredient;
        static ingredientExcept(ingredient: $ChemicalIngredient, except: $ChemicalIngredient): $ChemicalIngredient;
        static ingredientOf(from: $Object): $ChemicalIngredient;
        static stackIngredientOf(from: $Object): $ChemicalStackIngredient;
        static EMPTY_STACK_RESULT: $DataResult<$ChemicalStack>;
        static CHEMICAL_STACK_INGREDIENT_TYPE_INFO: $TypeInfo;
        static CHEMICAL_STACK_TYPE_INFO: $TypeInfo;
        static CHEMICAL_INGREDIENT_TYPE_INFO: $TypeInfo;
        static CHEMICAL_HOLDER_TYPE_INFO: $TypeInfo;
        static EMPTY_INGREDIENT_RESULT: $DataResult<$ChemicalIngredient>;
        static CHEMICAL_TYPE_INFO: $TypeInfo;
    }
    export interface $MekanismChemicalWrapper {
    }
    export class $KubeChemicalBuilder$DirtySlurry extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$Default extends $KubeChemicalBuilder {
        texture(texture: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder$InfuseType extends $KubeChemicalBuilder {
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
    export class $KubeChemicalBuilder extends $BuilderBase<$Chemical> {
        ore(oreTag: $TagKey_<$Item>): this;
        tint(tint: $KubeColor_): this;
        fuel(burnTicks: $TickDuration_, energyDensity: number): this;
        gaseous(): this;
        radiation(radioactivity: number): this;
        heatedCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number, temperature: number): this;
        heatedCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number): this;
        cooledCoolant(chemical: $Holder_<$Chemical>, thermalEnthalpy: number, conductivity: number): this;
        registryKey: $ResourceKey<$Registry<$Chemical>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
}
