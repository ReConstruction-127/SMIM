import { $IntFunction } from "@package/java/util/function";
import { $MapColor } from "@package/net/minecraft/world/level/material";
import { $TextColor } from "@package/net/minecraft/network/chat";
import { $Enum } from "@package/java/lang";
import { $SupportsColorMap } from "@package/mekanism/api";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/mekanism/api/tier" {
    export class $BaseTier extends $Enum<$BaseTier> implements $StringRepresentable, $SupportsColorMap {
        static values(): $BaseTier[];
        static valueOf(arg0: string): $BaseTier;
        getSimpleName(): string;
        getColor(): $TextColor;
        static getTier(arg0: number): $BaseTier;
        getSerializedName(): string;
        getMapColor(): $MapColor;
        setColorFromAtlas(arg0: number[]): void;
        getLowerName(): string;
        getPackedColor(): number;
        getRgbCode(): number[];
        getRemappedEnumConstantName(): string;
        getColor(arg0: number): number;
        getPackedColor(arg0: number): number;
        getRgbCodeFloat(): number[];
        static CREATIVE: $BaseTier;
        static BY_ID: $IntFunction<$BaseTier>;
        static ELITE: $BaseTier;
        static ULTIMATE: $BaseTier;
        static BASIC: $BaseTier;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $BaseTier>;
        static ADVANCED: $BaseTier;
        get simpleName(): string;
        get serializedName(): string;
        get mapColor(): $MapColor;
        set colorFromAtlas(value: number[]);
        get lowerName(): string;
        get rgbCode(): number[];
        get remappedEnumConstantName(): string;
        get rgbCodeFloat(): number[];
    }
    /**
     * Values that may be interpreted as {@link $BaseTier}.
     */
    export type $BaseTier_ = "basic" | "advanced" | "elite" | "ultimate" | "creative";
    export class $IAlloyTier {
    }
    export interface $IAlloyTier {
        getBaseTierLevel(): number;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $IAlloyTier}.
     */
    export type $IAlloyTier_ = (() => number);
    export class $ITier {
    }
    export interface $ITier {
        getBaseTier(): $BaseTier;
        getBaseTierLevel(): number;
        get baseTier(): $BaseTier;
        get baseTierLevel(): number;
    }
    /**
     * Values that may be interpreted as {@link $ITier}.
     */
    export type $ITier_ = (() => $BaseTier_);
}
