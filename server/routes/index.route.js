import express from 'express';
const router = express.Router(); // eslint-disable-line new-cap

router.use('/thing', require('../api/thing'));
router.use('/users', require('../api/user'));

export default router;
 
