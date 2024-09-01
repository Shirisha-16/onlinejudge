const express = require ('express')
const createProblem = require('../controllers/problemControllers')
const cors = require('cors');
const problemRouter = express.Router()

problemRouter.use(
    cors({
        credentials : true,
        origin:'http://localhost:5173'
    })
)
problemRouter.post('/page/problems',createProblem)
 
module.exports = problemRouter
