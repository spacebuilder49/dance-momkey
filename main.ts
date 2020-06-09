namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b 
`
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
    music.setVolume(10)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
info.onLifeZero(function () {
    game.over(true, effects.confetti)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)
effects.starField.startScreenEffect()
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030302020202020202020202`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.vehicle.roadVertical,myTiles.tile1,myTiles.tile2],
            TileScale.Sixteen
        ))
steve = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f e e e e e f . . . . . . 
. . f d d d d e e e f . . . . . 
. c d f d d f d e e f f . . . . 
. c d f d d f d e e d d f . . . 
c d e e d d d d e e b d c . . . 
c d d d d c d d e e b d c . . . 
c c c c c d d e e e f c . . . . 
. f d d d d e e e f f . . . . . 
. . f f f f f e e e e f . . . . 
. . . . f f e e e e e e f . f f 
. . . f e e f e e f e e f . e f 
. . f e e f e e f e e e f . e f 
. f b d f d b f b b f e f f e f 
. f d d f d d f d d b e f f f f 
. . f f f f f f f f f f f f f . 
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(10)
let speed = 40
game.onUpdateInterval(2000, function () {
    speed += 1
})
game.onUpdateInterval(500, function () {
    lane = Math.randomRange(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 6 
6 6 1 6 1 6 6 6 6 6 6 6 6 6 6 6 
6 1 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
1 6 6 6 1 6 6 6 6 6 6 6 1 6 6 6 
6 1 6 6 1 1 1 1 1 1 1 1 1 6 6 6 
6 6 1 6 1 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 1 1 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 1 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 1 6 6 6 1 6 6 6 6 6 6 
6 6 6 6 1 6 6 6 6 6 1 6 6 6 6 6 
6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Projectile)
        up.setVelocity(50, 50)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 1 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 1 1 1 1 1 1 1 1 1 6 6 6 6 
6 6 6 6 1 6 6 6 6 6 1 6 6 6 6 6 
6 6 6 6 6 1 6 6 6 1 6 6 6 6 6 6 
6 6 6 6 6 6 1 6 1 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 1 6 6 6 6 6 6 6 6 
`, SpriteKind.Projectile)
        down.setVelocity(50, 50)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
6 6 6 1 1 1 1 1 1 1 1 1 6 6 1 6 
6 6 6 1 6 6 6 6 6 6 6 1 6 6 6 1 
6 6 6 1 1 1 1 1 1 1 1 1 6 6 1 6 
6 6 6 6 6 6 6 6 6 6 6 1 6 1 6 6 
6 6 6 6 6 6 6 6 6 6 6 1 1 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 1 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
`, SpriteKind.Projectile)
        right.setVelocity(50, 50)
        right.setPosition(130, 8)
    }
})
forever(function () {
    music.playMelody("C5 B A E C B F C5 ", 120)
})
