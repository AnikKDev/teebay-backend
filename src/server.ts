import { expressMiddleware } from "@apollo/server/express4";
import app from "./app";
import createApolloServer from "./app/graphql";
import config from "./config";
import { logger } from "./utils/logger";

async function main() {
  // start gql server
  app.use(expressMiddleware(await createApolloServer()));
  app.listen(config.port, () =>
    logger.info("Starting gql server at port " + config.port)
  );
}

main();
