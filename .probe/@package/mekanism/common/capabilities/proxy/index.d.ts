import { $InteractionResult } from "@package/net/minecraft/world";
import { $Direction_ } from "@package/net/minecraft/core";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $IConfigurable } from "@package/mekanism/api";

declare module "@package/mekanism/common/capabilities/proxy" {
    export class $ProxyConfigurable$ISidedConfigurable {
    }
    export interface $ProxyConfigurable$ISidedConfigurable extends $IConfigurable {
        onRightClick(player: $Player): $InteractionResult;
        onRightClick(player: $Player, side: $Direction_): $InteractionResult;
        onSneakRightClick(player: $Player): $InteractionResult;
        onSneakRightClick(player: $Player, side: $Direction_): $InteractionResult;
    }
}
