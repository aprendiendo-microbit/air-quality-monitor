OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("Dust(ug/m3)")
    OLED.writeNumNewLine(Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    music.play(music.stringPlayable("C5 C5 A F - - - - ", 120), music.PlaybackMode.UntilDone)
    basic.pause(60000)
})
