import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $Record } from "@package/java/lang";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/aztech/modern_industrialization/machines/gui" {
    export class $GuiComponentServer$Type<P, D> extends $Record {
        id(): $ResourceLocation;
        paramsCodec(): $StreamCodec<$RegistryFriendlyByteBuf, P>;
        dataCodec(): $StreamCodec<$RegistryFriendlyByteBuf, D>;
        constructor(id: $ResourceLocation_, paramsCodec: $StreamCodec<$RegistryFriendlyByteBuf, P>, dataCodec: $StreamCodec<$RegistryFriendlyByteBuf, D>);
    }
    /**
     * Values that may be interpreted as {@link $GuiComponentServer$Type}.
     */
    export type $GuiComponentServer$Type_<P, D> = { id?: $ResourceLocation_, paramsCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, dataCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>,  } | [id?: $ResourceLocation_, paramsCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, dataCodec?: $StreamCodec<$RegistryFriendlyByteBuf, any>, ];
    export class $GuiComponentServer<P, D> {
    }
    export interface $GuiComponentServer<P, D> extends $GuiComponent {
        getType(): $GuiComponentServer$Type<P, D>;
        getParams(): P;
        extractData(): D;
        get type(): $GuiComponentServer$Type<P, D>;
        get params(): P;
    }
    export class $MachineGuiParameters {
        write(arg0: $FriendlyByteBuf): void;
        static read(arg0: $FriendlyByteBuf): $MachineGuiParameters;
        blockId: $ResourceLocation;
        playerInventoryX: number;
        playerInventoryY: number;
        lockButton: boolean;
        backgroundHeight: number;
        backgroundWidth: number;
    }
    export class $GuiComponent {
    }
    export interface $GuiComponent {
        setupMenu(arg0: $GuiComponent$MenuFacade): void;
        set upMenu(value: $GuiComponent$MenuFacade);
    }
}
