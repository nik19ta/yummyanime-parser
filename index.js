let request = require('request');
let fs = require('fs');
const { parse } = require('node-html-parser');

let config = {
    // link: 'https://yummyanime.club/top', // сериалы
    link: 'https://yummyanime.club/top?sort=films', // фильмы
    // file: 'animeC.json',
    file: 'animeF.json',
}

let options = { headers: { 'user-agent': 'node.js'} }

function getText(text, param1, param2) { return text.split(param1)[1].split(param2)[0] };
function del(text) { return text.replace(/\s+/g, ' ').trim()};

let animis = [];
console.log('Начинается закачка');
request(config.link, options, function (error, response, body) {
    const root = parse(body);
    for (let i = 0; i < 100; i++) {
        animis.push({
            url: 'https://yummyanime.club' +getText(root.querySelectorAll('.anime-column')[i].childNodes[1].rawAttrs, 'href="', '"'),
            image: 'https://yummyanime.club'+getText(root.querySelectorAll('.anime-column')[i].childNodes[1].childNodes[3].rawAttrs, 'src="', '" alt='),
            alt: getText(root.querySelectorAll('.anime-column')[i].childNodes[1].childNodes[3].rawAttrs, 'alt="', '"'),
            year: root.querySelectorAll('.anime-column')[i].childNodes[1].childNodes[1].childNodes[0].rawText,
            rating:root.querySelectorAll('.main-rating')[i].childNodes[0].rawText,
            views:del(root.querySelectorAll('.fa-eye')[0].parentNode.childNodes[2].rawText)
        });
        
        if (i + 1 == 100) {
            console.log('Начинается записаь в файл');
            setTimeout(() => {
                fs.writeFileSync(config.file, JSON.stringify(animis))
                console.log(`Всё данные записанны, ${animis.length} тайтлов`);
            }, 1000)
        }
    };
    
});