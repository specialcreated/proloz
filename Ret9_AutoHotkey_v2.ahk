; ============================================================================
; Ret9 AutoHotkey Script - Эмуляция функций бота для GTA V (alt:V/RAGE MP)
; Версия: AutoHotkey v2.0.26
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

#SingleInstance Force
#Requires AutoHotkey v2.0

SetWorkingDir(A_ScriptDir)
SetBatchLines(-1)
SendMode("Input")
#MaxThreadsPerHotkey 5

; ============================================================================
; Глобальные переменные состояния
; ============================================================================
global OrangeBot := false
global TreeBot := false
global MineAxeBot := false
global ShroomBot := false
global FarmAbuse := false
global SeemBot := false
global HijackerBot := false
global TaxiBot := false
global SkillsBot := false
global JailBot := false
global FoodBot := false
global FishBot := false
global LegitFishBot := false
global EMSPills := false
global AntiAfk := false

; ============================================================================
; Горячие клавиши управления
; ============================================================================

F1::
{
    MsgBox("Горячие клавиши:`n`n" .
    "F2  - Апельсины (фарм)`n" .
    "F3  - Лесоруб`n" .
    "F4  - Карьер`n" .
    "F5  - Грибы`n" .
    "F6  - Абуз фермы`n" .
    "F7  - Швейка`n" .
    "F8  - Угонки`n" .
    "F9  - Такси`n" .
    "F10 - Скиллы`n" .
    "F11 - Деморган (тюрьма)`n" .
    "F12 - Авто еда/вода`n`n" .
    "ScrollLock - Рыбалка x3`n" .
    "Pause    - Легит рыбалка`n" .
    "Insert   - EMS Таблетки`n" .
    "Home     - Анти-AFK`n`n" .
    "ESC - Остановить ВСЕ боты`n`n" .
    "Важно: Вы должны сами подходить к объектам!`n" .
    "Скрипт только нажимает клавишу E с интервалом.", , "T64 Ret9 AHK Help")
}

F2::
{
    global OrangeBot := !OrangeBot
    if (OrangeBot) {
        SetTimer(OrangeBotLoop, 100)
        ToolTip("[ВКЛ] Апельсины - подходите к деревьям!", , , 1)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(OrangeBotLoop, 0)
        ToolTip("[ВЫКЛ] Апельсины", , , 1)
        SetTimer(RemoveToolTip, -2000)
    }
}

F3::
{
    global TreeBot := !TreeBot
    if (TreeBot) {
        SetTimer(TreeBotLoop, 100)
        ToolTip("[ВКЛ] Лесоруб - подходите к деревьям!", , , 2)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(TreeBotLoop, 0)
        ToolTip("[ВЫКЛ] Лесоруб", , , 2)
        SetTimer(RemoveToolTip, -2000)
    }
}

F4::
{
    global MineAxeBot := !MineAxeBot
    if (MineAxeBot) {
        SetTimer(MineAxeBotLoop, 100)
        ToolTip("[ВКЛ] Карьер - подходите к точкам добычи!", , , 3)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(MineAxeBotLoop, 0)
        ToolTip("[ВЫКЛ] Карьер", , , 3)
        SetTimer(RemoveToolTip, -2000)
    }
}

F5::
{
    global ShroomBot := !ShroomBot
    if (ShroomBot) {
        SetTimer(ShroomBotLoop, 100)
        ToolTip("[ВКЛ] Грибы - ходите по поляне!", , , 4)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(ShroomBotLoop, 0)
        ToolTip("[ВЫКЛ] Грибы", , , 4)
        SetTimer(RemoveToolTip, -2000)
    }
}

F6::
{
    global FarmAbuse := !FarmAbuse
    if (FarmAbuse) {
        SetTimer(FarmAbuseLoop, 100)
        ToolTip("[ВКЛ] Абуз фермы", , , 5)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(FarmAbuseLoop, 0)
        ToolTip("[ВЫКЛ] Абуз фермы", , , 5)
        SetTimer(RemoveToolTip, -2000)
    }
}

F7::
{
    global SeemBot := !SeemBot
    if (SeemBot) {
        SetTimer(SeemBotLoop, 100)
        ToolTip("[ВКЛ] Швейка", , , 6)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(SeemBotLoop, 0)
        ToolTip("[ВЫКЛ] Швейка", , , 6)
        SetTimer(RemoveToolTip, -2000)
    }
}

F8::
{
    global HijackerBot := !HijackerBot
    if (HijackerBot) {
        SetTimer(HijackerBotLoop, 100)
        ToolTip("[ВКЛ] Угонки", , , 7)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(HijackerBotLoop, 0)
        ToolTip("[ВЫКЛ] Угонки", , , 7)
        SetTimer(RemoveToolTip, -2000)
    }
}

F9::
{
    global TaxiBot := !TaxiBot
    if (TaxiBot) {
        SetTimer(TaxiBotLoop, 100)
        ToolTip("[ВКЛ] Такси", , , 8)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(TaxiBotLoop, 0)
        ToolTip("[ВЫКЛ] Такси", , , 8)
        SetTimer(RemoveToolTip, -2000)
    }
}

F10::
{
    global SkillsBot := !SkillsBot
    if (SkillsBot) {
        SetTimer(SkillsBotLoop, 100)
        ToolTip("[ВКЛ] Скиллы", , , 9)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(SkillsBotLoop, 0)
        ToolTip("[ВЫКЛ] Скиллы", , , 9)
        SetTimer(RemoveToolTip, -2000)
    }
}

F11::
{
    global JailBot := !JailBot
    if (JailBot) {
        SetTimer(JailBotLoop, 100)
        ToolTip("[ВКЛ] Деморган (тюрьма)", , , 10)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(JailBotLoop, 0)
        ToolTip("[ВЫКЛ] Деморган", , , 10)
        SetTimer(RemoveToolTip, -2000)
    }
}

F12::
{
    global FoodBot := !FoodBot
    if (FoodBot) {
        SetTimer(FoodBotLoop, 1000)
        ToolTip("[ВКЛ] Авто еда/вода (проверка каждые 1с)", , , 11)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(FoodBotLoop, 0)
        ToolTip("[ВЫКЛ] Авто еда/вода", , , 11)
        SetTimer(RemoveToolTip, -2000)
    }
}

ScrollLock::
{
    global FishBot := !FishBot
    if (FishBot) {
        SetTimer(FishBotLoop, 100)
        ToolTip("[ВКЛ] Рыбалка x3 - забросьте удочку!", , , 12)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(FishBotLoop, 0)
        ToolTip("[ВЫКЛ] Рыбалка x3", , , 12)
        SetTimer(RemoveToolTip, -2000)
    }
}

Pause::
{
    global LegitFishBot := !LegitFishBot
    if (LegitFishBot) {
        SetTimer(LegitFishBotLoop, 100)
        ToolTip("[ВКЛ] Легит рыбалка - забросьте удочку!", , , 13)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(LegitFishBotLoop, 0)
        ToolTip("[ВЫКЛ] Легит рыбалка", , , 13)
        SetTimer(RemoveToolTip, -2000)
    }
}

Insert::
{
    global EMSPills := !EMSPills
    if (EMSPills) {
        SetTimer(EMSPillsLoop, 100)
        ToolTip("[ВКЛ] EMS Таблетки", , , 14)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(EMSPillsLoop, 0)
        ToolTip("[ВЫКЛ] EMS Таблетки", , , 14)
        SetTimer(RemoveToolTip, -2000)
    }
}

Home::
{
    global AntiAfk := !AntiAfk
    if (AntiAfk) {
        SetTimer(AntiAfkLoop, 5000)
        ToolTip("[ВКЛ] Анти-AFK (движение каждые 5с)", , , 15)
        SetTimer(RemoveToolTip, -3000)
    } else {
        SetTimer(AntiAfkLoop, 0)
        ToolTip("[ВЫКЛ] Анти-AFK", , , 15)
        SetTimer(RemoveToolTip, -2000)
    }
}

Esc::
{
    global OrangeBot := false
    global TreeBot := false
    global MineAxeBot := false
    global ShroomBot := false
    global FarmAbuse := false
    global SeemBot := false
    global HijackerBot := false
    global TaxiBot := false
    global SkillsBot := false
    global JailBot := false
    global FoodBot := false
    global FishBot := false
    global LegitFishBot := false
    global EMSPills := false
    global AntiAfk := false
    
    SetTimer(OrangeBotLoop, 0)
    SetTimer(TreeBotLoop, 0)
    SetTimer(MineAxeBotLoop, 0)
    SetTimer(ShroomBotLoop, 0)
    SetTimer(FarmAbuseLoop, 0)
    SetTimer(SeemBotLoop, 0)
    SetTimer(HijackerBotLoop, 0)
    SetTimer(TaxiBotLoop, 0)
    SetTimer(SkillsBotLoop, 0)
    SetTimer(JailBotLoop, 0)
    SetTimer(FoodBotLoop, 0)
    SetTimer(FishBotLoop, 0)
    SetTimer(LegitFishBotLoop, 0)
    SetTimer(EMSPillsLoop, 0)
    SetTimer(AntiAfkLoop, 0)
    
    ToolTip("[СТОП] Все боты остановлены!", , , 1)
    SetTimer(RemoveToolTip, -3000)
}

; ============================================================================
; ЦИКЛЫ БОТОВ
; ============================================================================

OrangeBotLoop()
{
    global OrangeBot
    if (!OrangeBot)
        return
    Send("{e}")
    randDelay := Random(3000, 5000)
    Sleep(randDelay)
}

TreeBotLoop()
{
    global TreeBot
    if (!TreeBot)
        return
    Send("{e}")
    randDelay := Random(2000, 4000)
    Sleep(randDelay)
}

MineAxeBotLoop()
{
    global MineAxeBot
    if (!MineAxeBot)
        return
    Send("{e}")
    randDelay := Random(2000, 4000)
    Sleep(randDelay)
}

ShroomBotLoop()
{
    global ShroomBot
    if (!ShroomBot)
        return
    Send("{e}")
    randDelay := Random(1000, 3000)
    Sleep(randDelay)
}

FarmAbuseLoop()
{
    global FarmAbuse
    if (!FarmAbuse)
        return
    Send("{e}")
    randDelay := Random(500, 1500)
    Sleep(randDelay)
}

SeemBotLoop()
{
    global SeemBot
    if (!SeemBot)
        return
    Send("{e}")
    randDelay := Random(2000, 4000)
    Sleep(randDelay)
}

HijackerBotLoop()
{
    global HijackerBot
    if (!HijackerBot)
        return
    Send("{e}")
    randDelay := Random(1000, 3000)
    Sleep(randDelay)
}

TaxiBotLoop()
{
    global TaxiBot
    if (!TaxiBot)
        return
    Send("{e}")
    randDelay := Random(2000, 5000)
    Sleep(randDelay)
}

SkillsBotLoop()
{
    global SkillsBot
    if (!SkillsBot)
        return
    Send("{e}")
    randDelay := Random(10000, 30000)
    Sleep(randDelay)
}

JailBotLoop()
{
    global JailBot
    if (!JailBot)
        return
    Send("{e}")
    randDelay := Random(2000, 4000)
    Sleep(randDelay)
}

FoodBotLoop()
{
    global FoodBot
    if (!FoodBot)
        return
    Send("{e}")
    randDelay := Random(5000, 10000)
    Sleep(randDelay)
}

FishBotLoop()
{
    global FishBot
    if (!FishBot)
        return
    Send("{e}")
    waitBite := Random(3000, 7000)
    Sleep(waitBite)
    if (FishBot)
        Send("{e}")
    randDelay := Random(2000, 4000)
    Sleep(randDelay)
}

LegitFishBotLoop()
{
    global LegitFishBot
    if (!LegitFishBot)
        return
    Send("{e}")
    waitBite := Random(5000, 10000)
    Sleep(waitBite)
    if (LegitFishBot)
        Send("{e}")
    randDelay := Random(5000, 10000)
    Sleep(randDelay)
}

EMSPillsLoop()
{
    global EMSPills
    if (!EMSPills)
        return
    Send("{e}")
    randDelay := Random(10000, 30000)
    Sleep(randDelay)
}

AntiAfkLoop()
{
    global AntiAfk
    if (!AntiAfk)
        return
    Send("{w down}")
    Sleep(100)
    Send("{w up}")
    Sleep(200)
    Send("{s down}")
    Sleep(100)
    Send("{s up}")
    Sleep(200)
    Send("{a down}")
    Sleep(100)
    Send("{a up}")
    Sleep(200)
    Send("{d down}")
    Sleep(100)
    Send("{d up}")
}

RemoveToolTip()
{
    ToolTip()
}
