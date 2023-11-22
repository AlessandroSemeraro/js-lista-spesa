const shoppingList = ['pane','acqua','uova','latte','carne','cioccolato','birra'];

const ulShoppingList = document.getElementById('lista-spesa');

let index= 0

while (index < shoppingList.length){
    const listItem = document.createElement('li');
    listItem.append(shoppingList[index]);
    ulShoppingList.appendChild(listItem);
    index++;
}




