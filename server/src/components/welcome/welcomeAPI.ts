import { Router } from "../../../deps.ts";
import welcomeControllers from "./welcomeController.ts";

const router = new Router();

const welcomeAPI = (baseRoute: string) => {
  const getWelcome = () =>
    router.get(
      `${baseRoute}`,
      welcomeControllers().getWelcome,
    );

  return {
    getWelcome,
  };
};

export default welcomeAPI;
