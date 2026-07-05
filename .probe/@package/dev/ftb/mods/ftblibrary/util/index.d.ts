import { $ChatFormatting_ } from "@package/net/minecraft";
import { $Component_, $Component, $Style } from "@package/net/minecraft/network/chat";
import { $List } from "@package/java/util";
import { $Object } from "@package/java/lang";
export * as client from "@package/dev/ftb/mods/ftblibrary/util/client";

declare module "@package/dev/ftb/mods/ftblibrary/util" {
    export class $BooleanConsumer {
    }
    export interface $BooleanConsumer {
        accept(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $BooleanConsumer}.
     */
    export type $BooleanConsumer_ = ((arg0: boolean) => void);
    export class $TooltipList {
        reset(): void;
        add(component: $Component_): void;
        string(text: string): void;
        getLines(): $List<$Component>;
        translate(key: string, ...objects: $Object[]): void;
        styledString(text: string, style: $Style): void;
        styledString(text: string, color: $ChatFormatting_): void;
        shouldRender(): boolean;
        blankLine(): void;
        styledTranslate(key: string, style: $Style, ...objects: $Object[]): void;
        backgroundColor: number;
        yOffset: number;
        xOffset: number;
        borderColorStart: number;
        borderColorEnd: number;
        maxWidth: number;
        constructor();
        get lines(): $List<$Component>;
    }
}
