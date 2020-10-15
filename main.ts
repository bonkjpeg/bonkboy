namespace SpriteKind {
    export const area = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (direction == 2) {
        projectile = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, mySprite, 100, 0)
    }
    if (direction == 0) {
        projectile2 = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, mySprite, -100, 0)
    }
    if (direction == 1) {
        projectile3 = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, mySprite, 0, -100)
    }
    if (direction == 3) {
        projectile4 = sprites.createProjectileFromSprite(img`
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
            `, mySprite, 0, 100)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    if (true) {
        enemy_spawn = randint(0, 3)
        if (no_no_square != 0 && enemy_spawn == 0) {
            mySprite2.setPosition(4, 107)
        }
        if (no_no_square != 1 && enemy_spawn == 1) {
            mySprite2.setPosition(146, 105)
        }
        if (no_no_square != 2 && enemy_spawn == 2) {
            mySprite2.setPosition(6, 5)
        }
        if (no_no_square != 3 && enemy_spawn == 3) {
            mySprite2.setPosition(144, 5)
        }
    }
})
let no_no_square = 0
let enemy_spawn = 0
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let direction = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let enemys_killed = 0
let mySprite3 = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.area)
let mySprite4 = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.area)
let mySprite5 = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.area)
let mySprite6 = sprites.create(img`
    1111111111111111111111111111111111111111111111111111111111111111
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1
    1111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.area)
mySprite3.setPosition(136, 97)
mySprite4.setPosition(20, 93)
mySprite5.setPosition(21, 19)
mySprite6.setPosition(138, 15)
mySprite2 = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    a a a a a a a a a a a a a a a a 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite2.setPosition(10, 95)
mySprite2.follow(mySprite, 50)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
tiles.loadMap(tiles.createMap(tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
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
    `, [myTiles.transparency16], TileScale.Sixteen)))
let enemy_quota = 10
forever(function () {
    if (!(mySprite.overlapsWith(mySprite4)) || (!(mySprite.overlapsWith(mySprite5)) || !(mySprite.overlapsWith(mySprite5))) || !(mySprite.overlapsWith(mySprite3))) {
        no_no_square = 4
    }
    if (mySprite.overlapsWith(mySprite3)) {
        no_no_square = 1
    }
    if (mySprite.overlapsWith(mySprite4)) {
        no_no_square = 0
    }
    if (mySprite.overlapsWith(mySprite5)) {
        no_no_square = 2
    }
    if (mySprite.overlapsWith(mySprite6)) {
        no_no_square = 3
    }
})
