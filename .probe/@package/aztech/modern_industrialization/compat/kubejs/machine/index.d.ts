import { $JsonObject_ } from "@package/com/google/gson";
import { $ProgressBar$Params, $RecipeEfficiencyBar$Params_, $EnergyBar$Params_, $RecipeEfficiencyBar$Params, $EnergyBar$Params, $ProgressBar$Params_ } from "@package/aztech/modern_industrialization/machines/guicomponents";
import { $OverclockComponent$Catalyst, $FluidItemConsumerComponent } from "@package/aztech/modern_industrialization/machines/components";
import { $ElectricBlastFurnaceBlockEntity$Tier } from "@package/aztech/modern_industrialization/machines/blockentities/multiblocks";
import { $List, $List_ } from "@package/java/util";
import { $MachineRecipeType } from "@package/aztech/modern_industrialization/machines/recipe";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $SlotPositions$Builder } from "@package/aztech/modern_industrialization/inventory";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $MultiblockMachines$Rei, $SingleBlockCraftingMachines$Config } from "@package/aztech/modern_industrialization/machines/init";
import { $ShapeTemplate$Builder, $HatchFlags, $ShapeTemplate, $SimpleMember, $ShapeTemplate$LayeredBuilder } from "@package/aztech/modern_industrialization/machines/multiblocks";

declare module "@package/aztech/modern_industrialization/compat/kubejs/machine" {
    export class $RegisterMachinesEventJS implements $KubeEvent, $ShapeTemplateHelper {
        progressBar(arg0: number, arg1: number, arg2: string, arg3: number, arg4: number): $ProgressBar$Params;
        progressBar(arg0: number, arg1: number, arg2: string): $ProgressBar$Params;
        simpleElectricCraftingMultiBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean): void;
        simpleElectricCraftingMultiBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: $Consumer_<$ExtraMachineConfig$CraftingMultiBlock>): void;
        simpleSteamCraftingMultiBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean): void;
        simpleSteamCraftingMultiBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ShapeTemplate, arg4: $ProgressBar$Params_, arg5: $Consumer_<$SlotPositions$Builder>, arg6: $Consumer_<$SlotPositions$Builder>, arg7: $Consumer_<$SlotPositions$Builder>, arg8: $Consumer_<$SlotPositions$Builder>, arg9: string, arg10: string, arg11: boolean, arg12: boolean, arg13: boolean, arg14: $Consumer_<$ExtraMachineConfig$CraftingMultiBlock>): void;
        craftingSingleBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $List_<string>, arg4: number, arg5: $ProgressBar$Params_, arg6: $RecipeEfficiencyBar$Params_, arg7: $EnergyBar$Params_, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: $Consumer_<$SlotPositions$Builder>, arg14: $Consumer_<$SlotPositions$Builder>, arg15: boolean, arg16: boolean, arg17: boolean, arg18: $Consumer_<$ExtraMachineConfig$CraftingSingleBlock>): void;
        craftingSingleBlock(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $List_<string>, arg4: number, arg5: $ProgressBar$Params_, arg6: $RecipeEfficiencyBar$Params_, arg7: $EnergyBar$Params_, arg8: number, arg9: number, arg10: number, arg11: number, arg12: number, arg13: $Consumer_<$SlotPositions$Builder>, arg14: $Consumer_<$SlotPositions$Builder>, arg15: boolean, arg16: boolean, arg17: boolean): void;
        simpleGeneratorSingleBlock(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: $Consumer_<$RegisterMachinesEventJS$FluidItemConsumerBuilder>, arg7: string, arg8: string, arg9: boolean, arg10: boolean, arg11: boolean): void;
        simpleGeneratorSingleBlock(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: $Consumer_<$RegisterMachinesEventJS$FluidItemConsumerBuilder>, arg6: string, arg7: string, arg8: boolean, arg9: boolean, arg10: boolean): void;
        simpleGeneratorMultiBlock(arg0: string, arg1: string, arg2: $ShapeTemplate, arg3: number, arg4: $Consumer_<$RegisterMachinesEventJS$FluidItemConsumerBuilder>, arg5: string, arg6: string, arg7: boolean, arg8: boolean, arg9: boolean): void;
        efficiencyBar(arg0: number, arg1: number): $RecipeEfficiencyBar$Params;
        energyBar(arg0: number, arg1: number): $EnergyBar$Params;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        memberOfBlock(arg0: string): $SimpleMember;
        layeredShape(arg0: string, arg1: string[][]): $ShapeTemplate$LayeredBuilder;
        startShape(arg0: string): $ShapeTemplate$Builder;
        noHatch(): $HatchFlags;
        hatchOf(...arg0: string[]): $HatchFlags;
        constructor();
    }
    export class $AddEbfTiersEventJS implements $KubeEvent {
        add(arg0: $ResourceLocation_, arg1: number, arg2: string): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor(arg0: $Consumer_<$ElectricBlastFurnaceBlockEntity$Tier>);
    }
    export class $AddMultiblockSlotsEventJS implements $KubeEvent {
        getItemOutputs(): $SlotPositions$Builder;
        getItemInputs(): $SlotPositions$Builder;
        getFluidInputs(): $SlotPositions$Builder;
        getFluidOutputs(): $SlotPositions$Builder;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        get itemOutputs(): $SlotPositions$Builder;
        get itemInputs(): $SlotPositions$Builder;
        get fluidInputs(): $SlotPositions$Builder;
        get fluidOutputs(): $SlotPositions$Builder;
    }
    export class $RegisterHatchesEventJS implements $KubeEvent {
        item(arg0: string, arg1: string, arg2: string, arg3: number, arg4: number, arg5: number, arg6: number): void;
        energy(arg0: string): void;
        fluid(arg0: string, arg1: string, arg2: string, arg3: number): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $ShapeTemplateHelper {
    }
    export interface $ShapeTemplateHelper {
        memberOfBlock(arg0: string): $SimpleMember;
        layeredShape(arg0: string, arg1: string[][]): $ShapeTemplate$LayeredBuilder;
        startShape(arg0: string): $ShapeTemplate$Builder;
        noHatch(): $HatchFlags;
        hatchOf(...arg0: string[]): $HatchFlags;
    }
    export class $RegisterCasingsEventJS implements $KubeEvent {
        /**
         * @deprecated
         */
        register(...arg0: string[]): void;
        registerBlockImitation(arg0: string, arg1: $ResourceLocation_): void;
        registerNamed(arg0: string, arg1: string): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $RegisterRecipeTypesEventJS implements $KubeEvent {
        register(arg0: string): $MachineRecipeType;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        constructor();
    }
    export class $RegisterMachinesEventJS$FluidItemConsumerBuilder {
        build(): $FluidItemConsumerComponent;
        item(arg0: $ResourceLocation_, arg1: number): $RegisterMachinesEventJS$FluidItemConsumerBuilder;
        fluid(arg0: $ResourceLocation_, arg1: number): $RegisterMachinesEventJS$FluidItemConsumerBuilder;
        fluidFuels(): $RegisterMachinesEventJS$FluidItemConsumerBuilder;
        furnaceFuels(): $RegisterMachinesEventJS$FluidItemConsumerBuilder;
        constructor(arg0: number);
    }
    export class $ExtraMachineConfig$CraftingSingleBlock {
        steamCustomOverclock(arg0: $JsonObject_): $ExtraMachineConfig$CraftingSingleBlock;
        constructor(arg0: $SingleBlockCraftingMachines$Config);
    }
    export class $ExtraMachineConfig$CraftingMultiBlock {
        reiExtra(arg0: $Consumer_<$MultiblockMachines$Rei>): $ExtraMachineConfig$CraftingMultiBlock;
        steamCustomOverclock(arg0: $JsonObject_): $ExtraMachineConfig$CraftingMultiBlock;
        reiConfigs: $List<$Consumer<$MultiblockMachines$Rei>>;
        steamOverclockCatalysts: $List<$OverclockComponent$Catalyst>;
        constructor();
    }
}
