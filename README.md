# yummyanime-parser

### Файл index.js парсит топ 100 аниме тайтлов на выбор длва варианта сериалы или фильмы 

> фильмы сохраняются в файл animeF.json в формате json

> сериалы сохраняются в файл animeС.json в формате json

> Аниме сохроняются в виде масива обьектов:
```sh

{
  url: 'https://yummyanime.club/catalog/item/avatar-korolya',
  image: 'https://yummyanime.club/img/posters/1568213162.jpg',
  alt: 'Аватар короля',
  year: '2017',
  rating: '8.98',
  views: '2 679 105'
}

```

### Файл app.js парсит аниме все аниме и сохроняет их в файл:
```sh
animeCatalog.json
```

## Как запустить программу 

```sh
git clone https://github.com/nik19ta/yummyanime-parser.git
```
```sh
cd yummyanime-parser
```
```sh
npm i 
or
yarn i
```
Для того что бы спарсить топ 100 нужно запустить 
```sh
node index
```
Для того что бы спарсить все аниме надо запустить 
```sh
node app
```
