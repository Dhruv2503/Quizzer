const express = require('express');
const passport=require('passport');

const router = express.Router();
const testController = require('../controllers/test_controller');


router.post('/create',testController.create);
router.post('/addquestion',testController.addquestion);
router.post("/submit",testController.submit);
router.get('/:id',testController.givetest);
router.get('/summary/:id',passport.checkAuthentication,testController.summary);
router.get('/toggle/:id',passport.checkAuthentication,testController.toggle)
module.exports=router