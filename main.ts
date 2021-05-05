radio.onReceivedNumber(function (receivedNumber) {
    basic.showNumber(receivedNumber)
})
input.onButtonPressed(Button.A, function () {
    liste.push(randint(0, 9))
    sum += liste[liste.length - 1]
    basic.showNumber(liste[liste.length - 1])
})
input.onButtonPressed(Button.AB, function () {
    loop = 0
    for (let index = 0; index < liste.length; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showNumber(liste[loop])
        loop += 1
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showNumber(liste.length)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    liste = []
    sum = 0
})
let loop = 0
let sum = 0
let liste: number[] = []
radio.setGroup(1)
liste = []
sum = 0
