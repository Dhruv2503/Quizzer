const express = require('express');
const passport=require('passport');

const router = express.Router();
const adminController = require('../controllers/adminController');
const homeController=require('../controllers/home_controller')

router.get('/',adminController.home);
router.get(`/profile/:id`, passport.checkAuthentication,adminController.profile);

router.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));
router.get('/auth/google/callback', passport.authenticate('google', {failureRedirect: '/'}), homeController.createSession);

router.use('/test',require('./test'));


module.exports=router;