let shoppingList = [];
let item;
while (true){
    item = prompt("Enter a item: ");
    if (item === 'done')
    {
        break;
    }
    shoppingList.push(item);
    
}
console.log(shoppingList);