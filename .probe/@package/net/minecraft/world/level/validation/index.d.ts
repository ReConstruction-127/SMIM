import { $PathMatcher_, $Path_, $Path } from "@package/java/nio/file";
import { $Record } from "@package/java/lang";
import { $List_, $List } from "@package/java/util";

declare module "@package/net/minecraft/world/level/validation" {
    export class $ForbiddenSymlinkInfo extends $Record {
        target(): $Path;
        link(): $Path;
        constructor(arg0: $Path_, arg1: $Path_);
    }
    /**
     * Values that may be interpreted as {@link $ForbiddenSymlinkInfo}.
     */
    export type $ForbiddenSymlinkInfo_ = { target?: $Path_, link?: $Path_,  } | [target?: $Path_, link?: $Path_, ];
    export class $DirectoryValidator {
        validateDirectory(directory: $Path_, validateSymlinks: boolean): $List<$ForbiddenSymlinkInfo>;
        validateSymlink(directory: $Path_): $List<$ForbiddenSymlinkInfo>;
        validateSymlink(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        validateKnownDirectory(directory: $Path_, forbiddenSymlinkInfos: $List_<$ForbiddenSymlinkInfo_>): void;
        constructor(symlinkTargetAllowList: $PathMatcher_);
    }
}
