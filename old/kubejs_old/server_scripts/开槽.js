ServerEvents.recipes(event => {
    event.custom({
        "type": "apotheosis:add_sockets",
        "conditions": [
            {
                "type": "apotheosis:module",
                "module": "adventure"
            }
        ],
        "group": "something",
        "input": {
            "item": "create_sa:steam_engine"
        },
        "max_sockets": 4 // 配方开出的最大镶槽数，最高16
    })
});