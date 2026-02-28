![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=flat-square&logo=redux&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat-square&logo=eslint&logoColor=white)

# Практическая работа №1: Context API vs Redux Toolkit

Приложение на React + TypeScript, в котором реализованы две версии Todo List:
- `Context API`
- `Redux Toolkit`

Цель работы: на одном и том же сценарии сравнить подходы к управлению состоянием.

## Что внутри

- Параллельный рендер двух реализаций Todo List.
- Добавление, переключение статуса и удаление задач.
- Встроенный блок с кратким сравнительным анализом архитектур.

## Технологии

- React 19
- TypeScript
- Vite
- Redux Toolkit
- React Redux
- ESLint

## Быстрый старт

```bash
npm install
npm run dev
```

Приложение запускается в режиме разработки через Vite.

## Скрипты

```bash
npm run dev      # запуск dev-сервера
npm run build    # production-сборка (tsc + vite build)
npm run lint     # проверка ESLint
npm run preview  # локальный просмотр production-сборки
```

## Структура проекта

```text
src/
  context-ver/      # реализация Todo на Context API
  redux-ver/        # реализация Todo на Redux Toolkit
  components/       # общие UI-блоки (включая AnalysisSection)
  types/            # общие типы
```
