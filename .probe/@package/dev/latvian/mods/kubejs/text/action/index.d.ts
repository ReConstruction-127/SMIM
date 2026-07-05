import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $Record } from "@package/java/lang";
import { $List_, $Map } from "@package/java/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/text/action" {
    export class $TextAction {
        static MAP: $Map<number, $TooltipActionType<never>>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>;
    }
    export interface $TextAction {
        type(): $TooltipActionType<never>;
        apply(lines: $List_<$Component_>): void;
    }
    export class $TextActionBuilder {
        insert(line: number, text: $List_<$Component_>): void;
        clear(): void;
        add(text: $List_<$Component_>): void;
        dynamic(id: string): void;
        removeLine(line: number): void;
        removeText(match: $Component_): void;
        removeExactText(match: $Component_): void;
        constructor();
    }
    export class $TooltipActionType<T extends $TextAction> extends $Record {
        type(): number;
        streamCodec(): $StreamCodec<$RegistryFriendlyByteBuf, T>;
        constructor(type: number, streamCodec: $StreamCodec<$RegistryFriendlyByteBuf, T>);
    }
    /**
     * Values that may be interpreted as {@link $TooltipActionType}.
     */
    export type $TooltipActionType_<T> = { streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>, type?: number,  } | [streamCodec?: $StreamCodec<$RegistryFriendlyByteBuf, $TextAction>, type?: number, ];
}
