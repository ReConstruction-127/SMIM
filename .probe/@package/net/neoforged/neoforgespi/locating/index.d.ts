import { $Supplier } from "@package/java/util/function";
import { $ModFileScanData, $IModFileInfo, $IModInfo } from "@package/net/neoforged/neoforgespi/language";
import { $Path } from "@package/java/nio/file";
import { $List, $Map } from "@package/java/util";
import { $SecureJar, $SecureJar$Status_ } from "@package/cpw/mods/jarhandling";
import { $Object, $Enum, $Record } from "@package/java/lang";

declare module "@package/net/neoforged/neoforgespi/locating" {
    export class $IModFile$Type extends $Enum<$IModFile$Type> {
        static values(): $IModFile$Type[];
        static valueOf(arg0: string): $IModFile$Type;
        static MOD: $IModFile$Type;
        static GAMELIBRARY: $IModFile$Type;
        static LIBRARY: $IModFile$Type;
    }
    /**
     * Values that may be interpreted as {@link $IModFile$Type}.
     */
    export type $IModFile$Type_ = "mod" | "library" | "gamelibrary";
    export class $ForgeFeature$Bound extends $Record {
        bound<T>(): T;
        featureName(): string;
        modInfo(): $IModInfo;
        featureBound(): string;
        constructor(featureName: string, featureBound: string, modInfo: $IModInfo);
    }
    /**
     * Values that may be interpreted as {@link $ForgeFeature$Bound}.
     */
    export type $ForgeFeature$Bound_ = { featureName?: string, modInfo?: $IModInfo, featureBound?: string,  } | [featureName?: string, modInfo?: $IModInfo, featureBound?: string, ];
    export class $ModFileInfoParser {
    }
    export interface $ModFileInfoParser {
        build(arg0: $IModFile): $IModFileInfo;
    }
    /**
     * Values that may be interpreted as {@link $ModFileInfoParser}.
     */
    export type $ModFileInfoParser_ = ((arg0: $IModFile) => $IModFileInfo);
    export class $IModFile {
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $IModFile$Type_, arg3: $ModFileDiscoveryAttributes_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_, arg2: $ModFileDiscoveryAttributes_): $IModFile;
        static create(arg0: $SecureJar, arg1: $ModFileInfoParser_): $IModFile;
    }
    export interface $IModFile {
        getFilePath(): $Path;
        findResource(...arg0: string[]): $Path;
        getType(): $IModFile$Type;
        getFileName(): string;
        getModInfos(): $List<$IModInfo>;
        getSecureJar(): $SecureJar;
        getSubstitutionMap(): $Supplier<$Map<string, $Object>>;
        getScanResult(): $ModFileScanData;
        setSecurityStatus(arg0: $SecureJar$Status_): void;
        getModFileInfo(): $IModFileInfo;
        getDiscoveryAttributes(): $ModFileDiscoveryAttributes;
        get filePath(): $Path;
        get type(): $IModFile$Type;
        get fileName(): string;
        get modInfos(): $List<$IModInfo>;
        get secureJar(): $SecureJar;
        get substitutionMap(): $Supplier<$Map<string, $Object>>;
        get scanResult(): $ModFileScanData;
        set securityStatus(value: $SecureJar$Status_);
        get modFileInfo(): $IModFileInfo;
        get discoveryAttributes(): $ModFileDiscoveryAttributes;
    }
    export class $ModFileDiscoveryAttributes extends $Record {
        parent(): $IModFile;
        merge(arg0: $ModFileDiscoveryAttributes_): $ModFileDiscoveryAttributes;
        reader(): $IModFileReader;
        withReader(arg0: $IModFileReader): $ModFileDiscoveryAttributes;
        withParent(arg0: $IModFile): $ModFileDiscoveryAttributes;
        locator(): $IModFileCandidateLocator;
        withDependencyLocator(arg0: $IDependencyLocator): $ModFileDiscoveryAttributes;
        dependencyLocator(): $IDependencyLocator;
        withLocator(arg0: $IModFileCandidateLocator): $ModFileDiscoveryAttributes;
        static DEFAULT: $ModFileDiscoveryAttributes;
        constructor(parent: $IModFile, reader: $IModFileReader, locator: $IModFileCandidateLocator, dependencyLocator: $IDependencyLocator);
    }
    /**
     * Values that may be interpreted as {@link $ModFileDiscoveryAttributes}.
     */
    export type $ModFileDiscoveryAttributes_ = { parent?: $IModFile, dependencyLocator?: $IDependencyLocator, reader?: $IModFileReader, locator?: $IModFileCandidateLocator,  } | [parent?: $IModFile, dependencyLocator?: $IDependencyLocator, reader?: $IModFileReader, locator?: $IModFileCandidateLocator, ];
}
