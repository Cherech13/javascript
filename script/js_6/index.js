let shopping = [
    { product: 'apple', quantity: '1', buyer: '1', price: '10' },
    { product: 'lime', quantity: '3', buyer: '1', price: '20' },
    { product: 'orange', quantity: '5', buyer: '0', price: '13' },
    { product: 'banano', quantity: '4', buyer: '1', price: '18' },
    { product: 'tomato', quantity: '4', buyer: '1', price: '8' },
    { product: 'paper', quantity: '6', buyer: '0', price: '10' },
]
//1.1

shopping.sort(function (a) {
    if (a.buyer == 1) {
        return 1;
    }
    else (a.buyer == 0)
        return -1;   
}
);

//1.2

    let new_product = prompt('Введите название купленого продукта');
    let new_quantity = prompt('Введите количество купленого продукта');
    let new_price = prompt('Введите цену купленого продукта');
let new_shopinglist = shopping.concat([new_product, new_quantity, 1, new_price])
alert(new_shopinglist);
console.log(new_shopinglist);
// Если сделать через метод "concat" то тогда все введенные данные попадают в массив но не пишуться в объект

let shoplist = shopping.map((item, index) => ({ ...item, ...new_shopinglist[index] }));
// а эта функция тоже не преобразовывает массив в объект и на выходе дает начальный массив
console.log(shoplist);




//1.3
const not_buyer = shopping.filter(shopping => shopping.buyer == 0);
console.log(not_buyer);