const express=require('express');
const expressLayouts=require('express-ejs-layouts');
const mongoose=require('mongoose');

const app=express();

//db connection

const db=require('./config/keys').MongoURI;

// connect to mongo
mongoose.connect(db,{useNewUrlParser:true})
  .then(()=>console.log('mongoose connected'))
  .catch(err=>console.log(err));



//ejs
app.use(expressLayouts);
app.set('view engine','ejs');

//bodyparser
app.use(express.urlencoded({ extended:false })); 

//routes
app.use('/',require('./routes/index'));
app.use('/users',require('./routes/users'));

const PORT=process.env.PORT||5000;

app.listen(PORT,console.log(`Server on ${PORT}`));