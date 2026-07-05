import { $Registry, $HolderSet, $HolderSet_ } from "@package/net/minecraft/core";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $Item_, $Item } from "@package/net/minecraft/world/item";
import { RegistryMarked, RegistryTypes } from "@special/types";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceKey } from "@package/net/minecraft/resources";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Class } from "@package/java/lang";
import { $List, $Set, $Set_, $Collection_, $List_ } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/bmaster/createrns/content/deposit/mining/recipe/catalyst" {
    export class $AttachmentCatalystRequirement extends $CatalystRequirement {
        static CODEC: $Codec<$CatalystRequirement>;
        attachment: $HolderSet<$Block>;
        static MAP_CODEC: $MapCodec<$AttachmentCatalystRequirement>;
        count: number;
        constructor(arg0: $HolderSet_<$Block>, arg1: number);
    }
    export interface $CatalystRequirementSet extends RegistryMarked<RegistryTypes.CreateRnsCatalystTag, RegistryTypes.CreateRnsCatalyst> {}
    export class $CatalystRequirementSet {
        getNameComponent(arg0: $Collection_<$CatalystRequirementSet_>): $MutableComponent;
        getNameComponent(): $MutableComponent;
        getRelevantCatalysts(arg0: $Set_<$Catalyst>): $Set<$Catalyst>;
        isSatisfiableOrOptional(arg0: $Set_<$Catalyst>): boolean;
        useCatalysts(arg0: $List_<$Catalyst>, arg1: boolean): boolean;
        representativeItems: $List<$Item>;
        requirements: $List<$CatalystRequirement>;
        static CODEC: $Codec<$CatalystRequirementSet>;
        chanceMult: number;
        static REGISTRY_KEY: $ResourceKey<$Registry<$CatalystRequirementSet>>;
        name: string;
        optional: boolean;
        displayPriority: number;
        hideIfPresent: $List<string>;
        constructor(arg0: string, arg1: number, arg2: boolean, arg3: number, arg4: $List_<$Item_>, arg5: $List_<string>, arg6: $List_<$CatalystRequirement>);
    }
    /**
     * Values that may be interpreted as {@link $CatalystRequirementSet}.
     */
    export type $CatalystRequirementSet_ = RegistryTypes.CreateRnsCatalyst;
    export class $CatalystRequirementType<T extends $CatalystRequirement> {
        name(): string;
        mapCodec(): $MapCodec<T>;
        static ATTACHMENT: $CatalystRequirementType<$AttachmentCatalystRequirement>;
        static CODEC: $Codec<$CatalystRequirementType<never>>;
        static FLUID: $CatalystRequirementType<$FluidCatalystRequirement>;
    }
    export class $FluidCatalystRequirement extends $CatalystRequirement {
        static CODEC: $Codec<$CatalystRequirement>;
        static MAP_CODEC: $MapCodec<$FluidCatalystRequirement>;
        fluidStack: $FluidStack;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $FluidCatalystRequirement>;
        constructor(arg0: $FluidStack_);
    }
    export class $Catalyst {
        constructor();
    }
    export class $CatalystRequirement {
        type(): $CatalystRequirementType<never>;
        isSatisfiedBy(arg0: $Collection_<$Catalyst>): boolean;
        relevantCatalystTypes(): $Set<$Class<$Catalyst>>;
        useCatalysts(arg0: $Collection_<$Catalyst>, arg1: boolean): boolean;
        static CODEC: $Codec<$CatalystRequirement>;
        constructor();
    }
}
