#Requires AutoHotkey v2.0
#Warn

; --- Глобальные переменные ---
global bIsRunning := false
global ActionKey := "e"
global MinDelay := 500
global MaxDelay := 1500
global MainGui, LblStatus, LogBox, EditMin, EditMax, EditKey

; --- Список задач ---
TaskList := [
    { Name: "Апельсины", Key: "F2", Func: Task_GenericClick },
    { Name: "Лесоруб", Key: "F3", Func: Task_GenericClick },
    { Name: "Карьер", Key: "F4", Func: Task_GenericClick },
    { Name: "Грибы", Key: "F5", Func: Task_GenericClick },
    { Name: "Абуз Фермы", Key: "F6", Func: Task_GenericClick },
    { Name: "Швейка", Key: "F7", Func: Task_GenericClick },
    { Name: "Угонки", Key: "F8", Func: Task_GenericClick },
    { Name: "Такси", Key: "F9", Func: Task_GenericClick },
    { Name: "Скиллы", Key: "F10", Func: Task_GenericClick },
    { Name: "Деморган", Key: "F11", Func: Task_GenericClick },
    { Name: "Авто Еда", Key: "F12", Func: Task_GenericClick },
    { Name: "Анти-AFK", Key: "Home", Func: Task_AntiAFK }
]

; --- Создание GUI ---
MainGui := Gui("+AlwaysOnTop -MinSize", "Clean AutoBot v1.0 (AHK v2)")
MainGui.SetFont("s10", "Segoe UI")

; Группа настроек
Group := MainGui.Add("GroupBox", "x10 y10 w500 h100", "Настройки")
MainGui.Add("Text", "x20 y40", "Мин. задержка (мс):")
EditMin := MainGui.Add("Edit", "x140 y37 w80", MinDelay)
MainGui.Add("Text", "x240 y40", "Макс. задержка (мс):")
EditMax := MainGui.Add("Edit", "x360 y37 w80", MaxDelay)
MainGui.Add("Text", "x20 y70", "Клавиша действия:")
EditKey := MainGui.Add("Edit", "x140 y67 w80", ActionKey)
BtnApply := MainGui.Add("Button", "x240 y65 w100", "Применить")
BtnApply.OnEvent("Click", ApplySettings)

; Группа задач
GroupTasks := MainGui.Add("GroupBox", "x10 y120 w500 h280", "Задачи (Нажми кнопку или горячую клавишу)")
BtnStop := MainGui.Add("Button", "x20 y145 w100 h30 cRed", "СТОП (Esc)")
BtnStop.OnEvent("Click", StopTask)

LblStatus := MainGui.Add("Text", "x130 y153 w250", "Статус: Ожидание")
LblStatus.Name := "StatusLabel"

; Лог
MainGui.Add("Text", "x20 y190", "Лог событий:")
LogBox := MainGui.Add("Edit", "x20 y210 w480 h180 ReadOnly -VScroll", "Добро пожаловать в Clean AutoBot.`n")
LogBox.Name := "LogBox"

; Генерация кнопок задач
Row := 0
Col := 0
for Index, task in TaskList {
    Btn := MainGui.Add("Button", "x" . (20 + (Col * 165)) . " y" . (180 + (Row * 35)) . " w155 h28", task.Name . " (" . task.Key . ")")
    ; Привязка события с передачей данных задачи через замыкание
    Btn.OnEvent("Click", (*) => RunTask(task))
    
    ; Регистрируем горячую клавишу
    try {
        Hotkey task.Key, (*) => RunTask(task)
    } catch as err {
        LogBox.Value .= "Ошибка регистрации " . task.Key . ": " . err.Message . "`n"
    }

    Col++
    if (Col > 2) {
        Col := 0
        Row++
    }
}

; Глобальная горячая клавиша ESC для стопа
Hotkey "Esc", StopTask

MainGui.Show()

; --- Функции ---

ApplySettings(*) {
    global ActionKey, MinDelay, MaxDelay
    
    valMin := EditMin.Value
    valMax := EditMax.Value
    valKey := EditKey.Value

    if (valMin = "" or valMax = "" or valKey = "") {
        MsgBox("Все поля настроек должны быть заполнены!", "Ошибка", "48")
        return
    }

    if (valMin+0 >= valMax+0) {
        MsgBox("Минимальная задержка должна быть меньше максимальной!", "Ошибка", "48")
        return
    }

    MinDelay := valMin+0
    MaxDelay := valMax+0
    ActionKey := valKey
    
    LogBox.Value .= "Настройки применены: Задержка [" . MinDelay . "-" . MaxDelay . "мс], Клавиша: " . ActionKey . "`n"
    LogBox.ScrollCaret()
}

RunTask(taskInfo, *) {
    global bIsRunning, ActionKey, MinDelay, MaxDelay

    if (bIsRunning) {
        StopTask()
        Sleep 200
    }

    bIsRunning := true
    LblStatus.Text := "Статус: Выполняется - " . taskInfo.Name
    LogBox.Value .= "Запуск задачи: " . taskInfo.Name . "`n"
    LogBox.ScrollCaret()

    ; Запускаем функцию задачи. В AHK v2 она выполняется в том же потоке, 
    ; но цикл while(bIsRunning) позволяет прервать её через флаг.
    try {
        taskInfo.Func(taskInfo.Name)
    } catch as err {
        LogBox.Value .= "Ошибка в задаче: " . err.Message . "`n"
        LogBox.ScrollCaret()
        bIsRunning := false
        LblStatus.Text := "Статус: Ошибка"
    }
    
    if (bIsRunning) { ; Если не была остановлена ошибкой или стопом внутри
        bIsRunning := false
        LblStatus.Text := "Статус: Ожидание"
        LogBox.Value .= "Задача завершена.`n"
        LogBox.ScrollCaret()
    }
}

Task_GenericClick(taskName) {
    global bIsRunning, ActionKey, MinDelay, MaxDelay
    while (bIsRunning) {
        Send "{" . ActionKey . "}"
        Sleep(Random(MinDelay, MaxDelay))
    }
}

Task_AntiAFK(taskName) {
    global bIsRunning, MinDelay, MaxDelay
    while (bIsRunning) {
        keys := ["w", "a", "s", "d"]
        randomKey := keys[Random(1, 4)]
        Send "{" . randomKey . " down}"
        Sleep(Random(100, 300))
        Send "{" . randomKey . " up}"
        Sleep(Random(MinDelay, MaxDelay))
    }
}

StopTask(*) {
    global bIsRunning
    if (bIsRunning) {
        bIsRunning := false
        LblStatus.Text := "Статус: Ожидание"
        LogBox.Value .= "Задача остановлена.`n"
        LogBox.ScrollCaret()
    }
}
