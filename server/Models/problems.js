const mongoose= require('mongoose')
const {Schema} = mongoose

const ProblemSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    inputFormat: { type: String },
    outputFormat: { type: String },
    constraints: { type: String },
    testCases: [{ input: String, output: String }],
  });
  
 const Problem = mongoose.model('problem',ProblemSchema)
 module.exports = Problem;