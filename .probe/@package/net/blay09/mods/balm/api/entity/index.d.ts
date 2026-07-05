import { $CompoundTag_, $CompoundTag } from "@package/net/minecraft/nbt";

declare module "@package/net/blay09/mods/balm/api/entity" {
    export class $BalmEntity {
    }
    export interface $BalmEntity {
        setNeoForgeBalmData(arg0: $CompoundTag_): void;
        getNeoForgeBalmData(): $CompoundTag;
        setForgeBalmData(arg0: $CompoundTag_): void;
        getFabricBalmData(): $CompoundTag;
        getForgeBalmData(): $CompoundTag;
        setFabricBalmData(arg0: $CompoundTag_): void;
    }
}
