// Math.Random por 10 por que es el màximo de num que quiero
//le sumo 1 al final, para evitar el 0 e incluir el 10. sino iba a ir del 0 al 9
let numMaximo = parseInt(prompt('Ingrese un nùmero màximo'))
let numeroSecreto =Math.floor(Math.random()*numMaximo) + 1;
let numeroUsuario = 0;
let intentos = 1;
let maximosIntentos = 6;




while (numeroSecreto != numeroUsuario) {
  numeroUsuario = parseInt(prompt(`Me indicas un nùmero entre 1 y ${numMaximo}`));

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(`Acertaste, el número es:  ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`);
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El número es menor");
    } else {
      alert("El número secreto es mayor");
    }
    intentos++;

    if (intentos > maximosIntentos) {
      alert(`Llegaste al nùmero màximo de ${maximosIntentos} intentos`);

      break;
    }
  }
}

