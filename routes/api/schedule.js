const express = require('express');
const router = express.Router();
const scheduleCtrl = require('../../controllers/schedule');

// router.get('/', scheduleCtrl.highScores);

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.use(require('../../config/auth'));
// router.get('/', scheduleCtrl.index);
// router.get('/:id', scheduleCtrl.show);
router.post('/', checkAuth, scheduleCtrl.create);
// router.delete('/:id', puppiesCtrl.delete);
// router.put('/:id', puppiesCtrl.update);


/*----- Helper Functions -----*/
function checkAuth(req, res, next) {
    if (req.user) return next();
    return res.status(401).json({ msg: 'Not Authorized' });
}

module.exports = router;