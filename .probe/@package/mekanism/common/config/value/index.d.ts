import { $IMekanismConfig, $IConfigTranslation } from "@package/mekanism/common/config";
import { $BiPredicate_, $LongSupplier, $IntSupplier } from "@package/java/util/function";
import { $ModConfigSpec$Builder, $ModConfigSpec$ConfigValue } from "@package/net/neoforged/neoforge/common";

declare module "@package/mekanism/common/config/value" {
    export class $CachedIntValue extends $CachedValue<number> implements $IntSupplier, $LongSupplier {
        get(): number;
        static wrap(config: $IMekanismConfig, internal: $ModConfigSpec$ConfigValue<number>): $CachedIntValue;
        set(value: number): void;
        getOrDefault(): number;
        getAsInt(): number;
        getAsLong(): number;
        get orDefault(): number;
        get asInt(): number;
        get asLong(): number;
    }
    export class $CachedValue<T> {
        clearCache(unloading: boolean): void;
        removeInvalidationListenersMatching<DATA>(data: DATA, checker: $BiPredicate_<$CachedValue$IConfigValueInvalidationListener, DATA>): void;
        hasInvalidationListeners(): boolean;
        addInvalidationListener(listener: $CachedValue$IConfigValueInvalidationListener): void;
        removeInvalidationListener(listener: $CachedValue$IConfigValueInvalidationListener): void;
    }
    export class $CachedLongValue extends $CachedValue<number> implements $LongSupplier {
        get(): number;
        static wrap(config: $IMekanismConfig, internal: $ModConfigSpec$ConfigValue<number>): $CachedLongValue;
        set(value: number): void;
        getOrDefault(): number;
        getAsLong(): number;
        static define(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number, min: number, max: number): $CachedLongValue;
        static definedMin(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number, min: number): $CachedLongValue;
        static definePositive(config: $IMekanismConfig, builder: $ModConfigSpec$Builder, comment: $IConfigTranslation, path: string, defaultValue: number): $CachedLongValue;
        get orDefault(): number;
        get asLong(): number;
    }
}
