const Problem = require("../Models/problems")

const createProblem = async(req,res)=>{
   const {title,description,inputFormat,outputFormat,constraints,testCases} = req.body
   const problem = new Problem ({title,description,inputFormat,outputFormat,constraints,testCases})
    await problem.save()
    console.log(problem)
    res.status(201).json('problem created successfully')
}

module.exports = createProblem