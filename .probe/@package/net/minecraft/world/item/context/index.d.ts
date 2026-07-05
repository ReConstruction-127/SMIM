import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos, $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $UseOnContextInvoker } from "@package/com/jesz/createdieselgenerators/mixins";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $UseOnContextAccessor } from "@package/com/simibubi/create/foundation/mixin/accessor";
import { $Vec3, $BlockHitResult } from "@package/net/minecraft/world/phys";

declare module "@package/net/minecraft/world/item/context" {
    export class $BlockPlaceContext extends $UseOnContext {
        static at(context: $BlockPlaceContext, pos: $BlockPos_, direction: $Direction_): $BlockPlaceContext;
        getNearestLookingVerticalDirection(): $Direction;
        getNearestLookingDirection(): $Direction;
        replacingClickedOnBlock(): boolean;
        getNearestLookingDirections(): $Direction[];
        canPlace(): boolean;
        hitResult: $BlockHitResult;
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        constructor(context: $UseOnContext);
        constructor(player: $Player, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get nearestLookingVerticalDirection(): $Direction;
        get nearestLookingDirection(): $Direction;
        get nearestLookingDirections(): $Direction[];
    }
    export class $UseOnContext implements $UseOnContextAccessor, $UseOnContextInvoker {
        getLevel(): $Level;
        getItemInHand(): $ItemStack;
        getHand(): $InteractionHand;
        getClickLocation(): $Vec3;
        getHitResult(): $BlockHitResult;
        getPlayer(): $Player;
        getRotation(): number;
        getHorizontalDirection(): $Direction;
        isSecondaryUseActive(): boolean;
        getClickedFace(): $Direction;
        getClickedPos(): $BlockPos;
        isInside(): boolean;
        create$getHitResult(): $BlockHitResult;
        cdg_getHitResult(): $BlockHitResult;
        hitResult: $BlockHitResult;
        constructor(player: $Player, hand: $InteractionHand_, hitResult: $BlockHitResult);
        constructor(level: $Level_, player: $Player | null, hand: $InteractionHand_, itemStack: $ItemStack_, hitResult: $BlockHitResult);
        get level(): $Level;
        get itemInHand(): $ItemStack;
        get hand(): $InteractionHand;
        get clickLocation(): $Vec3;
        get player(): $Player;
        get rotation(): number;
        get horizontalDirection(): $Direction;
        get secondaryUseActive(): boolean;
        get clickedFace(): $Direction;
        get clickedPos(): $BlockPos;
        get inside(): boolean;
    }
}
