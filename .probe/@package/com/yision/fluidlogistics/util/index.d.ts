
declare module "@package/com/yision/fluidlogistics/util" {
    export class $IFluidRestockThreshold {
    }
    export interface $IFluidRestockThreshold {
        fluidlogistics$setRestockThreshold(arg0: number): void;
        fluidlogistics$getRestockThreshold(): number;
    }
    export class $IFluidPromiseLimit {
    }
    export interface $IFluidPromiseLimit {
        fluidlogistics$setPromiseLimit(arg0: number): void;
        fluidlogistics$hasPromiseLimit(): boolean;
        fluidlogistics$getPromiseLimit(): number;
    }
    export class $IFluidAdditionalStock {
    }
    export interface $IFluidAdditionalStock {
        fluidlogistics$setAdditionalStock(arg0: number): void;
        fluidlogistics$hasAdditionalStock(): boolean;
        fluidlogistics$getAdditionalStock(): number;
        fluidlogistics$getRemainingAdditionalStock(): number;
    }
}
