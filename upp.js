// 1

// let str = 'Hi'
// let num = 123
// let flag = true
// let txt = 'true'
// console.log(typeof str)
// console.log(typeof num)
// console.log(typeof flag)
// console.log(typeof txt)

// 2

// let a1 = 5 + 3
// let a2 = 5 - 3
// let a3 = 5 * 3
// let a4 = 5 / 3
// let a5 = 5 % 3

// console.log( a1, a2, a3, a4, a5 )

// 3

// let a6 = 5 + '3'
// let a7 = '5' - 3
// let a8 = 75 + 'кг'
//  console.log( a6, a7, a8)

// 4

// let height = 23
// let wight = 10
// let s = height * wight

// console.log (s)

// 5

// let heightC = 10
// let dC = 4
// let rC = dC / 2
// let r2 = Math.pow(rC, 2)

// let v = 3.14 * r2 * heightC
// console.log(v)

// 6

// let n = 3
// let m = 4
// let k = Math.sqrt(Math.pow(n, 2) + Math.pow(m, 2))
// console.log (k)

// 7

// 8

// let s = 2000000
// let p = 10
// let years = 5
// let perepl =(s / 100) * (p * years)

// console.log(perepl)

// 9

// if(true){
//     console.log(1)
// }

// 10

// let m = 30
// if(m > 50){
//     n = 'Big'
//     console.log(n)
// } else{
//     n = 'Small'
//     console.log(n)
// }

// 11

// let i = 45
// while(i < 67){
//     i++
//     console.log(i)
// }

// 12

// let i = 45
// while(i++ < 670){
//     i % 10 || console.log(i)
// }

//  13

// for (let i = 45; i < 67; i++) {
//     console.log(i);
//   }

//   for (let i = 45; i < 670; i++) {
//     i % 10 || console.log(i)

//   }

// 14

// let n = 7

// switch (n){

//     case(1 + 9):
//      console.log('One')
//      break

//     case(2):
//      console.log('Two')
//      break

//     case(3 - 1):
//      console.log('Three')
//      break

//     case(4):
//      console.log('Four')
//      break

//      case(5 + 3):
//      console.log('Five')
//      break

//     case(6):
//      console.log('Six')
//      break

//     case(7):
//      console.log('Seven, Yea!')
//      break

//     case(8):
//      console.log('Eight')
//      break

//     default:
//      console.log('Nothing')

// }

// 15

// let size = 120 //Кб
// let unit = 'Кб'
// let w = (size * 1024) + ' Байт'
// console.log(w)

// 16

// function hello1(){
//     console.log('Привет, JavaScript!')
// }

// hello1()

// 17

// function hello2(name) {
//     console.log("Привет, " + (name || "Гость"));
//   }

// hello2(name ='kk')8

// 18

// function mul(m, n){
//     return m * n
// }

// let res = mul(4, 5)
// console.log(res)

// 19

// console.log('Repeat'.repeat(2))

// 20

// Создайте функцию rgb(), которая будет принимать три числовых аргумента и возвращать строку вида «rgb(23,100,134)». Если аргументы не заданы,
// считать их равными нулю. Не проверять переменные на тип данных

// 21

//Создайте функцию avg() , которая будет находить среднее значение по всем своим аргументам (аргументы величины числовые).

// 22

// function m(a, b) {
//   return mul(a, b);
// }

// function mul(a, b) {
//   return a * b;
// }

// console.log(m(2, 4));

// 23

// function operation(m, n, o = mul){
//     return mul(m, n)

// }
// function mul(a, b) {
//   return a * b;
// }

// console.log(operation(2,5))

// Отработка циклов

// 1

// for (i = 1; i <= 100; i++){
//     console.log(i)
// }

// 2

// for (i = 100; i >= 0; i--){
//     console.log(i)
// }

// 3

// for (i = 2; i <= 100; i += 2){

//         console.log (i)

// }

// 4 **

// var arr = [];
// for (var i = 0; i < 10; i++) {
// 	arr[i] = 'x';
// }
// console.log(arr);

// 5

// var arr = [];
// for (var i = 0; i <= 10; i++) {
// 	arr[i] = i;
// }
// console.log(arr);

// 6**

// let arr = []
// for (var i = 0; i < 10; i++) {
// 	arr.push(Math.random().toFixed(2));
// }
// console.log(arr);

// 7

// let arr = []
// for (i = 0; i < 10; i++){
//     arr.push(Math.random())
// }
// console.log(arr)

// 8**

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for (var i = 0; i < arr.length; i++) {
// 	if(arr[i] == 5) {
// 		console.log('Есть!');
// 		break;
// 	}}

// 9
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// for(i = 1; i > 0, i < 10; i++){
//     console.log(i)
// }

// 10**

// var arr = [1, 2, 3, 4, 5];
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// alert(sum);

// Работа с переменными

// let num = 3
// console.log(num)

// let a = 10
// let b = 2
// console.log(a + b, a - b, a * b, a / b)

// let c = 15
// let d = 2
// let result = c + d
// console.log(result)

// let a = 10
// let b = 2
// let c = 5
// console.log(a + b + c)

// let a = 17
// let b = 10
// let c = a - b
// let d = 7
// let result = c + d
// console.log (result)

// Работа со строками

// let str = 'Привет, Мир!'
// console.log(str)

// let str1 = 'Привет, '
// let str2 = 'Мир!'
// console.log(str1 + str2)

// let name = 'Виктория'
// console.log('Привет ' + name + '!')

// let age = 22
// console.log('Мне ' + age + ' года!')

// Функция prompt

// result = prompt('Ваше имя?',)
// alert(`Ваше имя ${result}`)

// result = prompt('Введите число...')
// alert(Math.pow(result, 2))

// Обращение к символам строки

// let str = 'abcde'
// console.log(str[0], str[2], str[4])

// let num = '12345'
// let num1 = Number(num)
// let result = num[0] * num[1] * num[2] * num[3] * num[4]
// console.log(result)

// Практика

// let sec = 1
// let min = 60 * sec
// let hour = 60 * min
// let dey = 24 * hour
// let mounth = 30 * dey
// console.log(hour, dey, mounth)

// let hour = 'Час'
// let minute = 'Минута'
// let sec = 'Секунда'
// let time =`${hour}:${minute}:${sec}`
// console.log(time)

// let res = 5
// let re2 = Math.pow(res, 2)
// console.log(re2)

// Работа с присваиванием и декрементами

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// console.log(num);

// var num = 10;
// num = num++;
// num = num++;
// num = num--;
// console.log(num);

// Работа с массивами

// let arr = ['a', 'b', 'c']
// console.log(arr)

// console.log(arr[0], arr[1], arr[2])

// let arr = ['a', 'b', 'c', 'd']
// console.log(`${arr[0]}+${arr[1]},${arr[2]}+${arr[3]}`)

// let arr = [2, 5, 3, 9]
// let result = (arr[0]*arr[1])+(arr[2]*arr[3])
// console.log(result)

// Объекты (ассоциативные массивы)

// let obj1 = {a: 1, b: 2, c: 3}
// console.log(obj1.a)
// console.log(obj1['b'])

// let obj = {Коля: '1000', Вася: '500', Петя: '200'}
// console.log(obj['Коля'])
// console.log(obj.Петя)

// let day = {
//    1: 'Понедельник',
//    2: 'Вторник',
//    3: 'Среда',
//    4: 'Четверг',
//    5: 'Пятница',
//    6: 'Суббота',
//    7: 'Воскресенье'
// }
// console.log(day['6'])
// let day1 = 3
// console.log(day[day1])

// Многомерные массивы

// let mass = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ]
// console.log(mass[1][0])

// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}
// console.log(obj.js[0])

// let mass = {
//     'ru':[
//      'Понедельник',
//      'Вторник',
//      'Среда',
//      'Четверг',
//      'Пятница',
//      'Суббота',
//     'Воскресенье'
//     ],

//     'en':[
//      'Monday',
//      'Tuesday',
//      'Wednesday',
//      'Thursday',
//      'Friday',
//      'Saturday',
//      'Sunday'
//     ]
// }

// let lang = 'en'
// let day = 5
// console.log(mass[lang][day])
// console.log(mass.ru[0], mass.en[2])

// Работа с if-else

// let a = 0
// if(a == 0){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let b = 1
// if(b == 9){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let c = -3
// if(c == -3){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let a = 0;
// if (a > 0) {
//   console.log("Right");
// } else {
//   console.log("No");
// }

// let b = 1;
// if (b < 9) {
//   console.log("Right");
// } else {
//   console.log("No");
// }

// let c = 3;
// if (c > -3) {
//   console.log("Right");
// } else {
//   console.log("No");
// }

// let a = 0
// if(a <= 0){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let b = 1
// if(b >= 9){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let c = 3
// if(c != -3){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let a = 'test'
// if(a == 'test'){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let b = 'Тест'
// if(b == 'Test'){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let c = 3
// if(c == -3){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let a = '1'
// if(a === String('1') ){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let b = 1
// if(b === String('1')){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// let c = -3
// if(c === String('-3')){
//     console.log('Right')
// } else {
//     console.log('No')
// }

// Работа с логическими переменными

// let test = true
// if(test == true){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let res = (test == false) ? true : false
// console.log(res)

// let test = true
// if(test != true){
//     console.log('true')
// } else {
//     console.log('false')
// }

// let res = (test != false) ? true : false
// console.log(res)

// Работа с && (и) и || (или)

// let a = 5
// if(a > 0 || a == 2){
//     let res = a + 7
//     console.log(res)
// } else {
//     res = a / 10
//     console.log(res)
// }

// let a = 0
// if(a > 0 || a == 2){
//     let res = a + 7
//     console.log(res)
// } else {
//     res = a / 10
//     console.log(res)
// }

// let a = 1
// let b = 3
// if(a <= 1 || b >= 3){
//     let res = a + b
//     console.log(res)
// } else {
//     res = a - b
//     console.log(res)
// }

// let a = 0
// let b = 6
// if(a <= 1 || b >= 3){
//     let res = a + b
//     console.log(res)
// } else {
//     res = a - b
//     console.log(res)
// }

// let a = 1
// let b = 6
// if(a > 2 && a < 11 || b >= 6 && b < 14){
//     console.log('Right')
// } else {
//     console.log('False')
// }

// На switch-case

// let num = 3;
// switch (3) {
//   case 1:
//     console.log("Зима");
//     break;
//   case 2:
//     console.log("Весна");
//     break;
//   case 3:
//     console.log("Лето")
//       break
//   case 4:
//     console.log("Осень")
// }

// Задачи

// let day = 17;

// if (day > 0 && day < 11) {
//   console.log("Первая декада");
// }

// if (day > 10 && day < 21) {
//   console.log("Вторая декада");
// }

// if (day > 20 && day < 31) {
//   console.log("Третья декада");
// }

////////////////////////////////////////////

// let month = 8

// if (month > 0 && month < 3){
//     console.log("Январь Февраль")
// }

// if (month >= 3 && month < 6){
//     console.log("Март Апрель Май")
// }

// if (month >= 6 && month < 9){
//     console.log("Июнь Июль Август")
// }

// if (month >= 9 && month < 12){
//     console.log("Сентябрь Октябрь Ноябрь")
// }

// if (month == 12){
//     console.log("Декабрь")
// }

///////////////////////////////////////////

// let str = "abcde";
// if (str[0] == "a") {
//   console.log("True");
// } else {
//   console.log("False");
// }

// ///////////////////////////////////////////

// let str2 = "12345";
// if (str2[0] == 1 || 2 || 3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// ///////////////////////////////////////////

// let str3 = "457";
// let result = -str3[0] + -str3[1] + -str3[2];
// console.log(-result);

// ///////////////////////////////////////////

// let str1 = "608608";
// let sum1 = -str1[0] + -str1[1] + -str1[2];
// let sum2 = -str1[3] + -str1[4] + -str1[5];
// if (-sum1 == -sum2) {
//   console.log("Они равны");
// } else {
//   console.log("Они не равны");
// }

// console.log(-sum1);
// console.log(-sum2);

// Циклы while и for

// let u = 0
// while(u <= 100){
//     console.log(u)
//     u++
// }

// for(i = 0; i <= 100; i++) {
//     console.log(i)

// }

// let u = 11
// while(u <= 33){
//     console.log(u)
//     u++
// }

// for( i = 11; i <= 33; i++){
//     console.log(i)
// }

// let u = 0;
// while (u <= 100) {
//   if (u % 2 == 0) {
//     console.log(u);
//   }
//   u++;
// }

// for (let i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i);
//   }
// }

// let sum = 0;
// for (i = 0; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let u = 0;
// let sum2 = 0;
// while (u <= 100) {
//   sum2 += u++;
// }
// console.log(sum2);

// Работа с for для массивов

// let arr = [1, 2, 3, 4, 5]
// for (i = 0; i <= 4 ; i++){
//      console.log(arr[i])
// }

// result = 0
// let arr1 = [1, 2, 3, 4, 5]
// for(i = 0; i < arr.length; i++){
//     result += arr1[i]
// }
// console.log(result)

// Работа с for-in

// let obj = {green: 'зеленый', red: 'красный', blue: 'голубой'}
// for(let key in obj){
//     console.log(key + ':' + obj[key])
// }

// let obj = { Коля: 200, Вася: 300, Петя: 400 };
// for (let key in obj) {
//   console.log(key + " - зарплата " + obj[key] + " долларов");
// }

// Задачи

// let arr = [2, 5, 9, 15, 0, 4]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] > 3 && arr[i] < 10){
//         console.log(arr[i])
//     }
// }

// let result = 0;
// let arr = [2, -5, 9, -15, 0, 4];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 0) {
//     result += arr[i];
//   }
// }
// console.log(result);

// let arr = [1, 2, 5, 9, 4, 13, 4, 10]
// for(i = 0; i < arr.length; i++){
//     if(arr[i] == 4){
//         console.log('Есть')
//     }
// }

///////////////////////////////******
// let arr = [10, 20, 30, 50, 235, 3000]
// for(i = 0; i < arr.length; i++){
//     if(arr[i][0] === 1 || 2 || 5){
//         console.log(arr[i])
//     }
// }

// let arr = [10, 20, 30, 50, 235, 3000];

// for (let i = 0; i < arr.length; i++) {
//   let num = String(arr[i]);
//   let char = num[0];
//   if (char == 1 || char == 2 || char == 5) {
//     console.log(num);
//   }
// }

//

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// for( i = 0; i < arr.length; i++){
//     let str = String(arr[i])
//     console.log('-'+ str + '-')
// }

//////////////////////////////////////********** *
// let arr = [
//   "Понедельник",
//   "Вторник",
//   "Среда",
//   "Четверг",
//   "Пятница",
//   "Суббота",
//   "Воскресенье",
// ]

// for(i = 0; i < arr.length; i++){
//     console.log(arr[i])
//     if(i == "Суббота" || "Воскресенье"){
//         document.write('<b>' + arr[i] + '</b> ');
//     }
// }

////////////////////////////////////////

// let n = 1000  //***

// while (n > 50) {
//     n = n / 2
// }
// console.log(n)

// Работа с %

// let a = 10
// let b = 3
// // let res = a % b
// // console.log(res)

// if(a % b === 0){
//     console.log('Делится ', a % b)
// }else{
//     console.log('Делится с остатком ', a % b)
// }

// Работа со степенью и корнем

// let st = Math.pow(2, 10)
// console.log(st)

// let cor = Math.sqrt(245)
// console.log(cor)

// let arr = [4, 2, 5, 19, 13, 0, 10]//**
// let res = 0
// for(i = 0; i < arr.length; i++){
//     res += Math.pow(arr[i], 3)
// }
// console.log(Math.sqrt(res))

// let q = 379
// let w = Math.sqrt(q)
// console.log(Math.round(w), Math.ceil(w), Math.floor(w))

// let w = Math.sqrt(587);
// let floo = Math.floor(w);
// let cei = Math.ceil(w);
// let obj = {
//   floor: floo,
//   ceil: cei,
// };
// for (let key in obj) console.log(obj[key]);

// Нахождение максимального и минимального числа

// let max = Math.max(4, -2, 5, 19, -130, 0, 10)
// let min = Math.min(4, -2, 5, 19, -130, 0, 10)
// console.log(max, min)

// Работа с рандомом

// function random(min, max){
//     return Math.floor(Math.random() * (max - min + 1)) + min
// }
// console.log(random(1, 100))

// let arr = [];
// for (i = 0; i < 10; i++) {
// 	arr[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1
// }
// console.log(arr)

// Работа с модулем

// let a = 10
// let b = 15
// console.log(Math.abs(a - b))

// let a = 15
// let b = 40
// let c = Math.abs(a - b)
// console.log(c)

///////////////////////////////////////

// let arr = [12, 15, 20, 25, 59, 79];
// let sum = 0;
// for (i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum / 6);

// let fact = 1;
// let num = 4;
// for (var i = 1; i <= num; i++) {
//   fact = fact * i;
// }
// console.log(fact);

// Работа с регистром символов

// let str = 'js'
// console.log(str.toUpperCase())
// let str1 = 'JS'
// console.log(str1.toLowerCase())

// Работа с length, substr, substring, slice. Работа с indexOf

// let str = 'я учу javascript!'
// console.log(str.length)

// let str = "я учу javascript!";
// let subst = str.substring(2, 5);
// let subst2 = str.substring(6, 16);
// let subs = str.substr(2, 3);
// let subs2 = str.substr(6, 10);
// let sub = str.slice(2, 5);
// let sub2 = str.slice(6, 16);

// console.log(subst, subst2, subs, subs2, sub, sub2);

// let str = "я учу javascript!"
// console.log(str.indexOf('учу'))

// let str = "я учу javascript!";
// let n = 5;

// if (n < str.length) {
//   let result = str.substr(0, n) + "...";
//   console.log(result);
// } else {
//   let result = str;
//   console.log(result);
// }

// Работа с replace

// let str = 'Я-учу-javascript!'
// console.log(str.replace(/-/g, '!'))

// Работа с split

// let str = 'я учу javascript!'
// let arr = str.split(' ')
// let arr1 = str.split('')
// console.log(arr, arr1)

// let date = '2025-12-31'
// let arr = date.split('-')
// let newStr = arr[2] + '/' + arr[1]+ '/' + arr[0]
// console.log(newStr)

// Работа с join

// let arr =  ['я', 'учу', 'javascript', '!']
// let str = arr.join('+')
// console.log(str)

// Задачи

// let str = 'я учу javascript!'
// console.log(str[0].toUpperCase() + ' ' + str.slice(2, 16))
// console.log(str[0].toUpperCase() + ' ' + str[2].toUpperCase() +
// str.slice(3, 5) + ' ' + str[6].toUpperCase() + str.slice(7, 16))

// let str = 'var_test_text'
// let new_str = str.split('_')
// for(i = 1; i <new_str.length; i++){
//   new_str[i] = new_str[i].slice(0, 1).toUpperCase() + new_str[i].slice(1)
// }
// let res = new_str.join('')
// console.log(res)

// Работа с concat, Работа с reverse, Работа с push, unshift
// let a = [1, 2, 3]
// let q = [1, 2, 3]
// let w = [1, 2, 3]
// let b = [4, 5 ,6]
// let c = a.concat(b)
// let s = a.reverse()
// q.push(4, 5, 6)
// w.unshift(4, 5, 6)

// console.log(c, s, q, a, w)

// Работа с shift, pop, Работа с slice, Работа с splice

// let arr = ['js', 'css', 'jq']
// console.log(arr.shift(), arr.pop())

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.slice(0, 3), arr.slice(3));

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = arr1.splice(1, 3);
// console.log(arr2);
// let arr3 = [1, 2, 3, 4, 5];
// arr3.splice(3, 0, "a", "b", "c");
// console.log(arr3);
// let arr4 = [1, 2, 3, 4, 5];
// arr4.splice(1, 0, "a", "b");
// arr4.splice(6, 0, "c");
// arr4.splice(8, 0, "e");
// console.log(arr4);

// Работа с sort, Работа с Object.keys

// let arr = [3, 4, 1, 2, 7];
// console.log(arr.sort());

// let obj = {js:'test', jq: 'hello', css: 'world'}
// for(let key in obj)
// console.log(key)
// console.log(Object.keys(obj))

// function one(num){
//   return num * num
// }
// console.log(one(4))

// function two(a, b){
//   return a + b
// }
// console.log(two(3, 4))

// function three(a, b, c){
//   return (a + b) / c
// }
// console.log(three(10, 15, 5))

// let days = function (day) {
//   if (day === 1) {
//     console.log("Пн");
//   } else if (day === 2) {
//     console.log("Вт");
//   } else if (day === 3) {
//     console.log("Ср");
//   } else if (day === 4) {
//     console.log("Чт");
//   } else if (day === 5) {
//     console.log("Пт");
//   } else if (day === 6) {
//     console.log("Сб");
//   } else if (day === 7) {
//     console.log("Вс");
//   } else {
//     console.log("Штош");
//   }
// };
// console.log(days(1));

// let arr = [1, 2, 3, 4, 5];
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == 5) {
//     result = "Есть";
//   } else {
//     result = "Нет";
//   }
// }
// console.log(result);

// let num = 31
// for(i = 0; i < 30; i++){
//     if(num / i == 0){
//         result = 'False'
//     } else if(num / 31 || 1 == 1){
//         result = 'True'
//     }
// }
// console.log(result)

// let arr = [1, 2, 3, 3, 4, 5];
// let flag = false;
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] == arr[i - 1]) {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// function num(a, b){
//     if(a == b){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(num(2, 1))

// function num1(a, b){
//     if (a + b > 10){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(num1(2, 9))

// function num2(a){
//     if (a < 0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(num2(-5))

// let str = ''
// for (i = 1; i < 10 ; i++){
//     str = str + i
// }
// console.log(str)

// let str = ''
// for (i = 9; i > 0 ; i--){
//     str = str + i
// }
// console.log(str)

// let str = ''
// for (i = 1; i < 10 ; i++){
//     str = str + '-' + i
// }
// console.log(str + '-')

// let str = ''
// for (i = 0; i < 20; i++){
//     str = str + 'X'
//     console.log(str)
// }

// let str = ''
// for (i = 1; i <= 9; i++){
//     for (j = 1; j <= i; j++){
//         console.log(i)
//     }

// }

// let str = ''
// for (i = 0; i < 10; i++){
//     str = str + 'X'
//     console.log(str + str)
// }

// let arr = []
// let str = 'X'
// for (i = 0; i < 10; i++){
//     arr.push(str)
//     str += 'X'
// }
// console.log(arr)

// let arr = [];
// for (i = 1; i <= 9; i++) {
//   let str = "";
//   for (j = 1; j <= i; j++) {
//     str += i;
//   }
//   arr.push(str);
// }
// console.log(arr);

// let arr = [1, 2, 3, 3, 4, 5];
// let sum = 0;
// for (i = 0; i <= arr.length; i++) {
//   sum += arr[i];
// if (sum > 10) {
//     console.log(i);
// }
// }

// let arr = [1, 2, 3, 3, 4, 5];
// let res = [];
// for (i = arr.length - 1; i >= 0; i--) {
//   res.push(arr[i]);
// }
// console.log(res);

// function isNumberInRange(num){
//     if  (num > 0 && num < 10){
//         return true
//     } else {
//         return false
//     }
// }
// let arr = [1, -2, 13, 3, -4, 5]

// let arr1 = []
// for (i = 0; i <= arr.length; i++){
//     if(isNumberInRange(arr[i])){
//         arr1.push(arr[i])
//     }
// }
//  console.log(arr1)

// function getDigitsSum(num) { ****
//     let sum = 0;
//     let str = String(num);
//     for(let i = 0; i < str.length; i++) sum += Number(str[i]);
//     return sum;
// }

// console.log(getDigitsSum(21))

// function isEven(num){
//     if (num % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }
// console.log(isEven(3))
// let arr = [1, 2, 13, 3, 4, 5]
// let arr2 = []
// for (i = 0; i <= arr.length; i++){
//     if(isEven(arr[i])){
//         arr2.push(arr[i])

//     }
// }
// console.log(arr2)

// function isSimple(num){ ******
//     for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//         return false;
//     }
//     }
//     return true;
// }

// function getSimpleDivisors(num){
//     for(let j=1; j<num; j++){
//         if(num % j == 0 && isSimple(j)){
//             console.log(j);
//         }
//     }
// }

// console.log(getSimpleDivisors(99)); // 1, 3, 11, undefined
