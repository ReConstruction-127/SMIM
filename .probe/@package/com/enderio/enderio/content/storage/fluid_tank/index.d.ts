import { $IntFunction } from "@package/java/util/function";
import { $Codec } from "@package/com/mojang/serialization";
import { $Enum } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $StringRepresentable } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/com/enderio/enderio/content/storage/fluid_tank" {
    export class $TankRecipe$Mode extends $Enum<$TankRecipe$Mode> implements $StringRepresentable {
        static values(): $TankRecipe$Mode[];
        static valueOf(arg0: string): $TankRecipe$Mode;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static FILL: $TankRecipe$Mode;
        static CODEC: $Codec<$TankRecipe$Mode>;
        static BY_ID: $IntFunction<$TankRecipe$Mode>;
        static EMPTY: $TankRecipe$Mode;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $TankRecipe$Mode>;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $TankRecipe$Mode}.
     */
    export type $TankRecipe$Mode_ = "fill" | "empty";
}
