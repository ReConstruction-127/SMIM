import { $Attributes } from "@package/java/util/jar";
import { $Path_, $Path } from "@package/java/nio/file";
import { $CodeSigner } from "@package/java/security";
import { $Enum } from "@package/java/lang";

declare module "@package/cpw/mods/jarhandling" {
    export class $SecureJar {
        static from(...arg0: $Path_[]): $SecureJar;
        static from(arg0: $JarContents): $SecureJar;
        static from(arg0: $JarContents, arg1: $JarMetadata): $SecureJar;
    }
    export interface $SecureJar {
        moduleDataProvider(): $SecureJar$ModuleDataProvider;
        verifyPath(arg0: $Path_): $SecureJar$Status;
        getManifestSigners(): $CodeSigner[];
        getFileStatus(arg0: string): $SecureJar$Status;
        hasSecurityData(): boolean;
        getPrimaryPath(): $Path;
        name(): string;
        close(): void;
        getPath(arg0: string, ...arg1: string[]): $Path;
        getTrustedManifestEntries(arg0: string): $Attributes;
        getRootPath(): $Path;
        get manifestSigners(): $CodeSigner[];
        get primaryPath(): $Path;
        get rootPath(): $Path;
    }
    export class $SecureJar$Status extends $Enum<$SecureJar$Status> {
        static values(): $SecureJar$Status[];
        static valueOf(arg0: string): $SecureJar$Status;
        static UNVERIFIED: $SecureJar$Status;
        static NONE: $SecureJar$Status;
        static INVALID: $SecureJar$Status;
        static VERIFIED: $SecureJar$Status;
    }
    /**
     * Values that may be interpreted as {@link $SecureJar$Status}.
     */
    export type $SecureJar$Status_ = "none" | "invalid" | "unverified" | "verified";
}
