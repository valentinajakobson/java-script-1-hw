// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100

let i = 0;
while (i < 101) {  
    console.log (i);
    i++;
  }

// 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
// 3. Товары в корзине хранятся в массиве. Задачи:
// a) Организовать такой массив для хранения товаров в корзине;
// b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let total = 0;
let basket = [{price: 30, price:50, price:100}];
basket.push({price:200});

  function countBasketPrice(){
    for(i = 0; i < basket.length; i++){
      total += basket[i].price;
    }  
   
    console.log("Total price is " + total)
  }
 countBasketPrice();
  

// 4.*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:
// for(…){// здесь пусто}

for (let i = 0; i < 9; i++, console.log(i)) {

}

//4) *Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
function printStars(number) {
    let line = "";
    for (let i = 0; i < number; i++) {
      line = line + "#";
    }
    console.log(line);
    return line;
  }
  // printStars(9);

  function printTriangle(length) {  // length has the number of lines the triangle should have
    let line = "";
    for (let i = 1; i <= length; i++) { //for the number of lines
  
        printStars(i);
  
      line+="\n"; // Add a newline after finishing printing the line and move to the next line in the outer for loop
    }
    return line + "\n";   // Print an additional newline "\n" if desired.
  }
  printTriangle(20);


