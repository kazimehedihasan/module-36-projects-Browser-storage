let Numberss =0;

const button = () => {
  const productsFile = document.getElementById("product");
  const quntiytFile = document.getElementById("Quantity");
  const product = productsFile.value;
  const quantity = quntiytFile.value;
  productsFile.value = "";
  quntiytFile.value = "";
  // console.log(product, quantity);

//   call korte hobe na hoy show hobe na
  showDisplay(product, quantity);
  /*
   call korte hobe (saveProductToLocalStorage ) ke 
  na hole localStorage a gabe pabe na
  */ 
  saveProductToLocalStorage(product, quantity);
};

const showDisplay = (product, quantity) =>{
    Numberss = Numberss +1;
    const ul = document.getElementById('product-container');
    const li = document.createElement("li");
    li.innerText = `${product} ${quantity}`;
    ul.appendChild(li);
}

// localStorage show korar code
const getStoredShoppingCart = (product) => {
  const storedCard = localStorage.getItem('card');
  let card = {};
  if (storedCard) {
    card = JSON.parse(storedCard)
  }
  return card;
}

const saveProductToLocalStorage  = (product, quantity) => {
const card = getStoredShoppingCart();
card[product] = quantity;
const cardStringiFird = JSON.stringify(card);
localStorage.setItem('card', cardStringiFird);
console.log(card);
} 
// wedside lode hole dekhabe 
displayProductsFromLocalStorage = () => {
  const savedCart = getStoredShoppingCart();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    console.log(product ,quantity);
    showDisplay(product, quantity);
  }
  console.log(savedCart);

}
displayProductsFromLocalStorage();
  
