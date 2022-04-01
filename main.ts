namespace SpriteKind {
    export const Coin = SpriteKind.create()
}
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (mySprite.x == 135) {
        sprite.setPosition(135, sprite.y)
    } else if (mySprite.x == 88) {
        sprite.setPosition(88, mySprite.y)
    } else if (mySprite.x == 40) {
        sprite.setPosition(40, mySprite.y)
    } else {
    	
    }
    tiles.placeOnTile(sprite, tiles.getTileLocation(mySprite.tilemapLocation().column, 19))
    placed = 1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeScoreBy(100)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 88) {
        mySprite.setPosition(40, mySprite.y)
        placed = 1
        scene.centerCameraAt(88, mySprite.y - 30)
    }
    if (mySprite.x > 88) {
        mySprite.setPosition(88, mySprite.y)
        placed = 1
        scene.centerCameraAt(88, mySprite.y - 30)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.x == 88) {
        mySprite.setPosition(135, mySprite.y)
        placed = 1
        scene.centerCameraAt(88, mySprite.y - 30)
    }
    if (mySprite.x < 88) {
        mySprite.setPosition(88, mySprite.y)
        placed = 1
        scene.centerCameraAt(88, mySprite.y - 30)
    }
})
let coin: Sprite = null
let placed = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Forest1`)
mySprite = sprites.create(assets.image`Sprite`, SpriteKind.Player)
tiles.placeOnTile(mySprite, tiles.getTileLocation(5, 23))
tiles.centerCameraOnTile(tiles.getTileLocation(5, 23))
mySprite.setVelocity(0, -50)
tiles.setWallAt(tiles.getTileLocation(2, 4), true)
tiles.setWallAt(tiles.getTileLocation(5, 4), true)
tiles.setWallAt(tiles.getTileLocation(8, 4), true)
let colList = [2, 5, 8]
placed = 0
let xlist = [40, 88, 135]
let list: number[] = []
for (let index = 0; index <= 9; index++) {
    list.push(index)
}
game.onUpdate(function () {
    scene.centerCameraAt(88, mySprite.y - 30)
    if (placed == 1) {
        scene.centerCameraAt(88, mySprite.y - 30)
        mySprite.setVelocity(0, -50)
        placed = 0
    }
})
game.onUpdateInterval(500, function () {
    coin = sprites.create(assets.image`Coin`, SpriteKind.Coin)
    coin.x = xlist._pickRandom()
    coin.y = 160
    coin.setVelocity(0, 0)
})
