// const server = Bun.serve({
//   port: 3000,
//   fetch(request) {
//     return new Response("Welcome to Bun!");
//   },
// });

const port = process.env.PORT || 5000;

const server = Bun.serve({
  port: port || 5000,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname === "/") return new Response("Home page!");
    if (url.pathname === "/blog") return new Response("Blog!");
    return new Response("404!");
  },
});
console.log(port);

console.log(`Listening on localhost:${server.port}`);
