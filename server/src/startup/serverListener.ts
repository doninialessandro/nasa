import { Application } from "../../deps.ts";

export const serverListener = async (app: Application, port: number) => {
  console.log(`🚀 Oak: App listening on port ${port}`);
  await app.listen({
    port: port,
  });
};
