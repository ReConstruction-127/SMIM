import { $Reader, $InputStream, $Writer, $OutputStream, $File_ } from "@package/java/io";
import { $FileNotFoundAction } from "@package/com/electronwill/nightconfig/core/file";
import { $Config, $UnmodifiableConfig, $ConfigFormat } from "@package/com/electronwill/nightconfig/core";
import { $Path_ } from "@package/java/nio/file";
import { $URL } from "@package/java/net";
import { $Charset } from "@package/java/nio/charset";

declare module "@package/com/electronwill/nightconfig/core/io" {
    export class $ConfigParser<C extends $Config> {
    }
    export interface $ConfigParser<C extends $Config> {
        parse(arg0: $Path_, arg1: $FileNotFoundAction): C;
        parse(arg0: $File_, arg1: $Config, arg2: $ParsingMode, arg3: $FileNotFoundAction, arg4: $Charset): void;
        parse(arg0: $File_, arg1: $Config, arg2: $ParsingMode, arg3: $FileNotFoundAction): void;
        parse(arg0: $File_, arg1: $FileNotFoundAction, arg2: $Charset): C;
        parse(arg0: $URL, arg1: $Config, arg2: $ParsingMode): void;
        parse(arg0: $URL): C;
        parse(arg0: $Path_, arg1: $Config, arg2: $ParsingMode, arg3: $FileNotFoundAction, arg4: $Charset): void;
        parse(arg0: $Path_, arg1: $Config, arg2: $ParsingMode, arg3: $FileNotFoundAction): void;
        parse(arg0: $Path_, arg1: $FileNotFoundAction, arg2: $Charset): C;
        parse(arg0: string, arg1: $Config, arg2: $ParsingMode): void;
        parse(arg0: string): C;
        parse(arg0: $Reader, arg1: $Config, arg2: $ParsingMode): void;
        parse(arg0: $Reader): C;
        parse(arg0: $File_, arg1: $FileNotFoundAction): C;
        parse(arg0: $InputStream, arg1: $Config, arg2: $ParsingMode, arg3: $Charset): void;
        parse(arg0: $InputStream, arg1: $Config, arg2: $ParsingMode): void;
        parse(arg0: $InputStream, arg1: $Charset): C;
        parse(arg0: $InputStream): C;
        getFormat(): $ConfigFormat<C>;
        get format(): $ConfigFormat<C>;
    }
    export class $ConfigWriter {
    }
    export interface $ConfigWriter {
        write(arg0: $UnmodifiableConfig, arg1: $Path_, arg2: $WritingMode, arg3: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $File_, arg2: $WritingMode): void;
        write(arg0: $UnmodifiableConfig, arg1: $File_, arg2: $WritingMode, arg3: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $URL): void;
        write(arg0: $UnmodifiableConfig, arg1: $Writer): void;
        write(arg0: $UnmodifiableConfig, arg1: $OutputStream, arg2: $Charset): void;
        write(arg0: $UnmodifiableConfig, arg1: $OutputStream): void;
        write(arg0: $UnmodifiableConfig, arg1: $Path_, arg2: $WritingMode): void;
        writeToString(arg0: $UnmodifiableConfig): string;
    }
    /**
     * Values that may be interpreted as {@link $ConfigWriter}.
     */
    export type $ConfigWriter_ = ((arg0: $UnmodifiableConfig, arg1: $Writer) => void);
}
