import { $InteractionResult } from "@package/net/minecraft/world";
export * as events from "@package/dev/architectury/event/events";
export * as forge from "@package/dev/architectury/event/forge";

declare module "@package/dev/architectury/event" {
    export class $EventResult {
        isTrue(): boolean;
        static interrupt(value: boolean): $EventResult;
        value(): boolean;
        isEmpty(): boolean;
        isPresent(): boolean;
        static pass(): $EventResult;
        isFalse(): boolean;
        static interruptTrue(): $EventResult;
        static interruptDefault(): $EventResult;
        static interruptFalse(): $EventResult;
        asMinecraft(): $InteractionResult;
        interruptsFurtherEvaluation(): boolean;
        get true(): boolean;
        get empty(): boolean;
        get present(): boolean;
        get false(): boolean;
    }
    export class $EventActor<T> {
    }
    export interface $EventActor<T> {
        act(arg0: T): $EventResult;
    }
    /**
     * Values that may be interpreted as {@link $EventActor}.
     */
    export type $EventActor_<T> = ((arg0: T) => $EventResult);
    export class $Event<T> {
    }
    export interface $Event<T> {
        isRegistered(arg0: T): boolean;
        register(arg0: T): void;
        invoker(): T;
        unregister(arg0: T): void;
        clearListeners(): void;
    }
}
