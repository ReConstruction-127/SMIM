import { $Conduit, $ConduitType, $ConduitType_ } from "@package/com/enderio/enderio/api/conduits";
import { $Holder_, $Direction_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $BakedQuad } from "@package/net/minecraft/client/renderer/block/model";
import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ModelResourceLocation } from "@package/net/minecraft/client/resources/model";
import { $List, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";
import { $RandomSource } from "@package/net/minecraft/util";

declare module "@package/com/enderio/enderio/api/conduits/model" {
    export class $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory {
    }
    export interface $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory {
        createModifier(): $ConduitModelModifier;
    }
    /**
     * Values that may be interpreted as {@link $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory}.
     */
    export type $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory_ = (() => $ConduitModelModifier);
    export class $ConduitModelModifier {
    }
    export interface $ConduitModelModifier {
        getTexture(arg0: $Holder_<$Conduit<never, never>>, arg1: $CompoundTag_): $ResourceLocation;
        createConnectionQuads(arg0: $Holder_<$Conduit<never, never>>, arg1: $CompoundTag_, arg2: $Direction_, arg3: $Direction_, arg4: $RandomSource, arg5: $RenderType): $List<$BakedQuad>;
        getModelDependencies(): $List<$ModelResourceLocation>;
        get modelDependencies(): $List<$ModelResourceLocation>;
    }
    export class $RegisterConduitModelModifiersEvent extends $Event implements $IModBusEvent {
        getModifiers(): $Map<$ConduitType<never, never>, $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory>;
        register(arg0: $ConduitType_<never, never>, arg1: $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory_): void;
        constructor();
        get modifiers(): $Map<$ConduitType<never, never>, $RegisterConduitModelModifiersEvent$ConduitCoreModelModifierFactory>;
    }
}
