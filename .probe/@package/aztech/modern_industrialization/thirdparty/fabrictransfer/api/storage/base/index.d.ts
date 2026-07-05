import { $Record } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/storage/base" {
    export class $ResourceAmount<T> extends $Record {
        resource(): T;
        amount(): number;
        constructor(resource: T, amount: number);
    }
    /**
     * Values that may be interpreted as {@link $ResourceAmount}.
     */
    export type $ResourceAmount_<T> = { amount?: number, resource?: any,  } | [amount?: number, resource?: any, ];
}
