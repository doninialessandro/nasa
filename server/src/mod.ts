import { Application } from "../deps.ts";
import { serverListener } from "./startup/index.ts";
import { client, responseTime, routes } from "./middleware/index.ts";

const app = new Application();
const PORT = parseInt(Deno.env.get("PORT") || "5000", 10);

responseTime(app);
routes(app);
client(app);

if (import.meta.main) {
  serverListener(app, PORT);
}
