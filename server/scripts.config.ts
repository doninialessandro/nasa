import { DenonConfig } from "https://deno.land/x/denon@2.4.7/mod.ts";
import { config as env } from "https://deno.land/x/dotenv@v2.0.0/mod.ts";

const config: DenonConfig = {
  scripts: {
    start: {
      cmd: "src/mod.ts",
      desc: "Run my mod.ts file",
      allow: ["env", "net", "read", "write"],
      env: env(),
    },
    test: {
      cmd: "deno test",
      desc: "Run my test",
    },
  },
};

export default config;
