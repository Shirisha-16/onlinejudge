const Problem = require("../Models/problems")

const createProblem = async(req,res)=>{
   const {title,description,inputFormat,outputFormat,constraints,testCases} = req.body
   const problem = new Problem ({title,description,inputFormat,outputFormat,constraints,testCases})
    
   try {
    await problem.save()
    res.status(201).json('problem created successfully')
   }
   catch(err){
    res.status(500).json(err)
    console.log(err.message)
   }
}

module.exports = createProblem