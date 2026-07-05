import { $RepositorySource } from "@package/net/minecraft/server/packs/repository";
import { $GameConfig$UserData } from "@package/net/minecraft/client/main";
import { $Path_ } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $Connection } from "@package/net/minecraft/network";
import { $CompletableFuture } from "@package/java/util/concurrent";
import { $Minecraft } from "@package/net/minecraft/client";
import { $Enum, $AutoCloseable } from "@package/java/lang";
import { $UUID_ } from "@package/java/util";

declare module "@package/net/minecraft/client/resources/server" {
    export class $DownloadedPackSource implements $AutoCloseable {
        popAll(): void;
        close(): void;
        onReloadSuccess(): void;
        onRecoveryFailure(): void;
        popPack(uuid: $UUID_): void;
        pushPack(uuid: $UUID_, url: $URL, hash: string | null): void;
        createRepositorySource(): $RepositorySource;
        cleanupAfterDisconnect(): void;
        pushLocalPack(uuid: $UUID_, path: $Path_): void;
        allowServerPacks(): void;
        rejectServerPacks(): void;
        onRecovery(): void;
        configureForLocalWorld(): void;
        configureForServerControl(connection: $Connection, packPromptStatus: $ServerPackManager$PackPromptStatus_): void;
        waitForPackFeedback(uuid: $UUID_): $CompletableFuture<void>;
        constructor(minecraft: $Minecraft, directory: $Path_, userData: $GameConfig$UserData);
    }
    export class $ServerPackManager$PackPromptStatus extends $Enum<$ServerPackManager$PackPromptStatus> {
        static values(): $ServerPackManager$PackPromptStatus[];
        static valueOf(arg0: string): $ServerPackManager$PackPromptStatus;
        static ALLOWED: $ServerPackManager$PackPromptStatus;
        static PENDING: $ServerPackManager$PackPromptStatus;
        static DECLINED: $ServerPackManager$PackPromptStatus;
    }
    /**
     * Values that may be interpreted as {@link $ServerPackManager$PackPromptStatus}.
     */
    export type $ServerPackManager$PackPromptStatus_ = "pending" | "allowed" | "declined";
}
