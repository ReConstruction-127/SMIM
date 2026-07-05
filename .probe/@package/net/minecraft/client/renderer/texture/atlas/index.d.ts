import { $MetadataSectionSerializer } from "@package/net/minecraft/server/packs/metadata";
import { $Predicate_, $Function } from "@package/java/util/function";
import { $Logger } from "@package/org/slf4j";
import { $MapCodec_, $MapCodec } from "@package/com/mojang/serialization";
import { $ResourceLocation_, $ResourceLocation, $FileToIdConverter } from "@package/net/minecraft/resources";
import { $SpriteContents } from "@package/net/minecraft/client/renderer/texture";
import { $ResourceManager, $Resource } from "@package/net/minecraft/server/packs/resources";
import { $Record } from "@package/java/lang";
import { $Collection_ } from "@package/java/util";
import { $SpriteContentsConstructor_, $SpriteContentsConstructor } from "@package/net/neoforged/neoforge/client/textures";

declare module "@package/net/minecraft/client/renderer/texture/atlas" {
    export class $SpriteResourceLoader {
        static create(sectionSerializers: $Collection_<$MetadataSectionSerializer<never>>): $SpriteResourceLoader;
        static LOGGER: $Logger;
    }
    export interface $SpriteResourceLoader {
        loadSprite(location: $ResourceLocation_, resource: $Resource): $SpriteContents;
        loadSprite(arg0: $ResourceLocation_, arg1: $Resource, arg2: $SpriteContentsConstructor_): $SpriteContents;
    }
    /**
     * Values that may be interpreted as {@link $SpriteResourceLoader}.
     */
    export type $SpriteResourceLoader_ = ((arg0: $ResourceLocation, arg1: $Resource, arg2: $SpriteContentsConstructor) => $SpriteContents);
    export class $SpriteSource {
        static TEXTURE_ID_CONVERTER: $FileToIdConverter;
    }
    export interface $SpriteSource {
        run(resourceManager: $ResourceManager, output: $SpriteSource$Output): void;
        type(): $SpriteSourceType;
    }
    export class $SpriteSourceType extends $Record {
        codec(): $MapCodec<$SpriteSource>;
        constructor(arg0: $MapCodec_<$SpriteSource>);
    }
    /**
     * Values that may be interpreted as {@link $SpriteSourceType}.
     */
    export type $SpriteSourceType_ = { codec?: $MapCodec_<$SpriteSource>,  } | [codec?: $MapCodec_<$SpriteSource>, ];
    export class $SpriteSource$SpriteSupplier {
    }
    export interface $SpriteSource$SpriteSupplier extends $Function<$SpriteResourceLoader, $SpriteContents> {
        discard(): void;
    }
    /**
     * Values that may be interpreted as {@link $SpriteSource$SpriteSupplier}.
     */
    export type $SpriteSource$SpriteSupplier_ = (() => void);
    export class $SpriteSource$Output {
    }
    export interface $SpriteSource$Output {
        add(location: $ResourceLocation_, resource: $Resource): void;
        add(location: $ResourceLocation_, sprite: $SpriteSource$SpriteSupplier_): void;
        removeAll(predicate: $Predicate_<$ResourceLocation>): void;
    }
}
