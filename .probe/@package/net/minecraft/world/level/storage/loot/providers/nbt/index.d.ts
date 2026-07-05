import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/nbt" {
    /**
     * A provider for NBT data based on a LootContext.
     * 
     * @see NbtProviders
     */
    export class $NbtProvider {
    }
    export interface $NbtProvider {
        get(lootContext: $LootContext): $Tag;
        getType(): $LootNbtProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        get type(): $LootNbtProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * The SerializerType for `NbtProvider`.
     */
    export class $LootNbtProviderType extends $Record {
        codec(): $MapCodec<$NbtProvider>;
        constructor(arg0: $MapCodec_<$NbtProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootNbtProviderType}.
     */
    export type $LootNbtProviderType_ = RegistryTypes.LootNbtProviderType | { codec?: $MapCodec_<$NbtProvider>,  } | [codec?: $MapCodec_<$NbtProvider>, ];
    export interface $LootNbtProviderType extends RegistryMarked<RegistryTypes.LootNbtProviderTypeTag, RegistryTypes.LootNbtProviderType> {}
}
