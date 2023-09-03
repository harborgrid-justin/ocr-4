// Version: 1.1.2
// Serial: UVWX1123

const mongoose = require('mongoose');

const pdfSchema = new mongoose.Schema({
    filename: {
        type: String,
        required: true
    },
    path: {
        type: String,
        required: true
    },
    extractedTextPath: {
        type: String
    },
    uploadedBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
});

const PDF = mongoose.model('PDF', pdfSchema);

module.exports = PDF;
