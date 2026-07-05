import { $ModelProperty } from "@package/net/neoforged/neoforge/client/model/data";
import { $Supplier } from "@package/java/util/function";
import { $Direction_, $Direction } from "@package/net/minecraft/core";
import { $MutableComponent } from "@package/net/minecraft/network/chat";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";

declare module "@package/aztech/modern_industrialization/machines/models" {
    export class $MachineModelClientData {
        active(arg0: boolean): $MachineModelClientData;
        casing: $MachineCasing;
        outputDirection: $Direction;
        fluidAutoExtract: boolean;
        frontDirection: $Direction;
        itemAutoExtract: boolean;
        isActive: boolean;
        static KEY: $ModelProperty<$MachineModelClientData>;
        constructor(arg0: $MachineCasing, arg1: $Direction_);
        constructor(arg0: $MachineCasing);
        constructor();
    }
    export class $MachineCasing {
        getName(): $MutableComponent;
        getTranslationKey(): string;
        imitatedBlock: $Supplier<$Block>;
        key: $ResourceLocation;
        get name(): $MutableComponent;
        get translationKey(): string;
    }
}
