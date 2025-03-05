function sumarLento(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
    }, 10);
  });
}

function sumarRapido(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
    }, 10);
  });
}

function mostrarSuperRapido() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Se mostró súper rápido");
    }, 10);
  });
}

Promise.race([sumarLento(5), sumarRapido(7), mostrarSuperRapido()])
  .then(console.log)
  .catch(console.log);
