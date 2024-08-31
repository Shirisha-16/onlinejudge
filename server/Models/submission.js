const mongoose= require('mongoose')
const {Schema} = mongoose
const SubmissionSchema = new Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    problemId: { type: mongoose.Schema.Types.ObjectId, ref: 'Problem', required: true },
    submissionCode: { type: String, required: true },
    status: { type: String, enum: ['Pending', 'Accepted', 'Rejected'], default: 'Pending' },
    createdAt: { type: Date, default: Date.now },
  });
  
const SubmissionModel = mongoose.model('submission',SubmissionSchema)
module.exports = SubmissionModel;