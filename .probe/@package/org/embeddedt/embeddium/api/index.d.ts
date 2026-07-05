import { $BlockAndTintGetter, $Level, $Level_ } from "@package/net/minecraft/world/level";
import { $Function_, $Function } from "@package/java/util/function";
import { $SectionPos } from "@package/net/minecraft/core";
import { $RenderType } from "@package/net/minecraft/client/renderer";
import { $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $SectionInfoBuilder } from "@package/org/embeddedt/embeddium/api/render/chunk";
import { $VertexConsumer } from "@package/com/mojang/blaze3d/vertex";
import { $Option, $OptionGroup, $OptionPage } from "@package/org/embeddedt/embeddium/api/options/structure";
import { $Record } from "@package/java/lang";
import { $List, $List_ } from "@package/java/util";
import { $EventHandlerRegistrar, $EmbeddiumEvent } from "@package/org/embeddedt/embeddium/api/eventbus";
import { $OptionIdentifier } from "@package/org/embeddedt/embeddium/api/options";
export * as options from "@package/org/embeddedt/embeddium/api/options";
export * as eventbus from "@package/org/embeddedt/embeddium/api/eventbus";
export * as render from "@package/org/embeddedt/embeddium/api/render";
export * as math from "@package/org/embeddedt/embeddium/api/math";
export * as vertex from "@package/org/embeddedt/embeddium/api/vertex";

declare module "@package/org/embeddedt/embeddium/api" {
    export class $OptionGroupConstructionEvent extends $EmbeddiumEvent {
        getId(): $OptionIdentifier<void>;
        getOptions(): $List<$Option<never>>;
        static BUS: $EventHandlerRegistrar<$OptionGroupConstructionEvent>;
        constructor(arg0: $OptionIdentifier<void>, arg1: $List_<$Option<never>>);
        get id(): $OptionIdentifier<void>;
        get options(): $List<$Option<never>>;
    }
    export class $ChunkDataBuiltEvent extends $EmbeddiumEvent {
        getDataBuilder(): $SectionInfoBuilder;
        static BUS: $EventHandlerRegistrar<$ChunkDataBuiltEvent>;
        constructor(arg0: $SectionInfoBuilder);
        get dataBuilder(): $SectionInfoBuilder;
    }
    export class $MeshAppender$Context extends $Record {
        vertexConsumerProvider(): $Function<$RenderType, $VertexConsumer>;
        sectionOrigin(): $SectionPos;
        blockRenderView(): $BlockAndTintGetter;
        constructor(vertexConsumerProvider: $Function_<$RenderType, $VertexConsumer>, blockRenderView: $BlockAndTintGetter, sectionOrigin: $SectionPos);
    }
    /**
     * Values that may be interpreted as {@link $MeshAppender$Context}.
     */
    export type $MeshAppender$Context_ = { vertexConsumerProvider?: $Function_<$RenderType, $VertexConsumer>, sectionOrigin?: $SectionPos, blockRenderView?: $BlockAndTintGetter,  } | [vertexConsumerProvider?: $Function_<$RenderType, $VertexConsumer>, sectionOrigin?: $SectionPos, blockRenderView?: $BlockAndTintGetter, ];
    export class $OptionGUIConstructionEvent extends $EmbeddiumEvent {
        addPage(arg0: $OptionPage): void;
        getPages(): $List<$OptionPage>;
        static BUS: $EventHandlerRegistrar<$OptionGUIConstructionEvent>;
        constructor(arg0: $List_<$OptionPage>);
        get pages(): $List<$OptionPage>;
    }
    export class $ChunkMeshEvent extends $EmbeddiumEvent {
        static post(arg0: $Level_, arg1: $SectionPos): $List<$MeshAppender>;
        getWorld(): $Level;
        addMeshAppender(arg0: $MeshAppender_): void;
        getSectionOrigin(): $SectionPos;
        static BUS: $EventHandlerRegistrar<$ChunkMeshEvent>;
        get world(): $Level;
        get sectionOrigin(): $SectionPos;
    }
    export class $MeshAppender {
    }
    export interface $MeshAppender {
        render(arg0: $MeshAppender$Context_): void;
    }
    /**
     * Values that may be interpreted as {@link $MeshAppender}.
     */
    export type $MeshAppender_ = ((arg0: $MeshAppender$Context) => void);
    export class $OptionPageConstructionEvent extends $EmbeddiumEvent {
        getName(): $Component;
        getId(): $OptionIdentifier<void>;
        addGroup(arg0: $OptionGroup): void;
        getAdditionalGroups(): $List<$OptionGroup>;
        static BUS: $EventHandlerRegistrar<$OptionPageConstructionEvent>;
        constructor(arg0: $OptionIdentifier<void>, arg1: $Component_);
        get name(): $Component;
        get id(): $OptionIdentifier<void>;
        get additionalGroups(): $List<$OptionGroup>;
    }
}
