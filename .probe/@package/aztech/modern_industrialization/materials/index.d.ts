import { $MaterialRecipeBuilder } from "@package/aztech/modern_industrialization/materials/recipe/builder";
import { $Consumer_, $Consumer } from "@package/java/util/function";
import { $RecipeOutput } from "@package/net/minecraft/data/recipes";
import { $MaterialProperty } from "@package/aztech/modern_industrialization/materials/property";
import { $List_, $Map } from "@package/java/util";
import { $PartTemplate, $MaterialItemPart, $PartKeyProvider_, $PartKey } from "@package/aztech/modern_industrialization/materials/part";
export * as part from "@package/aztech/modern_industrialization/materials/part";
export * as recipe from "@package/aztech/modern_industrialization/materials/recipe";
export * as property from "@package/aztech/modern_industrialization/materials/property";
export * as set from "@package/aztech/modern_industrialization/materials/set";

declare module "@package/aztech/modern_industrialization/materials" {
    export class $MaterialBuilder$PartContext {
        get<T>(arg0: $MaterialProperty<T>): T;
        getMaterialName(): string;
        getMaterialEnglishName(): string;
        getMaterialPart(arg0: $PartKeyProvider_): $MaterialItemPart;
        constructor(arg0: $MaterialBuilder);
        get materialName(): string;
        get materialEnglishName(): string;
    }
    export class $MaterialBuilder$RegisteringEvent {
    }
    export interface $MaterialBuilder$RegisteringEvent {
        onRegister(arg0: $MaterialBuilder$PartContext): void;
    }
    /**
     * Values that may be interpreted as {@link $MaterialBuilder$RegisteringEvent}.
     */
    export type $MaterialBuilder$RegisteringEvent_ = ((arg0: $MaterialBuilder$PartContext) => void);
    export class $MaterialBuilder$RecipeContext {
        get<T>(arg0: $MaterialProperty<T>): T;
        getPart(arg0: $PartKeyProvider_): $MaterialItemPart;
        addRecipe(arg0: $MaterialRecipeBuilder): void;
        getMaterialName(): string;
        removeRecipe(arg0: string): void;
        hasInternalPart(arg0: $PartKeyProvider_): boolean;
        get materialName(): string;
    }
    export class $Material {
        get<T>(arg0: $MaterialProperty<T>): T;
        getParts(): $Map<$PartKey, $MaterialItemPart>;
        getPart(arg0: $PartKeyProvider_): $MaterialItemPart;
        getNullablePart(arg0: $PartKeyProvider_): $MaterialItemPart;
        registerRecipes: $Consumer<$RecipeOutput>;
        name: string;
        get parts(): $Map<$PartKey, $MaterialItemPart>;
    }
    export class $MaterialBuilder {
        set<T>(arg0: $MaterialProperty<T>, arg1: T): $MaterialBuilder;
        build(...arg0: $MaterialBuilder$RegisteringEvent_[]): $Material;
        buildRecipes(arg0: $RecipeOutput): void;
        addRecipes(...arg0: $Consumer_<$MaterialBuilder$RecipeContext>[]): $MaterialBuilder;
        getMaterialName(): string;
        addMaterialItemParts(...arg0: $MaterialItemPart[]): $MaterialBuilder;
        cancelRecipes(...arg0: string[]): $MaterialBuilder;
        addParts(...arg0: $PartTemplate[]): $MaterialBuilder;
        addParts(arg0: $List_<never>): $MaterialBuilder;
        constructor(arg0: string, arg1: string);
        get materialName(): string;
    }
}
