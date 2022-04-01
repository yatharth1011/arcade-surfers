scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    tiles.placeOnTile(sprite, tiles.getTileLocation(5, 19))
    placed = 1
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 88) {
        mySprite.setPosition(40, mySprite.x)
        placed = 1
        scene.centerCameraAt(87.5, mySprite.y - 30)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 88) {
        mySprite.setPosition(135, mySprite.x)
        placed = 1
        scene.centerCameraAt(87.5, mySprite.y - 30)
    }
})
let placed = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Forest1`)
mySprite = sprites.create(assets.image`Sprite`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 23))
tiles.centerCameraOnTile(tiles.getTileLocation(5, 23))
mySprite.setVelocity(0, -50)
tiles.setWallAt(tiles.getTileLocation(5, 4), true)
placed = 0
game.onUpdate(function () {
    scene.centerCameraAt(87.5, mySprite.y - 30)
    if (placed == 1) {
        scene.centerCameraAt(87.5, mySprite.y - 30)
        mySprite.setVelocity(0, -50)
        placed = 0
    }
})
