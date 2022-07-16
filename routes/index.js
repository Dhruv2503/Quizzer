const express = require('express');
const passport=require('passport');

const router = express.Router();
const homeController = require('../controllers/home_controller');

router.get('/', homeController.home);
router.get('/:id',homeController.givetest);
router.get('/sign-in',homeController.signIn);
router.get('/sign-up',homeController.signUp);
router.post('/create',homeController.create);
router.get('/sign-out',homeController.destroySession);
router.post('/createSession', passport.authenticate(
    'local',
    {failureRedirect: '/user-sign-in'},
), homeController.createSession);

router.use('/admin', require('./admin'));


module.exports=router;