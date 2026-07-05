import { $Blaze3dRenderTargetExt } from "@package/net/irisshaders/iris/targets";

declare module "@package/com/mojang/blaze3d/pipeline" {
    export class $RenderTarget implements $Blaze3dRenderTargetExt {
        clear(useDepth: boolean): void;
        resize(width: number, height: number, disableBlend: boolean): void;
        unbindRead(): void;
        bindRead(): void;
        getColorTextureId(): number;
        checkStatus(): void;
        setClearColor(red: number, green: number, blue: number, alpha: number): void;
        unbindWrite(): void;
        blitToScreen(width: number, height: number, disableBlend: boolean): void;
        blitToScreen(width: number, height: number): void;
        destroyBuffers(): void;
        bindWrite(useDepth: boolean): void;
        setFilterMode(filterMode: number): void;
        createBuffers(width: number, height: number, disableBlend: boolean): void;
        getDepthTextureId(): number;
        enableStencil(): void;
        isStencilEnabled(): boolean;
        iris$getDepthBufferVersion(): number;
        iris$getColorBufferVersion(): number;
        copyDepthFrom(otherTarget: $RenderTarget): void;
        useDepth: boolean;
        filterMode: number;
        viewWidth: number;
        frameBufferId: number;
        width: number;
        viewHeight: number;
        height: number;
        constructor(useDepth: boolean);
        get colorTextureId(): number;
        get depthTextureId(): number;
        get stencilEnabled(): boolean;
    }
}
