// ITERATION 1

function updateSubtotal(product) {

  console.log('Calculating subtotal, yey!');



  let subTotal = product.querySelector('.subtotal span')
  const price = product.querySelector('.price span').innerHTML
  let quantity = product.querySelector('.quantity input').value

  let sum = price * quantity;

  subTotal.innerText = sum;

  return sum
}

function calculateAll() {
  // ITERATION 2

  let allProducts = document.querySelectorAll('.product')
  for (let product of allProducts){
  }
  //for (let i = 0; i < allProducts.length; i++){
  //updateSubtotal(allProducts[i])
  

  // ITERATION 3
  let total = 0
  for (let i =0; i < allProducts.length; i++){
    total += updateSubtotal(allProducts[i])
    document.querySelector('#total-value span').innerHTML = total
  }
  return total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  let product = document.querySelector('.product');
  updateSubtotal(product);

  calculateAll();
});
