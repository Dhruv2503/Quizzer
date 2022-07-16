const express = require('express');
const passport=require('passport');

const router = express.Router();
const testController = require('../controllers/test_controller');

router.get('/temp',passport.checkAuthentication ,testController.temp);
router.get('/create/',testController.create);

module.exports=router