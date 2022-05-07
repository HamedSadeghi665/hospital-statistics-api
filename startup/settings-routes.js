const provinces = require("../routers/settings/basic-info/provinces");
const cities = require("../routers/settings/basic-info/cities");
const expertises = require("../routers/settings/basic-info/expertises");
//------
const pageAccesses = require("../routers/settings/accesses/page-accesses");
//------
const members = require("../routers/settings/users-info/members");
//------

module.exports = function (app) {
  app.use("/api/settings/basic-info/provinces", provinces);
  app.use("/api/settings/basic-info/cities", cities);
  app.use("/api/settings/basic-info/expertises", expertises);
  //------
  app.use("/api/settings/accesses/page-accesses", pageAccesses);
  //------
  app.use("/api/settings/users-info/members", members);
  //------
};
