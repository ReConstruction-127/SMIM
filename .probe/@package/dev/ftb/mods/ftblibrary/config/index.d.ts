import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $SelectableResource } from "@package/dev/ftb/mods/ftblibrary/config/ui/resource";
import { $Component } from "@package/net/minecraft/network/chat";
import { $SNBTConfig } from "@package/dev/ftb/mods/ftblibrary/snbt/config";
import { $EntityType_, $EntityType } from "@package/net/minecraft/world/entity";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Pattern } from "@package/java/util/regex";
import { $Spliterator, $Iterator, $Random, $List, $List_, $Collection, $OptionalLong, $Map } from "@package/java/util";
import { $FluidStack } from "@package/dev/architectury/fluid";
import { $Widget } from "@package/dev/ftb/mods/ftblibrary/ui";
import { $Function_, $Consumer_, $Predicate_ } from "@package/java/util/function";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Color4I, $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Enum, $Number, $Comparable, $Object, $Iterable } from "@package/java/lang";
import { $MouseButton } from "@package/dev/ftb/mods/ftblibrary/ui/input";
export * as ui from "@package/dev/ftb/mods/ftblibrary/config/ui";

declare module "@package/dev/ftb/mods/ftblibrary/config" {
    export class $BooleanConfig extends $ConfigWithVariants<boolean> {
        getIcon(v: boolean): $Icon;
        getColor(v: boolean): $Color4I;
        getStringForGUI(v: boolean): $Component;
        getIteration(currentValue: boolean, next: boolean): boolean;
        static TRUE_TEXT: $Component;
        static FALSE_TEXT: $Component;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
    }
    export class $NameMap<E> implements $Iterable<E> {
        getName(value: E): string;
        size(): number;
        get(index: number): E;
        get(s: string): E;
        iterator(): $Iterator<E>;
        static of<T>(defaultValue: T, values: $List_<T>): $NameMap$Builder<T>;
        static of<T>(defaultValue: T, values: T[]): $NameMap$Builder<T>;
        offset(value: E, index: number): E;
        write(data: $FriendlyByteBuf, object: E): void;
        read(data: $FriendlyByteBuf): E;
        getIndex(e: E): number;
        getDisplayName(value: E): $Component;
        getIcon(v: E): $Icon;
        getPrevious(value: E): E;
        getNext(value: E): E;
        withDefault(def: E): $NameMap<E>;
        getRandom(rand: $Random): E;
        getColor(value: E): $Color4I;
        getNullable(s: string): E;
        getStringIndex(s: string): number;
        spliterator(): $Spliterator<E>;
        forEach(arg0: $Consumer_<E>): void;
        defaultValue: E;
        keys: $List<string>;
        values: $List<E>;
        map: $Map<string, E>;
        [Symbol.iterator](): Iterator<E>
    }
    export class $Tristate extends $Enum<$Tristate> {
        isTrue(): boolean;
        get(def: boolean): boolean;
        static values(): $Tristate[];
        static valueOf(name: string): $Tristate;
        write(nbt: $CompoundTag_, key: string): void;
        write(buffer: $FriendlyByteBuf): void;
        static read(nbt: $CompoundTag_, key: string): $Tristate;
        static read(buffer: $FriendlyByteBuf): $Tristate;
        isDefault(): boolean;
        isFalse(): boolean;
        getOpposite(): $Tristate;
        result: $InteractionResult;
        color: $Color4I;
        static NAME_MAP: $NameMap<$Tristate>;
        displayName: string;
        icon: $Icon;
        static TRUE: $Tristate;
        static FALSE: $Tristate;
        static VALUES: $Tristate[];
        static DEFAULT: $Tristate;
        get true(): boolean;
        get default(): boolean;
        get false(): boolean;
        get opposite(): $Tristate;
    }
    /**
     * Values that may be interpreted as {@link $Tristate}.
     */
    export type $Tristate_ = "false" | "true" | "default";
    export class $ResourceConfigValue<T> extends $ConfigValue<T> {
        isEmpty(): boolean;
        getResource(): $SelectableResource<T>;
        fixedResourceSize(): $OptionalLong;
        allowEmptyResource(): boolean;
        setResource(arg0: $SelectableResource<T>): boolean;
        setAllowNBTEdit(allow: boolean): $ResourceConfigValue<T>;
        withAllowEmpty(allowEmpty: boolean): $ResourceConfigValue<T>;
        allowResource(resource: T): boolean;
        withFilter(filter: $Predicate_<T>): $ResourceConfigValue<T>;
        canHaveNBT(): boolean;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
        get empty(): boolean;
        set allowNBTEdit(value: boolean);
    }
    export class $IntConfig extends $NumberConfig<number> {
        scrollValue(currentValue: number, forward: boolean): (number) | undefined;
        min: number;
        max: number;
        static COLOR: $Color4I;
        id: string;
        static NULL_TEXT: $Component;
        constructor(mn: number, mx: number);
    }
    export class $ItemStackConfig extends $ResourceConfigValue<$ItemStack> {
        getValue(): $ItemStack;
        copy(value: $ItemStack_): $ItemStack;
        getStringForGUI(v: $ItemStack_): $Component;
        id: string;
        static NULL_TEXT: $Component;
        constructor(single: boolean, empty: boolean);
        constructor(fixedSize: number);
        get value(): $ItemStack;
    }
    export class $ConfigWithVariants<T> extends $ConfigValue<T> {
        getIteration(arg0: T, arg1: boolean): T;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
    }
    export class $ConfigGroup implements $Comparable<$ConfigGroup> {
        getName(): $Component;
        compareTo(o: $ConfigGroup): number;
        add<T, CV extends $ConfigValue<T>>(id: string, type: CV, value: T, setter: $Consumer_<T>, defaultValue: T): CV;
        getParent(): $ConfigGroup;
        getId(): string;
        save(accepted: boolean): void;
        getPath(): string;
        addString(id: string, value: string, setter: $Consumer_<string>, def: string): $StringConfig;
        addString(id: string, value: string, setter: $Consumer_<string>, def: string, pattern: $Pattern): $StringConfig;
        addDouble(id: string, value: number, setter: $Consumer_<number>, def: number, min: number, max: number): $DoubleConfig;
        addEnum<E>(id: string, value: E, setter: $Consumer_<E>, nameMap: $NameMap<E>, def: E): $EnumConfig<E>;
        addEnum<E>(id: string, value: E, setter: $Consumer_<E>, nameMap: $NameMap<E>): $EnumConfig<E>;
        addLong(id: string, value: number, setter: $Consumer_<number>, def: number, min: number, max: number): $LongConfig;
        addInt(id: string, value: number, setter: $Consumer_<number>, def: number, min: number, max: number): $IntConfig;
        getNameKey(): string;
        addList<E, CV extends $ConfigValue<E>>(id: string, value: $List_<E>, type: CV, def: E): $ListConfig<E, CV>;
        addList<E, CV extends $ConfigValue<E>>(id: string, value: $List_<E>, type: CV, setter: $Consumer_<$List<E>>, def: E): $ListConfig<E, CV>;
        getValues(): $Collection<$ConfigValue<never>>;
        setNameKey(key: string): $ConfigGroup;
        getOrCreateSubgroup(id: string): $ConfigGroup;
        getOrCreateSubgroup(id: string, displayOrder: number): $ConfigGroup;
        addColor(id: string, value: $Color4I, setter: $Consumer_<$Color4I>, def: $Color4I): $ColorConfig;
        addBool(id: string, value: boolean, setter: $Consumer_<boolean>, def: boolean): $BooleanConfig;
        getTooltip(): $Component;
        addItemStack(id: string, value: $ItemStack_, setter: $Consumer_<$ItemStack>, def: $ItemStack_, singleItem: boolean, allowEmpty: boolean): $ItemStackConfig;
        addItemStack(id: string, value: $ItemStack_, setter: $Consumer_<$ItemStack>, def: $ItemStack_, fixedSize: number): $ItemStackConfig;
        addEntityFace(id: string, value: $EntityType_<never>, setter: $Consumer_<$EntityType<never>>, def: $EntityType_<never>): $EntityFaceConfig;
        static createEditable(config: $SNBTConfig, groupName: string, serverConfig: boolean): $ConfigGroup;
        getSubgroups(): $Collection<$ConfigGroup>;
        addFluidStack(id: string, value: $FluidStack, setter: $Consumer_<$FluidStack>, def: $FluidStack, allowEmpty: boolean): $FluidConfig;
        addFluidStack(id: string, value: $FluidStack, setter: $Consumer_<$FluidStack>, def: $FluidStack, fixedSize: number): $FluidConfig;
        addImage(id: string, value: $ResourceLocation_, setter: $Consumer_<$ResourceLocation>, def: $ResourceLocation_): $ImageResourceConfig;
        addTristate(id: string, value: $Tristate_, setter: $Consumer_<$Tristate>, def: $Tristate_): $EnumConfig<$Tristate>;
        addTristate(id: string, value: $Tristate_, setter: $Consumer_<$Tristate>): $EnumConfig<$Tristate>;
        constructor(id: string, savedCallback: $ConfigCallback_);
        constructor(id: string);
        get name(): $Component;
        get parent(): $ConfigGroup;
        get id(): string;
        get path(): string;
        get values(): $Collection<$ConfigValue<never>>;
        get tooltip(): $Component;
        get subgroups(): $Collection<$ConfigGroup>;
    }
    export class $FluidConfig extends $ResourceConfigValue<$FluidStack> {
        getStringForGUI(v: $FluidStack): $Component;
        showAmount(show: boolean): $FluidConfig;
        id: string;
        static NULL_TEXT: $Component;
        constructor(allowEmpty: boolean);
        constructor(fixedSize: number);
    }
    export class $ConfigFromString<T> extends $ConfigValue<T> {
        parse(arg0: $Consumer_<T>, arg1: string): boolean;
        canScroll(): boolean;
        getStringFromValue(v: T): string;
        scrollValue(currentValue: T, forward: boolean): (T) | undefined;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
    }
    export class $NumberConfig<T extends $Number> extends $ConfigFromString<T> {
        getColor(v: T): $Color4I;
        fader(v: boolean): $NumberConfig<T>;
        getStringForGUI(v: T): $Component;
        withScrollIncrement(increment: T): $NumberConfig<T>;
        min: T;
        max: T;
        static COLOR: $Color4I;
        id: string;
        static NULL_TEXT: $Component;
        constructor(mn: T, mx: T);
    }
    export class $StringConfig extends $ConfigFromString<string> {
        getColor(v: string): $Color4I;
        getStringForGUI(v: string): $Component;
        static COLOR: $Color4I;
        pattern: $Pattern;
        id: string;
        static NULL_TEXT: $Component;
        constructor(p: $Pattern);
        constructor();
    }
    export class $ConfigCallback {
    }
    export interface $ConfigCallback {
        save(arg0: boolean): void;
    }
    /**
     * Values that may be interpreted as {@link $ConfigCallback}.
     */
    export type $ConfigCallback_ = ((arg0: boolean) => void);
    export class $LongConfig extends $NumberConfig<number> {
        scrollValue(currentValue: number, forward: boolean): (number) | undefined;
        min: number;
        max: number;
        static COLOR: $Color4I;
        id: string;
        static NULL_TEXT: $Component;
        constructor(mn: number, mx: number);
    }
    export class $NameMap$Builder<T> {
        name(p: $Function_<T, $Component>): $NameMap$Builder<T>;
        id(p: $Function_<T, string>): $NameMap$Builder<T>;
        create(): $NameMap<T>;
        color(p: $Function_<T, $Color4I>): $NameMap$Builder<T>;
        nameKey(p: $Function_<T, string>): $NameMap$Builder<T>;
        icon(p: $Function_<T, $Icon>): $NameMap$Builder<T>;
        baseNameKey(key: string): $NameMap$Builder<T>;
    }
    export class $ImageResourceConfig extends $ResourceConfigValue<$ResourceLocation> {
        static getResourceLocation(icon: $Icon): $ResourceLocation;
        id: string;
        static NONE: $ResourceLocation;
        static NULL_TEXT: $Component;
        constructor();
    }
    export class $EntityFaceConfig extends $ResourceConfigValue<$EntityType<never>> {
        getStringForGUI(v: $EntityType_<never>): $Component;
        id: string;
        static NONE: $EntityType<never>;
        static NULL_TEXT: $Component;
        constructor();
    }
    export class $ConfigValue<T> implements $Comparable<$ConfigValue<T>> {
        getName(): string;
        compareTo(o: $ConfigValue<$ConfigValue<T>>): number;
        getValue(): $ConfigValue<T>;
        static info(key: string, value: $Object): $Component;
        init(group: $ConfigGroup, id: string, value: $ConfigValue<T>, setter: $Consumer_<$ConfigValue<T>>, defaultValue: $ConfigValue<T>): $ConfigValue<$ConfigValue<T>>;
        setValue(value: $ConfigValue<T>): void;
        copy(value: $ConfigValue<T>): $ConfigValue<T>;
        getDefaultValue(): $ConfigValue<T>;
        getPath(): string;
        isEqual(v1: $ConfigValue<T>, v2: $ConfigValue<T>): boolean;
        getIcon(): $Icon;
        getIcon(v: $ConfigValue<T>): $Icon;
        getNameKey(): string;
        getGroup(): $ConfigGroup;
        getCanEdit(): boolean;
        addInfo(list: $TooltipList): void;
        setNameKey(key: string): $ConfigValue<$ConfigValue<T>>;
        setIcon(i: $Icon): $ConfigValue<$ConfigValue<T>>;
        getColor(v: $ConfigValue<T>): $Color4I;
        getColor(): $Color4I;
        onClicked(arg0: $Widget, arg1: $MouseButton, arg2: $ConfigCallback_): void;
        setCanEdit(e: boolean): $ConfigValue<$ConfigValue<T>>;
        getTooltip(): string;
        applyValue(): void;
        setOrder(o: number): $ConfigValue<$ConfigValue<T>>;
        setCurrentValue(v: $ConfigValue<T>): boolean;
        setDefaultValue(defaultValue: $ConfigValue<T>): void;
        getStringForGUI(): $Component;
        getStringForGUI(v: $ConfigValue<T>): $Component;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
        get name(): string;
        get path(): string;
        get group(): $ConfigGroup;
        get tooltip(): string;
        set order(value: number);
        set currentValue(value: $ConfigValue<T>);
    }
    export class $EnumConfig<E> extends $ConfigWithVariants<E> {
        nameMap: $NameMap<E>;
        id: string;
        static NULL_TEXT: $Component;
        constructor(nm: $NameMap<E>);
    }
    export class $ListConfig<E, CV extends $ConfigValue<E>> extends $ConfigValue<$List<E>> {
        getType(): CV;
        copy(v: $List_<E>): $List<E>;
        getColor(v: $List_<E>): $Color4I;
        getStringForGUI(v: $List_<E>): $Component;
        static COLOR: $Color4I;
        static EMPTY_LIST: $Component;
        static NON_EMPTY_LIST: $Component;
        id: string;
        static NULL_TEXT: $Component;
        constructor(t: CV);
        get type(): CV;
    }
    export class $DoubleConfig extends $NumberConfig<number> {
        getStringFromValue(v: number): string;
        scrollValue(currentValue: number, forward: boolean): (number) | undefined;
        min: number;
        max: number;
        static COLOR: $Color4I;
        id: string;
        static NULL_TEXT: $Component;
        constructor(mn: number, mx: number);
    }
    export class $ColorConfig extends $ConfigValue<$Color4I> {
        getStringForGUI(v: $Color4I): $Component;
        isAllowAlphaEdit(): boolean;
        withAlphaEditing(): $ColorConfig;
        id: string;
        static NULL_TEXT: $Component;
        constructor();
        get allowAlphaEdit(): boolean;
    }
}
