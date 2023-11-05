const router = require('express').Router();

const apiRoutes = require('./api');
const shireRoutes = require('./shire-routes.js');

router.use('/', shireRoutes);
router.use('/api', apiRoutes);

module.exports = router;
