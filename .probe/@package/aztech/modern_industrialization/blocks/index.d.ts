import { $InteractionHand, $InteractionHand_ } from "@package/net/minecraft/world";
import { $BlockPos_ } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $BlockHitResult } from "@package/net/minecraft/world/phys";
import { $BlockEntityType_, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/aztech/modern_industrialization/blocks" {
    export class $WrenchableBlockEntity {
    }
    export interface $WrenchableBlockEntity {
        useWrench(arg0: $Player, arg1: $InteractionHand_, arg2: $BlockHitResult): boolean;
    }
    /**
     * Values that may be interpreted as {@link $WrenchableBlockEntity}.
     */
    export type $WrenchableBlockEntity_ = ((arg0: $Player, arg1: $InteractionHand, arg2: $BlockHitResult) => boolean);
    export class $FastBlockEntity extends $BlockEntity {
        sync(): void;
        static ATTACHMENTS_NBT_KEY: string;
        constructor(arg0: $BlockEntityType_<never>, arg1: $BlockPos_, arg2: $BlockState_);
    }
}
