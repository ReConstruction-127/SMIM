import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Class } from "@package/java/lang";
export * as structure from "@package/org/embeddedt/embeddium/api/options/structure";
export * as control from "@package/org/embeddedt/embeddium/api/options/control";

declare module "@package/org/embeddedt/embeddium/api/options" {
    export class $OptionIdentifier<T> {
        matches(arg0: $ResourceLocation_): boolean;
        matches(arg0: $OptionIdentifier<never>): boolean;
        static isPresent(arg0: $OptionIdentifier<never>): boolean;
        getType(): $Class<T>;
        static create(arg0: $ResourceLocation_): $OptionIdentifier<void>;
        static create<T>(arg0: $ResourceLocation_, arg1: $Class<T>): $OptionIdentifier<T>;
        static create(arg0: string, arg1: string): $OptionIdentifier<void>;
        static create<T>(arg0: string, arg1: string, arg2: $Class<T>): $OptionIdentifier<T>;
        getPath(): string;
        getModId(): string;
        static EMPTY: $OptionIdentifier<void>;
        get type(): $Class<T>;
        get path(): string;
        get modId(): string;
    }
}
