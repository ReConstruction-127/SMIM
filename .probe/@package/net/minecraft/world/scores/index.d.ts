import { $CompoundTag_ } from "@package/net/minecraft/nbt";
import { $MutableComponent, $Component_, $Component } from "@package/net/minecraft/network/chat";
import { $Entity } from "@package/net/minecraft/world/entity";
import { $ObjectiveCriteria$RenderType, $ObjectiveCriteria, $ObjectiveCriteria$RenderType_ } from "@package/net/minecraft/world/scores/criteria";
import { $SavedData } from "@package/net/minecraft/world/level/saveddata";
import { $Collection } from "@package/java/util";
import { $NumberFormat } from "@package/net/minecraft/network/chat/numbers";
import { $StringRepresentable$EnumCodec, $StringRepresentable } from "@package/net/minecraft/util";
import { $IntFunction, $Consumer_ } from "@package/java/util/function";
import { $ChatFormatting_, $ChatFormatting } from "@package/net/minecraft";
import { $Object2IntMap } from "@package/it/unimi/dsi/fastutil/objects";
import { $HolderLookup$Provider } from "@package/net/minecraft/core";
import { $GameProfile } from "@package/com/mojang/authlib";
import { $Enum, $Record } from "@package/java/lang";
export * as criteria from "@package/net/minecraft/world/scores/criteria";

declare module "@package/net/minecraft/world/scores" {
    export class $ScoreHolder {
        static fromGameProfile(gameProfile: $GameProfile): $ScoreHolder;
        static forNameOnly(name: string): $ScoreHolder;
        static WILDCARD: $ScoreHolder;
        static WILDCARD_NAME: string;
    }
    export interface $ScoreHolder {
        getDisplayName(): $Component;
        getFeedbackDisplayName(): $Component;
        getScoreboardName(): string;
        get displayName(): $Component;
        get feedbackDisplayName(): $Component;
        get scoreboardName(): string;
    }
    /**
     * Values that may be interpreted as {@link $ScoreHolder}.
     */
    export type $ScoreHolder_ = (() => string);
    export class $Scoreboard {
        onPlayerScoreRemoved(scoreHolder: $ScoreHolder_, objective: $Objective): void;
        setDisplayObjective(slot: $DisplaySlot_, objective: $Objective | null): void;
        /**
         * Removes the given username from the given ScorePlayerTeam. If the player is not on the team then an IllegalStateException is thrown.
         */
        removePlayerFromTeam(username: string, playerTeam: $PlayerTeam): void;
        removePlayerFromTeam(playerName: string): boolean;
        getOrCreatePlayerScore(scoreHolder: $ScoreHolder_, objective: $Objective): $ScoreAccess;
        getOrCreatePlayerScore(scoreHolder: $ScoreHolder_, objective: $Objective, readOnly: boolean): $ScoreAccess;
        resetSinglePlayerScore(scoreHolder: $ScoreHolder_, objective: $Objective): void;
        getDisplayObjective(slot: $DisplaySlot_): $Objective;
        resetAllPlayerScores(scoreHolder: $ScoreHolder_): void;
        getPlayerScoreInfo(scoreHolder: $ScoreHolder_, objective: $Objective): $ReadOnlyScoreInfo;
        /**
         * Returns a ScoreObjective for the objective name
         */
        getObjective(name: string | null): $Objective;
        /**
         * Retrieve all registered ScorePlayerTeam instances
         */
        getPlayerTeams(): $Collection<$PlayerTeam>;
        onTeamAdded(playerTeam: $PlayerTeam): void;
        removePlayerTeam(playerTeam: $PlayerTeam): void;
        removeObjective(objective: $Objective): void;
        onTeamRemoved(playerTeam: $PlayerTeam): void;
        /**
         * Retrieve all registered ScorePlayerTeam instances
         */
        getObjectiveNames(): $Collection<string>;
        /**
         * Retrieve all registered ScorePlayerTeam instances
         */
        getObjectives(): $Collection<$Objective>;
        onObjectiveRemoved(objective: $Objective): void;
        /**
         * Retrieve all registered ScorePlayerTeam instances
         */
        getTeamNames(): $Collection<string>;
        onPlayerRemoved(scoreHolder: $ScoreHolder_): void;
        onObjectiveAdded(objective: $Objective): void;
        listPlayerScores(scoreHolder: $ScoreHolder_): $Object2IntMap<$Objective>;
        listPlayerScores(objective: $Objective): $Collection<$PlayerScoreEntry>;
        addPlayerTeam(name: string): $PlayerTeam;
        onObjectiveChanged(objective: $Objective): void;
        /**
         * Retrieve all registered ScorePlayerTeam instances
         */
        getTrackedPlayers(): $Collection<$ScoreHolder>;
        addObjective(name: string, criteria: $ObjectiveCriteria, displayName: $Component_, renderType: $ObjectiveCriteria$RenderType_, displayAutoUpdate: boolean, numberFormat: $NumberFormat | null): $Objective;
        entityRemoved(entity: $Entity): void;
        getPlayersTeam(name: string): $PlayerTeam;
        forAllObjectives(criteria: $ObjectiveCriteria, scoreHolder: $ScoreHolder_, action: $Consumer_<$ScoreAccess>): void;
        getPlayerTeam(name: string): $PlayerTeam;
        addPlayerToTeam(playerName: string, team: $PlayerTeam): boolean;
        onTeamChanged(playerTeam: $PlayerTeam): void;
        static HIDDEN_SCORE_PREFIX: string;
        constructor();
        get playerTeams(): $Collection<$PlayerTeam>;
        get objectiveNames(): $Collection<string>;
        get objectives(): $Collection<$Objective>;
        get teamNames(): $Collection<string>;
        get trackedPlayers(): $Collection<$ScoreHolder>;
    }
    export class $ReadOnlyScoreInfo {
        static safeFormatValue(scoreInfo: $ReadOnlyScoreInfo | null, format: $NumberFormat): $MutableComponent;
    }
    export interface $ReadOnlyScoreInfo {
        value(): number;
        isLocked(): boolean;
        numberFormat(): $NumberFormat;
        formatValue(format: $NumberFormat): $MutableComponent;
        get locked(): boolean;
    }
    export class $Objective {
        getName(): string;
        getDisplayName(): $Component;
        numberFormat(): $NumberFormat;
        setNumberFormat(numberFormat: $NumberFormat | null): void;
        getCriteria(): $ObjectiveCriteria;
        getFormattedDisplayName(): $Component;
        getRenderType(): $ObjectiveCriteria$RenderType;
        getScoreboard(): $Scoreboard;
        setDisplayName(displayName: $Component_): void;
        setRenderType(renderType: $ObjectiveCriteria$RenderType_): void;
        numberFormatOrDefault(defaultValue: $NumberFormat): $NumberFormat;
        displayAutoUpdate(): boolean;
        setDisplayAutoUpdate(displayAutoUpdate: boolean): void;
        constructor(scoreboard: $Scoreboard, name: string, criteria: $ObjectiveCriteria, displayName: $Component_, renderType: $ObjectiveCriteria$RenderType_, displayAutoUpdate: boolean, numberFormat: $NumberFormat | null);
        get name(): string;
        get criteria(): $ObjectiveCriteria;
        get formattedDisplayName(): $Component;
        get scoreboard(): $Scoreboard;
    }
    export class $PlayerScoreEntry extends $Record {
        value(): number;
        isHidden(): boolean;
        owner(): string;
        display(): $Component;
        numberFormatOverride(): $NumberFormat;
        ownerName(): $Component;
        formatValue(format: $NumberFormat): $MutableComponent;
        constructor(arg0: string, arg1: number, arg2: $Component_ | null, arg3: $NumberFormat | null);
        get hidden(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $PlayerScoreEntry}.
     */
    export type $PlayerScoreEntry_ = { value?: number, display?: $Component_, owner?: string, numberFormatOverride?: $NumberFormat,  } | [value?: number, display?: $Component_, owner?: string, numberFormatOverride?: $NumberFormat, ];
    export class $Team$Visibility extends $Enum<$Team$Visibility> {
        static values(): $Team$Visibility[];
        static valueOf(name: string): $Team$Visibility;
        getDisplayName(): $Component;
        static byName(name: string): $Team$Visibility;
        static getAllNames(): string[];
        static HIDE_FOR_OTHER_TEAMS: $Team$Visibility;
        static NEVER: $Team$Visibility;
        id: number;
        static ALWAYS: $Team$Visibility;
        static HIDE_FOR_OWN_TEAM: $Team$Visibility;
        get displayName(): $Component;
        static get allNames(): string[];
    }
    /**
     * Values that may be interpreted as {@link $Team$Visibility}.
     */
    export type $Team$Visibility_ = "always" | "never" | "hide_for_other_teams" | "hide_for_own_team";
    export class $DisplaySlot extends $Enum<$DisplaySlot> implements $StringRepresentable {
        static values(): $DisplaySlot[];
        static valueOf(arg0: string): $DisplaySlot;
        id(): number;
        getSerializedName(): string;
        static teamColorToSlot(formatting: $ChatFormatting_): $DisplaySlot;
        getRemappedEnumConstantName(): string;
        static BELOW_NAME: $DisplaySlot;
        static TEAM_GREEN: $DisplaySlot;
        static CODEC: $StringRepresentable$EnumCodec<$DisplaySlot>;
        static TEAM_BLACK: $DisplaySlot;
        static TEAM_DARK_GREEN: $DisplaySlot;
        static TEAM_BLUE: $DisplaySlot;
        static TEAM_DARK_RED: $DisplaySlot;
        static TEAM_YELLOW: $DisplaySlot;
        static TEAM_DARK_GRAY: $DisplaySlot;
        static TEAM_AQUA: $DisplaySlot;
        static BY_ID: $IntFunction<$DisplaySlot>;
        static SIDEBAR: $DisplaySlot;
        static TEAM_DARK_AQUA: $DisplaySlot;
        static TEAM_RED: $DisplaySlot;
        static TEAM_DARK_BLUE: $DisplaySlot;
        static TEAM_LIGHT_PURPLE: $DisplaySlot;
        static TEAM_DARK_PURPLE: $DisplaySlot;
        static TEAM_WHITE: $DisplaySlot;
        static TEAM_GOLD: $DisplaySlot;
        static LIST: $DisplaySlot;
        static TEAM_GRAY: $DisplaySlot;
        get serializedName(): string;
        get remappedEnumConstantName(): string;
    }
    /**
     * Values that may be interpreted as {@link $DisplaySlot}.
     */
    export type $DisplaySlot_ = "list" | "sidebar" | "below_name" | "sidebar.team.black" | "sidebar.team.dark_blue" | "sidebar.team.dark_green" | "sidebar.team.dark_aqua" | "sidebar.team.dark_red" | "sidebar.team.dark_purple" | "sidebar.team.gold" | "sidebar.team.gray" | "sidebar.team.dark_gray" | "sidebar.team.blue" | "sidebar.team.green" | "sidebar.team.aqua" | "sidebar.team.red" | "sidebar.team.light_purple" | "sidebar.team.yellow" | "sidebar.team.white";
    export class $PlayerTeam extends $Team {
        /**
         * Gets the display name for this team.
         */
        getDisplayName(): $Component;
        /**
         * Sets the color for this team. The team color is used mainly for team kill objectives and team-specific setDisplay usage. It does _not_ affect all situations (for instance, the prefix is used for the glowing effect).
         */
        setColor(color: $ChatFormatting_): void;
        getFormattedDisplayName(): $MutableComponent;
        /**
         * Sets whether friendly fire (PVP between members of the team) is allowed.
         */
        setAllowFriendlyFire(friendlyFire: boolean): void;
        /**
         * Sets whether friendly fire (PVP between members of the team) is allowed.
         */
        setSeeFriendlyInvisibles(friendlyFire: boolean): void;
        /**
         * Sets the visibility flags for player death messages.
         */
        setNameTagVisibility(visibility: $Team$Visibility_): void;
        /**
         * Sets the visibility flags for player death messages.
         */
        setDeathMessageVisibility(visibility: $Team$Visibility_): void;
        getScoreboard(): $Scoreboard;
        static formatNameForTeam(playerTeam: $Team | null, playerName: $Component_): $MutableComponent;
        /**
         * Sets the rule to be used for handling collisions with members of this team.
         */
        setCollisionRule(rule: $Team$CollisionRule_): void;
        /**
         * Gets a bitmask containing the friendly fire and invisibles flags.
         */
        packOptions(): number;
        /**
         * Sets the display name for this team.
         */
        setDisplayName(name: $Component_): void;
        /**
         * Sets friendly fire and invisibles flags based off of the given bitmask.
         */
        unpackOptions(flags: number): void;
        /**
         * Sets the display name for this team.
         */
        setPlayerSuffix(name: $Component_ | null): void;
        /**
         * Sets the display name for this team.
         */
        setPlayerPrefix(name: $Component_ | null): void;
        /**
         * Gets the display name for this team.
         */
        getPlayerSuffix(): $Component;
        /**
         * Gets the display name for this team.
         */
        getPlayerPrefix(): $Component;
        constructor(scoreboard: $Scoreboard, name: string);
        set color(value: $ChatFormatting_);
        get formattedDisplayName(): $MutableComponent;
        set allowFriendlyFire(value: boolean);
        set seeFriendlyInvisibles(value: boolean);
        set nameTagVisibility(value: $Team$Visibility_);
        set deathMessageVisibility(value: $Team$Visibility_);
        get scoreboard(): $Scoreboard;
        set collisionRule(value: $Team$CollisionRule_);
    }
    export class $ScoreboardSaveData extends $SavedData {
        load(tag: $CompoundTag_, levelRegistry: $HolderLookup$Provider): $ScoreboardSaveData;
        static FILE_ID: string;
        constructor(scoreboard: $Scoreboard);
    }
    export class $ScoreAccess {
    }
    export interface $ScoreAccess {
        lock(): void;
        reset(): void;
        get(): number;
        add(increment: number): number;
        increment(): number;
        set(value: number): void;
        unlock(): void;
        display(value: $Component_ | null): void;
        display(): $Component;
        numberFormatOverride(format: $NumberFormat | null): void;
        locked(): boolean;
    }
    export class $Team {
        /**
         * Retrieve the name by which this team is registered in the scoreboard
         */
        getName(): string;
        /**
         * Same as ==
         */
        isAlliedTo(other: $Team | null): boolean;
        /**
         * Gets the color for this team. The team color is used mainly for team kill objectives and team-specific setDisplay usage. It does _not_ affect all situations (for instance, the prefix is used for the glowing effect).
         */
        getColor(): $ChatFormatting;
        /**
         * Gets the visibility flags for player death messages.
         */
        getNameTagVisibility(): $Team$Visibility;
        /**
         * Checks whether members of this team can see other members that are invisible.
         */
        canSeeFriendlyInvisibles(): boolean;
        /**
         * Gets the visibility flags for player death messages.
         */
        getDeathMessageVisibility(): $Team$Visibility;
        /**
         * Checks whether members of this team can see other members that are invisible.
         */
        isAllowFriendlyFire(): boolean;
        getFormattedName(formattedName: $Component_): $MutableComponent;
        /**
         * Gets the rule to be used for handling collisions with members of this team.
         */
        getCollisionRule(): $Team$CollisionRule;
        /**
         * Gets a collection of all members of this team.
         */
        getPlayers(): $Collection<string>;
        constructor();
        get name(): string;
        get color(): $ChatFormatting;
        get nameTagVisibility(): $Team$Visibility;
        get deathMessageVisibility(): $Team$Visibility;
        get allowFriendlyFire(): boolean;
        get collisionRule(): $Team$CollisionRule;
        get players(): $Collection<string>;
    }
    export class $Team$CollisionRule extends $Enum<$Team$CollisionRule> {
        static values(): $Team$CollisionRule[];
        static valueOf(name: string): $Team$CollisionRule;
        getDisplayName(): $Component;
        static byName(name: string): $Team$CollisionRule;
        static PUSH_OTHER_TEAMS: $Team$CollisionRule;
        static NEVER: $Team$CollisionRule;
        id: number;
        static PUSH_OWN_TEAM: $Team$CollisionRule;
        static ALWAYS: $Team$CollisionRule;
        get displayName(): $Component;
    }
    /**
     * Values that may be interpreted as {@link $Team$CollisionRule}.
     */
    export type $Team$CollisionRule_ = "always" | "never" | "push_other_teams" | "push_own_team";
}
