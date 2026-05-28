#Requires AutoHotkey v2.0
#SingleInstance Force

; --- Глобальные настройки ---
MinDelay := 500      ; Минимальная задержка (мс)
MaxDelay := 1500     ; Максимальная задержка (мс)
ActionKey := "e"     ; Клавиша действия
bIsRunning := false  ; Флаг активности
CurrentTaskObj := "" ; Текущий объект задачи

; --- Список задач ---
TaskList := [
    { Name: "Апельсины",   Key: "F2",  Func: Task_GenericClick },
    { Name: "Лесоруб",     Key: "F3",  Func: Task_GenericClick },
    { Name: "Карьер",      Key: "F4",  Func: Task_GenericClick },
    { Name: "Грибы",       Key: "F5",  Func: Task_GenericClick },
    { Name: "Абуз Фермы",  Key: "F6",  Func: Task_GenericClick },
    { Name: "Швейка",      Key: "F7",  Func: Task_GenericClick },
    { Name: "Угонки",      Key: "F8",  Func: Task_GenericClick },
    { Name: "Такси",       Key: "F9",  Func: Task_GenericClick },
    { Name: "Скиллы",      Key: "F10", Func: Task_GenericClick },
    { Name: "Деморган",    Key: "F11", Func: Task_GenericClick },
    { Name: "Авто Еда",    Key: "F12", Func: Task_GenericClick },
    { Name: "Анти-AFK",    Key: "Home",Func: Task_AntiAFK }
]

; --- Создание GUI ---
; Используем переменную MyGui, чтобы не конфликтовать с классом Gui
MyGui := Gui("+AlwaysOnTop -MinSize", "Clean AutoBot v1.0")
MyGui.SetFont("s10", "Segoe UI")

; Группа настроек
Group := MyGui.Add("GroupBox", "x10 y10 w460 h110", "Настройки")
MyGui.Add("Text", "x20 y35", "Мин. задержка (мс):")
EditMin := MyGui.Add("Edit", "x140 y32 w80 Number", MinDelay)
MyGui.Add("Text", "x240 y35", "Макс. задержка (мс):")
EditMax := MyGui.Add("Edit", "x360 y32 w80 Number", MaxDelay)
MyGui.Add("Text", "x20 y70", "Клавиша действия:")
EditKey := MyGui.Add("Edit", "x140 y67 w80", ActionKey)
BtnApply := MyGui.Add("Button", "x240 y65 w100 gApplySettings", "Применить")

; Группа задач
GroupTasks := MyGui.Add("GroupBox", "x10 y130 w460 h260", "Задачи (Нажми кнопку или горячую клавишу)")
BtnStop := MyGui.Add("Button", "x20 y155 w100 h30 cRed gStopTask", "СТОП (Esc)")
LblStatus := MyGui.Add("Text", "x130 y163 w200", "Статус: Ожидание")

; Генерация кнопок задач сеткой
Loop TaskList.Length {
    task := TaskList[A_Index]
    ; Расчет позиции: 3 колонки
    col := Mod(A_Index - 1, 3)
    row := Floor((A_Index - 1) / 3)
    posX := 20 + (col * 145)
    posY := 195 + (row * 35)
    
    Btn := MyGui.Add("Button", "x" . posX . " y" . posY . " w135 h28 gRunTask", task.Name . " (" . task.Key . ")")
    Btn.Name := task.Name ; Сохраняем имя для обработчика
}

; Лог
MyGui.Add("Text", "x10 y400", "Лог событий:")
LogBox := MyGui.Add("Edit", "x10 y420 w460 h100 ReadOnly -VScroll", "Добро пожаловать в Clean AutoBot.`n")

MyGui.Show("w480 h540")

; Горячая клавиша выхода из приложения
^q::ExitApp ; Ctrl+Q для выхода

; --- Обработчики событий ---

ApplySettings(*) {
    global MinDelay, MaxDelay, ActionKey, EditMin, EditMax, EditKey, LogBox
    
    valMin := Number(EditMin.Value)
    valMax := Number(EditMax.Value)
    valKey := EditKey.Value
    
    if (valMin < 0 || valMax < 0 || valMin > valMax) {
        MsgBox("Ошибка: Проверьте значения задержек. Минимум не может быть больше максимума.", "Ошибка настроек", "48")
        return
    }
    if (StrLen(valKey) == 0) {
        MsgBox("Ошибка: Клавиша действия не может быть пустой.", "Ошибка настроек", "48")
        return
    }
    
    MinDelay := valMin
    MaxDelay := valMax
    ActionKey := valKey
    
    Log("Настройки применены: Задержка [" . MinDelay . "-" . MaxDelay . "мс], Клавиша: " . ActionKey)
}

RunTask(*) {
    global bIsRunning, CurrentTaskObj, TaskList, LblStatus, LogBox, A_ThisControl
    
    ; Если уже запущено - останавливаем текущую задачу
    if (bIsRunning) {
        StopTask()
        return
    }
    
    ; Определяем задачу по тексту нажатой кнопки
    foundTask := ""
    Loop TaskList.Length {
        t := TaskList[A_Index]
        ; Проверяем, содержится ли имя задачи в тексте кнопки
        if (InStr(A_ThisControl.Text, t.Name)) {
            foundTask := t
            break
        }
    }
    
    if (!foundTask) {
        Log("Ошибка: Задача не найдена.")
        return
    }
    
    bIsRunning := true
    CurrentTaskObj := foundTask
    LblStatus.Text := "Статус: Выполняется (" . foundTask.Name . ")"
    LblStatus.Opt("cGreen")
    Log("Запуск задачи: " . foundTask.Name)
    
    ; Запускаем функцию задачи в отдельном потоке
    Thread(foundTask.Func, , 1) 
}

StopTask(*) {
    global bIsRunning, CurrentTaskObj, LblStatus, LogBox
    
    if (!bIsRunning) {
        return
    }
    
    bIsRunning := false
    CurrentTaskObj := ""
    LblStatus.Text := "Статус: Остановлено"
    LblStatus.Opt("cBlack")
    Log("Задача остановлена пользователем.")
}

; --- Логика задач ---

Task_GenericClick() {
    global bIsRunning, ActionKey, MinDelay, MaxDelay
    
    while (bIsRunning) {
        Send "{" . ActionKey . " down}"
        Sleep 50
        Send "{" . ActionKey . " up}"
        
        ; Рандомная задержка
        delay := Random(MinDelay, MaxDelay)
        Sleep delay
    }
}

Task_AntiAFK() {
    global bIsRunning, MinDelay, MaxDelay
    
    keys := ["w", "a", "s", "d"]
    
    while (bIsRunning) {
        randomKey := keys[Random(1, 4)]
        Send "{" . randomKey . " down}"
        Sleep 100
        Send "{" . randomKey . " up}"
        
        delay := Random(MinDelay, MaxDelay)
        Sleep delay
    }
}

; --- Вспомогательные функции ---

Log(msg) {
    global LogBox
    timestamp := FormatTime(, "HH:mm:ss")
    LogBox.Value .= "[" . timestamp . "] " . msg . "`n"
    ; Прокрутка вниз
    LogBox.Scroll(0, 100000)
}

; Esc останавливает задачу, если она запущена, иначе ничего не делает (выход через Ctrl+Q)
#HotIf bIsRunning
Esc::StopTask()
#HotIf
