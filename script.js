/* for (var i=0; i<Infinity; i++) {
    for (var i=0; i<Infinity; i++) {
        console.log(i);
        for (var i=0; i<Infinity; i++) {
            console.log(i);
            for (var i=0; i<Infinity; i++) {
                console.log(i);
                for (var i=0; i<Infinity; i++) {
                    console.log(i);
                    }
                }
            }
        }
    console.log(i);
    } */

/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';
/* 
let a = +prompt('Сколько фильмов вы уже посмотрели', '' );

let numberOfFilms = a; 

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false
}

const b = prompt('Один из последних просмотренных фильмов?', ''),
      c = prompt('На сколько оцените его?', ''),
      v = prompt('Один из последних просмотренных фильмов?', ''),
      x = prompt('На сколько оцените его?', '')

      personalMovieDB.movies[b] = c;
      personalMovieDB.movies[v] = x;

console.log(personalMovieDB);


for (i=5;i>4&& i<11;i++ ){
    console.log(i);

}




var arr = [10,11,12,13,14,15,16,17,18,19,20];
 
for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i]===13) break;
    console.log(arr[i]);
    
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  }


  for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}


let i = 2;
 
while(i <= 16) {
    if (i % 2) {
        console.log(i);
    }
    i++;
    if(i===16) break;
}


const arrayOfNumbers = [];
    for(i=5; i=11; i++){
        arrayOfNumbers[i]
    }


const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];


for(i=0;i=arr.length; i++) {
    result[i] = arr[i]
    console.log(result)
}
console.log(result)


const data1 = [5, 10, 'Shopping', 20, 'Homework'];

for (i=0; i = data1.length;i++) {
    if(typeof(data1[i])== 'number' ){
        data1 = data1[i]* 2
    } else if( data1[i] == 'string') {
        data1 = data1[i] + 'done'
    }
    
}

console.log(data1);


const data = [5, 10, 'Shopping', 20, 'Homework'];

for (i=0; i=arr.length; i++){
    
}


function getMathResult(a,b) {
    if(typeof(b) !== Number || b <= 0 ) {
        return a;
    }
    let str = '';
    
    for ( i=1; i <= b; i++) {
        if(i ===b){
            str = str+ `${a*i}`;    
        } else {
             str += `${num * i}---`;
        }
        
    }
    return str;
    
}

console.log(getMathResult(5,2));




function calculateVolumeAndArea(num) {
    if(typeof(num) !== 'number' || num < 0){
        return 'При вычислении произошла ошибка';
    } else {
        let a = 0;
    let b = 0;
    a = num * num * num;
    b = 6* (num * num)
    return `Объем куба: ${Math.ceil(a)}, площадь всей поверхности: ${Math.ceil(b)}`;
    }
    
    
}

console.log(calculateVolumeAndArea(10));


function getCoupeNumber(num) {
    if(typeof(num) !=='number' || !Number.isInteger(num) ) {
        return "Ошибка. Проверьте правильность введенного номера места";
    } else if( num <=0 && num > 36  ){
        return "Таких мест в вагоне не существует";
    } else {
        return Math.ceil(num/4);
    }
}

console.log(getCoupeNumber(36));


function timeMinuts(time) {
    if (time <= 600 && typeof(time) == 'number'&& Number.isInteger(time)) {
        let hours = time/60;
        let minuts = time%60;
        let hoursStr ='';
        switch(hours){
            case 0:
                hoursStr ='часов';
                break;
            case 1:
                hoursStr ='час';
                break;
            case 2:
            case 3:
            case 4:
                hoursStr = 'часа';
                break;
            default:
                hoursStr='часов';
                break;
        }
        return `Это ${Math.round(hours)} ${hoursStr} и ${Math.round(minuts)} минут`;
    }
}

console.log(timeMinuts(130)); */



/* function numBig(a,b,c,d){
    if(a ==0 || b == 0 || c == 0 || d == 0 || 
        typeof(a) !=='number' || 
        typeof(b) !=='number' || 
        typeof(c) !=='number' || 
        typeof(d) ){
        return 0
    } else {
        return Math.max(a,b,c,d);
    }
    
}

console.log(numBig(2,3,5,8));


function solution(ы){
    return s.split("").reverse().join("");
}

console.log(solution('gasgsa')); */


/* const options = {
    name: 'Abrasfas',
    with:1024,
    height: 1024,
    color: {
        bg: 'red',
        border: 'green'
    }
}

for( let key in options){
    if(typeof(options[key] === Object) ) {
        console.log(``)
    }
    console.log(`Свойство ${key} имеет значение ${options}`);
} */




const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%',
            react: '10$'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(abs){
        const {age} = abs;
        const {languages} = abs.skills;
        let str = `Мне ${age} лет и я владеню языками :`;
        languages.forEach(function(lang){
            str += ` ${lang.toUpperCase()}`;
        })
        return str;

    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));





function xz(anime){
    let str ='';
    const {programmingLangs} = anime.skills;
    for(let key in programmingLangs ){
        str = str+ `Язык ${key} изучен на ${programmingLangs[key] }`
    }
    return str;
}

console.log(xz(personalPlanPeter));



function mohth(plan){
    const {exp} = plan.skills;
    return exp;
}

console.log(mohth(personalPlanPeter));

/* 



const arr = [1,2,3,4,5,6];


arr.forEach(function(item, i,count){
    console.log(`${item}: находится по порядку на месте ${i}, в массиве ${count}`)
});  */

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(massiv) {
    let str = 'Семья состоит из: '
    if(massiv.length === 0 ){
        return 'Семья пуста';
    } else {
        massiv.forEach(function(name){
            str += `${name} `
        })
        return str; 
    }
    
   /*  for (let key in massiv){
        console.log(`Семья состоит из: ${massiv[key]}`);
        
    } */
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(key){
        console.log(key.toLowerCase());
    })
}

console.log(standardizeStrings(favoriteCities));


const someString = 'This is some strange string';



function reverse(str) {
    if(str === ' '|| str === null) {
        return 'Ошибка'
    } else {
        return someString.split('').reverse().join('');
    }
}

console.log(reverse(someString));


const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

/* function availableCurr(arr,missingCurr){
    let str = '';
    str.length === 0 ? 'Нет доступных валют' : str = 'Доступные валюты :\n';

    arr.forEach(function(lang){
        if(lang  !== missingCurr) {
            str += `${lang}\n`
        }
    })
    return str;
}

console.log(availableCurr(additionalCurrencies, 'CNY')) */

function availableCurr(arr, missingCurr) {
        let str = 'Доступные валюты :\n';
        if(arr.length == 0) {
            return 'Нет доступных валют';
        } else {
            for (let key in arr) {
                if(arr[key] === missingCurr){
                    continue;
                } else {
                    str += `${arr[key]}\n`;
                }
                
            }
        }
        return str;
}

console.log(availableCurr([...additionalCurrencies,...baseCurrencies],'CNY'))


const shoppingMallData = {
    shops: [
        {
            width: 5,
            length: 5
        },
        {
            width: 5,
            length: 7
        },
        {
            width: 5,
            length: 5
        },
        {
            width: 5,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
}




function isBudgetEnough(data) {
    let sumArea = 0;
    let totalArea =0;
    data.shops.forEach(function(item){
        sumArea += item.width* item.length;
    });
    totalArea = data.height* sumArea;
    if(data.budget - (totalArea * data.moneyPer1m3) <= 0){
        return 'Бюджета недостаточно ';
    } else {
        return `Бюджета достаточно`;
    }

}
console.log(isBudgetEnough(shoppingMallData));

/* Задача:

У вас есть небольшой кусочек данных о торговом центре, которые записаны в объекте shoppingMallData. Они содержат массив с данными о магазинах, где указана длина и ширина помещения; высоту помещения; стоимость отопления за 1 кубический метр и бюджет на оплату отопления за месяц.

Основная задача - это написать функцию isBudgetEnough, которая буде возвращать строку. Если бюджета хватает для отопления всего объема торгового центра - выводится 'Бюджета достаточно', если нет - 'Бюджета недостаточно'. И все 🙂

Но эта задача содержит несколько подзадач внутри:

- вычисление общей площади всех магазинов, которая вычисляется как длина магазина, умноженная на его ширину;

- вычисление общего объема торгового центра, так как цена отопления указана в кубических метрах;

- определение того, хватает ли бюджета на оплату такого объема;

- все числа идут без единиц измерения для упрощения, просто цифры и все;

- функция должна продолжать работать, даже если изменяется количество магазинов, высота, бюджет или подставляется вообще другой объект.



Ответ с кодом этих задач можно найти тут: ссылка

Если у вас получилось немного по другому, но решение засчитывается - то все в порядке. Помните, что вариантов решения всегда несколько.

Но постарайтесь решить самостоятельно 🙂 */

const arrayObj = [
    {
      name: 'john',
      age: 23,
      image: '[...]'
    },
    {
      name: 'alex',
      age: 25,
      image: '[...]'
    }
]

let x = 0

arrayObj.forEach(obj => {
    console.log(obj['name']);
})

for(let i = 0; i < arrayObj.length; i++){
    console.log(arrayObj[i]['name']);
}
while (x < arrayObj.length){
    console.log(arrayObj[x]['name']);
    x++
}