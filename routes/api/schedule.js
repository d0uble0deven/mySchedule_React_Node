const express = require("express");
const router = express.Router();
const scheduleCtrl = require("../../controllers/schedule");

/*---------- Protected Routes ----------*/

// Process the token for only the routes below
router.use(require("../../config/auth"));

router.get("/", scheduleCtrl.index);
router.get("/:id", scheduleCtrl.show);
router.post("/", checkAuth, scheduleCtrl.create);
router.delete("/:id", scheduleCtrl.delete);
router.put("/:id", scheduleCtrl.update);

/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
  if (req.user) return next();
  return res.status(401).json({ msg: "Not Authorized" });
}

module.exports = router;
