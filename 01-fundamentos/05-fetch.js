// "https://reqres.in/api/users"

fetch("https://www.wikipedia.org/")
  .then((resp) => resp.text())
  .then((html) => {
    document.open();
    document.write(html);
    document.close();
  });
