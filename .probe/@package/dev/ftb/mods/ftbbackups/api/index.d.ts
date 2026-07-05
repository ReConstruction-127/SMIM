import { $Codec } from "@package/com/mojang/serialization";
import { $Logger } from "@package/org/slf4j";
import { $Path_, $Path } from "@package/java/nio/file";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $List, $Map } from "@package/java/util";
import { $Comparable, $Record } from "@package/java/lang";
export * as event from "@package/dev/ftb/mods/ftbbackups/api/event";

declare module "@package/dev/ftb/mods/ftbbackups/api" {
    export class $IArchivalPlugin {
    }
    export interface $IArchivalPlugin {
        getId(): $ResourceLocation;
        getFileExtension(): string;
        createArchive(arg0: $IArchivalPlugin$ArchivalContext): number;
        restoreArchive(arg0: $IArchivalPlugin$RestorationContext): void;
        addFileExtension(arg0: string): string;
        get id(): $ResourceLocation;
        get fileExtension(): string;
    }
    export class $IArchivalPlugin$ArchivalContext {
    }
    export interface $IArchivalPlugin$ArchivalContext extends $IArchivalPlugin$Context {
        manifest(): $Map<$Path, string>;
        compressionLevel(): number;
    }
    export class $IArchivalPlugin$Context {
    }
    export interface $IArchivalPlugin$Context {
        logger(): $Logger;
        archivePath(): $Path;
        notifyProcessingFile(arg0: string): void;
    }
    export class $Backup extends $Record implements $Comparable<$Backup> {
        index(): number;
        size(): number;
        compareTo(arg0: $Backup_): number;
        time(): number;
        success(): boolean;
        worldName(): string;
        fileId(): string;
        fileCount(): number;
        archivalPlugin(): $ResourceLocation;
        deleteFiles(arg0: $Path_): boolean;
        static CODEC: $Codec<$Backup>;
        static LIST_CODEC: $Codec<$List<$Backup>>;
        constructor(time: number, archivalPlugin: $ResourceLocation_, fileId: string, worldName: string, index: number, success: boolean, size: number, fileCount: number);
    }
    /**
     * Values that may be interpreted as {@link $Backup}.
     */
    export type $Backup_ = { worldName?: string, time?: number, size?: number, archivalPlugin?: $ResourceLocation_, success?: boolean, index?: number, fileCount?: number, fileId?: string,  } | [worldName?: string, time?: number, size?: number, archivalPlugin?: $ResourceLocation_, success?: boolean, index?: number, fileCount?: number, fileId?: string, ];
    export class $IArchivalPlugin$RestorationContext {
    }
    export interface $IArchivalPlugin$RestorationContext extends $IArchivalPlugin$Context {
        destinationFolder(): $Path;
    }
}
