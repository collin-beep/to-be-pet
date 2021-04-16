namespace SpriteKind {
    export const coin = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    game.over(false, effects.melt)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    game.over(true, effects.hearts)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (dog.vy == 0) {
        dog.vy = -100
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.coin, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
})
let cat: Sprite = null
let coin: Sprite = null
let dog: Sprite = null
scene.setBackgroundColor(9)
dog = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    .....................f..........
    ....................fef.........
    ....................feef........
    ...................ffeef........
    fff................feeeefff.....
    feff..............feefeee33f....
    feeff.......ffffffeeeefeeeeeff..
    ffeeff..fffffeeeeeeeeeeffffffef.
    ..ffeffffeeeeeeeeeeeeeeeeeeeeef.
    ...feeeeeeeeeefffffffffffffffff.
    ...fffeeefffffff..ff..f.........
    .....fffff.ff.ff..ff..f.........
    ...........ff.ff..ff..f.........
    ...........ff.ff..ff..f.........
    ...........ff.ff..ff..f.........
    ...........ff.ff..ff..f.........
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
controller.moveSprite(dog, 100, 0)
tiles.setTilemap(tilemap`level1`)
dog.ay = 200
scene.cameraFollowSprite(dog)
for (let value of tiles.getTilesByType(assets.tile`myTile2`)) {
    coin = sprites.create(img`
        . . . . 5 e e e e e e . . . . . 
        . . e e 5 5 5 5 5 5 5 5 e . . . 
        . e 5 5 5 5 5 5 2 2 2 5 e e . . 
        . e 2 2 2 2 5 2 2 2 2 5 5 5 . . 
        e 5 2 2 2 2 2 2 2 2 2 5 5 5 5 . 
        e 5 2 2 2 2 2 2 2 2 2 5 5 5 e . 
        e 5 2 2 2 2 2 2 2 2 2 5 5 5 e . 
        e 5 2 2 2 2 2 2 2 2 2 5 5 5 e . 
        e 5 5 2 2 2 2 2 2 2 2 5 5 5 e . 
        e 5 5 2 2 2 2 2 2 5 5 5 5 5 e . 
        e 5 5 2 2 2 2 2 2 5 5 5 5 5 5 . 
        . 5 5 5 2 2 2 2 5 5 5 5 5 5 . . 
        . e 5 5 5 5 5 5 5 5 5 5 e e . . 
        . . e e 5 5 5 5 5 5 5 5 e . . . 
        . . . . e e e e e e 5 . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.coin)
    tiles.placeOnTile(coin, value)
    tiles.setTileAt(value, assets.tile`transparency16`)
    animation.runImageAnimation(
    coin,
    [img`
        . . . . e e e e e e e . . . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . e 5 5 5 2 2 5 5 5 5 e . . . 
        . e 5 5 5 2 2 2 2 5 5 5 5 e . . 
        . e 5 5 5 2 2 2 2 2 2 2 5 e . . 
        . e 5 5 2 2 2 2 2 2 2 2 5 e . . 
        . e 5 2 2 2 2 2 2 2 2 2 5 e . . 
        . e 5 5 2 2 2 2 2 2 2 5 5 e . . 
        . e 5 5 2 2 2 2 2 2 5 5 5 e . . 
        . e 5 5 5 2 2 2 2 2 5 5 5 e . . 
        . . e 5 5 5 5 2 2 5 5 5 e . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . . e 5 5 5 5 e . . . . . 
        . . . . e 5 5 2 5 5 5 e . . . . 
        . . . e 5 5 5 2 2 5 5 5 e . . . 
        . . . e 5 5 5 2 2 2 2 5 e . . . 
        . . . e 5 5 2 2 2 2 2 5 e . . . 
        . . . e 5 2 2 2 2 2 2 5 e . . . 
        . . . e 5 5 2 2 2 2 5 5 e . . . 
        . . . e 5 5 2 2 2 5 5 5 e . . . 
        . . . e 5 5 5 2 2 5 5 5 e . . . 
        . . . . e 5 5 2 2 5 5 e . . . . 
        . . . . . e 5 5 5 5 e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . e 5 e . . . . . . . . . 
        . . . e 5 5 5 e . . . . . . . . 
        . . . e 5 5 5 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 5 5 e . . . . . . . 
        . . . e 5 5 5 5 e . . . . . . . 
        . . . . e 5 5 5 e . . . . . . . 
        . . . . . e 5 e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e e e . . . . . . . 
        . . . . . . e e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . e . . . . . . . . 
        . . . . . . . e e . . . . . . . 
        . . . . . . e 5 5 e . . . . . . 
        . . . . . . e 5 5 5 e . . . . . 
        . . . . . e e 5 5 5 e . . . . . 
        . . . . e e 5 2 5 e . . . . . . 
        . . . . e 5 2 2 e e . . . . . . 
        . . . . e 2 2 2 e . . . . . . . 
        . . . . e 5 5 5 e . . . . . . . 
        . . . . e 5 5 e e . . . . . . . 
        . . . . e 5 e e . . . . . . . . 
        . . . . e 5 e . . . . . . . . . 
        . . . . e e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e . . . . . . . . . . 
        . . . . . e . . . . . . . . . . 
        . . . . e 5 e . . . . . . . . . 
        . . . e 5 5 5 e . . . . . . . . 
        . . . e 5 5 5 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 2 5 e . . . . . . . 
        . . . e 5 2 5 5 e . . . . . . . 
        . . . e 5 5 5 5 e . . . . . . . 
        . . . . e 5 5 5 e . . . . . . . 
        . . . . . e 5 e . . . . . . . . 
        . . . . . e e e . . . . . . . . 
        . . . . . e e . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . e e e e e . . . . . . 
        . . . . . e 5 5 5 5 e . . . . . 
        . . . . e 5 5 2 5 5 5 e . . . . 
        . . . e 5 5 5 2 2 5 5 5 e . . . 
        . . . e 5 5 5 2 2 2 2 5 e . . . 
        . . . e 5 5 2 2 2 2 2 5 e . . . 
        . . . e 5 2 2 2 2 2 2 5 e . . . 
        . . . e 5 5 2 2 2 2 5 5 e . . . 
        . . . e 5 5 2 2 2 5 5 5 e . . . 
        . . . e 5 5 5 2 2 5 5 5 e . . . 
        . . . . e 5 5 2 2 5 5 e . . . . 
        . . . . . e 5 5 5 5 e . . . . . 
        . . . . . e e e e e . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . e e e e e e e . . . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . e 5 5 5 2 2 5 5 5 5 e . . . 
        . e 5 5 5 2 2 2 2 5 5 5 5 e . . 
        . e 5 5 5 2 2 2 2 2 2 2 5 e . . 
        . e 5 5 2 2 2 2 2 2 2 2 5 e . . 
        . e 5 2 2 2 2 2 2 2 2 2 5 e . . 
        . e 5 5 2 2 2 2 2 2 2 5 5 e . . 
        . e 5 5 2 2 2 2 2 2 5 5 5 e . . 
        . e 5 5 5 2 2 2 2 2 5 5 5 e . . 
        . . e 5 5 5 5 2 2 5 5 5 e . . . 
        . . . e 5 5 5 5 5 5 5 e . . . . 
        . . . . e e e e e e e . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
}
for (let value of tiles.getTilesByType(assets.tile`myTile3`)) {
    cat = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f . . . . . . . . . . 
        . f 2 2 5 f . . . . . . . . . . 
        f 5 5 2 5 f . f f f f f f f f . 
        f 5 5 5 f f f f f f f f . . f f 
        f f f f f . . f f f . f . . f f 
        . . . . . f f f . f . f . . . . 
        . . . . . f . . . f . . f . . . 
        . . . . f . . . f . . . f f . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    tiles.placeOnTile(dog, value)
}
