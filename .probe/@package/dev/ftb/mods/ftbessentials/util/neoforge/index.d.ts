import { $Entity } from "@package/net/minecraft/world/entity";
import { $EntityTeleportEvent$TeleportCommand } from "@package/net/neoforged/neoforge/event/entity";

declare module "@package/dev/ftb/mods/ftbessentials/util/neoforge" {
    export class $WarmupCooldownTeleporterImpl$EssentialsTeleport extends $EntityTeleportEvent$TeleportCommand {
        constructor(entity: $Entity, targetX: number, targetY: number, targetZ: number);
    }
}
