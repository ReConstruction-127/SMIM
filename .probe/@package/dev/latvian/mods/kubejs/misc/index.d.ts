import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $SoundsGenerator$SoundGen } from "@package/dev/latvian/mods/kubejs/client";
import { $Item_ } from "@package/net/minecraft/world/item";
import { $MapCodec_ } from "@package/com/mojang/serialization";
import { $KubeColor_ } from "@package/dev/latvian/mods/kubejs/color";
import { $LivingEntity } from "@package/net/minecraft/world/entity";
import { $MobEffectInstance, $MobEffectCategory_, $MobEffect } from "@package/net/minecraft/world/effect";
import { $ParticleOptions_, $ParticleType } from "@package/net/minecraft/core/particles";
import { $AttributeModifier$Operation_ } from "@package/net/minecraft/world/entity/ai/attributes";
import { $List_ } from "@package/java/util";
import { $PaintingVariant } from "@package/net/minecraft/world/entity/decoration";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $Consumer_ } from "@package/java/util/function";
import { $Holder_, $Registry } from "@package/net/minecraft/core";
import { $SoundEvent_, $SoundEvent } from "@package/net/minecraft/sounds";
import { $BlockState_ } from "@package/net/minecraft/world/level/block/state";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $RegistryFriendlyByteBuf } from "@package/net/minecraft/network";
import { $BuilderBase } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation_, $ResourceKey, $ResourceLocation } from "@package/net/minecraft/resources";
import { $Block_ } from "@package/net/minecraft/world/level/block";
import { $SourceLine } from "@package/dev/latvian/mods/kubejs/script";
import { $StreamCodec } from "@package/net/minecraft/network/codec";

declare module "@package/dev/latvian/mods/kubejs/misc" {
    export class $PotionBuilder extends $BuilderBase<$Potion> {
        addEffect(effect: $MobEffectInstance): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean, showIcon: boolean, hiddenEffect: $MobEffectInstance): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number): this;
        effect(effect: $Holder_<$MobEffect>, duration: number, amplifier: number, ambient: boolean, visible: boolean): this;
        effect(effect: $Holder_<$MobEffect>, duration: number): this;
        effect(effect: $Holder_<$MobEffect>): this;
        registryKey: $ResourceKey<$Registry<$Potion>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $ParticleTypeBuilder extends $BuilderBase<$ParticleType<never>> {
        texture(texture: string): this;
        textures(textures: $List_<string>): this;
        codec(c: $MapCodec_<$ParticleOptions_>): this;
        streamCodec(s: $StreamCodec<$RegistryFriendlyByteBuf, $ParticleOptions_>): this;
        overrideLimiter(o: boolean): this;
        registryKey: $ResourceKey<$Registry<$ParticleType<never>>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $VillagerTypeBuilder extends $BuilderBase<$VillagerType> {
        registryKey: $ResourceKey<$Registry<$VillagerType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $MobEffectBuilder extends $BuilderBase<$MobEffect> {
        color(col: $KubeColor_): this;
        instant(): this;
        instant(instant: boolean): this;
        category(c: $MobEffectCategory_): this;
        effectTick(effectTick: $MobEffectBuilder$EffectEntityCallback_): this;
        harmful(): this;
        beneficial(): this;
        modifyAttribute(attribute: $ResourceLocation_, id: $ResourceLocation_, amount: number, operation: $AttributeModifier$Operation_): this;
        registryKey: $ResourceKey<$Registry<$MobEffect>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $MobEffectBuilder$EffectEntityCallback {
    }
    export interface $MobEffectBuilder$EffectEntityCallback {
        applyEffectTick(entity: $LivingEntity, level: number): void;
    }
    /**
     * Values that may be interpreted as {@link $MobEffectBuilder$EffectEntityCallback}.
     */
    export type $MobEffectBuilder$EffectEntityCallback_ = ((entity: $LivingEntity, level: number) => void);
    export class $VillagerProfessionBuilder extends $BuilderBase<$VillagerProfession> {
        workSound(t: $SoundEvent_): this;
        poiType(t: $ResourceLocation_): this;
        requestedItems(t: $Item_[]): this;
        secondaryPoi(t: $Block_[]): this;
        poiTypeTag(t: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$VillagerProfession>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $PoiTypeBuilder extends $BuilderBase<$PoiType> {
        block(r: $Block_): this;
        blocks(r: $BlockState_[]): this;
        maxTickets(i: number): this;
        validRange(i: number): this;
        registryKey: $ResourceKey<$Registry<$PoiType>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $CustomStatBuilder extends $BuilderBase<$ResourceLocation> {
        registryKey: $ResourceKey<$Registry<$ResourceLocation>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $SoundEventBuilder extends $BuilderBase<$SoundEvent> {
        sounds(gen: $Consumer_<$SoundsGenerator$SoundGen>): this;
        registryKey: $ResourceKey<$Registry<$SoundEvent>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(i: $ResourceLocation_);
    }
    export class $PaintingVariantBuilder extends $BuilderBase<$PaintingVariant> {
        size(width: number, height: number): this;
        assetId(assetId: $ResourceLocation_): this;
        registryKey: $ResourceKey<$Registry<$PaintingVariant>>;
        sourceLine: $SourceLine;
        id: $ResourceLocation;
        constructor(id: $ResourceLocation_);
    }
}
