module.exports.home=function(req,res){
    return res.render('home',{
        title:"shoping Cart"
    }
    );
}
module.exports.signup=function(req,res){
    return res.render('signup',{
        title:"sign up"
    }
    );
}
module.exports.signin=function(req,res){
    return res.render('signin',{
        title:"sign in"
    }
    );
}