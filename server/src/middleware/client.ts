import { Application, send } from "../../deps.ts";

const client = (app: Application) => {
  app.use(async (ctx) => {
    const filePath = ctx.request.url.pathname;
    const fileWithList = [
      "/index.html",
      "/assets/images/favicon.png",
      "/assets/videos/space.mp4",
      "/javascripts/script.js",
      "/stylesheets/style.css",
    ];
    if (fileWithList.includes(filePath)) {
      await send(ctx, filePath, {
        root: `${Deno.cwd}/../../client/public`,
      });
    }
  });
};

export default client;
