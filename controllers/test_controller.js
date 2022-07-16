const admin=require('../models/admin');
const test=require('../models/test');

module.exports.temp=function(req,res){
    return res.redirect(`/admin/test/create/?admin=${req.body.admin}&testname=${req.body.testname}`)
}
module.exports.create=function(req,res){
    test.findOne({testname:req.query.testname},function(err,test){
        if(err){ console.log("error in test creation"); return}
        if(test){
            return res.redirect('back');
        }else{
            test.create({
                testadmin: req.query.admin,
                testname: req.query.testname
            },function(err,newtest){
                if(err){ console.log("error in test creation"); return}
                return res.render('Create-test-form',{
                    test: newtest.id
                })
            })
        }
    });
}