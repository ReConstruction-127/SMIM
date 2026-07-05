import { $EmbeddiumEvent, $EventHandlerRegistrar } from "@package/org/embeddedt/embeddium/api/eventbus";

declare module "@package/org/embeddedt/embeddium/api/render/clouds" {
    export class $ModifyCloudRenderingEvent extends $EmbeddiumEvent {
        getCloudRenderDistance(): number;
        setCloudRenderDistance(arg0: number): void;
        static BUS: $EventHandlerRegistrar<$ModifyCloudRenderingEvent>;
        constructor(arg0: number);
    }
}
