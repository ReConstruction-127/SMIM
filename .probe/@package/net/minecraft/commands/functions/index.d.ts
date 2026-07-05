import { $ExecutionCommandSource } from "@package/net/minecraft/commands";
import { $UnboundEntryAction } from "@package/net/minecraft/commands/execution";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $CommandDispatcher, $StringReader } from "@package/com/mojang/brigadier";
import { $List_, $List } from "@package/java/util";
import { $CharSequence } from "@package/java/lang";

declare module "@package/net/minecraft/commands/functions" {
    export class $InstantiatedFunction<T> {
    }
    export interface $InstantiatedFunction<T> {
        id(): $ResourceLocation;
        entries(): $List<$UnboundEntryAction<T>>;
    }
    export class $CommandFunction<T> {
        static parseCommand<T extends $ExecutionCommandSource<T>>(dispatcher: $CommandDispatcher<T>, source: T, command: $StringReader): $UnboundEntryAction<T>;
        static fromLines<T extends $ExecutionCommandSource<T>>(id: $ResourceLocation_, dispatcher: $CommandDispatcher<T>, source: T, lines: $List_<string>): $CommandFunction<T>;
        static checkCommandLineLength(command: $CharSequence): void;
    }
    export interface $CommandFunction<T> {
        id(): $ResourceLocation;
        instantiate(_arguments: $CompoundTag_ | null, dispatcher: $CommandDispatcher<T>): $InstantiatedFunction<T>;
    }
}
