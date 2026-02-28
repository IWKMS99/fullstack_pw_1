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

## Git и публикация

В репозитории уже настроены:
- `.gitignore` (игнор `node_modules`, `dist`, `.env*`, кэшей и локальных артефактов)
- `.editorconfig`
- `.gitattributes`

Для первой публикации на GitHub:

```bash
git remote add origin <repo-url>
git push -u origin main
```
