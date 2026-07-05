import { $Conduit, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $ItemStack, $ItemStack_ } from "@package/net/minecraft/world/item";
import { $CompoundTag } from "@package/net/minecraft/nbt";
import { $IItemHandlerModifiable } from "@package/net/neoforged/neoforge/items";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $List } from "@package/java/util";
import { $FacadeType } from "@package/com/enderio/enderio/api/conduits/facade";
import { $Consumer_ } from "@package/java/util/function";
import { $ConduitNode } from "@package/com/enderio/enderio/api/conduits/network/node";
import { $Holder_, $Direction_, $Holder } from "@package/net/minecraft/core";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $Enum } from "@package/java/lang";
import { $ConnectionStatus } from "@package/com/enderio/enderio/api/conduits/connection";
import { $ConnectionConfigType_, $ConnectionConfig } from "@package/com/enderio/enderio/api/conduits/connection/config";

declare module "@package/com/enderio/enderio/api/conduits/bundle" {
    export class $ConduitBundle {
    }
    export interface $ConduitBundle {
        isEmpty(): boolean;
        getConnectedConduits(arg0: $Direction_): $List<$Holder<$Conduit<never, never>>>;
        isFull(): boolean;
        getConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionConfig;
        getConnectionConfig<T extends $ConnectionConfig>(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfigType_<T>): T;
        getConduits(): $List<$Holder<$Conduit<never, never>>>;
        tryConnectTo(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: boolean): boolean;
        hasConduitStrict(arg0: $Holder_<$Conduit<never, never>>): boolean;
        hasConduitOfType(arg0: $ConduitType_<never, never>): boolean;
        getFacadeType(): $FacadeType;
        getCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): $Holder<$Conduit<never, never>>;
        hasCompatibleConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getConnectionInventory(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $IItemHandlerModifiable;
        getConduitExtraWorldData(arg0: $Holder_<$Conduit<never, never>>): $CompoundTag;
        getConduitExtraGuiData(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $CompoundTag;
        setConnectionConfig(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $ConnectionConfig): void;
        removeConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Consumer_<$ItemStack>): void;
        canAddConduit(arg0: $Holder_<$Conduit<never, never>>): boolean;
        getConduitNode(arg0: $Holder_<$Conduit<never, never>>): $ConduitNode;
        getConduitByType(arg0: $ConduitType_<never, never>): $Holder<$Conduit<never, never>>;
        getFacadeBlock(): $Block;
        getFacadeProvider(): $ItemStack;
        setFacadeProvider(arg0: $ItemStack_): void;
        getConnectionStatus(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_): $ConnectionStatus;
        hasFacade(): boolean;
        addConduit(arg0: $Holder_<$Conduit<never, never>>, arg1: $Direction_, arg2: $Player): $AddConduitResult;
        get empty(): boolean;
        get full(): boolean;
        get conduits(): $List<$Holder<$Conduit<never, never>>>;
        get facadeType(): $FacadeType;
        get facadeBlock(): $Block;
    }
    export class $AddConduitResult {
    }
    export interface $AddConduitResult {
        hasChanged(): boolean;
    }
    /**
     * @deprecated
     */
    export class $SlotType extends $Enum<$SlotType> {
        getY(): number;
        static values(): $SlotType[];
        static valueOf(arg0: string): $SlotType;
        getX(): number;
        static FILTER_INSERT: $SlotType;
        static FILTER_EXTRACT: $SlotType;
        static UPGRADE_EXTRACT: $SlotType;
        static Y_POSITION: number;
        get y(): number;
        get x(): number;
    }
    /**
     * Values that may be interpreted as {@link $SlotType}.
     */
    export type $SlotType_ = "filter_extract" | "filter_insert" | "upgrade_extract";
}
