// Version: 1.0.2
// Serial: XYZA9900

const PDF = require('../../models/pdfModel');

exports.getAllPDFs = async (req, res) => {
    try {
        const pdfs = await PDF.find();
        res.send(pdfs);
    } catch (error) {
        res.status(500).send({ error: 'Failed to fetch PDFs' });
    }
};
