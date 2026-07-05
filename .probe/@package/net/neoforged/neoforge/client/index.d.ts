import { $BooleanSupplier, $BooleanSupplier_, $Consumer_ } from "@package/java/util/function";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $ReceivingLevelScreen$Reason, $ReceivingLevelScreen$Reason_, $ReceivingLevelScreen } from "@package/net/minecraft/client/gui/screens";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Iterable, $Iterable_, $Record } from "@package/java/lang";
import { $Spliterator, $Iterator, $Collection_, $List } from "@package/java/util";
export * as extensions from "@package/net/neoforged/neoforge/client/extensions";
export * as event from "@package/net/neoforged/neoforge/client/event";
export * as model from "@package/net/neoforged/neoforge/client/model";
export * as settings from "@package/net/neoforged/neoforge/client/settings";
export * as gui from "@package/net/neoforged/neoforge/client/gui";
export * as entity from "@package/net/neoforged/neoforge/client/entity";
export * as textures from "@package/net/neoforged/neoforge/client/textures";

declare module "@package/net/neoforged/neoforge/client" {
    export class $ChunkRenderTypeSet implements $Iterable<$RenderType> {
        isEmpty(): boolean;
        iterator(): $Iterator<any>;
        static of(...arg0: $RenderType[]): $ChunkRenderTypeSet;
        static of(arg0: $Collection_<$RenderType>): $ChunkRenderTypeSet;
        contains(arg0: $RenderType): boolean;
        asList(): $List<any>;
        static all(): $ChunkRenderTypeSet;
        static union(arg0: $Iterable_<any>): $ChunkRenderTypeSet;
        static union(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        static union(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static none(): $ChunkRenderTypeSet;
        static intersection(arg0: $Iterable_<any>): $ChunkRenderTypeSet;
        static intersection(...arg0: $ChunkRenderTypeSet[]): $ChunkRenderTypeSet;
        static intersection(arg0: $Collection_<$ChunkRenderTypeSet>): $ChunkRenderTypeSet;
        spliterator(): $Spliterator<$RenderType>;
        forEach(arg0: $Consumer_<$RenderType>): void;
        [Symbol.iterator](): Iterator<any>
        get empty(): boolean;
    }
    export class $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
    }
    export interface $DimensionTransitionScreenManager$ReceivingLevelScreenFactory {
        create(supplier: $BooleanSupplier_, reason: $ReceivingLevelScreen$Reason_): $ReceivingLevelScreen;
    }
    /**
     * Values that may be interpreted as {@link $DimensionTransitionScreenManager$ReceivingLevelScreenFactory}.
     */
    export type $DimensionTransitionScreenManager$ReceivingLevelScreenFactory_ = ((arg0: $BooleanSupplier, arg1: $ReceivingLevelScreen$Reason) => $ReceivingLevelScreen);
    export class $ExtendedServerListData extends $Record {
        type(): string;
        truncated(): boolean;
        isCompatible(): boolean;
        extraReason(): string;
        numberOfMods(): number;
        constructor(arg0: string, arg1: boolean, arg2: number, arg3: string);
        constructor(type: string, isCompatible: boolean, numberOfMods: number, extraReason: string, truncated: boolean);
        get compatible(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $ExtendedServerListData}.
     */
    export type $ExtendedServerListData_ = { truncated?: boolean, type?: string, numberOfMods?: number, extraReason?: string, isCompatible?: boolean,  } | [truncated?: boolean, type?: string, numberOfMods?: number, extraReason?: string, isCompatible?: boolean, ];
    export class $RenderTypeGroup extends $Record {
        isEmpty(): boolean;
        block(): $RenderType;
        entity(): $RenderType;
        entityFabulous(): $RenderType;
        static EMPTY: $RenderTypeGroup;
        constructor(block: $RenderType, entity: $RenderType, entityFabulous: $RenderType);
        constructor(arg0: $RenderType, arg1: $RenderType);
        get empty(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderTypeGroup}.
     */
    export type $RenderTypeGroup_ = { entity?: $RenderType, block?: $RenderType, entityFabulous?: $RenderType,  } | [entity?: $RenderType, block?: $RenderType, entityFabulous?: $RenderType, ];
    /**
     * An ItemDecorator that is used to render something on specific items, when the DurabilityBar and StackCount is rendered.
     * Add it to an item using RegisterItemDecorationsEvent#register(ItemLike, IItemDecorator).
     */
    export class $IItemDecorator {
    }
    export interface $IItemDecorator {
        /**
         * Is called after GuiGraphics#renderItemDecorations(Font, ItemStack, int, int, String) is done rendering.
         * The StackCount is rendered at blitOffset+200 so use the blitOffset with caution.
         * 
         * The RenderState during this call will be: enableTexture, enableDepthTest, enableBlend and defaultBlendFunc
         */
        render(guiGraphics: $GuiGraphics, font: $Font, stack: $ItemStack_, xOffset: number, yOffset: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $IItemDecorator}.
     */
    export type $IItemDecorator_ = ((arg0: $GuiGraphics, arg1: $Font, arg2: $ItemStack, arg3: number, arg4: number) => boolean);
}
