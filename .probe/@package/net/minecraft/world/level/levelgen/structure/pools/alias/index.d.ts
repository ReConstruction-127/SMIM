import { $BiConsumer_ } from "@package/java/util/function";
import { $StructureTemplatePool } from "@package/net/minecraft/world/level/levelgen/structure/pools";
import { $Stream } from "@package/java/util/stream";
import { $MapCodec, $Codec } from "@package/com/mojang/serialization";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $SimpleWeightedRandomList } from "@package/net/minecraft/util/random";
import { $Record } from "@package/java/lang";
import { $List_ } from "@package/java/util";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/world/level/levelgen/structure/pools/alias" {
    export class $Random extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Random}.
     */
    export type $Random_ = { alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, targets?: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>, ];
    export class $Direct extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $Direct}.
     */
    export type $Direct_ = { alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>,  } | [alias?: $ResourceKey_<$StructureTemplatePool>, target?: $ResourceKey_<$StructureTemplatePool>, ];
    export class $PoolAliasBinding {
        static random(alias: string, targets: $SimpleWeightedRandomList<string>): $Random;
        static random(alias: $ResourceKey_<$StructureTemplatePool>, targets: $SimpleWeightedRandomList<$ResourceKey_<$StructureTemplatePool>>): $Random;
        static direct(alias: $ResourceKey_<$StructureTemplatePool>, target: $ResourceKey_<$StructureTemplatePool>): $Direct;
        static direct(alias: string, target: string): $Direct;
        static randomGroup(groups: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>): $RandomGroup;
        static CODEC: $Codec<$PoolAliasBinding>;
    }
    export interface $PoolAliasBinding {
        allTargets(): $Stream<$ResourceKey<$StructureTemplatePool>>;
        forEachResolved(random: $RandomSource, stucturePoolKey: $BiConsumer_<$ResourceKey<$StructureTemplatePool>, $ResourceKey<$StructureTemplatePool>>): void;
        codec(): $MapCodec<$PoolAliasBinding>;
    }
    export class $RandomGroup extends $Record implements $PoolAliasBinding {
    }
    /**
     * Values that may be interpreted as {@link $RandomGroup}.
     */
    export type $RandomGroup_ = { groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>,  } | [groups?: $SimpleWeightedRandomList<$List_<$PoolAliasBinding>>, ];
}
