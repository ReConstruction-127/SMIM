import { $Level_, $Level, $LevelAccessor } from "@package/net/minecraft/world/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Codec } from "@package/com/mojang/serialization";
import { $DyeColor_, $DyeColor } from "@package/net/minecraft/world/item";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $Enum } from "@package/java/lang";
import { $List } from "@package/java/util";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/appeng/api/util" {
    export class $AECableType extends $Enum<$AECableType> {
        size(): $AECableSize;
        static values(): $AECableType[];
        static min(arg0: $AECableType_, arg1: $AECableType_): $AECableType;
        static max(arg0: $AECableType_, arg1: $AECableType_): $AECableType;
        static valueOf(arg0: string): $AECableType;
        isValid(): boolean;
        variant(): $AECableVariant;
        isDense(): boolean;
        isSmart(): boolean;
        static GLASS: $AECableType;
        static VALIDCABLES: $AECableType[];
        static COVERED: $AECableType;
        static NONE: $AECableType;
        static SMART: $AECableType;
        static DENSE_COVERED: $AECableType;
        static DENSE_SMART: $AECableType;
        get valid(): boolean;
        get dense(): boolean;
        get smart(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $AECableType}.
     */
    export type $AECableType_ = "none" | "glass" | "covered" | "smart" | "dense_covered" | "dense_smart";
    export class $DimensionalBlockPos {
        getLevel(): $Level;
        getPos(): $BlockPos;
        isInWorld(arg0: $LevelAccessor): boolean;
        constructor(arg0: $Level_, arg1: number, arg2: number, arg3: number);
        constructor(arg0: $Level_, arg1: $BlockPos_);
        constructor(arg0: $BlockEntity);
        constructor(arg0: $DimensionalBlockPos);
        get level(): $Level;
        get pos(): $BlockPos;
    }
    export class $AECableSize extends $Enum<$AECableSize> {
        static values(): $AECableSize[];
        static min(arg0: $AECableSize_, arg1: $AECableSize_): $AECableSize;
        static max(arg0: $AECableSize_, arg1: $AECableSize_): $AECableSize;
        static valueOf(arg0: string): $AECableSize;
        static DENSE: $AECableSize;
        static NONE: $AECableSize;
        static NORMAL: $AECableSize;
    }
    /**
     * Values that may be interpreted as {@link $AECableSize}.
     */
    export type $AECableSize_ = "none" | "normal" | "dense";
    export class $AEColor extends $Enum<$AEColor> implements $StringRepresentable {
        static values(): $AEColor[];
        static valueOf(arg0: string): $AEColor;
        getSerializedName(): string;
        static fromDye(arg0: $DyeColor_): $AEColor;
        getEnglishName(): string;
        getVariantByTintIndex(arg0: number): number;
        getRemappedEnumConstantName(): string;
        mediumVariant: number;
        englishName: string;
        static GRAY: $AEColor;
        translationKey: string;
        static BLUE: $AEColor;
        static TINTINDEX_BRIGHT: number;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $AEColor>;
        static VALID_COLORS: $List<$AEColor>;
        static PINK: $AEColor;
        whiteVariant: number;
        static BLACK: $AEColor;
        static TRANSPARENT: $AEColor;
        static BROWN: $AEColor;
        static ORANGE: $AEColor;
        static WHITE: $AEColor;
        static TINTINDEX_DARK: number;
        registryPrefix: string;
        static CODEC: $Codec<$AEColor>;
        contrastTextColor: number;
        static TINTINDEX_MEDIUM_BRIGHT: number;
        static PURPLE: $AEColor;
        static GREEN: $AEColor;
        static TINTINDEX_MEDIUM: number;
        static RED: $AEColor;
        dye: $DyeColor;
        static LIGHT_GRAY: $AEColor;
        static LIGHT_BLUE: $AEColor;
        static LIME: $AEColor;
        static MAGENTA: $AEColor;
        static YELLOW: $AEColor;
        static CYAN: $AEColor;
        blackVariant: number;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $AEColor}.
     */
    export type $AEColor_ = "white" | "light_gray" | "gray" | "black" | "lime" | "yellow" | "orange" | "brown" | "red" | "pink" | "magenta" | "purple" | "blue" | "light_blue" | "cyan" | "green" | "fluix";
    export class $AECableVariant extends $Enum<$AECableVariant> {
        static values(): $AECableVariant[];
        static min(arg0: $AECableVariant_, arg1: $AECableVariant_): $AECableVariant;
        static max(arg0: $AECableVariant_, arg1: $AECableVariant_): $AECableVariant;
        static valueOf(arg0: string): $AECableVariant;
        static GLASS: $AECableVariant;
        static COVERED: $AECableVariant;
        static NONE: $AECableVariant;
        static SMART: $AECableVariant;
    }
    /**
     * Values that may be interpreted as {@link $AECableVariant}.
     */
    export type $AECableVariant_ = "none" | "glass" | "covered" | "smart";
}
