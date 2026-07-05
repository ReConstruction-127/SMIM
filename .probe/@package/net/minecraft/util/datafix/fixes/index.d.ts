import { $Record } from "@package/java/lang";
import { $List_, $Map_, $Map } from "@package/java/util";

declare module "@package/net/minecraft/util/datafix/fixes" {
    export class $StructuresBecomeConfiguredFix$Conversion extends $Record {
        fallback(): string;
        biomeMapping(): $Map<string, string>;
        static biomeMapped(biomeMapping: $Map_<$List_<string>, string>, fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        static trivial(fallback: string): $StructuresBecomeConfiguredFix$Conversion;
        constructor(biomeMapping: $Map_<string, string>, fallback: string);
    }
    /**
     * Values that may be interpreted as {@link $StructuresBecomeConfiguredFix$Conversion}.
     */
    export type $StructuresBecomeConfiguredFix$Conversion_ = { biomeMapping?: $Map_<string, string>, fallback?: string,  } | [biomeMapping?: $Map_<string, string>, fallback?: string, ];
}
