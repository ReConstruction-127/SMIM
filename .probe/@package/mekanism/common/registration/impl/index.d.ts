import { $MekanismDeferredHolder } from "@package/mekanism/common/registration";
import { $ResourceKey_ } from "@package/net/minecraft/resources";
import { $BlockEntityTicker, $BlockEntityType, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/mekanism/common/registration/impl" {
    export class $TileEntityTypeRegistryObject<BE extends $BlockEntity> extends $MekanismDeferredHolder<$BlockEntityType<never>, $BlockEntityType<BE>> {
        getTicker(isClient: boolean): $BlockEntityTicker<BE>;
        constructor(key: $ResourceKey_<$BlockEntityType<never>>);
    }
}
