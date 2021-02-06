import { Application, Router } from "../../deps.ts";
import { launchesAPI, planetsAPI, welcomeAPI } from "../components/index.ts";

const routes = (app: Application) => {
  const router = new Router();

  const welcome = welcomeAPI("/welcome", router);
  const planets = planetsAPI("/planets", router);
  const launches = launchesAPI("/launches", router);

  app.use(welcome.routes());
  app.use(planets.routes());
  app.use(launches.routes());

  app.use(router.allowedMethods());
};

export default routes;
