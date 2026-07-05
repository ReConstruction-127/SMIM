import { $ModLoadingIssue_, $ModLoadingIssue } from "@package/net/neoforged/fml";
export * as language from "@package/net/neoforged/neoforgespi/language";
export * as locating from "@package/net/neoforged/neoforgespi/locating";

declare module "@package/net/neoforged/neoforgespi" {
    export class $IIssueReporting {
    }
    export interface $IIssueReporting {
        addIssue(arg0: $ModLoadingIssue_): void;
    }
    /**
     * Values that may be interpreted as {@link $IIssueReporting}.
     */
    export type $IIssueReporting_ = ((arg0: $ModLoadingIssue) => void);
}
