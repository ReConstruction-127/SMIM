import { $Consumer_, $Consumer, $UnaryOperator_, $Function_, $UnaryOperator } from "@package/java/util/function";
import { $Stream } from "@package/java/util/stream";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $PackLocationInfo, $PackLocationInfo_, $PackSelectionConfig_, $PackResources, $PackSelectionConfig, $PackType_ } from "@package/net/minecraft/server/packs";
import { $FeatureFlagSet } from "@package/net/minecraft/world/flag";
import { $Enum, $Record } from "@package/java/lang";
import { $ByteBuf } from "@package/io/netty/buffer";
import { $List, $Set, $Collection_, $List_, $Collection } from "@package/java/util";
import { $PackMetadataSection_ } from "@package/net/minecraft/server/packs/metadata/pack";
import { $InclusiveRange, $InclusiveRange_ } from "@package/net/minecraft/util";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/net/minecraft/server/packs/repository" {
    export class $Pack$Position extends $Enum<$Pack$Position> {
        static values(): $Pack$Position[];
        insert<T>(list: $List_<T>, element: T, packFactory: $Function_<T, $PackSelectionConfig>, flipPosition: boolean): number;
        static valueOf(arg0: string): $Pack$Position;
        opposite(): $Pack$Position;
        static TOP: $Pack$Position;
        static BOTTOM: $Pack$Position;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Position}.
     */
    export type $Pack$Position_ = "top" | "bottom";
    export class $KnownPack extends $Record {
        version(): string;
        id(): string;
        namespace(): string;
        static vanilla(name: string): $KnownPack;
        isVanilla(): boolean;
        static VANILLA_NAMESPACE: string;
        static STREAM_CODEC: $StreamCodec<$ByteBuf, $KnownPack>;
        constructor(arg0: string, arg1: string, arg2: string);
    }
    /**
     * Values that may be interpreted as {@link $KnownPack}.
     */
    export type $KnownPack_ = { namespace?: string, id?: string, version?: string,  } | [namespace?: string, id?: string, version?: string, ];
    export class $PackSource {
        static create(decorator: $UnaryOperator_<$Component>, shouldAddAutomatically: boolean): $PackSource;
        static BUILT_IN: $PackSource;
        static SERVER: $PackSource;
        static FEATURE: $PackSource;
        static NO_DECORATION: $UnaryOperator<$Component>;
        static WORLD: $PackSource;
        static DEFAULT: $PackSource;
    }
    export interface $PackSource {
        decorate(name: $Component_): $Component;
        shouldAddAutomatically(): boolean;
    }
    export class $Pack$ResourcesSupplier {
    }
    export interface $Pack$ResourcesSupplier {
        openFull(location: $PackLocationInfo_, metadata: $Pack$Metadata_): $PackResources;
        openPrimary(location: $PackLocationInfo_): $PackResources;
    }
    export class $PackRepository {
        reload(): void;
        isAvailable(id: string): boolean;
        openAllSelected(): $List<$PackResources>;
        setSelected(ids: $Collection_<string>): void;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedPacks(): $Collection<$Pack>;
        static displayPackList(packs: $Collection_<$Pack>): string;
        addPack(id: string): boolean;
        getPack(id: string): $Pack;
        removePack(id: string): boolean;
        addPackFinder(arg0: $RepositorySource_): void;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailableIds(): $Collection<string>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getAvailablePacks(): $Collection<$Pack>;
        rebuildSelected(ids: $Collection_<string>): $List<$Pack>;
        /**
         * Gets all known packs, including those that are not enabled.
         */
        getSelectedIds(): $Collection<string>;
        getRequestedFeatureFlags(): $FeatureFlagSet;
        sources: $Set<$RepositorySource>;
        constructor(...sources: $RepositorySource_[]);
        set selected(value: $Collection_<string>);
        get selectedPacks(): $Collection<$Pack>;
        get availableIds(): $Collection<string>;
        get availablePacks(): $Collection<$Pack>;
        get selectedIds(): $Collection<string>;
        get requestedFeatureFlags(): $FeatureFlagSet;
    }
    export class $Pack$Metadata extends $Record {
        isHidden(): boolean;
        description(): $Component;
        compatibility(): $PackCompatibility;
        overlays(): $List<string>;
        requestedFeatures(): $FeatureFlagSet;
        /**
         * @deprecated
         */
        constructor(arg0: $Component_, arg1: $PackCompatibility_, arg2: $FeatureFlagSet, arg3: $List_<string>);
        constructor(description: $Component_, compatibility: $PackCompatibility_, requestedFeatures: $FeatureFlagSet, overlays: $List_<string>, isHidden: boolean);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Pack$Metadata}.
     */
    export type $Pack$Metadata_ = { description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, isHidden?: boolean, requestedFeatures?: $FeatureFlagSet,  } | [description?: $Component_, overlays?: $List_<string>, compatibility?: $PackCompatibility_, isHidden?: boolean, requestedFeatures?: $FeatureFlagSet, ];
    export class $PackCompatibility extends $Enum<$PackCompatibility> {
        getDescription(): $Component;
        static values(): $PackCompatibility[];
        static valueOf(arg0: string): $PackCompatibility;
        isCompatible(): boolean;
        static forVersion(range: $InclusiveRange_<number>, version: number): $PackCompatibility;
        getConfirmation(): $Component;
        static TOO_OLD: $PackCompatibility;
        static COMPATIBLE: $PackCompatibility;
        static TOO_NEW: $PackCompatibility;
        get description(): $Component;
        get compatible(): boolean;
        get confirmation(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $PackCompatibility}.
     */
    export type $PackCompatibility_ = "too_old" | "too_new" | "compatible";
    export class $RepositorySource {
    }
    export interface $RepositorySource {
        loadPacks(onLoad: $Consumer_<$Pack>): void;
    }
    /**
     * Values that may be interpreted as {@link $RepositorySource}.
     */
    export type $RepositorySource_ = ((arg0: $Consumer<$Pack>) => void);
    export class $Pack {
        getDescription(): $Component;
        isHidden(): boolean;
        location(): $PackLocationInfo;
        getId(): string;
        open(): $PackResources;
        getChildren(): $List<$Pack>;
        getTitle(): $Component;
        isRequired(): boolean;
        hidden(): $Pack;
        static readMetaAndCreate(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, packType: $PackType_, selectionConfig: $PackSelectionConfig_): $Pack;
        static readPackMetadata(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, version: number): $Pack$Metadata;
        getDefaultPosition(): $Pack$Position;
        selectionConfig(): $PackSelectionConfig;
        streamSelfAndChildren(): $Stream<$Pack>;
        getRequestedFeatures(): $FeatureFlagSet;
        getCompatibility(): $PackCompatibility;
        getPackSource(): $PackSource;
        isFixedPosition(): boolean;
        static getDeclaredPackVersions(id: string, metadata: $PackMetadataSection_): $InclusiveRange<number>;
        getChatLink(green: boolean): $Component;
        withChildren(arg0: $List_<$Pack>): $Pack;
        constructor(location: $PackLocationInfo_, resources: $Pack$ResourcesSupplier, metadata: $Pack$Metadata_, selectionConfig: $PackSelectionConfig_);
        get description(): $Component;
        get id(): string;
        get children(): $List<$Pack>;
        get title(): $Component;
        get required(): boolean;
        get defaultPosition(): $Pack$Position;
        get requestedFeatures(): $FeatureFlagSet;
        get compatibility(): $PackCompatibility;
        get packSource(): $PackSource;
        get fixedPosition(): boolean;
    }
}
