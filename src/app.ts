import express from "express";
import cors from "cors";
import mongoose from "mongoose";
var morgan = require("morgan");

import routes from "./routes";

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();

    this.middlewares();
    this.database();
    this.routes();
  }

  private middlewares(): void {
    this.express.use(morgan("dev"));
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database(): void {
    mongoose.connect(`mongodb+srv://bicicleta-api:JmMi6OnR1hxE7x9Y@bicicleta-cluster.gfx8h.mongodb.net/<dbname>?retryWrites=true&w=majority`, {
      useNewUrlParser: true,
    });
  }

  private routes(): void {
    this.express.use(routes);
  }
}

export default new App().express;
