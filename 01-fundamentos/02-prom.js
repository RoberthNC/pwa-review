function sumarLento(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
    }, 800);
  });
}

function sumarRapido(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(numero + 1);
    }, 300);
  });
}

Promise.all([sumarLento(5), sumarRapido(7)])
  .then(console.log)
  .catch(console.log);
