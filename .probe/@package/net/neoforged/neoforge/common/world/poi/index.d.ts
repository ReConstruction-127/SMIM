import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $Event } from "@package/net/neoforged/bus/api";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $Set_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/common/world/poi" {
    export class $ExtendPoiTypesEvent extends $Event implements $IModBusEvent {
        addStatesToPoi(arg0: $ResourceKey_<$PoiType>, arg1: $Set_<$BlockState_>): void;
        addBlockToPoi(arg0: $ResourceKey_<$PoiType>, arg1: $Block_): void;
    }
}
