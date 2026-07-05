import { $SupportOPACServer } from "@package/xaero/common/server/mods/opac";
import { $IXaeroMinimap } from "@package/xaero/common";
import { $SupportArgonautsServer } from "@package/xaero/common/server/mods/argonauts";
import { $SupportFTBTeamsServer } from "@package/xaero/common/server/mods/ftbteams";
export * as ftbteams from "@package/xaero/common/server/mods/ftbteams";
export * as opac from "@package/xaero/common/server/mods/opac";
export * as argonauts from "@package/xaero/common/server/mods/argonauts";

declare module "@package/xaero/common/server/mods" {
    export class $SupportServerMods {
        check(arg0: $IXaeroMinimap): void;
        hasFtbTeams(): boolean;
        hasArgonauts(): boolean;
        getArgonauts(): $SupportArgonautsServer;
        getFtbTeams(): $SupportFTBTeamsServer;
        hasWorldmap(): boolean;
        getWorldmap(): $SupportWorldMapServer;
        hasOpac(): boolean;
        getOpac(): $SupportOPACServer;
        constructor();
        get argonauts(): $SupportArgonautsServer;
        get ftbTeams(): $SupportFTBTeamsServer;
        get worldmap(): $SupportWorldMapServer;
        get opac(): $SupportOPACServer;
    }
    export class $SupportWorldMapServer {
        supportsTrackedPlayers(): boolean;
        constructor();
    }
}
