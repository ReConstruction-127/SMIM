import { $Enum, $Record } from "@package/java/lang";

declare module "@package/aztech/modern_industrialization/util" {
    export class $Rectangle extends $Record {
        x(): number;
        h(): number;
        contains(arg0: number, arg1: number): boolean;
        w(): number;
        y(): number;
        constructor(x: number, y: number, w: number, h: number);
    }
    /**
     * Values that may be interpreted as {@link $Rectangle}.
     */
    export type $Rectangle_ = { w?: number, x?: number, h?: number, y?: number,  } | [w?: number, x?: number, h?: number, y?: number, ];
    export class $Simulation extends $Enum<$Simulation> {
        static values(): $Simulation[];
        static valueOf(arg0: string): $Simulation;
        isActing(): boolean;
        isSimulating(): boolean;
        static ACT: $Simulation;
        static SIMULATE: $Simulation;
        get acting(): boolean;
        get simulating(): boolean;
    }
    /**
     * Values that may be interpreted as {@link $Simulation}.
     */
    export type $Simulation_ = "simulate" | "act";
}
