// "https://reqres.in/api/users"

fetch(`https://reqres.in/api/users/10`)
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      console.log("No existe el usuario 1000");
    }
  })
  .then(console.log)
  .catch((error) => {
    console.log("Error en la petición");
    console.log(error);
  });
