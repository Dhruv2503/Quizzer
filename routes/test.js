const express = require('express');
const passport=require('passport');

const router = express.Router();
const testController = require('../controllers/test_controller');


router.post('/create',testController.create);
router.post('/addquestion',testController.addquestion)
router.post("/submit",testController.submit)
router.get('/:id',testController.givetest);
module.exports=router