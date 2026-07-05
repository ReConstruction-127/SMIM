import { $Direction } from "@package/net/minecraft/core";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $ModelQuadFacing } from "@package/org/embeddedt/embeddium/impl/model/quad/properties";
import { $SpriteTransparencyLevel } from "@package/org/embeddedt/embeddium/impl/render/chunk/sprite";
export * as properties from "@package/org/embeddedt/embeddium/impl/model/quad/properties";

declare module "@package/org/embeddedt/embeddium/impl/model/quad" {
    export class $ModelQuadView {
    }
    export interface $ModelQuadView {
        getY(arg0: number): number;
        getFlags(): number;
        getColorIndex(): number;
        getForgeNormal(arg0: number): number;
        getLightFace(): $Direction;
        getModFaceNormal(): number;
        hasColor(): boolean;
        getTexU(arg0: number): number;
        getTexV(arg0: number): number;
        getSprite(): $TextureAtlasSprite;
        getColor(arg0: number): number;
        getLight(arg0: number): number;
        getX(arg0: number): number;
        getZ(arg0: number): number;
        getComputedFaceNormal(): number;
        hasAmbientOcclusion(): boolean;
        get flags(): number;
        get colorIndex(): number;
        get lightFace(): $Direction;
        get modFaceNormal(): number;
        get sprite(): $TextureAtlasSprite;
        get computedFaceNormal(): number;
    }
    export class $BakedQuadView {
    }
    export interface $BakedQuadView extends $ModelQuadView {
        setFlags(arg0: number): void;
        getNormalFace(): $ModelQuadFacing;
        hasShade(): boolean;
        getTransparencyLevel(): $SpriteTransparencyLevel;
        set flags(value: number);
        get normalFace(): $ModelQuadFacing;
        get transparencyLevel(): $SpriteTransparencyLevel;
    }
}
