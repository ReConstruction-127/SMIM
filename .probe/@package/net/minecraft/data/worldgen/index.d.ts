import { $HolderGetter, $Holder$Reference, $Registry, $HolderLookup$RegistryLookup } from "@package/net/minecraft/core";
import { $Lifecycle } from "@package/com/mojang/serialization";
import { $ResourceKey_ } from "@package/net/minecraft/resources";

declare module "@package/net/minecraft/data/worldgen" {
    export class $BootstrapContext<T> {
    }
    export interface $BootstrapContext<T> {
        lookup<S>(registryKey: $ResourceKey_<$Registry<S>>): $HolderGetter<S>;
        register(key: $ResourceKey_<T>, value: T, registryLifecycle: $Lifecycle): $Holder$Reference<T>;
        register(key: $ResourceKey_<T>, value: T): $Holder$Reference<T>;
        registryLookup<S>(arg0: $ResourceKey_<$Registry<S>>): ($HolderLookup$RegistryLookup<S>) | undefined;
    }
}
