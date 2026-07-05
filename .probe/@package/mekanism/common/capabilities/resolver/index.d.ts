import { $List } from "@package/java/util";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/mekanism/common/capabilities/resolver" {
    export class $ICapabilityResolver<CONTEXT> {
    }
    export interface $ICapabilityResolver<CONTEXT> {
        invalidate(capability: $BlockCapability<never, CONTEXT>, context: CONTEXT): void;
        resolve<T>(capability: $BlockCapability<T, CONTEXT>, side: CONTEXT): T;
        invalidateAll(): void;
        getSupportedCapabilities(): $List<$BlockCapability<never, CONTEXT>>;
        get supportedCapabilities(): $List<$BlockCapability<never, CONTEXT>>;
    }
}
