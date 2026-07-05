import { $RecipeHolder, $RecipeType, $RecipeHolder_, $RecipeType_ } from "@package/net/minecraft/world/item/crafting";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Multimap } from "@package/com/google/common/collect";
import { $Map_, $Map } from "@package/java/util";

declare module "@package/plus/dragons/createdragonsplus/mixin/minecraft" {
    export class $RecipeManagerAccessor {
    }
    export interface $RecipeManagerAccessor {
        getByName(): $Map<$ResourceLocation, $RecipeHolder<never>>;
        getByType(): $Multimap<$RecipeType<never>, $RecipeHolder<never>>;
        setByName(arg0: $Map_<$ResourceLocation_, $RecipeHolder_<never>>): void;
        setByType(arg0: $Multimap<$RecipeType_<never>, $RecipeHolder_<never>>): void;
    }
}
