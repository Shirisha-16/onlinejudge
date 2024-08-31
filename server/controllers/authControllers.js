const User = require ('../Models/user')
const {hashPassword, comparePassword} = require('../helpers/auth')

const test = (req,res)=>{
    res.json('test is working')
}
const registerUser = async(req,res)=>{
   try{
     const {firstName, lastName, email, password} = req.body;
     if(!(firstName&&lastName)){
      return res.json({
        error:'enter the required details'
      })
     }
     if(!password || password<6){
      return res.json({
        error:'password should have atleast 6 characters'
      })
     }
     const exist = await User.findOne({email})
     if(exist){
        res.json({
          error:'email already exists'
        })
     }
     const hashedPassword = await hashPassword(password)
     const user = await User.create({
      firstName,
      lastName,
      email,
      password:hashedPassword,
     })
     return res.json(user)
   }catch(error){
     console.log(error)
   }
}

const loginUser = async(req,res)=>{
 try {
   const {email,password} = req.body
   const user = await User.findOne({email});
   if(!user){
    return res.json({
      error:"user not exist"
    })
   }
   const match = await comparePassword(password,user.password)
   if(match){
   res.json('password matches')
   } 
   if(!match){
    res.json({
      error:"password not matches"
    })
   }
 } catch (error) {
  res.json({
    error:"Password not matched"
  })
 }
}

module.exports={
    test,
    registerUser,
    loginUser
}