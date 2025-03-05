const request = new XMLHttpRequest();

request.open("GET", "https://reqres.in/api/users", true);
request.send(null);
request.onreadystatechange = function (state) {
  if (request.readyState === 4) {
    const response = request.response;
    const responseObj = JSON.parse(response);
    console.log(responseObj);
  }
};
