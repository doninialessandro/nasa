import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";
import { config as env } from "https://deno.land/x/dotenv@v2.0.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "src/mod.ts",
      desc: "run my app.ts file",
      allow: ["env", "net", "read", "write"],
      env: env(),
    },
  },
};

export default config;
