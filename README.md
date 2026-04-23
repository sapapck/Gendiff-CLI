### Hexlet tests and linter status:

[![Actions Status](https://github.com/sapapck/Gendiff-CLI/workflows/hexlet-check/badge.svg)](https://github.com/sapapck/Gendiff-CLI/actions)
![Actions Status](https://github.com/sapapck/Gendiff-CLI/actions/workflows/node.yml/badge.svg)
[![Coverage Status](https://coveralls.io/repos/github/sapapck/Gendiff-CLI/badge.svg?branch=main)](https://coveralls.io/github/sapapck/Gendiff-CLI?branch=main)

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
