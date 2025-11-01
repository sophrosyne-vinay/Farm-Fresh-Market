const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  complaint: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Complaint', complaintSchema);
