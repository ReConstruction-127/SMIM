import { $Supplier_ } from "@package/java/util/function";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $Component, $Component_ } from "@package/net/minecraft/network/chat";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $TextProvider } from "@package/org/embeddedt/embeddium/impl/gui/options";
import { $ImmutableList } from "@package/com/google/common/collect";
import { $Control } from "@package/org/embeddedt/embeddium/api/options/control";
import { $Enum } from "@package/java/lang";
import { $Collection } from "@package/java/util";
import { $OptionIdentifier } from "@package/org/embeddedt/embeddium/api/options";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/org/embeddedt/embeddium/api/options/structure" {
    export class $OptionPage {
        getName(): $Component;
        getId(): $OptionIdentifier<void>;
        getOptions(): $ImmutableList<$Option<never>>;
        getGroups(): $ImmutableList<$OptionGroup>;
        constructor(arg0: $OptionIdentifier<void>, arg1: $Component_, arg2: $ImmutableList<$OptionGroup>);
        get name(): $Component;
        get id(): $OptionIdentifier<void>;
        get options(): $ImmutableList<$Option<never>>;
        get groups(): $ImmutableList<$OptionGroup>;
    }
    export class $OptionImpact extends $Enum<$OptionImpact> implements $TextProvider {
        static values(): $OptionImpact[];
        static valueOf(arg0: string): $OptionImpact;
        getLocalizedName(): $Component;
        static HIGH: $OptionImpact;
        static MEDIUM: $OptionImpact;
        static LOW: $OptionImpact;
        static VARIES: $OptionImpact;
        get localizedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $OptionImpact}.
     */
    export type $OptionImpact_ = "low" | "medium" | "high" | "varies";
    export class $OptionControlElement<T> {
    }
    export interface $OptionControlElement<T> extends $Renderable, $GuiEventListener, $NarratableEntry {
        getOption(): $Option<T>;
        get option(): $Option<T>;
    }
    export class $Option<T> {
    }
    export interface $Option<T> {
        getName(): $Component;
        reset(): void;
        getValue(): T;
        getId(): $OptionIdentifier<T>;
        setValue(arg0: T): void;
        getControl(): $Control<T>;
        getFlags(): $Collection<$OptionFlag>;
        isAvailable(): boolean;
        getImpact(): $OptionImpact;
        applyChanges(): void;
        getStorage(): $OptionStorage<never>;
        hasChanged(): boolean;
        getTooltip(): $Component;
        get name(): $Component;
        get id(): $OptionIdentifier<T>;
        get control(): $Control<T>;
        get flags(): $Collection<$OptionFlag>;
        get available(): boolean;
        get impact(): $OptionImpact;
        get storage(): $OptionStorage<never>;
        get tooltip(): $Component;
    }
    export class $OptionGroup {
        getId(): $OptionIdentifier<void>;
        static createBuilder(): $OptionGroup$Builder;
        getOptions(): $ImmutableList<$Option<never>>;
        id: $OptionIdentifier<void>;
        get options(): $ImmutableList<$Option<never>>;
    }
    export class $OptionFlag extends $Enum<$OptionFlag> {
        static values(): $OptionFlag[];
        static valueOf(arg0: string): $OptionFlag;
        static REQUIRES_GAME_RESTART: $OptionFlag;
        static REQUIRES_ASSET_RELOAD: $OptionFlag;
        static REQUIRES_RENDERER_UPDATE: $OptionFlag;
        static REQUIRES_RENDERER_RELOAD: $OptionFlag;
    }
    /**
     * Values that may be interpreted as {@link $OptionFlag}.
     */
    export type $OptionFlag_ = "requires_renderer_reload" | "requires_renderer_update" | "requires_asset_reload" | "requires_game_restart";
    export class $OptionStorage<T> {
    }
    export interface $OptionStorage<T> {
        save(): void;
        getData(): T;
        get data(): T;
    }
    export class $OptionGroup$Builder {
        add(arg0: $Option<never>): $OptionGroup$Builder;
        build(): $OptionGroup;
        setId(arg0: $OptionIdentifier<void>): $OptionGroup$Builder;
        setId(arg0: $ResourceLocation_): $OptionGroup$Builder;
        addConditionally(arg0: boolean, arg1: $Supplier_<$Option<never>>): $OptionGroup$Builder;
        constructor();
    }
}
