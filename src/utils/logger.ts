import winston from "winston";

const myCustomLevels = {
  levels: {
    trace: 0,
    input: 1,
    verbose: 2,
    prompt: 3,
    debug: 4,
    info: 5,
    data: 6,
    help: 7,
    warn: 8,
    error: 9,
  },
  colors: {
    trace: "magenta",
    input: "grey",
    verbose: "cyan",
    prompt: "grey",
    debug: "blue",
    info: "green",
    data: "grey",
    help: "cyan",
    warn: "yellow",
    error: "red",
  },
};

const logger = winston.createLogger({
  levels: myCustomLevels.levels,
  format: winston.format.combine(
    winston.format.colorize(),
    winston.format.simple()
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      prettyPrint: true,
      level: "info",
      silent: false,
      colorize: true,
      timestamp: true,
      filename: "./nKindler.log",
      maxsize: 40000,
      maxFiles: 10,
      json: false,
    }),
  ],
});

winston.addColors(myCustomLevels.colors);

export default logger;
