import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $BlockLootSubProvider, $EntityLootSubProvider } from "@package/net/minecraft/data/loot";
import { $LootTable$Builder } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/data/loot/packs" {
    export class $VanillaEntityLoot extends $EntityLootSubProvider {
        elderGuardianLootTable(): $LootTable$Builder;
        constructor(registries: $HolderLookup$Provider);
    }
    export class $VanillaBlockLoot extends $BlockLootSubProvider {
        constructor(registries: $HolderLookup$Provider);
    }
}
