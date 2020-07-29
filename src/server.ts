import app from "./app";
import logger from "./utils/logger";

app.listen(3333);

logger.log({
  level: "info",
  message: "Servidor Inicializado!!!",
});
