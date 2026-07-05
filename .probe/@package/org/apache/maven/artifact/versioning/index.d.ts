import { $List_, $List } from "@package/java/util";
import { $Comparable } from "@package/java/lang";
import { $Artifact } from "@package/org/apache/maven/artifact";

declare module "@package/org/apache/maven/artifact/versioning" {
    export class $ArtifactVersion {
    }
    export interface $ArtifactVersion extends $Comparable<$ArtifactVersion> {
        getMajorVersion(): number;
        getMinorVersion(): number;
        getBuildNumber(): number;
        parseVersion(arg0: string): void;
        getQualifier(): string;
        getIncrementalVersion(): number;
        get majorVersion(): number;
        get minorVersion(): number;
        get buildNumber(): number;
        get qualifier(): string;
        get incrementalVersion(): number;
    }
    export class $VersionRange {
        restrict(arg0: $VersionRange): $VersionRange;
        /**
         * @deprecated
         */
        cloneOf(): $VersionRange;
        getRestrictions(): $List<$Restriction>;
        matchVersion(arg0: $List_<$ArtifactVersion>): $ArtifactVersion;
        static createFromVersion(arg0: string): $VersionRange;
        getSelectedVersion(arg0: $Artifact): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        hasRestrictions(): boolean;
        static createFromVersionSpec(arg0: string): $VersionRange;
        isSelectedVersionKnown(arg0: $Artifact): boolean;
        getRecommendedVersion(): $ArtifactVersion;
        get restrictions(): $List<$Restriction>;
        get recommendedVersion(): $ArtifactVersion;
    }
    export class $Restriction {
        getLowerBound(): $ArtifactVersion;
        getUpperBound(): $ArtifactVersion;
        containsVersion(arg0: $ArtifactVersion): boolean;
        isLowerBoundInclusive(): boolean;
        isUpperBoundInclusive(): boolean;
        static EVERYTHING: $Restriction;
        constructor(arg0: $ArtifactVersion, arg1: boolean, arg2: $ArtifactVersion, arg3: boolean);
        get lowerBound(): $ArtifactVersion;
        get upperBound(): $ArtifactVersion;
        get lowerBoundInclusive(): boolean;
        get upperBoundInclusive(): boolean;
    }
}
