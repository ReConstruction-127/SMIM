import { $Suggestions, $SuggestionsBuilder } from "@package/com/mojang/brigadier/suggestion";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $StringReader } from "@package/com/mojang/brigadier";
import { $Collection } from "@package/java/util";
import { $CommandContext } from "@package/com/mojang/brigadier/context";

declare module "@package/com/mojang/brigadier/arguments" {
    export class $ArgumentType<T> {
    }
    export interface $ArgumentType<T> {
        parse(arg0: $StringReader): T;
        parse<S>(arg0: $StringReader, arg1: S): T;
        getExamples(): $Collection<string>;
        listSuggestions<S>(arg0: $CommandContext<S>, arg1: $SuggestionsBuilder): $CompletableFuture<$Suggestions>;
        get examples(): $Collection<string>;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentType}.
     */
    export type $ArgumentType_<T> = ((arg0: $StringReader) => T);
}
