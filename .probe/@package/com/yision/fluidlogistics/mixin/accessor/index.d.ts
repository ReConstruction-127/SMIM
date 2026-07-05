import { $ListTag_ } from "@package/net/minecraft/nbt";
import { $ArmInteractionPoint } from "@package/com/simibubi/create/content/kinetics/mechanicalArm";
import { $List } from "@package/java/util";

declare module "@package/com/yision/fluidlogistics/mixin/accessor" {
    export class $ArmBlockEntityAccessor {
    }
    export interface $ArmBlockEntityAccessor {
        getInputs(): $List<$ArmInteractionPoint>;
        setUpdateInteractionPoints(arg0: boolean): void;
        setInteractionPointTag(arg0: $ListTag_): void;
        getOutputs(): $List<$ArmInteractionPoint>;
        get inputs(): $List<$ArmInteractionPoint>;
        set updateInteractionPoints(value: boolean);
        set interactionPointTag(value: $ListTag_);
        get outputs(): $List<$ArmInteractionPoint>;
    }
}
