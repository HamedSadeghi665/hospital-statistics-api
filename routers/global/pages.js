const express = require("express");
const auth = require("../../middlewares/auth");
const router = express.Router();
const { selectQuery } = require("../../startup/db");

router.get("/accessiblePageCategories", auth, async (req, res) => {
  const { MemberID } = req.user;

  let result = await selectQuery(
    `EXEC StatisticAPI.GetMemberAccessiblePageCategories ${MemberID}`
  );

  result = result.recordset;

  res.send(result);
});

router.get("/accessiblePages/:categoryID", auth, async (req, res) => {
  const { MemberID } = req.user;

  let result = await selectQuery(
    `EXEC StatisticAPI.GetMemberAccessiblePages ${MemberID}, ${req.params.categoryID}`
  );

  result = result.recordset;

  res.send(result);
});

router.get("/accessiblePages", auth, async (req, res) => {
  const { MemberID } = req.user;

  let result = await selectQuery(
    `EXEC StatisticAPI.GetMemberAccessiblePages ${MemberID}, null`
  );

  result = result.recordset;

  res.send(result);
});


module.exports = router;
