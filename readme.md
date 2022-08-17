## Настройка окружения

1. Для запуска скрипта, нужно установить [node.js](https://nodejs.org/). Любую "Current" версию (на данный момент 18.x.x).
2. Дальше открыть powershell от имени администратора, и ввести туда `npm i -g pm2`. Это программа, которая запустит скрипт в фоне.

## Запуск скрипта

Запустить `install.bat` (установит зависимости для скрипта), затем `start.bat`

| Если будет ошибка `... cannot be loaded because running scripts is disabled on this system...`

## Авто-запуск при старте системы

Если windows, то нужно сделать ярлык файла `start.bat` и положить его в `C:/Users/%username%/AppData/Roaming/Microsoft/Windows/Start Menu/Programs/Startup`

## Удаление

1. Запустить `stop.bat`
2. Удалить pm2 (при желании) `npm remove -g pm2`
3. Удалить node.js
