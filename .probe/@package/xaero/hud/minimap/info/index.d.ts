import { $InfoDisplayManagerConfigData } from "@package/xaero/hud/minimap/common/config/info/config";
import { $InfoDisplayRenderer } from "@package/xaero/hud/minimap/info/render";

declare module "@package/xaero/hud/minimap/info" {
    export class $InfoDisplays {
        getManager(): $InfoDisplayManager;
        getRenderer(): $InfoDisplayRenderer;
        clearStateCache(): void;
        getIo(): $InfoDisplayIO;
        constructor(arg0: $InfoDisplayIO);
        get manager(): $InfoDisplayManager;
        get renderer(): $InfoDisplayRenderer;
        get io(): $InfoDisplayIO;
    }
    export class $InfoDisplayIO {
        decode(arg0: string): $InfoDisplayManagerConfigData;
        encode(arg0: $InfoDisplayManagerConfigData): string;
        constructor();
    }
}
