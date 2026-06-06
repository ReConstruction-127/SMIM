//craftingTable.addShapeless("",,[]);
//craftingTable.remove();
//craftingTable.addShaped("",, [[],[],[]]);
//.reuse()

craftingTable.addShaped("stone_hammer",<item:ue_addons:stone_hammer>, [[<item:minecraft:air>,<tag:item:c:cobblestones>,<item:minecraft:flint>],[<item:minecraft:air>,<item:minecraft:stick>,<tag:item:c:cobblestones>],[<item:minecraft:stick>,<item:minecraft:air>,<item:minecraft:air>]]);
craftingTable.addShapeless("incomplete_wooden_mechanism",<item:ue_addons:incomplete_wooden_mechanism>,[<item:ue_addons:stone_hammer>.reuse(),<tag:item:c:stripped_logs>]);
craftingTable.addShaped("wooden_mechanism",<item:ue_addons:wooden_mechanism>,[[<item:minecraft:stick>,<tag:item:minecraft:planks>,<item:minecraft:stick>],[<tag:item:minecraft:planks>,<item:ue_addons:incomplete_wooden_mechanism>,<tag:item:minecraft:planks>],[<item:minecraft:stick>,<tag:item:minecraft:planks>,<item:minecraft:stick>]]);
craftingTable.remove(<item:create:cogwheel>);
craftingTable.remove(<item:create:large_cogwheel>);
craftingTable.remove(<item:minecraft:piston>);
craftingTable.addShapeless("cogwheel",<item:create:cogwheel>*4,[<item:create:shaft>,<item:create:shaft>,<item:create:shaft>,<item:create:shaft>,<item:ue_addons:wooden_mechanism>]);
craftingTable.addShapeless("cogwheel2",<item:create:large_cogwheel>*2,[,<item:create:shaft>,<item:create:shaft>,<item:ue_addons:wooden_mechanism>]);
craftingTable.addShapeless("cogwheel3",<item:create:large_cogwheel>*4,[<item:create:cogwheel>,<item:create:cogwheel>,<item:create:cogwheel>,<item:create:cogwheel>,<item:ue_addons:wooden_mechanism>]);
craftingTable.addShaped("mechanismcast",<item:ue_addons:mechanismcast>,
[[<item:minecraft:air>,<item:ue_addons:stone_mechanism>,<item:minecraft:air>],[<item:ue_addons:stone_mechanism>,<item:ue_addons:wooden_mechanism>,<item:ue_addons:stone_mechanism>],[<item:minecraft:air>,<item:ue_addons:stone_mechanism>,<item:minecraft:air>]]);
craftingTable.remove();
craftingTable.remove();