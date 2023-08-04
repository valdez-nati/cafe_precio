//document.getElementById("product") se utiliza para recuperar el elemento con id="product"
// Aquí colocaremos las funciones add() y calc()
const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let compra = [];

function add() {
  const selectedProductIndex = priceElement.selectedIndex;
  const selectedProduct = priceElement.options[selectedProductIndex];

  if (selectedProduct.value === "0") {
    alert("Por favor seleccione un producto válido.");
    return;
  }

  const price = parseInt(selectedProduct.value);
  const number = parseInt(numberElement.value);

  let newCompra = {
    name: selectedProduct.text,
    price: price,
    number: number,
  };

  compra.push(newCompra);
  alert("Producto agregado correctamente.");
}

function calc() {
  
  let sum = 0;
  let nombre= '';
  let postage;
  for (let i = 0; i < compra.length; i++) {
    console.log(compra[i])
    sum += compra[i].price * compra[i].number;
    nombre+=  compra[i].number+' - '+compra[i].name+'  |  '

    console.log(nombre)
  }

  if (sum === 0 || sum >= 3000) {
    postage = 0;
  } else if (sum < 2000) {
    postage = 500;
  } else {
    postage = 250;
  }

  let totalYenes = sum + postage;

  alert(`Productos ${nombre} Yenes. Envio: ${postage} Yenes. Subtotal: ${sum} Yenes. Total: ${totalYenes} Yenes.`);
  compra = [];

  priceElement.selectedIndex = 0;
  numberElement.value = "";
}



