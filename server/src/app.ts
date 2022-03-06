import "reflect-metadata";
import { Server } from "./server/index";
import { env } from "config/globals";
import "module-alias/register"

// Startup
(async function main() {
  try {
    const port = +env.PORT;
    const app = await new Server().startServer();
    app.listen(port, () => {
      console.log(`🚀 Server ready at ${port}`);
    });
  } catch (err) {
      console.log(err);
  }
})();
