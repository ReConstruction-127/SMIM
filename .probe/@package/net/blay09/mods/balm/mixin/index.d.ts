import { $Int2ObjectMap } from "@package/it/unimi/dsi/fastutil/ints";
import { $NarratableEntry } from "@package/net/minecraft/client/gui/narration";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Renderable } from "@package/net/minecraft/client/gui/components";
import { $ServerPlayerConnection } from "@package/net/minecraft/server/network";
import { $UnbakedModel } from "@package/net/minecraft/client/resources/model";
import { $Slot } from "@package/net/minecraft/world/inventory";
import { $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $Set_, $List, $Set } from "@package/java/util";
import { $InputConstants$Key } from "@package/com/mojang/blaze3d/platform";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/net/blay09/mods/balm/mixin" {
    export class $AbstractContainerScreenAccessor {
    }
    export interface $AbstractContainerScreenAccessor {
        getLeftPos(): number;
        getTopPos(): number;
        getImageWidth(): number;
        callRenderSlot(arg0: $GuiGraphics, arg1: $Slot): void;
        getImageHeight(): number;
        getHoveredSlot(): $Slot;
        callIsHovering(arg0: $Slot, arg1: number, arg2: number): boolean;
        get leftPos(): number;
        get topPos(): number;
        get imageWidth(): number;
        get imageHeight(): number;
        get hoveredSlot(): $Slot;
    }
    export class $TrackedEntityAccessor {
    }
    export interface $TrackedEntityAccessor {
        getSeenBy(): $Set<$ServerPlayerConnection>;
        get seenBy(): $Set<$ServerPlayerConnection>;
    }
    /**
     * Values that may be interpreted as {@link $TrackedEntityAccessor}.
     */
    export type $TrackedEntityAccessor_ = (() => $Set_<$ServerPlayerConnection>);
    export class $KeyMappingAccessor {
    }
    export interface $KeyMappingAccessor {
        getKey(): $InputConstants$Key;
        get key(): $InputConstants$Key;
    }
    /**
     * Values that may be interpreted as {@link $KeyMappingAccessor}.
     */
    export type $KeyMappingAccessor_ = (() => $InputConstants$Key);
    export class $SlotAccessor {
    }
    export interface $SlotAccessor {
        setX(arg0: number): void;
        setY(arg0: number): void;
        set x(value: number);
        set y(value: number);
    }
    export class $ChunkMapAccessor {
    }
    export interface $ChunkMapAccessor {
        getEntityMap(): $Int2ObjectMap<$TrackedEntityAccessor>;
        get entityMap(): $Int2ObjectMap<$TrackedEntityAccessor>;
    }
    /**
     * Values that may be interpreted as {@link $ChunkMapAccessor}.
     */
    export type $ChunkMapAccessor_ = (() => $Int2ObjectMap<$TrackedEntityAccessor_>);
    export class $ScreenAccessor {
    }
    export interface $ScreenAccessor {
        balm_getChildren(): $List<$GuiEventListener>;
        balm$addRenderableWidget<T extends $GuiEventListener>(arg0: T): T;
        balm_getNarratables(): $List<$NarratableEntry>;
        balm_getRenderables(): $List<$Renderable>;
    }
    export class $ModelBakeryAccessor {
    }
    export interface $ModelBakeryAccessor {
        callGetModel(arg0: $ResourceLocation_): $UnbakedModel;
    }
    /**
     * Values that may be interpreted as {@link $ModelBakeryAccessor}.
     */
    export type $ModelBakeryAccessor_ = ((arg0: $ResourceLocation) => $UnbakedModel);
    export class $MouseHandlerAccessor {
    }
    export interface $MouseHandlerAccessor {
        getMouseX(): number;
        getMouseY(): number;
        get mouseX(): number;
        get mouseY(): number;
    }
}
