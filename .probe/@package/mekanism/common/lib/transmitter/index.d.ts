import { $Level } from "@package/net/minecraft/world/level";
import { $Codec } from "@package/com/mojang/serialization";
import { $IHasTranslationKey$IHasEnumNameTranslationKey, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent, $ILangEntry, $IHasTextComponent } from "@package/mekanism/api/text";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Component } from "@package/net/minecraft/network/chat";
import { $IIncrementalEnum } from "@package/mekanism/api";
import { $UUID, $List, $Set, $Collection_, $Collection } from "@package/java/util";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $BufferedTransmitter, $Transmitter } from "@package/mekanism/common/content/network/transmitter";
import { $IntFunction, $Predicate_ } from "@package/java/util/function";
import { $BlockPos_, $Direction_, $Direction } from "@package/net/minecraft/core";
import { $Range3D } from "@package/mekanism/common/lib/math";
import { $TileEntityTransmitter } from "@package/mekanism/common/tile/transmitter";
import { $Enum, $Object } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as acceptor from "@package/mekanism/common/lib/transmitter/acceptor";

declare module "@package/mekanism/common/lib/transmitter" {
    export class $CompatibleTransmitterValidator<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> {
        isTransmitterCompatible(transmitter: $Transmitter<never, never, never>): boolean;
        isNetworkCompatible(net: NETWORK): boolean;
        constructor();
    }
    export class $ConnectionType extends $Enum<$ConnectionType> implements $IIncrementalEnum<$ConnectionType>, $StringRepresentable, $IHasTranslationKey, $IHasTextComponent$IHasEnumNameTextComponent {
        static values(): $ConnectionType[];
        static valueOf(name: string): $ConnectionType;
        canAccept(): boolean;
        getSerializedName(): string;
        getTranslationKey(): string;
        getTextComponent(): $Component;
        canSendTo(): boolean;
        adjust(arg0: number): $ConnectionType;
        adjust(arg0: number, arg1: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        getPrevious(): $ConnectionType;
        getNext(arg0: $Predicate_<$ConnectionType>): $ConnectionType;
        getNext(): $ConnectionType;
        getRemappedEnumConstantName(): string;
        getTranslatedName(): $Component;
        byIndex(arg0: number): $ConnectionType;
        static PULL: $ConnectionType;
        static BY_ID: $IntFunction<$ConnectionType>;
        static NONE: $ConnectionType;
        static NORMAL: $ConnectionType;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ConnectionType>;
        static PUSH: $ConnectionType;
        get serializedName(): string;
        get translationKey(): string;
        get textComponent(): $Component;
        get remappedEnumConstantName(): string;
        get translatedName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ConnectionType}.
     */
    export type $ConnectionType_ = "normal" | "push" | "pull" | "none";
    export class $DynamicBufferedNetwork$TransferEvent<NETWORK extends $DynamicBufferedNetwork<never, NETWORK, never, never>> extends $Event {
        network: NETWORK;
        constructor(network: NETWORK);
    }
    export class $INetworkDataHandler {
    }
    export interface $INetworkDataHandler {
        getNetworkReaderCapacity(): $Object;
        getFlowInfo(): $Component;
        getStoredInfo(): $Component;
        getNeededInfo(): $Component;
        get networkReaderCapacity(): $Object;
        get flowInfo(): $Component;
        get storedInfo(): $Component;
        get neededInfo(): $Component;
    }
    export class $TransmissionType extends $Enum<$TransmissionType> implements $IHasTranslationKey$IHasEnumNameTranslationKey, $StringRepresentable {
        getName(): string;
        static values(): $TransmissionType[];
        static valueOf(name: string): $TransmissionType;
        getSerializedName(): string;
        getTranslationKey(): string;
        getLangEntry(): $ILangEntry;
        getTransmission(): string;
        getLegacyOrdinal(): number;
        checkTransmissionType(transmitter: $Transmitter<never, never, never>): boolean;
        checkTransmissionType(transmitter: $TileEntityTransmitter): boolean;
        getTranslatedName(): $Component;
        getRemappedEnumConstantName(): string;
        static ITEM: $TransmissionType;
        static HEAT: $TransmissionType;
        static ENERGY: $TransmissionType;
        static CODEC: $Codec<$TransmissionType>;
        static FLUID: $TransmissionType;
        static BY_ID: $IntFunction<$TransmissionType>;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TransmissionType>;
        static CHEMICAL: $TransmissionType;
        get serializedName(): string;
        get translationKey(): string;
        get langEntry(): $ILangEntry;
        get transmission(): string;
        get legacyOrdinal(): number;
        get translatedName(): $Component;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TransmissionType}.
     */
    export type $TransmissionType_ = "energy" | "fluids" | "chemicals" | "items" | "heat";
    export class $DynamicNetwork<ACCEPTOR, NETWORK extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER>, TRANSMITTER extends $Transmitter<ACCEPTOR, NETWORK, TRANSMITTER>> implements $INetworkDataHandler, $IHasTextComponent {
        invalidate(triggerTransmitter: TRANSMITTER): void;
        commit(): void;
        isEmpty(): boolean;
        register(): void;
        getWorld(): $Level;
        deregister(): void;
        getUUID(): $UUID;
        getTransmitter(pos: number): TRANSMITTER;
        getTransmitter(pos: $BlockPos_): TRANSMITTER;
        isRemote(): boolean;
        onUpdate(): void;
        getAcceptorDirections(pos: number): $Set<$Direction>;
        getTransmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        transmittersSize(): number;
        hasAcceptor(acceptorPos: $BlockPos_): boolean;
        getAcceptorCount(): number;
        getTransmitters(): $Collection<TRANSMITTER>;
        acceptorChanged(transmitter: TRANSMITTER, side: $Direction_): void;
        removeTransmitter(transmitter: TRANSMITTER): void;
        addTransmitter(transmitter: TRANSMITTER): void;
        getCachedAcceptor(acceptorPos: number, side: $Direction_): ACCEPTOR;
        addNewTransmitters(newTransmitters: $Collection_<TRANSMITTER>, transmitterValidator: $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>): void;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        getNetworkReaderCapacity(): $Object;
        getFlowInfo(): $Component;
        getStoredInfo(): $Component;
        getNeededInfo(): $Component;
        get empty(): boolean;
        get world(): $Level;
        get UUID(): $UUID;
        get remote(): boolean;
        get transmitterValidator(): $CompatibleTransmitterValidator<ACCEPTOR, NETWORK, TRANSMITTER>;
        get acceptorCount(): number;
        get transmitters(): $Collection<TRANSMITTER>;
        get networkReaderCapacity(): $Object;
        get flowInfo(): $Component;
        get storedInfo(): $Component;
        get neededInfo(): $Component;
    }
    export class $DynamicBufferedNetwork<ACCEPTOR, NETWORK extends $DynamicBufferedNetwork<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>, BUFFER, TRANSMITTER extends $BufferedTransmitter<ACCEPTOR, NETWORK, BUFFER, TRANSMITTER>> extends $DynamicNetwork<ACCEPTOR, NETWORK, TRANSMITTER> {
        getCapacity(): number;
        isCompatibleWith(other: NETWORK): boolean;
        getBuffer(): BUFFER;
        markDirty(): void;
        validateSaveShares(triggerTransmitter: TRANSMITTER): void;
        getPacketRange(): $Range3D;
        updateCapacity(): void;
        clampBuffer(): void;
        adoptTransmittersAndAcceptorsFrom(net: NETWORK): $List<TRANSMITTER>;
        absorbBuffer(transmitter: TRANSMITTER): void;
        currentScale: number;
        get capacity(): number;
        get buffer(): BUFFER;
        get packetRange(): $Range3D;
    }
}
