import { $MinimapInterface } from "@package/xaero/common/minimap";
import { $ModSettings } from "@package/xaero/common/settings";
import { $List } from "@package/java/util";
import { $IntBuffer } from "@package/java/nio";

declare module "@package/xaero/common/minimap/region" {
    export class $MinimapChunk {
        reset(arg0: number, arg1: number): void;
        cleanup(arg0: $MinimapInterface): void;
        getBuffer(arg0: number): $IntBuffer;
        bindTexture(arg0: number): number;
        setChanged(arg0: boolean): void;
        copyBuffer(arg0: number, arg1: $IntBuffer): void;
        getX(): number;
        getZ(): number;
        getGlTexture(arg0: number): number;
        isRefreshRequired(arg0: number): boolean;
        setRefreshRequired(arg0: number, arg1: boolean): void;
        setLevelsBuffered(arg0: number): void;
        isHasSomething(): boolean;
        setGlTexture(arg0: number, arg1: number): void;
        setHasSomething(arg0: boolean): void;
        recycleTiles(): void;
        updateBuffers(arg0: number, arg1: number[][]): void;
        getLevelsBuffered(): number;
        setBlockTextureUpload(arg0: boolean): void;
        isBlockTextureUpload(): boolean;
        getTile(arg0: number, arg1: number): $MinimapTile;
        isChanged(): boolean;
        setTile(arg0: number, arg1: number, arg2: $MinimapTile): void;
        putColour(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number[], arg6: number): void;
        getLevelToRefresh(arg0: number): number;
        static LIGHT_LEVELS: number;
        static INT_BUFFER_SIZE: number;
        static SIZE_TILES: number;
        constructor(arg0: number, arg1: number);
        get x(): number;
        get z(): number;
    }
    export class $MinimapTile {
        getHeight(arg0: number, arg1: number): number;
        recycle(): void;
        setCode(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): void;
        isSlimeChunk(): boolean;
        static isSlimeChunk(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): boolean;
        isChunkGrid(): boolean;
        setHeight(arg0: number, arg1: number, arg2: number): void;
        isSuccess(): boolean;
        getX(): number;
        getZ(): number;
        setRGB(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number): void;
        setSuccess(arg0: boolean): void;
        getBlue(arg0: number, arg1: number, arg2: number): number;
        getRed(arg0: number, arg1: number, arg2: number): number;
        getGreen(arg0: number, arg1: number, arg2: number): number;
        isHasSomething(): boolean;
        static getANewTile(arg0: $ModSettings, arg1: number, arg2: number, arg3: number): $MinimapTile;
        setHasTerrain(arg0: boolean): void;
        pixelChanged(arg0: number, arg1: number, arg2: number, arg3: number, arg4: number, arg5: number, arg6: number): boolean;
        setHasSomething(arg0: boolean): void;
        setHighlights(arg0: number[]): void;
        setWasTransfered(arg0: boolean): void;
        getHighlights(): number[];
        getHighlightVersion(): number;
        setHighlightVersion(arg0: number): void;
        hasTerrain(): boolean;
        isWasTransfered(): boolean;
        static recycled: $List<$MinimapTile>;
        caveLevel: number;
        constructor(arg0: $ModSettings, arg1: number, arg2: number, arg3: number);
        get chunkGrid(): boolean;
        get x(): number;
        get z(): number;
    }
}
