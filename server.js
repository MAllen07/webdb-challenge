const express = require("express");
const helmet = require("helmet");
const server = express();

// Import Routers
const projectsRouter = require("./projects/projects-router");
const actionsRouter = require("./actions/actions-router");

// Configure Middleware
server.use(helmet());
server.use(express.json());

// Use Routers
server.use("/api/projects", projectsRouter);
server.use("/api/actions", actionsRouter);

// Server Test
server.get("/", (req, res) => {
  res.send({ message: "Happy Friday" });
});

module.exports = server;
