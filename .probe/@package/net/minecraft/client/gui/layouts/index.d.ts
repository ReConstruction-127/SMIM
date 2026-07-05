import { $Consumer_ } from "@package/java/util/function";
import { $ScreenRectangle } from "@package/net/minecraft/client/gui/navigation";
import { $AbstractWidget } from "@package/net/minecraft/client/gui/components";

declare module "@package/net/minecraft/client/gui/layouts" {
    export class $LayoutElement {
    }
    export interface $LayoutElement {
        getY(): number;
        getRectangle(): $ScreenRectangle;
        getWidth(): number;
        getHeight(): number;
        setX(x: number): void;
        setY(x: number): void;
        getX(): number;
        visitWidgets(consumer: $Consumer_<$AbstractWidget>): void;
        setPosition(x: number, y: number): void;
        get rectangle(): $ScreenRectangle;
        get width(): number;
        get height(): number;
    }
}
