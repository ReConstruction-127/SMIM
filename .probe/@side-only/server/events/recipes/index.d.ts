import { $TagKey_ } from "@package/net/minecraft/tags";
import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Ingredient_, $CraftingBookCategory_, $CookingBookCategory_ } from "@package/net/minecraft/world/item/crafting";
import { $MobCategory_ } from "@package/net/minecraft/world/entity";
import { $FluidStack_ } from "@package/net/neoforged/neoforge/fluids";
import { $TankKubeRecipe, $FireCraftingKubeRecipe, $AlloySmelterKubeRecipe } from "@package/com/almostreliable/kubeio/recipe";
import { $Map_, $List_ } from "@package/java/util";
import { $SagMillingRecipe$BonusType_ } from "@package/com/enderio/enderio/content/machines/sag_mill";
import { $HeatCondition_, $ProcessingOutput } from "@package/com/simibubi/create/content/processing/recipe";
import { $ChemicalStackIngredient } from "@package/mekanism/api/recipes/ingredients";
import { $SizedFluidIngredient } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $KubeRecipe } from "@package/dev/latvian/mods/kubejs/recipe";
import { $ChemicalStack } from "@package/mekanism/api/chemical";
import { $TickDuration_ } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $MachineProcessCondition } from "@package/aztech/modern_industrialization/machines/recipe/condition";
import { $MachineKubeRecipe } from "@package/aztech/modern_industrialization/compat/kubejs/recipe";
import { $LevelStem } from "@package/net/minecraft/world/level/dimension";
import { $SizedIngredient_ } from "@package/net/neoforged/neoforge/common/crafting";

declare module "@side-only/server/events/recipes" {
    export class Mekanism$PigmentExtracting extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$Cutting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$ChemicalConversion extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$Milling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$MechanicalCrafting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        acceptMirrored(acceptMirrored: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Enderio$Slicing extends $KubeRecipe {
        energy(energy: number): this;
    }
    export class ModernIndustrialization$Assembler extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Stonecutting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
    }
    export class Create$Crushing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Haunting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Enderio$FireCrafting extends $FireCraftingKubeRecipe {
        blockAfterBurning(blockAfterBurning: $Block_): this;
        dimensions(dimensions: $List_<$ResourceKey_<$LevelStem>>): this;
    }
    export class Minecraft$CampfireCooking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class ModernIndustrialization$Unpacker extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Enderio$Tank extends $TankKubeRecipe {
    }
    export class Enderio$SoulBinding extends $KubeRecipe {
        energy(energy: number): this;
        experience(experience: number): this;
        entityType(entityType: $TagKey_<any>): this;
        mobCategory(mobCategory: $MobCategory_): this;
        soulData(soulData: string): this;
    }
    export class Mekanism$Painting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$Pressurizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Reaction extends $KubeRecipe {
        itemInput(itemInput: $SizedIngredient_): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        itemOutput(itemOutput: $ItemStack_): this;
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        energyRequired(energyRequired: number): this;
    }
    export class Minecraft$CraftingShapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class Create$ItemApplication extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Pressing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$BlastFurnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Crushing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class ModernIndustrialization$Wiremill extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smoking extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class ModernIndustrialization$Polarizer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$SmithingTransform extends $KubeRecipe {
        result(result: $ItemStack_): this;
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Enderio$Painting extends $KubeRecipe {
    }
    export class ModernIndustrialization$Packer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$PigmentMixing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Minecraft$SmithingTrim extends $KubeRecipe {
        template(template: $Ingredient_): this;
        base(base: $Ingredient_): this;
        addition(addition: $Ingredient_): this;
    }
    export class Mekanism$ChemicalInfusing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        leftInput(leftInput: $ChemicalStackIngredient): this;
        rightInput(rightInput: $ChemicalStackIngredient): this;
    }
    export class Mekanism$Compressing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Mekanism$Evaporating extends $KubeRecipe {
        output(output: $FluidStack_): this;
        input(input: $SizedFluidIngredient): this;
    }
    export class ModernIndustrialization$Centrifuge extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$HeatExchanger extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Electrolyzer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Combining extends $KubeRecipe {
        output(output: $ItemStack_): this;
        mainInput(mainInput: $SizedIngredient_): this;
        extraInput(extraInput: $SizedIngredient_): this;
    }
    export class Minecraft$CraftingShaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Mekanism$Activating extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Create$Deploying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        keepHeldItem(keepHeldItem: boolean): this;
        superheated(): this;
        heated(): this;
        keepHeldItem(): this;
    }
    export class Create$Splashing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$ChemicalReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class DocumentedRecipes {
        minecraft: {
            blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
            crafting_shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Minecraft$CraftingShapeless;
            smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
            crafting_shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Minecraft$CraftingShaped;
            smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
            stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
            smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
            smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
            campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
        }
        kubejs: {
            shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
            shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        }
        enderio: {
            alloy_smelting(energy?: number, experience?: number): Enderio$AlloySmelting;
            vat_fermenting(ticks?: number): Enderio$VatFermenting;
            slicing(energy?: number): Enderio$Slicing;
            tank(): Enderio$Tank;
            soul_binding(energy?: number, experience?: number): Enderio$SoulBinding;
            painting(): Enderio$Painting;
            sag_milling(energy?: number, bonus?: $SagMillingRecipe$BonusType_): Enderio$SagMilling;
            enchanting(costMultiplier?: number): Enderio$Enchanting;
            fire_crafting(): Enderio$FireCrafting;
        }
        mekanism: {
            nucleosynthesizing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, duration: $TickDuration_, perTickUsage?: boolean): Mekanism$Nucleosynthesizing;
            injecting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Injecting;
            smelting(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Smelting;
            sawing(input: $SizedIngredient_, mainOutput?: $ItemStack_, secondaryOutput?: $ItemStack_, secondaryChance?: number): Mekanism$Sawing;
            chemical_infusing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$ChemicalInfusing;
            rotary(chemicalOutput?: $ChemicalStack, fluidOutput?: $FluidStack_, chemicalInput?: $ChemicalStackIngredient, fluidInput?: $SizedFluidIngredient): Mekanism$Rotary;
            chemical_conversion(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$ChemicalConversion;
            reaction(itemInput: $SizedIngredient_, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient, duration?: $TickDuration_, itemOutput?: $ItemStack_, chemicalOutput?: $ChemicalStack, energyRequired?: number): Mekanism$Reaction;
            crushing(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Crushing;
            compressing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Compressing;
            activating(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Activating;
            pigment_mixing(output: $ChemicalStack, leftInput: $ChemicalStackIngredient, rightInput: $ChemicalStackIngredient): Mekanism$PigmentMixing;
            crystallizing(output: $ItemStack_, input: $ChemicalStackIngredient): Mekanism$Crystallizing;
            oxidizing(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$Oxidizing;
            painting(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Painting;
            mek_data(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Mekanism$MekData;
            washing(output: $ChemicalStack, fluidInput: $SizedFluidIngredient, chemicalInput: $ChemicalStackIngredient): Mekanism$Washing;
            separating(leftChemicalOutput: $ChemicalStack, rightChemicalOutput: $ChemicalStack, input: $SizedFluidIngredient, energyMultiplier?: number): Mekanism$Separating;
            energy_conversion(input: $SizedIngredient_, output: number): Mekanism$EnergyConversion;
            enriching(output: $ItemStack_, input: $SizedIngredient_): Mekanism$Enriching;
            combining(output: $ItemStack_, mainInput: $SizedIngredient_, extraInput: $SizedIngredient_): Mekanism$Combining;
            purifying(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Purifying;
            evaporating(output: $FluidStack_, input: $SizedFluidIngredient): Mekanism$Evaporating;
            metallurgic_infusing(output: $ItemStack_, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$MetallurgicInfusing;
            centrifuging(output: $ChemicalStack, input: $ChemicalStackIngredient): Mekanism$Centrifuging;
            dissolution(output: $ChemicalStack, itemInput: $SizedIngredient_, chemicalInput: $ChemicalStackIngredient, perTickUsage?: boolean): Mekanism$Dissolution;
            pigment_extracting(output: $ChemicalStack, input: $SizedIngredient_): Mekanism$PigmentExtracting;
        }
        create: {
            crushing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Crushing;
            haunting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Haunting;
            cutting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Cutting;
            compacting(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Compacting;
            emptying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Emptying;
            pressing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Pressing;
            sandpaper_polishing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$SandpaperPolishing;
            sequenced_assembly(results: $List_<$ProcessingOutput>, ingredient: $Ingredient_, sequence: $List_<$KubeRecipe>, transitionalItem?: $ProcessingOutput, loops?: number): Create$SequencedAssembly;
            basin(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Basin;
            filling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Filling;
            conversion(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Conversion;
            mixing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Mixing;
            item_application(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$ItemApplication;
            deploying(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Deploying;
            milling(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Milling;
            mechanical_crafting(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>, acceptMirrored?: boolean): Create$MechanicalCrafting;
            splashing(results: $List_<$FluidStack_ | $ProcessingOutput>, ingredients: $List_<$SizedFluidIngredient | $Ingredient_>, processingTime?: $TickDuration_): Create$Splashing;
        }
        modern_industrialization: {
            mixer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Mixer;
            distillation_tower(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$DistillationTower;
            compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Compressor;
            macerator(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Macerator;
            unpacker(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Unpacker;
            vacuum_freezer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$VacuumFreezer;
            coke_oven(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CokeOven;
            quarry(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Quarry;
            fusion_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$FusionReactor;
            packer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Packer;
            centrifuge(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Centrifuge;
            oil_drilling_rig(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$OilDrillingRig;
            forge_hammer(result: $ItemStack_, ingredient: $Ingredient_, damage?: number, count?: number): ModernIndustrialization$ForgeHammer;
            furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Furnace;
            polarizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Polarizer;
            assembler(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Assembler;
            cutting_machine(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$CuttingMachine;
            distillery(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Distillery;
            blast_furnace(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$BlastFurnace;
            chemical_reactor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ChemicalReactor;
            heat_exchanger(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$HeatExchanger;
            implosion_compressor(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$ImplosionCompressor;
            wiremill(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Wiremill;
            electrolyzer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Electrolyzer;
            pressurizer(eu: number, duration: $TickDuration_, itemOutputs?: $List_<$ItemStack_> | $ItemStack_, fluidOutputs?: $List_<$FluidStack_> | $FluidStack_, itemInputs?: $List_<$SizedIngredient_> | $SizedIngredient_, fluidInputs?: $List_<$SizedFluidIngredient> | $SizedFluidIngredient, processConditions?: $List_<$MachineProcessCondition> | $MachineProcessCondition): ModernIndustrialization$Pressurizer;
        }
    }
    export class Enderio$SagMilling extends $KubeRecipe {
        energy(energy: number): this;
        bonus(bonus: $SagMillingRecipe$BonusType_): this;
    }
    export class ModernIndustrialization$CuttingMachine extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Injecting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Create$Conversion extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Separating extends $KubeRecipe {
        leftChemicalOutput(leftChemicalOutput: $ChemicalStack): this;
        rightChemicalOutput(rightChemicalOutput: $ChemicalStack): this;
        input(input: $SizedFluidIngredient): this;
        energyMultiplier(energyMultiplier: number): this;
    }
    export class ModernIndustrialization$CokeOven extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Centrifuging extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Mekanism$MekData extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Mekanism$Washing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
    }
    export class ModernIndustrialization$DistillationTower extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$Mixer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Minecraft$Smelting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Enderio$Enchanting extends $KubeRecipe {
        costMultiplier(costMultiplier: number): this;
    }
    export class ModernIndustrialization$ImplosionCompressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Nucleosynthesizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        duration(duration: $TickDuration_): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Kubejs$Shaped extends $KubeRecipe {
        result(result: $ItemStack_): this;
        pattern(pattern: $List_<string>): this;
        key(key: $Map_<string, $Ingredient_>): this;
        kjsMirror(kjsMirror: boolean): this;
        kjsShrink(kjsShrink: boolean): this;
        category(category: $CraftingBookCategory_): this;
        showNotification(showNotification: boolean): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
        noShrink(): this;
        noNotification(): this;
        noMirror(): this;
    }
    export class Create$Mixing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$SandpaperPolishing extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Filling extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class ModernIndustrialization$Furnace extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Enriching extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Mekanism$Sawing extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        mainOutput(mainOutput: $ItemStack_): this;
        secondaryOutput(secondaryOutput: $ItemStack_): this;
        secondaryChance(secondaryChance: number): this;
    }
    export class Mekanism$EnergyConversion extends $KubeRecipe {
        input(input: $SizedIngredient_): this;
        output(output: number): this;
    }
    export class ModernIndustrialization$Quarry extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$VacuumFreezer extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Purifying extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class Create$Compacting extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Create$Emptying extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
    export class Mekanism$Crystallizing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $ChemicalStackIngredient): this;
    }
    export class Minecraft$Blasting extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        xp(xp: number): this;
        time(time: $TickDuration_): this;
        category(category: $CookingBookCategory_): this;
    }
    export class Enderio$VatFermenting extends $KubeRecipe {
        ticks(ticks: number): this;
    }
    export class Create$SequencedAssembly extends $KubeRecipe {
        results(results: $List_<$ProcessingOutput>): this;
        ingredient(ingredient: $Ingredient_): this;
        sequence(sequence: $List_<$KubeRecipe>): this;
        transitionalItem(transitionalItem: $ProcessingOutput): this;
        loops(loops: number): this;
    }
    export class ModernIndustrialization$FusionReactor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Kubejs$Shapeless extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredients(ingredients: $List_<$Ingredient_>): this;
        category(category: $CraftingBookCategory_): this;
        buildingCategory(): this;
        equipmentCategory(): this;
        redstoneCategory(): this;
    }
    export class ModernIndustrialization$Distillery extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$MetallurgicInfusing extends $KubeRecipe {
        output(output: $ItemStack_): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$OilDrillingRig extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Enderio$AlloySmelting extends $AlloySmelterKubeRecipe {
        energy(energy: number): this;
        experience(experience: number): this;
    }
    export class Mekanism$Dissolution extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        itemInput(itemInput: $SizedIngredient_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        perTickUsage(perTickUsage: boolean): this;
    }
    export class ModernIndustrialization$Macerator extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class ModernIndustrialization$ForgeHammer extends $KubeRecipe {
        result(result: $ItemStack_): this;
        ingredient(ingredient: $Ingredient_): this;
        damage(damage: number): this;
        count(count: number): this;
    }
    export class ModernIndustrialization$Compressor extends $MachineKubeRecipe {
        eu(eu: number): this;
        duration(duration: $TickDuration_): this;
        itemOutputs(itemOutputs: $List_<$ItemStack_> | $ItemStack_): this;
        fluidOutputs(fluidOutputs: $List_<$FluidStack_> | $FluidStack_): this;
        itemInputs(itemInputs: $List_<$SizedIngredient_> | $SizedIngredient_): this;
        fluidInputs(fluidInputs: $List_<$SizedFluidIngredient> | $SizedFluidIngredient): this;
        processConditions(processConditions: $List_<$MachineProcessCondition> | $MachineProcessCondition): this;
    }
    export class Mekanism$Oxidizing extends $KubeRecipe {
        output(output: $ChemicalStack): this;
        input(input: $SizedIngredient_): this;
    }
    export class Mekanism$Rotary extends $KubeRecipe {
        chemicalOutput(chemicalOutput: $ChemicalStack): this;
        fluidOutput(fluidOutput: $FluidStack_): this;
        chemicalInput(chemicalInput: $ChemicalStackIngredient): this;
        fluidInput(fluidInput: $SizedFluidIngredient): this;
    }
    export class Mekanism$Smelting extends $KubeRecipe {
        output(output: $ItemStack_): this;
        input(input: $SizedIngredient_): this;
    }
    export class Create$Basin extends $KubeRecipe {
        results(results: $List_<$FluidStack_ | $ProcessingOutput>): this;
        ingredients(ingredients: $List_<$SizedFluidIngredient | $Ingredient_>): this;
        processingTime(processingTime: $TickDuration_): this;
        heatRequirement(heatRequirement: $HeatCondition_): this;
        superheated(): this;
        heated(): this;
    }
}
