import { $Consumer_ } from "@package/java/util/function";
import { $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";
import { $Map_ } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
export * as builtin from "@package/net/neoforged/neoforge/registries/datamaps/builtin";

declare module "@package/net/neoforged/neoforge/registries/datamaps" {
    export class $DataMapsUpdatedEvent$UpdateCause extends $Enum<$DataMapsUpdatedEvent$UpdateCause> {
        static values(): $DataMapsUpdatedEvent$UpdateCause[];
        static valueOf(arg0: string): $DataMapsUpdatedEvent$UpdateCause;
        static CLIENT_SYNC: $DataMapsUpdatedEvent$UpdateCause;
        static SERVER_RELOAD: $DataMapsUpdatedEvent$UpdateCause;
    }
    /**
     * Values that may be interpreted as {@link $DataMapsUpdatedEvent$UpdateCause}.
     */
    export type $DataMapsUpdatedEvent$UpdateCause_ = "client_sync" | "server_reload";
    /**
     * Event fired on the game event bus when the data maps of
     * a registry have either been synced to the client or reloaded on the server.
     * 
     * This event can be used to build caches (like weighed lists) or for post-processing the data map values.
     * 
     * Remember however that the data map values should **not** end up referencing their owner, as they're not copied when attached to tags.
     */
    export class $DataMapsUpdatedEvent extends $Event {
        getCause(): $DataMapsUpdatedEvent$UpdateCause;
        /**
         * Runs the given `consumer` if the registry is of the given `type`.
         */
        ifRegistry<T>(type: $ResourceKey_<$Registry<T>>, consumer: $Consumer_<$Registry<T>>): void;
        /**
         * @return the registry that had its data maps updated
         */
        getRegistry(): $Registry<never>;
        /**
         * @return a registry access
         */
        getRegistries(): $RegistryAccess;
        /**
         * @return the key of the registry that had its data maps updated
         */
        getRegistryKey(): $ResourceKey<$Registry<never>>;
        constructor(arg0: $RegistryAccess, arg1: $Registry<never>, arg2: $DataMapsUpdatedEvent$UpdateCause_);
        get cause(): $DataMapsUpdatedEvent$UpdateCause;
        get registry(): $Registry<never>;
        get registries(): $RegistryAccess;
        get registryKey(): $ResourceKey<$Registry<never>>;
    }
    export class $DataMapType$Builder<T, R> {
        build(): $DataMapType<R, T>;
        synced(arg0: $Codec<T>, arg1: boolean): $DataMapType$Builder<T, R>;
    }
    /**
     * Event fired on the mod event bus, in order to register data map types.
     */
    export class $RegisterDataMapTypesEvent extends $Event implements $IModBusEvent {
        /**
         * Register a registry data map.
         */
        register<T, R>(type: $DataMapType<R, T>): void;
        constructor(attachments: $Map_<$ResourceKey_<$Registry<never>>, $Map_<$ResourceLocation_, $DataMapType<never, never>>>);
    }
    export class $DataMapType<R, T> {
        static builder<T, R>(arg0: $ResourceLocation_, arg1: $ResourceKey_<$Registry<R>>, arg2: $Codec<T>): $DataMapType$Builder<T, R>;
        id(): $ResourceLocation;
        codec(): $Codec<T>;
        mandatorySync(): boolean;
        registryKey(): $ResourceKey<$Registry<R>>;
        networkCodec(): $Codec<T>;
    }
    /**
     * Represents a registry object (usually a `Holder`) that has data maps.
     */
    export class $IWithData<R> {
    }
    export interface $IWithData<R> {
        getData<T>(arg0: $DataMapType<R, T>): T;
    }
}
