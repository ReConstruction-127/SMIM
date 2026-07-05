import { $Serializable, $InputStream, $OutputStream, $Closeable } from "@package/java/io";
import { $Stream } from "@package/java/util/stream";
import { $Permission } from "@package/java/security";
import { $Enum, $Comparable, $Object, $Class } from "@package/java/lang";
import { $Enumeration, $List, $Map, $Set } from "@package/java/util";
import { $DatagramChannel, $SocketChannel, $ServerSocketChannel } from "@package/java/nio/channels";
export * as http from "@package/java/net/http";

declare module "@package/java/net" {
    export class $InetAddress implements $Serializable {
        getHostAddress(): string;
        getAddress(): number[];
        static getByName(arg0: string): $InetAddress;
        getHostName(): string;
        isLinkLocalAddress(): boolean;
        isMulticastAddress(): boolean;
        isAnyLocalAddress(): boolean;
        isLoopbackAddress(): boolean;
        isSiteLocalAddress(): boolean;
        isMCGlobal(): boolean;
        isMCNodeLocal(): boolean;
        isMCLinkLocal(): boolean;
        isMCSiteLocal(): boolean;
        isMCOrgLocal(): boolean;
        isReachable(arg0: $NetworkInterface, arg1: number, arg2: number): boolean;
        isReachable(arg0: number): boolean;
        static getAllByName(arg0: string): $InetAddress[];
        static getByAddress(arg0: number[]): $InetAddress;
        static getByAddress(arg0: string, arg1: number[]): $InetAddress;
        getCanonicalHostName(): string;
        static getLoopbackAddress(): $InetAddress;
        static getLocalHost(): $InetAddress;
        get hostAddress(): string;
        get address(): number[];
        get hostName(): string;
        get linkLocalAddress(): boolean;
        get multicastAddress(): boolean;
        get anyLocalAddress(): boolean;
        get siteLocalAddress(): boolean;
        get MCGlobal(): boolean;
        get MCNodeLocal(): boolean;
        get MCLinkLocal(): boolean;
        get MCSiteLocal(): boolean;
        get MCOrgLocal(): boolean;
        get canonicalHostName(): string;
        static get localHost(): $InetAddress;
    }
    export class $FileNameMap {
    }
    export interface $FileNameMap {
        getContentTypeFor(arg0: string): string;
    }
    /**
     * Values that may be interpreted as {@link $FileNameMap}.
     */
    export type $FileNameMap_ = ((arg0: string) => string);
    export class $ServerSocket implements $Closeable {
        supportedOptions(): $Set<$SocketOption<never>>;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $ServerSocket;
        getOption<T>(arg0: $SocketOption<T>): T;
        isClosed(): boolean;
        accept(): $Socket;
        close(): void;
        getChannel(): $ServerSocketChannel;
        bind(arg0: $SocketAddress, arg1: number): void;
        bind(arg0: $SocketAddress): void;
        setReuseAddress(arg0: boolean): void;
        setSoTimeout(arg0: number): void;
        getSoTimeout(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        setReceiveBufferSize(arg0: number): void;
        getReceiveBufferSize(): number;
        getLocalSocketAddress(): $SocketAddress;
        getLocalPort(): number;
        getReuseAddress(): boolean;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        /**
         * @deprecated
         */
        static setSocketFactory(arg0: $SocketImplFactory): void;
        constructor(arg0: number, arg1: number, arg2: $InetAddress);
        constructor();
        constructor(arg0: number);
        constructor(arg0: number, arg1: number);
        get closed(): boolean;
        get channel(): $ServerSocketChannel;
        get localSocketAddress(): $SocketAddress;
        get localPort(): number;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        static set socketFactory(value: $SocketImplFactory);
    }
    export class $ContentHandlerFactory {
    }
    export interface $ContentHandlerFactory {
        createContentHandler(arg0: string): $ContentHandler;
    }
    /**
     * Values that may be interpreted as {@link $ContentHandlerFactory}.
     */
    export type $ContentHandlerFactory_ = ((arg0: string) => $ContentHandler);
    export class $URLConnection {
        getContentLengthLong(): number;
        getHeaderFields(): $Map<string, $List<string>>;
        getHeaderField(arg0: number): string;
        getHeaderField(arg0: string): string;
        static guessContentTypeFromStream(arg0: $InputStream): string;
        static guessContentTypeFromName(arg0: string): string;
        addRequestProperty(arg0: string, arg1: string): void;
        getRequestProperty(arg0: string): string;
        getRequestProperties(): $Map<string, $List<string>>;
        getHeaderFieldKey(arg0: number): string;
        getContentType(): string;
        getDefaultUseCaches(): boolean;
        static getDefaultUseCaches(arg0: string): boolean;
        getHeaderFieldLong(arg0: string, arg1: number): number;
        getHeaderFieldDate(arg0: string, arg1: number): number;
        static getFileNameMap(): $FileNameMap;
        static setFileNameMap(arg0: $FileNameMap_): void;
        setConnectTimeout(arg0: number): void;
        getConnectTimeout(): number;
        setReadTimeout(arg0: number): void;
        getReadTimeout(): number;
        getContentEncoding(): string;
        getExpiration(): number;
        getHeaderFieldInt(arg0: string, arg1: number): number;
        setDoInput(arg0: boolean): void;
        getDoInput(): boolean;
        setDoOutput(arg0: boolean): void;
        getDoOutput(): boolean;
        setAllowUserInteraction(arg0: boolean): void;
        getAllowUserInteraction(): boolean;
        static setDefaultAllowUserInteraction(arg0: boolean): void;
        static getDefaultAllowUserInteraction(): boolean;
        getUseCaches(): boolean;
        setIfModifiedSince(arg0: number): void;
        getIfModifiedSince(): number;
        setDefaultUseCaches(arg0: boolean): void;
        static setDefaultUseCaches(arg0: string, arg1: boolean): void;
        /**
         * @deprecated
         */
        static setDefaultRequestProperty(arg0: string, arg1: string): void;
        /**
         * @deprecated
         */
        static getDefaultRequestProperty(arg0: string): string;
        static setContentHandlerFactory(arg0: $ContentHandlerFactory_): void;
        getOutputStream(): $OutputStream;
        connect(): void;
        getInputStream(): $InputStream;
        getContent(): $Object;
        getContent(arg0: $Class<never>[]): $Object;
        getPermission(): $Permission;
        getDate(): number;
        setUseCaches(arg0: boolean): void;
        getLastModified(): number;
        getContentLength(): number;
        getURL(): $URL;
        setRequestProperty(arg0: string, arg1: string): void;
        get contentLengthLong(): number;
        get headerFields(): $Map<string, $List<string>>;
        get requestProperties(): $Map<string, $List<string>>;
        get contentType(): string;
        get contentEncoding(): string;
        get expiration(): number;
        static set contentHandlerFactory(value: $ContentHandlerFactory_);
        get outputStream(): $OutputStream;
        get inputStream(): $InputStream;
        get permission(): $Permission;
        get date(): number;
        get lastModified(): number;
        get contentLength(): number;
        get URL(): $URL;
    }
    export class $NetworkInterface {
        getName(): string;
        isVirtual(): boolean;
        getParent(): $NetworkInterface;
        static getByName(arg0: string): $NetworkInterface;
        getIndex(): number;
        static networkInterfaces(): $Stream<$NetworkInterface>;
        inetAddresses(): $Stream<$InetAddress>;
        getInetAddresses(): $Enumeration<$InetAddress>;
        static getNetworkInterfaces(): $Enumeration<$NetworkInterface>;
        getInterfaceAddresses(): $List<$InterfaceAddress>;
        getSubInterfaces(): $Enumeration<$NetworkInterface>;
        subInterfaces(): $Stream<$NetworkInterface>;
        getDisplayName(): string;
        static getByIndex(arg0: number): $NetworkInterface;
        static getByInetAddress(arg0: $InetAddress): $NetworkInterface;
        isUp(): boolean;
        isLoopback(): boolean;
        isPointToPoint(): boolean;
        supportsMulticast(): boolean;
        getHardwareAddress(): number[];
        getMTU(): number;
        get name(): string;
        get virtual(): boolean;
        get parent(): $NetworkInterface;
        get index(): number;
        get interfaceAddresses(): $List<$InterfaceAddress>;
        get displayName(): string;
        get up(): boolean;
        get loopback(): boolean;
        get pointToPoint(): boolean;
        get hardwareAddress(): number[];
        get MTU(): number;
    }
    export class $URLStreamHandlerFactory {
    }
    export interface $URLStreamHandlerFactory {
        createURLStreamHandler(arg0: string): $URLStreamHandler;
    }
    /**
     * Values that may be interpreted as {@link $URLStreamHandlerFactory}.
     */
    export type $URLStreamHandlerFactory_ = ((arg0: string) => $URLStreamHandler);
    export class $ProtocolFamily {
    }
    export interface $ProtocolFamily {
        name(): string;
    }
    /**
     * Values that may be interpreted as {@link $ProtocolFamily}.
     */
    export type $ProtocolFamily_ = (() => string);
    export class $InterfaceAddress {
        getAddress(): $InetAddress;
        getBroadcast(): $InetAddress;
        getNetworkPrefixLength(): number;
        get address(): $InetAddress;
        get broadcast(): $InetAddress;
        get networkPrefixLength(): number;
    }
    export class $InetSocketAddress extends $SocketAddress {
        getAddress(): $InetAddress;
        getPort(): number;
        isUnresolved(): boolean;
        getHostName(): string;
        getHostString(): string;
        static createUnresolved(arg0: string, arg1: number): $InetSocketAddress;
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: number);
        constructor(arg0: string, arg1: number);
        get address(): $InetAddress;
        get port(): number;
        get unresolved(): boolean;
        get hostName(): string;
        get hostString(): string;
    }
    export class $Socket implements $Closeable {
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $Socket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        shutdownInput(): void;
        shutdownOutput(): void;
        isClosed(): boolean;
        getOutputStream(): $OutputStream;
        connect(arg0: $SocketAddress, arg1: number): void;
        connect(arg0: $SocketAddress): void;
        close(): void;
        getPort(): number;
        getInputStream(): $InputStream;
        getChannel(): $SocketChannel;
        bind(arg0: $SocketAddress): void;
        setOOBInline(arg0: boolean): void;
        setTrafficClass(arg0: number): void;
        setTcpNoDelay(arg0: boolean): void;
        getSendBufferSize(): number;
        setSoLinger(arg0: boolean, arg1: number): void;
        setReuseAddress(arg0: boolean): void;
        setSoTimeout(arg0: number): void;
        setKeepAlive(arg0: boolean): void;
        getSoLinger(): number;
        getSoTimeout(): number;
        setSendBufferSize(arg0: number): void;
        getTrafficClass(): number;
        setPerformancePreferences(arg0: number, arg1: number, arg2: number): void;
        setReceiveBufferSize(arg0: number): void;
        getReceiveBufferSize(): number;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getLocalPort(): number;
        getTcpNoDelay(): boolean;
        getKeepAlive(): boolean;
        getReuseAddress(): boolean;
        sendUrgentData(arg0: number): void;
        getOOBInline(): boolean;
        /**
         * @deprecated
         */
        static setSocketImplFactory(arg0: $SocketImplFactory): void;
        isBound(): boolean;
        isOutputShutdown(): boolean;
        isInputShutdown(): boolean;
        getInetAddress(): $InetAddress;
        constructor(arg0: string, arg1: number);
        constructor(arg0: $Proxy);
        constructor();
        constructor(arg0: $InetAddress, arg1: number);
        constructor(arg0: $InetAddress, arg1: number, arg2: $InetAddress, arg3: number);
        constructor(arg0: string, arg1: number, arg2: $InetAddress, arg3: number);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: number, arg2: boolean);
        /**
         * @deprecated
         */
        constructor(arg0: $InetAddress, arg1: number, arg2: boolean);
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get closed(): boolean;
        get outputStream(): $OutputStream;
        get port(): number;
        get inputStream(): $InputStream;
        get channel(): $SocketChannel;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        get localPort(): number;
        static set socketImplFactory(value: $SocketImplFactory);
        get bound(): boolean;
        get outputShutdown(): boolean;
        get inputShutdown(): boolean;
        get inetAddress(): $InetAddress;
    }
    export class $URI implements $Comparable<$URI>, $Serializable {
        compareTo(arg0: $URI): number;
        isAbsolute(): boolean;
        resolve(arg0: string): $URI;
        resolve(arg0: $URI): $URI;
        static create(arg0: string): $URI;
        getScheme(): string;
        isOpaque(): boolean;
        getRawAuthority(): string;
        getRawFragment(): string;
        getRawQuery(): string;
        getRawPath(): string;
        getHost(): string;
        getPort(): number;
        getAuthority(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURL(): $URL;
        normalize(): $URI;
        relativize(arg0: $URI): $URI;
        getRawSchemeSpecificPart(): string;
        parseServerAuthority(): $URI;
        getSchemeSpecificPart(): string;
        getRawUserInfo(): string;
        getFragment(): string;
        toASCIIString(): string;
        constructor(arg0: string, arg1: string, arg2: string, arg3: string, arg4: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: string);
        constructor(arg0: string, arg1: string, arg2: string);
        constructor(arg0: string);
        constructor(arg0: string, arg1: string, arg2: string, arg3: number, arg4: string, arg5: string, arg6: string);
        get absolute(): boolean;
        get scheme(): string;
        get opaque(): boolean;
        get rawAuthority(): string;
        get rawFragment(): string;
        get rawQuery(): string;
        get rawPath(): string;
        get host(): string;
        get port(): number;
        get authority(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        get rawSchemeSpecificPart(): string;
        get schemeSpecificPart(): string;
        get rawUserInfo(): string;
        get fragment(): string;
    }
    export class $URL implements $Serializable {
        static of(arg0: $URI, arg1: $URLStreamHandler): $URL;
        openStream(): $InputStream;
        getHost(): string;
        getPort(): number;
        getDefaultPort(): number;
        sameFile(arg0: $URL): boolean;
        toExternalForm(): string;
        openConnection(): $URLConnection;
        openConnection(arg0: $Proxy): $URLConnection;
        getContent(): $Object;
        getContent(arg0: $Class<never>[]): $Object;
        getProtocol(): string;
        getAuthority(): string;
        getFile(): string;
        getRef(): string;
        getQuery(): string;
        getPath(): string;
        getUserInfo(): string;
        toURI(): $URI;
        static setURLStreamHandlerFactory(arg0: $URLStreamHandlerFactory_): void;
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string, arg2: $URLStreamHandler);
        /**
         * @deprecated
         */
        constructor(arg0: $URL, arg1: string);
        /**
         * @deprecated
         */
        constructor(arg0: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: string);
        /**
         * @deprecated
         */
        constructor(arg0: string, arg1: string, arg2: number, arg3: string, arg4: $URLStreamHandler);
        get host(): string;
        get port(): number;
        get defaultPort(): number;
        get protocol(): string;
        get authority(): string;
        get file(): string;
        get ref(): string;
        get query(): string;
        get path(): string;
        get userInfo(): string;
        static set URLStreamHandlerFactory(value: $URLStreamHandlerFactory_);
    }
    export class $SocketAddress implements $Serializable {
        constructor();
    }
    export class $URLStreamHandler {
        constructor();
    }
    export class $Proxy {
        type(): $Proxy$Type;
        address(): $SocketAddress;
        static NO_PROXY: $Proxy;
        constructor(arg0: $Proxy$Type_, arg1: $SocketAddress);
    }
    export class $ContentHandler {
        getContent(arg0: $URLConnection): $Object;
        getContent(arg0: $URLConnection, arg1: $Class<any>[]): $Object;
        constructor();
    }
    export class $SocketOption<T> {
    }
    export interface $SocketOption<T> {
        name(): string;
        type(): $Class<T>;
    }
    export class $Proxy$Type extends $Enum<$Proxy$Type> {
        static values(): $Proxy$Type[];
        static valueOf(arg0: string): $Proxy$Type;
        static SOCKS: $Proxy$Type;
        static HTTP: $Proxy$Type;
        static DIRECT: $Proxy$Type;
    }
    /**
     * Values that may be interpreted as {@link $Proxy$Type}.
     */
    export type $Proxy$Type_ = "direct" | "http" | "socks";
    export class $DatagramSocket implements $Closeable {
        supportedOptions(): $Set<$SocketOption<never>>;
        isConnected(): boolean;
        setOption<T>(arg0: $SocketOption<T>, arg1: T): $DatagramSocket;
        getLocalAddress(): $InetAddress;
        getOption<T>(arg0: $SocketOption<T>): T;
        isClosed(): boolean;
        connect(arg0: $SocketAddress): void;
        connect(arg0: $InetAddress, arg1: number): void;
        close(): void;
        getPort(): number;
        getChannel(): $DatagramChannel;
        bind(arg0: $SocketAddress): void;
        getBroadcast(): boolean;
        send(arg0: $DatagramPacket): void;
        disconnect(): void;
        setTrafficClass(arg0: number): void;
        getSendBufferSize(): number;
        setReuseAddress(arg0: boolean): void;
        setSoTimeout(arg0: number): void;
        getSoTimeout(): number;
        setSendBufferSize(arg0: number): void;
        getTrafficClass(): number;
        setReceiveBufferSize(arg0: number): void;
        getReceiveBufferSize(): number;
        getRemoteSocketAddress(): $SocketAddress;
        getLocalSocketAddress(): $SocketAddress;
        getLocalPort(): number;
        getReuseAddress(): boolean;
        receive(arg0: $DatagramPacket): void;
        isBound(): boolean;
        getInetAddress(): $InetAddress;
        joinGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        leaveGroup(arg0: $SocketAddress, arg1: $NetworkInterface): void;
        setBroadcast(arg0: boolean): void;
        /**
         * @deprecated
         */
        static setDatagramSocketImplFactory(arg0: $DatagramSocketImplFactory): void;
        constructor();
        constructor(arg0: number);
        constructor(arg0: $SocketAddress);
        constructor(arg0: number, arg1: $InetAddress);
        get connected(): boolean;
        get localAddress(): $InetAddress;
        get closed(): boolean;
        get port(): number;
        get channel(): $DatagramChannel;
        get remoteSocketAddress(): $SocketAddress;
        get localSocketAddress(): $SocketAddress;
        get localPort(): number;
        get bound(): boolean;
        get inetAddress(): $InetAddress;
        static set datagramSocketImplFactory(value: $DatagramSocketImplFactory);
    }
}
