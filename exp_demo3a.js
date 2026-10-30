var express =require('express');
var router=express.Router();
router.get('/home',function (req,res){
    res.send("hello world!");
});
router.post('/home',function (req,res){
    res.send("this is home page hello world!");
});
module.exports=router;
