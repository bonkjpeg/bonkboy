namespace SpriteKind {
    export const area = SpriteKind.create()
    export const gun = SpriteKind.create()
    export const pickup = SpriteKind.create()
    export const enemy2 = SpriteKind.create()
    export const node = SpriteKind.create()
    export const star = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 1
    mySprite.setImage(img`
        ......fff.......
        ......fbf.......
        ......fbf.......
        ......fbf.......
        ....fffeffff....
        ...f11feeef1f...
        ..f111fffff11f..
        .f111111111111f.
        .f11ff1111ff11f.
        .f11ff1111ff11f.
        .f11ff1111ff11f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        ..f111ffff111f..
        ...fff....fff...
        `)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (weapon == 0) {
        if (direction == 2) {
            projectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . b b . . . . . . . b . . . . . 
                b b b b b b . . b b . b b 5 5 5 
                b . . b b b b b b . b b b 5 5 5 
                b b b . b b b . b b b . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, 400, 0)
        }
        if (direction == 0) {
            projectile2 = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . b b . . b b . . . . b 
                5 5 5 b b b b b b b b b b b b b 
                5 5 5 b b . . b b b b b b . b b 
                . . . . . b b b . . . b b b b . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, mySprite, -400, 0)
        }
        if (direction == 1) {
            projectile3 = sprites.createProjectileFromSprite(img`
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . b . . b . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . . b . . . . . . . 
                . . . . . . b . b . . . . . . . 
                . . . . . . b . b . . . . . . . 
                . . . . . . b . b . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b . . . . . . . . 
                . . . . . . . b b . . . . . . . 
                `, mySprite, 0, -400)
        }
        if (direction == 3) {
            projectile4 = sprites.createProjectileFromSprite(img`
                . . . . . . b b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . b b b . . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . b b . b . . . . . . 
                . . . . . . . b b b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . b b b b . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . b . b b . . . . . . 
                . . . . . . . b b . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                . . . . . . . 5 5 . . . . . . . 
                `, mySprite, 0, 400)
        }
    }
    if (weapon == 1) {
        if (direction == 2) {
            projectile5 = sprites.createProjectileFromSprite(img`
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                `, mySprite, 25, 0)
        }
        if (direction == 0) {
            projectile5 = sprites.createProjectileFromSprite(img`
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                `, mySprite, -25, 0)
        }
        if (direction == 1) {
            projectile5 = sprites.createProjectileFromSprite(img`
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                `, mySprite, 0, -25)
        }
        if (direction == 3) {
            projectile5 = sprites.createProjectileFromSprite(img`
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                3333333333333333333333333
                `, mySprite, 0, 25)
        }
    }
    if (weapon == 2) {
        if (!(mySprite.overlapsWith(mySprite9))) {
            star_out = 2
            mySprite9 = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . 1 1 1 . . 1 1 1 . . . . 
                . . . . . 1 1 . . 1 1 . . . . . 
                . . . . . . 1 1 1 1 . . . . . . 
                . . . . . . . 1 1 . . . . . . . 
                . . . . . . . 1 . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            mySprite9.follow(mySprite2, 100)
            timer.after(500, function () {
                mySprite9.follow(mySprite2, 0)
                mySprite9.setFlag(SpriteFlag.Invisible, true)
                timer.after(25, function () {
                    mySprite9.follow(mySprite, 500)
                })
            })
        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 0
    mySprite.setImage(img`
        ....................
        ........ffffffff....
        .......f11111111f...
        ......f1111111111f..
        .....f111111111111f.
        .....f111111111111f.
        .....f11ff1111ff11f.
        .....f11ff1111ff11f.
        fffffff1ff1111ff11f.
        fbbbeef11111111111f.
        fffffef11111111111f.
        ....fef11111111111f.
        ....fff11111111111f.
        .....f111111111111f.
        ......f111ffff111f..
        .......fff....fff...
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 2
    mySprite.setImage(img`
        ....................
        ....ffffffff........
        ...f11111111f.......
        ..f1111111111f......
        .f111111111111f.....
        .f11ff1111ff11f.....
        .f11ff1111ff11f.....
        .f11ff1111ff1fffffff
        .f11111111111feebbbf
        .f11111111111fefffff
        .f11111111111fef....
        .f11111111111fff....
        .f111111111111f.....
        .f111111111111f.....
        ..f111ffff111f......
        ...fff....fff.......
        `)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
sprites.onOverlap(SpriteKind.enemy2, SpriteKind.Player, function (sprite, otherSprite) {
    game.over(false)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    direction = 3
    mySprite.setImage(img`
        ................
        ....ffffffff....
        ...f11111111f...
        ..f1111111111f..
        .f111111111111f.
        .f11ff1111ff11f.
        .f11ff1111ff11f.
        .f11ff1111ff11f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f111111111111f.
        .f1111fffff111f.
        .f1111feeef111f.
        ..f111fefff11f..
        ...ffffbf.fff...
        ......fbf.......
        ......fbf.......
        ......fff.......
        `)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (true) {
        if (!(enemys_killed + 1 == enemy_quota)) {
            enemys_killed += 1
        } else {
            game.splash("new wave", subtext)
            enemy_quota = wave * 10
            wave += 1
            enemys_killed = 0
        }
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
    }
})
let no_no_square = 0
let enemy_spawn = 0
let subtext = ""
let star_out = 0
let mySprite9: Sprite = null
let projectile5: Sprite = null
let projectile4: Sprite = null
let projectile3: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let weapon = 0
let direction = 0
let wave = 0
let enemy_quota = 0
let mySprite: Sprite = null
let mySprite2: Sprite = null
let enemys_killed = 0
enemys_killed = 0
let mySprite3 = sprites.create(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.area)
let mySprite4 = sprites.create(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.area)
let mySprite5 = sprites.create(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.area)
let mySprite6 = sprites.create(img`
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccddddddddddddddddddddddddddddddddccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddccccccccccccccccccccccccccccccccccccddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddcddddddddddddddddddddddddddddddddddddddddcddcddccddcc
    ccddccddcddccccccccccccccccccccccccccccccccccccccccccddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddcddddddddddddddddddddddddddddddddddddddddddddddcddccddcc
    ccddccddccccccccccccccccccccccccccccccccccccccccccccccccddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccddddddddddddddddddddddddddddddddddddddddddddddddddddccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddccccccccccccccccccccccccccccccccccccccccccccccccccccccccddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    ccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
    `, SpriteKind.area)
mySprite3.setPosition(128, 95)
mySprite4.setPosition(23, 91)
mySprite5.setPosition(21, 19)
mySprite6.setPosition(138, 15)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . f f f f f f f f . . . . 
    . . . f 2 2 2 2 2 2 2 2 f . . . 
    . . f 2 2 2 2 2 2 2 2 2 2 f . . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 f 2 2 2 2 2 2 f 2 2 f . 
    . f 2 2 f f 2 2 2 2 f f 2 2 f . 
    . f 2 2 f f 2 2 2 2 f f 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 2 2 2 2 2 2 2 2 2 f . 
    . f 2 2 2 f f f f f f 2 2 2 f . 
    . . f f f . . . . . . f f f . . 
    `, SpriteKind.Enemy)
mySprite = sprites.create(img`
    ....................
    ....ffffffff........
    ...f11111111f.......
    ..f1111111111f......
    .f111111111111f.....
    .f11ff1111ff11f.....
    .f11ff1111ff11f.....
    .f11ff1111ff1fffffff
    .f11111111111feedddf
    .f11111111111fefffff
    .f11111111111fef....
    .f11111111111fff....
    .f111111111111f.....
    .f111111111111f.....
    ..f111ffff111f......
    ...fff....fff.......
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
enemy_quota = 10
wave = 1
tiles.coverAllTiles(myTiles.transparency16, myTiles.tile1)
let mySprite7 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.node)
let mySprite8 = sprites.create(img`
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    . . . . . . . 6 6 . . . . . . . 
    `, SpriteKind.pickup)
mySprite8.setPosition(76, 6)
let mySprite10 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . 1 1 1 . . 1 1 1 . . . . 
    . . . . . 1 1 . . 1 1 . . . . . 
    . . . . . . 1 1 1 1 . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.pickup)
mySprite10.setPosition(74, 102)
forever(function () {
    subtext = convertToText(wave + 1)
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
forever(function () {
    if (mySprite.overlapsWith(mySprite8)) {
        weapon = 1
    }
    if (mySprite.overlapsWith(mySprite10)) {
        weapon = 2
    }
})
