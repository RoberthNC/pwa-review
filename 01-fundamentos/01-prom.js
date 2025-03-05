function sumarUno(numero) {
  return new Promise((resolve, reject) => {
    if (numero >= 7) {
      reject("El número es muy alto");
    }
    setTimeout(() => {
      resolve(numero + 1);
    }, 800);
  });
}

sumarUno(8).then(sumarUno).then(sumarUno).then(console.log).catch(console.log);
