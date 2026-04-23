### Hexlet tests and linter status:

[![Actions Status](https://github.com/sapapck/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/sapapck/frontend-project-46/actions)
![Actions Status](https://github.com/sapapck/frontend-project-46/actions/workflows/node.yml/badge.svg)
[![Maintainability](https://api.codeclimate.com/v1/badges/c35eae4c694440ca7de6/maintainability)](https://codeclimate.com/github/sapapck/frontend-project-46/maintainability)
[![Coverage Status](https://coveralls.io/repos/github/sapapck/frontend-project-46/badge.svg?branch=main)](https://coveralls.io/github/sapapck/frontend-project-46?branch=main)

---

# Описание:

GenDiff — это CLI-приложение (утилита командной строки), которое вычисляет разницу между двумя файлами и выводит её в одном из трёх форматов.
Приложение работает с форматами JSON и YAML (YML).
Поддерживаемые форматы вывода: stylish (стилизованный), plain (плоский текст) и json.

---

## Установка:

Внимание! Команды должны выполняться из директории приложения!

Установка зависимостей

```
make install
```

Установка пакета с приложением

Следующая команда может потребоваться sudo!

```
make link
```

---

## Использование:

```
Usage: gendiff [-h] [-V] [-f] <filepath1> <filepath2>

Optional arguments:
  -V, --version  Show program's version number and exit.
  -f, --format   Choose output format.
  -h, --help     Show this help message and exit.

```

## Поддерживаемые форматы:

### stylish

[![asciicast](https://asciinema.org/a/Sn8PhmeJLv3VIJhQ2MwbiXPiX.svg)](https://asciinema.org/a/Sn8PhmeJLv3VIJhQ2MwbiXPiX)

### plain

[![asciicast](https://asciinema.org/a/ern1I0x8F4eMaaTJxXE8EDZFH.svg)](https://asciinema.org/a/ern1I0x8F4eMaaTJxXE8EDZFH)

### json

[![asciicast](https://asciinema.org/a/CqTMrrHt3KZHQHGogZ6H2AGOR.svg)](https://asciinema.org/a/CqTMrrHt3KZHQHGogZ6H2AGOR)
