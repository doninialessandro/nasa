import { Router } from "../../../deps.ts";
import planetsController from "./planetsController.ts";

const router = new Router();

const planetsAPI = (baseRoute: string) => {
  const getPlanets = () =>
    router.get(
      `${baseRoute}`,
      planetsController().getPlanets,
    );

  return {
    getPlanets,
  };
};

export default planetsAPI;
