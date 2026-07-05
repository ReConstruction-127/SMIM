import { $Level_ } from "@package/net/minecraft/world/level";
import { $Supplier_ } from "@package/java/util/function";
import { $BlockPos, $BlockPos_, $RegistryAccess } from "@package/net/minecraft/core";
import { $ItemStack } from "@package/net/minecraft/world/item";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Set_, $Map, $Set } from "@package/java/util";
import { $MachineCasing } from "@package/aztech/modern_industrialization/machines/models";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/aztech/modern_industrialization/machines/multiblocks" {
    export class $HatchFlags {
        values(): $Set<$HatchType>;
        allows(arg0: $HatchType): boolean;
        static NO_HATCH: $HatchFlags;
        constructor(arg0: $Set_<$HatchType>);
    }
    export class $HatchType {
        id(): $ResourceLocation;
        description(): $MutableComponent;
    }
    export class $ShapeTemplate$LayeredBuilder {
        key(arg0: string, arg1: $SimpleMember, arg2: $HatchFlags): $ShapeTemplate$LayeredBuilder;
        build(): $ShapeTemplate;
        constructor(arg0: $MachineCasing, arg1: string[][]);
    }
    export class $ShapeTemplate {
        simpleMembers: $Map<$BlockPos, $SimpleMember>;
        hatchCasing: $MachineCasing;
        hatchFlags: $Map<$BlockPos, $HatchFlags>;
    }
    export class $SimpleMember {
        static forBlock(arg0: $Supplier_<$Block>): $SimpleMember;
        static verticalChain(): $SimpleMember;
        static forBlockState(arg0: $BlockState_): $SimpleMember;
        static forBlockId(arg0: $ResourceLocation_): $SimpleMember;
    }
    export interface $SimpleMember {
        matchesState(arg0: $BlockState_, arg1: $BlockEntity): boolean;
        newBlockEntity(arg0: $RegistryAccess, arg1: $Level_, arg2: $BlockPos_, arg3: $BlockState_): $BlockEntity;
        getItemPreviewState(arg0: $RegistryAccess): $ItemStack;
        getPreviewState(): $BlockState;
        get previewState(): $BlockState;
    }
    export class $ShapeTemplate$Builder {
        remove(arg0: number, arg1: number, arg2: number): $ShapeTemplate$Builder;
        add(arg0: number, arg1: number, arg2: number, arg3: $SimpleMember, arg4: $HatchFlags): $ShapeTemplate$Builder;
        add(arg0: number, arg1: number, arg2: number, arg3: $SimpleMember): $ShapeTemplate$Builder;
        build(): $ShapeTemplate;
        add3by3LevelsRoofed(arg0: number, arg1: number, arg2: $SimpleMember, arg3: $HatchFlags): $ShapeTemplate$Builder;
        add3by3(arg0: number, arg1: $SimpleMember, arg2: boolean, arg3: $HatchFlags): $ShapeTemplate$Builder;
        add3by3Levels(arg0: number, arg1: number, arg2: $SimpleMember, arg3: $HatchFlags): $ShapeTemplate$Builder;
        constructor(arg0: $MachineCasing);
    }
}
