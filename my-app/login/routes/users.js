const express=require('express');
const bcrypt=require('bcryptjs');
const router=express.Router();


const User=require('../model/User');


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
			name,
			email
		});
	}else{
		//validation passed
		User.findOne({email:email})
		.then(user=>{
			if(user){
				//user exist
				errors.push({msg:'email already registered'});
				res.render('register',{
				errors,
				email
		      });
			} else {
				const newUser = new User({
					name,
					email,
					password
				});
				//hash pwd
				bcrypt.genSalt(10,(err,salt)=>{
					bcrypt.hash(newUser.password,salt,(err,hash)=>{
						if(err)throw err;
						//set new pwd to hash
						newUser.password=hash;
						//save user
						newUser.save()
						 .then(user=>{
						 	req.flash('success_msg','you are now registred');
						 	res.redirect('/users/login');
						 })
						 .catch(err=>console.log(err));
					})
				})

			}
		});
	}
});



module.exports=router;