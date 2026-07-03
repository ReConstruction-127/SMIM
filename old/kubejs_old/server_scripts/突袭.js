BlockEvents.placed(function(event) {
    // 仅当放置指定钻井且有玩家时执行逻辑
    if (event.block && event.block.id === 'createoreexcavation:drilling_machine' && event.player) {
        event.player.tell("准备好...");
        event.player.tell("§c警告：放置矿物钻井会引发矿井突袭，祝你好运！§r");
        event.player.tell("§c警告：//////侦测到真菌感染体//////§r");
        const player = event.player;
        const level = event.level;
        
        // ========== 原有功能：生成腐建心智（下落方块）【x/z无加减，保留y+1600】 ==========
        const fallingBlock = level.createEntity('minecraft:falling_block');
        if (fallingBlock) {
            fallingBlock.setNbt({
                BlockState: { Name: "spore:hive_spawn" },
                Time: 1,
                DropItem: 0
            });
            // x/z无加减，仅保留player.x、player.z，y轴保留+1600
            fallingBlock.setPosition(player.x+1, player.y + 160, player.z-1);
            fallingBlock.spawn();
        }
        
        // ========== 20个 spore:scent（x/z无任何加减，全部为纯player.x、player.z） ==========
        //player.tell(`§a开始生成20个 spore:scent...`);
        
        // 第1个
        const vervaEntity1 = level.createEntity('spore:scent');
        if (vervaEntity1) {
            vervaEntity1.setPosition(player.x, player.y + 15, player.z);
            vervaEntity1.spawn();
        }
        
        // 第2个
        const vervaEntity2 = level.createEntity('spore:scent');
        if (vervaEntity2) {
            vervaEntity2.setPosition(player.x, player.y + 15, player.z);
            vervaEntity2.spawn();
        }
        
        // 第3个
        const vervaEntity3 = level.createEntity('spore:scent');
        if (vervaEntity3) {
            vervaEntity3.setPosition(player.x, player.y + 15, player.z); // 移除z+1，改为纯player.z
            vervaEntity3.spawn();
        }
        
        // 第4个
        const vervaEntity4 = level.createEntity('spore:scent');
        if (vervaEntity4) {
            vervaEntity4.setPosition(player.x, player.y + 15, player.z);
            vervaEntity4.spawn();
        }
        
        // 第5个
        const vervaEntity5 = level.createEntity('spore:scent');
        if (vervaEntity5) {
            vervaEntity5.setPosition(player.x, player.y + 15, player.z); // 移除z+1，改为纯player.z
            vervaEntity5.spawn();
        }
        
        // 第6个
        const vervaEntity6 = level.createEntity('spore:scent');
        if (vervaEntity6) {
            vervaEntity6.setPosition(player.x, player.y + 15, player.z);
            vervaEntity6.spawn();
        }
        
        // 第7个
        const vervaEntity7 = level.createEntity('spore:scent');
        if (vervaEntity7) {
            vervaEntity7.setPosition(player.x, player.y + 15, player.z); // 移除z+1，改为纯player.z
            vervaEntity7.spawn();
        }
        
        // 第8个
        const vervaEntity8 = level.createEntity('spore:scent');
        if (vervaEntity8) {
            vervaEntity8.setPosition(player.x, player.y + 15, player.z);
            vervaEntity8.spawn();
        }
        
        // 第9个
        const vervaEntity9 = level.createEntity('spore:scent');
        if (vervaEntity9) {
            vervaEntity9.setPosition(player.x, player.y + 16, player.z); // 移除x+1，改为纯player.x
            vervaEntity9.spawn();
        }
        
        // 第10个
        const vervaEntity10 = level.createEntity('spore:scent');
        if (vervaEntity10) {
            vervaEntity10.setPosition(player.x, player.y + 16, player.z); // 移除x+1，改为纯player.x
            vervaEntity10.spawn();
        }
        
        // 第11个
        const vervaEntity11 = level.createEntity('spore:scent');
        if (vervaEntity11) {
            vervaEntity11.setPosition(player.x, player.y + 16, player.z);
            vervaEntity11.spawn();
        }
        
        // 第12个
        const vervaEntity12 = level.createEntity('spore:scent');
        if (vervaEntity12) {
            vervaEntity12.setPosition(player.x, player.y + 16, player.z);
            vervaEntity12.spawn();
        }
        
        // 第13个
        const vervaEntity13 = level.createEntity('spore:scent');
        if (vervaEntity13) {
            vervaEntity13.setPosition(player.x, player.y + 15, player.z); // 移除x+3，改为纯player.x
            vervaEntity13.spawn();
        }
        
        // 第14个
        const vervaEntity14 = level.createEntity('spore:scent');
        if (vervaEntity14) {
            vervaEntity14.setPosition(player.x, player.y + 15, player.z); // 移除x-3，改为纯player.x
            vervaEntity14.spawn();
        }
        
        // 第15个
        const vervaEntity15 = level.createEntity('spore:scent');
        if (vervaEntity15) {
            vervaEntity15.setPosition(player.x, player.y + 15, player.z); // 移除z+3，改为纯player.z
            vervaEntity15.spawn();
        }
        
        // 第16个
        const vervaEntity16 = level.createEntity('spore:scent');
        if (vervaEntity16) {
            vervaEntity16.setPosition(player.x, player.y + 15, player.z); // 移除z-3，改为纯player.z
            vervaEntity16.spawn();
        }
        
        // 第17个
        const vervaEntity17 = level.createEntity('spore:scent');
        if (vervaEntity17) {
            vervaEntity17.setPosition(player.x, player.y + 16, player.z);
            vervaEntity17.spawn();
        }
        
        // 第18个
        const vervaEntity18 = level.createEntity('spore:scent');
        if (vervaEntity18) {
            vervaEntity18.setPosition(player.x, player.y + 16, player.z);
            vervaEntity18.spawn();
        }
        
        // 第19个
        const vervaEntity19 = level.createEntity('spore:scent');
        if (vervaEntity19) {
            vervaEntity19.setPosition(player.x, player.y + 16, player.z);
            vervaEntity19.spawn();
        }
    }
});