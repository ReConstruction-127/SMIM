import { $CommandBuildContext } from "@package/net/minecraft/commands";
import { $JsonObject_ } from "@package/com/google/gson";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { RegistryTypes, RegistryMarked } from "@special/types";
import { $ArgumentType } from "@package/com/mojang/brigadier/arguments";

declare module "@package/net/minecraft/commands/synchronization" {
    export class $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
    }
    export interface $ArgumentTypeInfo<A extends $ArgumentType<never>, T extends $ArgumentTypeInfo$Template<A>> {
        unpack(argument: A): T;
        deserializeFromNetwork(buffer: $FriendlyByteBuf): T;
        serializeToNetwork(template: T, buffer: $FriendlyByteBuf): void;
        serializeToJson(template: T, json: $JsonObject_): void;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentTypeInfo}.
     */
    export type $ArgumentTypeInfo_<A, T> = RegistryTypes.CommandArgumentType;
    export class $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
    }
    export interface $ArgumentTypeInfo$Template<A extends $ArgumentType<never>> {
        type(): $ArgumentTypeInfo<A, never>;
        instantiate(context: $CommandBuildContext): A;
    }
    export interface $ArgumentTypeInfo<A, T> extends RegistryMarked<RegistryTypes.CommandArgumentTypeTag, RegistryTypes.CommandArgumentType> {}
}
