require("regenerator-runtime");
require("dotenv/config");

import app, { expressApp } from "./lib/app";
import startApollo from "./lib/apollo";
import { Application } from "express";

const PORT = process.env.PORT || 4000;

startApollo(app, expressApp as Application).then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`);
  });
});
