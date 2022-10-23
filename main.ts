function servoJustering () {
    servoNum = 0
    adjNum = 0
    while (loop) {
        if (adjNum == 1) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 70)
            basic.showLeds(`
                # # . # #
                # # # # #
                # # # # #
                # # # . .
                # # # . .
                `)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, 22)
        } else if (adjNum == 2) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 57)
            basic.showLeds(`
                # # . # #
                # # # # #
                # # # # #
                . . # # #
                . . # # #
                `)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, 0)
        } else if (adjNum == 3) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 77)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, 0)
            basic.showLeds(`
                . # # # #
                . # # # #
                . # # . .
                . # # . .
                . # # . .
                `)
        } else if (adjNum == 5) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 61)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, 83)
            basic.showLeds(`
                . . # # .
                . . # # .
                . . # # .
                # # # # .
                # # # # .
                `)
        } else if (adjNum == 4) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 61)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, 83)
            basic.showLeds(`
                # # # # .
                # # # # .
                . . # # .
                . . # # .
                . . # # .
                `)
        } else if (adjNum == 6) {
            basic.showNumber(servoNum)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 61)
            basic.pause(100)
            kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, 83)
            basic.showLeds(`
                . # # . .
                . # # . .
                . # # . .
                . # # # #
                . # # # #
                `)
        }
    }
}
let adjNum = 0
let servoNum = 0
let loop = false
basic.showIcon(IconNames.Happy)
loop = true
let servo1 = 4
let servo2 = 4
let servo3 = 4
let servo4 = 4
let servo5 = 90
let servo6 = 90
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo1, servo1)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo2, servo2)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo3, servo3)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo4, servo4)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo5, servo5)
kitronik_i2c_16_servo.servoWrite(kitronik_i2c_16_servo.Servos.Servo6, servo6)
basic.forever(function () {
    servoJustering()
})
