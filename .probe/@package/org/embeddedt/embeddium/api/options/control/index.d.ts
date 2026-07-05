import { $Dim2i_ } from "@package/org/embeddedt/embeddium/api/math";
import { $Option, $OptionControlElement } from "@package/org/embeddedt/embeddium/api/options/structure";

declare module "@package/org/embeddedt/embeddium/api/options/control" {
    export class $Control<T> {
    }
    export interface $Control<T> {
        getOption(): $Option<T>;
        createElement(arg0: $Dim2i_): $OptionControlElement<T>;
        getMaxWidth(): number;
        get option(): $Option<T>;
        get maxWidth(): number;
    }
}
