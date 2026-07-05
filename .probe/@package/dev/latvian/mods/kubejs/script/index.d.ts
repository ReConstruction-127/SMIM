import { $HTTPResponse } from "@package/dev/latvian/apps/tinyserver/http/response";
import { $JsonObject_, $JsonObject, $JsonElement_, $JsonElement } from "@package/com/google/gson";
import { $Event } from "@package/net/neoforged/bus/api";
import { $Logger } from "@package/org/slf4j";
import { $WSHandler } from "@package/dev/latvian/apps/tinyserver/ws";
import { $Component } from "@package/net/minecraft/network/chat";
import { $Pattern } from "@package/java/util/regex";
import { $List, $Collection, $Map, $Set } from "@package/java/util";
import { $NativeEventWrapper$Listeners, $NativeEventWrapper$Listeners$Key } from "@package/dev/latvian/mods/kubejs/plugin/builtin/wrapper";
import { $WeakReference } from "@package/java/lang/ref";
import { $Predicate, $Predicate_, $Supplier } from "@package/java/util/function";
import { $Path, $Path_ } from "@package/java/nio/file";
import { $Lazy, $LogType, $RegistryAccessContainer, $LogType_ } from "@package/dev/latvian/mods/kubejs/util";
import { $FriendlyByteBuf } from "@package/net/minecraft/network";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $ClassFilter } from "@package/dev/latvian/mods/kubejs/plugin";
import { $Thread, $Throwable, $Enum, $Record, $Class, $Runnable_, $Comparable, $Object, $Runnable } from "@package/java/lang";
import { $KJSHTTPRequest, $KJSWSSession } from "@package/dev/latvian/mods/kubejs/web";
import { $Context, $ContextFactory } from "@package/dev/latvian/mods/rhino";
import { $StreamCodec } from "@package/net/minecraft/network/codec";
export * as data from "@package/dev/latvian/mods/kubejs/script/data";

declare module "@package/dev/latvian/mods/kubejs/script" {
    export class $SourceLine extends $Record {
        static of(): $SourceLine;
        static of(source: string, line: number): $SourceLine;
        line(): number;
        source(): string;
        static write(buf: $FriendlyByteBuf, sourceLine: $SourceLine_): void;
        static read(buf: $FriendlyByteBuf): $SourceLine;
        isUnknown(): boolean;
        static fromJson(json: $JsonObject_): $SourceLine;
        toJson(): $JsonObject;
        static UNKNOWN: $SourceLine;
        constructor(source: string, line: number);
        get unknown(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $SourceLine}.
     */
    export type $SourceLine_ = { line?: number, source?: string,  } | [line?: number, source?: string, ];
    export class $ScriptManager {
        unload(): void;
        reload(): void;
        loadPackFromDirectory(path: $Path_, name: string, exampleFile: boolean): void;
        loadAdditional(): void;
        getRegistries(): $RegistryAccessContainer;
        loadFromDirectory(): void;
        isClassAllowed(name: string): boolean;
        collectScripts(pack: $ScriptPack, dir: $Path_, path: string): void;
        scriptType: $ScriptType;
        canListenEvents: boolean;
        packs: $Map<string, $ScriptPack>;
        contextFactory: $KubeJSContextFactory;
        constructor(t: $ScriptType_);
        get registries(): $RegistryAccessContainer;
    }
    export class $ScriptPackInfo {
        displayName: $Component;
        namespace: string;
        pathStart: string;
        scripts: $List<$ScriptFileInfo>;
        constructor(n: string, p: string);
    }
    export class $KubeJSFileWatcherThread extends $Thread {
        reload: $Runnable;
        scriptType: $ScriptType;
        static MIN_PRIORITY: number;
        files: $ScriptFile[];
        static MAX_PRIORITY: number;
        static NORM_PRIORITY: number;
        constructor(scriptType: $ScriptType_, files: $ScriptFile[], reload: $Runnable_);
    }
    export class $WithScriptContext {
    }
    export interface $WithScriptContext {
        cx(): $Context;
    }
    /**
     * Values that may be interpreted as {@link $WithScriptContext}.
     */
    export type $WithScriptContext_ = (() => $Context);
    export class $ConsoleLine implements $Supplier<$JsonElement> {
        get(): $JsonElement;
        getText(): string;
        toJson(): $JsonObject;
        withSourceLine(sourceLine: $SourceLine_): $ConsoleLine;
        withSourceLine(source: string, line: number): $ConsoleLine;
        customData(key: string, data: $JsonElement_, override: boolean): $ConsoleLine;
        withExternalFile(path: $Path_): $ConsoleLine;
        console: $ConsoleJS;
        static EMPTY_ARRAY: $ConsoleLine[];
        sourceLines: $Collection<$SourceLine>;
        externalFile: $Path;
        stackTrace: $List<string>;
        message: string;
        type: $LogType;
        static STREAM_CODEC: $StreamCodec<$FriendlyByteBuf, $ConsoleLine>;
        timestamp: number;
        group: string;
        constructor(console: $ConsoleJS, timestamp: number, message: string);
        get text(): string;
    }
    export class $PlatformWrapper$ModInfo {
        getName(): string;
        setName(n: string): void;
        getId(): string;
        getVersion(): string;
        getCustomName(): string;
        constructor(i: string);
        get id(): string;
        get version(): string;
        get customName(): string;
    }
    export class $ScriptFile implements $Comparable<$ScriptFile> {
        getProperty(s: string, def: string): string;
        compareTo(o: $ScriptFile): number;
        load(): void;
        getProperties(s: string): $List<string>;
        getPriority(): number;
        skipLoading(): string;
        lastModified: number;
        lines: string[];
        pack: $ScriptPack;
        info: $ScriptFileInfo;
        constructor(pack: $ScriptPack, info: $ScriptFileInfo);
        get priority(): number;
    }
    export class $PlatformWrapper {
        /**
         * @deprecated
         */
        static getName(): string;
        static isLoaded(modId: string): boolean;
        static getInfo(modID: string): $PlatformWrapper$ModInfo;
        static getMods(): $Map<string, $PlatformWrapper$ModInfo>;
        static getList(): $Set<string>;
        static getMinecraftVersion(): number;
        static isDevelopmentEnvironment(): boolean;
        static getModVersion(): string;
        /**
         * @deprecated
         */
        static isForge(): boolean;
        /**
         * @deprecated
         */
        static isFabric(): boolean;
        static isGeneratingData(): boolean;
        static breakpoint(...args: $Object[]): void;
        static setModName(modId: string, name: string): void;
        static isClientEnvironment(): boolean;
        static getMinecraftVersionString(): string;
        static getCurrentThreadName(): string;
        static getPackMode(): string;
        static getMcVersion(): string;
        constructor();
        static get name(): string;
        static get mods(): $Map<string, $PlatformWrapper$ModInfo>;
        static get list(): $Set<string>;
        static get minecraftVersion(): number;
        static get developmentEnvironment(): boolean;
        static get modVersion(): string;
        static get forge(): boolean;
        static get fabric(): boolean;
        static get generatingData(): boolean;
        static get clientEnvironment(): boolean;
        static get minecraftVersionString(): string;
        static get currentThreadName(): string;
        static get packMode(): string;
        static get mcVersion(): string;
    }
    export class $ScriptPack {
        manager: $ScriptManager;
        scripts: $List<$ScriptFile>;
        info: $ScriptPackInfo;
        constructor(m: $ScriptManager, i: $ScriptPackInfo);
    }
    export class $ScriptType extends $Enum<$ScriptType> implements $ScriptTypePredicate, $ScriptTypeHolder {
        static values(): $ScriptType[];
        test(type: $ScriptType_): boolean;
        static valueOf(name: string): $ScriptType;
        negate(): $ScriptTypePredicate;
        isClient(): boolean;
        getLogFile(): $Path;
        isStartup(): boolean;
        isServer(): boolean;
        kjs$getScriptType(): $ScriptType;
        getValidTypes(): $List<$ScriptType>;
        or(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        and(arg0: $Predicate_<$ScriptType>): $Predicate<$ScriptType>;
        console: $ConsoleJS;
        path: $Path;
        nativeEventListeners: $Map<$NativeEventWrapper$Listeners$Key, $NativeEventWrapper$Listeners>;
        static SERVER: $ScriptType;
        fileWatcherThread: $KubeJSFileWatcherThread;
        static VALUES: $ScriptType[];
        static STARTUP: $ScriptType;
        classFilter: $Lazy<$ClassFilter>;
        static CLIENT: $ScriptType;
        nameStrip: string;
        get client(): boolean;
        get logFile(): $Path;
        get startup(): boolean;
        get server(): boolean;
        get validTypes(): $List<$ScriptType>;
    }
    /**
     * Values that may be interpreted as {@link $ScriptType}.
     */
    export type $ScriptType_ = "startup" | "server" | "client";
    export class $ScriptTypePredicate {
        static ALL: $ScriptTypePredicate;
        static STARTUP_OR_CLIENT: $ScriptTypePredicate;
        static COMMON: $ScriptTypePredicate;
        static STARTUP_OR_SERVER: $ScriptTypePredicate;
    }
    export interface $ScriptTypePredicate extends $Predicate<$ScriptType> {
        test(type: $ScriptType_): boolean;
        getValidTypes(): $List<$ScriptType>;
        get validTypes(): $List<$ScriptType>;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypePredicate}.
     */
    export type $ScriptTypePredicate_ = ((type: $ScriptType) => boolean);
    export class $KubeJSContextFactory extends $ContextFactory {
        manager: $ScriptManager;
        constructor(manager: $ScriptManager);
    }
    export class $ConsoleJS {
        writeToFile(type: $LogType_, line: string): void;
        writeToFile(type: $LogType_, timestamp: number, line: string): void;
        group(): void;
        log(...message: $Object[]): void;
        flush(sync: boolean): void;
        info(message: $Object): $ConsoleLine;
        getLogger(): $Logger;
        trace(): void;
        debug(message: $Object): $ConsoleLine;
        error(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        error(message: string, throwable: $Throwable): $ConsoleLine;
        error(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        error(message: $Object): $ConsoleLine;
        warn(message: string, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        warn(message: $Object): $ConsoleLine;
        warn(message: string, error: $Throwable): $ConsoleLine;
        warn(message: string, sourceLine: $SourceLine_, error: $Throwable, exitPattern: $Pattern): $ConsoleLine;
        groupEnd(): void;
        handleError(line: $ConsoleLine, error: $Throwable, exitPattern: $Pattern, print: boolean): void;
        printObject(o: $Object, tree: boolean): void;
        printObject(o: $Object): void;
        getWarningsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        stopCapturingErrors(): void;
        static getCurrent(): $ConsoleJS;
        resetFile(): void;
        printClass(className: string): void;
        printClass(className: string, tree: boolean): void;
        setMuted(m: boolean): void;
        getMuted(): boolean;
        warnf(message: string, ...args: $Object[]): $ConsoleLine;
        errorf(message: string, ...args: $Object[]): $ConsoleLine;
        debugf(message: string, ...args: $Object[]): $ConsoleLine;
        infof(message: string, ...args: $Object[]): $ConsoleLine;
        startCapturingErrors(): void;
        setDebugEnabled(m: boolean): void;
        errorsComponent(command: string): $Component;
        getWriteToFile(): boolean;
        setWriteToFile(m: boolean): void;
        getScriptLine(): number;
        shouldPrintDebug(): boolean;
        getDebugEnabled(): boolean;
        static methodPattern(c: $Class<never>, method: string): $Pattern;
        getErrorsResponse(ctx: $KJSHTTPRequest): $HTTPResponse;
        static SERVER: $ConsoleJS;
        scriptType: $ScriptType;
        static STARTUP: $ConsoleJS;
        wsBroadcaster: $WSHandler<$KJSHTTPRequest, $KJSWSSession>;
        static CLIENT: $ConsoleJS;
        contextFactory: $WeakReference<$ContextFactory>;
        constructor(m: $ScriptType_, log: $Logger);
        get logger(): $Logger;
        static get current(): $ConsoleJS;
        get scriptLine(): number;
    }
    export class $ScriptFileInfo {
        path: $Path;
        file: string;
        location: string;
        id: $ResourceLocation;
        pack: $ScriptPackInfo;
        locationPath: string;
        constructor(p: $ScriptPackInfo, ph: $Path_, f: string);
    }
    export class $ScriptTypeHolder {
    }
    export interface $ScriptTypeHolder {
        kjs$getScriptType(): $ScriptType;
    }
    /**
     * Values that may be interpreted as {@link $ScriptTypeHolder}.
     */
    export type $ScriptTypeHolder_ = (() => $ScriptType_);
    export class $ScriptsLoadedEvent extends $Event {
        constructor();
    }
}
