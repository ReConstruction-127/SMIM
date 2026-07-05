import { $CommandSourceStack } from "@package/net/minecraft/commands";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $MessageSignature, $MessageSignature_, $SignableCommand_ } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Enum, $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $Vec3 } from "@package/net/minecraft/world/phys";
export * as selector from "@package/net/minecraft/commands/arguments/selector";

declare module "@package/net/minecraft/commands/arguments" {
    export class $ArgumentSignatures extends $Record {
        write(buffer: $FriendlyByteBuf): void;
        entries(): $List<$ArgumentSignatures$Entry>;
        static signCommand(command: $SignableCommand_<never>, signer: $ArgumentSignatures$Signer_): $ArgumentSignatures;
        static EMPTY: $ArgumentSignatures;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: $List_<$ArgumentSignatures$Entry_>);
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures}.
     */
    export type $ArgumentSignatures_ = { entries?: $List_<$ArgumentSignatures$Entry_>,  } | [entries?: $List_<$ArgumentSignatures$Entry_>, ];
    export class $EntityAnchorArgument$Anchor extends $Enum<$EntityAnchorArgument$Anchor> {
        static values(): $EntityAnchorArgument$Anchor[];
        static valueOf(name: string): $EntityAnchorArgument$Anchor;
        /**
         * Gets the coordinate based on the given command source's position. If the source is not an entity, no offsetting occurs.
         */
        apply(source: $CommandSourceStack): $Vec3;
        /**
         * Gets the coordinate based on the given entity's position.
         */
        apply(entity: $Entity): $Vec3;
        static getByName(name: string): $EntityAnchorArgument$Anchor;
        static EYES: $EntityAnchorArgument$Anchor;
        static FEET: $EntityAnchorArgument$Anchor;
    }
    /**
     * Values that may be interpreted as {@link $EntityAnchorArgument$Anchor}.
     */
    export type $EntityAnchorArgument$Anchor_ = "feet" | "eyes";
    export class $ArgumentSignatures$Entry extends $Record {
        signature(): $MessageSignature;
        name(): string;
        write(buffer: $FriendlyByteBuf): void;
        constructor(buffer: $FriendlyByteBuf);
        constructor(arg0: string, arg1: $MessageSignature_);
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Entry}.
     */
    export type $ArgumentSignatures$Entry_ = { signature?: $MessageSignature_, name?: string,  } | [signature?: $MessageSignature_, name?: string, ];
    export class $ArgumentSignatures$Signer {
    }
    export interface $ArgumentSignatures$Signer {
        sign(argumentText: string): $MessageSignature;
    }
    /**
     * Values that may be interpreted as {@link $ArgumentSignatures$Signer}.
     */
    export type $ArgumentSignatures$Signer_ = ((arg0: string) => $MessageSignature_);
}
