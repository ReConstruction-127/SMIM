import { $InternalInventory } from "@package/appeng/api/inventories";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $Event } from "@package/net/neoforged/bus/api";
import { $IGrid } from "@package/appeng/api/networking";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/appeng/server/testplots" {
    export class $KitOutPlayerEvent extends $PlayerEvent {
        getPlayer(): $ServerPlayer;
        constructor(arg0: $ServerPlayer);
        get player(): $ServerPlayer;
    }
    export class $SpawnExtraGridTestTools extends $Event {
        getInventory(): $InternalInventory;
        getGrid(): $IGrid;
        getPlotId(): $ResourceLocation;
        constructor(arg0: $ResourceLocation_, arg1: $InternalInventory, arg2: $IGrid);
        get inventory(): $InternalInventory;
        get grid(): $IGrid;
        get plotId(): $ResourceLocation;
    }
}
