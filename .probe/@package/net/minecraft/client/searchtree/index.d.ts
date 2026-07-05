import { $Function_ } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/minecraft/client/searchtree" {
    export class $SearchTree<T> {
        static empty<T>(): $SearchTree<T>;
        static plainText<T>(contents: $List_<T>, filter: $Function_<T, $Stream<string>>): $SearchTree<T>;
    }
    export interface $SearchTree<T> {
        /**
         * Searches this search tree for the given text.
         * 
         * If the query does not contain a `:`, then only `#byName` is searched. If it does contain a colon, both `#byName` and `#byId` are searched and the results are merged using a `MergingIterator`.
         * @return A list of all matching items in this search tree.
         */
        search(query: string): $List<T>;
    }
    /**
     * Values that may be interpreted as {@link $SearchTree}.
     */
    export type $SearchTree_<T> = ((arg0: string) => $List_<T>);
}
