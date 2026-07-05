import { $Level } from "@package/net/minecraft/world/level";
import { $BlockBuilder } from "@package/dev/latvian/mods/kubejs/block";
import { $MinecraftServer } from "@package/net/minecraft/server";
import { $CompoundTag, $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $LevelBlock, $KubeLevelEvent } from "@package/dev/latvian/mods/kubejs/level";
import { $UUID, $Map, $Set_ } from "@package/java/util";
import { $ItemPredicate_ } from "@package/dev/latvian/mods/kubejs/item";
import { $FluidIngredient_ } from "@package/net/neoforged/neoforge/fluids/crafting";
import { $Supplier_ } from "@package/java/util/function";
import { $HolderLookup$Provider, $BlockPos_, $Direction_, $RegistryAccess, $Registry } from "@package/net/minecraft/core";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Object } from "@package/java/lang";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $BlockEntityType, $BlockEntityTicker, $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $BlockCapability } from "@package/net/neoforged/neoforge/capabilities";

declare module "@package/dev/latvian/mods/kubejs/block/entity" {
    export class $BlockEntityAttachmentHandler {
    }
    export interface $BlockEntityAttachmentHandler {
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityAttachmentHandler}.
     */
    export type $BlockEntityAttachmentHandler_ = (() => void);
    export class $BlockEntityInfo implements $BlockEntityAttachmentHandler {
        eventHandler(eventId: number, callback: $BlockEntityEventCallback_): void;
        tickOffset(offset: number): void;
        ticking(): void;
        rightClickFillsTank(id: string): void;
        rightClickOpensInventory(id: string): void;
        initialData(data: $CompoundTag_): void;
        serverTicking(): void;
        clientTicking(): void;
        tickFrequency(frequency: number): void;
        enableSync(): void;
        attach(id: string, type: $ResourceLocation_, directions: $Set_<$Direction_>, args: $Object): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number, inputFilter: $ItemPredicate_): void;
        inventory(id: string, directions: $Set_<$Direction_>, width: number, height: number): void;
        energyStorage(id: string, directions: $Set_<$Direction_>, capacity: number, maxReceive: number, maxExtract: number, autoOutput: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number): void;
        fluidTank(id: string, directions: $Set_<$Direction_>, capacity: number, inputFilter: $FluidIngredient_): void;
        attachCustomCapability(id: string, directions: $Set_<$Direction_>, capability: $BlockCapability<never, never>, dataFactory: $Supplier_<never>): void;
        constructor(blockBuilder: $BlockBuilder);
    }
    export class $KubeBlockEntity extends $BlockEntity {
        save(): void;
        sync(): void;
        getBlock(): $LevelBlock;
        loadAdditional(tag: $CompoundTag_, registries: $HolderLookup$Provider): void;
        sendEvent(eventId: number, data: number): void;
        getPlacer(): $Entity;
        attachments: $Map<string, $Object>;
        data: $CompoundTag;
        static ATTACHMENTS_NBT_KEY: string;
        tick: number;
        placerId: $UUID;
        cycle: number;
        blockKey: $ResourceKey<$Block>;
        static TICKER: $BlockEntityTicker<$KubeBlockEntity>;
        x: number;
        y: number;
        z: number;
        info: $BlockEntityInfo;
        constructor(blockPos: $BlockPos_, blockState: $BlockState_, entityInfo: $BlockEntityInfo);
        get block(): $LevelBlock;
        get placer(): $Entity;
    }
    export class $BlockEntityBuilder extends $BuilderBase<$BlockEntityType<never>> {
        registryKey: $ResourceKey<$Registry<$BlockEntityType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        info: $BlockEntityInfo;
        constructor(i: $ResourceLocation_, info: $BlockEntityInfo);
    }
    export class $BlockEntityEventCallback {
    }
    export interface $BlockEntityEventCallback {
        accept(entity: $KubeBlockEntity, data: number): void;
    }
    /**
     * Values that may be interpreted as {@link $BlockEntityEventCallback}.
     */
    export type $BlockEntityEventCallback_ = ((entity: $KubeBlockEntity, data: number) => void);
    export class $BlockEntityTickKubeEvent implements $KubeLevelEvent {
        getLevel(): $Level;
        getBlock(): $LevelBlock;
        getTick(): number;
        getCycle(): number;
        getServer(): $MinecraftServer;
        getRegistries(): $RegistryAccess;
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
        constructor(entity: $KubeBlockEntity);
        get level(): $Level;
        get block(): $LevelBlock;
        get tick(): number;
        get cycle(): number;
        get server(): $MinecraftServer;
        get registries(): $RegistryAccess;
    }
}
