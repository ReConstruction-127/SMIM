import { $Stream } from "@package/java/util/stream";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $Dynamic } from "@package/com/mojang/serialization";
import { $ListTag, $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Set } from "@package/java/util";
import { $Class } from "@package/java/lang";

declare module "@package/net/minecraft/world/level/timers" {
    export class $TimerQueue<T> {
        remove(eventId: string): number;
        store(): $ListTag;
        schedule(id: string, triggerTime: number, arg2: $TimerCallback_<T>): void;
        tick(obj: T, gameTime: number): void;
        getEventsIds(): $Set<string>;
        constructor(callbacksRegistry: $TimerCallbacks<T>, scheduledEventsDynamic: $Stream<$Dynamic<never>>);
        constructor(callbacksRegistry: $TimerCallbacks<T>);
        get eventsIds(): $Set<string>;
    }
    export class $TimerCallbacks<C> {
        deserialize(tag: $CompoundTag_): $TimerCallback<C>;
        register(serializer: $TimerCallback$Serializer<C, never>): $TimerCallbacks<C>;
        serialize<T extends $TimerCallback<C>>(callback: T): $CompoundTag;
        static SERVER_CALLBACKS: $TimerCallbacks<$MinecraftServer>;
        constructor();
    }
    export class $TimerCallback<T> {
    }
    export interface $TimerCallback<T> {
        handle(obj: T, manager: $TimerQueue<T>, gameTime: number): void;
    }
    /**
     * Values that may be interpreted as {@link $TimerCallback}.
     */
    export type $TimerCallback_<T> = ((arg0: T, arg1: $TimerQueue<T>, arg2: number) => void);
    export class $TimerCallback$Serializer<T, C extends $TimerCallback<T>> {
        deserialize(tag: $CompoundTag_): C;
        getId(): $ResourceLocation;
        serialize(tag: $CompoundTag_, callback: C): void;
        getCls(): $Class<never>;
        constructor(id: $ResourceLocation_, cls: $Class<never>);
        get id(): $ResourceLocation;
        get cls(): $Class<never>;
    }
}
