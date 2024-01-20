const button = document.getElementById("myButton");

button.addEventListener("click", () => {
  const name = prompt("Ingresa tu nombre:");
  alert(`Hola, ${name}!`);
});