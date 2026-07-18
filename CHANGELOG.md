# Changelog

## 5.8.0 (2026-04-25)

### Improvements

- improve typing for `PrintOptions` fields (`subset`, `orientation`, `scale`, `side`) with specific string literal unions (12caa69)
- throw proper `Error` objects instead of plain strings (12caa69)

## 5.7.0 (2026-02-19)

### Features

- support paperkind parameter (#521) (cd76e76)

## 5.6.0 (2023-03-07)

### Features

- list paper sizes supported by a specific printer (#447) (7f3d331)

## 5.5.0 (2023-01-24)

### Features

- allow different paper size options (#434) (a5e3b9d)
- update CirrusCI config (#437) (d9a3a72)

### Bug Fixes

- use SumatraPDF 32 bit build (#435) (71b9d07)

## 5.4.0 (2022-11-01)

### Features

- bump SumatraPDF from 3.3.3 to 3.4.6 (#404) (b8c639c)

## 5.3.0 (2022-03-13)

### Features

- export Printer and PrintOptions types (f96a82f)

## 5.2.0 (2021-12-12)

### Features

- add dependabot (18a9cf6)

### 5.1.1 (2021-11-24)

### Features

- add `copies` property (#301) (64bfec0)

## 5.1.0 (2021-11-22)

### Features

- add GitHub action to automate releases (c09761e)
- throw unsupported OS error on a method call (#296) (c93fbbd)
