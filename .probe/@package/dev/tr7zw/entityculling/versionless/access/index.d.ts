
declare module "@package/dev/tr7zw/entityculling/versionless/access" {
    export class $Cullable {
    }
    export interface $Cullable {
        setTimeout(): void;
        isForcedVisible(): boolean;
        setOutOfCamera(arg0: boolean): void;
        isOutOfCamera(): boolean;
        setCulled(arg0: boolean): void;
        isCulled(): boolean;
        get forcedVisible(): boolean;
    }
}
