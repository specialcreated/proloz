#SingleInstance Force
SendMode "Input"
A_SetWorkingDir(A_ScriptDir)
#MaxThreadsPerHotkey 5

; === НАСТРОЙКИ ===
global InteractionKey := "e"
global BaseDelayMin := 800
global BaseDelayMax := 1500
global Running := false
global CurrentTask := ""
global StopFlag := false

; === GUI ИНТЕРФЕЙС ===
MyGui := Gui()
MyGui.Add("Text", "x10 y10 w380", "RET9 AutoHotkey Assistant")
MyGui.Add("Text", "x10 y35 w380", "Статус: Ожидание")
MyGui.Add("GroupBox", "x10 y60 w380 h220", "Работы")
MyGui.Add("Button", "x20 y85 w100 h30 gStartOranges", "Апельсины (F2)")
MyGui.Add("Button", "x130 y85 w100 h30 gStartLumber", "Лесоруб (F3)")
MyGui.Add("Button", "x240 y85 w100 h30 gStartQuarry", "Карьер (F4)")
MyGui.Add("Button", "x20 y125 w100 h30 gStartMushrooms", "Грибы (F5)")
MyGui.Add("Button", "x130 y125 w100 h30 gStartFarmAbuse", "Абуз Фермы (F6)")
MyGui.Add("Button", "x240 y125 w100 h30 gStartSewer", "Швейка (F7)")
MyGui.Add("Button", "x20 y165 w100 h30 gStartCarJack", "Угонки (F8)")
MyGui.Add("Button", "x130 y165 w100 h30 gStartTaxi", "Такси (F9)")
MyGui.Add("Button", "x240 y165 w100 h30 gStartSkills", "Скиллы (F10)")
MyGui.Add("Button", "x20 y205 w100 h30 gStartDemorgan", "Деморган (F11)")
MyGui.Add("Button", "x130 y205 w100 h30 gStartAutoEat", "Авто Еда (F12)")
MyGui.Add("Button", "x240 y205 w100 h30 gStartAntiAFK", "Анти-AFK (Home)")

MyGui.Add("GroupBox", "x10 y290 w380 h100", "Настройки")
MyGui.Add("Text", "x20 y315", "Задержка мин (мс):")
DelayMinEdit := MyGui.Add("Edit", "x140 y310 w60 vDelayMin", "800")
MyGui.Add("Text", "x220 y315", "Задержка макс (мс):")
DelayMaxEdit := MyGui.Add("Edit", "x340 y310 w60 vDelayMax", "1500")
MyGui.Add("Text", "x20 y345", "Клавиша действия:")
InteractKeyEdit := MyGui.Add("Edit", "x140 y340 w60 vInteractKey", "e")
MyGui.Add("Button", "x240 y340 w140 h25 gSaveSettings", "Применить настройки")

MyGui.Add("GroupBox", "x10 y400 w380 h120", "Лог событий")
LogBox := MyGui.Add("Edit", "x20 y420 w360 h90 vLogBox ReadOnly -VScroll", "Добро пожаловать! Выберите функцию...")

MyGui.Add("Button", "x10 y530 w170 h40 gStopAll", "СТОП (ESC)")
MyGui.Add("Button", "x200 y530 w170 h40 gExitApp", "Выход")

MyGui.OnEvent("Close", ExitApp)
MyGui.Show("w400 h580", "Ret9 Assistant GUI")

; === ЛОГИКА КНОПОК ===
StartOranges(*) => StartTask("Апельсины", 2000, 4000)
StartLumber(*) => StartTask("Лесоруб", 1500, 3000)
StartQuarry(*) => StartTask("Карьер", 1000, 2000)
StartMushrooms(*) => StartTask("Грибы", 1500, 3000)
StartFarmAbuse(*) => StartTask("Абуз Фермы", 1000, 2000)
StartSewer(*) => StartTask("Швейка", 800, 1500)
StartCarJack(*) => StartTask("Угонки", 2000, 5000)
StartTaxi(*) => StartTask("Такси", 3000, 6000)
StartSkills(*) => StartTask("Скиллы", 1000, 2000)
StartDemorgan(*) => StartTask("Деморган", 1500, 3000)
StartAutoEat(*) => StartTask("Авто Еда", 5000, 10000)
StartAntiAFK(*) => StartTask("Анти-AFK", 30000, 60000)

; === ОСНОВНАЯ ФУНКЦИЯ ЗАПУСКА ===
StartTask(TaskName, MinD, MaxD) {
    global Running, CurrentTask, StopFlag, BaseDelayMin, BaseDelayMax, InteractionKey, LogBox, MyGui
    
    if (Running) {
        Log("Сначала остановите текущую задачу: " . CurrentTask)
        return
    }
    
    ; Читаем настройки из GUI
    MyGui.Submit(false)
    BaseDelayMin := DelayMin
    BaseDelayMax := DelayMax
    InteractionKey := InteractKey
    
    Running := true
    CurrentTask := TaskName
    StopFlag := false
    
    Log("Запущено: " . TaskName)
    LogBox.Value := "Статус: РАБОТАЕТ (" . TaskName . ")"
    
    ; Запускаем поток
    SetTimer(DoWork, -100)
}

DoWork() {
    global Running, CurrentTask, StopFlag, BaseDelayMin, BaseDelayMax, InteractionKey, LogBox, MyGui
    
    if (!Running || StopFlag)
        return
    
    ; Логика для разных задач
    if (CurrentTask == "Анти-AFK") {
        ; Просто нажимаем кнопку движения случайно
        MoveKey := Random(1, 4)
        if (MoveKey == 1) Send("{w down}")
        Sleep(200)
        Send("{w up}")
        Log("Анти-AFK: шаг")
    } else {
        ; Стандартное нажатие клавиши
        Send("{" . InteractionKey . "}")
        Log("Действие: нажато " . InteractionKey)
    }
    
    ; Случайная задержка
    Delay := Random(BaseDelayMin, BaseDelayMax)
    
    ; Проверяем флаг остановки во время сна
    while (Delay > 0 && Running && !StopFlag) {
        Sleep(100)
        Delay -= 100
    }
    
    if (Running && !StopFlag)
        SetTimer(DoWork, -100)
}

StopAll(*) {
    global Running, CurrentTask, StopFlag, LogBox
    Running := false
    StopFlag := true
    CurrentTask := ""
    Log("Все задачи остановлены пользователем.")
    LogBox.Value := "Статус: ОСТАНОВЛЕНО"
}

SaveSettings(*) {
    global LogBox, MyGui
    MyGui.Submit(false)
    Log("Настройки сохранены: Задержка " . DelayMin . "-" . DelayMax . ", Кнопка: " . InteractKey)
    MsgBox("Настройки применены!", "Успех", "T64")
}

ExitApp(*) => ExitApp()

; === ГОРЯЧИЕ КЛАВИШИ ===
F2::StartTask("Апельсины", 2000, 4000)
F3::StartTask("Лесоруб", 1500, 3000)
F4::StartTask("Карьер", 1000, 2000)
F5::StartTask("Грибы", 1500, 3000)
F6::StartTask("Абуз Фермы", 1000, 2000)
F7::StartTask("Швейка", 800, 1500)
F8::StartTask("Угонки", 2000, 5000)
F9::StartTask("Такси", 3000, 6000)
F10::StartTask("Скиллы", 1000, 2000)
F11::StartTask("Деморган", 1500, 3000)
F12::StartTask("Авто Еда", 5000, 10000)
Home::StartTask("Анти-AFK", 30000, 60000)
Esc::StopAll()

; === УТИЛИТЫ ===
Log(Message) {
    global LogBox
    FormatTime(&Time,, "HH:mm:ss")
    LogText := "[" . Time . "] " . Message . "`n"
    LogBox.Value := LogText . LogBox.Value
}
