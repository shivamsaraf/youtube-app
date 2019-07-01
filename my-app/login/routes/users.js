const express=require('express');

const router=express.Router();

router.get('/login',(req,res)=>{
	res.send('Login')
})

router.get('/Register',(req,res)=>{
	res.send('Reguster')
})



module.exports=router;