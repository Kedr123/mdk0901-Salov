/*1*/
let boocks = document.querySelectorAll(".book");
let book= document.querySelector(".books");
let newBook = document.createElement('aside');
newBook.className="books"
book.replaceWith(newBook);
newBook.append(boocks[1], boocks[0], boocks[4], boocks[3], boocks[5], boocks[2]);

/*2*/
let body = document.querySelector("body");
body.style.backgroundImage ="url(image/you-dont-know-js.jpg)"; 

/*3*/
let a = document.querySelectorAll("a");
a[2].textContent="Книга 3. this и Прототипы Объектов";

/*4*/
let adv = document.querySelector(".adv");
adv.remove();

/*5*/
let ul = document.querySelectorAll("ul");

li = ul[1].children;
ul2=ul[1];
let newUl = document.createElement('ul');
ul2.replaceWith(newUl);
newUl.append(li[0], li[1], li[3], li[6], li[8], li[4], li[5], li[7], li[9], li[2], li[10]);

li5 = ul[4].children;
ul5=ul[4];
let newUl5 = document.createElement('ul');
ul5.replaceWith(newUl5);
newUl5.append(li5[0], li5[1], li5[9], li5[3], li5[4], li5[2], li5[6], li5[7], li5[5], li5[8], li5[10]);

/*6*/
let g8 = document.createElement("li");
g8.textContent= "Глава 8: За пределами ES6";

li6 = ul[5].children;
li6[8].after(g8);