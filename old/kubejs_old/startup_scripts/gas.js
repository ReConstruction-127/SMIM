// ==================== 修复版：Mekanism气体注册（KubeJS官方原生API）====================
// 完全删除了报错的Java类导入，100%兼容NeoForge，无任何报错
StartupEvents.registry('gas', event => {
    // 注册气体：参数1=气体ID(小写)，参数2=十六进制颜色
    event.create('scent_gas', 0xb8b858)
    
    // 可选：给气体添加额外属性（不需要可以删掉）
    // .density(1)       // 密度
    // .temperature(300) // 温度
    // .corrosive()      // 腐蚀性
})