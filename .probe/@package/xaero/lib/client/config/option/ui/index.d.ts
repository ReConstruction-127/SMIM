import { $ConfigOptionUIType } from "@package/xaero/lib/client/config/option/ui/type";
import { $ConfigOption } from "@package/xaero/lib/common/config/option";
export * as type from "@package/xaero/lib/client/config/option/ui/type";

declare module "@package/xaero/lib/client/config/option/ui" {
    export class $ConfigOptionUITypeManager {
        registerUIType<CT extends $ConfigOption<never>>(arg0: CT, arg1: $ConfigOptionUIType<CT>): void;
        getUIType<CT extends $ConfigOption<never>>(arg0: CT): $ConfigOptionUIType<CT>;
    }
}
