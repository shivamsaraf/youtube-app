const express=require('express');

const router=express.Router();


//login page
router.get('/login',(req,res)=>{
	res.render('login')
})

//register page
router.get('/register',(req,res)=>{
	res.render('register')
})

//register handle
router.post('/register',(req,res)=>{
	const {name,email,password,password2}=req.body
	let errors=[];

	if(!name||!email||!password||!password2){
		errors.push({msg:'fill all'});
	}
	if(password!==password2){
		errors.push({msg:'passwords dont match'});
	}
	if(password.length<6){
		errors.push({msg:'should be at least 6 char'});
	}

	if(errors.length>0){
		res.render('register',{
			errors,
			email,
			password,
			password2
		});
	}else{
		res.send('badhiyaa');
	}
});



module.exports=router;