

const button = () => {
  const productsFile = document.getElementById("product");
  const quntiytFile = document.getElementById("Quantity");

  const product = productsFile.value;
  const quantity = quntiytFile.value;
  productsFile.value = "";
  quntiytFile.value = "";
  console.log(product, quantity);
//   call korte hobe na hoy show hobe na
  showDisplay(product, quantity);
};
let = Numbers =0;
const showDisplay = (product, quantity) =>{
    const ul = document.getElementById('product-container');
    Numbers = Numbers + 1;
    const li = document.createElement("li");
    li.innerText = `${product} ${quantity}`;
    ul.appendChild(li);
}