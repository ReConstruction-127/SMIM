import { $Codec } from "@package/com/mojang/serialization";
import { $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforge/registries/datamaps/builtin" {
    export class $Compostable extends $Record {
        chance(): number;
        canVillagerCompost(): boolean;
        static CODEC: $Codec<$Compostable>;
        static CHANCE_CODEC: $Codec<$Compostable>;
        constructor(arg0: number);
        constructor(chance: number, canVillagerCompost: boolean);
    }
    /**
     * Values that may be interpreted as {@link $Compostable}.
     */
    export type $Compostable_ = { chance?: number, canVillagerCompost?: boolean,  } | [chance?: number, canVillagerCompost?: boolean, ];
}
