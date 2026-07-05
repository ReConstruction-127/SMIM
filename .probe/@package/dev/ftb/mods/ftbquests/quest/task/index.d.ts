import { $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $TooltipList } from "@package/dev/ftb/mods/ftblibrary/util";
import { $Widget, $Button, $Panel } from "@package/dev/ftb/mods/ftblibrary/ui";
import { $PositionedIngredient } from "@package/dev/ftb/mods/ftblibrary/util/client";
import { $Predicate, $BiConsumer, $BiConsumer_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $Icon } from "@package/dev/ftb/mods/ftblibrary/icon";
import { $Record } from "@package/java/lang";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $QuestObjectBase, $TeamData, $Quest, $QuestObject } from "@package/dev/ftb/mods/ftbquests/quest";

declare module "@package/dev/ftb/mods/ftbquests/quest/task" {
    export class $TaskType {
        getDisplayName(): $Component;
        setDisplayName(name: $Component_): $TaskType;
        makeExtraNBT(): $CompoundTag;
        setGuiProvider(p: $TaskType$GuiProvider_): $TaskType;
        getGuiProvider(): $TaskType$GuiProvider;
        createTask(id: number, quest: $Quest): $Task;
        static createTask(id: number, quest: $Quest, typeId: string): $Task;
        getTypeId(): $ResourceLocation;
        getTypeForNBT(): string;
        getIconSupplier(): $Icon;
        internalId: number;
        get typeId(): $ResourceLocation;
        get typeForNBT(): string;
        get iconSupplier(): $Icon;
    }
    export class $TaskType$GuiProvider {
    }
    export interface $TaskType$GuiProvider {
        openCreationGui(arg0: $Panel, arg1: $Quest, arg2: $BiConsumer_<$Task, $CompoundTag>): void;
    }
    /**
     * Values that may be interpreted as {@link $TaskType$GuiProvider}.
     */
    export type $TaskType$GuiProvider_ = ((arg0: $Panel, arg1: $Quest, arg2: $BiConsumer<$Task, $CompoundTag>) => void);
    export class $CustomTask$Check {
    }
    export interface $CustomTask$Check {
        check(arg0: $CustomTask$Data_, arg1: $ServerPlayer): void;
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Check}.
     */
    export type $CustomTask$Check_ = ((arg0: $CustomTask$Data, arg1: $ServerPlayer) => void);
    export class $CustomTask$Data extends $Record {
        task(): $CustomTask;
        setProgress(l: number): void;
        getProgress(): number;
        addProgress(l: number): void;
        teamData(): $TeamData;
        constructor(task: $CustomTask, teamData: $TeamData);
    }
    /**
     * Values that may be interpreted as {@link $CustomTask$Data}.
     */
    export type $CustomTask$Data_ = { task?: $CustomTask, teamData?: $TeamData,  } | [task?: $CustomTask, teamData?: $TeamData, ];
    export class $CustomTask extends $Task {
        setCheckTimer(checkTimer: number): void;
        setMaxProgress(maxProgress: number): void;
        setEnableButton(enableButton: boolean): void;
        setCheck(check: $CustomTask$Check_): void;
        static PREDICATE: $Predicate<$QuestObjectBase>;
        id: number;
        constructor(id: number, quest: $Quest);
        set checkTimer(value: number);
        set maxProgress(value: number);
        set enableButton(value: boolean);
        set check(value: $CustomTask$Check_);
    }
    export class $Task extends $QuestObject {
        getType(): $TaskType;
        addMouseOverText(list: $TooltipList, teamData: $TeamData): void;
        getIngredient(widget: $Widget): ($PositionedIngredient) | undefined;
        hideProgressNumbers(): boolean;
        autoSubmitOnPlayerTick(): number;
        addTitleInMouseOverText(): boolean;
        getMaxProgress(): number;
        checkOnLogin(): boolean;
        getQuest(): $Quest;
        submitTask(teamData: $TeamData, player: $ServerPlayer): void;
        submitTask(teamData: $TeamData, player: $ServerPlayer, craftedItem: $ItemStack_): void;
        submitItemsOnInventoryChange(): boolean;
        onButtonClicked(button: $Button, canClick: boolean): void;
        formatMaxProgress(): string;
        addMouseOverHeader(list: $TooltipList, teamData: $TeamData, advanced: boolean): void;
        consumesResources(): boolean;
        canInsertItem(): boolean;
        formatProgress(teamData: $TeamData, progress: number): string;
        getButtonText(): $MutableComponent;
        drawGUI(teamData: $TeamData, graphics: $GuiGraphics, x: number, y: number, w: number, h: number): void;
        id: number;
        constructor(id: number, quest: $Quest);
        get type(): $TaskType;
        get maxProgress(): number;
        get quest(): $Quest;
        get buttonText(): $MutableComponent;
    }
}
