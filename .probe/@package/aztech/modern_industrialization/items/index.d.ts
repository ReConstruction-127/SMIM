import { $NuclearOrder } from "@package/aztech/modern_industrialization/nuclear";
import { $Comparable, $Comparable_ } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/items" {
    export class $SortOrderGroup$Counted {
        next(): $SortOrder;
        constructor(arg0: $SortOrder);
    }
    export class $SortOrder implements $Comparable<$SortOrder> {
        compareTo(arg0: $SortOrder): number;
        and(arg0: $Comparable_<any>): $SortOrder;
        static GUIDE_BOOK: $SortOrder;
        static BLOCKS_OTHERS: $SortOrder;
        static FORGE_HAMMER: $SortOrder;
        static NUCLEAR: $SortOrderGroup$Parametrized<$NuclearOrder>;
        static STORAGE_BLOCKS: $SortOrder;
        static CASINGS: $SortOrder;
        static PIPES: $SortOrder;
        static RAW_ORE_BLOCKS: $SortOrder;
        static CABLES: $SortOrder;
        static MACHINES: $SortOrder;
        static COILS: $SortOrder;
        static BUCKETS: $SortOrder;
        static ITEMS_ORDERED: $SortOrderGroup$Counted;
        static ORES: $SortOrder;
        static TANKS: $SortOrder;
        static BARRELS: $SortOrder;
        static MATERIALS: $SortOrder;
    }
    export class $SortOrderGroup$Parametrized<T extends $Comparable<T>> {
        create(arg0: T): $SortOrder;
        constructor(arg0: $SortOrder);
    }
}
