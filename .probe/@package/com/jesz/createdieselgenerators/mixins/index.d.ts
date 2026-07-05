import { $ModelPart$Cube } from "@package/net/minecraft/client/model/geom";
import { $LootPoolEntryContainer } from "@package/net/minecraft/world/level/storage/loot/entries";
import { $List_, $List } from "@package/java/util";
import { $LootPool } from "@package/net/minecraft/world/level/storage/loot";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/com/jesz/createdieselgenerators/mixins" {
    export class $LootPoolAccessor {
    }
    export interface $LootPoolAccessor {
        getEntries(): $List<$LootPoolEntryContainer>;
        get entries(): $List<$LootPoolEntryContainer>;
    }
    /**
     * Values that may be interpreted as {@link $LootPoolAccessor}.
     */
    export type $LootPoolAccessor_ = (() => $List_<$LootPoolEntryContainer>);
    export class $LootTableAccessor {
    }
    export interface $LootTableAccessor {
        getPools(): $List<$LootPool>;
        get pools(): $List<$LootPool>;
    }
    /**
     * Values that may be interpreted as {@link $LootTableAccessor}.
     */
    export type $LootTableAccessor_ = (() => $List_<$LootPool>);
    export class $ModelPartAccessor {
    }
    export interface $ModelPartAccessor {
        getCubes(): $List<$ModelPart$Cube>;
        get cubes(): $List<$ModelPart$Cube>;
    }
    /**
     * Values that may be interpreted as {@link $ModelPartAccessor}.
     */
    export type $ModelPartAccessor_ = (() => $List_<$ModelPart$Cube>);
    export class $AgeableListModelAccessor {
    }
    export interface $AgeableListModelAccessor {
        getBabyYHeadOffset(): number;
        getBabyHeadScale(): number;
        getBabyZHeadOffset(): number;
        getScaleHead(): boolean;
        get babyYHeadOffset(): number;
        get babyHeadScale(): number;
        get babyZHeadOffset(): number;
        get scaleHead(): boolean;
    }
    export class $UseOnContextInvoker {
    }
    export interface $UseOnContextInvoker {
        cdg_getHitResult(): $BlockHitResult;
    }
    /**
     * Values that may be interpreted as {@link $UseOnContextInvoker}.
     */
    export type $UseOnContextInvoker_ = (() => $BlockHitResult);
}
