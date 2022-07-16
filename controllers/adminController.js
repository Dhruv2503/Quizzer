const admin=require('../models/admin');
const test =require('../models/test');

module.exports.home=function(req,res){
    test.find({}).populate('testadmin').exec(function(err,tests){
        if(err){console.log(err);return;}
        return res.render('adminHome',{
            tests:tests
        });
    });
}

module.exports.profile = function(req, res){
    admin.findById(req.params.id).populate('alltest').exec(function(err,user){
        return res.render('user-profile',{
            user:user
        })
    })

}