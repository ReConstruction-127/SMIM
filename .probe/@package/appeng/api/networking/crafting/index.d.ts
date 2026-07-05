import { $Level_ } from "@package/net/minecraft/world/level";
import { $AEKeyFilter_ } from "@package/appeng/api/storage";
import { $IPatternDetails } from "@package/appeng/api/crafting";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $Future } from "@package/java/util/concurrent";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IGridNodeService, $IManagedGridNode, $IGridService, $IGridNode } from "@package/appeng/api/networking";
import { $CpuSelectionMode, $Actionable_ } from "@package/appeng/api/config";
import { $ImmutableSet } from "@package/com/google/common/collect";
import { $Enum, $Record, $Object } from "@package/java/lang";
import { $UUID, $List, $Map, $Set, $Collection } from "@package/java/util";
import { $IActionSource, $IActionHost } from "@package/appeng/api/networking/security";
import { $GenericStack, $GenericStack_, $KeyCounter, $AEKey } from "@package/appeng/api/stacks";

declare module "@package/appeng/api/networking/crafting" {
    export class $ICraftingCPU {
    }
    export interface $ICraftingCPU {
        getName(): $Component;
        getSelectionMode(): $CpuSelectionMode;
        getJobStatus(): $CraftingJobStatus;
        getCoProcessors(): number;
        cancelJob(): void;
        isBusy(): boolean;
        getAvailableStorage(): number;
        get name(): $Component;
        get selectionMode(): $CpuSelectionMode;
        get jobStatus(): $CraftingJobStatus;
        get coProcessors(): number;
        get busy(): boolean;
        get availableStorage(): number;
    }
    export class $ICraftingRequester {
    }
    export interface $ICraftingRequester extends $IActionHost, $IGridNodeService {
        insertCraftedItems(arg0: $ICraftingLink, arg1: $AEKey, arg2: number, arg3: $Actionable_): number;
        jobStateChange(arg0: $ICraftingLink): void;
        getRequestedJobs(): $ImmutableSet<$ICraftingLink>;
        get requestedJobs(): $ImmutableSet<$ICraftingLink>;
    }
    export class $ICraftingSimulationRequester {
    }
    export interface $ICraftingSimulationRequester {
        getActionSource(): $IActionSource;
        getGridNode(): $IGridNode;
        get actionSource(): $IActionSource;
        get gridNode(): $IGridNode;
    }
    /**
     * Values that may be interpreted as {@link $ICraftingSimulationRequester}.
     */
    export type $ICraftingSimulationRequester_ = (() => $IActionSource);
    export class $ICraftingPlan {
    }
    export interface $ICraftingPlan {
        bytes(): number;
        patternTimes(): $Map<$IPatternDetails, number>;
        missingItems(): $KeyCounter;
        emittedItems(): $KeyCounter;
        multiplePaths(): boolean;
        finalOutput(): $GenericStack;
        usedItems(): $KeyCounter;
        simulation(): boolean;
    }
    export class $ICraftingProvider {
        static requestUpdate(arg0: $IManagedGridNode): void;
    }
    export interface $ICraftingProvider extends $IGridNodeService {
        getPatternPriority(): number;
        pushPattern(arg0: $IPatternDetails, arg1: $KeyCounter[]): boolean;
        getEmitableItems(): $Set<$AEKey>;
        isBusy(): boolean;
        getAvailablePatterns(): $List<$IPatternDetails>;
        get patternPriority(): number;
        get emitableItems(): $Set<$AEKey>;
        get busy(): boolean;
        get availablePatterns(): $List<$IPatternDetails>;
    }
    export class $CraftingSubmitErrorCode extends $Enum<$CraftingSubmitErrorCode> {
        static values(): $CraftingSubmitErrorCode[];
        static valueOf(arg0: string): $CraftingSubmitErrorCode;
        static INCOMPLETE_PLAN: $CraftingSubmitErrorCode;
        static MISSING_INGREDIENT: $CraftingSubmitErrorCode;
        static NO_CPU_FOUND: $CraftingSubmitErrorCode;
        static CPU_BUSY: $CraftingSubmitErrorCode;
        static CPU_OFFLINE: $CraftingSubmitErrorCode;
        static CPU_TOO_SMALL: $CraftingSubmitErrorCode;
        static NO_SUITABLE_CPU_FOUND: $CraftingSubmitErrorCode;
    }
    /**
     * Values that may be interpreted as {@link $CraftingSubmitErrorCode}.
     */
    export type $CraftingSubmitErrorCode_ = "incomplete_plan" | "no_cpu_found" | "no_suitable_cpu_found" | "cpu_busy" | "cpu_offline" | "cpu_too_small" | "missing_ingredient";
    export class $ICraftingService {
    }
    export interface $ICraftingService extends $IGridService {
        getFuzzyCraftable(arg0: $AEKey, arg1: $AEKeyFilter_): $AEKey;
        isCraftable(arg0: $AEKey): boolean;
        getCraftingFor(arg0: $AEKey): $Collection<$IPatternDetails>;
        isRequesting(arg0: $AEKey): boolean;
        isRequestingAny(): boolean;
        getRequestedAmount(arg0: $AEKey): number;
        getCraftables(arg0: $AEKeyFilter_): $Set<$AEKey>;
        beginCraftingCalculation(arg0: $Level_, arg1: $ICraftingSimulationRequester_, arg2: $AEKey, arg3: number, arg4: $CalculationStrategy_): $Future<$ICraftingPlan>;
        addGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        refreshNodeCraftingProvider(arg0: $IGridNode): void;
        refreshGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        removeGlobalCraftingProvider(arg0: $ICraftingProvider): void;
        submitJob(arg0: $ICraftingPlan, arg1: $ICraftingRequester, arg2: $ICraftingCPU, arg3: boolean, arg4: $IActionSource): $ICraftingSubmitResult;
        canEmitFor(arg0: $AEKey): boolean;
        getCpus(): $ImmutableSet<$ICraftingCPU>;
        get requestingAny(): boolean;
        get cpus(): $ImmutableSet<$ICraftingCPU>;
    }
    export class $ICraftingLink {
    }
    export interface $ICraftingLink {
        isDone(): boolean;
        cancel(): void;
        isStandalone(): boolean;
        writeToNBT(arg0: $CompoundTag_): void;
        isCanceled(): boolean;
        getCraftingID(): $UUID;
        get done(): boolean;
        get standalone(): boolean;
        get canceled(): boolean;
        get craftingID(): $UUID;
    }
    export class $CalculationStrategy extends $Enum<$CalculationStrategy> {
        static values(): $CalculationStrategy[];
        static valueOf(arg0: string): $CalculationStrategy;
        static CRAFT_LESS: $CalculationStrategy;
        static REPORT_MISSING_ITEMS: $CalculationStrategy;
    }
    /**
     * Values that may be interpreted as {@link $CalculationStrategy}.
     */
    export type $CalculationStrategy_ = "report_missing_items" | "craft_less";
    export class $ICraftingSubmitResult {
    }
    export interface $ICraftingSubmitResult {
        link(): $ICraftingLink;
        errorCode(): $CraftingSubmitErrorCode;
        successful(): boolean;
        errorDetail(): $Object;
    }
    export class $CraftingJobStatus extends $Record {
        progress(): number;
        crafting(): $GenericStack;
        elapsedTimeNanos(): number;
        totalItems(): number;
        constructor(crafting: $GenericStack_, totalItems: number, progress: number, elapsedTimeNanos: number);
    }
    /**
     * Values that may be interpreted as {@link $CraftingJobStatus}.
     */
    export type $CraftingJobStatus_ = { crafting?: $GenericStack_, totalItems?: number, progress?: number, elapsedTimeNanos?: number,  } | [crafting?: $GenericStack_, totalItems?: number, progress?: number, elapsedTimeNanos?: number, ];
}
