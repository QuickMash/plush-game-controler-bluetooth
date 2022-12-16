input.onTemperatureConditionChanged(TemperatureCondition.Hot, 80, TemperatureUnit.Fahrenheit, function () {
    light.setAll(0xff0000)
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    keyboard.key("Warning! Unit Overheating", KeyboardKeyEvent.Press)
})
