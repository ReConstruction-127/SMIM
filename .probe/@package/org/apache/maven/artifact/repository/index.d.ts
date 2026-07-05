import { $Proxy } from "@package/org/apache/maven/repository";
import { $ArtifactRepositoryLayout } from "@package/org/apache/maven/artifact/repository/layout";
import { $List_, $List } from "@package/java/util";
import { $Artifact } from "@package/org/apache/maven/artifact";
import { $ArtifactMetadata } from "@package/org/apache/maven/artifact/metadata";

declare module "@package/org/apache/maven/artifact/repository" {
    export class $ArtifactRepository {
    }
    export interface $ArtifactRepository {
        getKey(): string;
        find(arg0: $Artifact): $Artifact;
        getId(): string;
        getProtocol(): string;
        getUrl(): string;
        setLayout(arg0: $ArtifactRepositoryLayout): void;
        getLayout(): $ArtifactRepositoryLayout;
        setId(arg0: string): void;
        getReleases(): $ArtifactRepositoryPolicy;
        getSnapshots(): $ArtifactRepositoryPolicy;
        getProxy(): $Proxy;
        setProxy(arg0: $Proxy): void;
        isBlocked(): boolean;
        setBlocked(arg0: boolean): void;
        setUrl(arg0: string): void;
        /**
         * @deprecated
         */
        isBlacklisted(): boolean;
        pathOfRemoteRepositoryMetadata(arg0: $ArtifactMetadata): string;
        pathOfLocalRepositoryMetadata(arg0: $ArtifactMetadata, arg1: $ArtifactRepository): string;
        findVersions(arg0: $Artifact): $List<string>;
        /**
         * @deprecated
         */
        setBlacklisted(arg0: boolean): void;
        /**
         * @deprecated
         */
        isUniqueVersion(): boolean;
        getAuthentication(): $Authentication;
        isProjectAware(): boolean;
        setAuthentication(arg0: $Authentication): void;
        getBasedir(): string;
        pathOf(arg0: $Artifact): string;
        getMirroredRepositories(): $List<$ArtifactRepository>;
        setMirroredRepositories(arg0: $List_<$ArtifactRepository>): void;
        setReleaseUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        setSnapshotUpdatePolicy(arg0: $ArtifactRepositoryPolicy): void;
        get key(): string;
        get protocol(): string;
        get releases(): $ArtifactRepositoryPolicy;
        get snapshots(): $ArtifactRepositoryPolicy;
        get uniqueVersion(): boolean;
        get projectAware(): boolean;
        get basedir(): string;
        set releaseUpdatePolicy(value: $ArtifactRepositoryPolicy);
        set snapshotUpdatePolicy(value: $ArtifactRepositoryPolicy);
    }
}
