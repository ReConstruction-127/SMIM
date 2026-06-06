ServerEvents.recipes(event => {
    // 定义过渡物品（和JSON完全一致）
    const midItem = "ue_addons:incomplete_living_mechanism"

    // 序列组装配方 1:1 复刻JSON
    event.recipes.create.sequenced_assembly(
        // 输出：仅主产物，无废料（和JSON一致）
        CreateItem.of("ue_addons:living_mechanism"),
        // 输入原料：活体核心
        "spore:living_core",
        [
            // 1. 灌装 - 胆汁 50 毫桶
            event.recipes.create.filling(midItem, [midItem, Fluid.of("spore:bile", 50)]),
            // 2. 部署 - 变异纤维
            event.recipes.create.deploying(midItem, [midItem, "spore:mutated_fiber"]),
            // 3. 冲压
            event.recipes.create.pressing(midItem, midItem),
            // 4. 部署 - 肌腱
            event.recipes.create.deploying(midItem, [midItem, "spore:tendons"]),
            // 5. 北极星 雕刻工序 (第三方模组)
            event.custom({
                type: "northstar:engraving",
                processingTime: 100,
                ingredients: [{ item: midItem }],
                results: [{ id: midItem }]
            }),
            // 6. 部署 - 神经
            event.recipes.create.deploying(midItem, [midItem, "spore:nerves"]),
            // 7. 新纪元 充能工序 (第三方模组)
            event.custom({
                type: "create_new_age:energising",
                energy_needed: 1000,
                ingredients: [{ item: midItem }],
                results: [{ id: midItem }]
            })
        ]
    )
    .transitionalItem(midItem) // 绑定过渡物品
    .loops(3) // 循环次数 = 3（和JSON一致）
})


ServerEvents.recipes(event => {
    // 定义过渡半成品（固定统一）
    const midItem = "ue_addons:incomplete_elite_mekanism_mechanism"

    // 精英机械元件 序列组装配方
    event.recipes.create.sequenced_assembly(
        // 输出产物（单成品，无废料）
        CreateItem.of("ue_addons:elite_mekanism_mechanism"),
        // 初始输入原料
        "ue_addons:advanced_mekanism_mechanism",
        // 工序序列（严格按照JSON顺序）
        [
            // 1. 部署：精炼荧石锭
            event.recipes.create.deploying(midItem, [midItem, "mekanism:ingot_refined_glowstone"]),
            // 2. 部署：精英控制电路
            event.recipes.create.deploying(midItem, [midItem, "mekanism:elite_control_circuit"]),
            // 3. 部署：强化合金
            event.recipes.create.deploying(midItem, [midItem, "mekanism:alloy_reinforced"])
        ]
    )
    .transitionalItem("ue_addons:advanced_mekanism_mechanism") // 绑定过渡物品
    .loops(1) // 循环次数：1次
})

ServerEvents.recipes(event => {
    // 定义过渡物品（与JSON完全一致）
    const midItem2 = "mekanism:alloy_infused"

    // 强化合金 序列组装配方
    event.recipes.create.sequenced_assembly(
        // 输出产物
        CreateItem.of("mekanism:alloy_reinforced"),
        // 初始输入原料
        "minecraft:redstone",
        // 工序序列（严格按照JSON顺序）
        [
            // 1. 冲压
            event.recipes.create.pressing(midItem2, midItem2),
            // 2. 灌装 50mb 果汁
            event.recipes.create.filling(midItem2, [midItem2, Fluid.of("ue_addons:juice", 50)]),
            // 3. 部署 水果标签
            event.recipes.create.deploying(midItem2, [midItem2, "#c:foods/fruit"]),
            // 4. 北极星 雕刻工序
            event.custom({
                type: "northstar:engraving",
                processingTime: 100,
                ingredients: [{ item: midItem2 }],
                results: [{ item: midItem2 }]
            }),
            // 5. 新纪元 充能工序
            event.custom({
                type: "create_new_age:energising",
                energy_needed: 1000,
                ingredients: [{ item: midItem2 }],
                results: [{ item: midItem2 }]
            })
        ]
    )
    .transitionalItem(midItem2) // 绑定过渡物品
    .loops(5) // 循环次数 5 次
})

ServerEvents.recipes(event => {
    // 定义过渡物品（与JSON完全一致）
    const midItem = "ue_addons:incomplete_iron_mechanism"

    // 铁制机械元件 序列组装配方
    event.recipes.create.sequenced_assembly(
        // 输出产物
        CreateItem.of("ue_addons:iron_mechanism"),
        // 初始输入原料
        "ue_addons:stone_mechanism",
        // 工序序列（严格按照JSON顺序）
        [
            // 1. 灌装 90mb 熔融铁
            event.recipes.create.filling(midItem, [midItem, Fluid.of("tconstruct:molten_iron", 90)]),
            // 2. 冲压
            event.recipes.create.pressing(midItem, midItem),
            // 3. 灌装 90mb 水
            event.recipes.create.filling(midItem, [midItem, Fluid.of("minecraft:water", 90)])
        ]
    )
    .transitionalItem(midItem) // 绑定过渡物品
    .loops(1) // 循环次数 1 次
})