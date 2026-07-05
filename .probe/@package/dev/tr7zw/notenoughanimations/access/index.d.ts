import { $DataHolder } from "@package/dev/tr7zw/notenoughanimations/versionless/animations";
import { $Supplier_ } from "@package/java/util/function";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $Pose, $Pose_ } from "@package/net/minecraft/world/entity";

declare module "@package/dev/tr7zw/notenoughanimations/access" {
    export class $PlayerData {
    }
    export interface $PlayerData {
        getData<T>(arg0: $DataHolder<T>, arg1: $Supplier_<T>): T;
        isUpdated(arg0: number): number;
        setUpdated(arg0: number): void;
        getLastAnimationSwapTick(): number;
        setLastAnimationSwapTick(arg0: number): void;
        setRotateBodyToHead(arg0: boolean): void;
        isDisableBodyRotation(): boolean;
        setDisableBodyRotation(arg0: boolean): void;
        getItemSwapAnimationTimer(): number;
        setItemSwapAnimationTimer(arg0: number): void;
        getLastRotations(): number[];
        getSideSword(): $ItemStack;
        setSideSword(arg0: $ItemStack_): void;
        isRotateBodyToHead(): boolean;
        getLastHeldItems(): $ItemStack[];
        setPoseOverwrite(arg0: $Pose_): void;
        getPoseOverwrite(): $Pose;
        get lastRotations(): number[];
        get lastHeldItems(): $ItemStack[];
    }
}
