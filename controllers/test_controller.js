const admin=require('../models/admin');
const test=require('../models/test');
const question=require('../models/question');


module.exports.create=function(req,res){
    test.findOne({testname:req.body.name},function(err,createdtest){
        if(err){ console.log("error in test creation"); return}
        if(createdtest){
            return res.redirect('back');
        }else{
            test.create({
                testadmin: req.body.testuserid,
                testname: req.body.name
            },function(err,newtest){
                if(err){ console.log(err); return}
                console.log("YYYYYY");
                console.log(req.body);
                admin.findById(req.body.testuserid,function(err,user){
                    if(err){console.log("NOT found user"); return}
                    console.log("User found");
                    if(user){
                        console.log("not able to push")
                        user.alltest.push(newtest.id);
                        user.save();
                        return res.render('create-test-form',{
                            testid: newtest.id,
                            questions: req.body.questionNo
                        })
                    }else{
                        console.log("AAAAAAAAAAAAAAAAAAAAAAa");
                    }
                });
                
            })
        }
    });
}

module.exports.addquestion=function(req,res){
    
    for(let i=0;i<req.body.question.length;i++){

    var opt=[];
    opt.push(req.body.option1[i]);
    opt.push(req.body.option2[i]);
    opt.push(req.body.option3[i]);
    opt.push(req.body.option4[i]);

    question.create({
        questionHead:req.body.question[i],
        answer:req.body.correctoption[i],
        points:req.body.points[i],
        options:opt
    },function(err,finalquestion){
        if(err){console.log(err); return}
        test.findById(req.body.testid,function(err,test){
            if(err){console.log(err); return}
            test.questions.push(finalquestion.id);
            test.save();
        });
    });
    }

    return res.redirect('/admin');
}
