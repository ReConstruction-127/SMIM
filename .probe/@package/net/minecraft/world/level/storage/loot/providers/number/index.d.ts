import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $Record } from "@package/java/lang";
import { $LootContextUser, $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/number" {
    /**
     * Provides a float or int based on a `LootContext`.
     */
    export class $NumberProvider {
    }
    export interface $NumberProvider extends $LootContextUser {
        getInt(lootContext: $LootContext): number;
        getFloat(lootContext: $LootContext): number;
        getType(): $LootNumberProviderType;
        get type(): $LootNumberProviderType;
    }
    /**
     * Values that may be interpreted as {@link $NumberProvider}.
     */
    export type $NumberProvider_ = number | [min: number, max: number, ] | { min: number, max: number,  } | { n: number, p: number,  } | { value: number,  };
    /**
     * The SerializerType for `NumberProvider`.
     */
    export class $LootNumberProviderType extends $Record {
        codec(): $MapCodec<$NumberProvider>;
        constructor(arg0: $MapCodec_<$NumberProvider_>);
    }
    /**
     * Values that may be interpreted as {@link $LootNumberProviderType}.
     */
    export type $LootNumberProviderType_ = RegistryTypes.LootNumberProviderType | { codec?: $MapCodec_<$NumberProvider_>,  } | [codec?: $MapCodec_<$NumberProvider_>, ];
    export interface $LootNumberProviderType extends RegistryMarked<RegistryTypes.LootNumberProviderTypeTag, RegistryTypes.LootNumberProviderType> {}
}
