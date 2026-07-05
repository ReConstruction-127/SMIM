import { $Type } from "@package/org/objectweb/asm";

declare module "@package/org/spongepowered/asm/mixin/injection/callback" {
    export class $Cancellable {
    }
    export interface $Cancellable {
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
    export class $CallbackInfoReturnable<R> extends $CallbackInfo {
        setReturnValue(arg0: R): void;
        getReturnValue(): R;
        getReturnValueC(): string;
        getReturnValueB(): number;
        getReturnValueD(): number;
        getReturnValueF(): number;
        getReturnValueJ(): number;
        getReturnValueS(): number;
        getReturnValueI(): number;
        getReturnValueZ(): boolean;
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: boolean);
        constructor(arg0: string, arg1: boolean);
        constructor(arg0: string, arg1: boolean, arg2: R);
        constructor(arg0: string, arg1: boolean, arg2: number);
        constructor(arg0: string, arg1: boolean, arg2: string);
        constructor(arg0: string, arg1: boolean, arg2: number);
        get returnValueC(): string;
        get returnValueB(): number;
        get returnValueD(): number;
        get returnValueF(): number;
        get returnValueJ(): number;
        get returnValueS(): number;
        get returnValueI(): number;
        get returnValueZ(): boolean;
    }
    export class $CallbackInfo implements $Cancellable {
        getId(): string;
        cancel(): void;
        isCancelled(): boolean;
        isCancellable(): boolean;
        static getCallInfoClassName(arg0: $Type): string;
        constructor(arg0: string, arg1: boolean);
        get id(): string;
        get cancelled(): boolean;
        get cancellable(): boolean;
    }
}
