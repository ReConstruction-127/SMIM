import { $Predicate_ } from "@package/java/util/function";
import { $TextureAtlasSprite } from "@package/net/minecraft/client/renderer/texture";
import { $EmbeddiumEvent, $EventHandlerRegistrar } from "@package/org/embeddedt/embeddium/api/eventbus";
import { $BlockEntity } from "@package/net/minecraft/world/level/block/entity";

declare module "@package/org/embeddedt/embeddium/api/render/chunk" {
    export class $SectionInfoBuilder {
    }
    export interface $SectionInfoBuilder {
        addBlockEntity(arg0: $BlockEntity, arg1: boolean): void;
        removeBlockEntitiesIf(arg0: $Predicate_<$BlockEntity>): void;
        addSprite(arg0: $TextureAtlasSprite): void;
    }
    export class $RenderSectionDistanceFilterEvent extends $EmbeddiumEvent {
        getFilter(): $RenderSectionDistanceFilter;
        setFilter(arg0: $RenderSectionDistanceFilter_): void;
        static BUS: $EventHandlerRegistrar<$RenderSectionDistanceFilterEvent>;
        constructor();
    }
    export class $RenderSectionDistanceFilter {
        static DEFAULT: $RenderSectionDistanceFilter;
    }
    export interface $RenderSectionDistanceFilter {
        isWithinDistance(arg0: number, arg1: number, arg2: number, arg3: number): boolean;
    }
    /**
     * Values that may be interpreted as {@link $RenderSectionDistanceFilter}.
     */
    export type $RenderSectionDistanceFilter_ = ((arg0: number, arg1: number, arg2: number, arg3: number) => boolean);
}
