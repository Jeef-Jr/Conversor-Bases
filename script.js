function converter() {
  // recebendo número em decimal
  let number = document.getElementById("valor").value;

  // Convertendo para as bases binária, octal, hexadecimal
  let binary = Number(number).toString(2);
  let octal = Number(number).toString(8);
  let hexa = Number(number).toString(16);
}
