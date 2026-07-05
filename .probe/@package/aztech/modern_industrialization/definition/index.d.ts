import { $ItemLike } from "@package/net/minecraft/world/level";
import { $DeferredItem } from "@package/net/neoforged/neoforge/registries";
import { $MIFluidBlock } from "@package/aztech/modern_industrialization/fluid";
import { $FluidVariant } from "@package/aztech/modern_industrialization/thirdparty/fabrictransfer/api/fluid";
import { $MCMetaInfo } from "@package/aztech/modern_industrialization/textures";
import { $BucketItem, $ItemStack, $Item, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $Fluid_, $Fluid } from "@package/net/minecraft/world/level/material";
import { $SortOrder } from "@package/aztech/modern_industrialization/items";
import { $List } from "@package/java/util";
import { $ItemModelProvider } from "@package/net/neoforged/neoforge/client/model/generators";
import { $Consumer_, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Enum } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/definition" {
    export class $FluidDefinition extends $Definition implements $FluidLike {
        variant(): $FluidVariant;
        getBucket(): $BucketItem;
        asFluidBlock(): $MIFluidBlock;
        asFluid(): $Fluid;
        fluidTexture: $FluidTexture;
        isGas: boolean;
        static LOW_OPACITY: number;
        color: number;
        static TRANSLATABLE_DEFINITION: $List<$Definition>;
        static MEDIUM_OPACITY: number;
        opacity: number;
        static NEAR_OPACITY: number;
        static FULL_OPACITY: number;
        constructor(arg0: string, arg1: string, arg2: number, arg3: number, arg4: $FluidTexture_, arg5: boolean);
        get bucket(): $BucketItem;
    }
    export class $FluidLike {
        static of(arg0: $Fluid_): $FluidLike;
    }
    export interface $FluidLike {
        asFluid(): $Fluid;
    }
    /**
     * Values that may be interpreted as {@link $FluidLike}.
     */
    export type $FluidLike_ = (() => $Fluid_);
    export class $FluidTexture extends $Enum<$FluidTexture> {
        static values(): $FluidTexture[];
        static valueOf(arg0: string): $FluidTexture;
        path: string;
        static PLASMA_LIKE: $FluidTexture;
        static LAVA_LIKE: $FluidTexture;
        static STEAM_LIKE: $FluidTexture;
        static WATER_LIKE: $FluidTexture;
        mcMetaInfo: $MCMetaInfo;
    }
    /**
     * Values that may be interpreted as {@link $FluidTexture}.
     */
    export type $FluidTexture_ = "lava_like" | "plasma_like" | "steam_like" | "water_like";
    export class $ItemDefinition<T extends $Item> extends $Definition implements $ItemLike {
        stack(arg0: number): $ItemStack;
        stack(): $ItemStack;
        is(arg0: $ItemStack_): boolean;
        onRegister(): void;
        asItem(): T;
        withItemRegistrationEvent(arg0: $Consumer_<T>): $ItemDefinition<T>;
        sortOrder: $SortOrder;
        static TRANSLATABLE_DEFINITION: $List<$Definition>;
        modelGenerator: $BiConsumer<$Item, $ItemModelProvider>;
        constructor(arg0: string, arg1: $DeferredItem<T>, arg2: $BiConsumer_<$Item, $ItemModelProvider>, arg3: $SortOrder);
    }
    export class $Definition {
        id(): string;
        getId(): $ResourceLocation;
        path(): string;
        getTranslationKey(): string;
        getEnglishName(): string;
        getResourceAsString(arg0: boolean): string;
        static TRANSLATABLE_DEFINITION: $List<$Definition>;
        constructor(arg0: string, arg1: string);
        constructor(arg0: string, arg1: string, arg2: boolean);
        get translationKey(): string;
        get englishName(): string;
    }
}
