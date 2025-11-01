const Complaint = require('../models/Complaint');

// Controller to add a new complaint
exports.addComplaint = async (req, res) => {
  try {
    const { userId, complaint } = req.body;
    const newComplaint = new Complaint({ userId, complaint });
    await newComplaint.save();
    res.status(201).json({ success: true, message: 'Complaint added successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to add complaint' });
  }
};

// Controller to get all complaints
exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find();
    res.status(200).json({ success: true, complaints });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch complaints' });
  }
};
