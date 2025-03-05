// "https://reqres.in/api/users"

let usuario = {
  nombre: "Clara",
  edad: 26,
};

const formData = new FormData();

formData.append("nombre", usuario.nombre);
formData.append("edad", usuario.edad);

fetch("https://reqres.in/api/users", {
  method: "POST",
  body: formData,
})
  .then((resp) => resp.json())
  .then(console.log)
  .catch(console.error);
