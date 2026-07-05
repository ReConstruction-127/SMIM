import { $ItemLike } from "@package/net/minecraft/world/level";
import { $Item } from "@package/net/minecraft/world/item";
import { $Ingredient } from "@package/net/minecraft/world/item/crafting";
import { $ItemDefinition } from "@package/aztech/modern_industrialization/definition";
import { $MaterialBuilder$PartContext } from "@package/aztech/modern_industrialization/materials";
import { $SortOrder } from "@package/aztech/modern_industrialization/items";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/materials/part" {
    export class $PartEnglishNameFormatter {
    }
    export interface $PartEnglishNameFormatter {
        format(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $PartEnglishNameFormatter}.
     */
    export type $PartEnglishNameFormatter_ = ((arg0: string) => string);
    export class $PartTemplate$Register {
    }
    export interface $PartTemplate$Register {
        register(arg0: $MaterialBuilder$PartContext, arg1: $PartKey, arg2: string, arg3: string, arg4: string, arg5: string): void;
    }
    /**
     * Values that may be interpreted as {@link $PartTemplate$Register}.
     */
    export type $PartTemplate$Register_ = ((arg0: $MaterialBuilder$PartContext, arg1: $PartKey, arg2: string, arg3: string, arg4: string, arg5: string) => void);
    export class $PartKey implements $Comparable<$PartKey>, $PartKeyProvider {
        compareTo(arg0: $PartKey): number;
        key(): $PartKey;
        constructor(arg0: string);
    }
    export class $PartTemplate implements $PartKeyProvider {
        key(): $PartKey;
        create(arg0: string, arg1: string): $MaterialItemPart;
        asBlock(arg0: $SortOrder, arg1: $TextureGenParams, arg2: number, arg3: number, arg4: number, arg5: boolean): $PartTemplate;
        asBlock(arg0: $SortOrder, arg1: $TextureGenParams): $PartTemplate;
        asBlock(arg0: $SortOrder, arg1: $TextureGenParams, arg2: number, arg3: number, arg4: number): $PartTemplate;
        withoutTextureRegister(): $PartTemplate;
        getTextureGenParams(): $TextureGenParams;
        asColumnBlock(arg0: $SortOrder): $PartTemplate;
        static createSimpleItem(arg0: string, arg1: string, arg2: $MaterialBuilder$PartContext, arg3: $PartKey): $ItemDefinition<$Item>;
        withTexture(arg0: $TextureGenParams): $PartTemplate;
        withOverlay(arg0: $PartKey, arg1: string): $PartTemplate;
        withOverlay(arg0: $PartKeyProvider_, arg1: string): $PartTemplate;
        withRegister(arg0: $PartTemplate$Register_): $PartTemplate;
        withCustomPath(arg0: string, arg1: string): $PartTemplate;
        withCustomPath(arg0: string): $PartTemplate;
        constructor(arg0: string, arg1: $PartKey);
        constructor(arg0: $PartEnglishNameFormatter_, arg1: string);
        constructor(arg0: $PartEnglishNameFormatter_, arg1: $PartKey);
        constructor(arg0: string, arg1: string);
        get textureGenParams(): $TextureGenParams;
    }
    export class $MaterialItemPart {
        static external(arg0: $PartKey, arg1: string, arg2: string): $MaterialItemPart;
        static external(arg0: $PartKeyProvider_, arg1: string): $MaterialItemPart;
        static external(arg0: $PartKeyProvider_, arg1: string, arg2: string): $MaterialItemPart;
        static simpleItem(arg0: $PartKeyProvider_, arg1: string, arg2: string): $MaterialItemPart;
    }
    export interface $MaterialItemPart extends $PartKeyProvider, $ItemLike {
        register(arg0: $MaterialBuilder$PartContext): void;
        isInternal(): boolean;
        asItem(): $Item;
        getItemId(): string;
        asBlock(): $Block;
        getTaggedIngredient(): $Ingredient;
        getTextureGenParams(): $TextureGenParams;
        getTaggedItemId(): string;
        get internal(): boolean;
        get itemId(): string;
        get taggedIngredient(): $Ingredient;
        get textureGenParams(): $TextureGenParams;
        get taggedItemId(): string;
    }
    export class $TextureGenParams {
    }
    export interface $TextureGenParams {
    }
    export class $PartKeyProvider {
        static of(...arg0: $PartKeyProvider_[]): $List<$PartKey>;
    }
    export interface $PartKeyProvider {
        key(): $PartKey;
    }
    /**
     * Values that may be interpreted as {@link $PartKeyProvider}.
     */
    export type $PartKeyProvider_ = (() => $PartKey);
}
