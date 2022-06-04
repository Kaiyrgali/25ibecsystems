# Test Task
## for the position Frontend-developer (React)
![N|Solid](https://static.tildacdn.com/tild3330-3930-4864-b837-646366316231/Group_3_1.svg)

Original Task text - https://digitalspectrbook.notion.site/frontend-ReactJS-VueJS-9689b76266114d15a1125ee0de247390

- Пагинация просмотреть ролик
- Что такое каталог ?
- МАИН по центру
- Мобайл ферст
- Background - в деталях рисунок на всю страницу
- БЭМ на рейтинг и другие повторяющиеся детали
- Подобрать Спинер
- Развить на мелкие компоненты, например скрин вывести в отдельный компонент, рейтинг
- Убрать со страницы Броузер фетчинг в Сагу
- Фильтрация по версиям платформ не сделана (уровень глубже)
- Плавные переходы при кликах
- Рефакторинг страницы Филтер




https://api.rawg.io/docs/#operation/games_read
/games/{id}
id	
integer (ID)
slug	
string <slug> (Slug) non-empty ^[-a-zA-Z0-9_]+$
name	
string (Name) non-empty
name_original	
string (Name original) non-empty
description	
string (Description) non-empty
metacritic	
integer (Metacritic)
metacritic_platforms	
Array of objects (GamePlatformMetacritic)
released	
string <date> (Released)
tba	
boolean (TBA)
updated	
string <date-time> (Updated)
background_image	
string <uri> (Background image)
background_image_additional	
string (Background image additional)
website	
string <uri> (Website) non-empty
rating
required
number (Rating)
rating_top	
integer (Rating top)
ratings	
object (Ratings)
reactions	
object (Reactions)
added	
integer (Added)
added_by_status	
object (Added by status)
playtime	
integer (Playtime)
in hours

screenshots_count	
integer (Screenshots count)
movies_count	
integer (Movies count)
creators_count	
integer (Creators count)
achievements_count	
integer (Achievements count)
parent_achievements_count	
string (Parent achievements count)
reddit_url	
string (Reddit url) non-empty
For example "https://www.reddit.com/r/uncharted/" or "uncharted"

reddit_name	
string (Reddit name) non-empty
reddit_description	
string (Reddit description) non-empty
reddit_logo	
string <uri> (Reddit logo) non-empty
reddit_count	
integer (Reddit count)
twitch_count	
string (Twitch count)
youtube_count	
string (Youtube count)
reviews_text_count	
string (Reviews text count)
ratings_count	
integer (Ratings count)
suggestions_count	
integer (Suggestions count)
alternative_names	
Array of strings (Alternative names)
metacritic_url	
string (Metacritic url) non-empty
For example "http://www.metacritic.com/game/playstation-4/the-witcher-3-wild-hunt"

parents_count	
integer (Parents count)
additions_count	
integer (Additions count)
game_series_count	
integer (Game series count)
esrb_rating	
object Nullable
platforms
API Key
4b8f23359f464857b5bfdea7a6e306aa

### Instruction

#### Main Page
- the main page consists of three columns: PAST LAUNCHES, LAUNCHES and MY LAUNCHES;
- the "PAST LAUNCHES" column shows all past flights. You cannot choose a trip from the past unless your name is Marty McFly 🚀;
- the "LAUNCHES" column shows a list of future flights. You can move the card with the flight of interest to the third column "MY LAUNCHES" with the mouse (the "MY LAUNCHES" column will be highlighted in 💚);
- you cannot move your flight card to another place;
- for canceling your flight booking - move the card back from the "MY LAUNCHES" column to the "LAUNCHES" column (the "MY LAUNCHES" column will be highlighted in 💗).

#### Details Page
- if you click on any card you will be redirected to the flight details page;
- you will see that design is not my strong skill 😎;
- clicking on "Back to FlightShop" will return you to the main page. Attention, all cards in your cart will be saved and all data of flies will not be re-downloaded from the server.

#### Modal window
- each time you move a card between columns, you must confirm your choice in a special window. If you click No, nothing will change.

### Actually used technologies

| Technology  | Necessarily  |  Will count as + |  Will count as - |
| ------------ | ------------ | ------------ | ------------ |
| React  | +  |   |   |
|  ESlint | + |   |   |
| Redux  |  + |   |   |
| Create React App  |   |   | -  |
|  Redux Thunk |   |   |  - |
|  Bootstrap |   |   | -  |
| Webpack  |   | +  |   |
| Redux Saga  |   | +  |   |
|  React dnd |   | +  |   |