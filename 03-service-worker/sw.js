// Ciclo de vida del SW

// Cuando el SW se instala
self.addEventListener("install", (event) => {
  console.log("SW: Instalando SW");

  const instalacion = new Promise((resolve) => {
    setTimeout(() => {
      console.log("SW: Instalaciones terminadas");
      self.skipWaiting();
      resolve();
    }, 1);
  });

  event.waitUntil(instalacion);
});

// Cuando el SW tome el control de la aplicación
self.addEventListener("activate", (event) => {
  console.log("SW2: Activo y listo para controlar la aplicación");
});

// FETCH: Manejo de peticiones Http y estrategias del caché
self.addEventListener("fetch", (event) => {
  // console.log("SW: ", event.request.url);
  // if (event.request.url.includes("https://reqres.in/")) {
  //   const response = new Response(
  //     `
  //     {"ok": false, "message": "Mensaje"}
  //     `,
  //     {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   event.respondWith(response);
  // }
});

// SYNC: Recuperamos la conexión a internet
self.addEventListener("sync", (event) => {
  console.log("Tenemos conexión!!!");
  console.log(event);
  console.log(event.tag);
});

// PUSH: Manejar las notificaciones push
self.addEventListener("push", (event) => {
  console.log("Notificación recibida");
});
