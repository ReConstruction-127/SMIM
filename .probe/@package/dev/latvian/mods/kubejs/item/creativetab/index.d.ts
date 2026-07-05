import { $Registry } from "@package/net/minecraft/core";
import { $CreativeModeTab_, $CreativeModeTab$TabVisibility_, $ItemStack, $CreativeModeTab, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Object } from "@package/java/lang";
import { $ItemPredicate_, $ItemPredicate } from "@package/dev/latvian/mods/kubejs/item";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";

declare module "@package/dev/latvian/mods/kubejs/item/creativetab" {
    export class $CreativeTabBuilder extends $BuilderBase<$CreativeModeTab> {
        content(content: $CreativeTabContentSupplier_): this;
        icon(icon: $CreativeTabIconSupplier_): this;
        registryKey: $ResourceKey<$Registry<$CreativeModeTab>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $CreativeTabKubeEvent implements $KubeEvent {
        remove(filter: $ItemPredicate_): void;
        add(items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        add(items: $ItemStack_[]): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[]): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[]): void;
        setIcon(icon: $ItemStack_): void;
        setDisplayName(component: $Component_): void;
        removeFromSearch(filter: $ItemPredicate_): void;
        removeFromParent(filter: $ItemPredicate_): void;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `exit` denotes a `default` outcome.
         */
        exit(value: $Object): $Object;
        /**
         * Cancels the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(): $Object;
        /**
         * Cancels the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `cancel` denotes a `false` outcome.
         */
        cancel(value: $Object): $Object;
        /**
         * Stops the event with default exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(): $Object;
        /**
         * Stops the event with the given exit value. Execution will be stopped **immediately**.
         * 
         * `success` denotes a `true` outcome.
         */
        success(value: $Object): $Object;
        tab: $CreativeModeTab;
        showRestrictedItems: boolean;
        constructor(tab: $CreativeModeTab_, showRestrictedItems: boolean, callback: $CreativeTabCallback);
        set icon(value: $ItemStack_);
        set displayName(value: $Component_);
    }
    export class $CreativeTabContentSupplier {
        static DEFAULT: $CreativeTabContentSupplier;
    }
    export interface $CreativeTabContentSupplier {
        getContent(showRestrictedItems: boolean): $ItemPredicate;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabContentSupplier}.
     */
    export type $CreativeTabContentSupplier_ = ((showRestrictedItems: boolean) => $ItemPredicate_);
    export class $CreativeTabIconSupplier {
        static DEFAULT: $CreativeTabIconSupplier;
    }
    export interface $CreativeTabIconSupplier {
        getIcon(): $ItemStack;
        get icon(): $ItemStack;
    }
    /**
     * Values that may be interpreted as {@link $CreativeTabIconSupplier}.
     */
    export type $CreativeTabIconSupplier_ = (() => $ItemStack_);
    export class $CreativeTabCallback {
    }
    export interface $CreativeTabCallback {
        remove(filter: $ItemPredicate_, removeParent: boolean, removeSearch: boolean): void;
        addBefore(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
        addAfter(order: $ItemStack_, items: $ItemStack_[], visibility: $CreativeModeTab$TabVisibility_): void;
    }
}
