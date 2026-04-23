input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 5; index++) {
        led.plot(0, véletlen)
        basic.pause(200)
        led.unplot(0, véletlen)
        véletlen += 1
    }
})
let véletlen = 0
véletlen = 0
basic.forever(function () {
	
})
