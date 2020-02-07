const router = require("express").Router();
const appointmentsRoute = require('./appointments');
const postsRoute = require('./posts');
const accountsRoute = require('./accounts');

router.use('/appts',appointmentsRoute);
router.use('/posts',postsRoute);
router.use('/accounts',accountsRoute);

module.exports = router;