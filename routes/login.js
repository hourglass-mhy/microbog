var express = require('express');
var router = express.Router();
var loginHandler = require("../models/login")

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login')
});

//处理用户登录提交的信息
//连接数据库,查询用户是否存在
router.post('/',function (req,res,next) {
    console.log(req.body)
    var body = req.body;
    var query = {
        username: body.username,
        password: body.password,
    }
    loginHandler.getUserInfo(query,function (err,docs) {
        if (docs.length > 0 ) { //跳转到说说发表页面
            res.send("<script charset='utf-8'  type='text/javascript' >alert('登录成功');window.location.href='/say';</script>")
        } else {
            res.send("<script charset='utf-8'  type='text/javascript' >alert('用户名或者密码不正确');window.location.href='/login';</script>")
        }
    })
})

module.exports = router;