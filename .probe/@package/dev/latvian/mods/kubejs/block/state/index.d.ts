import { $OreConfiguration$TargetBlockState } from "@package/net/minecraft/world/level/levelgen/feature/configurations";
import { $Predicate } from "@package/java/util/function";
import { RegistryTypes } from "@special/types";
import { $BlockState_, $BlockState } from "@package/net/minecraft/world/level/block/state";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ReplacementMatch } from "@package/dev/latvian/mods/kubejs/recipe/match";
import { $RuleTest } from "@package/net/minecraft/world/level/levelgen/structure/templatesystem";
import { $Block_, $Block } from "@package/net/minecraft/world/level/block";
import { $List_, $Collection, $Set } from "@package/java/util";
import { $Object } from "@package/java/lang";

declare module "@package/dev/latvian/mods/kubejs/block/state" {
    export class $BlockStatePredicate {
        static fromString(s: string): $BlockStatePredicate;
        static wrap(o: $Object): $BlockStatePredicate;
        static wrapRuleTest(o: $Object): $RuleTest;
    }
    export interface $BlockStatePredicate extends $Predicate<$BlockState>, $ReplacementMatch {
        test(state: $BlockState_): boolean;
        check(targetStates: $List_<$OreConfiguration$TargetBlockState>): boolean;
        getBlocks(): $Collection<$Block>;
        getBlockStates(): $Collection<$BlockState>;
        asRuleTest(): $RuleTest;
        testBlock(block: $Block_): boolean;
        getBlockIds(): $Set<$ResourceLocation>;
        get blocks(): $Collection<$Block>;
        get blockStates(): $Collection<$BlockState>;
        get blockIds(): $Set<$ResourceLocation>;
    }
    /**
     * Values that may be interpreted as {@link $BlockStatePredicate}.
     */
    export type $BlockStatePredicate_ = $BlockStatePredicate_[] | { or?: $BlockStatePredicate_, not?: $BlockStatePredicate_,  } | $Block_ | RegistryTypes.BlockTag | RegExp | "*" | "-" | ((state: $BlockState) => boolean);
}
