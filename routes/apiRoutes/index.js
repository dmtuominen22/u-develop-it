const express = require('express');
const router = express.Router();

router.use(require('./candidateRoutes'));
router.use(require('./partyroutes'));





module.expoirts = router;