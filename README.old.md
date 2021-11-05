# Тестовое задание Aviasales ([frontend](https://aviasales.recruitee.com/o/frontend-developer-js-coffeescript-react%C2%A0redux--aviasalesru))

Основной frontend проект нашей команды — это страница выдачи билетов со множеством фильтров, настроек и, собственно, билетов.
Проект написан на React, поэтому тестовое задание приближено к ежедневным задачам.

Перед тобой упрощенный макет нашего проекта — список билетов, фильтры и сортировка. Также у нас есть небольшой сервер для тестового задания, который работает схоже с нашим основным backend движком и реализует технику long polling для передачи пачек билетов. Тебе необходимо реализовать клиент, который будет получать случайно сгенерированные билеты от сервера и отрисует интерфейс согласно макету в Figma. Достаточно будет отрендерить 5 первых билетов соотвествующих выбранным фильтрам и сортировки.

## Условия

- Используй React
- Используй TS или JS
- Работоспособность в актуальной версии Google Chrome
- Остальное на твоё усмотрение

## Документация по работе с сервером: [Здесь](https://github.com/KosyanMedia/test-tasks/blob/master/aviasales_frontend/server.md)

## Макет (Figma)
https://github.com/KosyanMedia/test-tasks/raw/f0f60244b045928746188a86ba4f76ddb5515111/aviasales_frontend/Aviasales%20Test%20Task.fig

Figma 

![](search_preview.png?raw=true)

Удачи! Если будут какие-то вопросы, пиши – добавим уточнения в репу.

P.S.: Картинки авиакомпаний можешь брать с нашего CDN: `//pics.avs.io/99/36/{IATA_CODE_HERE}.png`


# Server md

# Описание взаимодействия с сервером

Схема работы проста: сначала необходимо инициировать поиск на сервере и получить идентификатор поиска (`searchId`). Далее, с полученным `searchId`, ты делаешь запросы для получения неотсортированных списков билетов. Обрати внимание, что билеты прилетают пачками, которые необходимо агрегировать, фильтровать и сортировать согласно выбранным в интерфейсе параметрам. Для усложнения задачи, сервер может на один из запросов ответить ошибкой.

## Получение `searchId`

Просто отправь GET-запрос на `https://front-test.beta.aviasales.ru/search` и получи его.

Пример:

Request: `https://front-test.beta.aviasales.ru/search`

Response: `{"searchId":"4niyd"}`

## Получение пачки билетов

Отправляй GET-запросы на `https://front-test.beta.aviasales.ru/tickets` и передай searchId полученный из запроса выше GET-параметром.

Пример:

Request: `https://front-test.beta.aviasales.ru/tickets?searchId=4niyd`

Response: `{tickets: [], stop: false}`

## Обработка завершения поиска

Поиск считается завершенным, когда в очередном ответе от сервера придёт значение `{stop: true}`.

Пример:

Request: `https://front-test.beta.aviasales.ru/tickets?searchId=4niyd`

Response: `{tickets: [], stop: true}`

## Структура билета

В списке `tickets` будут лежать билеты следующей структуры:

```typescript
interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}
```
