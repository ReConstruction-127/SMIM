import { $IFluidHandler$FluidAction_, $IFluidHandler$FluidAction } from "@package/net/neoforged/neoforge/fluids/capability";
import { $ChunkPos, $Level } from "@package/net/minecraft/world/level";
import { $InteractionResult } from "@package/net/minecraft/world";
import { $Predicate_ } from "@package/java/util/function";
import { $Direction_, $GlobalPos_ } from "@package/net/minecraft/core";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $IAlloyTier_, $IAlloyTier } from "@package/mekanism/api/tier";
import { $ResourceKey_, $ResourceKey } from "@package/net/minecraft/resources";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Set } from "@package/java/util";
import { $Enum } from "@package/java/lang";
export * as chemical from "@package/mekanism/api/chemical";
export * as radial from "@package/mekanism/api/radial";
export * as heat from "@package/mekanism/api/heat";
export * as gear from "@package/mekanism/api/gear";
export * as text from "@package/mekanism/api/text";
export * as functions from "@package/mekanism/api/functions";
export * as event from "@package/mekanism/api/event";
export * as tier from "@package/mekanism/api/tier";
export * as robit from "@package/mekanism/api/robit";
export * as recipes from "@package/mekanism/api/recipes";
export * as energy from "@package/mekanism/api/energy";
export * as providers from "@package/mekanism/api/providers";
export * as inventory from "@package/mekanism/api/inventory";
export * as fluid from "@package/mekanism/api/fluid";
export * as datamaps from "@package/mekanism/api/datamaps";

declare module "@package/mekanism/api" {
    export class $Action extends $Enum<$Action> {
        static get(arg0: boolean): $Action;
        static values(): $Action[];
        static valueOf(arg0: string): $Action;
        execute(): boolean;
        combine(arg0: boolean): $Action;
        toFluidAction(): $IFluidHandler$FluidAction;
        simulate(): boolean;
        static fromFluidAction(arg0: $IFluidHandler$FluidAction_): $Action;
        static EXECUTE: $Action;
        static SIMULATE: $Action;
    }
    /**
     * Values that may be interpreted as {@link $Action}.
     */
    export type $Action_ = "execute" | "simulate";
    export class $IIncrementalEnum<TYPE extends $Enum<TYPE>> {
    }
    export interface $IIncrementalEnum<TYPE extends $Enum<TYPE>> {
        ordinal(): number;
        adjust(arg0: number): TYPE;
        adjust(arg0: number, arg1: $Predicate_<TYPE>): TYPE;
        getPrevious(arg0: $Predicate_<TYPE>): TYPE;
        getPrevious(): TYPE;
        getNext(arg0: $Predicate_<TYPE>): TYPE;
        getNext(): TYPE;
        byIndex(arg0: number): TYPE;
    }
    export class $IContentsListener {
    }
    export interface $IContentsListener {
        onContentsChanged(): void;
    }
    /**
     * Values that may be interpreted as {@link $IContentsListener}.
     */
    export type $IContentsListener_ = (() => void);
    export class $Chunk3D extends $ChunkPos {
        expand(arg0: number): $Set<$Chunk3D>;
        static ZERO: $ChunkPos;
        static REGION_MAX_INDEX: number;
        static INVALID_CHUNK_POS: number;
        x: number;
        static REGION_SIZE: number;
        z: number;
        dimension: $ResourceKey<$Level>;
        constructor(arg0: $GlobalPos_);
        constructor(arg0: $ResourceKey_<$Level>, arg1: $ChunkPos);
        constructor(arg0: $ResourceKey_<$Level>, arg1: number);
        constructor(arg0: $ResourceKey_<$Level>, arg1: number, arg2: number);
    }
    export class $IAlloyInteraction {
    }
    export interface $IAlloyInteraction {
        onAlloyInteraction(arg0: $Player, arg1: $ItemStack_, arg2: $IAlloyTier_): void;
    }
    /**
     * Values that may be interpreted as {@link $IAlloyInteraction}.
     */
    export type $IAlloyInteraction_ = ((arg0: $Player, arg1: $ItemStack, arg2: $IAlloyTier) => void);
    export class $AutomationType extends $Enum<$AutomationType> {
        static values(): $AutomationType[];
        static valueOf(arg0: string): $AutomationType;
        static handler(arg0: $Direction_): $AutomationType;
        static EXTERNAL: $AutomationType;
        static INTERNAL: $AutomationType;
        static MANUAL: $AutomationType;
    }
    /**
     * Values that may be interpreted as {@link $AutomationType}.
     */
    export type $AutomationType_ = "external" | "internal" | "manual";
    export class $SupportsColorMap {
    }
    export interface $SupportsColorMap {
        getColor(arg0: number): number;
        setColorFromAtlas(arg0: number[]): void;
        getPackedColor(): number;
        getPackedColor(arg0: number): number;
        getRgbCodeFloat(): number[];
        getRgbCode(): number[];
        set colorFromAtlas(value: number[]);
        get rgbCodeFloat(): number[];
        get rgbCode(): number[];
    }
    export class $IConfigurable {
    }
    export interface $IConfigurable {
        onRightClick(arg0: $Player): $InteractionResult;
        onSneakRightClick(arg0: $Player): $InteractionResult;
    }
}
