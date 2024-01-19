let numeroSecreto = 2;
//inicio la variable
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroSecreto != numeroUsuario) {
  numeroUsuario = prompt("Me indicas un número entre 1 y 10:");

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es:  ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número es menor");
    } else {
      alert("El número secreto es mayor");
    }
    //formas de sumar 1, la ultima la mejor
    //intentos = intentos + 1;
    //intentos +=1;
    intentos++;
    //palabraVeces = 'veces';
    if (intentos > maximosIntentos) {
      alert(`Llegaste al nùmero màximo de ${maximosIntentos} intentos`);

      break;
    }
  }
}

