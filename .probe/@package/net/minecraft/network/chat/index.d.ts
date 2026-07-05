import { $JsonElement } from "@package/com/google/gson";
import { $MapCodec_, $DataResult, $Codec, $MapCodec } from "@package/com/mojang/serialization";
import { $Tag } from "@package/net/minecraft/nbt";
import { $EntityType_, $EntityType, $Entity } from "@package/net/minecraft/world/entity";
import { $Message, $Message_, $ParseResults } from "@package/com/mojang/brigadier";
import { $UUID_, $Map, $UUID, $List, $Date, $List_, $BitSet } from "@package/java/util";
import { $ByteBuffer } from "@package/java/nio";
import { $SignatureUpdater$Output_, $FormattedCharSequence, $StringRepresentable, $SignatureUpdater_, $SignatureValidator_, $Unit } from "@package/net/minecraft/util";
import { $Consumer_, $UnaryOperator_, $BooleanSupplier_ } from "@package/java/util/function";
import { $ServerPlayer } from "@package/net/minecraft/server/level";
import { $ChatFormatting_ } from "@package/net/minecraft";
import { $BootstrapContext } from "@package/net/minecraft/data/worldgen";
import { $RegistryAccess, $Holder_, $Holder } from "@package/net/minecraft/core";
import { $WithCodec } from "@package/dev/latvian/mods/kubejs/util";
import { $URI } from "@package/java/net";
import { RegistryMarked, RegistryTypes, SpecialTypes } from "@special/types";
import { $RegistryFriendlyByteBuf, $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Iterable, $Record, $Object } from "@package/java/lang";
import { $ChunkPos } from "@package/net/minecraft/world/level";
import { $Logger } from "@package/org/slf4j";
import { $ItemStack_, $ItemStack } from "@package/net/minecraft/world/item";
import { $KubeColor, $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $ProfilePublicKey, $ProfilePublicKey$Data_, $ProfilePublicKey$Data, $ProfilePublicKey_ } from "@package/net/minecraft/world/entity/player";
import { $DataSource } from "@package/net/minecraft/network/chat/contents";
import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $Instant, $Duration_, $Duration } from "@package/java/time";
import { $ResourceKey_, $ResourceKey, $RegistryOps, $ResourceLocation, $ResourceLocation_ } from "@package/net/minecraft/resources";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $ComponentKJS } from "@package/dev/latvian/mods/kubejs/core";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as numbers from "@package/net/minecraft/network/chat/numbers";
export * as contents from "@package/net/minecraft/network/chat/contents";

declare module "@package/net/minecraft/network/chat" {
    export class $SignableCommand<S> extends $Record {
        static of<S>(results: $ParseResults<S>): $SignableCommand<S>;
        "arguments"(): $List<$SignableCommand$Argument<S>>;
        getArgument(argument: string): $SignableCommand$Argument<S>;
        static hasSignableArguments<S>(parseResults: $ParseResults<S>): boolean;
        constructor(arg0: $List_<$SignableCommand$Argument_<S>>);
    }
    /**
     * Values that may be interpreted as {@link $SignableCommand}.
     */
    export type $SignableCommand_<S> = { arguments?: $List_<$SignableCommand$Argument_<any>>,  } | [arguments?: $List_<$SignableCommand$Argument_<any>>, ];
    export class $ChatTypeDecoration extends $Record {
        parameters(): $List<$ChatTypeDecoration$Parameter>;
        style(): $Style;
        translationKey(): string;
        decorate(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
        static withSender(translationKey: string): $ChatTypeDecoration;
        static incomingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static outgoingDirectMessage(translationKey: string): $ChatTypeDecoration;
        static teamMessage(translationKey: string): $ChatTypeDecoration;
        static CODEC: $Codec<$ChatTypeDecoration>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatTypeDecoration>;
        constructor(arg0: string, arg1: $List_<$ChatTypeDecoration$Parameter_>, arg2: $Style);
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration}.
     */
    export type $ChatTypeDecoration_ = { translationKey?: string, style?: $Style, parameters?: $List_<$ChatTypeDecoration$Parameter_>,  } | [translationKey?: string, style?: $Style, parameters?: $List_<$ChatTypeDecoration$Parameter_>, ];
    export class $MessageSignatureCache {
        push(signedMessageBody: $SignedMessageBody_, signature: $MessageSignature_ | null): void;
        static createDefault(): $MessageSignatureCache;
        unpack(index: number): $MessageSignature;
        pack(signature: $MessageSignature_): number;
        static NOT_FOUND: number;
        constructor(size: number);
    }
    export class $SignedMessageLink extends $Record {
        index(): number;
        static root(sender: $UUID_, sessionId: $UUID_): $SignedMessageLink;
        advance(): $SignedMessageLink;
        static unsigned(sender: $UUID_): $SignedMessageLink;
        sender(): $UUID;
        sessionId(): $UUID;
        updateSignature(output: $SignatureUpdater$Output_): void;
        isDescendantOf(other: $SignedMessageLink_): boolean;
        static CODEC: $Codec<$SignedMessageLink>;
        constructor(arg0: number, arg1: $UUID_, arg2: $UUID_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageLink}.
     */
    export type $SignedMessageLink_ = { sender?: $UUID_, index?: number, sessionId?: $UUID_,  } | [sender?: $UUID_, index?: number, sessionId?: $UUID_, ];
    export class $ClickEvent implements $WithCodec {
        /**
         * Gets the value to perform the action on when this event is raised.  For example, if the action is "open URL", this would be the URL to open.
         */
        getValue(): string;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $ClickEvent$Action;
        getCodec(): $Codec<any>;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        static CODEC: $Codec<$ClickEvent>;
        constructor(action: $ClickEvent$Action_, value: string);
        get value(): string;
        get action(): $ClickEvent$Action;
        get codec(): $Codec<any>;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent}.
     */
    export type $ClickEvent_ = { action: $ClickEvent$Action_, value: string,  };
    export class $SignedMessageBody extends $Record {
        content(): string;
        static unsigned(content: string): $SignedMessageBody;
        timeStamp(): $Instant;
        pack(signatureCache: $MessageSignatureCache): $SignedMessageBody$Packed;
        lastSeen(): $LastSeenMessages;
        salt(): number;
        updateSignature(output: $SignatureUpdater$Output_): void;
        static MAP_CODEC: $MapCodec<$SignedMessageBody>;
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody}.
     */
    export type $SignedMessageBody_ = { salt?: number, lastSeen?: $LastSeenMessages_, content?: string, timeStamp?: $Instant,  } | [salt?: number, lastSeen?: $LastSeenMessages_, content?: string, timeStamp?: $Instant, ];
    export class $FormattedText {
        static of(text: string, style: $Style): $FormattedText;
        static of(text: string): $FormattedText;
        static composite(elements: $List_<$FormattedText>): $FormattedText;
        static composite(...elements: $FormattedText[]): $FormattedText;
        static EMPTY: $FormattedText;
        static STOP_ITERATION: ($Unit) | undefined;
    }
    export interface $FormattedText {
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        get string(): string;
    }
    export class $ComponentContents {
    }
    export interface $ComponentContents {
        type(): $ComponentContents$Type<never>;
        resolve(nbtPathPattern: $CommandSourceStack | null, entity: $Entity | null, recursionDepth: number): $MutableComponent;
        visit<T>(contentConsumer: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        visit<T>(styledContentConsumer: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents}.
     */
    export type $ComponentContents_ = (() => $ComponentContents$Type_<never>);
    export class $RemoteChatSession extends $Record {
        hasExpired(): boolean;
        sessionId(): $UUID;
        createMessageDecoder(sender: $UUID_): $SignedMessageChain$Decoder;
        profilePublicKey(): $ProfilePublicKey;
        createMessageValidator(duration: $Duration_): $SignedMessageValidator;
        asData(): $RemoteChatSession$Data;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession}.
     */
    export type $RemoteChatSession_ = { profilePublicKey?: $ProfilePublicKey_, sessionId?: $UUID_,  } | [profilePublicKey?: $ProfilePublicKey_, sessionId?: $UUID_, ];
    export class $ChatType extends $Record {
        static bootstrap(context: $BootstrapContext<$ChatType_>): void;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, entity: $Entity): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, registryAccess: $RegistryAccess, name: $Component_): $ChatType$Bound;
        static bind(chatTypeKey: $ResourceKey_<$ChatType>, source: $CommandSourceStack): $ChatType$Bound;
        narration(): $ChatTypeDecoration;
        chat(): $ChatTypeDecoration;
        static SAY_COMMAND: $ResourceKey<$ChatType>;
        static MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static CHAT: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_OUTGOING: $ResourceKey<$ChatType>;
        static TEAM_MSG_COMMAND_INCOMING: $ResourceKey<$ChatType>;
        static DIRECT_CODEC: $Codec<$ChatType>;
        static EMOTE_COMMAND: $ResourceKey<$ChatType>;
        static DIRECT_STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType>;
        static DEFAULT_CHAT_DECORATION: $ChatTypeDecoration;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $Holder<$ChatType>>;
        constructor(arg0: $ChatTypeDecoration_, arg1: $ChatTypeDecoration_);
    }
    /**
     * Values that may be interpreted as {@link $ChatType}.
     */
    export type $ChatType_ = RegistryTypes.ChatType | { chat?: $ChatTypeDecoration_, narration?: $ChatTypeDecoration_,  } | [chat?: $ChatTypeDecoration_, narration?: $ChatTypeDecoration_, ];
    export class $MessageSignature$Packed extends $Record {
        id(): number;
        static write(buffer: $FriendlyByteBuf, packed: $MessageSignature$Packed_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature$Packed;
        unpack(signatureCache: $MessageSignatureCache): ($MessageSignature) | undefined;
        fullSignature(): $MessageSignature;
        static FULL_SIGNATURE: number;
        constructor(arg0: number, arg1: $MessageSignature_ | null);
        constructor(id: number);
        constructor(fullSignature: $MessageSignature_);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature$Packed}.
     */
    export type $MessageSignature$Packed_ = { fullSignature?: $MessageSignature_, id?: number,  } | [fullSignature?: $MessageSignature_, id?: number, ];
    export class $TextColor implements $KubeColor {
        getValue(): number;
        serialize(): string;
        kjs$getARGB(): number;
        kjs$getRGB(): number;
        static fromLegacyFormat(formatting: $ChatFormatting_): $TextColor;
        static fromRgb(color: number): $TextColor;
        static parseColor(color: string): $DataResult<$TextColor>;
        toHexString(): string;
        getFireworkRGB(): number;
        specialEquals(o: $Object, shallow: boolean): boolean;
        createTextColor(): $TextColor;
        serialize(): string;
        static CODEC: $Codec<$TextColor>;
        static NAMED_COLORS: $Map<string, $TextColor>;
        constructor(value: number, name: string);
        get value(): number;
        get fireworkRGB(): number;
    }
    /**
     * Values that may be interpreted as {@link $TextColor}.
     */
    export type $TextColor_ = "" | "light_blue_dye" | "blue_dye" | "purple_dye" | "dark_red" | "lightgraydye" | "dark_aqua" | "none" | "green_dye" | "blackdye" | "dark_blue" | "red" | "pink_dye" | "aqua" | "white" | "white_dye" | "dark_gray" | "light_purple" | "brown_dye" | "black" | "darkpurple" | "none" | "light_blue_dye" | "aqua" | "lightbluedye" | "limedye" | "purple_dye" | "green_dye" | "magenta_dye" | "-" | "lime_dye" | "yellowdye" | "graydye" | "purpledye" | "dark_purple" | "orange_dye" | "darkgray" | "browndye" | "yellow" | "lime_dye" | "bluedye" | "white_dye" | "pinkdye" | "blue_dye" | "cyandye" | "gold" | "gray" | "magenta_dye" | "blue" | "light_gray_dye" | "yellow" | "darkblue" | "transparent" | "orange_dye" | "red_dye" | "dark_purple" | "gold" | "gray" | "light_purple" | "darkred" | "greendye" | "dark_red" | "reddye" | "gray_dye" | "orangedye" | "yellow_dye" | "black_dye" | "magentadye" | "white" | "green" | "light_gray_dye" | "black_dye" | "darkgreen" | "red_dye" | "dark_green" | "black" | "lightpurple" | "pink_dye" | "dark_blue" | "green" | "darkaqua" | "gray_dye" | "cyan_dye" | "red" | "brown_dye" | "cyan_dye" | "blue" | "whitedye" | "dark_aqua" | "yellow_dye" | "dark_green" | "dark_gray" | `#${string}` | number;
    export class $HoverEvent {
        getValue<T>(actionType: $HoverEvent$Action<T>): T;
        /**
         * Gets the action to perform when this event is raised.
         */
        getAction(): $HoverEvent$Action<never>;
        static CODEC: $Codec<$HoverEvent>;
        constructor<T>(action: $HoverEvent$Action<T>, value: T);
        get action(): $HoverEvent$Action<never>;
    }
    export class $LastSeenMessages$Update extends $Record {
        offset(): number;
        write(buffer: $FriendlyByteBuf): void;
        acknowledged(): $BitSet;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: number, arg1: $BitSet);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Update}.
     */
    export type $LastSeenMessages$Update_ = { acknowledged?: $BitSet, offset?: number,  } | [acknowledged?: $BitSet, offset?: number, ];
    export class $ChatTypeDecoration$Parameter extends $Enum<$ChatTypeDecoration$Parameter> implements $StringRepresentable {
        static values(): $ChatTypeDecoration$Parameter[];
        static valueOf(arg0: string): $ChatTypeDecoration$Parameter;
        select(content: $Component_, boundChatType: $ChatType$Bound_): $Component;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static TARGET: $ChatTypeDecoration$Parameter;
        static CODEC: $Codec<$ChatTypeDecoration$Parameter>;
        static SENDER: $ChatTypeDecoration$Parameter;
        static CONTENT: $ChatTypeDecoration$Parameter;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $ChatTypeDecoration$Parameter>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ChatTypeDecoration$Parameter}.
     */
    export type $ChatTypeDecoration$Parameter_ = "sender" | "target" | "content";
    export class $OutgoingChatMessage {
        static create(message: $PlayerChatMessage_): $OutgoingChatMessage;
    }
    export interface $OutgoingChatMessage {
        content(): $Component;
        sendToPlayer(player: $ServerPlayer, filtered: boolean, boundType: $ChatType$Bound_): void;
    }
    export class $HoverEvent$LegacyConverter<T> {
    }
    export interface $HoverEvent$LegacyConverter<T> {
        parse(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<T>;
    }
    /**
     * Values that may be interpreted as {@link $HoverEvent$LegacyConverter}.
     */
    export type $HoverEvent$LegacyConverter_<T> = ((arg0: $Component, arg1: $RegistryOps<never>) => $DataResult<T>);
    export class $FilterMask {
        isEmpty(): boolean;
        apply(text: string): string;
        static write(buffer: $FriendlyByteBuf, mask: $FilterMask): void;
        static read(buffer: $FriendlyByteBuf): $FilterMask;
        applyWithFormatting(text: string): $Component;
        isFullyFiltered(): boolean;
        setFiltered(size: number): void;
        static PASS_THROUGH: $FilterMask;
        static CODEC: $Codec<$FilterMask>;
        static FULLY_FILTERED: $FilterMask;
        static FILTERED_STYLE: $Style;
        constructor(size: number);
        get empty(): boolean;
        get fullyFiltered(): boolean;
        set filtered(value: number);
    }
    export class $ChatDecorator {
        static PLAIN: $ChatDecorator;
    }
    export interface $ChatDecorator {
        decorate(player: $ServerPlayer | null, message: $Component_): $Component;
    }
    /**
     * Values that may be interpreted as {@link $ChatDecorator}.
     */
    export type $ChatDecorator_ = ((arg0: $ServerPlayer, arg1: $Component) => $Component_);
    export class $FormattedText$ContentConsumer<T> {
    }
    export interface $FormattedText$ContentConsumer<T> {
        accept(content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$ContentConsumer}.
     */
    export type $FormattedText$ContentConsumer_<T> = ((arg0: string) => (T) | undefined);
    export class $ClickEvent$Action extends $Enum<$ClickEvent$Action> implements $StringRepresentable {
        static values(): $ClickEvent$Action[];
        static valueOf(arg0: string): $ClickEvent$Action;
        static filterForSerialization(action: $ClickEvent$Action_): $DataResult<$ClickEvent$Action>;
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $MapCodec<$ClickEvent$Action>;
        static UNSAFE_CODEC: $MapCodec<$ClickEvent$Action>;
        static RUN_COMMAND: $ClickEvent$Action;
        static CHANGE_PAGE: $ClickEvent$Action;
        static COPY_TO_CLIPBOARD: $ClickEvent$Action;
        static SUGGEST_COMMAND: $ClickEvent$Action;
        static OPEN_FILE: $ClickEvent$Action;
        static OPEN_URL: $ClickEvent$Action;
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ClickEvent$Action}.
     */
    export type $ClickEvent$Action_ = "open_url" | "open_file" | "run_command" | "suggest_command" | "change_page" | "copy_to_clipboard";
    export class $SignedMessageBody$Packed extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        content(): string;
        timeStamp(): $Instant;
        unpack(signatureCache: $MessageSignatureCache): ($SignedMessageBody) | undefined;
        lastSeen(): $LastSeenMessages$Packed;
        salt(): number;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $Instant, arg2: number, arg3: $LastSeenMessages$Packed_);
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageBody$Packed}.
     */
    export type $SignedMessageBody$Packed_ = { salt?: number, lastSeen?: $LastSeenMessages$Packed_, content?: string, timeStamp?: $Instant,  } | [salt?: number, lastSeen?: $LastSeenMessages$Packed_, content?: string, timeStamp?: $Instant, ];
    export class $HoverEvent$ItemStackInfo {
        getItemStack(): $ItemStack;
        static CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        static FULL_CODEC: $Codec<$HoverEvent$ItemStackInfo>;
        constructor(stack: $ItemStack_);
        get itemStack(): $ItemStack;
    }
    export class $FormattedText$StyledContentConsumer<T> {
    }
    export interface $FormattedText$StyledContentConsumer<T> {
        accept(style: $Style, content: string): (T) | undefined;
    }
    /**
     * Values that may be interpreted as {@link $FormattedText$StyledContentConsumer}.
     */
    export type $FormattedText$StyledContentConsumer_<T> = ((arg0: $Style, arg1: string) => (T) | undefined);
    export class $LastSeenMessages extends $Record {
        entries(): $List<$MessageSignature>;
        pack(signatureCache: $MessageSignatureCache): $LastSeenMessages$Packed;
        updateSignature(updaterOutput: $SignatureUpdater$Output_): void;
        static CODEC: $Codec<$LastSeenMessages>;
        static LAST_SEEN_MESSAGES_MAX_LENGTH: number;
        static EMPTY: $LastSeenMessages;
        constructor(arg0: $List_<$MessageSignature_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages}.
     */
    export type $LastSeenMessages_ = { entries?: $List_<$MessageSignature_>,  } | [entries?: $List_<$MessageSignature_>, ];
    export class $HoverEvent$Action<T> implements $StringRepresentable {
        /**
         * Indicates whether this event can be run from chat text.
         */
        isAllowedFromServer(): boolean;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_ITEM: $HoverEvent$Action<$HoverEvent$ItemStackInfo>;
        static SHOW_ENTITY: $HoverEvent$Action<$HoverEvent$EntityTooltipInfo>;
        static UNSAFE_CODEC: $Codec<$HoverEvent$Action<never>>;
        static SHOW_TEXT: $HoverEvent$Action<$Component>;
        constructor(name: string, allowFromServer: boolean, codec: $Codec<T>, legacyConverter: $HoverEvent$LegacyConverter_<T>);
        get allowedFromServer(): boolean;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    export class $ComponentContents$Type<T extends $ComponentContents> extends $Record implements $StringRepresentable {
        id(): string;
        codec(): $MapCodec<T>;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        constructor(arg0: $MapCodec_<T>, arg1: string);
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ComponentContents$Type}.
     */
    export type $ComponentContents$Type_<T> = { codec?: $MapCodec_<$ComponentContents_>, id?: string,  } | [codec?: $MapCodec_<$ComponentContents_>, id?: string, ];
    export class $SignedMessageValidator {
        static LOGGER: $Logger;
        static ACCEPT_UNSIGNED: $SignedMessageValidator;
        static REJECT_ALL: $SignedMessageValidator;
    }
    export interface $SignedMessageValidator {
        updateAndValidate(message: $PlayerChatMessage_): $PlayerChatMessage;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageValidator}.
     */
    export type $SignedMessageValidator_ = ((arg0: $PlayerChatMessage) => $PlayerChatMessage_);
    export interface $ChatType extends RegistryMarked<RegistryTypes.ChatTypeTag, RegistryTypes.ChatType> {}
    export class $Component {
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        static empty(): $MutableComponent;
        static literal(name: string): $MutableComponent;
        static selector(pattern: string, separator: ($Component_) | undefined): $MutableComponent;
        static score(name: string, objective: string): $MutableComponent;
        static translatable(name: string): $MutableComponent;
        static translatable(key: string, ...args: $Object[]): $MutableComponent;
        static translationArg(location: $ResourceLocation_): $Component;
        static translationArg(chunkPos: $ChunkPos): $Component;
        static translationArg(uri: $URI): $Component;
        static translationArg(uuid: $UUID_): $Component;
        static translationArg(message: $Message_): $Component;
        static translationArg(date: $Date): $Component;
        static translatableEscape(key: string, ...args: $Object[]): $MutableComponent;
        static nullToEmpty(text: string | null): $Component;
        static translatableWithFallback(name: string, objective: string | null): $MutableComponent;
        static translatableWithFallback(key: string, fallback: string | null, ...args: $Object[]): $MutableComponent;
        static keybind(name: string): $MutableComponent;
        static nbt(nbtPathPattern: string, interpreting: boolean, separator: ($Component_) | undefined, dataSource: $DataSource): $MutableComponent;
    }
    export interface $Component extends $Message, $FormattedText {
        contains(other: $Component_): boolean;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        copy(): $MutableComponent;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes, limited to `maxLength` characters.
         */
        getString(maxLength: number): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        getContents(): $ComponentContents;
        getVisualOrderText(): $FormattedCharSequence;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        tryCollapseToString(): string;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        toFlatList(style: $Style): $List<$Component>;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        /**
         * Creates a copy of this component and also copies the style and siblings. Note that the siblings are copied shallowly, meaning the siblings themselves are not copied.
         */
        plainCopy(): $MutableComponent;
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
        get style(): $Style;
    }
    /**
     * Values that may be interpreted as {@link $Component}.
     */
    export type $Component_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $Component_, extra?: $Component_[],  } | $Component_[];
    export class $RemoteChatSession$Data extends $Record {
        validate(profile: $GameProfile, signatureValidator: $SignatureValidator_): $RemoteChatSession;
        static write(buffer: $FriendlyByteBuf, data: $RemoteChatSession$Data_): void;
        static read(buffer: $FriendlyByteBuf): $RemoteChatSession$Data;
        sessionId(): $UUID;
        profilePublicKey(): $ProfilePublicKey$Data;
        constructor(arg0: $UUID_, arg1: $ProfilePublicKey$Data_);
    }
    /**
     * Values that may be interpreted as {@link $RemoteChatSession$Data}.
     */
    export type $RemoteChatSession$Data_ = { profilePublicKey?: $ProfilePublicKey$Data_, sessionId?: $UUID_,  } | [profilePublicKey?: $ProfilePublicKey$Data_, sessionId?: $UUID_, ];
    /**
     * A Style for `Component`.
     * Stores color, text formatting (bold, etc.) as well as possible HoverEvent/ClickEvent.
     */
    export class $Style {
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isEmpty(): boolean;
        /**
         * Get the text to be inserted into Chat when the component is shift-clicked
         */
        getInsertion(): string;
        /**
         * The effective chat click event.
         */
        getClickEvent(): $ClickEvent;
        withUnderlined(bold: boolean | null): $Style;
        /**
         * The effective chat hover event.
         */
        getHoverEvent(): $HoverEvent;
        withClickEvent(clickEvent: $ClickEvent_ | null): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isObfuscated(): boolean;
        applyFormat(formatting: $ChatFormatting_): $Style;
        applyFormats(...formats: $ChatFormatting_[]): $Style;
        withObfuscated(bold: boolean | null): $Style;
        withInsertion(insertion: string | null): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isStrikethrough(): boolean;
        withHoverEvent(hoverEvent: $HoverEvent | null): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isUnderlined(): boolean;
        applyLegacyFormat(formatting: $ChatFormatting_): $Style;
        withStrikethrough(bold: boolean | null): $Style;
        /**
         * The font to use for this Style
         */
        getFont(): $ResourceLocation;
        getColor(): $TextColor;
        withItalic(bold: boolean | null): $Style;
        withFont(fontId: $ResourceLocation_ | null): $Style;
        withColor(color: $TextColor_ | null): $Style;
        withColor(formatting: $ChatFormatting_ | null): $Style;
        withColor(rgb: number): $Style;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isBold(): boolean;
        /**
         * Whether text of this ChatStyle should be in bold.
         */
        isItalic(): boolean;
        withBold(bold: boolean | null): $Style;
        /**
         * Merges the style with another one. If either style is empty the other will be returned. If a value already exists on the current style it will not be overridden.
         */
        applyTo(style: $Style): $Style;
        static DEFAULT_FONT: $ResourceLocation;
        static EMPTY: $Style;
        get empty(): boolean;
        get insertion(): string;
        get clickEvent(): $ClickEvent;
        get hoverEvent(): $HoverEvent;
        get obfuscated(): boolean;
        get strikethrough(): boolean;
        get underlined(): boolean;
        get font(): $ResourceLocation;
        get color(): $TextColor;
        get bold(): boolean;
        get italic(): boolean;
    }
    export class $LastSeenMessages$Packed extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$MessageSignature$Packed>;
        unpack(signatureCache: $MessageSignatureCache): ($LastSeenMessages) | undefined;
        static EMPTY: $LastSeenMessages$Packed;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$MessageSignature$Packed_>);
    }
    /**
     * Values that may be interpreted as {@link $LastSeenMessages$Packed}.
     */
    export type $LastSeenMessages$Packed_ = { entries?: $List_<$MessageSignature$Packed_>,  } | [entries?: $List_<$MessageSignature$Packed_>, ];
    export class $MessageSignature extends $Record {
        bytes(): number[];
        static write(buffer: $FriendlyByteBuf, signature: $MessageSignature_): void;
        static read(buffer: $FriendlyByteBuf): $MessageSignature;
        verify(validator: $SignatureValidator_, updater: $SignatureUpdater_): boolean;
        asByteBuffer(): $ByteBuffer;
        pack(signatureCache: $MessageSignatureCache): $MessageSignature$Packed;
        static BYTES: number;
        static CODEC: $Codec<$MessageSignature>;
        constructor(bytes: number[]);
    }
    /**
     * Values that may be interpreted as {@link $MessageSignature}.
     */
    export type $MessageSignature_ = { bytes?: number[],  } | [bytes?: number[], ];
    export class $SignedMessageChain$Decoder {
        static unsigned(id: $UUID_, shouldEnforceSecureProfile: $BooleanSupplier_): $SignedMessageChain$Decoder;
    }
    export interface $SignedMessageChain$Decoder {
        unpack(signature: $MessageSignature_ | null, body: $SignedMessageBody_): $PlayerChatMessage;
        setChainBroken(): void;
    }
    /**
     * Values that may be interpreted as {@link $SignedMessageChain$Decoder}.
     */
    export type $SignedMessageChain$Decoder_ = ((arg0: $MessageSignature, arg1: $SignedMessageBody) => $PlayerChatMessage_);
    export class $HoverEvent$EntityTooltipInfo {
        getTooltipLines(): $List<$Component>;
        static legacyCreate(name: $Component_, ops: $RegistryOps<never> | null): $DataResult<$HoverEvent$EntityTooltipInfo>;
        static CODEC: $Codec<$HoverEvent$EntityTooltipInfo>;
        name: ($Component) | undefined;
        id: $UUID;
        type: $EntityType<never>;
        constructor(type: $EntityType_<never>, id: $UUID_, name: $Component_ | null);
        constructor(type: $EntityType_<never>, id: $UUID_, name: ($Component_) | undefined);
        get tooltipLines(): $List<$Component>;
    }
    export class $PlayerChatMessage extends $Record {
        signature(): $MessageSignature;
        filter(shouldFilter: boolean): $PlayerChatMessage;
        filter(mask: $FilterMask): $PlayerChatMessage;
        static system(content: string): $PlayerChatMessage;
        verify(validator: $SignatureValidator_): boolean;
        link(): $SignedMessageLink;
        isSystem(): boolean;
        static unsigned(sender: $UUID_, content: string): $PlayerChatMessage;
        timeStamp(): $Instant;
        removeSignature(): $PlayerChatMessage;
        hasSignature(): boolean;
        withUnsignedContent(message: $Component_): $PlayerChatMessage;
        sender(): $UUID;
        signedContent(): string;
        hasSignatureFrom(uuid: $UUID_): boolean;
        decoratedContent(): $Component;
        salt(): number;
        hasExpiredClient(timestamp: $Instant): boolean;
        unsignedContent(): $Component;
        filterMask(): $FilterMask;
        signedBody(): $SignedMessageBody;
        static updateSignature(output: $SignatureUpdater$Output_, link: $SignedMessageLink_, body: $SignedMessageBody_): void;
        hasExpiredServer(timestamp: $Instant): boolean;
        removeUnsignedContent(): $PlayerChatMessage;
        isFullyFiltered(): boolean;
        static MESSAGE_EXPIRES_AFTER_SERVER: $Duration;
        static MAP_CODEC: $MapCodec<$PlayerChatMessage>;
        static MESSAGE_EXPIRES_AFTER_CLIENT: $Duration;
        constructor(arg0: $SignedMessageLink_, arg1: $MessageSignature_ | null, arg2: $SignedMessageBody_, arg3: $Component_ | null, arg4: $FilterMask);
        get fullyFiltered(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerChatMessage}.
     */
    export type $PlayerChatMessage_ = { signedBody?: $SignedMessageBody_, link?: $SignedMessageLink_, signature?: $MessageSignature_, filterMask?: $FilterMask, unsignedContent?: $Component_,  } | [signedBody?: $SignedMessageBody_, link?: $SignedMessageLink_, signature?: $MessageSignature_, filterMask?: $FilterMask, unsignedContent?: $Component_, ];
    /**
     * A Component which can have its Style and siblings modified.
     */
    export class $MutableComponent implements $Component, $ComponentKJS {
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        append(sibling: $Component_): $MutableComponent;
        static create(contents: $ComponentContents_): $MutableComponent;
        getContents(): $ComponentContents;
        getVisualOrderText(): $FormattedCharSequence;
        /**
         * Gets the sibling components of this one.
         */
        getSiblings(): $List<$Component>;
        withStyle(modifyFunc: $UnaryOperator_<$Style>): $MutableComponent;
        withStyle(format: $ChatFormatting_): $MutableComponent;
        /**
         * Sets the style for this component and returns the component itself.
         */
        withStyle(style: $Style): $MutableComponent;
        withStyle(...formats: $ChatFormatting_[]): $MutableComponent;
        withColor(color: number): $MutableComponent;
        /**
         * Sets the style for this component and returns the component itself.
         */
        setStyle(style: $Style): $MutableComponent;
        /**
         * Gets the style of this component.
         */
        getStyle(): $Style;
        contains(other: $Component_): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        copy(): $MutableComponent;
        visit<T>(acceptor: $FormattedText$StyledContentConsumer_<T>, style: $Style): (T) | undefined;
        visit<T>(acceptor: $FormattedText$ContentConsumer_<T>): (T) | undefined;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes, limited to `maxLength` characters.
         */
        getString(maxLength: number): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        getString(): string;
        /**
         * Get the plain text of this FormattedText, without any styling or formatting codes.
         */
        tryCollapseToString(): string;
        toFlatList(style: $Style): $List<$Component>;
        /**
         * Gets the sibling components of this one.
         */
        toFlatList(): $List<$Component>;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        plainCopy(): $MutableComponent;
        forEach(action: $Consumer_<$Component>): void;
        asIterable(): $Iterable<$Component>;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkPurple(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickCopy(string: string): $MutableComponent;
        /**
         * @deprecated
         * Creates a copy of this component, losing any style or siblings.
         */
        rawCopy(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkGreen(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenUrl(string: string): $MutableComponent;
        /**
         * @deprecated
         */
        component(): $Component;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        strikethrough(): $MutableComponent;
        strikethrough(value: boolean): $MutableComponent;
        /**
         * @deprecated
         * Creates a copy of this component, losing any style or siblings.
         */
        rawComponent(): $MutableComponent;
        obfuscated(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        obfuscated(): $MutableComponent;
        hasStyle(): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        noColor(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkAqua(): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        insertion(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickOpenFile(string: string): $MutableComponent;
        hasSiblings(): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        lightPurple(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkGray(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkRed(): $MutableComponent;
        isEmpty(): boolean;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        underlined(): $MutableComponent;
        underlined(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        darkBlue(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        self(): $MutableComponent;
        getCodec(): $Codec<never>;
        italic(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        italic(): $MutableComponent;
        click(s: $ClickEvent_): $MutableComponent;
        color(c: $KubeColor_): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        gold(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        blue(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        black(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        green(): $MutableComponent;
        bold(value: boolean): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        bold(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        gray(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        aqua(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        red(): $MutableComponent;
        /**
         * Add the given component to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        hover(sibling: $Component_): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        white(): $MutableComponent;
        /**
         * Creates a copy of this component, losing any style or siblings.
         */
        yellow(): $MutableComponent;
        font(s: $ResourceLocation_): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickRunCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickSuggestCommand(string: string): $MutableComponent;
        /**
         * Add the given text to this component's siblings.
         * 
         * Note: If this component turns the text bold, that will apply to all the siblings until a later sibling turns the text something else.
         */
        clickChangePage(string: string): $MutableComponent;
        toJson(): $JsonElement;
        toNBT(): $Tag;
        get contents(): $ComponentContents;
        get visualOrderText(): $FormattedCharSequence;
        get siblings(): $List<$Component>;
        get codec(): $Codec<never>;
    }
    /**
     * Values that may be interpreted as {@link $MutableComponent}.
     */
    export type $MutableComponent_ = string | { text?: string, translate?: SpecialTypes.TranslationKey, with?: any[], color?: $KubeColor_, bold?: boolean, italic?: boolean, underlined?: boolean, strikethrough?: boolean, obfuscated?: boolean, insertion?: string, font?: string, click?: $ClickEvent_, hover?: $MutableComponent_, extra?: $MutableComponent_[],  } | $MutableComponent_[];
    export class $ChatType$Bound extends $Record {
        name(): $Component;
        targetName(): ($Component) | undefined;
        decorate(content: $Component_): $Component;
        withTargetName(targetName: $Component_): $ChatType$Bound;
        decorateNarration(content: $Component_): $Component;
        chatType(): $Holder<$ChatType>;
        static STREAM_CODEC: $StreamCodec<$RegistryFriendlyByteBuf, $ChatType$Bound>;
        constructor(arg0: $Holder_<$ChatType>, arg1: $Component_, arg2: ($Component_) | undefined);
    }
    /**
     * Values that may be interpreted as {@link $ChatType$Bound}.
     */
    export type $ChatType$Bound_ = { chatType?: $Holder_<$ChatType>, name?: $Component_, targetName?: ($Component_) | undefined,  } | [chatType?: $Holder_<$ChatType>, name?: $Component_, targetName?: ($Component_) | undefined, ];
}
