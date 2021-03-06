const provinces = require("../routers/settings/basic-info/provinces");
const cities = require("../routers/settings/basic-info/cities");
const expertises = require("../routers/settings/basic-info/expertises");
const sections = require("../routers/settings/basic-info/sections");
const sectionActiveBeds = require("../routers/settings/basic-info/section-active-beds");
const generalSections = require("../routers/settings/basic-info/general-sections");
const generalSectionParts = require("../routers/settings/basic-info/general-section-parts");
//------
const pageAccesses = require("../routers/settings/accesses/page-accesses");
//------
const members = require("../routers/settings/users-info/members");
const doctors = require("../routers/settings/users-info/doctors");
const sectionExperts = require("../routers/settings/users-info/section-experts");
//------
const dailyForms = require("../routers/settings/main-info/daily-forms");
const birthForms = require("../routers/settings/main-info/birth-forms");
const monthlyForms = require("../routers/settings/main-info/monthly-forms");
const deathForms = require("../routers/settings/main-info/death-forms");
//------

module.exports = function (app) {
  app.use("/api/settings/users-info/members", members);
  app.use("/api/settings/users-info/doctors", doctors);
  app.use("/api/settings/users-info/section-experts", sectionExperts);
  //------
  app.use("/api/settings/basic-info/provinces", provinces);
  app.use("/api/settings/basic-info/cities", cities);
  app.use("/api/settings/basic-info/expertises", expertises);
  app.use("/api/settings/basic-info/sections", sections);
  app.use("/api/settings/basic-info/section-active-beds", sectionActiveBeds);
  app.use("/api/settings/basic-info/general-sections", generalSections);
  app.use("/api/settings/basic-info/general-section-parts", generalSectionParts);
  //------
  app.use("/api/settings/main-info/daily-forms", dailyForms);
  app.use("/api/settings/main-info/birth-forms", birthForms);
  app.use("/api/settings/main-info/monthly-forms", monthlyForms);
  app.use("/api/settings/main-info/death-forms", deathForms);
  //------
  app.use("/api/settings/accesses/page-accesses", pageAccesses);
};
