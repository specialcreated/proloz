; ============================================================================
; Ret9 AutoHotkey Script - Эмуляция функций бота для GTA V (alt:V/RAGE MP)
; ============================================================================
; Внимание: Этот скрипт НЕ имеет доступа к координатам в игре!
; Вы должны самостоятельно подводить персонажа к объектам сбора.
; Скрипт только автоматизирует нажатия клавиш с заданными интервалами.
;
; Горячие клавиши управления:
; F1  - Меню помощи (показать это сообщение)
; F2  - Апельсины (фарм)
; F3  - Лесоруб
; F4  - Карьер
; F5  - Грибы
; F6  - Абуз фермы
; F7  - Швейка
; F8  - Угонки
; F9  - Такси
; F10 - Скиллы
; F11 - Деморган (тюрьма)
; F12 - Авто еда/вода
; ScrollLock - Рыбалка x3
; Pause - Легит рыбалка
; Insert - EMS Таблетки
; Home - Анти-AFK
;
; ESC - Остановить ВСЕ активные боты
; ============================================================================

#NoEnv
#SingleInstance Force
SetWorkingDir %A_ScriptDir%
SetBatchLines, -1
#MaxThreadsPerHotkey 5

; ============================================================================
; Глобальные переменные состояния
; ============================================================================
OrangeBot := false
TreeBot := false
MineAxeBot := false
ShroomBot := false
FarmAbuse := false
SeemBot := false
HijackerBot := false
TaxiBot := false
SkillsBot := false
JailBot := false
FoodBot := false
FishBot := false
LegitFishBot := false
EMSPills := false
AntiAfk := false

; Таймеры
Global OrangeTimer := 0
Global TreeTimer := 0
Global MineTimer := 0
Global ShroomTimer := 0
Global FarmTimer := 0
Global SeemTimer := 0
Global HijackTimer := 0
Global TaxiTimer := 0
Global SkillsTimer := 0
Global JailTimer := 0
Global FoodTimer := 0
Global FishTimer := 0
Global LegitFishTimer := 0
Global EMSTimer := 0
Global AntiAfkTimer := 0

; ============================================================================
; Горячие клавиши управления
; ============================================================================

F1::
    MsgBox, 64, Ret9 AHK Help, 
    (
Горячие клавиши:

F2  - Апельсины (фарм)
F3  - Лесоруб
F4  - Карьер
F5  - Грибы
F6  - Абуз фермы
F7  - Швейка
F8  - Угонки
F9  - Такси
F10 - Скиллы
F11 - Деморган (тюрьма)
F12 - Авто еда/вода

ScrollLock - Рыбалка x3
Pause    - Легит рыбалка
Insert   - EMS Таблетки
Home     - Анти-AFK

ESC - Остановить ВСЕ боты

Важно: Вы должны сами подходить к объектам!
Скрипт только нажимает клавишу E с интервалом.
    )
return

; ============================================================================
; Боты - включение/выключение
; ============================================================================

F2::
    OrangeBot := !OrangeBot
    if (OrangeBot) {
        SetTimer, OrangeBotLoop, 100
        ToolTip, [ВКЛ] Апельсины - подходите к деревьям!, , , 1
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, OrangeBotLoop, Off
        ToolTip, [ВЫКЛ] Апельсины, , , 1
        SetTimer, RemoveToolTip, -2000
    }
return

F3::
    TreeBot := !TreeBot
    if (TreeBot) {
        SetTimer, TreeBotLoop, 100
        ToolTip, [ВКЛ] Лесоруб - подходите к деревьям!, , , 2
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, TreeBotLoop, Off
        ToolTip, [ВЫКЛ] Лесоруб, , , 2
        SetTimer, RemoveToolTip, -2000
    }
return

F4::
    MineAxeBot := !MineAxeBot
    if (MineAxeBot) {
        SetTimer, MineAxeBotLoop, 100
        ToolTip, [ВКЛ] Карьер - подходите к точкам добычи!, , , 3
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, MineAxeBotLoop, Off
        ToolTip, [ВЫКЛ] Карьер, , , 3
        SetTimer, RemoveToolTip, -2000
    }
return

F5::
    ShroomBot := !ShroomBot
    if (ShroomBot) {
        SetTimer, ShroomBotLoop, 100
        ToolTip, [ВКЛ] Грибы - ходите по поляне!, , , 4
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, ShroomBotLoop, Off
        ToolTip, [ВЫКЛ] Грибы, , , 4
        SetTimer, RemoveToolTip, -2000
    }
return

F6::
    FarmAbuse := !FarmAbuse
    if (FarmAbuse) {
        SetTimer, FarmAbuseLoop, 100
        ToolTip, [ВКЛ] Абуз фермы, , , 5
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, FarmAbuseLoop, Off
        ToolTip, [ВЫКЛ] Абуз фермы, , , 5
        SetTimer, RemoveToolTip, -2000
    }
return

F7::
    SeemBot := !SeemBot
    if (SeemBot) {
        SetTimer, SeemBotLoop, 100
        ToolTip, [ВКЛ] Швейка, , , 6
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, SeemBotLoop, Off
        ToolTip, [ВЫКЛ] Швейка, , , 6
        SetTimer, RemoveToolTip, -2000
    }
return

F8::
    HijackerBot := !HijackerBot
    if (HijackerBot) {
        SetTimer, HijackerBotLoop, 100
        ToolTip, [ВКЛ] Угонки, , , 7
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, HijackerBotLoop, Off
        ToolTip, [ВЫКЛ] Угонки, , , 7
        SetTimer, RemoveToolTip, -2000
    }
return

F9::
    TaxiBot := !TaxiBot
    if (TaxiBot) {
        SetTimer, TaxiBotLoop, 100
        ToolTip, [ВКЛ] Такси, , , 8
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, TaxiBotLoop, Off
        ToolTip, [ВЫКЛ] Такси, , , 8
        SetTimer, RemoveToolTip, -2000
    }
return

F10::
    SkillsBot := !SkillsBot
    if (SkillsBot) {
        SetTimer, SkillsBotLoop, 100
        ToolTip, [ВКЛ] Скиллы, , , 9
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, SkillsBotLoop, Off
        ToolTip, [ВЫКЛ] Скиллы, , , 9
        SetTimer, RemoveToolTip, -2000
    }
return

F11::
    JailBot := !JailBot
    if (JailBot) {
        SetTimer, JailBotLoop, 100
        ToolTip, [ВКЛ] Деморган (тюрьма), , , 10
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, JailBotLoop, Off
        ToolTip, [ВЫКЛ] Деморган, , , 10
        SetTimer, RemoveToolTip, -2000
    }
return

F12::
    FoodBot := !FoodBot
    if (FoodBot) {
        SetTimer, FoodBotLoop, 1000
        ToolTip, [ВКЛ] Авто еда/вода (проверка каждые 1с), , , 11
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, FoodBotLoop, Off
        ToolTip, [ВЫКЛ] Авто еда/вода, , , 11
        SetTimer, RemoveToolTip, -2000
    }
return

ScrollLock::
    FishBot := !FishBot
    if (FishBot) {
        SetTimer, FishBotLoop, 100
        ToolTip, [ВКЛ] Рыбалка x3 - забросьте удочку!, , , 12
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, FishBotLoop, Off
        ToolTip, [ВЫКЛ] Рыбалка x3, , , 12
        SetTimer, RemoveToolTip, -2000
    }
return

Pause::
    LegitFishBot := !LegitFishBot
    if (LegitFishBot) {
        SetTimer, LegitFishBotLoop, 100
        ToolTip, [ВКЛ] Легит рыбалка - забросьте удочку!, , , 13
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, LegitFishBotLoop, Off
        ToolTip, [ВЫКЛ] Легит рыбалка, , , 13
        SetTimer, RemoveToolTip, -2000
    }
return

Insert::
    EMSPills := !EMSPills
    if (EMSPills) {
        SetTimer, EMSPillsLoop, 100
        ToolTip, [ВКЛ] EMS Таблетки, , , 14
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, EMSPillsLoop, Off
        ToolTip, [ВЫКЛ] EMS Таблетки, , , 14
        SetTimer, RemoveToolTip, -2000
    }
return

Home::
    AntiAfk := !AntiAfk
    if (AntiAfk) {
        SetTimer, AntiAfkLoop, 5000
        ToolTip, [ВКЛ] Анти-AFK (движение каждые 5с), , , 15
        SetTimer, RemoveToolTip, -3000
    } else {
        SetTimer, AntiAfkLoop, Off
        ToolTip, [ВЫКЛ] Анти-AFK, , , 15
        SetTimer, RemoveToolTip, -2000
    }
return

; ============================================================================
; Остановка всех ботов
; ============================================================================

Esc::
    ; Выключаем все флаги
    OrangeBot := false
    TreeBot := false
    MineAxeBot := false
    ShroomBot := false
    FarmAbuse := false
    SeemBot := false
    HijackerBot := false
    TaxiBot := false
    SkillsBot := false
    JailBot := false
    FoodBot := false
    FishBot := false
    LegitFishBot := false
    EMSPills := false
    AntiAfk := false
    
    ; Отключаем все таймеры
    SetTimer, OrangeBotLoop, Off
    SetTimer, TreeBotLoop, Off
    SetTimer, MineAxeBotLoop, Off
    SetTimer, ShroomBotLoop, Off
    SetTimer, FarmAbuseLoop, Off
    SetTimer, SeemBotLoop, Off
    SetTimer, HijackerBotLoop, Off
    SetTimer, TaxiBotLoop, Off
    SetTimer, SkillsBotLoop, Off
    SetTimer, JailBotLoop, Off
    SetTimer, FoodBotLoop, Off
    SetTimer, FishBotLoop, Off
    SetTimer, LegitFishBotLoop, Off
    SetTimer, EMSPillsLoop, Off
    SetTimer, AntiAfkLoop, Off
    
    ToolTip, [СТОП] Все боты остановлены!, , , 1
    SetTimer, RemoveToolTip, -3000
return

; ============================================================================
; ЦИКЛЫ БОТОВ
; ============================================================================

; ----------------------------------------------------------------------------
; Апельсины - нажатие E каждые ~100мс, раз в 3-5 сек мини-игра
; ----------------------------------------------------------------------------
OrangeBotLoop:
    if (!OrangeBot)
        return
    
    ; Основное взаимодействие
    Send, e
    
    ; Случайная задержка перед мини-игрой (3-5 секунд)
    Random, randDelay, 3000, 5000
    Sleep, %randDelay%
    
    ; Если бот ещё включён - симулируем завершение мини-игры
    if (OrangeBot) {
        ; В оригинале: workMiniGames.farmerFinished(true)
        ; Здесь просто продолжаем цикл
    }
return

; ----------------------------------------------------------------------------
; Лесоруб - нажатие E у деревьев
; ----------------------------------------------------------------------------
TreeBotLoop:
    if (!TreeBot)
        return
    
    Send, e
    
    ; Задержка между рубкой (2-4 секунды)
    Random, randDelay, 2000, 4000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Карьер - нажатие E у точек добычи
; ----------------------------------------------------------------------------
MineAxeBotLoop:
    if (!MineAxeBot)
        return
    
    Send, e
    
    ; Задержка между добычей (2-4 секунды)
    Random, randDelay, 2000, 4000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Грибы - нажатие E при сборе
; ----------------------------------------------------------------------------
ShroomBotLoop:
    if (!ShroomBot)
        return
    
    Send, e
    
    ; Задержка между сбором (1-3 секунды)
    Random, randDelay, 1000, 3000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Абуз фермы - быстрое нажатие E
; ----------------------------------------------------------------------------
FarmAbuseLoop:
    if (!FarmAbuse)
        return
    
    Send, e
    
    ; Короткая задержка (500мс - 1.5с)
    Random, randDelay, 500, 1500
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Швейка - нажатие E
; ----------------------------------------------------------------------------
SeemBotLoop:
    if (!SeemBot)
        return
    
    Send, e
    
    ; Задержка (2-4 секунды)
    Random, randDelay, 2000, 4000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Угонки - нажатие E у машин
; ----------------------------------------------------------------------------
HijackerBotLoop:
    if (!HijackerBot)
        return
    
    Send, e
    
    ; Задержка (1-3 секунды)
    Random, randDelay, 1000, 3000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Такси - нажатие E у пассажиров
; ----------------------------------------------------------------------------
TaxiBotLoop:
    if (!TaxiBot)
        return
    
    Send, e
    
    ; Задержка (2-5 секунд)
    Random, randDelay, 2000, 5000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Скиллы - периодическое использование
; ----------------------------------------------------------------------------
SkillsBotLoop:
    if (!SkillsBot)
        return
    
    ; В оригинале вызывается CallSkills
    ; Здесь эмулируем нажатие клавиши использования навыка
    ; Можно настроить под конкретный скилл
    Send, e
    
    ; Длинная задержка (10-30 секунд)
    Random, randDelay, 10000, 30000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Деморган (тюрьма) - нажатие E для уборки
; ----------------------------------------------------------------------------
JailBotLoop:
    if (!JailBot)
        return
    
    Send, e
    
    ; Задержка (2-4 секунды)
    Random, randDelay, 2000, 4000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Авто еда/вода - проверка и употребление
; ----------------------------------------------------------------------------
FoodBotLoop:
    if (!FoodBot)
        return
    
    ; В оригинале проверяется уровень голода/жажды
    ; Здесь просто нажимаем E для употребления еды
    ; Нужно находиться рядом с едой/водой или иметь в инвентаре
    Send, e
    
    ; Проверка каждые 5-10 секунд
    Random, randDelay, 5000, 10000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Рыбалка x3 - автоматический заброс и вытягивание
; ----------------------------------------------------------------------------
FishBotLoop:
    if (!FishBot)
        return
    
    ; Заброс удочки (E)
    Send, e
    
    ; Ожидание поклёвки (3-7 секунд)
    Random, waitBite, 3000, 7000
    Sleep, %waitBite%
    
    ; Вытягивание (E)
    if (FishBot)
        Send, e
    
    ; Пауза между забросами (2-4 секунды)
    Random, randDelay, 2000, 4000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Легит рыбалка - более медленная, с большими паузами
; ----------------------------------------------------------------------------
LegitFishBotLoop:
    if (!LegitFishBot)
        return
    
    ; Заброс удочки (E)
    Send, e
    
    ; Ожидание поклёвки (5-10 секунд - более реалистично)
    Random, waitBite, 5000, 10000
    Sleep, %waitBite%
    
    ; Вытягивание (E)
    if (LegitFishBot)
        Send, e
    
    ; Пауза между забросами (5-10 секунд)
    Random, randDelay, 5000, 10000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; EMS Таблетки - использование таблеток
; ----------------------------------------------------------------------------
EMSPillsLoop:
    if (!EMSPills)
        return
    
    ; Использование таблетки (E)
    Send, e
    
    ; Задержка между использованием (10-30 секунд)
    Random, randDelay, 10000, 30000
    Sleep, %randDelay%
return

; ----------------------------------------------------------------------------
; Анти-AFK - периодическое движение
; ----------------------------------------------------------------------------
AntiAfkLoop:
    if (!AntiAfk)
        return
    
    ; Симуляция небольшого движения
    ; Нажимаем W на 100мс, затем S на 100мс
    Send, w
    Sleep, 100
    Send, {w up}
    
    Sleep, 200
    
    Send, s
    Sleep, 100
    Send, {s up}
    
    ; Или можно использовать стрейф
    Sleep, 200
    Send, a
    Sleep, 100
    Send, {a up}
    
    Sleep, 200
    Send, d
    Sleep, 100
    Send, {d up}
    
    ; Следующая проверка через 5 секунд
return

; ============================================================================
; Удаление подсказки
; ============================================================================
RemoveToolTip:
    ToolTip
return

; ============================================================================
; Выход из скрипта
; ============================================================================
^q::
    ExitApp
return

; ============================================================================
; Информация при запуске
; ============================================================================
#NoTrayIcon
SplashTextOn, 300, 150, Ret9 AHK Bot, "Запуск скрипта...`n`nНажмите F1 для справки`nCtrl+Q для выхода"
Sleep, 2000
SplashTextOff

; Показываем начальное уведомление
ToolTip, Ret9 AHK запущен!`nНажмите F1 для списка горячих клавиш
SetTimer, RemoveToolTip, -5000

return
