blocks.onBlockPlaced(GRASS, function () {
    castles.buildCastleWall(
    3,
    21,
    6,
    COBBLESTONE
    )
})
loops.forever(function () {
    agent.teleportToPlayer()
})
player.teleport(pos(0, 0, 0))
