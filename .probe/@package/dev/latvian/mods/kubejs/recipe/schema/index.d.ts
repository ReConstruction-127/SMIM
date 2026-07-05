import { $JsonObject_, $JsonObject, $JsonElement_ } from "@package/com/google/gson";
import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $RecipeSerializer } from "@package/net/minecraft/world/item/crafting";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $SequencedCollection, $LinkedHashMap, $Map_, $List_, $Map } from "@package/java/util";
import { $RecipeFunctionInstance, $RecipeFunctionInstance_ } from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $RecipeComponent, $ComponentValueMap } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $RecipeScriptContext, $RecipeTypeFunction, $KubeRecipe, $RecipeKey } from "@package/dev/latvian/mods/kubejs/recipe";
import { $Supplier_, $Supplier } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $OpsContainer, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ResourceLocation_, $ResourceKey, $RegistryOps, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipePostProcessor } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $Record, $Class, $Object } from "@package/java/lang";
import { $SourceLine_ } from "@package/dev/latvian/mods/kubejs/script";
export * as function from "@package/dev/latvian/mods/kubejs/recipe/schema/function";
export * as postprocessing from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";

declare module "@package/dev/latvian/mods/kubejs/recipe/schema" {
    export class $RecipeOptional<T> {
        static unit<T>(value: T): $RecipeOptional<T>;
        static DEFAULT: $RecipeOptional<never>;
    }
    export interface $RecipeOptional<T> {
        isDefault(): boolean;
        getDefaultValue(type: $RecipeSchemaType): T;
        getInformativeValue(): T;
        get default(): boolean;
        get informativeValue(): T;
    }
    /**
     * Values that may be interpreted as {@link $RecipeOptional}.
     */
    export type $RecipeOptional_<T> = ((type: $RecipeSchemaType) => T);
    export class $RecipeConstructor {
        toString(ops: $OpsContainer): string;
        defaultValue<T>(key: $RecipeKey<T>, value: $RecipeOptional_<T>): $RecipeConstructor;
        override<T>(key: $RecipeKey<T>, value: $RecipeOptional_<T>): $RecipeConstructor;
        create(sourceLine: $SourceLine_, type: $RecipeTypeFunction, schemaType: $RecipeSchemaType, from: $ComponentValueMap): $KubeRecipe;
        setValues(cx: $RecipeScriptContext, schemaType: $RecipeSchemaType, from: $ComponentValueMap): void;
        toJson(type: $RecipeSchemaType, ops: $DynamicOps<$JsonElement_>): $JsonObject;
        overrideValue<T>(key: $RecipeKey<T>, value: T): $RecipeConstructor;
        keys: $List<$RecipeKey<never>>;
        defaultValues: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        overrides: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        constructor(keys: $List_<$RecipeKey<never>>);
        constructor(...keys: $RecipeKey<never>[]);
    }
    export class $RecipeNamespace extends $LinkedHashMap<string, $RecipeSchemaType> {
        register(id: string, type: $RecipeSchema): $RecipeNamespace;
        register(id: string, type: $RegistryAwareSchema_): $RecipeNamespace;
        shaped(id: string): $RecipeNamespace;
        special(id: string): $RecipeNamespace;
        shapeless(id: string): $RecipeNamespace;
        withExistingParent(id: string, parent: $ResourceLocation_): $RecipeNamespace;
        registerBasic(id: string, ...keys: $RecipeKey<never>[]): $RecipeNamespace;
        getRegisteredOrThrow(id: string): $RecipeSchemaType;
        name: string;
        storage: $RecipeSchemaStorage;
        constructor(storage: $RecipeSchemaStorage, name: string);
    }
    export class $RegistryAwareSchema {
    }
    export interface $RegistryAwareSchema {
        create(cx: $RegistryAccessContainer): $RecipeSchema;
    }
    /**
     * Values that may be interpreted as {@link $RegistryAwareSchema}.
     */
    export type $RegistryAwareSchema_ = ((cx: $RegistryAccessContainer) => $RecipeSchema);
    export class $RecipeSchemaRegistry implements $KubeEvent {
        register(id: $ResourceLocation_, schema: $RegistryAwareSchema_): void;
        register(id: $ResourceLocation_, schema: $RecipeSchema): void;
        namespace(namespace: string): $RecipeNamespace;
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
        constructor(storage: $RecipeSchemaStorage);
    }
    export class $KubeRecipeFactory extends $Record {
        factory(): $Supplier<$KubeRecipe>;
        id(): $ResourceLocation;
        create(type: $RecipeTypeFunction, sourceLine: $SourceLine_, save: boolean): $KubeRecipe;
        recipeType(): $TypeInfo;
        static DEFAULT: $KubeRecipeFactory;
        constructor(id: $ResourceLocation_, recipeType: $Class<never>, factory: $Supplier_<$KubeRecipe>);
        constructor(id: $ResourceLocation_, recipeType: $TypeInfo_, factory: $Supplier_<$KubeRecipe>);
    }
    /**
     * Values that may be interpreted as {@link $KubeRecipeFactory}.
     */
    export type $KubeRecipeFactory_ = { factory?: $Supplier_<$KubeRecipe>, id?: $ResourceLocation_, recipeType?: $TypeInfo_,  } | [factory?: $Supplier_<$KubeRecipe>, id?: $ResourceLocation_, recipeType?: $TypeInfo_, ];
    export class $RecipeSchemaStorage {
        namespace(namespace: string): $RecipeNamespace;
        fireEvents(registries: $RegistryAccessContainer, resourceManager: $ResourceManager): void;
        mappings: $Map<string, $ResourceLocation>;
        recipeTypes: $Map<$ResourceLocation, $KubeRecipeFactory>;
        schemaTypes: $Map<string, $RecipeSchemaType>;
        recipeComponentCodec: $Codec<$RecipeComponent<never>>;
        recipePostProcessorCodec: $Codec<$RecipePostProcessor>;
        namespaces: $Map<string, $RecipeNamespace>;
        constructor(manager: $ServerScriptManager);
    }
    export class $RecipeSchemaType {
        getSerializer(): $RecipeSerializer<never>;
        schema: $RecipeSchema;
        parent: $RecipeSchemaType;
        serializerType: string;
        namespace: $RecipeNamespace;
        serializerKey: $ResourceKey<$RecipeSerializer<never>>;
        id: $ResourceLocation;
        constructor(namespace: $RecipeNamespace, id: $ResourceLocation_, schema: $RecipeSchema);
        get serializer(): $RecipeSerializer<never>;
    }
    export class $RecipeSchema {
        deserialize(sourceLine: $SourceLine_, type: $RecipeTypeFunction, id: $ResourceLocation_, json: $JsonObject_): $KubeRecipe;
        isHidden(): boolean;
        getKey<T>(id: string): $RecipeKey<T>;
        factory(factory: $KubeRecipeFactory_): $RecipeSchema;
        "constructor"(arg0: $RecipeConstructor): $RecipeSchema;
        addConstructor(...keys: $RecipeKey<never>[]): $RecipeSchema;
        constructors(): $Int2ObjectMap<$RecipeConstructor>;
        "function"(arg0: $RecipeFunctionInstance_): $RecipeSchema;
        postProcessor(processor: $RecipePostProcessor): $RecipeSchema;
        uniqueId(key: $RecipeKey<never>): $RecipeSchema;
        toJson(storage: $RecipeSchemaStorage, schemaType: $RecipeSchemaType, ops: $RegistryOps<$JsonElement_>): $JsonObject;
        inputCount(): number;
        outputCount(): number;
        postProcessors(): $List<$RecipePostProcessor>;
        buildUniqueId(r: $KubeRecipe): string;
        typeOverride(id: $ResourceLocation_): $RecipeSchema;
        getOptionalKey<T>(id: string): $RecipeKey<T>;
        setOpFunction<T>(name: string, key: $RecipeKey<T>, value: T): $RecipeSchema;
        minRequiredArguments(): number;
        constructorsGenerated(): boolean;
        addToListOpFunction<T>(name: string, key: $RecipeKey<$List_<T>>): $RecipeSchema;
        uniqueIds(): $List<$RecipeKey<never>>;
        uniqueIds(keys: $SequencedCollection<$RecipeKey<never>>): $RecipeSchema;
        functions: $Map<string, $RecipeFunctionInstance>;
        recipeFactory: $KubeRecipeFactory;
        keys: $List<$RecipeKey<never>>;
        keyOverrides: $Map<$RecipeKey<never>, $RecipeOptional<never>>;
        includedKeys: $List<$RecipeKey<never>>;
        constructor(keyOverrides: $Map_<$RecipeKey<never>, $RecipeOptional_<never>>, keys: $List_<$RecipeKey<never>>);
        constructor(...keys: $RecipeKey<never>[]);
        get hidden(): boolean;
    }
    export class $RecipeMappingRegistry implements $KubeEvent {
        register(name: string, type: $ResourceLocation_): void;
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
        constructor(storage: $RecipeSchemaStorage);
    }
}
