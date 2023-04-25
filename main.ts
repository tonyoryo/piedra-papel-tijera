input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    radio.sendString("piedra")
    basic.showIcon(IconNames.SmallSquare)
    Mio = 2
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("papel")
    basic.showIcon(IconNames.Square)
    Mio = 1
})
radio.onReceivedString(function (receivedString) {
    if (Mio == 1) {
    	
    }
    if (Mio == 2) {
    	
    }
    if (Mio == 3) {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    radio.sendString("tijera")
    basic.showIcon(IconNames.Scissors)
    Mio = 3
})
let Mio = 0
radio.setGroup(6)
