let Grocery_1;
let Grocery_2;
let Grocery_3;


function calculateAmount() {
    Grocery_1 = parseFloat(document.getElementById('Grocery_1').value);
    Grocery_2 = parseFloat(document.getElementById('Grocery_2').value);
    Grocery_3 = parseFloat(document.getElementById('Grocery_2').value);


    let totalAmount = Grocery_1+Grocery_2+Grocery_3;
    document.getElementById('result').innerText = `The total amount is: $ ${totalAmount}`;
}