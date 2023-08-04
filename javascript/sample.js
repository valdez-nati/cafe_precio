function calc() {
  const price = document.getElementById("product").value;
  const number = document.getElementById("number").value;
  window.alert(`${price}círculoPero${number}個。小計Es${price + number}círculoes`);
  // Añada lo siguiente para confirmar
  console.log(typeof(price));
  console.log(typeof(number));
}