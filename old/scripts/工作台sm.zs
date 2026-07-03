//craftingTable.addShapeless("",,[]);
//craftingTable.remove();
//craftingTable.addShaped("",, [[],[],[]]);
//.reuse()

//craftingTable.remove(<item:vs_eureka:balloon>);
craftingTable.remove(<item:mekanism:cardboard_box>);
craftingTable.addShaped("cardboard_box",<item:mekanism:cardboard_box>, [[<item:minecraft:paper>,<item:minecraft:paper>],[<item:minecraft:paper>,<item:minecraft:paper>]]);
craftingTable.addShaped("alloy_sword",<item:allthemodium:alloy_sword>, [[<item:allthemodium:unobtainium_vibranium_alloy_ingot>],[<item:allthemodium:unobtainium_vibranium_alloy_ingot>],[<item:allthemodium:allthemodium_rod>]]);
craftingTable.addShaped("alloy_axe",<item:allthemodium:alloy_axe>, [[<item:allthemodium:unobtainium_vibranium_alloy_ingot>,<item:allthemodium:unobtainium_vibranium_alloy_ingot>],[<item:allthemodium:unobtainium_vibranium_alloy_ingot>,<item:allthemodium:allthemodium_rod>],[<item:minecraft:air>,<item:allthemodium:allthemodium_rod>]]);
craftingTable.addShaped("alloy_pick",<item:allthemodium:alloy_pick>, [[<item:allthemodium:unobtainium_vibranium_alloy_ingot>,<item:allthemodium:unobtainium_vibranium_alloy_ingot>,<item:allthemodium:unobtainium_vibranium_alloy_ingot>],[<item:minecraft:air>,<item:allthemodium:allthemodium_rod>,<item:minecraft:air>],[<item:minecraft:air>,<item:allthemodium:allthemodium_rod>,<item:minecraft:air>]]);
craftingTable.addShaped("alloy_shovel",<item:allthemodium:alloy_shovel>,[[<item:allthemodium:unobtainium_vibranium_alloy_ingot>],[<item:allthemodium:allthemodium_rod>],[<item:allthemodium:allthemodium_rod>]]);

craftingTable.remove(<item:allthemodium:teleport_pad>);

//craftingTable.remove(<item:alexscaves:nuclear_bomb>);

craftingTable.remove(<item:create:andesite_alloy>);
craftingTable.addShapeless("andesite_alloy",<item:create:andesite_alloy>*9,[<item:create:andesite_alloy_block>]);
craftingTable.addShaped("andesite_alloy2",<item:create:andesite_alloy>*8, [[<item:minecraft:andesite>,<item:spore:claw_fragment>],[<item:spore:claw_fragment>,<item:minecraft:andesite>]]);

//craftingTable.addShapeless("stringmachine_1",<item:minecraft:string>*64,[<item:kubejs:stringmachine>.reuse(),<item:minecraft:string>]);//刷线机
//craftingTable.addShapeless("stringmachine_2",<item:minecraft:white_wool>*64,[<item:kubejs:stringmachine>.reuse(),<item:minecraft:white_wool>]);
//刷线机和刷石机
//craftingTable.addShapeless("stonemachine_1", <item:minecraft:cobblestone>*64, [<item:kubejs:stonemachine>.reuse(),<item:minecraft:cobblestone>]);
//craftingTable.addShapeless("stonemachine_2", <item:minecraft:stone>*64, [<item:kubejs:stonemachine>.reuse(),<item:minecraft:stone>]);
//craftingTable.addShapeless("stonemachine_3",<item:minecraft:deepslate>*64, [<item:kubejs:stonemachine>.reuse(),<item:minecraft:deepslate>]);
//craftingTable.addShapeless("zsjf1",<item:spore:amethyst_dust>,[<item:exdeorum:wooden_hammer>.reuse(),<item:minecraft:amethyst_shard>]);craftingTable.addShapeless("zsjf2",<item:spore:amethyst_dust>,[<item:exdeorum:stone_hammer>.reuse(),<item:minecraft:amethyst_shard>]);craftingTable.addShapeless("zsjf3",<item:spore:amethyst_dust>,[<item:exdeorum:golden_hammer>.reuse(),<item:minecraft:amethyst_shard>]);craftingTable.addShapeless("zsjf4",<item:spore:amethyst_dust>,[<item:exdeorum:iron_hammer>.reuse(),<item:minecraft:amethyst_shard>]);craftingTable.addShapeless("zsjf5",<item:spore:amethyst_dust>,[<item:exdeorum:diamond_hammer>.reuse(),<item:minecraft:amethyst_shard>]);craftingTable.addShapeless("zsjf6",<item:spore:amethyst_dust>,[<item:exdeorum:netherite_hammer>.reuse(),<item:minecraft:amethyst_shard>]);
//上面的是紫水晶粉

craftingTable.addShapeless("jhw",<item:spore:compound>,[<item:minecraft:sugar>,<item:spore:amethyst_dust>]);