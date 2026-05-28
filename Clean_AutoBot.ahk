#Requires AutoHotkey v2.0
#SingleInstance Force
SetWorkingDir A_ScriptDir

; ==============================================================================
; КОНФИГУРАЦИЯ И ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ
; ==============================================================================

global CurrentTask := ""         ; Имя текущей запущенной задачи
global MinDelay := 1000          ; Минимальная задержка (мс)
global MaxDelay := 3000          ; Максимальная задержка (мс)
global ActionKey := "e"          ; Клавиша действия
global StopHotkey := "Esc"       ; Горячая клавиша остановки
global bIsRunning := false       ; Флаг состояния (работает/стоит)

; Список доступных задач для меню
TaskList := [
    { Name: "Апельсины",      Key: "F2", Func: Task_GenericClick },
    { Name: "Лесоруб",         Key: "F3", Func: Task_GenericClick },
    { Name: "Карьер",          Key: "F4", Func: Task_GenericClick },
    { Name: "Грибы",           Key: "F5", Func: Task_GenericClick },
    { Name: "Абуз Фермы",      Key: "F6", Func: Task_GenericClick },
    { Name: "Швейка",          Key: "F7", Func: Task_GenericClick },
    { Name: "Угонки",          Key: "F8", Func: Task_GenericClick },
    { Name: "Такси",           Key: "F9", Func: Task_GenericClick },
    { Name: "Скиллы",          Key: "F10", Func: Task_GenericClick },
    { Name: "Деморган",        Key: "F11", Func: Task_GenericClick },
    { Name: "Авто Еда",        Key: "F12", Func: Task_GenericClick },
    { Name: "Анти-AFK",        Key: "Home", Func: Task_AntiAFK }
]

; ==============================================================================
; СОЗДАНИЕ GUI
; ==============================================================================

Gui := Gui("+AlwaysOnTop -MinSize", "Clean AutoBot v1.0")
Gui.SetFont("s10", "Segoe UI")

; Секция настроек
Group := Gui.Add("GroupBox", "x10 y10 w460 h110", "Настройки")
Group.Add("Text", "x20 y30", "Мин. задержка (мс):")
EditMin := Group.Add("Edit", "x140 y25 w80 Number", MinDelay)
Group.Add("Text", "x230 y30", "Макс. задержка (мс):")
EditMax := Group.Add("Edit", "x350 y25 w80 Number", MaxDelay)

Group.Add("Text", "x20 y60", "Клавиша действия:")
EditKey := Group.Add("Edit", "x140 y55 w50", ActionKey)
Group.Add("Text", "x200 y60", "Стоп-клавиша:")
EditStop := Group.Add("Edit", "x280 y55 w50", StopHotkey)

BtnApply := Group.Add("Button", "x360 y55 w100 h25", "Применить")
BtnApply.OnEvent("Click", ApplySettings)

; Секция управления задачами
Gui.Add("Text", "x10 y130", "Выберите задачу (или нажмите горячую клавишу):")
LB_Tasks := Gui.Add("ListBox", "x10 y150 w460 h120 Choose1", [])

; Заполняем список задач
for Index, Task in TaskList {
    LB_Tasks.Add(Task.Name . " (" . Task.Key . ")")
}

LB_Tasks.OnEvent("DoubleClick", OnTaskDoubleClick)

; Кнопки управления внизу
BtnStop := Gui.Add("Button", "x10 y280 w100 h30 +0xC00000", "СТОП (Esc)") ; Красный цвет
BtnStop.OnEvent("Click", StopTask)

BtnExit := Gui.Add("Button", "x370 y280 w100 h30", "Выход")
BtnExit.OnEvent("Click", (*) => ExitApp())

; Лог действий
Gui.Add("Text", "x10 y320", "Лог событий:")
Edt_Log := Gui.Add("Edit", "x10 y340 w460 h100 ReadOnly -VScroll", "Готов к работе.`n")

Gui.Show("w480 h460")

; ==============================================================================
; ЛОГИКА ЗАДАЧ (ФУНКЦИИ)
; ==============================================================================

; Универсальная задача: просто нажимает клавишу с интервалом
Task_GenericClick() {
    Log("Запущена задача: " . CurrentTask)
    while bIsRunning {
        Send "{" . ActionKey . " down}"
        Sleep 50
        Send "{" . ActionKey . " up}"
        
        ; Рандомная задержка
        Delay := Random(MinDelay, MaxDelay)
        if (WaitWithCheck(Delay))
            break
    }
    Log("Задача остановлена.")
}

; Специфическая задача: Анти-AFK (движение)
Task_AntiAFK() {
    Log("Запущена задача: Анти-AFK")
    Keys := ["w", "a", "s", "d"]
    while bIsRunning {
        ; Выбираем случайную клавишу
        RandomKey := Keys[Random(1, 4)]
        Send "{" . RandomKey . " down}"
        Sleep 100
        Send "{" . RandomKey . " up}"
        
        ; Длинная пауза перед следующим движением
        Delay := Random(2000, 5000)
        if (WaitWithCheck(Delay))
            break
    }
    Log("Анти-AFK остановлен.")
}

; Вспомогательная функция ожидания с проверкой флага остановки
; Возвращает True, если нужно прервать цикл, False если ждать дальше
WaitWithCheck(TimeMs) {
    StartTime := A_TickCount
    while (A_TickCount - StartTime < TimeMs) {
        if (!bIsRunning)
            return true
        Sleep 50 ; Проверяем часто, но не грузим процессор
    }
    return false
}

; ==============================================================================
; УПРАВЛЕНИЕ ПОТОКАМИ И СОБЫТИЯМИ
; ==============================================================================

; Запуск задачи из списка
StartTaskByName(TaskName) {
    if (bIsRunning) {
        Log("Сначала остановите текущую задачу!")
        return
    }

    ; Находим задачу в массиве
    TargetTask := ""
    for Index, Task in TaskList {
        if (Task.Name = TaskName) {
            TargetTask := Task
            break
        }
    }

    if (TargetTask = "") {
        Log("Ошибка: задача не найдена.")
        return
    }

    CurrentTask := TargetTask.Name
    bIsRunning := true
    
    ; Запускаем функцию задачи в отдельном потоке
    ; Thread можно прервать командой Thread, Interrupt
    TaskThread := Thread(TargetTask.Func)
    
    Log(">> Старт: " . CurrentTask)
}

; Остановка текущей задачи
StopTask(*) {
    if (!bIsRunning) {
        Log("Ничего не запущено.")
        return
    }

    bIsRunning := false
    CurrentTask := ""
    
    ; Принудительно прерываем выполнение скрипта внутри потока, если он завис
    ; В AHK v2 Thread.Interrupt работает иначе, мы полагаемся на флаг bIsRunning в циклах
    ; Но для надежности можно сбросить таймеры или использовать критические секции, 
    ; здесь достаточно флага, так как циклы проверяют его через WaitWithCheck
    
    Log("<< Стоп по команде пользователя.")
}

; Применение настроек из GUI
ApplySettings(*) {
    try {
        valMin := Number(EditMin.Value)
        valMax := Number(EditMax.Value)
        
        if (valMin < 0 || valMax < 0 || valMin > valMax) {
            MsgBox("Ошибка: Проверьте значения задержек.", "Ошибка", "48 Error")
            return
        }

        MinDelay := valMin
        MaxDelay := valMax
        ActionKey := EditStop.Value ; Ошибка в оригинале, исправляем логику ниже
        ActionKey := EditKey.Value
        StopHotkey := EditStop.Value

        ; Перерегистрация горячей клавиши стопа
        try Hotkey StopHotkey, StopTask
        
        Log("Настройки применены.")
        MsgBox("Настройки обновлены!", "Успех", "T1")
    } catch as e {
        MsgBox("Неверный формат чисел.", "Ошибка", "48 Error")
    }
}

; Обработка двойного клика по списку
OnTaskDoubleClick(GuiCtrlObj, Info) {
    ; Извлекаем имя задачи без горячей клавиши (до скобки)
    FullText := Info.Value
    TaskName := StrSplit(FullText, " (")[1]
    StartTaskByName(TaskName)
}

; Логирование в поле ввода
Log(Message) {
    Timestamp := FormatTime(, "HH:mm:ss")
    Edt_Log.Value .= "[" . Timestamp . "] " . Message . "`n"
    ; Прокрутка вниз
    Edt_Log.Scroll(0, 10000) 
}

; ==============================================================================
; ГОРЯЧИЕ КЛАВИШИ ДЛЯ БЫСТРОГО ЗАПУСКА
; ==============================================================================

; Регистрируем хоткеи из конфига
for Index, Task in TaskList {
    try Hotkey Task.Key, (*) => StartTaskByName(Task.Name)
}

; Глобальный стоп по Esc (дублирует кнопку, но работает всегда)
try Hotkey Escape, StopTask

; Обработка закрытия окна
Gui.OnEvent("Close", (*) => ExitApp())

Return
