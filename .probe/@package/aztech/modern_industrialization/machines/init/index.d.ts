import { $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $SlotPositions$Builder } from "@package/aztech/modern_industrialization/inventory";
import { $ProgressBar$Params_ } from "@package/aztech/modern_industrialization/machines/guicomponents";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $OverclockComponent$Catalyst } from "@package/aztech/modern_industrialization/machines/components";
import { $List } from "@package/java/util";
import { $MachineRecipeType, $MachineRecipe } from "@package/aztech/modern_industrialization/machines/recipe";

declare module "@package/aztech/modern_industrialization/machines/init" {
    export class $MultiblockMachines$Rei {
        items(arg0: $Consumer_<$SlotPositions$Builder>, arg1: $Consumer_<$SlotPositions$Builder>): $MultiblockMachines$Rei;
        register(): void;
        fluids(arg0: $Consumer_<$SlotPositions$Builder>, arg1: $Consumer_<$SlotPositions$Builder>): $MultiblockMachines$Rei;
        steam(arg0: boolean): $MultiblockMachines$Rei;
        workstations(...arg0: $ResourceLocation_[]): $MultiblockMachines$Rei;
        workstations(...arg0: string[]): $MultiblockMachines$Rei;
        extraTest(arg0: $Predicate_<$MachineRecipe>): $MultiblockMachines$Rei;
        extraWorkstations(...arg0: $ResourceLocation_[]): $MultiblockMachines$Rei;
        constructor(arg0: string, arg1: $ResourceLocation_, arg2: $MachineRecipeType, arg3: $ProgressBar$Params_);
        constructor(arg0: string, arg1: string, arg2: $MachineRecipeType, arg3: $ProgressBar$Params_);
    }
    export class $SingleBlockCraftingMachines$Config {
        steamOverclockCatalysts: $List<$OverclockComponent$Catalyst>;
        constructor();
    }
}
