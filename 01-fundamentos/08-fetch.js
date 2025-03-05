// "https://reqres.in/api/users"

let img = document.querySelector("img");

fetch("./superman.png")
  .then((resp) => resp.blob())
  .then((image) => {
    let imgPath = URL.createObjectURL(image);
    img.setAttribute("src", imgPath);
  });
