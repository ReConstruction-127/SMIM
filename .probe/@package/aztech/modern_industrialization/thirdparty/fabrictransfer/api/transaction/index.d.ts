
declare module "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/transaction" {
    export class $SnapshotJournal<T> {
        updateSnapshots(arg0: $TransactionContext_): void;
        constructor();
    }
    export class $TransactionContext {
    }
    export interface $TransactionContext {
        depth(): number;
    }
    /**
     * Values that may be interpreted as {@link $TransactionContext}.
     */
    export type $TransactionContext_ = (() => number);
}
