import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Enum } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/appeng/util" {
    export class $SearchInventoryEvent extends $PlayerEvent {
        getStacks(): $List<$ItemStack>;
        static getItems(arg0: $Player): $List<$ItemStack>;
        constructor(arg0: $Player, arg1: $List_<$ItemStack_>);
        get stacks(): $List<$ItemStack>;
    }
    export class $SettingsFrom extends $Enum<$SettingsFrom> {
        static values(): $SettingsFrom[];
        static valueOf(arg0: string): $SettingsFrom;
        static DISMANTLE_ITEM: $SettingsFrom;
        static MEMORY_CARD: $SettingsFrom;
    }
    /**
     * Values that may be interpreted as {@link $SettingsFrom}.
     */
    export type $SettingsFrom_ = "dismantle_item" | "memory_card";
}
