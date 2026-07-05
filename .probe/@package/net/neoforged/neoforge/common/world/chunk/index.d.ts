import { $LongSet } from "@package/it/unimi/dsi/fastutil/longs";
import { $ServerLevel } from "@package/net/minecraft/server/level";
import { $BlockPos, $BlockPos_ } from "@package/net/minecraft/core";
import { $Event } from "@package/net/neoforged/bus/api";
import { $ResourceLocation_, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $Record } from "@package/java/lang";
import { $UUID_, $UUID, $Map } from "@package/java/util";
import { $IModBusEvent } from "@package/net/neoforged/fml/event";

declare module "@package/net/neoforged/neoforge/common/world/chunk" {
    export class $TicketSet extends $Record {
        ticking(): $LongSet;
        nonTicking(): $LongSet;
        constructor(nonTicking: $LongSet, ticking: $LongSet);
    }
    /**
     * Values that may be interpreted as {@link $TicketSet}.
     */
    export type $TicketSet_ = { nonTicking?: $LongSet, ticking?: $LongSet,  } | [nonTicking?: $LongSet, ticking?: $LongSet, ];
    /**
     * Class to help mods remove no longer valid tickets.
     */
    export class $TicketHelper {
        /**
         * @return all "BLOCK" tickets this controller had registered and which block positions are forcing which chunks
         */
        getEntityTickets(): $Map<$UUID, $TicketSet>;
        /**
         * Removes the ticket for the given chunk that a given entity (UUID) was responsible for.
         */
        removeTicket(owner: $UUID_, chunk: number, ticking: boolean): void;
        /**
         * Removes the ticket for the given chunk that a given block was responsible for.
         */
        removeTicket(owner: $BlockPos_, chunk: number, ticking: boolean): void;
        /**
         * @return all "BLOCK" tickets this controller had registered and which block positions are forcing which chunks
         */
        getBlockTickets(): $Map<$BlockPos, $TicketSet>;
        /**
         * Removes all tickets that a given entity (UUID) was responsible for; both ticking and not ticking.
         */
        removeAllTickets(owner: $UUID_): void;
        /**
         * Removes all tickets that a given block was responsible for; both ticking and not ticking.
         */
        removeAllTickets(owner: $BlockPos_): void;
        get entityTickets(): $Map<$UUID, $TicketSet>;
        get blockTickets(): $Map<$BlockPos, $TicketSet>;
    }
    export class $TicketController extends $Record {
        callback(): $LoadingValidationCallback;
        id(): $ResourceLocation;
        forceChunk(arg0: $ServerLevel, arg1: $BlockPos_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $UUID_, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        forceChunk(arg0: $ServerLevel, arg1: $Entity, arg2: number, arg3: number, arg4: boolean, arg5: boolean): boolean;
        constructor(id: $ResourceLocation_, callback: $LoadingValidationCallback_);
        constructor(arg0: $ResourceLocation_);
    }
    /**
     * Values that may be interpreted as {@link $TicketController}.
     */
    export type $TicketController_ = { callback?: $LoadingValidationCallback_, id?: $ResourceLocation_,  } | [callback?: $LoadingValidationCallback_, id?: $ResourceLocation_, ];
    export class $LoadingValidationCallback {
    }
    export interface $LoadingValidationCallback {
        /**
         * Called back when tickets are about to be loaded and reinstated to allow mods to invalidate and remove specific tickets that may no longer be valid.
         */
        validateTickets(level: $ServerLevel, ticketHelper: $TicketHelper): void;
    }
    /**
     * Values that may be interpreted as {@link $LoadingValidationCallback}.
     */
    export type $LoadingValidationCallback_ = ((arg0: $ServerLevel, arg1: $TicketHelper) => void);
    /**
     * Fired in order to register chunk ticket controllers.
     * This event is fired on the mod-specific event bus.
     */
    export class $RegisterTicketControllersEvent extends $Event implements $IModBusEvent {
        /**
         * Registers a controller.
         */
        register(controller: $TicketController_): void;
    }
}
