import { $JsonObject_, $JsonObject, $JsonElement_ } from "@package/com/google/gson";
import { $ReloadableServerResources } from "@package/net/minecraft/server";
import { $DynamicOps, $Codec } from "@package/com/mojang/serialization";
import { $RecipeSerializer, $Recipe, $CraftingInput, $Ingredient, $Ingredient_, $RecipeInput } from "@package/net/minecraft/world/item/crafting";
import { $Compostable_, $Compostable } from "@package/net/neoforged/neoforge/registries/datamaps/builtin";
import { $ResourceManager } from "@package/net/minecraft/server/packs/resources";
import { $List, $Map_, $List_, $Collection, $SequencedSet, $Map, $Set } from "@package/java/util";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $RecipeComponentValue, $RecipeComponent, $RecipeValidationContext, $ComponentRole, $ComponentRole_ } from "@package/dev/latvian/mods/kubejs/recipe/component";
import { $Consumer_ } from "@package/java/util/function";
import { $TypeInfo_, $TypeInfo } from "@package/dev/latvian/mods/rhino/type";
import { $Holder, $Registry } from "@package/net/minecraft/core";
import { $TickDuration_, $SlotFilter_, $RegistryOpsContainer, $WrappedJS, $ErrorStack, $RegistryAccessContainer } from "@package/dev/latvian/mods/kubejs/util";
import { $ReplacementMatchInfo_ } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RecipePostProcessor } from "@package/dev/latvian/mods/kubejs/recipe/schema/postprocessing";
import { $CustomJavaToJsWrapper } from "@package/dev/latvian/mods/rhino/util";
import { $RecipeSchemaStorage, $RecipeOptional_, $RecipeSchemaType, $RecipeSchema } from "@package/dev/latvian/mods/kubejs/recipe/schema";
import { $RecipeFilter_, $RecipeMatchContext } from "@package/dev/latvian/mods/kubejs/recipe/filter";
import { $Record, $Object } from "@package/java/lang";
import { $WithScriptContext, $SourceLine_, $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { DocumentedRecipes, Minecraft$Stonecutting, Minecraft$CampfireCooking, Minecraft$Smelting, Kubejs$Shaped, Minecraft$Smoking, Minecraft$Blasting, Minecraft$SmithingTransform, Kubejs$Shapeless, Minecraft$SmithingTrim } from "@side-only/server/events/recipes";
import { $TagKey, $TagKey_, $TagLoader$EntryWithSource, $TagLoader$EntryWithSource_ } from "@package/net/minecraft/tags";
import { $IngredientAction } from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
import { $Item_, $Item, $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $ServerScriptManager } from "@package/dev/latvian/mods/kubejs/server";
import { $Pattern } from "@package/java/util/regex";
import { $VirtualDataMapFile } from "@package/dev/latvian/mods/kubejs/script/data";
import { $Stream } from "@package/java/util/stream";
import { $ResourceLocation_, $ResourceKey_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $RecipeLikeKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $Scriptable, $BaseFunction } from "@package/dev/latvian/mods/rhino";
export * as schema from "@package/dev/latvian/mods/kubejs/recipe/schema";
export * as viewer from "@package/dev/latvian/mods/kubejs/recipe/viewer";
export * as filter from "@package/dev/latvian/mods/kubejs/recipe/filter";
export * as ingredientaction from "@package/dev/latvian/mods/kubejs/recipe/ingredientaction";
export * as component from "@package/dev/latvian/mods/kubejs/recipe/component";
export * as special from "@package/dev/latvian/mods/kubejs/recipe/special";
export * as match from "@package/dev/latvian/mods/kubejs/recipe/match";

declare module "@package/dev/latvian/mods/kubejs/recipe" {
    export class $CachedTagLookup$Entry<T> extends $Record {
        lookup(): $CachedTagLookup<T>;
        key(): $ResourceKey<T>;
        registry(): $Registry<T>;
        constructor(key: $ResourceKey_<T>, registry: $Registry<T>, lookup: $CachedTagLookup<T>);
    }
    /**
     * Values that may be interpreted as {@link $CachedTagLookup$Entry}.
     */
    export type $CachedTagLookup$Entry_<T> = { registry?: $Registry<any>, key?: $ResourceKey_<any>, lookup?: $CachedTagLookup<any>,  } | [registry?: $Registry<any>, key?: $ResourceKey_<any>, lookup?: $CachedTagLookup<any>, ];
    export class $RecipeTypeRegistryContext extends $Record {
        storage(): $RecipeSchemaStorage;
        registries(): $RegistryAccessContainer;
        recipeComponentCodec(): $Codec<$RecipeComponent<never>>;
        recipePostProcessorCodec(): $Codec<$RecipePostProcessor>;
        constructor(registries: $RegistryAccessContainer, storage: $RecipeSchemaStorage);
    }
    /**
     * Values that may be interpreted as {@link $RecipeTypeRegistryContext}.
     */
    export type $RecipeTypeRegistryContext_ = { storage?: $RecipeSchemaStorage, registries?: $RegistryAccessContainer,  } | [storage?: $RecipeSchemaStorage, registries?: $RegistryAccessContainer, ];
    export class $KubeRecipe implements $RecipeLikeKJS, $CustomJavaToJsWrapper {
        deserialize(merge: boolean): void;
        group(g: string): $KubeRecipe;
        remove(): void;
        get(key: string): $Object;
        getValue<T>(key: $RecipeKey<T>): T;
        validate(cx: $RecipeValidationContext): void;
        merge(j: $JsonObject_): $KubeRecipe;
        id(id: $ResourceLocation_): $KubeRecipe;
        set(key: string, value: $Object): $KubeRecipe;
        getId(): string;
        save(): void;
        setValue<T>(key: $RecipeKey<T>, value: T): $KubeRecipe;
        getPath(): string;
        /**
         * @deprecated
         */
        stage(s: string): $KubeRecipe;
        serialize(): void;
        kjs$getTypeKey(): $ResourceKey<$RecipeSerializer<never>>;
        kjs$getSerializer(): $RecipeSerializer<never>;
        replaceInput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        /**
         * @deprecated
         */
        kjs$getSchema(): $RecipeSchema;
        /**
         * @deprecated
         */
        kjs$getOrCreateId(): $ResourceLocation;
        /**
         * @deprecated
         */
        kjs$getGroup(): string;
        replaceOutput(cx: $RecipeScriptContext, match: $ReplacementMatchInfo_, arg2: $Object): boolean;
        convertJavaToJs(scope: $Scriptable, staticType: $TypeInfo_): $Scriptable;
        hasChanged(): boolean;
        modifyResult(id: string): $KubeRecipe;
        hasInput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        hasOutput(cx: $RecipeMatchContext, match: $ReplacementMatchInfo_): boolean;
        getOriginalRecipe(): $Recipe<never>;
        afterLoaded(cx: $RecipeValidationContext): void;
        afterLoaded(stack: $ErrorStack): void;
        inputValues(): $RecipeComponentValue<never>[];
        outputValues(): $RecipeComponentValue<never>[];
        damageIngredient(filter: $SlotFilter_): $KubeRecipe;
        damageIngredient(filter: $SlotFilter_, damage: number): $KubeRecipe;
        serializeChanges(): $KubeRecipe;
        consumeIngredient(filter: $SlotFilter_): $KubeRecipe;
        getFromToString(): string;
        ingredientAction(filter: $SlotFilter_, action: $IngredientAction): $KubeRecipe;
        keepIngredient(filter: $SlotFilter_): $KubeRecipe;
        replaceIngredient(filter: $SlotFilter_, item: $ItemStack_): $KubeRecipe;
        getOriginalRecipeIngredients(): $List<$Ingredient>;
        getSerializationTypeFunction(): $RecipeTypeFunction;
        customIngredientAction(filter: $SlotFilter_, id: string): $KubeRecipe;
        getOriginalRecipeResult(): $ItemStack;
        initValues(save: boolean): void;
        getMod(): string;
        getType(): $ResourceLocation;
        newRecipe: boolean;
        sourceLine: $SourceLine;
        originalJson: $JsonObject;
        removed: boolean;
        creationError: boolean;
        static TYPE_INFO: $TypeInfo;
        json: $JsonObject;
        static CHANGED_MARKER: string;
        type: $RecipeTypeFunction;
        changed: boolean;
        constructor();
        get path(): string;
        get originalRecipe(): $Recipe<never>;
        get fromToString(): string;
        get originalRecipeIngredients(): $List<$Ingredient>;
        get serializationTypeFunction(): $RecipeTypeFunction;
        get originalRecipeResult(): $ItemStack;
        get mod(): string;
    }
    export class $RecipeScriptContext {
    }
    export interface $RecipeScriptContext extends $WithScriptContext, $RecipeValidationContext, $KubeRecipeContext, $RecipeMatchContext {
    }
    export class $KubeRecipeContext {
    }
    export interface $KubeRecipeContext extends $RecipeLikeContext {
        ops(): $RegistryOpsContainer;
        registries(): $RegistryAccessContainer;
        recipe(): $RecipeLikeKJS;
    }
    /**
     * Values that may be interpreted as {@link $KubeRecipeContext}.
     */
    export type $KubeRecipeContext_ = (() => $RecipeLikeKJS);
    export class $ModifyCraftingItemKubeEvent implements $KubeEvent {
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
        item: $ItemStack;
        grid: $RecipeInput;
        width: number;
        index: number;
        height: number;
        constructor(grid: $RecipeInput, width: number, height: number, item: $ItemStack_, index: number);
        constructor(grid: $CraftingInput, item: $ItemStack_, index: number);
    }
    export class $RecipesKubeEvent implements $KubeEvent {
        /**
         * @note_to_llm Focus on `getRecipes()` or the `get recipes()` function as they are the main way to add recipes.
         * Recipe event contains shortcut for vanilla recipe types, such as `shaped`, `shapeless`.
         * On the other hand, other recipes are registered using `recipes`, e.g. `event.recipes.create.mixing(...)`.
         * Recipe IDs are automatically generated and do not need to be specified unless necessary.
         * `DocumentedRecipes` in `@side-only/server/events/recipes` stores all the registered recipes, this is also the return type of `getRecipes()` or `recipes`.
         */
        remove(filter: $RecipeFilter_): void;
        stage(filter: $RecipeFilter_, stage: string): void;
        custom(json: $JsonObject_): $KubeRecipe;
        printTypes(): void;
        replaceInput(filter: $RecipeFilter_, match: $ReplacementMatchInfo_, arg2: $Object): void;
        replaceOutput(filter: $RecipeFilter_, match: $ReplacementMatchInfo_, arg2: $Object): void;
        getRecipes(): DocumentedRecipes;
        addRecipe(r: $KubeRecipe, json: boolean): $KubeRecipe;
        containsRecipe(filter: $RecipeFilter_): boolean;
        takeId(recipe: $KubeRecipe, prefix: string, ids: string): $ResourceLocation;
        forEachRecipe(filter: $RecipeFilter_, consumer: $Consumer_<$KubeRecipe>): void;
        printAllTypes(): void;
        findRecipeIds(filter: $RecipeFilter_): $Collection<$ResourceLocation>;
        findRecipes(filter: $RecipeFilter_): $Collection<$KubeRecipe>;
        getRecipeFunction(id: string): $RecipeTypeFunction;
        countRecipes(filter: $RecipeFilter_): number;
        recipeStream(filter: $RecipeFilter_): $Stream<$KubeRecipe>;
        printExamples(type: string): void;
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
        addedRecipes: $Collection<$KubeRecipe>;
        registries: $RegistryAccessContainer;
        removedRecipes: $Collection<$KubeRecipe>;
        recipeSchemaStorage: $RecipeSchemaStorage;
        ops: $RegistryOpsContainer;
        static CREATE_RECIPE_SKIP_ERROR: $Pattern;
        originalRecipes: $Map<$ResourceLocation, $KubeRecipe>;
        static POST_SKIP_ERROR: $Pattern;
        resourceManager: $ResourceManager;
        constructor(manager: $ServerScriptManager, resourceManager: $ResourceManager);
        smithing_trim(template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTrim;
        stonecutting(result: $ItemStack_, ingredient: $Ingredient_): Minecraft$Stonecutting;
        shaped(result: $ItemStack_, pattern: $List_<string>, key: $Map_<string, $Ingredient_>): Kubejs$Shaped;
        campfire_cooking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$CampfireCooking;
        shapeless(result: $ItemStack_, ingredients: $List_<$Ingredient_>): Kubejs$Shapeless;
        blasting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Blasting;
        smithing_transform(result: $ItemStack_, template: $Ingredient_, base: $Ingredient_, addition: $Ingredient_): Minecraft$SmithingTransform;
        smoking(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smoking;
        smelting(result: $ItemStack_, ingredient: $Ingredient_, xp?: number, time?: $TickDuration_): Minecraft$Smelting;
        get recipes(): DocumentedRecipes;
    }
    export class $CachedItemTagLookup extends $CachedTagLookup<$Item> {
        registry: $Registry<$Item>;
        originalMap: $Map<$ResourceLocation, $List<$TagLoader$EntryWithSource>>;
        constructor(registry: $Registry<$Item_>, originalMap: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>);
    }
    export class $RecipeTypeFunction extends $BaseFunction implements $WrappedJS {
        call(scope: $Scriptable, thisObj: $Scriptable, args0: $Object[]): $KubeRecipe;
        createRecipe(sourceLine: $SourceLine_, stack: $ErrorStack, args: $Object[]): $KubeRecipe;
        static DONTENUM: number;
        static CONST: number;
        idString: string;
        schemaType: $RecipeSchemaType;
        static UNINITIALIZED_CONST: number;
        serializerKey: $ResourceKey<$RecipeSerializer<never>>;
        static SKIP_ERROR: $Pattern;
        id: $ResourceLocation;
        event: $RecipesKubeEvent;
        static EMPTY: number;
        static READONLY: number;
        static PERMANENT: number;
        constructor(event: $RecipesKubeEvent, schemaType: $RecipeSchemaType);
    }
    export class $RecipeLikeContext {
    }
    export interface $RecipeLikeContext {
        ops(): $RegistryOpsContainer;
        recipe(): $RecipeLikeKJS;
        registries(): $RegistryAccessContainer;
    }
    export class $AfterRecipesLoadedKubeEvent implements $KubeEvent {
        remove(filter: $RecipeFilter_): number;
        forEachRecipe(filter: $RecipeFilter_, consumer: $Consumer_<$RecipeLikeKJS>): void;
        countRecipes(filter: $RecipeFilter_): number;
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
        constructor(resources: $ReloadableServerResources);
    }
    export class $CachedTagLookup<T> {
        values(key: $TagKey_<T>): $Set<T>;
        isEmpty(key: $TagKey_<T>): boolean;
        keys(value: T): $Set<$TagKey<T>>;
        build(builders: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>): $Map<$ResourceLocation, $Collection<T>>;
        tagMap(): $Map<$ResourceLocation, $Collection<$Holder<T>>>;
        bindingMap(): $Map<$TagKey<T>, $List<$Holder<T>>>;
        keyToValue(): $Map<$TagKey<T>, $Set<T>>;
        registry: $Registry<T>;
        originalMap: $Map<$ResourceLocation, $List<$TagLoader$EntryWithSource>>;
        constructor(registry: $Registry<T>, originalMap: $Map_<$ResourceLocation_, $List_<$TagLoader$EntryWithSource_>>);
    }
    export class $RecipeKey<T> {
        optional(): boolean;
        optional(value: $RecipeOptional_<T>): $RecipeKey<T>;
        optional(value: T): $RecipeKey<T>;
        toJson(storage: $RecipeSchemaStorage, type: $RecipeSchemaType, ops: $DynamicOps<$JsonElement_>): $JsonObject;
        alt(...names: string[]): $RecipeKey<T>;
        alt(name: string): $RecipeKey<T>;
        exclude(): $RecipeKey<T>;
        functionNames(names: $List_<string>): $RecipeKey<T>;
        functionNames(...names: string[]): $RecipeKey<T>;
        alwaysWrite(): $RecipeKey<T>;
        noFunctions(): $RecipeKey<T>;
        defaultOptional(): $RecipeKey<T>;
        getValidFunctionNames(): $List<string>;
        getPrimaryFunctionName(): string;
        excluded: boolean;
        codec: $Codec<T>;
        component: $RecipeComponent<T>;
        typeInfo: $TypeInfo;
        role: $ComponentRole;
        names: $SequencedSet<string>;
        name: string;
        constructor(component: $RecipeComponent<T>, name: string, role: $ComponentRole_);
        get validFunctionNames(): $List<string>;
        get primaryFunctionName(): string;
    }
    export class $CompostableRecipesKubeEvent extends $Record implements $KubeEvent {
        remove(match: $ItemPredicate_): void;
        replaceAll(): void;
        add(match: $ItemPredicate_, f: number, villager: boolean): void;
        add(match: $ItemPredicate_, f: number): void;
        removeAll(): void;
        compostables(): $VirtualDataMapFile<$Item, $Compostable>;
        addReplace(match: $ItemPredicate_, f: number, villager: boolean): void;
        addReplace(match: $ItemPredicate_, f: number): void;
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
        constructor(compostables: $VirtualDataMapFile<$Item_, $Compostable_>);
    }
    /**
     * Values that may be interpreted as {@link $CompostableRecipesKubeEvent}.
     */
    export type $CompostableRecipesKubeEvent_ = { compostables?: $VirtualDataMapFile<$Item_, $Compostable_>,  } | [compostables?: $VirtualDataMapFile<$Item_, $Compostable_>, ];
}
