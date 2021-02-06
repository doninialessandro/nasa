import { Application } from "../../deps.ts";
import { planetsAPI, welcomeAPI } from "../components/index.ts";

const routes = (app: Application) => {
  app.use(welcomeAPI("/welcome").getWelcome().routes());
  app.use(planetsAPI("/planets").getPlanets().routes());
};

export default routes;
