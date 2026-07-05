import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ScoreHolder } from "@package/net/minecraft/world/scores";
import { $Set } from "@package/java/util";
import { $Record } from "@package/java/lang";
import { $LootContextParam } from "@package/net/minecraft/world/level/storage/loot/parameters";
import { $LootContext } from "@package/net/minecraft/world/level/storage/loot";

declare module "@package/net/minecraft/world/level/storage/loot/providers/score" {
    /**
     * Provides a scoreboard name based on a `LootContext`.
     */
    export class $ScoreboardNameProvider {
    }
    export interface $ScoreboardNameProvider {
        getType(): $LootScoreProviderType;
        getReferencedContextParams(): $Set<$LootContextParam<never>>;
        getScoreHolder(context: $LootContext): $ScoreHolder;
        get type(): $LootScoreProviderType;
        get referencedContextParams(): $Set<$LootContextParam<never>>;
    }
    /**
     * The SerializerType for `ScoreboardNameProvider`.
     */
    export class $LootScoreProviderType extends $Record {
        codec(): $MapCodec<$ScoreboardNameProvider>;
        constructor(arg0: $MapCodec_<$ScoreboardNameProvider>);
    }
    /**
     * Values that may be interpreted as {@link $LootScoreProviderType}.
     */
    export type $LootScoreProviderType_ = RegistryTypes.LootScoreProviderType | { codec?: $MapCodec_<$ScoreboardNameProvider>,  } | [codec?: $MapCodec_<$ScoreboardNameProvider>, ];
    export interface $LootScoreProviderType extends RegistryMarked<RegistryTypes.LootScoreProviderTypeTag, RegistryTypes.LootScoreProviderType> {}
}
