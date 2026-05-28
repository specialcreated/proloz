#SingleInstance Force
#NoEnv
SendMode Input
SetWorkingDir %A_ScriptDir%
#MaxThreadsPerHotkey 5

; === НАСТРОЙКИ ===
Global InteractionKey := "e" ; Клавиша взаимодействия
Global BaseDelayMin := 800   ; Минимальная задержка между нажатиями (мс)
Global BaseDelayMax := 1500  ; Максимальная задержка
Global Running := false
Global CurrentTask := ""
Global StopFlag := false

; === GUI ИНТЕРФЕЙС ===
Gui, Add, Text, x10 y10 w380, RET9 AutoHotkey Assistant
Gui, Font, s10 Bold
Gui, Add, Text, x10 y35 w380, Статус: <span id="status">Ожидание</span>
Gui, Font, s9 Norm
Gui, Add, GroupBox, x10 y60 w380 h220, Работы
Gui, Add, Button, x20 y85 w100 h30 gStartOranges, Апельсины (F2)
Gui, Add, Button, x130 y85 w100 h30 gStartLumber, Лесоруб (F3)
Gui, Add, Button, x240 y85 w100 h30 gStartQuarry, Карьер (F4)
Gui, Add, Button, x20 y125 w100 h30 gStartMushrooms, Грибы (F5)
Gui, Add, Button, x130 y125 w100 h30 gStartFarmAbuse, Абуз Фермы (F6)
Gui, Add, Button, x240 y125 w100 h30 gStartSewer, Швейка (F7)
Gui, Add, Button, x20 y165 w100 h30 gStartCarJack, Угонки (F8)
Gui, Add, Button, x130 y165 w100 h30 gStartTaxi, Такси (F9)
Gui, Add, Button, x240 y165 w100 h30 gStartSkills, Скиллы (F10)
Gui, Add, Button, x20 y205 w100 h30 gStartDemorgan, Деморган (F11)
Gui, Add, Button, x130 y205 w100 h30 gStartAutoEat, Авто Еда (F12)
Gui, Add, Button, x240 y205 w100 h30 gStartAntiAFK, Анти-AFK (Home)

Gui, Add, GroupBox, x10 y290 w380 h100, Настройки
Gui, Add, Text, x20 y315, Задержка мин (мс):
Gui, Add, Edit, x140 y310 w60 vDelayMin, 800
Gui, Add, Text, x220 y315, Задержка макс (мс):
Gui, Add, Edit, x340 y310 w60 vDelayMax, 1500
Gui, Add, Text, x20 y345, Клавиша действия:
Gui, Add, Edit, x140 y340 w60 vInteractKey, e
Gui, Add, Button, x240 y340 w140 h25 gSaveSettings, Применить настройки

Gui, Add, GroupBox, x10 y400 w380 h120, Лог событий
Gui, Add, Edit, x20 y420 w360 h90 vLogBox ReadOnly -VScroll, Добро пожаловать! Выберите функцию...

Gui, Add, Button, x10 y530 w170 h40 gStopAll, СТОП (ESC)
Gui, Add, Button, x200 y530 w170 h40 gExitApp, Выход

Gui, Show, w400 h580, Ret9 Assistant GUI
Return

; === ЛОГИКА КНОПОК ===
StartOranges:
    StartTask("Апельсины", 2000, 4000) ; Дольше ждем роста
Return

StartLumber:
    StartTask("Лесоруб", 1500, 3000)
Return

StartQuarry:
    StartTask("Карьер", 1000, 2000)
Return

StartMushrooms:
    StartTask("Грибы", 1500, 3000)
Return

StartFarmAbuse:
    StartTask("Абуз Фермы", 1000, 2000)
Return

StartSewer:
    StartTask("Швейка", 800, 1500)
Return

StartCarJack:
    StartTask("Угонки", 2000, 5000) ; Долгий процесс
Return

StartTaxi:
    StartTask("Такси", 3000, 6000) ; Ожидание заказа
Return

StartSkills:
    StartTask("Скиллы", 1000, 2000)
Return

StartDemorgan:
    StartTask("Деморган", 1500, 3000)
Return

StartAutoEat:
    StartTask("Авто Еда", 5000, 10000) ; Редко
Return

StartAntiAFK:
    StartTask("Анти-AFK", 30000, 60000) ; Очень редко, просто движение
Return

; === ОСНОВНАЯ ФУНКЦИЯ ЗАПУСКА ===
StartTask(TaskName, MinD, MaxD) {
    Global Running, CurrentTask, StopFlag, BaseDelayMin, BaseDelayMax, InteractionKey
    
    if (Running) {
        Log("Сначала остановите текущую задачу: " . CurrentTask)
        Return
    }
    
    ; Читаем настройки из GUI
    Gui, Submit, NoHide
    BaseDelayMin := DelayMin
    BaseDelayMax := DelayMax
    InteractionKey := InteractKey
    
    Running := true
    CurrentTask := TaskName
    StopFlag := false
    
    Log("Запущено: " . TaskName)
    GuiControl,, LogBox, % "Статус: РАБОТАЕТ (" . TaskName . ")"
    
    ; Запускаем поток
    SetTimer, DoWork, -100
}

DoWork:
    Global Running, CurrentTask, StopFlag, BaseDelayMin, BaseDelayMax, InteractionKey
    
    if (!Running || StopFlag) {
        Return
    }
    
    ; Логика для разных задач (можно усложнить)
    if (CurrentTask == "Анти-AFK") {
        ; Просто нажимаем кнопку движения случайно
        Random, MoveKey, 1, 4
        If (MoveKey == 1) Send, {w down}
        Sleep, 200
        Send, {w up}
        Log("Анти-AFK: шаг")
    } else {
        ; Стандартное нажатие E
        Send, {%InteractionKey%}
        Log("Действие: нажато " . InteractionKey)
    }
    
    ; Случайная задержка
    Random, Delay, %BaseDelayMin%, %BaseDelayMax%
    
    ; Проверяем флаг остановки во время сна (через короткий цикл)
    Loop {
        Sleep, 100
        Delay -= 100
        if (Delay <= 0 || StopFlag || !Running)
            Break
    }
    
    if (Running && !StopFlag) {
        SetTimer, DoWork, -100
    }
Return

StopAll:
    Global Running, CurrentTask, StopFlag
    Running := false
    StopFlag := true
    CurrentTask := ""
    Log("Все задачи остановлены пользователем.")
    GuiControl,, LogBox, Статус: ОСТАНОВЛЕНО
Return

SaveSettings:
    Gui, Submit, NoHide
    Log("Настройки сохранены: Задержка " . DelayMin . "-" . DelayMax . ", Кнопка: " . InteractKey)
    MsgBox, 64, Успех, Настройки применены!
Return

ExitApp:
    ExitApp
Return

; === ГОРЯЧИЕ КЛАВИШИ (Дублируют кнопки) ===
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
    Global
    FormatTime, Time,, HH:mm:ss
    LogText := "[" . Time . "] " . Message . "`n"
    GuiControl,, LogBox, %LogText%%LogBox%
    ; Прокрутка вниз (костыль для AHK v1)
    Control Send, Edit1, {End}, Ret9 Assistant GUI
}

GuiClose:
    ExitApp
Return
