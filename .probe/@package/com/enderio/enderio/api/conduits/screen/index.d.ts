import { $Conduit_, $Conduit, $ConduitType, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $DyeColor } from "@package/net/minecraft/world/item";
import { $Event } from "@package/net/neoforged/bus/api";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $RedstoneControl } from "@package/com/enderio/enderio/api/io";
import { $Component_ } from "@package/net/minecraft/network/chat";
import { $AbstractWidget, $Renderable } from "@package/net/minecraft/client/gui/components";
import { $Map } from "@package/java/util";
import { $Consumer_, $Supplier_, $Function_ } from "@package/java/util/function";
import { $BlockPos } from "@package/net/minecraft/core";
import { $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Runnable_ } from "@package/java/lang";
import { $Font, $GuiGraphics } from "@package/net/minecraft/client/gui";
import { $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $GuiEventListener } from "@package/net/minecraft/client/gui/components/events";

declare module "@package/com/enderio/enderio/api/conduits/screen" {
    export class $ConduitScreenHelper {
    }
    export interface $ConduitScreenHelper {
        removeWidget(arg0: $GuiEventListener): void;
        addRenderableOnly<W extends $Renderable>(arg0: W): W;
        addFilterConfigureButton(arg0: number, arg1: number, arg2: number): $AbstractWidget;
        addRedstoneControlPicker(arg0: number, arg1: number, arg2: $Component_, arg3: $Supplier_<$RedstoneControl>, arg4: $Consumer_<$RedstoneControl>): $AbstractWidget;
        addWidget<W extends $GuiEventListener>(arg0: W): W;
        addRenderableWidget<W extends $GuiEventListener>(arg0: W): W;
        addPreRenderAction(arg0: $Runnable_): void;
        addColorPicker(arg0: number, arg1: number, arg2: $Component_, arg3: $Supplier_<$DyeColor>, arg4: $Consumer_<$DyeColor>): $AbstractWidget;
        addCheckbox(arg0: number, arg1: number, arg2: $Supplier_<boolean>, arg3: $Consumer_<boolean>): $AbstractWidget;
        addToggleButton(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $Component_, arg6: $ResourceLocation_, arg7: $ResourceLocation_, arg8: $Supplier_<boolean>, arg9: $Consumer_<boolean>): $AbstractWidget;
        addIconButton(arg0: number, arg1: number, arg2: number, arg3: number, arg4: $Component_, arg5: $ResourceLocation_, arg6: $Runnable_): $AbstractWidget;
    }
    export class $ConduitMenuDataAccess<T extends $ConnectionConfig> {
    }
    export interface $ConduitMenuDataAccess<T extends $ConnectionConfig> {
        getBlockPos(): $BlockPos;
        getConnectionConfig(): T;
        updateConnectionConfig(arg0: $Function_<T, T>): void;
        getExtraGuiData(): $CompoundTag;
        conduit(): $Conduit<never, T>;
        get blockPos(): $BlockPos;
        get connectionConfig(): T;
        get extraGuiData(): $CompoundTag;
    }
    export class $RegisterConduitScreenTypesEvent extends $Event implements $IModBusEvent {
        register<T extends $ConnectionConfig>(arg0: $ConduitType_<$Conduit_<never, T>, never>, arg1: $ConduitScreenType<T>): void;
        getScreenTypes(): $Map<$ConduitType<never, never>, $ConduitScreenType<never>>;
        constructor();
        get screenTypes(): $Map<$ConduitType<never, never>, $ConduitScreenType<never>>;
    }
    export class $ConduitScreenType<U extends $ConnectionConfig> {
        createScreenWidgets(arg0: $ConduitScreenHelper, arg1: number, arg2: number, arg3: $ConduitMenuDataAccess<U>): void;
        renderScreenLabels(arg0: $ConduitMenuDataAccess<U>, arg1: $GuiGraphics, arg2: $Font, arg3: number, arg4: number): void;
        constructor();
    }
}
