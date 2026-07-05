import { $Level_, $Level } from "@package/net/minecraft/world/level";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $BlockStatePredicate_ } from "@package/dev/latvian/mods/kubejs/block/state";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $FluidStack_, $FluidStack } from "@package/net/neoforged/neoforge/fluids";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $LevelBlock } from "@package/dev/latvian/mods/kubejs/level";
import { $Object } from "@package/java/lang";
import { $KubeEvent } from "@package/dev/latvian/mods/kubejs/event";
import { $AABB, $AABB_ } from "@package/net/minecraft/world/phys";

declare module "@package/dev/latvian/mods/kubejs/create/events" {
    export class $SpecialSpoutHandlerEvent implements $KubeEvent {
        add(path: $ResourceLocation_, block: $BlockStatePredicate_, handler: $SpecialSpoutHandlerEvent$SpoutHandler_): void;
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
        constructor();
    }
    export class $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
    }
    export interface $BoilerHeaterHandlerEvent$BoilerHeaterCallback {
        updateHeat(block: $LevelBlock): number;
    }
    /**
     * Values that may be interpreted as {@link $BoilerHeaterHandlerEvent$BoilerHeaterCallback}.
     */
    export type $BoilerHeaterHandlerEvent$BoilerHeaterCallback_ = ((block: $LevelBlock) => number);
    export class $BoilerHeaterHandlerEvent implements $KubeEvent {
        add(block: $Block_, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback_): void;
        addAdvanced(block: $BlockStatePredicate_, onUpdate: $BoilerHeaterHandlerEvent$BoilerHeaterCallback_): void;
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
        constructor();
    }
    export class $SpecialFluidHandlerEvent$PipeHandler {
    }
    export interface $SpecialFluidHandlerEvent$PipeHandler {
        apply(level: $Level_, aabb: $AABB_, fluid: $FluidStack_): void;
    }
    /**
     * Values that may be interpreted as {@link $SpecialFluidHandlerEvent$PipeHandler}.
     */
    export type $SpecialFluidHandlerEvent$PipeHandler_ = ((level: $Level, aabb: $AABB, fluid: $FluidStack) => void);
    export class $SpecialSpoutHandlerEvent$SpoutHandler {
    }
    export interface $SpecialSpoutHandlerEvent$SpoutHandler {
        fillBlock(block: $LevelBlock, fluid: $FluidStack_, simulate: boolean): number;
    }
    /**
     * Values that may be interpreted as {@link $SpecialSpoutHandlerEvent$SpoutHandler}.
     */
    export type $SpecialSpoutHandlerEvent$SpoutHandler_ = ((block: $LevelBlock, fluid: $FluidStack, simulate: boolean) => number);
    export class $SpecialFluidHandlerEvent implements $KubeEvent {
        add(fluidIngredient: $FluidIngredient_, handler: $SpecialFluidHandlerEvent$PipeHandler_): void;
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
        constructor();
    }
}
