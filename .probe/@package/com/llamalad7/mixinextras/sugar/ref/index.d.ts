
declare module "@package/com/llamalad7/mixinextras/sugar/ref" {
    export class $LocalRef<T> {
    }
    export interface $LocalRef<T> {
        get(): T;
        set(arg0: T): void;
    }
}
