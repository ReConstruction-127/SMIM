import { $ICancellableEvent } from "@package/net/neoforged/bus/api";
import { $Player } from "@package/net/minecraft/world/entity/player";
import { $Collection, $Collection_ } from "@package/java/util";
import { $PlayerEvent } from "@package/net/neoforged/neoforge/event/entity/player";

declare module "@package/dev/latvian/mods/kubejs/stages" {
    export class $Stages {
    }
    export interface $Stages {
        remove(stage: string): boolean;
        clear(): boolean;
        replace(stages: $Collection_<string>): void;
        add(stage: string): boolean;
        set(stage: string, enabled: boolean): boolean;
        sync(): void;
        getAll(): $Collection<string>;
        has(stage: string): boolean;
        getPlayer(): $Player;
        toggle(stage: string): boolean;
        removeNoUpdate(stage: string): boolean;
        addNoUpdate(stage: string): boolean;
        get all(): $Collection<string>;
        get player(): $Player;
    }
    export class $StageCreationEvent extends $PlayerEvent implements $ICancellableEvent {
        setPlayerStages(s: $Stages): void;
        getPlayerStages(): $Stages;
        setCanceled(arg0: boolean): void;
        isCanceled(): boolean;
    }
}
