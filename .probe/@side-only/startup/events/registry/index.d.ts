import { $SequencedAssemblyItemBuilder, $SandpaperItemBuilder } from "@package/dev/latvian/mods/kubejs/create/item";
import { $FluidType } from "@package/net/neoforged/neoforge/fluids";
import { $ParticleType } from "@package/net/minecraft/core/particles";
import { $Attribute } from "@package/net/minecraft/world/entity/ai/attributes";
import { $ArmorMaterialBuilder, $ItemBuilder } from "@package/dev/latvian/mods/kubejs/item";
import { $Chemical } from "@package/mekanism/api/chemical";
import { $SoundEvent } from "@package/net/minecraft/sounds";
import { $SlabBlockBuilder, $CropBlockBuilder, $PressurePlateBlockBuilder, $FenceGateBlockBuilder, $FenceBlockBuilder, $DoorBlockBuilder, $TrapdoorBlockBuilder, $BasicKubeBlock$Builder, $PillarBlockBuilder, $CarpetBlockBuilder, $StairBlockBuilder, $ButtonBlockBuilder, $FallingBlockBuilder, $WallBlockBuilder, $CardinalBlockBuilder } from "@package/dev/latvian/mods/kubejs/block/custom";
import { $CreativeTabBuilder } from "@package/dev/latvian/mods/kubejs/item/creativetab";
import { $CapacitorBuilder } from "@package/com/almostreliable/kubeio/builder";
import { $InfinityCellBuilder } from "@package/com/glodblock/github/extendedae/xmod/kjs";
import { $PoiType } from "@package/net/minecraft/world/entity/ai/village/poi";
import { $DetectorBlock$Builder } from "@package/dev/latvian/mods/kubejs/block";
import { $ParticleTypeBuilder, $CustomStatBuilder, $PoiTypeBuilder, $VillagerProfessionBuilder, $MobEffectBuilder, $PotionBuilder, $SoundEventBuilder, $VillagerTypeBuilder } from "@package/dev/latvian/mods/kubejs/misc";
import { $ArmorMaterial, $CreativeModeTab, $Item } from "@package/net/minecraft/world/item";
import { $Fluid } from "@package/net/minecraft/world/level/material";
import { $ThickFluidBuilder, $ThinFluidBuilder, $FluidBuilder, $FluidTypeBuilder } from "@package/dev/latvian/mods/kubejs/fluid";
import { $MobEffect } from "@package/net/minecraft/world/effect";
import { $VillagerType, $VillagerProfession } from "@package/net/minecraft/world/entity/npc";
import { $AttributeBuilder } from "@package/dev/latvian/mods/kubejs/entity";
import { $Potion } from "@package/net/minecraft/world/item/alchemy";
import { $RegistryKubeEvent } from "@package/dev/latvian/mods/kubejs/registry";
import { $ResourceLocation } from "@package/net/minecraft/resources";
import { $KubeChemicalBuilder$InfuseType, $KubeChemicalBuilder$Liquid, $KubeChemicalBuilder$Pigment, $KubeChemicalBuilder$CleanSlurry, $KubeChemicalBuilder$Default, $KubeChemicalBuilder$DirtySlurry } from "@package/dev/latvian/mods/kubejs/mekanism";
import { $Block } from "@package/net/minecraft/world/level/block";
import { $SmithingTemplateItemBuilder, $ArmorItemBuilder$Boots, $DiggerItemBuilder$Hoe, $DiggerItemBuilder$Shovel, $ArmorItemBuilder$Chestplate, $ArmorItemBuilder$AnimalArmor, $SwordItemBuilder, $DiggerItemBuilder$Axe, $ArmorItemBuilder$Helmet, $DiggerItemBuilder$Pickaxe, $ShearsItemBuilder, $ArmorItemBuilder$Leggings } from "@package/dev/latvian/mods/kubejs/item/custom";

declare module "@side-only/startup/events/registry" {
    class VillagerProfession extends $RegistryKubeEvent<$VillagerProfession> {
        create(name: string): $VillagerProfessionBuilder;
    }
    class Potion extends $RegistryKubeEvent<$Potion> {
        create(name: string): $PotionBuilder;
    }
    class SoundEvent extends $RegistryKubeEvent<$SoundEvent> {
        create(name: string): $SoundEventBuilder;
    }
    class Fluid extends $RegistryKubeEvent<$Fluid> {
        create(name: string): $FluidBuilder;
        create(name: string, type: "kubejs:thin"): $ThinFluidBuilder;
        create(name: string, type: "kubejs:thick"): $ThickFluidBuilder;
    }
    class MobEffect extends $RegistryKubeEvent<$MobEffect> {
        create(name: string): $MobEffectBuilder;
    }
    class VillagerType extends $RegistryKubeEvent<$VillagerType> {
        create(name: string): $VillagerTypeBuilder;
    }
    class PointOfInterestType extends $RegistryKubeEvent<$PoiType> {
        create(name: string): $PoiTypeBuilder;
    }
    class Attribute extends $RegistryKubeEvent<$Attribute> {
        create(name: string): $AttributeBuilder;
    }
    class MekanismChemical extends $RegistryKubeEvent<$Chemical> {
        create(name: string): $KubeChemicalBuilder$Default;
        create(name: string, type: "mekanism:liquid"): $KubeChemicalBuilder$Liquid;
        create(name: string, type: "mekanism:clean_slurry"): $KubeChemicalBuilder$CleanSlurry;
        create(name: string, type: "mekanism:dirty_slurry"): $KubeChemicalBuilder$DirtySlurry;
        create(name: string, type: "mekanism:infuse_type"): $KubeChemicalBuilder$InfuseType;
        create(name: string, type: "mekanism:pigment"): $KubeChemicalBuilder$Pigment;
    }
    class CreativeModeTab extends $RegistryKubeEvent<$CreativeModeTab> {
        create(name: string): $CreativeTabBuilder;
    }
    class NeoforgeFluidType extends $RegistryKubeEvent<$FluidType> {
        create(name: string): $FluidTypeBuilder;
    }
    class Block extends $RegistryKubeEvent<$Block> {
        create(name: string): $BasicKubeBlock$Builder;
        create(name: string, type: "kubejs:detector"): $DetectorBlock$Builder;
        create(name: string, type: "kubejs:slab"): $SlabBlockBuilder;
        create(name: string, type: "kubejs:stairs"): $StairBlockBuilder;
        create(name: string, type: "kubejs:fence"): $FenceBlockBuilder;
        create(name: string, type: "kubejs:wall"): $WallBlockBuilder;
        create(name: string, type: "kubejs:fence_gate"): $FenceGateBlockBuilder;
        create(name: string, type: "kubejs:pressure_plate"): $PressurePlateBlockBuilder;
        create(name: string, type: "kubejs:button"): $ButtonBlockBuilder;
        create(name: string, type: "kubejs:falling"): $FallingBlockBuilder;
        create(name: string, type: "kubejs:crop"): $CropBlockBuilder;
        create(name: string, type: "kubejs:cardinal"): $CardinalBlockBuilder;
        create(name: string, type: "kubejs:carpet"): $CarpetBlockBuilder;
        create(name: string, type: "kubejs:door"): $DoorBlockBuilder;
        create(name: string, type: "kubejs:trapdoor"): $TrapdoorBlockBuilder;
        create(name: string, type: "kubejs:pillar"): $PillarBlockBuilder;
    }
    class Item extends $RegistryKubeEvent<$Item> {
        create(name: string): $ItemBuilder;
        create(name: string, type: "kubejs:sword"): $SwordItemBuilder;
        create(name: string, type: "kubejs:pickaxe"): $DiggerItemBuilder$Pickaxe;
        create(name: string, type: "kubejs:axe"): $DiggerItemBuilder$Axe;
        create(name: string, type: "kubejs:shovel"): $DiggerItemBuilder$Shovel;
        create(name: string, type: "kubejs:hoe"): $DiggerItemBuilder$Hoe;
        create(name: string, type: "kubejs:shears"): $ShearsItemBuilder;
        create(name: string, type: "kubejs:helmet"): $ArmorItemBuilder$Helmet;
        create(name: string, type: "kubejs:chestplate"): $ArmorItemBuilder$Chestplate;
        create(name: string, type: "kubejs:leggings"): $ArmorItemBuilder$Leggings;
        create(name: string, type: "kubejs:boots"): $ArmorItemBuilder$Boots;
        create(name: string, type: "kubejs:animal_armor"): $ArmorItemBuilder$AnimalArmor;
        create(name: string, type: "kubejs:smithing_template"): $SmithingTemplateItemBuilder;
        create(name: string, type: "extendedae:custom_infinity_cell"): $InfinityCellBuilder;
        create(name: string, type: "enderio:capacitor"): $CapacitorBuilder;
        create(name: string, type: "create:sequenced_assembly"): $SequencedAssemblyItemBuilder;
        create(name: string, type: "create:sandpaper"): $SandpaperItemBuilder;
    }
    class ParticleType extends $RegistryKubeEvent<$ParticleType<any>> {
        create(name: string): $ParticleTypeBuilder;
    }
    class CustomStat extends $RegistryKubeEvent<$ResourceLocation> {
        create(name: string): $CustomStatBuilder;
    }
    class ArmorMaterial extends $RegistryKubeEvent<$ArmorMaterial> {
        create(name: string): $ArmorMaterialBuilder;
    }
}
