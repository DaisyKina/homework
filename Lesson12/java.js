let drinks = [
    {
        id: 1,
        name: 'Americano',
    },

    {
        id: 2,
        name: 'Latte',
    },
    
    {
        id: 3,
        name: 'Cappuchino',
    },

    {
        id: 4,
        name: 'Espresso',
    },
]
const olElement1 = document.getElementsByClassName('menuCoffee');
console.log('olEle,emt1:', olElement1);

let person = prompt("Please enter your new drink");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "So " + person + " will be added to your menu";
}