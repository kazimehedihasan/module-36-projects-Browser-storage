let Numberss =0;

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

const showDisplay = (product, quantity) =>{
    Numberss = Numberss +1;
    const ul = document.getElementById('product-container');
    const li = document.createElement("li");
    li.innerText = `${product} ${quantity}`;
    ul.appendChild(li);
}
const getStoredShoppingCart = (product) => {
  const storedCard = localStorage.getItem('card');
  let card = {};
  if (storedCard) {
    card = JSON.parse(storedCard)
  }
  return card;
}



const saveProductToLocalStorage  = (product, quantity) => {

} 