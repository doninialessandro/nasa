import { Application } from "../../deps.ts";
import { planetsAPI, welcomeAPI } from "../components/index.ts";

const routes = (app: Application) => {
  const getWelcome = welcomeAPI("/welcome").getWelcome();
  const getPlanets = planetsAPI("/planets").getPlanets();

  app.use(getWelcome.routes());
  app.use(getWelcome.allowedMethods());

  app.use(getPlanets.routes());
  app.use(getPlanets.allowedMethods());
};

export default routes;
