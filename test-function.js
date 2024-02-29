

// function calculate() {
//     const a = 10
//     const b = 15
    
//     console.log(a + b)
// }


// calculate()



/* Мы имитируем нажатие на какую-то кнопку и в этот момент мы 
говорим что мы нажали на (товар А), теперь нам надо добавить 
этот продукт в корзину 

addProduct - Функциия которая добовляет товар в корзину
Сама наша функция должна выполнить каких-то три действия

1)Проверить Товар, доступен ли он - поэтому создаем еще одну функцию
называем ее (isProductAvailable)

2)Не забанен ли пользователь - функция (isBlocked)

3)Будет проверят есть ли у нас возможность доставить товар в данный регион 
функция (possibleToDelivery)

И для того чтобы добавить товар мы должны проверить а есть ли этот товар в наличии
То есть мы внутри одной функции должны вызвать вторую 
*/ 

// // Click 1
// console.log('Нажали на товар А')
// addProduct()

// // Click 2
// console.log('Нажали на товар Б')
// addProduct()

// // Click 3
// console.log('Нажали на товар В')
// addProduct()


// function addProduct() {
//     isProductAvailable()
//     isBlocked()
//     possibleToDelivery()
// }


// function isProductAvailable() {

// }



// function isBlocked() {

// }



// function possibleToDelivery() {

// }


// function calculate() {
//     const a = 10
//     const b = 15

//     const result = a + b
//     return result
// }

// const sum = calculate()


// console.log(sum)


// const result = addProduct();

// console.log(result);


// function addProduct() {
//     const isAvailable = isProductAvailable();


//     if (!isAvailable) {
//         console.log('Товара нет в наличие');
//         return;
//     }

//         const blocked = isBlocked();

//         if (blocked) {
//             console.log('Вы заблокированы');
//             return;
//         }

//             const possible = possibleToDelivery();

//             if (!possible) {
//                 console.log('Нет возможности доставить');
//                 return;
//             }



//             console.log('Товар добавлен в корзину');

//             return 'Все хорошо';
// }





// const calculate = () => {
//     const a = 10;
//     const b = 15;

//     return a + b;
// }

// console.log(calculate())



























