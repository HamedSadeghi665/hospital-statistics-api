const express = require("express");
const auth = require("../routers/auth");
const filemanager = require("../routers/file-manager");
const pages = require("../routers/global/pages");
const accesses = require("../routers/global/accesses");
//------
const settingsRoutes = require("./settings-routes");
//------

module.exports = function (app) {
  app.use(express.json());

  //------
  app.use("/api/auth", auth);
  app.use("/api/filemanager", filemanager);
  app.use("/api/global/pages", pages);
  app.use("/api/global/accesses", accesses);
  //------
  settingsRoutes(app);
  //------
  let dir = "./uploaded-files/";
  app.use("/static/", express.static(dir));
};
