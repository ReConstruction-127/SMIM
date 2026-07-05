import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum } from "@package/java/lang";
import { $StringRepresentable } from "@package/net/minecraft/util";

declare module "@package/net/minecraft/client/quickplay" {
    export class $QuickPlayLog$Type extends $Enum<$QuickPlayLog$Type> implements $StringRepresentable {
        static values(): $QuickPlayLog$Type[];
        static valueOf(arg0: string): $QuickPlayLog$Type;
        getSerializedName(): string;
        getRemappedEnumConstantName(): string;
        static MULTIPLAYER: $QuickPlayLog$Type;
        static SINGLEPLAYER: $QuickPlayLog$Type;
        static REALMS: $QuickPlayLog$Type;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $QuickPlayLog$Type}.
     */
    export type $QuickPlayLog$Type_ = "singleplayer" | "multiplayer" | "realms";
    export class $QuickPlayLog {
        log(minecraft: $Minecraft): void;
        static of(path: string | null): $QuickPlayLog;
        setWorldData(type: $QuickPlayLog$Type_, id: string, name: string): void;
    }
}
